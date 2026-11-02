---
프로젝트: LMS
주차: "[[5주차]]"
상태: 진행중
주요내용: 백엔드·프론트엔드 코드 리뷰 지적사항, 개선 방향, 조치 현황
깃허브: https://github.com/justforwork89/LMS-backend
tags:
  - 산출물
---

# LMS 코드 리뷰

## 1. 개요

- 대상: LMS 백엔드(`LMS-backend`, Spring Boot + MyBatis) / 프론트엔드(`D:\LMS\frontend`, Flutter MVVM)
- 리뷰일: 2026-11-02 (v0.1)
- 기준 문서: [[LMS 요구사항 정의서]], [[LMS 메뉴구조도]], [[LMS 과정 관리 화면]], [[LMS 테이블 정의서]]
- 관련 문서: [[LMS 단위테스트 결과서]] (결함 D-xx와 연결), [[LMS 프로젝트 1 완료 보고서]]
- 심각도
  - **상**: 보안·데이터 무결성 문제, 업무 규칙 위반으로 잘못된 데이터가 저장됨
  - **중**: 기능이 요구사항과 다르게 동작하거나 운영 중 수정이 어려움
  - **하**: 사용성·유지보수성 개선

## 2. 요약

| 분류 | 상 | 중 | 하 | 합계 |
| --- | --- | --- | --- | --- |
| 보안·권한 | 3 | 0 | 1 | 4 |
| 업무 규칙 누락 | 1 | 3 | 0 | 4 |
| 하드코딩·공통코드 | 0 | 2 | 2 | 4 |
| 프론트-백엔드 연동 | 0 | 3 | 1 | 4 |
| 오류 처리 | 0 | 1 | 2 | 3 |
| 구조·품질 | 0 | 1 | 4 | 5 |
| **합계** | **4** | **10** | **10** | **24** |

## 3. 지적사항

### 3.1 보안·권한

| ID | 구분 | 위치 | 지적 내용 | 개선 방향 | 심각도 | 조치 |
| --- | --- | --- | --- | --- | --- | --- |
| CR-01 | BE | `SubmissionService.insert` | 수강 승인 여부를 확인하지 않아, 신청하지 않았거나 승인되지 않은 과정의 과제도 제출할 수 있다. (D-01) | 과제의 courseId로 `TB_ENROLL`에서 해당 학생의 승인(20) 건을 확인하고, 없으면 403 | 상 | 미착수 |
| CR-02 | BE | `AssignmentService.findAll` | `courseIds`를 생략하면 로그인한 누구나 전체 과정의 과제를 조회한다. 프론트는 필터를 넘기지만 서버가 막지 않는다. (D-02) | 학생은 승인된 과정, 강사는 담당 과정으로 서버에서 범위를 제한 | 상 | 미착수 |
| CR-03 | BE | `SubmissionService.findAll` | 강사가 조건 없이 조회하면 다른 강사 과정의 제출물까지 내려온다. 프론트 강사 화면(`AssignmentListViewModel`, `DashboardViewModel`)이 실제로 조건 없이 호출한다. (D-03) | 강사는 담당 과정 과제의 제출물만 조회되도록 매퍼에 조건 추가 | 상 | 미착수 |
| CR-04 | BE | `HealthController` | 테스트용 `/api/health/error` 엔드포인트가 남아 있다. | 삭제하거나 local 프로필에서만 등록 | 하 | 미착수 |

### 3.2 업무 규칙 누락

| ID | 구분 | 위치 | 지적 내용 | 개선 방향 | 심각도 | 조치 |
| --- | --- | --- | --- | --- | --- | --- |
| CR-05 | BE | `EnrollmentService.checkCourseAndReserve` | 종료·폐강(40/50)만 막아서 준비중·진행중 과정에도 수강신청이 된다. 요구사항은 "모집중인 과정에 신청"이다. (D-04) | 상태가 20(모집중)이 아니면 거부 | 상 | 미착수 |
| CR-06 | BE | `CourseService.validate` | 과정 상태 순서(준비중 → 모집중 → 진행중 → 종료)를 서버에서 검증하지 않는다. 프론트만 막고 있어 API를 직접 호출하면 우회된다. (D-05) | 기존 상태 대비 허용 전이표를 서버에 두고 검증 (폐강은 종료 전 어느 단계에서나 허용 등 규칙 확정 필요) | 중 | 미착수 |
| CR-07 | BE | `CourseService.update`, `CourseMapper.xml` | 관리자가 담당 강사를 바꿔도 반영되지 않는다. `toCourse`가 instructorId를 쓰지 않고 UPDATE문에 `INSTRUCTOR_ID`가 없다. (D-06) | 관리자일 때만 instructorId를 검증(`assertActiveInstructor`) 후 UPDATE에 포함 | 중 | 미착수 |
| CR-08 | FE | `models/course.dart` `canChangeTo` | 바로 다음 순번만 허용해서 '폐강'은 '종료' 다음에만 선택 가능한데, 종료 과정은 읽기 전용이라 폐강으로 바꿀 방법이 없다. (D-07) | 정방향 한 단계 + "종료 전 단계에서 폐강" 규칙으로 변경. CR-06과 같은 규칙을 공유 | 중 | 미착수 |

