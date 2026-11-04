---
notion-bases: true
schema:
  - id: 주차
    name: 주차
    type: text
    visible: true
    width: 200
  - id: phase
    name: Phase
    type: select
    visible: true
    width: 140
    options:
      - value: Phase 1
      - value: Phase 2 (LMS)
      - value: Phase 3 (AMS)
  - id: 주제
    name: 주제
    type: text
    visible: true
    width: 200
  - id: 시작일
    name: 시작일
    type: text
    visible: true
    width: 200
  - id: 종료일
    name: 종료일
    type: text
    visible: true
    width: 200
  - id: 학습목표
    name: 학습목표
    type: text
    visible: true
    width: 200
  - id: 일가용시간
    name: 일가용시간
    type: number
    visible: true
    width: 140
  - id: 진척률
    name: 진척률
    type: number
    visible: true
    width: 140
  - id: 주간산출물
    name: 주간산출물
    type: text
    visible: true
    width: 200
  - id: tags
    name: Tags
    type: multiselect
    visible: true
    width: 140
    options:
      - value: sprint
views:
  - id: default
    type: table
    filters: []
    sorts: []
    hiddenColumns: []
    columnWidths:
      _title: 121
    pinnedColumnId:
---

> [!tip] Notion Bases
> This file is a database. Open it to see the table view.
