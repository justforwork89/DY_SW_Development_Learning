# CLAUDE.md — DY LMS (군복무대체 SW 실습생 교육용 LMS)

이 파일은 다른 PC에서 Claude Code가 이 프로젝트의 맥락을 바로 알 수 있게 정리한 문서입니다.
같은 내용을 `backend/`와 `frontend/` 두 저장소에 하나씩 둡니다.

---

## 1. 프로젝트 한눈에 보기

| 항목 | 내용 |
|---|---|
| 목적 | 군복무대체 SW 실습생 8주 교육용 LMS. 강사가 기능을 만들고, 실습생에게 따라 만들기 교재로도 씀 |
| 폴더 | `D:\LMS\backend` (Spring, Git 저장소) · `D:\LMS\frontend` (Flutter, Git 저장소) · 파일 창고 `D:\lms-files` |
| 백엔드 | Spring Boot 4.0.x, Java 17, MyBatis, Oracle XE, Flyway, JWT(Spring Security). IDE는 **STS(Eclipse)** |
| 프론트 | Flutter(주로 **Chrome 웹**으로 실행), `http`, MVVM(ChangeNotifier + ListenableBuilder), file_picker 13 |
| 브랜치 | `feature/develop_v1.0` (기능 단위로 `feature/…` 브랜치 사용) |
| 실습 교재 | `docs/첨부파일_기능_구현_실습가이드.md` — 첨부파일 기능 전체 코드와 단계별 설명 |

### 실행
- 백엔드: STS에서 `LmsApplication` 실행 (프로필 `local`, `.env`에서 DB 정보 읽음). 새 Controller·SQL을 추가하면 **반드시 서버 재시작**.
- 프론트: `flutter run -d chrome`. 생성자나 필드를 바꾼 뒤에는 **대문자 `R`(hot restart)**.
- API 테스트: Postman 대신 **Git Bash + curl**.

---

## 2. 사용자(강사)와 일하는 방식 — 꼭 지키기

- **한국어로만 답한다.** 영어 문장을 섞거나 같은 내용을 영어로 반복하지 않는다(코드·파일명·명령어는 예외).
- 설명은 **초등학생도 이해할 수 있게** 비유와 표로 짧게.
- 구현 안내는 **작은 단계로 나누고**, 단계 끝에 "다음 단계"를 분명히 적는다.
- 코드 변경은 **변경 전/후를 나란히, 줄번호와 함께**, 파일마다 **바꾼 이유**를 적는다. 전체 파일을 복사할 수 있게 제공하면 좋아한다.
- curl·터미널 명령은 **한 번에 한 줄씩** 준다(여러 줄을 한꺼번에 주면 불편해함).
- 사용자가 "너가 해줘 / 해당 파일들만 수정해줘"라고 하면 **그 파일들만** 직접 고치고, 바꾼 줄번호를 표로 알려준다.
- 사용자가 스스로 구현할 때는 진행 상황(단계·진행률·예상 시간)을 보여주는 것을 중요하게 여긴다.

---

## 3. 코딩 규칙 (이 프로젝트에서 실제로 문제 됐던 것들)

### 백엔드
- **STS 컴파일 설정 때문에 이름을 꼭 적는다**: `@PathVariable("id")`, `@RequestParam(name = "x")`, Mapper의 `@Param("x")`. 빠지면 `Parameter 'x' not found`.
- 응답은 항상 `ApiResponse.ok(data)` / `ApiResponse.fail(msg)`. 업무 오류는 `throw new BusinessException(HttpStatus.XXX, "한글 메시지")`.
- `GlobalExceptionHandler`가 BusinessException·검증 오류·404·405·잘못된 JSON·업로드 초과(413)·Multipart(400)·나머지(500)를 처리한다.
- 로그인 사용자 아이디는 `auth.getName()`, 역할은 `ROLE_ADMIN / ROLE_INSTRUCTOR / ROLE_STUDENT`.
- DB 변경은 **Flyway 파일로만** 한다: `src/main/resources/db/sql/V{번호}__설명.sql`. 현재 **V12까지** 있다(다음은 V13). 개발용 데이터는 `db/dev`(V100~), `out-of-order: true`.
- MyBatis: `map-underscore-to-camel-case`, XML은 `resources/mapper/{도메인}/…Mapper.xml`, 별칭 패키지 `com.dy.lms.domain`.
- 소스 파일 줄바꿈은 **CRLF**. 파일을 통째로 다시 쓸 때 CRLF를 유지한다.

