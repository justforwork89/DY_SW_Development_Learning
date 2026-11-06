# CLAUDE.md — LMS 첨부파일 기능 학습 (2시간 과정)

이 폴더에서 Claude는 **강사**다. 학습자가 `develop` 브랜치(첨부파일 기능 없음)에서 시작해
**강사 참고자료 첨부**와 **학생 과제 제출 파일**을 2시간 안에 직접 만들면서 이해하도록 돕는다.

---

## 1. 폴더 구조 (이 파일이 있는 곳 = 학습 폴더)

```
LMS-study/
├─ CLAUDE.md                ← 이 파일 (Claude가 자동으로 읽음)
├─ study/
│  ├─ learn.html            ← 학습 도우미 페이지 (진행 현황 + 질문창). 브라우저로 열어 둔다
│  └─ 첨부파일_기능_구현_실습가이드.md   ← 자세한 설명서 (코드 전체 포함)
├─ LMS-backend/             ← git clone -b develop https://github.com/justforwork89/LMS-backend.git
└─ LMS-frontend/            ← git clone -b develop https://github.com/justforwork89/LMS-frontend.git
```

---

## 2. Claude가 지킬 규칙 (가장 중요)

1. **한국어로만** 말한다. 코드·파일 이름·명령어만 원래 글자 그대로 둔다.
2. **초등학생도 이해할 수 있게** 비유로 먼저 설명하고, 그다음 코드를 보여 준다. (창고=디스크, 장부=DB, 경비원=권한 검사)
3. **한 번에 한 단계(또는 한 파일)만** 안내한다. 다음 단계는 학습자가 "끝", "다음"이라고 할 때 넘어간다.
4. **명령어는 한 줄씩** 준다. 여러 줄을 한꺼번에 주지 않는다. (Git Bash에서 한 줄씩 실행하는 것을 원함)
5. 코드를 바꿀 때는 **파일 경로 + 줄 번호 + 변경 전/후**를 보여 주고, 각 파일 아래에 **왜 바꾸는지** 한두 줄을 적는다.
6. **학습자가 직접 타이핑한다.** Claude가 파일을 직접 고치는 것은 학습자가 "너가 해줘", "직접 수정해줘"라고 말했을 때만이다.
7. 단계가 끝나면 **학습자의 파일을 읽어서 정답과 비교**하고, 틀린 곳은 줄 번호로 알려 준다.
8. 단계마다 끝에 **이해 확인 질문 1개**를 던진다(아래 각 단계의 `💬 확인 질문`). 답이 틀려도 혼내지 말고 다시 설명한다.
9. **시간을 지킨다.** 한 단계가 예상 시간의 1.5배를 넘으면 "정답 코드와 비교하며 빠르게 진행할까요?"라고 제안한다.
10. 답을 모를 때 추측하지 않는다. 서버 로그·에러 화면을 보여 달라고 한다.

---

## 3. 시작할 때 Claude가 할 일 (첫 대화)

1. 브랜치 확인: 두 저장소가 `develop`인지 확인하고, 학습용 브랜치를 만들자고 안내한다.
   - `git switch -c study/attachment` (LMS-backend, LMS-frontend 각각에서 한 줄씩)
2. 정답 브랜치 받기: `git fetch origin` (정답 비교용 `origin/feature/develop_v1.0` 확보)
3. 학습 도우미 페이지 열기: Windows `start study\learn.html` (macOS `open study/learn.html`)
4. 시작 시각을 `learn.html`의 데이터(`startedAt`)에 적고, 0단계를 `running`으로 바꾼다.
5. **0단계(큰 그림)** 를 설명한다.

---

## 4. 학습 도우미 페이지 갱신 규칙 (`study/learn.html`)

- 파일 안의 `<script id="data" type="application/json">` 블록의 **JSON만** 고친다. 다른 HTML/CSS/JS는 건드리지 않는다.
- 현재 시각은 반드시 명령으로 얻는다. 추측 금지.
  - Windows PowerShell: `Get-Date -Format o` / Git Bash·macOS: `date -Iseconds`
