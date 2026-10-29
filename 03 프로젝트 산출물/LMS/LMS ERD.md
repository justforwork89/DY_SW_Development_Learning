---
프로젝트: LMS
주차: "[[4주차]]"
상태: 예정
주요내용: 사용자, 교육과정, 수강신청, 과제
깃허브:
tags:
  - 산출물
---

# LMS ERD

## 1. 개요

- 대상: LMS 핵심 업무 (사용자 · 과정 · 수강신청 · 과제 · 첨부파일 · 공통코드)
- DBMS: Oracle / 명명 규칙: 테이블 `TB_` 접두어, 컬럼은 대문자 SNAKE\_CASE
- 작성 상태: 4주차 초안 (v0.1)

## 2. ERD (논리 모델)

```mermaid
erDiagram
    TB_USER ||--o{ TB_COURSE : "강사로 운영"
    TB_USER ||--o{ TB_ENROLL : "수강신청"
    TB_COURSE ||--o{ TB_ENROLL : "신청 받음"
    TB_COURSE ||--o{ TB_ASSIGNMENT : "과제 보유"
    TB_ASSIGNMENT ||--o{ TB_SUBMISSION : "제출 받음"
    TB_USER ||--o{ TB_SUBMISSION : "제출"
    TB_SUBMISSION ||--o{ TB_FILE : "첨부"
    TB_COMMON_CODE ||--o{ TB_COURSE : "상태 코드"
    TB_COMMON_CODE ||--o{ TB_ENROLL : "상태 코드"

    TB_USER {
    NUMBER USER_ID PK "사용자 ID (PK)"
    VARCHAR2 LOGIN_ID UK "로그인 아이디 (유일)"
    VARCHAR2 PASSWORD "비밀번호 (암호화 저장)"
    VARCHAR2 USER_NAME "사용자 이름"
    VARCHAR2 ROLE_CD "역할 코드 (학생/강사/관리자)"
    CHAR USE_YN "사용 여부 (Y/N)"
}
    TB_COURSE {
    NUMBER COURSE_ID PK "과정 ID (PK)"
    VARCHAR2 COURSE_NAME "과정명"
    NUMBER INSTRUCTOR_ID FK "담당 강사 ID (TB_USER)"
    DATE START_DATE "교육 시작일"
    DATE END_DATE "교육 종료일"
    NUMBER CAPACITY "정원"
    VARCHAR2 STATUS_CD FK "과정 상태 코드 (준비중/모집중/진행중/종료)"
}
    TB_ENROLL {
    NUMBER ENROLL_ID PK "수강신청 ID (PK)"
    NUMBER COURSE_ID FK "과정 ID (TB_COURSE)"
    NUMBER USER_ID FK "신청자(학생) ID (TB_USER)"
    VARCHAR2 STATUS_CD FK "수강 상태 코드 (신청/승인/취소)"
    DATE ENROLL_DATE "신청일"
}
    TB_ASSIGNMENT {
    NUMBER ASSIGN_ID PK "과제 ID (PK)"
    NUMBER COURSE_ID FK "과정 ID (TB_COURSE)"
    VARCHAR2 TITLE "과제 제목"
    CLOB CONTENT "과제 내용"
    DATE DUE_DATE "제출 마감일"
}
    TB_SUBMISSION {
    NUMBER SUBMIT_ID PK "제출 ID (PK)"
    NUMBER ASSIGN_ID FK "과제 ID (TB_ASSIGNMENT)"
    NUMBER USER_ID FK "제출자(학생) ID (TB_USER)"
    CLOB CONTENT "제출 내용"
    NUMBER SCORE "점수"
    VARCHAR2 STATUS_CD "제출 상태 코드 (제출/채점완료)"
}
    TB_FILE {
    NUMBER FILE_ID PK "파일 ID (PK)"
    NUMBER SUBMIT_ID FK "제출 ID (TB_SUBMISSION)"
    VARCHAR2 ORIGIN_NAME "원본 파일명"
    VARCHAR2 SAVE_PATH "저장 경로"
    NUMBER FILE_SIZE "파일 크기 (byte)"
}
    TB_COMMON_CODE {
    VARCHAR2 GROUP_CD PK "코드 그룹 (PK)"
    VARCHAR2 CODE PK "코드 값 (PK)"
    VARCHAR2 CODE_NAME "코드 이름"
    NUMBER SORT_ORDER "정렬 순서"
}
```

## 3. 테이블 목록

| 테이블명 | 한글명 | 설명 |
| --- | --- | --- |
| TB\_USER | 사용자 | 학습자·강사·관리자 계정 정보 |
| TB\_COURSE | 과정 | 교육과정 기본 정보, 담당 강사, 기간·정원 |
| TB\_ENROLL | 수강신청 | 사용자와 과정의 신청·승인 관계 |
| TB\_ASSIGNMENT | 과제 | 과정별 과제 출제 정보 |
| TB\_SUBMISSION | 과제 제출 | 학습자별 과제 제출·채점 결과 |
| TB\_FILE | 첨부파일 | 과제 제출 파일의 메타 정보 |
| TB\_COMMON\_CODE | 공통코드 | 역할, 과정 상태, 수강 상태 등 코드 |

## 4. 관계 정의

- 사용자(1) : 과정(N) — 강사 한 명이 여러 과정을 운영한다.
- 사용자(1) : 수강신청(N) : 과정(1) — 수강신청은 사용자와 과정의 N:M 관계를 풀어낸 테이블이다.
- 과정(1) : 과제(N) — 한 과정에 여러 과제가 있다.
- 과제(1) : 제출(N) — 학습자는 과제당 한 번 제출한다 (ASSIGN\_ID + USER\_ID 유일).
- 제출(1) : 첨부파일(N) — 제출물에 파일을 여러 개 첨부할 수 있다.

## 5. 설계 메모

- 상태값(과정, 수강, 제출)은 공통코드로 관리하여 하드코딩을 피한다.
- 수강신청은 (COURSE\_ID, USER\_ID) 복합 유일 제약으로 중복 신청을 막는다.
- 모든 테이블에 REG\_ID, REG\_DT, MOD\_ID, MOD\_DT 컬럼을 추가한다 (생략 표기).
- 상세 컬럼 정의는 5주차 "LMS 테이블 정의서"에서 작성한다.