### 프론트
- 구조: `models/` · `repositories/`(추상 계약) · `api/`(Api…Repository 실제 구현) · `viewmodels/` · `views/`.
- 저장소 묶음은 `app_dependencies.dart`, 실제 연결은 `api/api_bootstrap.dart`. mock 폴더는 삭제했다(되살리지 않는다).
- 서버 호출은 `ApiClient.call / upload / download`. 실패는 `BusinessException(message)`로 받는다.
- file_picker **13**: `FilePicker.pickFiles(...)`는 목록을 돌려주고 취소하면 빈 목록이다. 크기는 `await f.length()`(null 가능), 내용은 `f.readAsByteStream()`.
- 파일 저장: `api/save_file.dart`가 조건부 export로 `save_file_web.dart`(브라우저 다운로드) / `save_file_io.dart`(앱)를 고른다.

---

## 4. 도메인 규칙 (현재 구현 상태)

### 역할
- 관리자(A): 전부. 강사(T): **본인 담당 과정만 보임·관리**. 학생(S): 준비중 과정은 안 보임.

### 과정 상태 (공통코드 `COURSE_STATUS`, 백엔드 `CourseCode`, 프론트 `CourseStatus`)

| 코드 | 이름 | 언제 |
|---|---|---|
| 10 | 준비중 | 관리자 승인 전(강사가 등록하면 항상 10) |
| 15 | 모집예정 | 승인됨, 모집 시작일 전 |
| 20 | 모집중 | 오늘이 모집 기간 안 |
| 25 | 모집마감 | 모집 끝, 교육 시작 전 |
| 30 | 진행중 | 오늘이 교육 기간 안 (모집 기간과 겹치면 진행중 우선) |
| 40 | 종료 | 교육 종료일 지남 |
| 50 | 폐강 | 관리자가 지정 |

- 15·20·25·30·40은 **날짜로 자동 변경**: `CourseMapper.syncStatusByDate` (서버 시작 시 + 매일 0시 1분 `CourseStatusScheduler`, 과정 저장 직후).
- 관리자만 상태를 바꾼다: 승인(10→20, 실제 값은 날짜로 다시 계산)과 폐강(50)만 가능.
- 과정에는 **모집 기간**(`RECRUIT_START_DATE`, `RECRUIT_END_DATE`)이 있다. 모집 종료일 ≤ 교육 종료일.
- **수강신청은 모집 기간 안에서만** 가능(서버 `EnrollmentService` + 프론트 `Course.isRecruitOpen`).
- 공통코드 관리 화면은 **그룹(상위) → 코드(하위) 트리**(ExpansionTile). 새 그룹은 새 그룹 코드로 코드를 하나 등록하면 생긴다. 그룹 한글 이름표는 `models/code_group.dart`의 `CodeGroup.labels`.

---

## 5. 첨부파일 기능 (이번에 함께 구현한 핵심) ⭐

### 5-1. 큰 그림 (설명할 때 쓰는 비유)
- 파일 = 택배 상자, `D:/lms-files` = **창고**, DB 표 = **장부**, UUID 저장 이름 = 창고 칸 번호.
- 경비원 2명: `SecurityConfig`(역할만 봄) + `Service`(진짜 주인인지 봄).
- 창고와 장부는 항상 짝이 맞아야 한다 → DB 실패 시 디스크 파일 삭제(롤백 예약), 삭제는 DB 먼저·커밋 후 디스크.

### 5-2. 두 기능 규칙