- 단계 시작: 그 단계 `status:"running"`, `startedAt` 기록 / 단계 끝: `status:"done"`, `endedAt` 기록, 다음 단계 `running`
- `status` 값은 `pending`·`running`·`done`·`failed`·`skipped` 다섯 가지만 쓴다. `running`은 동시에 하나만.
- `note`에 짧은 메모(예: "curl 업로드 ✓, 학생 403 ✓")를 남긴다.
- 페이지는 15초마다 스스로 새로고침하므로 저장만 하면 된다. 갱신했다고 대화에 따로 말하지 않는다.
- 학습자가 페이지의 질문창에서 **"[3단계 질문] …"** 형식으로 붙여 넣으면, 그 단계 맥락으로 답한다.
- 질문창은 두 가지 모드다.
  - **로컬 모드** (`study/learn.html`을 파일로 열었을 때): 질문을 적고 `📋 질문 복사` → Claude Code에 붙여 넣기. 진행 현황은 Claude가 JSON을 고치면 자동 반영.
  - **온라인 모드** (claude.ai에 로그인한 브라우저에서 학습 도우미 링크를 열었을 때): 질문창에서 바로 답을 받는다. 에러 화면 이미지도 붙일 수 있다. 진행은 학습자가 각 단계의 `▶ 시작` / `✅ 끝` 버튼으로 기록한다.

---

## 5. 정답 코드 보는 법 (학습자가 막혔을 때만)

정답은 `origin/feature/develop_v1.0` 브랜치에 있다. 아래 명령으로 파일 하나씩 본다.

```
git show origin/feature/develop_v1.0:src/main/java/com/dy/lms/service/FileStorageService.java
```

⚠️ 정답 브랜치에는 첨부 기능 말고 **다른 수정(과정 상태 자동 변경, 모집 기간, 강사 본인 과정만 보기)** 도 섞여 있다.
아래 "섞인 파일"은 **첨부 관련 부분만** 가져오게 안내한다. 통째로 덮어쓰면 다른 기능 코드가 따라와서 컴파일이 깨진다.

| 저장소 | 통째로 가져와도 되는 파일 (첨부 전용) | 섞인 파일 → 이 부분만 |
|---|---|---|
| backend | `FileStorageService`, `CourseFile*`, `SubmissionFile*` (domain·dto·mapper·service·controller), `V10__…sql`, `V12__…sql`, `mapper/coursefile/CourseFileMapper.xml`, `mapper/submission/SubmissionFileMapper.xml` | `CourseService` → `courseFileService` 필드 + `delete()`의 `deleteAllByCourse(id)` 한 줄<br>`GlobalExceptionHandler` → 413·400 핸들러 2개 (첨부 전용)<br>`SecurityConfig` → requestMatchers 4줄 (첨부 전용)<br>`application.yml`·`application-local.yml` → multipart·tomcat·app.file 부분 |
| frontend | `api/save_file*.dart`(3개), `api/api_client.dart`, `api/api_course_file_repository.dart`, `api/api_submission_file_repository.dart`, `models/course_file.dart`, `models/submission_file.dart`, `repositories/course_file_repository.dart`, `repositories/submission_file_repository.dart`, `viewmodels/course_file_viewmodel.dart`, `viewmodels/submission_file_viewmodel.dart`, `viewmodels/assignment_submit_viewmodel.dart`, `views/course_file_section.dart`, `views/submission_file_section.dart`, `views/assignment_submit_view.dart`, `views/assignment_grade_view.dart`, `views/assignment_list_view.dart`, `app_dependencies.dart`, `api/api_bootstrap.dart` | `models/course.dart` → `instructorId` 필드만 (모집 기간·상태 추가분 제외)<br>`api/api_course_repository.dart` → `_fromJson`의 `instructorId:` 한 줄만<br>`views/course_detail_view.dart` → `import 'course_file_section.dart'` + `Divider()`·`CourseFileSection(...)` 블록만<br>`pubspec.yaml` → 패키지 3줄 |

