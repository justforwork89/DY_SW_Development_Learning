---
notion-bases: true
schema:
  - id: 날짜
    name: 날짜
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
    calendarDateField: 날짜
    calendarEndDateField: 종료일
  - id: default
    type: table
    filters: []
    sorts:
      - columnId: 날짜
        direction: asc
    hiddenColumns: []
    columnWidths: {}
    pinnedColumnId:
    name: 목록
---

> [!tip] Notion Bases
> This file is a database. Open it to see the table view.