| | 강사 **참고자료** | 학생 **과제 제출 파일** |
|---|---|---|
| 테이블 | `TB_COURSE_FILE` (V10) | `TB_SUBMISSION_FILE` (V12) |
| 붙는 곳 | 과정 1개 → 파일 n개 | 제출 1건 → 파일 n개 |
| 올리기·지우기 | 관리자, 그 과정의 담당 강사 | 제출한 학생 본인, **채점 전·마감 전** |
| 보기·받기 | 관리자, 담당 강사, **수강 승인(ENROLL '20') 학생** | 학생 본인, 그 과정 담당 강사, 관리자 |
| 제한 | 한 번에 20개·500MB | 제출 1건 **합계 5개·50MB** (이미 올린 것 포함) |
| 저장 폴더 | `course/{과정ID}/yyyy/MM/UUID.ext` | `submission/{제출ID}/yyyy/MM/UUID.ext` |
| 화면 | 고르면 바로 업로드 | 고르면 **pending**에 담고, **제출 버튼** 때 본문 저장 → 받은 제출 ID로 업로드 |

### 5-3. API

| 메서드 | 주소 | 비고 |
|---|---|---|
| POST | `/api/courses/{courseId}/files` | multipart, key=`files`, 강사·관리자 |
| GET | `/api/courses/{courseId}/files` | 목록 |
| GET | `/api/files/{fileId}/download` | 파일 그대로(octet-stream, 한글 파일명 UTF-8) |
| DELETE | `/api/files/{fileId}` | 강사·관리자 |
| POST | `/api/submissions/{submissionId}/files` | multipart, key=`files`, 학생 |
| GET | `/api/submissions/{submissionId}/files` | 목록 |
| GET | `/api/submission-files/{fileId}/download` | |
| DELETE | `/api/submission-files/{fileId}` | 학생 |

### 5-4. 설정 (`application.yml`, `application-local.yml`)
```yaml
spring.servlet.multipart: max-file-size 500MB, max-request-size 500MB
server.tomcat.max-part-count: 30
app.file.upload-dir: ${FILE_UPLOAD_DIR:D:/lms-files}     # local yml
app.file.max-files-per-upload: 20
app.file.submission.max-files: 5
app.file.submission.max-total-mb: 50
app.file.allowed-extensions: pdf,ppt,pptx,doc,docx,xls,xlsx,hwp,hwpx,txt,md,zip,png,jpg,jpeg,mp4
```
다른 PC에서는 `D:\lms-files`가 없으면 `FILE_UPLOAD_DIR` 환경변수로 위치를 바꾼다.

### 5-5. 파일 위치

**백엔드** (`src/main/java/com/dy/lms/…`)
- `service/FileStorageService` — 디스크 전담: `validate`(확장자), `store(file, folder)`, `load`, `delete`, `originName`(경로 제거·80자), `safeResolve`(경로 탈출 차단)
- `domain/CourseFile`, `dto/CourseFileResponse`, `mapper/CourseFileMapper(.java/.xml)`, `service/CourseFileService`(`checkOwner`, `checkReadable`, `deleteAllByCourse`), `controller/CourseFileController`
- `domain/SubmissionFile`, `dto/SubmissionFileResponse`, `mapper/SubmissionFileMapper(.java/.xml)`, `service/SubmissionFileService`(`checkEditable`, `checkReadable`), `controller/SubmissionFileController`
- `config/SecurityConfig` — POST `/api/courses/*/files`·DELETE `/api/files/**` → INSTRUCTOR·ADMIN / POST `/api/submissions/*/files`·DELETE `/api/submission-files/**` → STUDENT
- `CourseService.delete`에서 `courseFileService.deleteAllByCourse(id)` 호출
- DTO에는 `saveName`·`filePath`를 **내보내지 않는다**(창고 위치 비공개)