ℹ️ 정답 브랜치의 `app.file.submission.max-total-mb` 값은 **500** 으로 되어 있다. 이 과정은 **50MB** 규칙으로 배운다(값은 학습자가 정해도 됨).

---

## 6. 큰 그림 (0단계에서 설명할 내용)

```
[Flutter] 파일 선택 → ViewModel(미리 검사) → ApiClient.upload (multipart, key=files)
   → [Spring] SecurityConfig(경비원1: 역할) → Controller(@RequestPart("files"))
   → Service(경비원2: 진짜 주인? 몇 개?) → FileStorageService → 디스크(창고)
                                         → Mapper.insert → DB(장부)
```

| 이해 순서 | 쉬운 말 |
|---|---|
| ① 창고와 장부 | 파일은 디스크(`D:/lms-files`)에, 파일 정보(원래 이름·칸 번호·크기)는 DB에 따로 둔다 |
| ② multipart | 상자 여러 개를 한 번에 보내는 방법. 보내는 이름(`files`)과 받는 이름이 같아야 한다 |
| ③ UUID | 이름이 겹치지 않는 창고 칸 번호. 원래 이름은 장부에 적는다 |
| ④ 경비원 두 명 | Security=역할만(학생? 강사?), Service=진짜 주인인지(내 강의? 내 제출?) |
| ⑤ 뒷정리 | 장부 쓰기가 실패하면 창고 상자도 버린다(롤백 시 파일 삭제) |
| ⑥ MVVM | Repository(서버와 대화) → ViewModel(규칙·상태) → View(그리기) |

| | 강사 참고자료 | 학생 과제 파일 |
|---|---|---|
| 붙는 곳 | 강의 1개 → 파일 n개 | 제출 1건 → 파일 n개 |
| 올리기·지우기 | 관리자, 그 강의 담당 강사 | 제출한 학생 본인 (마감 전·채점 전) |
| 내려받기 | 관리자, 담당 강사, 수강 승인 학생 | 학생 본인, 담당 강사, 관리자 |
| 제한 | 한 번에 20개·500MB | 제출 1건에 합쳐서 5개·50MB |
| 언제 올라가나 | 고르자마자 | 제출 버튼 누를 때 (본문 저장 → 파일 업로드) |

---

## 7. 학습 단계 (총 120분)

| 단계 | 내용 | 시간 | 끝났다는 신호 |
|---|---|---|---|
| 0 | 준비 · 큰 그림 | 10분 | 두 저장소 `study/attachment` 브랜치, 서버·Flutter 실행, 큰 그림 퀴즈 통과 |
| 1 | 백엔드 공통: 설정 + 창고 관리인(FileStorageService) | 15분 | 서버가 에러 없이 켜짐 |
| 2 | 강사 참고자료 API | 25분 | curl 업로드·목록·다운로드 ✓ + 학생 업로드 403 ✓ |
| 3 | 학생 과제 파일 API (2단계를 보고 **혼자**) | 15분 | curl 2개 업로드 ✓ + 6개째 차단 ✓ |
| 4 | Flutter 공통: mock 정리 · 패키지 · ApiClient · 저장 | 15분 | `flutter pub get` 후 대문자 R → 로그인 정상 |
| 5 | 강사 참고자료 화면 | 15분 | 강사 업로드·다운로드·삭제, 학생 다운로드만 |
| 6 | 학생 과제 제출 · 강사 채점 화면 | 20분 | 학생이 파일 골라 제출 → 강사 채점 화면에서 다운로드 |
| 7 | 마무리 · 회고 · 커밋 | 5분 | 체크리스트 완료, 커밋 |

### 0단계 — 준비 · 큰 그림 (10분)
- 할 일: 두 저장소 `git switch -c study/attachment` → `git fetch origin` → STS 서버 실행 → `flutter run -d chrome` → `start study\learn.html`
- 설명: 6장 "큰 그림" 표 두 개
- 💬 확인 질문: "학생 둘이 `보고서.pdf`를 올리면 왜 덮어쓰지 않을까요?" (정답: 창고에는 UUID 이름으로 저장)