### 3.3 하드코딩·공통코드

| ID    | 구분    | 위치                                                                | 지적 내용                                                                                                              | 개선 방향                                                       | 심각도 | 조치  |
| ----- | ----- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | --- | --- |
| CR-09 | FE·BE | `api_course_repository.dart` `majors`                             | 전공 목록이 `['컴퓨터공학', '정보보안', '데이터분석']`로 고정되어 있다. 과정 등록, 사용자 관리, 과목 정보 조회, 수강신청 필터 4곳이 이 목록을 쓴다. 백엔드 공통코드에도 전공 그룹이 없다. | V8 마이그레이션으로 `MAJOR` 그룹 추가 → 로그인 후 `/api/codes/MAJOR`로 로드    | 중   | 미착수 |
| CR-10 | FE    | `models/course.dart`, `api_course_repository.dart` `_statusCodes` | 과정 상태 이름과 코드값(10~50)이 프론트에 고정되어 있다. DB의 `COURSE_STATUS` 공통코드를 쓰지 않아 코드명을 바꿔도 화면에 반영되지 않는다.                         | enum(업무 규칙·색상)은 유지하고 표시 이름만 `/api/codes/COURSE_STATUS`에서 로드 | 중   | 미착수 |
| CR-11 | FE    | `models/enrollment.dart`, `api_enrollment_repository.dart`        | 수강 상태(신청·승인·반려)도 동일하게 고정되어 있다.                                                                                     | CR-10과 같은 방식 (선택)                                           | 하   | 미착수 |
| CR-12 | BE·FE | `EnrollmentService`, `SubmissionService` 등                        | 상태 코드 `"10"`, `"20"`, `"30"`, `"40"`, `"50"`이 서비스 곳곳에 문자열로 흩어져 있다.                                                 | 백엔드에 상태 enum 또는 상수 클래스(`CourseStatus.RECRUITING` 등)를 두고 참조  | 하   | 미착수 |

### 3.4 프론트-백엔드 연동

| ID | 구분 | 위치 | 지적 내용 | 개선 방향 | 심각도 | 조치 |
| --- | --- | --- | --- | --- | --- | --- |
| CR-13 | FE | `AssignmentListViewModel`, `DashboardViewModel`, `ApiCourseRepository.save` | 강사의 담당 과정을 **이름**(`c.instructor == _user.name`)으로 판별하고, 저장할 때도 강사 이름으로 ID를 찾는다. 동명이인이 있으면 다른 강사의 과정이 섞이거나 잘못된 강사로 저장된다. | `Course` 모델에 `instructorId`를 추가하고 ID로 비교 (서버 응답에 이미 `instructorId` 있음) | 중 | 미착수 |
| CR-14 | FE | `CourseFormViewModel` 생성자 | `_repository.instructors.first` — 로그인 직후 강사 목록 로드(`onLoggedIn`)가 실패해도 예외를 삼키므로 목록이 비어 있으면 과정 등록 화면을 열 때 `StateError`로 앱이 멈춘다. | 빈 목록 처리(선택 안 됨 상태) + 로드 실패 시 화면에서 재시도 | 중 | 미착수 |
| CR-15 | FE | `api_common_code_repository.dart` `_fromJson` | 서버 응답의 `sortOrder`를 읽지 않아 모든 코드가 0으로 보이고, 그대로 수정하면 DB 정렬순서가 0으로 덮어써진다. (D-08) | `sortOrder: (j['sortOrder'] as num?)?.toInt() ?? 0` 추가 | 중 | 미착수 |
| CR-16 | BE | `EnrollmentResponse` | 응답에 과정명·학생명이 없어 프론트가 과정·사용자 전체 목록을 추가로 불러와 매칭한다(`EnrollmentApprovalViewModel` 3회 호출). 남은 TODO 주석도 이미 처리된 내용이다. | 매퍼에서 `TB_COURSE`, `TB_USER` 조인해 courseName, studentName 포함 / TODO 주석 삭제 | 하 | 미착수 |

### 3.5 오류 처리

