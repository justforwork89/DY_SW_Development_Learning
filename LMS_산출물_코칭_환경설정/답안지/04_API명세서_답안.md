---
문서: API 명세서
버전: v1.0
작성자: 답안지(가상)
작성일: 2026-11-05
---
# API 명세서 (1시간 미니판) — 답안

## 1. API 목록
| API ID | 방식 | URL | 권한 | 관련 화면 |
|---|---|---|---|---|
| API-001 | GET | /api/courses?keyword={검색어} | 수강생 (로그인 필요) | SCR-001 |
| API-002 | POST | /api/enrollments | 수강생 (로그인 필요) | SCR-002 |
| API-003 | GET | /api/enrollments/me | 수강생 (로그인 필요) | SCR-003 |

## 2. 하나만 자세히 (API-002 수강 신청)
API ID: API-002

| 요청 값 이름 | 종류 | 필수 | 같은 뜻의 테이블 컬럼 |
|---|---|---|---|
| courseId | Number | 필수 | TB_ENROLL.COURSE_ID |
| (보내지 않음) studentId | String | - | TB_ENROLL.STUDENT_ID — 로그인 정보에서 서버가 꺼냄 |

성공 응답 JSON 예시:
```json
{ "enrollId": 1001, "courseId": 10, "enrollStatCd": "01", "message": "수강 신청이 완료되었어요." }
```

| 오류 상황 | 코드 | 메시지 |
|---|---|---|
| 로그인하지 않고 호출 | 401 | 로그인이 필요해요. |
| 이미 신청한 과정을 다시 신청 | 409 | 이미 신청한 과정이에요. |

## 스스로 점검
- [x] ★ API 3개 모두 ID·방식·URL이 있다
- [x] ★ 요청 값 표와 응답 JSON 예시가 있다
- [x] 오류 상황 2개와 코드·메시지가 있다
- [x] 요청 값 이름이 테이블 컬럼과 같은 단어다 (courseId ↔ COURSE_ID)