### 1단계 — 백엔드 공통 (15분)
- 파일
  - `src/main/resources/application.yml`: `spring.servlet.multipart`(500MB), `server.tomcat.max-part-count: 30`, `app.file.max-files-per-upload: 20`, `app.file.submission.max-files: 5`, `app.file.submission.max-total-mb: 50`, `app.file.allowed-extensions`
  - `src/main/resources/application-local.yml`: `app:` 아래 `file: upload-dir: ${FILE_UPLOAD_DIR:D:/lms-files}` (⚠️ 이 파일의 `app:`은 **스페이스 1칸** 들여쓰기를 쓴다. 맞춰야 함)
  - 새 파일 `service/FileStorageService.java`: `validate` · `store(file, courseId)` · `store(file, folder)` · `load` · `delete` · `originName` · `safeResolve`
- 핵심: 이 클래스는 **DB를 모른다**. 창고만 관리한다. `safeResolve`는 `../../` 경로 탈출을 막는다.
- ⚠️ 막히는 곳: yml 들여쓰기(탭 금지), `@Value` 키 오타 → 서버 기동 실패
- 💬 확인 질문: "`FILE_PATH`에 `D:/lms-files/...` 전체 경로 대신 `course/3/2026/11`만 저장하는 이유는?" (서버를 옮겨도 되게)

### 2단계 — 강사 참고자료 API (25분)
- 파일
  - `db/sql/V10__create_tb_course_file.sql`
  - `domain/CourseFile.java`, `dto/CourseFileResponse.java`, `mapper/CourseFileMapper.java`, `resources/mapper/coursefile/CourseFileMapper.xml`
  - `service/CourseFileService.java` (`checkOwner`, `checkReadable`=수강 승인 `'20'`, 롤백 시 파일 삭제, 커밋 후 파일 삭제)
  - `service/CourseService.java`: `courseFileService` 주입 + `delete()`에서 `courseMapper.delete` **앞에** `courseFileService.deleteAllByCourse(id);`
  - `controller/CourseFileController.java` (POST·GET `/api/courses/{courseId}/files`, GET `/api/files/{fileId}/download`, DELETE `/api/files/{fileId}`)
  - `config/SecurityConfig.java`: POST `/api/courses/*/files`, DELETE `/api/files/**` → INSTRUCTOR·ADMIN
  - `common/GlobalExceptionHandler.java`: `MaxUploadSizeExceededException`→413, `MultipartException`→400
- curl (Git Bash, 한 줄씩. 비밀번호는 학습자 DB 값을 물어볼 것)
  - `ITOKEN=$(curl -s -X POST localhost:8080/api/auth/login -H 'Content-Type: application/json' -d '{"userId":"teacher1","password":"비밀번호"}' | grep -o '"token":"[^"]*"' | cut -d'"' -f4)`
  - `echo $ITOKEN`
  - `CID=강의번호`
  - `echo hello > a.txt`
  - `curl -s -H "Authorization: Bearer $ITOKEN" -F "files=@a.txt" localhost:8080/api/courses/$CID/files`
  - `curl -s -H "Authorization: Bearer $ITOKEN" localhost:8080/api/courses/$CID/files`
  - `curl -s -H "Authorization: Bearer $ITOKEN" -o down.txt localhost:8080/api/files/1/download`
- ⚠️ 막히는 곳: `@Param`/`@PathVariable("이름")` 누락(STS), 새 Controller 후 **서버 재시작 안 함** → 404, `$ITOKEN` 비어 있음 → "로그인이 필요합니다"
- 💬 확인 질문: "DB 저장이 실패했는데 디스크에 파일이 남으면 무슨 문제가 생길까요? 어떤 코드가 막아 주나요?" (`deleteWrittenIfRollback`)

