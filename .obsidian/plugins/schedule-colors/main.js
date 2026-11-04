/*
 * 일정 색상 (schedule-colors)
 * Calendar Bases 달력의 일정 카드를 노트 속성(구분 또는 색상)에 따라 색칠합니다.
 * - 노트에 `색상` 속성이 있으면 그 색을 우선 사용합니다. (예: 색상: "#e67e22" 또는 red)
 * - 없으면 `구분` 값에 맞는 색을 설정 화면의 표에서 찾습니다.
 */
const { Plugin, PluginSettingTab, Setting, TFile } = require("obsidian");

const DEFAULTS = {
  property: "구분",
  colors: {
    "수업": "#3b82f6",
    "회의": "#10b981",
    "마감": "#ef4444",
    "평가": "#f59e0b",
    "기타": "#8b5cf6",
  },
};

function readableText(color) {
  const c = document.createElement("canvas").getContext("2d");
  c.fillStyle = color;
  const hex = c.fillStyle; // normalised to #rrggbb when possible
  const m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  if (!m) return "#ffffff";
  const [r, g, b] = m.slice(1).map((x) => parseInt(x, 16));
  return 0.299 * r + 0.587 * g + 0.114 * b > 165 ? "#1f2937" : "#ffffff";
}

module.exports = class ScheduleColors extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULTS, await this.loadData());
    this.settings.colors = Object.assign({}, DEFAULTS.colors, this.settings.colors || {});
    this.addSettingTab(new ScheduleColorsTab(this.app, this));

    this.pending = false;
    this.observer = new MutationObserver(() => this.schedule());
    this.observer.observe(document.body, { childList: true, subtree: true });
    this.registerEvent(this.app.metadataCache.on("changed", () => this.schedule()));
    this.app.workspace.onLayoutReady(() => this.schedule());
  }

  onunload() {
    if (this.observer) this.observer.disconnect();
    document.querySelectorAll(".fc-event[data-schedule-color]").forEach((el) => {
      el.removeAttribute("data-schedule-color");
      el.style.removeProperty("background-color");
      el.style.removeProperty("border-color");
      el.style.removeProperty("color");
    });
  }

  schedule() {
    if (this.pending) return;
    this.pending = true;
    window.requestAnimationFrame(() => {
      this.pending = false;
      this.paintAll();
    });
  }

  colorFor(path) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof TFile)) return null;
    const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
    if (!fm) return null;
    if (fm["색상"]) return String(fm["색상"]).trim();
    const key = fm[this.settings.property];
    const value = Array.isArray(key) ? key[0] : key;
    if (value == null) return null;
    return this.settings.colors[String(value).trim()] || null;
  }

  paintAll() {
    document.querySelectorAll(".fc-event").forEach((el) => {
      const seg = el.fcSeg || (el.parentNode && el.parentNode.fcSeg);
      const path = seg && seg.eventRange && seg.eventRange.def && seg.eventRange.def.publicId;
      if (!path) return;
      const color = this.colorFor(path);
      const sig = color || "none";
      if (el.getAttribute("data-schedule-color") === sig) return;
      el.setAttribute("data-schedule-color", sig);
      if (color) {
        el.style.setProperty("background-color", color, "important");
        el.style.setProperty("border-color", color, "important");
        el.style.setProperty("color", readableText(color), "important");
      } else {
        el.style.removeProperty("background-color");
        el.style.removeProperty("border-color");
        el.style.removeProperty("color");
      }
    });
  }

  async save() {
    await this.saveData(this.settings);
    document.querySelectorAll(".fc-event[data-schedule-color]").forEach((el) =>
      el.removeAttribute("data-schedule-color")
    );
    this.schedule();
  }
};

class ScheduleColorsTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    const s = this.plugin.settings;
    containerEl.empty();
    containerEl.createEl("p", {
      text: "달력 일정 카드를 노트 속성 값에 따라 색칠합니다. 노트에 '색상' 속성이 있으면 그 색이 우선입니다.",
    });

    new Setting(containerEl)
      .setName("기준 속성")
      .setDesc("색을 나눌 속성 이름")
      .addText((t) =>
        t.setValue(s.property).onChange(async (v) => {
          s.property = v.trim() || "구분";
          await this.plugin.save();
        })
      );

    containerEl.createEl("h3", { text: "값별 색상" });
    Object.keys(s.colors).forEach((name) => {
      new Setting(containerEl)
        .setName(name)
        .addColorPicker((c) =>
          c.setValue(s.colors[name]).onChange(async (v) => {
            s.colors[name] = v;
            await this.plugin.save();
          })
        )
        .addExtraButton((b) =>
          b.setIcon("trash").setTooltip("삭제").onClick(async () => {
            delete s.colors[name];
            await this.plugin.save();
            this.display();
          })
        );
    });

    let newName = "";
    new Setting(containerEl)
      .setName("값 추가")
      .setDesc("예: 특강, 휴일")
      .addText((t) => t.setPlaceholder("값 이름").onChange((v) => (newName = v.trim())))
      .addButton((b) =>
        b.setButtonText("추가").onClick(async () => {
          if (!newName || s.colors[newName]) return;
          s.colors[newName] = "#64748b";
          await this.plugin.save();
          this.display();
        })
      );
  }
}
