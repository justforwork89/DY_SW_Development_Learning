---
notion-bases: true
schema:
  - id: 시작일
    name: 시작일
    type: date
    visible: true
    width: 140
  - id: 종료일
    name: 종료일
    type: date
    visible: true
    width: 140
  - id: 구분
    name: 구분
    type: select
    visible: true
    width: 120
    options:
      - value: 수업
      - value: 회의
      - value: 마감
      - value: 평가
      - value: 기타
  - id: 메모
    name: 메모
    type: text
    visible: true
    width: 260
views:
  - id: calendar
    type: calendar
    filters: []
    sorts: []
    hiddenColumns:
      - 메모
    columnWidths: {}
    pinnedColumnId:
    name: 달력
    calendarViewMode: month
    includeSubfolders: false
    calendarDateField: 시작일
    calendarEndDateField: 종료일
  - id: default
    type: table
    filters: []
    sorts:
      - columnId: 시작일
        direction: asc
    hiddenColumns: []
    columnWidths: {}
    pinnedColumnId:
    name: 목록
  - id: c8fa1cf6-c859-4f5c-8919-9f3cacd088bb
    type: timeline
    filters: []
    sorts: []
    hiddenColumns: []
    columnWidths: {}
    pinnedColumnId:
    name: Timeline
    timelineStartField: 시작일
    timelineEndField: 종료일
---

> [!tip] Notion Bases
> This file is a database. Open it to see the table view.