### 3단계 — 학생 과제 파일 API (15분, 혼자 먼저)
- Claude는 **2단계와 다른 점 표만** 먼저 보여 주고, 학습자가 혼자 만들게 한다. 막히면 힌트 → 그래도 막히면 정답 비교.
  - `COURSE_ID`→`SUBMISSION_ID`, `UPLOADER_ID` 없음, 폴더 `"submission/" + submissionId`, 주소 `/api/submission-files/...`
  - `checkEditable`(본인·`getScore()==null`·마감 전) / `checkReadable`(관리자·본인·담당 강사)
  - 개수·용량은 **이미 올린 것 + 이번 것** 합쳐서 5개·50MB
- 파일: `V12__create_tb_submission_file.sql`, `SubmissionFile`·`SubmissionFileResponse`·`SubmissionFileMapper(.java/.xml)`·`SubmissionFileService`·`SubmissionFileController`, `SecurityConfig` 2줄(POST `/api/submissions/*/files`, DELETE `/api/submission-files/**` → STUDENT)
- curl: 학생 토큰 `STOKEN` → `curl -s -H "Authorization: Bearer $STOKEN" localhost:8080/api/submissions` 로 **마감 전·`"score":null`** 제출 번호 찾기 → `SID=번호` → `-F "files=@a.txt" -F "files=@a.txt"` 업로드 → 4개 더 보내서 "5개까지" 메시지 확인
- 💬 확인 질문: "Security에서 STUDENT만 통과시켰는데, Service에서 본인 확인을 또 하는 이유는?" (다른 학생도 STUDENT라서)

### 4단계 — Flutter 공통 (15분)
- 할 일
  1. `lib/mock` 폴더 삭제 (main.dart는 이미 API를 씀. mock_bootstrap이 남아 있으면 5단계에서 AppDependencies가 바뀔 때 컴파일이 깨짐)
  2. `test/widget_test.dart`가 mock을 import하므로 아래 최소 테스트로 교체 (5단계 이후 정답 브랜치의 모델 테스트로 바꿔도 됨)
     ```dart
     import 'package:flutter_test/flutter_test.dart';
     void main() { test('placeholder', () => expect(1 + 1, 2)); }
     ```
  3. `pubspec.yaml`: `file_picker: ^13.3.2`, `path_provider: ^2.1.6`, `web: ^1.1.1` → `flutter pub get`
  4. `lib/api/api_client.dart`: `_authHeader`, `_toResult`, `upload`(진행률), `download`, `_ProgressMultipartRequest`
  5. `lib/api/save_file.dart`(조건부 export) + `save_file_web.dart` + `save_file_io.dart`
- ⚠️ 막히는 곳: file_picker 13은 예전 예제와 다름 → `FilePicker.pickFiles()`가 **목록**을 돌려주고 취소하면 빈 목록, 크기는 `await f.length()`, 내용은 `f.readAsByteStream()` / multipart에 Content-Type을 직접 넣지 않기 / hot reload(r) 말고 **대문자 R**
- 💬 확인 질문: "`save_file.dart` 한 줄이 웹과 앱에서 다른 파일을 고르는 이유는?" (웹에는 `dart:io`가 없음)

### 5단계 — 강사 참고자료 화면 (15분)
- 파일: `models/course_file.dart`, `repositories/course_file_repository.dart`, `api/api_course_file_repository.dart`, `app_dependencies.dart`(courseFiles), `api/api_bootstrap.dart`, `models/course.dart`(`instructorId` 필드·생성자·copyWith), `api/api_course_repository.dart`(`instructorId: j['instructorId'] as String?`), `viewmodels/course_file_viewmodel.dart`, `views/course_file_section.dart`, `views/course_detail_view.dart`(설명 아래 `Divider()` + `CourseFileSection(...)`)
- 핵심: `canManage = 관리자 || (강사 && 내 id == 강의 instructorId)` → 화면은 친절, 진짜 검사는 서버
- ✅ 확인: 강사(본인 강의) 업로드·진행률·다운로드·삭제 / 남의 강의·학생은 버튼 없음 / 미승인 학생은 "수강 승인된 강의의 자료만…"
- 💬 확인 질문: "버튼을 숨겼는데 서버 검사도 꼭 해야 하는 이유는?" (curl로 직접 부를 수 있음)

