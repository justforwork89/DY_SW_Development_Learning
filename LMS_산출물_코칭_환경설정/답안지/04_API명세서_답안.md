---
문서: API 명세서
버전: v1.0
작성자: 답안지
작성일: 2026-11-05
cssclasses:
  - wide
---
# LMS API 명세서 (1시간 미니판) — 답안

> URL은 답안 예시예요. 실제 백엔드 소스의 URL과 다르면 소스를 기준으로 고쳐요.

## 1. API 목록
| API ID | 방식 | URL | 권한 | 관련 화면 |
|---|---|---|---|---|
| API-001 | GET | /api/courses?keyword=&statusCd=&from=&to=&page= | 로그인한 모든 사용자 | LMS-C001, LMS-E001 |
| API-002 | POST | /api/enrollments | 학습자(S) | LMS-E001 |
| API-003 | GET | /api/enrollments/me?statusCd= | 학습자(S) | LMS-E001, LMS-E002 |
| API-004 | GET | /api/admin/enrollments?statusCd= | 관리자(A) | LMS-M002 |
| API-005 | PUT | /api/admin/enrollments/{enrollId}/status | 관리자(A) | LMS-M002 |
| API-006 | DELETE | /api/enrollments/{enrollId} | 학습자(S, 본인 것만) | LMS-E001, LMS-E002 |

## 2. 하나만 자세히 (API-002 수강신청)
API ID: API-002

| 요청 값 이름 | 종류 | 필수 | 같은 뜻의 테이블 컬럼 |
|---|---|---|---|
| courseId | Number | 필수 | ENROLL.COURSE_ID |
| (보내지 않음) userId | Number | - | ENROLL.USER_ID — 서버가 로그인 정보에서 꺼냄 |

서버가 채우는 값: STATUS_GROUP_CD='ENROLL_STATUS', STATUS_CD='10', ENROLL_DATE=SYSDATE

성공 응답 JSON 예시:
```json
{ "enrollId": 5, "courseId": 2, "statusCd": "10", "statusName": "신청", "enrollDate": "2026-11-05", "message": "수강신청이 완료되었어요." }
```

| 오류 상황 | 코드 | 메시지 |
|---|---|---|
| 로그인하지 않고 호출 | 401 | 로그인이 필요해요. (MSG-011) |
| 학습자가 아닌 사람이 호출 | 403 | 권한이 없어요. (MSG-012) |
| 모집중(20)이 아닌 과정 | 400 | 모집중인 과정만 신청할 수 있어요. (MSG-015) |
| 이미 같은 과정을 신청함 | 409 | 이미 신청한 과정이에요. (MSG-002) |

## 스스로 점검
- [x] ★ API 모두 ID·방식·URL이 있다
- [x] ★ 요청 값 표와 응답 JSON 예시가 있다
- [x] 오류 상황 2개 이상과 코드·메시지가 있다
- [x] 요청 값 이름이 테이블 컬럼 이름과 같은 단어다 (courseId ↔ COURSE_ID)