| ID | 구분 | 위치 | 지적 내용 | 개선 방향 | 심각도 | 조치 |
| --- | --- | --- | --- | --- | --- | --- |
| CR-17 | FE | `ApiClient`, `AuthViewModel` | 토큰이 만료(120분)되면 모든 요청이 401로 실패하지만 화면에는 "불러오지 못했습니다"만 표시되고 로그인 화면으로 돌아가지 않는다. 로그아웃 시 `ApiClient.token`도 지우지 않는다. | 401 응답 시 공통으로 로그아웃 처리, `logout()`에서 토큰 초기화 | 중 | 미착수 |
| CR-18 | FE | 각 ViewModel의 `load()` (`CommonCodeViewModel` 등) | `catch (_)`로 모든 예외를 고정 문구로 바꿔 서버가 보낸 이유("접근 권한이 없습니다." 등)가 보이지 않는다. 로그인도 "서버에 연결할 수 없습니다."가 "로그인 중 오류가 발생했습니다."로 바뀐다. (D-09) | `on BusinessException catch (e)`로 서버 메시지 우선 표시 | 하 | 미착수 |
| CR-19 | BE | `EnrollmentService.checkCourseAndReserve` | 폐강·종료 과정 신청에 HTTP 410(Gone)을 쓴다. 410은 "리소스가 영구 삭제됨" 의미라 업무 규칙 위반과 맞지 않는다. | 400 또는 409로 통일 | 하 | 미착수 |

### 3.6 구조·품질

| ID    | 구분    | 위치                                                  | 지적 내용                                                                              | 개선 방향                                                    | 심각도 | 조치  |
| ----- | ----- | --------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------- | --- | --- |
| CR-20 | BE    | `src/test`                                          | 자동 테스트가 `contextLoads` 1건뿐이고 DB가 없으면 실패한다.                                         | 서비스 계층 JUnit + Mockito 테스트 작성 ([[LMS 단위테스트 결과서]] 케이스 기준) | 중   | 미착수 |
| CR-21 | BE    | `CourseService.update`                              | `checkOwner` 호출 직후 같은 조건의 if문이 한 번 더 있다.                                           | 중복 if문 삭제                                                | 하   | 미착수 |
| CR-22 | BE    | `CourseController`, `CourseService`, `CourseMapper` | 이전 버전 메서드가 주석으로 남아 있다.                                                             | 주석 코드 삭제 (이력은 git으로 관리)                                  | 하   | 미착수 |
| CR-23 | FE    | `lib/mock`, `main.dart`                             | API 연동이 끝났는데 mock 구현과 전환 주석이 남아 있다. `main.dart` 주석은 "lib/mock 폴더를 삭제한다"고 안내한다.     | 데모용으로 유지할지 결정 후 삭제 또는 실행 옵션(`--dart-define`)으로 전환        | 하   | 미착수 |
| CR-24 | FE·BE | 목록 화면 전반                                            | 대부분의 화면이 전체 목록을 받은 뒤 앱에서 걸러낸다(강사 과정, 전공 필터, 승인 목록 등). 데이터가 늘면 느려지고, 요구사항의 페이징도 없다. | 서버 조회 조건·페이징 추가 후 필요한 만큼만 조회                             | 하   | 미착수 |

## 4. 잘된 점

- **계층 분리가 명확하다.** 백엔드는 Controller → Service → Mapper, 프론트는 View → ViewModel → Repository로 역할이 나뉘어 있고, Repository 인터페이스 덕분에 mock ↔ API 구현을 `main.dart` 한 줄로 바꿀 수 있다.
- **응답·예외 형식이 일관된다.** `ApiResponse` + `BusinessException` + `GlobalExceptionHandler`로 모든 오류가 같은 JSON 형식과 한글 메시지로 내려간다.
- **정원 동시성 처리.** `increaseEnrolledCnt`가 `ENROLLED_CNT < CAPACITY` 조건부 UPDATE라서 동시에 신청해도 정원을 넘지 않는다. 신청과 정원 증가가 한 트랜잭션으로 묶여 비기능 요구사항을 충족한다.
- **DB 제약으로 이중 방어.** 중복 신청·중복 제출은 UNIQUE 제약, 점수 범위·정원·기간은 CHECK 제약으로 DB에서도 막는다.
- **보안 기본기.** 비밀번호 BCrypt 저장, JWT 무상태 인증, 역할별 URL 접근 제한, 401/403 응답을 JSON으로 통일했다.
- **Flyway로 스키마 이력 관리.** 운영용(`db/sql`)과 개발 샘플 데이터(`db/dev`)를 분리했다.

## 5. 조치 우선순위

1. **즉시**: CR-01 ~ CR-03 (권한·데이터 노출), CR-05 (수강신청 규칙)
2. **다음 스프린트**: CR-06 ~ CR-10, CR-13 ~ CR-15, CR-17, CR-20
3. **여유 있을 때**: 나머지 (하)