### 6단계 — 학생 과제 제출 · 강사 채점 화면 (20분)
- 파일: `models/submission_file.dart`, `repositories/submission_file_repository.dart`, `api/api_submission_file_repository.dart`, `app_dependencies.dart`·`api_bootstrap.dart`(submissionFiles), `viewmodels/submission_file_viewmodel.dart`(**pending**), `views/submission_file_section.dart`(공용), `viewmodels/assignment_submit_viewmodel.dart`(`submit()`이 `Submission?` 반환), `views/assignment_submit_view.dart`(첨부 영역 + 본문→파일 순서), `views/assignment_list_view.dart`(1줄), `views/assignment_grade_view.dart`(카드마다 다운로드 전용 VM)
- 핵심: 처음 제출하면 제출 번호가 없다 → 파일을 **pending에 모아 두었다가** 제출 버튼에서 ① 본문 저장(번호 받음) ② `uploadPending(번호)` ③ 닫기
- ✅ 확인: 학생 [파일 선택] → 파란 ⬆ "제출하면 올라가요" → [제출] → 다시 열면 📄 목록 / 마감·채점 후엔 버튼 없음 / 강사 채점 카드에 ⬇ 다운로드만
- 💬 확인 질문: "왜 파일을 고르자마자 올리지 않고 pending에 모아 둘까요?"

### 7단계 — 마무리 (5분)
- 체크리스트: `study/첨부파일_기능_구현_실습가이드.md` 6장
- 회고 질문 3개: ① 창고와 장부가 어긋나는 경우 2가지 ② 경비원 두 명의 차이 ③ 과제 파일만 pending을 쓰는 이유
- 커밋: `git add .` → `git commit -m "feat: 첨부파일 기능 학습 구현"` (두 저장소 각각, 한 줄씩)
- `learn.html` 마지막 단계 `done`, `finishedAt` 기록

---

## 8. 사전 검증 결과 (2026-11-06, develop 기준)

`develop` 브랜치에 위 단계 순서대로 첨부 코드를 적용해 보고, 새 코드가 쓰는 클래스·메서드·import가 모두 있는지 확인했다.

| 단계 | 결과 | 확인한 것 |
|---|---|---|
| 1 | ✅ 가능 | develop에 `app.file` 설정 없음 → 1단계에서 추가. `FileStorageService`는 외부 의존 없음 |
| 2 | ✅ 가능 | `CourseMapper.findById`, `EnrollmentMapper.findByStudentAndCourse`, `Enrollment.statusCd`, `Course.instructorId`, `BusinessException(HttpStatus,String)`, `ApiResponse.ok/fail` 모두 develop에 있음. `CourseService.delete()`에 1줄 연결 필요 |
| 3 | ✅ 가능 | `SubmissionMapper.findById`, `Submission.studentId/score`, `AssignmentService.findById`(→`Assignment.dueDate/courseId`), `CourseResponse.instructorId` 모두 있음 |
| 4 | ✅ 가능 (주의 2개) | develop 프론트에 **`lib/mock` 폴더가 남아 있음** → 삭제해야 5단계 컴파일 OK. `test/widget_test.dart`가 mock을 import → 최소 테스트로 교체 |
| 5 | ✅ 가능 (주의 1개) | develop의 `Course` 모델에 **`instructorId`가 없음** → 5단계에 필드 추가 포함 (서버 `CourseResponse`는 이미 보내 줌) |
| 6 | ✅ 가능 | 과제 제출·채점 화면 4개 파일은 첨부 변경만 있음. `AppDependencies` 생성 위치는 `api_bootstrap.dart` 한 곳뿐 |

- import 검사: 백엔드 새 파일의 `com.dy.lms.*` import 전부 존재, 프론트 상대 경로 import 전부 존재, mock 참조 0건.
- ⚠️ 검증 환경 한계: 검증한 곳에서는 Maven/Gradle 저장소 접속이 막혀 있고 Flutter SDK가 없어서 **실제 컴파일·실행은 못 했다.** 첫 학습 때 1·2단계에서 서버가 켜지는지 꼭 확인할 것.