**프론트** (`lib/…`)
- `api/api_client.dart` — `upload`(진행률 `_ProgressMultipartRequest`), `download`
- `api/save_file.dart` / `save_file_web.dart` / `save_file_io.dart`
- `models/course_file.dart`(+ `UploadFile`, `formatBytes`, 허용 확장자) · `repositories/course_file_repository.dart` · `api/api_course_file_repository.dart` · `viewmodels/course_file_viewmodel.dart`(`canManage` = 관리자 또는 `user.id == instructorId`) · `views/course_file_section.dart` → `course_detail_view.dart`에 삽입
- `models/submission_file.dart` · `repositories/submission_file_repository.dart` · `api/api_submission_file_repository.dart` · `viewmodels/submission_file_viewmodel.dart`(`PendingFile`, `pick`, `uploadPending`) · `views/submission_file_section.dart`(학생·강사 공용, `editable`)
- `views/assignment_submit_view.dart`(본문 제출 → `uploadPending(saved.id)` → 닫기), `viewmodels/assignment_submit_viewmodel.dart`(`submit()`이 `Submission?` 반환), `views/assignment_grade_view.dart`(카드마다 읽기 전용 파일 목록)

---

## 6. 테스트 방법 (Git Bash, 한 줄씩)

- 계정(개발 데이터): `admin`, `teacher1`(김강사), `teacher2`(이강사), `student1`~`student5`. 비밀번호는 DB의 개발용 값.
- 토큰 받기:
```bash
STOKEN=$(curl -s -X POST localhost:8080/api/auth/login -H 'Content-Type: application/json' -d '{"userId":"student1","password":"비밀번호"}' | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
```
- 확인: `echo $STOKEN` (비어 있으면 "로그인이 필요합니다"가 나옴)
- 업로드: `curl -s -H "Authorization: Bearer $STOKEN" -F "files=@a.txt" localhost:8080/api/submissions/$SID/files`
- Git Bash에서 JSON은 **작은따옴표**로 감싸고 역슬래시를 쓰지 않는다.

확인된 결과(2026-11-06): 과제 파일 업로드 2개 ✓ · 6개째 차단 ✓ · 마감 지난 제출 차단 ✓ · 채점 끝난 제출 차단 ✓ / 참고자료 업로드·다운로드·삭제·권한 차단 ✓.

---

## 7. 자주 막히는 곳

| 증상 | 원인 → 해결 |
|---|---|
| `요청한 주소를 찾을 수 없습니다` | 새 Controller 추가 후 서버 재시작 안 함 |
| `로그인이 필요합니다` (curl) | 토큰 변수가 비어 있음 → `echo $TOKEN` |
| 주소가 `…//files` | `$SID`/`$CID` 변수가 비어 있음 |
| `Parameter 'x' not found` | `@Param` 누락 |
| 업로드 400 | key 이름 불일치 (Flutter `'files'` ↔ `@RequestPart("files")`) |
| 500MB 초과 시 500 | `MaxUploadSizeExceededException` 핸들러(413) 필요 |
| 커밋 후 `Unlink of file … failed. Should I try again?` | STS가 pack 파일을 잡고 있음 → `n`. 커밋은 됨. `git fsck`로 확인, 필요하면 `git config gc.auto 0` |
| STS `MissingObjectException` | Git 정리 후 STS 캐시 문제 → STS 재시작 (`git fsck`가 깨끗하면 저장소 정상) |

---

## 8. 남은 일 / 알려진 문제

- [ ] 과제 첨부 **최종 화면 확인**(학생 제출 → 강사 채점 화면 다운로드) 결과 미확인
- [ ] 공통코드 `COURSE_STATUS`에 시험용 **TEST(60)** 존재 → 프론트 enum에 없어서 '준비중'으로 보일 수 있음. 삭제 권장
- [ ] `backend/a.txt`, `b.txt`(curl 시험 파일) 정리 — 커밋하지 않기
- [ ] `SubmissionService.findAll`: 강사가 studentId만 넘기면 **다른 강의 학생 제출도 조회 가능** → 담당 과정 검사 필요
- [ ] 과제 제출 시 **수강 승인 여부 검사 없음** (서버)
- [ ] `TB_SUBMISSION.FILE_NAME` 칸은 이제 안 씀(파일은 `TB_SUBMISSION_FILE`) — 정리 여부 결정
- [ ] `.env`, `application-local.yml`에 실제 DB 비밀번호가 있다면 커밋 금지
