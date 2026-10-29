---
tags:
  - "참고"
---

# javajungsuk4_sample_compressed

> [!warning] 이미지 218개는 옮겨지지 않았습니다
> 본문 텍스트만 변환했습니다. 그림은 [노션 원본](https://app.notion.com/p/6ba41baeda5282fd8379019d4c7e3582)에서 보세요.

# 자바의 기초부터 객체지향개념을 넘어 실전활용까지자바의 참맛을 제대로 느껴보세요

## Jav

개발자로서 반드시 알아야하는 핵심내용을 체계적으로 정리<br>특히 객체지향 개념을 쉬우면서도 자세하고 체계적으로 설명<br>최신 자바 기술을 깊이 있고 자세하게 설명<br>소스 & 연습문제 다운로드 \| [https://github.com/castello/javajungsuk4](https://github.com/castello/javajungsuk4)<br>QA게시판 \| [https://cafe.naver.com/javachobostudy](https://cafe.naver.com/javachobostudy)<br>무료 동영상 강좌 \| [https://www.youtube.com/@MasterNKS](https://www.youtube.com/@MasterNKS)

## 정석

4판 Java 21

남 궁 성 지음

도우출판

## □  AVd의 정석 4판 Java 21

남 궁 성 지음

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시<br>[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)[https://cafe.naver.com/javachobostudy.cafe](https://cafe.naver.com/javachobostudy.cafe) - Q&A 게시판 및 자료실<br>[https://github.com/castello/javajungsuk4](https://github.com/castello/javajungsuk4) - 소스코드 & 연습문제<br>[https://www.youtube.com/@MasterNKS](https://www.youtube.com/@MasterNKS) - 무료 동영상 강좌

# Foreword

## 개정 4판을 펴내며…

첫 번째 자바 책을 출간한지 22년이 넘었네요. 이 오랜 시간동안 늘 같은 자리에서 독자 분들의 질문에 답변하며 유튜브에 무료 강의, 스터디, 세미나 등 많은 사람이 자바를 쉽게 잘 배울 수 있도록 노력해왔습니다. 저자가 본인 스스로 굳이 이런 글을 쓴다는 것이 내 키지 않으나 인터넷에 독자를 현혹하는 정보가 많아서 이 자리를 빌어 저자의 허심탄회한 생각을 한번 읽어주길 바랄 뿐입니다.

세상의 변화만큼이나 자바도 빠르게 성장해왔는데 몇년이 지나도 이 변화를 온전히 담아 주는 책이 나오지 않아서 제대로 된 책을 써보자 다짐하고 4판의 집필을 시작하게 되었습 니다. 반년이면 되겠지 싶었으나 어느새 1년이 훌쩍 넘어서야 세상에 나오게 되었습니다.<br>금전적인 면만 생각하면 대충 구색만 갖춰서 새로운 책으로 출판할 수 있었겠지만, 적어 도 누구 하나는 그러지 않아야 하니까요. 누군가 책을 잘 집필해주면 저도 이제 이 무거운 짐을 내려놓고 홀가분해질텐데 이점이 늘 아쉽습니다. 그래도 저는 오랫동안 독자 여러분 의 사랑을 많이 받아왔으니 그 보답을 한다는 마음으로 아직까지 버티고 있습니다.

최근 AI의 급격한 발달로 지식을 보다 쉽게 얻을 수 있게 되었습니다. 누구나 AI를 사용하 지만, 사람의 능력이 약간만 차이나도 AI가 만들어내는 결과물의 격차가 큽니다. 그래서 사람이 습득해야하는 지식의 양과 질이 더 중요해지고 있습니다.<br>실무에서는 점점 높은 수준의 실력을 요구하고 있으나 독자들은 점점 쉬운 책을 원하고 그에 맞는 책이 많이 팔리고 있습니다. 정말로 쉬운 것도 아니고 그저 쉬워보이는 책이나 강좌로는 실력이 늘기 어렵습니다. 그에 비해 이 책은 다소 어렵게 느껴질 수도 있으나 중 요한 내용을 빠짐없이 담았고, 대신 저자가 직접 답변해주고 강의 영상도 무료로 제공하 여 혼자서도 학습할 수 있도록 돕고 있습니다.<br>이를 잘 활용하면 보다 효율적으로 높은 실력을 갖추실 수 있습니다. 저는 독자 여러분 을 항상 묵묵히 응원하며, 늘 같은 자리에서 여러분의 질문을 기다리고 있습니다.

2025년 6월 14일<br>저자 남 궁 성<br>[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## Contents

## Chapter 01 자바를 시작하기 전에

1. 자바(Java programming language) ….. 002<br>1.1 자바란? ….. 002<br>1.2 자바의 역사 ….. 003<br>1.3 자바언어의 특징 ….. 006<br>1.4 JVM(Java Virtual Machine) ….. 008
2. 자바개발환경 구축하기 ….. 010<br>2.1 자바 개발도구(JDK)설치하기 ….. 010<br>2.2 인텔리제이(Intellij IDEA) 설치하기 ….. 020
3. 자바로 프로그램 작성하기 ….. 028<br>3.1 Hello.java ….. 028<br>3.2 자주 발생하는 에러와 해결방법 ….. 031<br>3.3 자바 프로그램의 실행과정 ….. 032<br>3.4 주석(comment) ….. 033<br>3.5 이 책으로 공부하는 방법 ….. 034<br>Chapter 02 변수(variable)
4. 변수(variable) ….. 040<br>1.1 변수(variable)란? ….. 040<br>1.2 변수의 선언과 초기화 ….. 040<br>1.3 변수의 명명규칙 ….. 045
5. 변수의 타입 ….. 047<br>2.1 기본형(primitive type) ….. 048<br>2.2 상수와 리터럴(constant & literal) ….. 050<br>2.3 형식화된 출력 - printf( ) ….. 058<br>2.4 화면에서 입력받기 - Scanner ….. 062
6. 진법 ….. 064<br>3.1 10진법과 2진법 ….. 064<br>3.2 비트(bit)와 바이트(byte) ….. 065<br>3.3 8진법과 16진법 ….. 066<br>3.4 정수의 진법 변환 ….. 068<br>3.5 실수의 진법 변환 ….. 070<br>3.6 음수의 2진 표현 - 2의 보수법 ….. 072
7. 기본형(primitive type) ….. 076<br>4.1 논리형 - boolean ….. 076<br>4.2 문자형 - char ….. 076<br>4.3 정수형 - byte, short, int, long ….. 083<br>4.4 실수형 - float, double ….. 089
8. 형변환 ….. 095<br>5.1 형변환(캐스팅, casting)이란? ….. 095<br>5.2 형변환 방법 ….. 095<br>5.3 정수형 간의 형변환 ….. 096<br>5.4 실수형 간의 형변환 ….. 098<br>5.5 정수형과 실수형 간의 형변환 ….. 101<br>5．6자동 형변환 ….. 103<br>Chapter 03 연산자（operator）<br>1．연산자（operator） ….. 108<br>1.1 연산자와 피연산자 ….. 108<br>1.2 식（式）과 대입 연산자 ….. 108<br>1.3 연산자의 종류 ….. 108<br>1.4 연산자의 우선순위와 결합규칙 ….. 110<br>1.5 산술 변환（usual arithmetic conversion） ….. 113<br>2．단항 연산자 ….. 115<br>2.1 증감 연산자＋＋，－－ ….. 115<br>2.2 부호 연산자＋，－ ….. 118<br>3．산술 연산자 ….. 119<br>3.1 사칙 연산자＋，－，＊，／ ….. 119<br>3.2 나머지 연산자％ ….. 130<br>4．비교 연산자 ….. 131<br>4.1 대소비교 연산자 〈，〉，〈＝，〉＝ ….. 131<br>4.2 등가비교 연산자＝＝，！＝ ….. 131<br>5．논리 연산자 ….. 136<br>5.1 논리 연산자＆＆，｜｜，！ ….. 136<br>5.2 비트 연산자＆，｜，＾，～，＜＜，＞＞ ….. 143<br>6．그 외의 연산자 ….. 152<br>6.1 조건 연산자 ？： ….. 152<br>6.2 대입 연산자＝，op＝ ….. 154<br>Chapter 04 조궈웍ஈㅖ반목문<br>1．조건문－if，switch ….. 158<br>1.1 if문 ….. 158<br>1.2 if－else문 ….. 162<br>1.3 if－else if문 ….. 163<br>1.4 중첩 if문 ….. 166<br>1.5 switch문 ….. 168<br>2．반복문－for，while，do－while ….. 180<br>2.1 for문 ….. 180<br>2.2 while문 ….. 191<br>2.3 do－while문 ….. 197<br>2.4 break문 ….. 199<br>2.5 continue문 ….. 200<br>2.6 이름 붙은 반복문 ….. 202

## Contents

Chapter 05 배열(array)

1. 배열(array) ….. 206<br>1.1 배열(array)이란? ….. 206<br>1.2 배열의 선언과 생성 ….. 206<br>1.3 배열의 길이와 인덱스 ….. 208<br>1.4 배열의 초기화 ….. 213<br>1.5 배열의 복사 ….. 216<br>1.6 배열의 활용 ….. 220
2. String배열 ….. 230<br>2.1 String배열의 선언과 생성 ….. 230<br>2.2 String배열의 초기화 ….. 230<br>2.3 char배열과 String클래스 ….. 233<br>2.4 커맨드 라인을 통해 입력받기 ….. 236
3. 다차원 배열 ….. 238<br>3.1 2차원 배열의 선언과 인덱스 ….. 238<br>3.2 2차원 배열의 초기화 ….. 238<br>3.3 가변 배열 ….. 243<br>3.4 다차원 배열의 활용 ….. 244<br>Chapter 06 과제제춥 프르계맹 (
4. 객체지향언어 ….. 254<br>1.1 객체지향언어의 역사 ….. 254<br>1.2 객체지향언어 ….. 254
5. 클래스와 객체 ….. 255<br>2.1 클래스와 객체의 정의와 용도 ….. 255<br>2.2 객체와 인스턴스 ….. 256<br>2.3 객체의 구성요소 - 속성과 기능 ….. 257<br>2.4 인스턴스의 생성과 사용 ….. 258<br>2.5 객체 배열 ….. 264<br>2.6 클래스의 또 다른 정의 ….. 266
6. 변수와 메서드 ….. 270<br>3.1 선언위치에 따른 변수의 종류 ….. 270<br>3.2 클래스 변수와 인스턴스 변수 ….. 271<br>3.3 메서드 ….. 273<br>3.4 메서드의 선언과 구현 ….. 276<br>3.5 메서드의 호출 ….. 278<br>3.6 return문 ….. 282<br>3.7 JVM의 메모리 구조 ….. 285<br>3.8 기본형 매개변수와 참조형 매개변수 ….. 288<br>3.9 참조형 반환타입 ….. 292<br>3.10 재귀호출(recursive call) ….. 294<br>3.11 클래스 메서드(static메서드)와 인스턴스 메서드 ….. 301<br>3.12 클래스 멤버와 인스턴스 멤버 간의 참조와 호출 ….. 304
7. 오버로딩(overloading) ….. 307<br>4.1 오버로딩이란? ….. 307<br>4.2 오버로딩의 조건 ….. 307<br>4.3 오버로딩의 예 ….. 307<br>4.4 오버로딩의 장점 ….. 309<br>4.5 가변인재(varargs)와 오버로딩 ….. 311
8. 생성자(constructor) ….. 315<br>5.1 생성자란? ….. 315<br>5.2 기본 생성자(default constructor) ….. 316<br>5.3 매개변수가 있는 생성자 ….. 318<br>5.4 생성자에서 다른 생성자 호출하기 - this(), this ….. 319<br>5.5 생성자를 이용한 인스턴스의 복사 ….. 322
9. 변수의 초기화 ….. 324<br>6.1 변수의 초기화 ….. 324<br>6.2 명시적 초기화(explicit initialization) ….. 325<br>6.3 초기화 블럭(initialization block) ….. 326<br>6.4 멤버변수의 초기화 시기와 순서 ….. 328<br>Chapter 07 객체지향 프로그래밍 II
10. 상속(inheritance) ….. 334<br>1.1 상속의 정의와 장점 ….. 334<br>1.2 클래스간의 관계 - 포함 관계 ….. 340<br>1.3 클래스간의 관계 결정하기 ….. 341<br>1.4 단일상속(single inheritance) ….. 347<br>1.5 Object클래스 - 모든 클래스의 조상 ….. 349
11. 오버라이딩(overriding) ….. 351<br>2.1 오버라이딩이란? ….. 351<br>2.2 오버라이딩의 조건 ….. 352<br>2.3 오버로딩 vs. 오버라이딩 ….. 353<br>2.4 super ….. 354<br>2.5 super() - 조상 클래스의 생성자 ….. 356
12. package와 import ….. 360<br>3.1 패키지(package) ….. 360<br>3.2 패키지의 선언 ….. 361<br>3.3 import문 ….. 364<br>3.4 import문의 선언 ….. 364<br>3.5 static import문 ….. 366
13. 제어자(modifier) ….. 368<br>4.1 제어자란? ….. 368<br>4.2 static - 클래스의, 공통적인 ….. 368<br>4.3 final - 마지막의, 변경될 수 없는 ….. 369<br>4.4 abstract - 추상의, 미완성의 ….. 371<br>4.5 접근 제어자(access modifier) ….. 372<br>4.6 제어자(modifier)의 조합 ….. 377

## Contents

1. 다형성(polymorphism) ….. 378<br>5.1 다형성이란? ….. 378<br>5.2 참조변수의 형변환 ….. 380<br>5.3 instanceof 연산자 ….. 386<br>5.4 참조변수와 인스턴스의 연결 ….. 394<br>5.5 매개변수의 다형성 ….. 397<br>5.6여러 종류의 객체를 배열로 다루기 ….. 400
2. 추상 클래스(abstract class) ….. 405<br>6.1 추상 클래스란? ….. 405<br>6.2 추상 메서드(abstract method) ….. 405<br>6.3 추상 클래스의 작성 ….. 407
3. 인터페이스(interface) ….. 411<br>7.1 인터페이스란? ….. 411<br>7.2 인터페이스의 작성 ….. 411<br>7.3 인터페이스의 상속 ….. 412<br>7.4 인터페이스의 구현 ….. 412<br>7.5 인터페이스를 이용한 다중 상속 ….. 415<br>7.6 인터페이스를 이용한 다형성 ….. 417<br>7.7 인터페이스의 장점 ….. 420<br>7.8 인터페이스의 이해 ….. 426<br>7.9 디폴트 메서드, static메서드, private메서드 ….. 430
4. 내부 클래스(inner class) ….. 434<br>8.1 내부 클래스란? ….. 434<br>8.2 내부 클래스의 종류와 특징 ….. 435<br>8.3 내부 클래스의 선언 ….. 435<br>8.4내부 클래스의 제어자와 접근성 ….. 436<br>8.5 익명 클래스(anonymous class) ….. 441<br>Chapter 08 예외 처리(exception handling)
5. 예외 처리(exception handling) ….. 444<br>1.1 프로그램 오류 ….. 444<br>1.2 예외 클래스의 계층구조 ….. 445<br>1.3 예외 처리하기 - try-catch문 ….. 446<br>1.4 try-catch문에서의 흐름 ….. 449<br>1.5 예외의 발생과 catch블럭 ….. 450<br>1.6 예외 발생시키기 ….. 454<br>1.7 메서드에 예외 선언하기 ….. 457<br>1.8 finally블럭 ….. 464<br>1.9 자동 자원 반환 - try-with-resources문 ….. 466<br>1.10 사용자정의 예외 만들기 ….. 469<br>1.11 예외 되던지기(exception re-throwing) ….. 472<br>1.12 연결된 예외(chained exception) ….. 474

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Chapter 09 java.lang패키지와 유용한 클래스

1. java.lang패키지 ….. 480<br>1.1 Object클래스 ….. 480<br>1.2 String클래스 ….. 494<br>1.3 StringBuffer와 StringBuilder ….. 508<br>1.4 Math클래스 ….. 514<br>1.5 래퍼(wrapper) 클래스 ….. 521
2. 유용한 클래스 ….. 526<br>2.1 java.util.Objects ….. 526<br>2.2 java.util.Random ….. 530<br>2.3 정규식(regular expression) - java.util.regex ….. 535<br>2.4 java.util.Scanner ….. 540<br>2.5 java.util.StringTokenizer ….. 543<br>2.6 java.math.BigInteger ….. 548<br>2.7 java.math.BigDecimal ….. 551<br>Chapter 10 날짜와 시간 & 형식화
3. 날짜와 시간 ….. 558<br>1.1 Calendar와 Date ….. 558
4. 형식화 클래스 ….. 570<br>2.1 DecimalFormat ….. 570<br>2.2 SimpleDateFormat ….. 574<br>2.3 ChoiceFormat ….. 578<br>2.4 MessageFormat ….. 579
5. java.time패키지 ….. 582<br>3.1 java.time패키지의 핵심 클래스 ….. 582<br>3.2 LocalDate와 LocalTime ….. 585<br>3.3 Instant ….. 590<br>3.4 LocalDateTime과 ZonedDateTime ….. 591<br>3.5 TemporalAdjusters ….. 595<br>3.6 Period와 Duration ….. 597<br>3.7 파싱과 포맷 ….. 602<br>Chapter 11 컬렉션 프레임웍
6. 컬렉션 프레임웍(collections framework) ….. 608<br>1.1 컬렉션 프레임웍의 핵심 인터페이스 ….. 608<br>1.2 ArrayList ….. 615<br>1.3 LinkedList ….. 626<br>1.4 Stack과 Queue ….. 634

## Contents

1.5 Iterator, Listlterator, Enumeration ….. 644<br>1.6 Arrays ….. 654<br>1.7 Comparator와 Comparable ….. 658<br>1.8 HashSet ….. 661<br>1.9 TreeSet ….. 668<br>1.10 HashMap과 Hashtable ….. 674<br>1.11 TreeMap ….. 684<br>1.12 Properties ….. 688<br>1.13 Collections ….. 694<br>1.14 컬렉션 클래스 정리 & 요약 ….. 699<br>Chapter 12 모던 자바 기능(new Java features)

1. 지네릭스(generics) ….. 702<br>1.1 지네릭스란? ….. 702<br>1.2 지네릭 클래스의 선언 ….. 703<br>1.3 지네릭 클래스의 객체 생성과 사용 ….. 706<br>1.4 제한된 지네릭 클래스 ….. 709<br>1.5 와일드 카드 ….. 711<br>1.6 지네릭 메서드 ….. 717<br>1.7 지네릭 타입의 형변환 ….. 720<br>1.8 지네릭 타입의 제거 ….. 722
2. 열거형(enums) ….. 724<br>2.1 열거형이란? ….. 724<br>2.2 열거형의 정의와 사용 ….. 725<br>2.3 열거형에 멤버 추가하기 ….. 728<br>2.4 열거형의 이해 ….. 731
3. 애너테이션(annotation) ….. 735<br>3.1 애너테이션이란? ….. 735<br>3.2 표준 애너테이션 ….. 736<br>3.3 메타 애너테이션 ….. 744<br>3.4 애너테이션 타입 정의하기 ….. 748
4. 레코드(record) ….. 754<br>4.1 레코드란? ….. 754<br>4.2 레코드의 특징 ….. 755<br>4.3 레코드의 중첩 ….. 760<br>4.4 지네릭 레코드 ….. 762<br>4.5 레코드와 애너테이션 ….. 764
5. 실드 클래스(sealed class) ….. 766<br>5.1 실드 클래스란? ….. 766<br>5.2 실드 클래스의 제약 조건 ….. 767<br>5.3 실드 클래스와 switch식 ….. 769
6. 모듈(module) ….. 774<br>6.1 모듈이란? ….. 774<br>6.2 모듈 설명자 - module-info.java ….. 776<br>6.3 이름없는 모듈과 java.base모듈 ….. 779<br>6.4 전이적 의존성과 순환 의존성 ….. 786<br>6.5 모듈의 컴파일과 실행 ….. 788<br>6.6 자동 모듈 ….. 793<br>Chapter 13 쓰레드(thread)
7. 쓰레드 ….. 796<br>1.1 프로세스와 쓰레드? ….. 796<br>1.2 쓰레드의 구현과 실행 ….. 798<br>1.3 start()와 run() ….. 802<br>1.4 싱글쓰레드와 멀티쓰레드 ….. 806<br>1.5 쓰레드의 우선순위 ….. 812<br>1.6 쓰레드 그룹(thread group) ….. 815<br>1.7 데몬 쓰레드(daemon thread) ….. 818<br>1.8 쓰레드의 실행제어 ….. 822
8. 쓰레드의 동기화 ….. 841<br>2.1 synchronized를 이용한 동기화 ….. 841<br>2.2 wait()과 notify() ….. 845<br>2.3 Lock과 Condition을 이용한 동기화 ….. 853<br>2.4 volatile ….. 860<br>2.5 fork & join 프레임웍 ….. 862
9. 가상 쓰레드(virtual thread) ….. 867<br>3.1 가상 쓰레드란? ….. 867<br>3.2 가상 쓰레드의 생성과 사용 ….. 868<br>3.3 가상 쓰레드의 특징 ….. 869<br>3.4 플랫폼 쓰레드와 가상 쓰레드 ….. 871<br>3.5 가상 쓰레드의 상태 ….. 878<br>3.6 가상 쓰레드 작성시 주의사항 ….. 884<br>3.7 Continuation과 StackChunk ….. 885
10. Executor와 ExecutorService ….. 889<br>4.1 Executor ….. 889<br>4.2 ThreadFactory ….. 890<br>4.3 ExecutorService ….. 892<br>4.4 쓰레드 풀(thread pool) ….. 898<br>4.5 Future ….. 903<br>4.6 CompletableFuture ….. 913<br>Chapter 14 할마와 스팀
11. 람다식(lambda Expression) ….. 928<br>1.1 람다식이란? ….. 928<br>1.2 람다식 작성하기 ….. 929<br>1.3 함수형 인터페이스(functional interface) ….. 931<br>1.4 java.util.function패키지 ….. 936

## Contents

1.5 Function의 합성과 Predicate의 결합 ….. 942<br>1.6 메서드 참조 ….. 946

1. 스트림(stream) ….. 948<br>2.1 스트림이란? ….. 948<br>2.2 스트림 만들기 ….. 953<br>2.3 스트림의 중간연산 ….. 958<br>2.4 Optional와 Optionallnt ….. 971<br>2.5 스트림의 최종연산 ….. 976<br>2.6 collect() ….. 980<br>2.7 Collector구현하기 ….. 997<br>2.8 스트림의 변환 ….. 1000<br>Chapter 15 ….. 입출력(I/O)
2. 자바에서의 입출력 ….. 1004<br>1.1 입출력이란? ….. 1004<br>1.2 스트림(stream) ….. 1004<br>1.3 바이트 기반 스트림 - InputStream, OutputStream ….. 1005<br>1.4 보조 스트림 ….. 1007<br>1.5 문자 기반 스트림 - Reader, Writer ….. 1008
3. 바이트 기반 스트림 ….. 1010<br>2.1 InputStream과 OutputStream ….. 1010<br>2.2 ByteArraylnputStream과 ByteArrayOutputStream ….. 1012<br>2.3 FileInputStream과 FileOutputStream ….. 1016
4. 바이트 기반의 보조 스트림 ….. 1019<br>3.1 FilterInputStream과 FilterOutputStream ….. 1019<br>3.2 BufferedInputStream과 BufferedOutputStream ….. 1020<br>3.3 DatalnputStream과 DataOutputStream ….. 1023<br>3.4 SequencelnputStream ….. 1029<br>3.5 PrintStream ….. 1031
5. 문자 기반 스트림 ….. 1035<br>4.1 Reader와 Writer ….. 1035<br>4.2 FileReader와 FileWriter ….. 1037<br>4.3 PipedReader와 PipedWriter ….. 1039<br>4.4 StringReader와 StringWriter ….. 1041
6. 문자 기반의 보조 스트림 ….. 1042<br>5.1 BufferedReader와 BufferedWriter ….. 1042<br>5.2 InputStreamReader와 OutputStreamWriter ….. 1043
7. 표준 입출력과 File ….. 1045<br>6.1 표준 입출력 - System.in, System.out, System.err ….. 1045<br>6.2 표준 입출력의 대상변경 - setln(), setOut(), setErr() ….. 1047<br>6.3 RandomAccessFile ….. 1049<br>6.4 File ….. 1053
8. 직렬화(serialization) ….. 1072<br>7.1 직렬화란? ….. 1072<br>7.2 ObjectlnputStrea과 ObjectOutputStream ….. 1073<br>7.3 직렬화 가능한 클래스 만들기 - Serializable, transient ….. 1075<br>7.4 직렬화 가능한 클래스의 버전관리 ….. 1081<br>Chapter 16 네트워킹(networking)
9. 네트워킹(networking) ….. 1084<br>1.1 클라이언트/서버(client/server) ….. 1084<br>1.2 IP주소(IP address) ….. 1086<br>1.3 InetAddress ….. 1087<br>1.4 URL과 URI ….. 1089<br>1.5 URLConnection ….. 1092
10. 소켓 프로그래밍 ….. 1097<br>2.1 TCP와 UDP ….. 1097<br>2.2 TCP소켓 프로그래밍 ….. 1098<br>2.3 UDP소켓 프로그래밍 ….. 1116

Memo

Chapper 01<br>자바를 시작하기 전에<br>getting started with Java<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1. 자바(Java Programming Language)

## 1.1 자바란?

자바는 썬 마이크로시스템즈(Sun Microsystems, 이하 썬)에서 개발하여 1996년 1월에 공 식적으로 발표한 객체지향 프로그래밍 언어이며, 추후에 함수형 프로그래밍 기능이 추가 되었다. 전세계적으로 가장 많이 사용되는 프로그래밍 언어 중의 하나로 약 30년동안 꾸준 히 발전해왔으며 쓰이지 않는 곳을 찾기가 힘들정도로 폭넓은 분야에서 사용된다.<br>좁은 의미에서의 자바는 단순히 프로그래밍 언어지만, 넓은 의미에서 자바는 프로그래밍 언어 뿐만 아니라 관련된 여러 소프트웨어와 명세(specification)를 포함한다.<br>자바는 특정 플랫폼에 종속되지 않는 소프트웨어를 개발하고 배포하는데 필요한 모든 것 을 제공한다. 그 덕분에 임베디드 시스템, 모바일 기기, 기업용 서버, 게임, 빅데이터, 인 공지능에 이르기까지 아주 널리 쓰이고 있다.<br>자바는 SE(Standard Edition), ME(Micro Edition), EE(Enterprise Edition)등 여러가 지 종류가 있으며 대부분의 경우 자바는 ’Java SE’를 의미한다.<br>I 참고 I Java EE는 2017년에 Eclipse재단으로 이전되면서 Jakarta EE로 이름이 변경되었다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-016_629_1138_1181_259.jpg -->

널리 사용되는 만큼 신중한 기능 개선으로 발전이 더디다는 평을 받아왔지만, 2017년 이후 로 업데이트가 빨라져서 6개월마다 새로운 버전이 출시된다. 앞으로 최소한 몇년간은 자 바는 기업 환경에서 가장 많이 사용되는 프로그래밍 언어의 지위를 내어주지 않을 것으로 보인다.<br>모던 프로그래밍 언어에서 가장 핵심적인 것은 객체지향 개념과 함수형 개념인데, 자바 로 작성된 객체지향 개념과 관련된 좋은 자료가 많기 때문에 객체지향 개념을 배우기에 는 자바만한 언어가 없다. 빅데이터에서 많이 쓰이는 함수형 프로그래밍 언어인 스칼라 (Scala)도 자바에서 발전된 것으로 자바를 잘 배워두면 여러 언어로 쉽게 확장해 나갈 수 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1.2 자바의 역사

자바의 역사는 1991년에 썬의 엔지니어들에 의해서 고안된 오크(Oak)라는 언어에서부터 시작되었다. 원래 목표는 가전제품에 탑재될 소프트웨어를 만드는 것이었는데, 객체지향 언어인 C++을 확장하려다가 부족함을 느껴서 C++의 단점을 보완한 새로운 언어인 Oak 를 개발하기로 결정하였다.<br>인터넷이 등장하자 운영체제에 독립적인 Oak가 이에 적합하다고 판단하여 개발 방향을 인터넷에 맞게 바꾸면서 이름을 자바(Java)로 변경하고, 1996년 1월에 자바의 정식 버전 을 발표했다. 그 당시만 해도 자바로 작성된 애플릿(Applet)은 웹페이지에 사운드와 애니 메이션 등의 멀티미디어적인 요소들을 제공할 수 있는 유일한 방법이었기 때문에 많은 인 기를 얻고 단 기간에 많은 사용자층을 확보할 수 있었다.<br>이후에 애플릿이 매크로 미디어사의 플래시(flash)에게 밀려서 자바의 인기가 줄어들었 으나 1990년 말에 웹의 폭발적인 성장으로 자바의 인기가 다시 급상승하였다. 대규모의 서버 애플리케이션의 개발에 자바가 사용됨으로써 실무에서 탄탄한 입지를 확보하게 되 었다. 그러다가 2008년에 모바일 운영체제인 안드로이드에 자바가 사용되면서 자바의 활 용 분야가 더욱 확대되면서 자바가 쓰이지 않는 곳이 없다고 할 정도가 되었다.

## 썬에서 오라클로

썬은 자바와 MySQL데이터베이스등으로 오픈소스 발전에 큰 기여를 해왔으나, 2000년대 후반에 리눅스의 발전과 닷컴 버블의 붕괴로 주 수익원이던 하드웨어 판매의 급락과 수익 이 낮은 오픈소스의 특성으로 경영란에 빠지게 되었다.<br>결국 데이터베이스의 1인자 오라클(Oracle)이 2010년에 썬을 인수함으로써 자바와 MySQL데이터베이스를 확보하게 되었다. 오라클이 오픈소스의 수익성을 강화하면서 그 동안 무료로 사용해 왔던 자바의 유료화가 우려되었으나 기업이나 상업적 용도가 아니면 여전히 자바는 무료로 사용할 수 있다.

## Oracle JDK와 OpenJDK

오라클은 자바 개발도구인 JDK(Java Development Kit)의 대부분을 Oracle OpenJDK 라는 오픈소스로 jdk.java.net 사이트에서 공개하고 있으며, 이를 기반으로 여러 기업이 자신만의 JDK를 오픈소스로 개발해서 공개하고 있다.

I 참고 I 오픈소스인 OpenJDK는 조건없이 무료이고 소스가 모두 공개되어있다. [https://github.com/openjdk/jdk](https://github.com/openjdk/jdk)

| 배포판 | 공급자 | 설명 |
| --- | --- | --- |
| Oracle OpenJDK | Oracle | 오라클이 제공하는 OpenJDK의 공식 배포판. 6개월만 지원 |
| Eclipse Temurin | Eclipse Adoptium | 다양한 플랫폼을 지원하며 무료로 LTS 버전의 장기 지원 |
| Amazon Corretto | Amazon | AWS 서비스와 통합에 적합하며 무료로 LTS 버전의 장기 지원 |
| Azul Zulu | Azul Systems | 다양한 플랫폼을 지원하며 무료로 LTS 버전의 장기 지원 |
| Red Hat OpenJDK | Red Hat | 대규모 기업 환경(RHEL)에서 안정성과 호환성이 뛰어남. |

A 표1-1 OpenJDK의 종류

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>오픈소스인 Oracle OpenJDK와 달리, Oracle JDK는 오픈 소스가 아니며 상업용 목 적이 아닌 개인 사용자에게만 무료이다. Oracle OpenJDK는 Oracle JDK가 제공하는 JMC (Java Misssion Control) 와 JFR (Java Flight Recorder) 등의 상용도구가 포함되 지 않는다는 점을 제외하면 Oracle JDK와 거의 동일하다.

JDK의 장기 지원 정책 - LTS, Long Term Support<br>기존에는 JDK의 발표 후 3년까지 보안 업데이트와 버그 수정이 무료로 지원되었으나 JDK 8부터는 LTS로 지정된 특정 버전만 ’장기 지원(최소 8년)’을 제공하고, LTS가 아닌 버전은 다음 버전이 나오는 6개월 후면 지원이 종료된다.

학습 목적인 경우는 LTS버전이 아니어도 상관없으나, 상용 제품이나 기업 환경에서는 반드시 LTS버전의 JDK를 선택해야 한다.

I 참고 I Oracle JDK와 달리 Oracle OpenJDK는 LTS를 지원 안한다. LTS를 지원하는 OpenJDK가 필요하면 표1-1을 참고.

자바의 새로운 기능 - JDK 8 ~ 21<br>집필 시점인 2025년을 기준으로 JDK 21이 최신 LTS버전이고, 아래에 JDK 8부터 JDK 21까지 새로 추가된 주요 기능의 목록을 정리하였다. 자세한 내용은 목록에 적힌 책의 페 이지를 참고하자.<br>먼저 가장 중요한 기능 몇가지를 요약하면, JDK 8에서 람다식과 스트림 API가 추가되면 서 함수형 프로그래밍이 가능해졌다는 것과 JDK 9에서 G1(Garbage First)이라는 이름 의 가비지 컬렉터(Gabage Collector)가 새로 추가되어 자동으로 메모리를 관리해주는 기 능이 획기적으로 개선되었다. 그리고 JDK 9부터 추가된 모듈 시스템 덕분에 JDK가 모듈 단위로 잘 정리되어 6개월마다 새로운 버전을 출시하며 빠르게 변화할 수 있게 되었다.

I 참고 I JDK의 버전은 1.x 형식으로 표기하였으나 JDK 1.5부터 JDK 5와 같이 JDK × 의 형식으로 변경되었다.

JDK 8-2014.3 LTS

- 함수형 프로그래밍 지원 - 람다식 & 스트림 API
- 새로운 날짜 및 시간 API: java.time패키지
- Optional 클래스: NullPointerException 방지

JDK 9-2017.9

- 모듈 시스템(JEP 261, p.774)
- 간결한 문자열(compact strings, JEP 254 p.507)
- 인터페이스에 private method 허용(p.432)
- G1을 기본 가비지 컬렉터(GC)로 변경
- REPL(Read-Eval-Print-Loop) 도구로 jshell을 제공

JDK 10-2018.3

- 지역 변수 타입 추론(var, JEP 286, p.54)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

JDK 11-2018.9 LTS

- HTTP Client API: 현대적인 비동기 HTTP 요청 지원
- String클래스에 메서드 추가: isBlank, lines, repeat 등(p.498)
- var를 Lambda식에 사용 가능. (JEP 323, p.929)

JDK 14-2020.3

- switch식(switch expressions, JEP 361, p.178)

JDK 15-2020.9

- 텍스트 블럭(JEP 378, p.56)

JDK 16-2021.3

- 레코드(records, JEP 395, p.754)
- instanceof를 위한 패턴매칭(JEP 394, p.390)

JDK 17-2021.9 LTS

- 실드 클래스(sealed classes, JEP 409, p.766)

JDK 18-2022.3

- 간단한 웹서버 제공(/bin/jwebserver, JEP 408)
- 기본 인코딩을 UTF-8로 변경(JEP 400, p.507)

JDK 21-2023.9 LTS

- 가상 쓰레드 (JEP 444, p.867)
- switch문을 위한 패턴매칭(JEP 441, p.769)
- 레코드 패턴(JEP 440, p.759)
- Collections Framework에 Sequenced Collections 추가 (JEP 431, p.614)

위의 목록에서 프리뷰 기능(preview features)은 제외하였다. 프리뷰 기능은 새로운 실 험적 기능을 개발자의 피드백을 받기 위해 미리보기 형식으로 제공하는 것으로 향후 자바 버전에서 정식 기능이 되거나 폐기될 수 있다.

프리뷰 기능을 사용하려면 컴파일 할 때와 실행할 때와 실행할 때 아래와 같이 별도의 옵션을 지정해야 한다.<br>c:>javac –enable-preview –release 21 PreviewTest.java c: >java –enable-preview PreviewTest

I 참고 I 버전별로 추가 및 변경된 사항에 대한 보다 자세한 내용은 아래의 링크에서 확인할 수 있다.<br>[https://docs.oracle.com/en/java/javase/21/language/java-language-changes-release.html](https://docs.oracle.com/en/java/javase/21/language/java-language-changes-release.html)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>자바 개선 제안 제도 - JEP, Java Enhancement Proposal<br>JDK 8부터 도입된 ’자바 개선 제안 제도(JEP)’로, 자바에 새로운 기능의 추가나 기존 기 능을 개선을 제안하는 공식 문서이다.<br>JEP마다 고유 번호가 있으며, OpenJDK 커뮤니티(openjdk.org)를 통해 논의, 승인, 구 현 과정을 거친다. 차기 JDK버전에 어떤 JEP들을 포함시킬지 결정한다.

I 참고 I [https://openjdk.org/jeps/0](https://openjdk.org/jeps/0) 에서 JEP의 목록을 확인할 수 있다.

OpenJDK는 오픈소스 답게 OpenJDK 커뮤니티와 JEP를 통해 Java 플랫폼의 발전 방향 을 개발자들과 함께 고민하고 결정하며, 개발자들에게 Java의 미래를 이해할 수 있게 한 다.<br>I 참고 I JEP와 유사한 JSR(Java Spec Request)도 있는데, JSR은 자바의 표준을 위한 제안으로 JEP보다 상위 개념으로 서로 연관되어 있다. 예를 들어 JSR 376은 JEP 261과 JEP 282에 의해 구현되었다.

## 1.3 자바언어의 특징

자바는 최근에 발표된 언어답게 기존의 다른 언어에는 없는 많은 장점들을 가지고 있다. 그 중 대표적인 몇 가지에 대해서 알아보도록 하자.

1. 운영체제에 독립적이다.

기존의 언어는 한 운영체제에 맞게 개발된 프로그램을 다른 종류의 운영체제에 적용하기 위해서는 많은 노력이 필요하였지만, 자바에서는 더 이상 그런 노력을 하지 않아도 된다. 이것은 일종의 에뮬레이터인 자바가상머신(JVM)을 통해서 가능한 것인데, 자바 응용프 로그램은 운영체제나 하드웨어가 아닌 JVM하고만 통신하고 JVM 이 자바 응용프로그램 으로부터 전달받은 명령을 해당 운영체제가 이해할 수 있도록 변환하여 전달한다. 자바로 작성된 프로그램은 운영체제에 독립적이지만 JVM은 운영체제에 종속적이어서 썬에서는 여러 운영체제에 설치할 수 있는 서로 다른 버전의 JVM을 제공하고 있다.<br>그래서 자바로 작성된 프로그램은 운영체제와 하드웨어에 관계없이 실행 가능하며 이것 을 ’한번 작성하면, 어디서나 실행된다. (Write once, run anywhere)’고 표현하기도 한다.

1. 객체지향 언어이자 함수형 언어이다.

자바는 프로그래밍의 대세로 자리 잡은 객체지향 프로그래밍언어(object-oriented pro- gramming language) 중의 하나로 객체지향개념의 특징인 상속, 캡슐화, 다형성이 잘 적 용된 순수한 객체지향언어라는 평가를 받고 있다. JDK 8부터 함수형 프로그래밍을 지원 하고 있어서 최신 변화의 흐름에 맞춰 지속적으로 성장해 가고 있다.

1. 비교적 배우기 쉽다.

자바의 연산자와 기본구문은 C++에서, 객체지향관련 구문은 스몰톡(small talk)이라는 객체지향언어에서 가져왔다. 이 들 언어의 장점은 취하면서 복잡하고 불필요한 부분은 과

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

감히 제거하여 단순화함으로서 쉽게 배울 수 있으며, 간결하고 이해하기 쉬운 코드를 작 성할 수 있도록 하였다. 객체지향언어의 특징인 재사용성과 유지보수의 용이성 등의 많은 장점에도 불구하고 배우기가 어렵기 때문에 많은 사용자층을 확보하지 못했으나 자바의 간결하면서도 명료한 객체지향적 설계는 사용자들이 객체지향개념을 보다 쉽게 이해하고 활용할 수 있도록 하여 객체지향 프로그래밍의 저변확대에 크게 기여했다.

## 4. 자동 메모리 관리(Garbage Collection)

자바로 작성된 프로그램이 실행되면, 가비지 컬렉터(garbage collector)가 자동적으로 메 모리를 관리해주기 때문에 프로그래머는 메모리를 따로 관리 하지 않아도 된다. 가비지 컬렉터가 없다면 프로그래머가 사용하지 않는 메모리를 체크하고 반환하는 일을 수동적 으로 처리해야할 것이다. 자동으로 메모리를 관리한다는 것이 다소 비효율적인 면도 있지 만, 프로그래머가 보다 프로그래밍에 집중할 수 있도록 도와준다.

I 참고 I JDK 9부터 성능이 크게 향상된 G1이 기본 가비지 컬렉터가 되었다. 실행시 옵션으로 가비지 컬렉터를 변경가능

## 5. 네트워크와 분산처리를 지원한다.

인터넷과 대규모 분산환경을 염두에 둔 까닭인지 풍부하고 다양한 네트워크 프로그래밍 라이브러리(Java API)를 통해 비교적 짧은 시간에 네트워크 관련 프로그램을 쉽게 개발 할 수 있도록 지원한다.

## 6. 멀티쓰레드를 지원한다.

일반적으로 멀티쓰레드(multi-thread)의 지원은 사용되는 운영체제에 따라 구현방법도 상이하며, 처리 방식도 다르다. 그러나 자바에서 개발되는 멀티쓰레드 프로그램은 시스템 과는 관계없이 구현가능하며, 관련된 라이브러리(Java API)가 제공되므로 구현이 쉽다. 그리고 여러 쓰레드에 대한 스케줄링(scheduling)을 자바 인터프리터가 담당하게 된다.

I 참고 I JDK 21부터 가상 쓰레드(virtual thread)가 추가되어 자바로 고성능, 고처리량의 서버를 만들 수 있게 되었다.

## 7. 동적 로딩(Dynamic Loading)을 지원한다.

보통 자바로 작성된 애플리케이션은 여러 개의 클래스로 구성되어 있다. 자바는 동적 로 딩을 지원하기 때문에 실행 시에 모든 클래스가 로딩되지 않고 필요한 시점에 클래스를 로딩하여 사용할 수 있다는 장점이 있다. 그 외에도 일부 클래스가 변경되어도 전체 애플 리케이션을 다시 컴파일하지 않아도 되며, 애플리케이션의 변경사항이 발생해도 비교적 적은 작업만으로도 처리할 수 있는 유연한 애플리케이션을 작성할 수 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

### 1.4 JVM(Java Virtual Machine)

JVM은 ’Java virtual machine’을 줄인 것으로 직역하면 ’자바를 실행하기 위한 가상 기 계’라고 할 수 있다. 가상 기계라는 말이 좀 어색하겠지만 영어권에서는 컴퓨터를 머신 (machine)이라고도 부르기 때문에 ’머신’이라는 용어대신 ’컴퓨터’를 사용해서 ’자바를 실 행하기 위한 가상 컴퓨터’라고 이해하면 좋을 것이다.<br>’가상 기계(virtual machine)’는 소프트웨어로 구현된 하드웨어를 뜻하는 넓은 의미의 용어이며, 컴퓨터의 성능이 향상됨에 따라 점점 더 많은 하드웨어들이 소프트웨어화되어 컴퓨터 속으로 들어오고 있다. 그 예로는 TV와 비디오를 소프트웨어화한 윈도우 미디어 플레이어라던가, 오디오 시스템을 소프트웨어화한 윈앰프(winamp) 등이 있다.<br>이와 마찬가지로 ’가상 컴퓨터(virtual computer)’는 실제 컴퓨터(하드웨어)가 아닌 소프 트웨어로 구현된 컴퓨터라는 뜻으로 컴퓨터 속의 컴퓨터라고 생각하면 된다.

자바로 작성된 애플리케이션은 모두 이 가상 컴퓨터(JVM)에서만 실행되기 때문에, 자바 애플리케이션이 실행되기 위해서는 반드시 JVM이 필요하다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-022_375_842_1121_411.jpg -->

- 그림1-1 Java애플리케이션과 일반 애플리케이션의 비교

일반 애플리케이션의 코드는 OS만 거치고 하드웨어로 전달되는데 비해 Java애플리케이 션은 JVM을 한 번 더 거치기 때문에, 그리고 하드웨어에 맞게 완전히 컴파일된 상태가 아 니고 실행 시에 해석(interpret)되기 때문에 속도가 느리다는 단점을 가지고 있다. 그러나 요즘엔 바이트코드(컴파일된 자바코드)를 하드웨어의 기계어로 바로 변환해주는 JIT컴파 일러와 향상된 최적화 기술이 적용되어서 속도의 격차를 많이 줄였다.

그림1-1에서 볼 수 있듯이 일반 애플리케이션은 OS와 바로 맞붙어 있기 때문에 OS종속 적이다. 그래서 다른 OS에서 실행시키기 위해서는 애플리케이션을 그 OS에 맞게 변경해 야한다. 반면에 Java 애플리케이션은 JVM하고만 상호작용을 하기 때문에 OS와 하드웨 어에 독립적이라 다른 OS에서도 프로그램의 변경없이 실행이 가능한 것이다. 단, JVM은 OS에 종속적이기 때문에 해당 OS에서 실행가능한 JVM이 필요하다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| Java 애플리케이션 | Java 애플리케이션 | Java 애플리케이션 |
| --- | --- | --- |
| Windows용 JVM | Macintosh용 JVM | Linux용 JVM |
| OS(Windows) | OS(Macintosh) | OS(Linux) |
| 컴퓨터(하드웨어) | 컴퓨터(하드웨어) | 컴퓨터(하드웨어) |

- 그림1-2 다양한 OS용 JVM

그래서 오라클에서는 일반적으로 많이 사용되는 주요 OS용 JVM을 제공하고 있고, 이렇 게 함으로써 자바의 중요한 장점 중의 하나인 “Write once, run anywhere. (한 번 작성하 면 어디서든 실행된다.)”이 가능하게 되는 것이다.

## 그랄 VM - Graal Virtual Machine

그랄 VM은 고성능, 다중언어 실행환경으로 기존의 핫스팟 VM의 JIT 컴파일러를 그랄 컴 파일러로 대체한 가상 머신(Virual Machine)이다. 자바 외에도 다양한 프로그래밍 언어 (JavaScript, phthon, Ruby, R 등)를 지원하고 심지어는 여러 언어를 혼합해서 코드를 작성하는 것도 가능한데, 그 이유는 그랄VM은 각 언어의 소스 코드를 인터프리터가 그랄 VM이 이해할 수 있는 중립적인 표현으로 변환해서 처리하기 때문이다.<br>프로그래밍 언어마다 런타임 환경 성능이 제각각이라 어떤 언어는 성능이 상대적으로 많이 떨어지기도 하는데, 그랄VM은 입력된 중간 표현을 자동으로 최적화하고 런타임에 JIT컴파일까지 해주기 때문에 때로는 네이티브 컴파일러보다 실행 성능이 나을 수 있다.<br>특히 서버리스 및 클라우드 환경에 맞게 애플리케이션을 최적화하는 네이티브 바이너리 (native image)로 변환하는 기능을 제공하는 것이 큰 장점이다.

오라클은 2018년 5월에 그랄 VM을 처음으로 공식 발표하였으나, 보다 효율적인 개발을 위해 JDK 16부터 JDK에서 독립시켜서 별도의 JDK로 개발하고 있다. 머지않아 Oracle JDK의 기본 VM으로 포함될 것이다.

I 참고 I 그랄VM을 사용하려면 그랄VM이 포함된 JDK를 설치해야한다. [https://www.graalvm.org/downloads](https://www.graalvm.org/downloads)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2. 자바개발환경 구축하기

## 2.1 자바 개발도구(JDK)설치하기

자바로 프로그래밍을 하기위해서는 먼저 JDK(Java Development Kit)를 설치해야 한다. JDK를 설치하면, 자바가상머신(Java Virtual Machine, JVM)과 자바클래스 라이브러리 (Java API)외에 자바를 개발하는데 필요한 프로그램들이 설치된다.

JDK 다운로드 받기<br>이 책을 학습하기 위해서는 JDK 21 이상의 버전이 필요하며, [http://java.sun.com/에서](http://java.sun.com/%EC%97%90%EC%84%9C) 다운로드 받아서 설치할 것이다. JDK를 설치하는 것만으로는 자바를 학습하기에 불편하 기 때문에, 보다 편리한 개발환경을 제공하는 통합 개발 환경(IDE)가 필요한다. 본인에게 익숙한 것을 사용해도 되지만 가능하면 이 책을 학습하는 동안 인텔리제이(IntelliJ IDEA) 을 추천한다. 인텔리제이를 설치하는 방법은 JDK를 설치한 다음에 설명할 것이다.

I 참고 I JDK를 설치하는 방법이 변경된 경우 [https://github.com/castello/javajungsuk4](https://github.com/castello/javajungsuk4) 에서 JDK21\_설치방법.pdf을 확인

1 브라우저를 열고

[http://java.sun.com을](http://java.sun.xn--com-of0o/)

방문하면 아래와 같은 화면이 나온다. 아래의 화면에 서 ’Java SE 21(LTS)’를 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-024_614_1003_1246_331.jpg -->

2 아래의 페이지가 나타나면 아래로 약간 스크롤하자. 두번째 그림처럼 다운로드 받을 JDK의 종류를 선택하는 화면이 나타난다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-024_384_831_1997_416.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

윈도즈 사용자는 아래의 그림과 같이 Windows를 클릭하고, 아래의 세 번째 링크인 ’x64 MSI Installer’를 클릭하면, 다운로드가 시작된다.

## Java SE Development Kit 21.0.6 downloads

JDK 21 binaries are free to use in production and free to redistribute, at no cost, under the Oracle No-Fee Terms and Conditions (NFTC).<br>JDK 21 will receive updates under the NFTC, until September 2026, a year after the release of the next LTS. Subsequent JDK 21 updates will be licensed under the Java SE OTN License (OTN) and production use beyond the limited free grants of the OTN license will require a fee.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-025_341_1322_593_378.jpg -->

맥OS 사용자는 아래의 그림에서 macOS를 클릭하고, 두 번째 링크인 ’ARM64 DMG Installer’를 클릭하면, 다운로드가 시작된다.

I 참고 I Intel CPU가 장착된 컴퓨터의 경우 네 번째 링크인 ’64 DMG Installer’를 클릭해야 한다.

## Java SE Development Kit 21.0.6 downloads

JDK 21 binaries are free to use in production and free to redistribute, at no cost, under the Oracle No-Fee Terms and Conditions (NFTC).<br>JDK 21 will receive updates under the NFTC, until September 2026, a year after the release of the next LTS. Subsequent JDK 21 updates will be licensed under the Java SE OTN License (OTN) and production use beyond the limited free grants of the OTN license will require a fee.

| Linux  Windows |  |  |
| --- | --- | --- |
| Product/file description □ (1) 클릭 | File size | Download |
| ARM64 Compressed Archive | 182.01 MB | [https://download.oracle.com/java/21/latest//dk-21\_macos-aarch64\_bin.tar.g2](https://download.oracle.com/java/21/latest//dk-21_macos-aarch64_bin.tar.g2) (sha256) |
| ARM64 DMG Installer | 181.32 MB | [https://download.oracle.com/java/21/latest/jdk-21\_macos-aarch64\_bin.dmg](https://download.oracle.com/java/21/latest/jdk-21_macos-aarch64_bin.dmg) (sha256) |
| x64 Compressed Archive | 184.25 MB | [https://download.oracle.com/iava/21/latest/jdk-21\_macos-x64\_bin.tar.gz](https://download.oracle.com/iava/21/latest/jdk-21_macos-x64_bin.tar.gz) (sha256) |
| x64 DMG Installer | 183.57 MB | [https://download.oracle.com/java/21/latest/jdk-21\_macos-x64\_bin.dmg](https://download.oracle.com/java/21/latest/jdk-21_macos-x64_bin.dmg) (sha256) |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>JDK 설치하기 - 윈도우즈<br>이제 다운로드 받은 JDK를 설치해보자. 윈도우즈에 JDK를 설치하는 방법을 먼저 설명하고 그 다음에 맥OS에 JDK를 설치하는 방법을 설명한다.

1 다운로드 받은 ’jdk-21\_windows-x64\_bin.msi’를 실행하면 다음과 같은 화면을 볼 수 있다. ’Next >’버튼을 클릭하자

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-026_185_1064_609_288.jpg -->

Welcome to the Installation Wizard for Java SE Development Kit 21.0.6

This wizard will guide you through the installation process for the Java SE Development Kit 21.0.6.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-026_132_424_1283_922.jpg -->

2 JDK를 설치할 위치를 묻는 화면인데, 설치될 위치를 변경하려면, ’Change…’버튼을 누륵면 된다. 그냥 설치될 위치 ’C:WProgram FilesWJavaWjdk-21’만 확인하고, Next버튼을 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-026_818_1082_1572_288.jpg -->

\[ebook - ㅅnㅁ흘. 부료 휴유\] 사바늬 상식 4반 Java 21 놀끌더 2025. /. / 술시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

3 아래와 같은 화면이 나타나면서 설치가 시작되는데, 잠시 후 설치가 모두 끝나고 두 번째 화면 이 나타난다. 그러면 설치가 잘 끝난 것이다. ’Close’버튼을 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-027_184_1063_413_473.jpg -->

Status:<br>□

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-027_177_1060_1293_475.jpg -->

Java(TM) SE Development Kit 21.0.6 (64-bit) Successfully Installed

Click Next Steps to access tutorials, API documentation, developer guides, release notes and more to help you get started with the JDK.<br>□<br>Next Steps

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-027_137_1062_1960_473.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

4 설치가 끝났으나 한가지 설정이 남았다. 제어판을 열고, 검색창에 ‘환경변수’라고 입력하자.<br>I 참고 I 제어판은 윈도우키를 누르고, 찾기에 ’제어판’이라고 입력하면 찾을 수 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-028_522_1003_405_328.jpg -->

아래의 화면에서 ’시스템 환경 변수 편집’을 클릭하면, ’시스템 속성’ 화면이 나타난다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-028_420_824_1039_422.jpg -->

5 아래 왼쪽의 화면에서 ’환경 변수(N)…’버튼을 클릭하면 오른쪽과 같은 ’환경 변수’화면이 나타 나는데 여기서 ’새로 만들기( W ) …’버튼을 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-028_676_1287_1630_194.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

6 아래와 같은 화면이 나타나면, ’변수 이름’으로 ’JAVA\_HOME’을 입력하고 ’변수 값’에는 아까 JDK를 설치한 경로인 ’C:WProgram FilesWJavaWjdk-21’을 입력하자. 만일 JDK를 다른 곳에 설치했으면, 설치한 경로를 입력해야 한다. 입력한 내용을 다시 한번 확인하고 ’확인’을 누르자.

I 참고 I ’변수 값’을 직접 입력하기 보다 ’디렉터리 찾아보기(D)…’버튼을 눌러서 찾는 것이 확실하다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-029_337_1270_502_376.jpg -->

7 아래와 같은 화면이 나타나면, ‘시스템 변수’목록의 스크롤바를 아래로 내리면 ’Path’항목을 찾 을 수 있다. 이 항목을 클릭하고, ’편집(I)…’버튼을 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-029_1146_1169_1041_426.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

8 아래와 같이 새로운 화면이 열리면 우측 상단의 ’새로 만들기(N)’버튼을 누르고,’%JAVA\_ HOME%Wbin’을 입력하고 Enter키를 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-030_910_1091_401_365.jpg -->

9 우측의 ‘위로 이동(U)’버튼을 여러번 눌러서 새로 추가한 경로가 맨 위로 올라가게 하고 ’확인’ 버튼을 눌러서 창을 닫는다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-030_909_1157_1477_366.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

10 아래의 화면에서 전에 입력한 내용이 추가된 것을 확인하고, ’확인’버튼을 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-031_906_927_402_553.jpg -->

11 아래와 같은 화면에서 다시 ’확인’버튼을 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-031_861_754_1477_636.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

12 이제 설정은 다 끝났고, 설정이 잘되었는지 확인해 보자. ’윈도우키+R’을 누르면 아래와 같은 화면이 나오는데, ’cmd’라고 입력하고 ’확인’버튼을 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-032_440_818_417_424.jpg -->

13 새로운 창이 열리면, ’jshell’이라고 입력하고 엔터키를 누르자. 아래와 같은 결과가 나오면 설 정이 잘된 것이니 창을 닫으면 JDK의 설치와 설정이 모두 끝났다.

I 참고 I 만일 ’jshell은 내부 또는 … 아닙니다.’라는 메시지가 나오면 설정이 잘못된 것이며, 4~11의 과정을 다시 반복하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-032_330_779_1129_442.jpg -->

JDK 설치하기 - 맥OS<br>맥OS 사용자를 위한 JDK설치 방법에 대해서 알아보자.

1 앞에서 다운받은 jdk-21\_macos-aarch64\_bin.dmg파일을 실행하면 다음과 같은 화면이 나 온다. ’JDK 21.0.6.pkg’를 더블 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-032_459_687_1871_460.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

2 아래의 왼쪽 화면에서 ’Continue’버튼을 클릭하면, 오른쪽 화면이 나오는데 다시 ’Continue’버튼을 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-033_466_1438_402_371.jpg -->

3 아래의 왼쪽 화면에서 ’Install’버튼을 누르면 설치가 시작되면서 오른쪽과 같은 화면이 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-033_463_1285_1014_371.jpg -->

4 아래와 같은 화면이 나오면 설치가 잘 끝난 것이다. ‘Close’버튼을 누르자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-033_724_1151_1618_498.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

5 이제 설치가 끝났으니 설정을 할 차례이다. 사용자 디렉토리 아래의’.bash\_profile’파일을 열 고 아래의 두줄을 마지막에 추가하고 저장하자.

```txt
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21.jdk/
Contents/Home
    export PATH=$JAVA_HOME/bin:${PATH}
```

6 마지막으로 터미널을 열고 아래의 명령을 입력하면 변경한 설정이 반영된다.

```txt
%source ~/.bash_profile
```

7 변경한 설정이 잘 반영되었는지 확인하기 위해 아래와 같이 ’jshell’을 입력하고 엔터키를 누르 면 아래와 같은 결과가 나오는지 확인하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-034_250_1045_1042_361.jpg -->

## 2.2 인텔리제이(Intellij IDEA) 설치하기

앞으로 통합 개발 도구인 인텔리제이(IntelliJ IDEA)를 설치하고, 간단한 예제를 실행해볼 것이다. 설치 과정이 다소 변경될 수 있으므로 앞으로 설명하는 내용이 실제 화면과 다르 면 저자의 깃헙 리포([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) ’인텔리제이\_설 치방법.pdf’에서 최신 설치방법을 확인하자.<br>인텔리제이는 두가지 버전이 있는데, 무료 버전으로도 학습에 아무런 지장이 없기 때문 에 무료 버전을 설치할 것이다.

- Intellij IDEA Ultimate - 유료, 30일 무료
- Intellj IDEA Community Edition - 무료

먼저 윈도우에 설치하는 방법을 설명하고, 그 다음에 MacOS에 설치하는 방법을 설명할 것이다. 본인의 OS에 맞게 설치하면 된다.

Intellij 다운로드하기<br>1 브라우저를 열고 intellij download라고 입력하여 검색한 후, 아래의 링크를 클릭<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-035_356_997_290_512.jpg -->

Download the latest version of IntelliJ IDEA for Windows, macOS or Linux.

2 아래의 페이지가 나타나면 OS의 종류를 선택해서 클릭하고, 화면을 아래로 반 페이지 정도 스 크롤하자. 두번째 그림처럼 Intellj IDEA Community Edition이 나오는데, 여기서 윈도우즈의 경우 .exe(Windows), 맥OS의 경우 .dmg(Apple Sillicon)을 선택하고, ’Download’버튼을 클릭하자.

I 참고 I 맥OS인데 Intel CPU를 사용하는 경우, .dmg(Intel)을 선택하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-035_644_1096_1015_461.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-035_556_1093_1704_462.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

3 아래의 페이지가 나타나면서 다운로드가 자동으로 시작된다. 만일 자동으로 다운로드가 시작 되지 않으면, 아래의 수동 다운로드 링크를 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-036_367_1043_420_312.jpg -->

이제 다운로드한 파일을 실행해서 인텔리제이를 설치해 보자. 맥OS의 설치가 간단하므로 먼저 살펴보고, 그 다음에 윈도우에 설치하는 방법을 설명할 것이다.

## Intellij 설치하기 - 맥OS

1 전에 다운로드 받은 ‘idealC-2024.3.2.2-aarch64.dmg’를 더블 클릭하면 다음과 같은 화면 이 나타난다. 왼쪽의 ’Intellij IDEA CE’ 아이콘을 드래그해서 ‘Applications’ 아이콘 위로 겹쳐놓으 면 된다. 설치는 이것으로 끝이다.

I 참고 I 다운받은 파일의 이름은 새로운 버전이 나오면 달라질 수 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-036_644_1076_1332_292.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## Intellij 설치하기 - 윈도우즈

1 전에 다운로드 받은 ’idealC-2024.3.2.2.exe’를 더블 클릭하여 실행하면 다음과 같은 화면이 나오는데, ’다음 >’버튼을 클릭하자.

I 참고 I 다운받은 파일의 이름은 새로운 버전이 나오면 달라질 수 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-037_732_1178_511_411.jpg -->

2 인텔리제이를 설치할 위치를 지정하는 화면이 나오는데, 원하는 곳으로 변경해도 되지만 특별 한 이유가 없으면 기본을 지정된 위치에 설치하자. 그냥 ’다음 >’버튼을 클릭하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-037_732_1173_1497_412.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

3 아래에 표시된 옵션들을 클릭해서 체크하고, ’다음 >’버튼을 누른다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-038_664_1167_362_189.jpg -->

4 바로가기 아이콘이 생성될 시작 메뉴 폴더를 선택하는 화면이다. ’설치’버튼을 클릭하면 설치 가 시작된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-038_1176_947_1161_358.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

5 설치가 끝나면 아래와 같은 화면이 나타난다. ’지금 재부팅 하겠습니다.’클릭하고, ’마침’버튼 을 클릭하면 설치가 끝난다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-039_484_843_399_621.jpg -->

Intellij 실행하기 - 윈도우즈, 맥OS<br>1 바탕화면에 새로 생성된 아이콘을 클릭하면, 아래와 같은 화면이 나온다. 언어를 선택하고 ’다 음’버튼을 클릭하고, 그 다음의 사용자 계약 화면에서 체크하고 ’계속’버튼을 클릭하자.<br>I 참고 I 경우에 따라 아래의 화면이 생략될 수도 있으며,, 언어와 지역은 나중에 변경할 수 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-039_1209_1150_1154_420.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

2 아래의 화면에서 좌측의 ‘프로젝트’를 클릭하고, 중앙의 ’새 프로젝트’를 클릭하자.<br>I 참고 I 아래의 화면이 나타나지 않으면, 메뉴에서 File > New > Project…를 클릭면 다음 단계의 화면이 나타난다.<br>I 참고 I 좌측의 ’프로젝트’ 아래의 ’사용자 지정’을 클릭하면, 사용 언어와 테마 등의 설정을 변경할 수는 화면이 나온다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-040_812_991_444_330.jpg -->

3 새로 생성할 프로젝트의 정보를 입력하는 화면이 나오는데, 프로젝트의 이름을 입력하고 경로 를 변경하자. JDK는 전에 설치한 것이 자동으로 나타난다. 앞으로 챕터마다 이름만 다르게 새 프 로젝트를 생성하자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-040_905_1442_1496_80.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-040_38_1377_2386_197.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

4 새로운 프로젝트가 생성되고 자동으로 Main.java라는 파일이 아래와 같이 생성된다. 녹색 삼 각형을 클릭하면 프로그램이 실행되고 그 결과가 화면 하단의 콘솔에 ’Hello, World!’가 출력된다. 이제 이걸로 인텔리제이의 설치와 설정이 모두 끝났다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-041_526_1275_456_372.jpg -->

5 자바는 클래스 단위로 코드를 작성하며, 앞으로 새로운 예제를 작성할 때는 아래와 같이 새로 운 클래스를 생성하고 코드를 작성하면 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-041_529_1456_1163_190.jpg -->

위의 화면에서 ’새로 만들기(N)’을 클릭하면 아래와 같은 화면이 나오는데, 클래스 이름을 적고 엔 터키를 누르면 새로운 파일이 생성된다. 생성된 파일에 예제의 내용대로 작성하고 이전 단계와 같 이 녹색 삼각형을 눌르서 작성한 예제를 실행하면 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-041_469_712_1914_689.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3. 자바로 프로그램작성하기

### 3.1 Hello.java

자바로 프로그램을 개발하려면 JDK이외에도 편집기가 필요하다. 메모장과 같은 간단한 편집기도 있지만, 처음 자바를 배우는 사람들은 인텔리제이(IntelliJ IDEA)나 이클립스 (eclipse)와 같이 다양하고 편리한 기능을 겸비한 고급 개발도구를 사용하는 것이 좋다.<br>이클립스에 비해 기능은 떨어지지만, 가볍고 간단한 편집기로 비쥬얼 스튜디오 코드 (Visual Studio Code)라는 것도 있다.

I 참고 I 비쥬얼 스튜디오 코드는 [https://code.visualstudio.com/](https://code.visualstudio.com/) 에서 무료로 다운로드받을 수 있다.

```txt
- 예제1-1/Hello.java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java."); // 화며ᄂ에 그ᄅ자르ᄅ 추ᄅ려ᄀ하ᄂ다.
    }
        > 시ᄅ해ᄋ겨ᄅ과
        Hello, Java.
```

이 예제는 화면에 ’Hello, Java.’를 출력하는 아주 간단한 프로그램이다. 이 예제를 통해서 화면에 글자를 출력하려면 어떻게 해야 하는지 쉽게 알 수 있을 것이다.<br>예제1-1을 편집기를 이용해서 작성한 다음 ’Hello.java’로 저장하자. 이 때 클래스의 이 름 ’Hello’가 대소문자까지 정확히 같아야 한다.<br>이 예제를 실행하려면, 먼저 자바 컴파일러(javac.exe)를 사용해서 소스파일(Hello. java)로부터 클래스파일(Hello.class)을 생성해야 한다. 그 다음에 자바 인터프리터(java. exe)로 실행한다.

Hello.java 작성 $\xrightarrow[\text { 컴파일 }]{\text { javac.exe }}$ Hello.class 생성 $\xrightarrow[\text { 실 행 }]{\text { java.exe }}$ “Hello, world.” 출력

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-042_346_1010_1807_305.jpg -->

- 그림1-3 Hello.java를 컴파일하고 실행한 화면

그림1-3과 같은 결과를 얻었다면 자바로 프로그래밍할 준비가 모두 끝난 것이다. 만일 컴파일 시에 오류가 발생했다면 ’ 3.2 자주 발생하는 에러와 해결방법’을 참고하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

자바에서 모든 코드는 반드시 클래스 안에 존재해야 하며, 서로 관련된 코드들을 그룹으 로 나누어 별도의 클래스를 구성하게 된다. 그리고 이 클래스들이 모여 하나의 Java 애플 리케이션을 이룬다.<br>클래스를 작성하는 방법은 간단하다. 키워드 ‘class’ 다음에 클래스의 이름을 적고, 클래 스의 시작과 끝을 의미하는 괄호\{\} 안에 원하는 코드를 넣으면 된다.

```txt
class 클래스이름 {
    /*
        모든 코드는 클래스의 블럭{} 내에 작성해야한다. (주석 제외)
    */
}
```

I 참고 I 나중에 배우게 될 package문과 import문은 예외적으로 클래스의 밖에 작성한다.

아래 코드의 ’public static void main(String\[\] args)’는 main메서드의 선언부인데, 프 로그램을 실행할 때 ’java.exe’에 의해 호출될 수 있도록 미리 약속된 부분이므로 항상 똑 같이 적어주어야 한다.

I 참고 I ’\[\]’은 배열을 의미하는 기호로 배열의 타입(type) 또는 배열의 이름 옆에 붙일 수 있다. ’String\[\] args’는 String타 입의 배열 args를 선언한 것이며, ’String args\[\]’와 같이 쓸 수도 있다. 이 둘은 같은 의미이므로 차이가 없다. 자세한 내용은 ’5장 배열’에서 배우게 될 것이다.

```txt
class 크ᄅ래스이르ᄆ {
    public static void main(String[] args) // main메서드의 서ᄂ어ᄂ부
    {
        // 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
    }
}
```

main메서드의 선언부 다음에 나오는 괄호\{\}는 메서드의 시작과 끝을 의미하며, 이 괄호 사이에 작업할 내용을 작성해 넣으면 된다. Java 애플리케이션은 main메서드의 호출로 시작해서 main메서드의 첫 문장부터 마지막 문장까지 수행을 마치면 종료된다.

모든 클래스가 main메서드를 가지고 있어야 하는 것은 아니지만, 하나의 Java 애플리 케이션에는 main메서드를 포함한 클래스가 반드시 하나는 있어야 한다. main메서드는 Java애플리케이션의 시작점이므로 main메서드 없이는 Java 애플리케이션은 실행될 수 없기 때문이다. 작성된 Java애플리케이션을 실행할 때는 ‘java.exe’ 다음에 main메서드 를 포함한 클래스의 이름을 적어줘야 한다.

하나의 소스파일에 하나의 클래스만을 정의하는 것이 보통이지만, 하나의 소스파일에 둘 이상의 클래스를 정의하는 것도 가능하다. 이 때 주의해야할 점은 ’소스파일의 이름은 public class의 이름과 일치해야 한다.’는 것이다. 만일 소스파일 내에 public class가 없 다면, 소스파일의 이름은 소스파일 내의 어떤 클래스의 이름으로 해도 상관없다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| 올바른 작성 예 | 설명 |
| --- | --- |
| Hello2.java  public class Hello2 \{\}  class Hello3 \{\} | public class가 있는 경우, 소스파일의 이름은 반드시 public class의 이름과 일치해야한다. |
| Hello2.java  class Hello2 \{\}  class Hello3 \{\} | public class가 하나도 없는 경우, 소스파일의 이름은 ‘Hello2.java’, ‘Hello3.java’ 둘 다 가능하다. |

| 잘못된 작성 예 | 설명 |
| --- | --- |
| Hello2.java  public class Hello2 \{\}  public class Hello3 \{\} | 하나의 소스파일에 둘 이상의 public class가 존재하면 안 된다. 각 클래스를 별도의 소스파일에 나눠서 저장하던가 아니면 둘 중의 한 클래스에 public을 붙이지 않아야 한다. |
| Hello3.java  public class Hello2 \{\}  class Hello3 \{\} | 소스파일의 이름이 public class의 이름과 일치하지 않는 다. 소스파일의 이름을 ’Hello2.java’로 변경해야 맞다. |
| hello2.java  public class Hello2 \{\}  class Hello3 \{\} | 소스파일의 이름과 public class의 이름이 일치하지 않는 다. 대소문자를 구분하므로 대소문자까지 일치해야한다. 그래서, 소스파일의 이름에서 ’ h ‘를’ H ’로 바꿔야 한다. |

- 표1-2 소스파일의 작성 예

소스파일(*.java)과 달리 클래스파일(*.class)은 클래스마다 하나씩 만들어지므로 표1-2 의 ‘올바른 작성 예’에 제시된 ’Hello2.java’를 컴파일하면 ’Hello2.class’와 ’Hello3.class’ 모두 두 개의 클래스파일이 생성된다.

접근 제어자(access modifier)인 ’public’에 대해서는 ’7장 객체지향 프로그래밍 II’에서 자세히 배울 것이므로 여기서는 하나의 소스파일에 둘 이상의 클래스를 정의할 때 주의할 점에 대해서만 이해하고 넘어가자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.2 자주 발생하는 에러와 해결방법

자바로 프로그래밍을 배워나가면서 많은 수의 크고 작은 에러들을 접하게 될 것이다. 대 부분의 에러는 작은 실수에서 비롯된 것들이며, 곧 익숙해져서 쉽게 대응할 수 있게 되지 만 처음 배울 때는 작은 실수 하나 때문에 많은 시간을 허비하곤 한다.<br>그래서 자주 발생하는 기본적인 에러와 해결방법을 간단히 정리하였다. 에러가 발생하 였을 때 참고하고, 그 외의 에러는 에러메시지의 일부를 인터넷에서 검색해서 찾아보면 해결책을 얻는데 도움이 될 것이다.

1. cannot find symbol 또는 cannot resolve symbol<br>지정된 변수나 메서드를 찾을 수 없다는 뜻으로 선언되지 않은 변수나 메서드를 사용하거 나, 변수 또는 메서드의 이름을 잘못 사용한 경우에 발생한다. 자바에서는 대소문자 구분 을 하기 때문에 철자 뿐 만아니라 대소문자의 일치여부도 꼼꼼하게 확인해야한다.
2. ‘;’ expected<br>세미콜론’;‘이 필요한 곳에 없다는 뜻이다. 자바의 모든 문장의 끝에는’;’을 붙여주어야 하 는데 가끔 이를 잊고 실수하기 쉽다.
3. Exception in thread “main” java.lang.NoSuchMethodError: main<br>’main메서드를 찾을 수 없다.’는 뜻인데 실제로 클래스 내에 main메서드가 존재하지 않 거나 메서드의 선언부 ’public static void main(String\[\] args)’에 오타가 존재하는 경우 에 발생한다.<br>이 에러의 해결방법은 main메서드가 클래스에 정의되어 있는지 확인하고, 정의되어 있 다면 main메서드의 선언부에 오타가 없는지 확인한다. 자바는 대소문자를 구별하므로 대 소문자의 일치여부까지 정확히 확인해야한다.<br>I 참고 I args는 매개변수의 이름이므로 args 대신 argv나 arg와 같이 다른 이름을 사용할 수 있다.
4. Exception in thread “main” java.lang.NoClassDefFoundError: Hello<br>’Hello라는 클래스를 찾을 수 없다.’는 뜻이다. 클래스 ’Hello’의 철자, 특히 대소문자를 확 인해보고 이상이 없으면 클래스파일(\*.class)이 생성되었는지 확인한다.<br>예를 들어 ’Hello.java’가 정상적으로 컴파일 되었다면 클래스파일 ’Hello.class’가 있어 야한다. 클래스파일이 존재하는데도 동일한 메시지가 반복해서 나타난다면 클래스패스 (classpath)의 설정이 바르게 되었는지 다시 확인해보자.
5. illegal start of expression<br>직역하면 문장(또는 수식, expression)의 앞부분이 문법에 맞지 않는다는 의미인데, 간단 히 말해서 문장에 문법적 오류가 있다는 뜻이다. 괄호(’ 나 ’\{를 열고서 닫지 않거나, 수식 이나 if문, for문 등에 문법적 오류가 있을 때 또는 public이나 static과 같은 키워드를 잘 못 사용한 경우에도 발생한다. 에러가 발생한 곳이 문법적으로 옳은지 확인하라.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)
6. class, interface, or enum expected<br>이 메시지의 의미는 ‘키워드 class나 interface 또는 enum이 없다.’이지만, 보통 괄호’\{’ 또는 ‘\}’의 개수가 일치 하지 않는 경우에 발생한다. 열린괄호’\{‘와 닫힌괄호’\}’의 개수가 같 은지 확인하자.<br>마지막으로 한 가지 더 애기하고 싶은 것은 에러가 발생했을 때, 어떻게 해결할 것인가에 대한 방법이다. 아주 간단하고 당연한 내용이라서 다소 실망스럽게 느껴질지도 모르지만, 막상 실제 에러가 발생했을 때 아래의 순서대로 처리해보면 도움이 될 것이다.
7. 에러 메시지를 잘 읽고 해당 부분의 코드를 살펴본다.<br>이상이 없으면 해당 코드의 주위(윗줄과 아래 줄)도 함께 살펴본다.
8. 그래도 이상이 없으면 에러 메시지는 잊어버리고 기본적인 부분을 재확인한다.<br>대부분의 에러는 사소한 것인 경우가 많다.
9. 의심이 가는 부분을 주석처리하거나 따로 떼어내서 테스트 한다.

에러 메시지가 실제 에러와는 관계없는 내용일 때도 있지만, 대부분의 경우 에러 메시지 만 잘 이해해도 문제가 해결되는 경우가 많으므로 에러 해결을 위해서 제일 먼저 해야 할 일은 에러 메시지를 잘 읽는 것임을 명심하자.

## 3.3 자바프로그램의 실행과정

콘솔에서 아래와 같이 Java 애플리케이션을 실행시켰을 때

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-046_161_593_1496_314.jpg -->

내부적인 진행순서는 다음과 같다.

1. 프로그램의 실행에 필요한 클래스(\*.class파일)를 로드한다.
2. 클래스파일을 검사한다. (파일형식, 악성코드 체크)
3. 지정된 클래스(Hello)에서 main(String\[\] args)를 호출한다.

main메서드의 첫 줄부터 코드가 실행되기 시작하여 마지막 코드까지 모두 실행되면 프로 그램이 종료되고, 프로그램에서 사용했던 자원들은 모두 반환된다.

만일 지정된 클래스에 main메서드가 없다면 다음과 같은 에러 메시지가 나타날 것이다.

Exception in thread “main” java.lang.NoSuchMethodError: main

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.4 주석(comment)

작성하는 프로그램의 크기가 커질수록 프로그램을 이해하고 변경하는 일이 점점 어려워 진다. 심지어는 자신이 작성한 프로그램도 ’내가 왜 이렇게 작성했지?’라는 의문이 들기도 하는데, 남이 작성한 코드를 이해한다는 것은 정말 쉬운 일이 아니다.

이러한 어려움을 덜기 위해 사용하는 것이 바로 주석이다. 주석을 이용해서 프로그램 코 드에 대한 설명을 적절히 덧붙여 놓으면 프로그램을 이해하는 데 많은 도움이 된다.<br>그 외에도 주석은 프로그램의 작성자, 작성일시, 버전과 그에 따른 변경이력 등의 정보 를 제공할 목적으로 사용된다.<br>주석을 작성하는 방법은 다음과 같이 두 가지 방법이 있다. ‘/*’와 ’*/’사이에 주석을 넣 는 방법과 앞에’//’를 붙이는 방법이 있다.

```txt
범위 주석 '/*'와 '*/'사이의 내용은 주석으로 간주된다.
한 줄 주석 '//'부터 라인 끝까지의 내용은 주석으로 간주된다.
```

I 참고 I 이 외에도 Java API문서와 같은 형식의 문서를 자동으로 만들 수 있는 주석(/** ~ \*/)이 있지만 많이 사용되지 는 않으므로 자세한 설명은 생략한다. 이 주석은 javadoc.exe에 의해서 html문서로 자동 변환되며, 보다 자세한 내용은 ’javadoc’으로 검색하면 찾을 수 있다.

다음은 주석의 몇 가지 사용 예인데 흰색바탕으로 처리된 부분이 주석이다.

```txt
/*
Date : 2025. 3. 1
Source : Hello.java
Author : 나ᄆ구ᄋ서ᄋ
Email : seong.namkung@gmail.com
*/
class Hello
{
    public static void main(String[] args) /* 프로그래ᄆ의 시자ᄀ */
    {
        System.out.println("Hello, Java."); // Hello, Java르ᄅ추려ᄀ
    }
}
```

위의 코드는 예제1-1에 주석을 넣은 것인데, 컴파일러는 주석을 무시하고 건너뛰기 때문 에 위의 코드를 컴파일한 결과와 예제1-1을 컴파일한 결과는 정확히 일치한다. 따라서 주 석이 많다고 해서 프로그램의 성능이 떨어지는 일은 없으니 안심하고 주석을 활용하기 바 란다. 코드를 작성하기 전에 미리 주석으로 자신의 생각을 정리하고 검토하는 것은 좋은 습관이다. 주석을 사용하지 말라는 주장도 있으나, 이 주장은 코드를 대충 작성하고 주석 을 달지말고 주석이 필요없을 정도로 코드를 읽기 좋게 잘 작성하라는 뜻이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>한 가지 주의해야할 점은 문자열을 의미하는 큰따옴표(“) 안에 주석이 있을 때는 주석이 아닌 문자열로 인식된다는 것이다. Hello.java를 아래와 같이 변경하여 실행해보면, 주석 의 내용도 같이 출력되는 것을 확인할 수 있을 것이다.

```txt
class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello, /* 이거ᄉ으ᄂ 주서ᄀ 아니ᄆ */ world.");
        System.out.println("Hello, world. // 이거ᄉ도 주서ᄀ 아니ᄆ");
    }
}
```

## 3.5 이 책으로 공부하는 방법

2000년에 처음으로 자바강의를 시작했으니까 벌써 25년이 넘는 세월이 흘렀다. 그동안 많은 학생들을 가르치면서 어떻게 하면 더 쉽게 잘 배울 수 있을까에 대한 고민을 끊임없 이 해왔고 그에 대한 결실로 책도 쓰게 되었다. 여전히 많은 학생들이 자바를 공부하는데 어려움을 겪고 있고, 공부 방법에 대해 고민하는 글들이 저자가 운영하는 카페에 많이 올 라왔다. 카페 회원들과 소통하면서 처음 자바를 배우는 학생들이 어떤 점을 어려워하는지 잘 알게 되었고 그 고민에 대한 나름대로의 해법을 갖게 되었다. 카페에 자바를 공부하는 방법에 대한 글도 여러 번 쓰기도 했는데, 책을 구입하고도 카페에 가입하지 않는 독자들 도 있기 때문에 그동안의 공부 방법에 대한 고민을 정리해서 책에 포함시키기로 했다.

누구나 자신만의 공부 방법이 있고, 절대적인 것은 없기 때문에 여기서 제시하는 공부 방법을 참고해서 자신에게 맞는 공부 방법을 완성하기 바란다.

이 책은 크게 3부분, 1장부터 5장까지, 6장부터 9장, 그리고 나머지 부분으로 나눌 수 있 다. 처음 프로그래밍 언어를 배우는 사람은 2장부터 5장을 익숙해질 때까지 반복해서 봐 야하고 실습도 많이 해야 한다. 눈으로만 이해하지 말고, 반드시 모든 예제를 직접 입력해 보고 실행결과를 확인해 보자. 응용이 잘 안된다고 해서 앞부분에만 머물면 안 된다. 지금 단계에서 응용이 안 되는 것은 당연하다. 기본적인 내용이 익숙해지면, 그 다음 단계인 6 장으로 넘어가야 한다.

6장과 7장이 객체지향 개념의 핵심인데, 먼저 6장과 7장에 어떤 내용이 있는지 가볍게 한번 훓고 시작하자. 그 다음엔 6장을 여러 번 반복해서 보자. 6장을 이해하지 못하면 7 장은 이해할 수 없기 때문이다. 7장은 좀 어려우므로 저자의 유튜브 채널([https://www](https://www/). [youtube.com/@MasterNKS](mailto:youtube.com/@MasterNKS))의 무료 동영상 강좌를 꼭 볼 것을 권한다.

반복해서 볼 때는 동영상을 1.5 배속이나 2배속으로 보면 한 시간에 한번은 볼 수 있을 것이다. 하루에 2 시간씩 5 일보면, 10 번은 볼 수 있다. 10 번 봐도 이해가 안가면 10 번 더 보자. 객체지향 개념을 이해하는데 30 시간도 안 걸린다면 대성공이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

객체지향 개념을 공부할 때 주의할 점은, 객체지향 개념 자체에 몰두하지 않아야 한다는 것이다. 이것은 완전히 샛길로 빠지는 것으로, 여러분들은 객체지향개념 언어인 ’자바’를 배우는 것이지 객체지향 개념을 배우는 것이 아니라는 것을 잊지 말자.<br>6장과 7장은 반복하면 반복할수록 이해가 깊어지므로, 앞으로도 꾸준히 가볍게 복습하 는 것이 좋다. 강의 내용을 요약해서 암기하자. 9장까지가 자바의 가장 기본적인 내용이 므로 9장까지 마치고 나면, 2장부터 9장까지 전체적으로 한번 복습하면 좋다.<br>마지막으로 10장부터 16장까지는 자바의 응용부분이므로 앞부분을 충분히 이해하지 않 고는 학습하기 어렵다. 이중에서 11장, 12장과 15장을 제외하고 나머지는 필요할 때 공부 해도 좋다.<br>10장은 어떤 클래스들이 있는지 확인하고 필요할 때 책을 보고 사용할 수 있을 정도로만 공부하면 된다.<br>11장은 지금까지 배운 것들을 전부 활용하고 자료구조의 원리까지 들어가므로 책 전체에 서 가장 어렵다. 처음엔 각 클래스의 특징과 사용법 정도만 확인하고 넘어가야 한다. 어떤 클래스들이 있고, 이 클래스들 통해서 어떤 결과를 얻을 수 있다는 정도면 충분하다. 처음 부터 이장의 모든 내용을 이해하려고하면 어렵게만 느껴지고 진도도 안 나갈 것이다.<br>12장에서는 지네릭스가 중요한데, 예전에는 선택적으로 사용하던 기능이었지만 이제는 지네릭스를 모르고는 이해할 수 없는 코드가 많다. 지네릭스는 깊이 들어가면 어렵기 때 문에 처음엔 기본적인 사용법만 익히고, 다른 장들을 공부하면서 막히는 부분을 다시 복 습하는 식으로 공부하면 좋다. 애너테이션과 열거형은 경력자들의 요청으로 자세히 썼는 데, 프로그래밍을 처음 배우는 사람은 기본적인 것만 이해하고 넘어가도 된다.

13장은 쓰레드에 대한 것인데, 일단 쓰레드가 어떤 것인지에 대한 감을 잡는 정도로만 공부하고, 나중에 필요할 때 자세히 보는 것이 좋다. 자바에서는 쉽게 멀티쓰레드를 구현 할 수 있도록 미리 작성된 클래스들을 제공하고 있기 때문에 기본 개념만 알아도 도움이 많이 된다.<br>14장의 람다와 스트림은 11장, 12장과 관련이 많고 난이도가 높기 때문에 프로그래밍을 처음 배우는 사람들은 건너뛰었다가 필요할 때 추가로 학습해도 좋다.

15장은 입출력에 대한 것인데, 이 책의 후반부에서 꼭 학습해야하는 중요한 부분이다. 다른 장에 비해 실습이 재미있을 것이다.<br>16장은 컴퓨터간의 통신하는 방법에 대한 내용인데, 채팅 프로그램을 만드는 방법을 배 운다. 15장과 관련이 있으므로 15장을 충분히 이해한 다음에 학습해야하며, 16장은 필수 적으로 공부하지 않아도 되므로 건너뛰어도 좋다.

그 다음에는 안드로이드나 웹프로그래밍(JSP, Spring)을 공부하면서 하루에 한 챕터씩 꾸준히 복습해야 한다. 누구나 시간이 지나면 잊어버리기 때문에 계속 조금씩이라도 반복 해서 봐야 실력이 쌓인다. 새로 배워야 할 것이 많다고 기본을 소홀히 하면 배우는 것보다 잃는 것이 더 많을 것이다. 하루에 10 분이라도 반드시 시간을 내어 복습하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 연습문제에 대하여

그동안 책이 두꺼워서 힘들다는 여기를 많이 들었다. 그래서 고민 끝에 연습문제(약 200페이지)를 별도의 pdf파일로 제공하기로 결정했다. 연습문제는 저자의 깃헙 리포 ([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) 제공하며, 상업적인 목적이 아니면 누구나 자유롭게 배포해도 된다.<br>하나의 챕터(chapter, 장)를 공부하고나면 연습문제를 꼭 풀어보자. 그러나 모든 문제를 다 풀어야 하는 것은 아니다. 풀 수 있는 문제들만 풀고, 풀 수 없는 문제들은 넘어갔다가 나중에 복습할 때 다시 풀어보는 것이 좋다. 아니면 하루에 한 문제씩 틈틈이 고민하는 것 도 좋다.<br>연습문제는 책에 있는 예제들을 응용한 것이 많기 때문에 연습문제를 풀면서 안 풀리는 문제는 해당 챕터를 뒤적거리면서 비슷한 예제가 없는지 찾아봐야 한다. 그러면서 공부가 되는 것이지, 문제만 붙들고 아무리 고민해봐야 문제도 안 풀리고 공부도 되지 않는다.<br>문제를 풀 때는 항상 종이에 낙서를 하는 방법을 추천한다. 어떻게 풀 것인가를 머리로 만 고민하는 것보다 글과 그림으로 시각화하면 문제가 명확해지고 문제해결의 실마리를 쉽게 찾을 수 있기 때문이다.<br>아무리 고민해도 모르겠는 것은 연습문제 후반부에 있는 답안을 보자. 그래도 이해가 안 되면 카페에 질문을 올리면 저자가 직접 답변해 줄 것이다.

## 코드초보스터디카페 활용하기

네이버에 운영하고 있는 코드초보스터디는 개설한지 20년이 넘는 장수 카페이다. 회원수 는 16만이 넘고 자바관련 카페 중에서 제일 오래되었다. 그동안 많은 스터디와 세미나를 해왔고, 자바 관련 질문이나 고민에 답변해주었다. 특히 본인이 집필한 책에 대한 질문은 거의 본인이 직접 답변해주었고, 다른 회원이 답변해준 내용은 바르게 답변했는지 확인한 다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-050_625_1262_1639_201.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이 책으로 공부하면서 막히는 것이 있으면, 카페에 질문을 하기 바란다. 가끔 지식인이나 다른 사이트에 이 책에 대한 질문을 하는 것을 볼 수 있는데, 가능하면 코드초보스터디에 질문해주었으면 한다. 다른 카페에 폐를 끼치는 것이기도 하고, 책의 저자로부터 직접 답 변을 받을 수 있는데, 실력이 어떤지도 모르는 사람에게 답변을 받을 이유가 없기 때문이 다.

카페에는 질문 답변 외에도 많은 자료가 있으므로 카페를 찬찬히 잘 둘러보길 권한다. ‘초보프로그래머에게’나, ’면접후기’, ‘자바소스강좌’, ‘Java1000제’ 같은 게시판은 좋은 글 들이 많다.

## 질문 올리는 방법

책과 관련된 질문은 저자가 빠짐없이 다 확인하고 답변하기 때문에, 답변을 못 받을 까봐 걱정하지 않아도 된다. 다만 질문하기 전에 유사한 질문이 없었는지 검색으로 확인하자.<br>책의 페이지로만 검색해도 이미 답변된 글들을 찾아서 볼 수 있으므로 답변해줄 때까지 기다리지 않아도 된다.<br>책과 관련되지 않은 답변은 카페에서 비교적 오래 활동해온 회원들이 해주는 경우가 많 은데, 답변을 잘 받으려면, 읽는 사람 입장에서 생각하고 자신의 생각을 잘 정리해서 질문 하면 된다. 수려한 문장에 맞춤법까지 완벽해야 좋은 질문이 아니고, 읽는 사람입장에서 답변하기 쉽게 하는 질문이 좋은 질문이다.<br>급한 마음은 알겠지만, 자신이 올린 질문을 다시 한 번 읽어보고 어떤 작업을 하는 도중 에 어떤 문제가 발생했는지를 잘 정리해보자. 그러는 과정에서 스스로 문제가 해결되는 경우도 많다. 에러 메시지가 발생하는 경우는 꼭 같이 올리도록 하고, 소스를 포함시키되 소스가 길다면, 문제가 되는 부분만 따로 떼어서 테스트할 수 있게 올리는 것이 좋다.<br>앞으로 프로그래밍을 계속할거라면, 카페에서 뿐만 아니라 학교 선배나, 회사 선배, 직 장 동료 등 많은 사람에게 질문을 하고 배워야 한다. 실력을 빠르게 향상시키려면, 질문을 잘하는 능력은 필수적이다.

마지막으로 독자 여러분에게 하고 싶은 당부의 말은 ’길을 잃지 말자’는 것과 ’남과 비교하 지 말자’라는 것이다. 공부하다가 막힌다고 다른 책을 보고 수학공부하고 그러지 말라는 뜻이다. 공부하다 막히면 카페에 와서 질문을 하기 바란다. 저자 본인은 항상 여러 분의 질문을 20년 넘게 한결같이 같은 곳에서 기다리고 있다. 책을 읽다가 어려움이 있으면, 카 페에 와서 질문을 하자. 간단한 것일지라도. 어렵다는 말만 반복하면서 질문 한번 안하는 회원들을 많이 봐왔는데, 질문을 부끄러워하지 않았으면 한다.<br>그리고, 사람마다 타고난 장점이 다르고 성장하는 속도가 다르다. 남들과 비교하지 말고 어제의 자신과 오늘의 자신을 비교하면서 한발 한발 나아가기 바란다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Memo

## 1. 변수(variable)

중요한 프로그래밍 능력 중의 하나가 바로 ’값(data)을 잘 다루는 것’이다. 값을 저장하는 공간인 변수를 잘 이해하고 활용하는 것은 그 능력을 얻기 위한 첫걸음이니 첫단추를 잘 끼워보자.

## 1.1 변수(variable)란?

수학에서 ’변수(變數)’를 ’변하는 수’라고 정의하지만 프로그래밍언어에서의 변수 (variable)란, 값을 저장할 수 있는 메모리상의 공간을 의미한다. 이 공간에 저장된 값은 변경될 수 있기 때문에 ’변수’라는 수학용어의 정의와 상통하는 면이 있어서 이렇게 이름 붙여졌다.<br>> “변수란, 단 하나의 값을 저장할 수 있는 메모리 공간.”

하나의 변수에 단 하나의 값만 저장할 수 있으므로, 새로운 값을 저장하면 기존의 값은 사 라진다.

## 1.2 변수의 선언과 초기화

변수를 사용하려면 먼저 변수를 선언해야하는데, 변수의 선언방법은 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-054_110_611_1442_517.jpg -->

’변수타입’은 변수의 ’종류’를 지정하는 것이다. 저장하고자 하는 값의 종류에 맞게 변수의 타입을 선택해서 적어주면 된다. 변수는 값을 담기 위한 그릇이므로 어떤 값을 담을 것인 지에 따라 그릇의 종류, 즉 변수의 타입이 결정된다.

위의 문장은 변수 ‘age’를 선언한다. 이 변수는 ’나이’를 저장하기 위한 것이고, 나이는 ’정수(integer)’이므로 변수의 타입을 ’int’로 하였다. ’타입(type)’에 대해서는 곧 자세히 다 룰 것이므로 지금은 정수를 저장하려면 변수의 타입을 ’int’로 한다는 정도만 알아두자.<br>’변수이름’은 말 그대로 변수에 붙인 이름이다. 변수는 ’값을 저장할 수 있는 메모리 공간’ 이므로 변수의 이름은 저장 공간에 이름을 붙여주는 것이다. 그래야 그 이름을 이용해서 저장 공간(변수)에 값을 저장하고, 저장된 값을 읽어오기도 할 수 있는 것이다. 당연한 애 기지만 같은 이름의 변수가 존재하면 안된다. 서로 구별될 수 있어야하기 때문이다.

변수를 선언하면, 메모리의 빈 공간에 ’변수타입’에 알맞은 크기의 저장 공간이 확보되 고, 이 저장공간에 값을 읽고 쓰는 것은 ’변수이름’을 통해서 가능하다. 저장 공간을 만드 는 방법을 배웠으니 이제 이 저장 공간에 값을 저장하고 읽는 방법을 배워보자.

## 변수의 초기화

변수를 선언한 이후부터는 변수를 사용할 수 있으나, 그 전에 반드시 변수를 ‘초기화(initialization)’해야 한다. 메모리는 여러 프로그램이 공유하는 자원이므로 전에 다른 프로그램에 의해 저장된 ’알 수없는 값(쓰레기값, garbage value)’이 남아있을 수 있기 때문이다.<br>변수에 값을 저장할 때는 대입 연산자’=’를 이용한다. 수학에서는 양변의 값이 같다는 뜻이지만, 자바에서는 오른쪽의 값을 왼쪽(변수)에 저장하라는 뜻이다. 그래서 대입 연산자의 왼쪽에는 반드시 변수가 와야 한다.<br>int age = 25; // 변수 age를 선언하고 25로 초기화 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-055_238_238_869_879.jpg -->

양쪽의 코드는 서로 같은 의미의 다른 코드이다. 변수는 한 줄에 하나씩 선언하는 것이 보통이지만, 타입이 같은 경우 콤마,’를 구분자로 여러 변수를 한 줄에 선언하기도 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-055_188_1113_1288_453.jpg -->

변수의 종류에 따라 변수의 초기화를 생략할 수 있는 경우도 있지만, 변수는 사용되기 전에 적절한 값으로 초기화 하는 것이 좋다.

I 참고 I 지역 변수는 사용되기 전에 초기화를 반드시 해야 하지만 클래스 변수와 인스턴스 변수는 초기화를 생략할 수 있다. 변수의 초기화에 대해서는 6장에서 자세히 배운다.<br>“변수의 초기화란, 변수를 사용하기 전에 처음으로 값을 저장하는 것”

지금까지 변수를 선언하고 값을 저장하는 방법을 알아봤으니, 이제 예제를 통해 변수에저장된 값을 어떻게 읽어오는지 알아보자.

- 예제 2-1/VarEx.java

```txt
class VarEx {
    public static void main(String[] args) {
        int year = 0;
        int age = 14;
        System.out.println(year);
        System.out.println(age);
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    year = age + 2000; // 벼ᄂ수 age의 가ᄡ에 2000으ᄅ 더해서 벼ᄂ수 year에 저자ᄋ
    age = age + 1; // 벼ᄂ수 age에 저자ᄋ되ᄂ 가ᄡ으ᄅ 1즈ᄋ가시키ᄂ다.
    System.out.print(year); // 가ᄡ으ᄅ 추ᄅ려ᄀ하고 주ᄅ바꾸ᄆ으ᄅ 하지않느ᄂ다.
    System.out.print(age);
}
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-056_183_249_383_1200.jpg -->

두 개의 변수 age와 year를 선언한 다음, 값을 저장하고 출력하는 간단한 예제이다. 먼저 변수의 선언부분을 보면, 변수 year와 age를 각각 0과 14로 초기화 하였다.

```txt
int year = 0;
int age = 14;
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-056_62_491_914_592.jpg -->

앞에서 살펴본 것처럼 화면에 글자를 출력하려면 println( )을 사용한다. println( )은 값을 출력하고 줄바꿈을 하지만 print( )는 줄바꿈을 하지 않는다는 차이가 있다.

```txt
    System.out.println(age); // 벼ᄂ수 age의 가ᄡ으ᄅ 머ᄂ저 읽어와야 추ᄅ려ᄀ 가느ᄋ
→ System.out.println(14); // 14르ᄅ 화며ᄂ에 추ᄅ려ᄀ
```

그 다음의 문장은 변수 age에 저장된 값에 2000을 더한 다음, 그 결과를 변수 year에 저 장하라는 뜻이다.

```txt
year = age + 2000;
```

이 문장이 처리되는 과정을 단계별로 살펴보면 다음과 같다.

```txt
    year = age + 2000; // 벼ᄂ수 age의 가ᄡ으ᄅ 아ᄅ아야 더ᄉ세ᄆ이 가느ᄋ하다.
→ year = 14 + 2000; // 벼ᄂ수 age에 저자ᄋ되ᄂ 가ᄡ(14)으ᄅ 읽어오ᄂ다.
→ year = 2014; // 벼ᄂ수 year에 2014르ᄅ 저자ᄋ하ᄂ다.
```

위의 과정에서 알 수 있듯이 변수에 저장된 값을 사용하려면, 그저 변수의 이름만 적어주 면 된다. 그리고 변수에 값을 저장하는 ’대입 연산(=)’은 우변의 모든 계산이 끝난 후에 제 일 마지막에 수행된다.

다음의 코드는 변수 age에 저장된 값을 1증가 시키는데, 변수의 값을 읽어다 1을 더한 다음 다시 변수 age에 저장하라는 뜻이다.

```txt
    age = age + 1; // 벼ᄂ수 age의 가ᄡ으ᄅ 1즈ᄋ가
```

위 문장이 처리되는 과정을 단계별로 살펴보면 다음과 같다.

```txt
    age = age + 1;
→ age = 14 + 1; // 벼ᄂ수 age에 저자ᄋ되ᄂ 가ᄡ으ᄅ 읽어오ᄂ다.
→ age = 15; // 벼ᄂ수 age에 15르ᄅ 저자ᄋ하ᄂ다.
```

## 두 변수의 값 교환하기

다음과 같이 변수 x, y가 있을 때, 두 변수에 담긴 값을 서로 바꾸려면 어떻게 해야 할까? 잠시 시간을 갖고 생각해보자.

```txt
int x = 10;
int y = 20;
```

단순하게 변수 x의 값을 y에 저장하고, y의 값을 x에 저장하면 될 것 같지만 그렇게 해서 는 원하는 결과를 얻을 수 없다.

1. 변수 y에 저장된 값을 변수 x에 저장<br>x = y;
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-057_264_354_901_850.jpg -->
2. 변수 x에 저장된 값을 변수 y에 저장
   $$
   y=x ;
   $$

   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-057_265_353_1300_850.jpg -->

첫 번째 단계에서 y 의 값을 x 에 저장할 때, 이미 x 의 값이 없어졌기 때문에 x 의 값을 y 에 저장해도 소용이 없는 것이다. 그러면 어떻게 해야 할까? 다음과 같이 변수를 하나 더 선 언해서 x 의 값을 위한 임시 저장소로 사용하면 된다.

```txt
int x = 10;
int y = 20;
int tmp; // x oᅴ 가ᄡ으ᄅ 이ᄆ시로 저자ᄋ하ᄅ 벼ᄂ수르ᄅ 서ᄂ어ᄂ
```

그 다음에 아래와 같은 순서로 값을 옮기면 된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 변수 x에 저장된 값을 변수 tmp에 저장<br>tmp = x;
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-058_211_1034_407_334.jpg -->
2. 변수 y에 저장된 값을 변수 x에 저장
   $$
   x=y ;
   $$

   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-058_250_1037_773_334.jpg -->
3. 변수 tmp에 저장된 값을 변수 y에 저장<br>y = tmp;
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-058_209_1033_1187_334.jpg -->

두 변수의 값을 교환하는 것은 마치 두 컵에 담긴 내용물을 바꾸려면 컵이 하나 더 필요한 것과 같다. 아직도 위의 과정이 잘 이해되지 않는다면, 한 컵에는 우유를 다른 한 컵에는 물을 담은 다음에 빈 컵을 이용해서 두 컵의 내용물을 바꾸는 일을 직접 해보자.

```txt
class VarEx2 {
    public static void main(String[] args) {
        int x = 10, y = 20;
        int tmp = 0;
        System.out.println("x:"+ x + " y:" + y);
        tmp = x;
        x = y;
        y = tmp;
        System.out.println("x:"+ x + " y:" + y);
    }
}
```

$$
\begin{array}{ll}
x: 10 & y: 20 \\
x: 20 & y: 10
\end{array}
$$

- 예제 2-2/VarEx2.java

앞서 설명한 내용을 예제로 작성한 것이므로 이해하는데 어려움이 없을 것이다. 한 가지 설명할 것이 있다면 변수의 값을 출력하는 문장인데, 이 문장이 수행되는 과정을 단계별 로 적어보면 다음과 같다.

```txt
    System.out.println("x:" + x + " y:" + y);
→ System.out.println("x:" + 10 + " y:" + 20);
→ System.out.println("x:10" + " y:" + 20);
→ System.out.println("x:10 y:" + 20);
→ System.out.println("x:10 y:20");
```

덧셈 연산자’+’는 두 값을 더하기도 하지만, 이처럼 문자열과 숫자를 하나로 결합하기도한다. 문자열은 큰따옴표”“로 묶은 연속된 문자를 말하는데, 문자열과 문자열 결합에 대한자세한 내용은 잠시 후에 다룬다.

## 1.3 변수의 명명규칙

’변수의 이름’처럼 프로그래밍에서 사용하는 모든 이름을 ’식별자(identifier)’라고 하며,식별자는 같은 영역 내에서 서로 구분(식별)될 수 있어야한다. 그리고 식별자를 만들 때는다음과 같은 규칙을 지켜야 한다.

1. 대소문자가 구분되며 길이에 제한이 없다.
   - True와 true는 서로 다른 것으로 간주된다.
2. 예약어를 사용해서는 안 된다.
   - true는 예약어라서 사용할 수 없지만, True는 가능하다.
3. 숫자로 시작해서는 안 된다.
   - top10은 허용하지만, 7up은 허용되지 않는다.
4. 특수문자는 ’\_‘와’\$’만을 허용한다.
   - \$harp은 허용되지만, S#arp은 허용되지 않는다.

예약어는 ’리져브드 워드(reserved keyword)’라고 하는데, 프로그래밍언어의 구문에 사용되는 단어를 뜻한다. 그래서 예약어는 클래스나 변수, 메서드의 이름(identifier)으로 사용할 수 없다. 예약어는 앞으로 하나씩 배울 것이므로 지금은 간단히 훓어보기만 하자.

| abstract | default | goto | protected | throws |
| --- | --- | --- | --- | --- |
| assert | do | implements | public | transient |
| boolean | double | import | return | try |
| break | else | instanceof | short | void |
| byte | enum | int | static | volatile |
| case | extends | interface | strictfp | while |
| catch | final | long | super | - |
| char | finally | native | switch |  |
| class | float | new | synchronized |  |
| const | for | package | this |  |
| continue | if | private | throw |  |

- 표2-1 java에서 사용되는 예약어(reserved keyword)<br>I 참고 I goto와 const는 실제로 사용되지 않으며, true, false, null은 예약어가 아니라 리터럴이며 이름으로 사용할 수 없다.I 참고 I 표2-1의 마지막 항목은 언더스코어(underscore) ’\_’이며, JDK 9부터 예약어가 되었다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그 외에 필수적인 것은 아니지만 자바 프로그래머들에게 권장하는 규칙들은 다음과 같다.

1. 클래스 이름의 첫 글자는 항상 대문자로 한다.
   - 변수와 메서드의 이름의 첫 글자는 항상 소문자로 한다.
2. 여러 단어로 이루어진 이름은 단어의 첫 글자를 대문자로 한다.
   - lastIndexOf, StringBuffer
3. 상수의 이름은 모두 대문자로 한다. 여러 단어로 이루어진 경우 ’\_’로 구분한다.
   - PI, MAX\_NUMBER

위의 규칙들은 반드시 지켜야 하는 것은 아니지만, 코드를 보다 이해하기 쉽게 하기 위한 자바 개발자들 사이의 암묵적인 약속이다. 이 규칙을 따르지 않는다고 해서 문제가 되는 것은 아니지만 가능하면 지키도록 노력하자. 만일 특별한 방식으로 식별자를 작성해야 한 다면 미리 규칙(coding convention)을 정해놓고 프로그램 전체에 일관되게 적용하는 것 이 필요하다.

I 참고 I 자바에서는 모든 이름에 유니코드에 포함된 문자들을 사용할 수 있지만, 적어도 클래스 이름은 ASCI코드(영문자) 로 하는 것이 좋다. 유니코드를 인식하지 못하는 운영체계(OS)도 있기 때문이다.

변수의 이름은 짧을수록 좋지만, 약간 길더라도 용도를 알기 쉽게 ’의미있는 이름’으로 하 는 것이 바람직하다. 변수의 선언문에 주석으로 변수에 대한 정보를 주는 것도 좋은 생각 이다.

```txt
int curPos = 0; // 혀ᄂ재 위치(current position)
int lastPos = -1; // 마지마ᄀ 위치(last position)
```

## 예약어와 문맥 예약어

표2-1에서 소개한 예약어는 항상 이름으로 사용할 수 없지만, 표2-2의 문맥 예약어 17 개는 문맥에 따라 예약어가 되기도 하고 예약어가 아니기도 하다. JDK 8 이후로 새로 추 가된 기능때문에 추가된 예약어이므로 기존 코드와 충돌을 피하기 위해 특정 문맥에서만 예약어로 동작하게 되어 있다.

| exports 9 | opens 9 | requires 9 | uses 9 | yeild 14 |
| --- | --- | --- | --- | --- |
| module 9 | permits 17 | sealed 17 | var 10 |  |
| non-sealed 17 | provides 9 | to 9 | when 21 |  |
| open 9 | record 16 | transitive 9 | with 9 |  |

- 표2-2 java에서 사용되는 문맥 예약어(contextual keyword)

[1](about:blank#fn1)<br>## 2. 변수의 타입

우리가 주로 사용하는 값(data)의 종류(type)는 크게 ’문자와 숫자’로 나눌 수 있으며, 숫 자는 다시 ’정수와 실수’로 나눌 수 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-061_300_672_550_648.jpg -->

- 그림2-1 값의 종류

이러한 값(data)의 종류(type)에 따라 값이 저장될 공간의 크기와 저장형식을 정의한 것 이 자료형(data type)이다. 자료형에는 문자형(char), 정수형(byte, short, int, long), 실 수형(float, double) 등이 있으며, 변수를 선언할 때는 저장하려는 값의 특성을 고려하여 가장 알맞은 자료형을 선택하면 된다.

## 기본형과 참조형

자료형은 크게 ‘기본형’과 ’참조형’ 두 가지로 나눌 수 있는데, 기본형 변수는 실제 값 (data)을 저장하는 반면, 참조형 변수는 어떤 값이 저장되어 있는 주소(memory address) 를 값으로 갖는다. 자바는 C언어와 달리 참조형 변수 간의 연산을 할 수 없으므로 실제 연 산에 사용되는 것은 모두 기본형 변수이다.

I 참고 I 메모리에는 1 byte단위로 일련 번호가 붙어있는데, 이 번호를 ‘메모리 주소(memory address)’ 또는 간단히 ‘주소’ 라고 한다. 객체의 주소는 객체가 저장된 메모리 주소를 뜻한다.

## 기본형(primitive type)

- 논리형(boolean), 문자형(char), 정수형(byte,short,int,long), 실수형(float,double) 계산을 위한 실제 값을 저장한다. 모두 8 개

## 참조형(reference type)

- 객체의 주소를 저장한다. 8개의 기본형을 제외한 나머지 타입.

참조형 변수(또는 참조 변수)를 선언할 때는 변수의 타입으로 클래스의 이름을 사용하므 로 클래스의 이름이 참조 변수의 타입이 된다. 그래서 새로운 클래스를 작성한다는 것은 새로운 참조형을 추가하는 셈이다.<br>다음은 참조 변수를 선언하는 방법이다. 기본형 변수와 같이 변수이름 앞에 타입을 적어 주는데 참조 변수의 타입은 클래스의 이름이다.

[2](about:blank#fn2)<br>## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

다음은 Date클래스 타입의 참조 변수 today를 선언한 것이다. 참조 변수는 null 또는 객 체의 주소를 값으로 갖으며 참조 변수의 초기화는 다음과 같이 한다.

```txt
Date today = new Date(); // Date개ᄀ체르ᄅ 새ᄋ서ᄋ하고, 그 주소르ᄅ today에 저자ᄋ
```

객체를 생성하는 연산자 new의 결과는 생성된 객체의 주소이다. 이 주소가 대입 연산자 ’=’에 의해서 참조 변수 today에 저장되는 것이다. 이제 참조 변수 today를 통해서 생성된 객체를 사용할 수 있게 된다.

I 참고 I 참조형 변수는 null 또는 객체의 주소(4 byte, 0×0~0×FFFFFFFF)를 값으로 갖는다. null은 어떤 객체의 주소도 저 장되어 있지 않음을 뜻한다. 단, JVM이 32 bit가 아니라 64 bit라면 참조형 변수의 크기는 8 byte가 된다.

Q. 자료형(data type)과 타입(type)의 차이가 뭔가요?<br>A. 기본형은 저장할 값(data)의 종류에 따라 구분되므로 기본형의 종류를 애기할 때는 ’자 료형(data type)’이라는 용어를 씁니다. 그러나 참조형은 항상 ’객체의 주소(4 byte 정수)’를 저장하므로 값(data)이 아닌, 객체의 종류에 의해 구분되므로 참조형 변수의 종류를 구분할 때는 ’타입(type)’이라는 용어를 사용합니다. ’타입(type)’이 ’자료형(data type)’을 포함하는 보다 넓은 의미의 용어이므로 굳이 구분하지 않아도 됩니다.

## 2.1 기본형(primitive type)

기본형에는 모두 8개의 타입(자료형)이 있으며, 크게 논리형, 문자형, 정수형, 실수형으로 구분된다.

| 분류 | 타입 |
| --- | --- |
| 논리형 | boolean |
|  | true와 false 중 하나를 값으로 갖으며, 조건식과 논리적 계산에 사용 |
| 문자형 | char |
|  | 문자를 저장하는데 사용되며, 변수에 하나의 문자만 저장가능 |
| 정수형 | byte, short, int, long |
|  | 정수를 저장하는데 사용되며, 주로 int를 사용. byte는 이진 데이터를 다룰 때 사용되며, short은 C언어와의 호환을 위해서 추가 |
| 실수형 | float, double |
|  | 실수를 저장하는데 사용되며, 주로 double을 사용 |

A 표2-3 기본형의 종류

문자형인 char는 문자를 내부적으로 정수(유니코드)로 저장하기 때문에 정수형과 별반 다 르지 않으며, 정수형 또는 실수형과 연산도 가능하다. 반면에 boolean은 다른 기본형과의 연산이 불가능하다. 즉, boolean을 제외한 나머지 7개의 기본형은 서로 연산과 변환이 가 능하다.

정수는 가장 많이 사용되므로 타입을 4가지나 제공한다. 각 타입마다 저장할 수 있는 값 의 범위가 다르므로 저장할 값의 범위에 맞는 타입을 선택하면 되지만, 일반적으로 int를 많이 사용한다. 왜냐하면, int는 CPU가 가장 효율적으로 처리할 수 있는 타입이기 때문이 다. 효율적인 실행보다 메모리를 절약하려면, byte나 short을 선택하자.

I 참고 I 4개의 정수형(byte, short, int, long)중에서 int형이 기본 자료형(default data type)이며, 실수형(float, double)중에서는 double이 기본 자료형이다.

| 크기  종류 | 1 byte | 2 byte | 4 byte | 8 byte |
| --- | --- | --- | --- | --- |
| 논리형 | boolean |  |  |  |
| 문자형 |  | char |  |  |
| 정수형 | byte | short | int | long |
| 실수형 |  |  | float | double |

- 표2-4 기본형의 종류와 크기

기본 자료형의 종류와 크기는 반드시 외워야 하며, 아래의 문장들이 도움이 될 것이다.

- boolean은 true와 false 두 가지 값만 표현할 수 있으면 되므로 가장 작은 크기인 1 byte.
- char은 자바에서 유니코드(2 byte 문자체계)를 사용하므로 2 byte.
- byte는 크기가 1 byte라서 byte.
- int(4 byte)를 기준으로 짧아서 short(2 byte), 길어서 long(8 byte). (short ↔︎ long)
- float는 실수값을 부동소수점(floating-point)방식으로 저장하기 때문에 float.
- double은 float보다 두 배의 크기(8 byte)를 갖기 때문에 double.

그리고 각 타입의 변수가 저장할 수 있는 값의 범위는 다음과 같다.

| 자료형 | 저장 가능한 값의 범위 | 크기 |  |
| --- | --- | --- | --- |
|  |  | bit | byte |
| boolean | false, true | 8 | 1 |
| char | ‘000’ ~ ‘’ (0~2 ${ }^{16}$-1, 0~65535) | 16 | 2 |
| byte | $-128 \sim 127\left(-2^{7} \sim 2^{7}-1\right)$ | 8 | 1 |
| short | $-32,768 \sim 32,767\left(-2^{15} \sim 2^{15}-1\right)$ | 16 | 2 |
| int | $-2,147,483,648 \sim 2,147,483,647\left(-2^{31} \sim 2^{31}-1\right.$, 약 ±20억) | 32 | 4 |
| long | $-9,223,372,036,854,775,808 \sim 9,223,372,036,854,775,807\left(-2^{63} \sim 2^{63}-1\right)$ | 64 | 8 |
| float | 1.4E-45 ~ 3.4E38 $\left(1.4 \times 10^{-45} \sim 3.4 \times 10^{38}\right)$ | 32 | 4 |
| double | $4.9 \mathrm{E}-324 \sim 1.8 \mathrm{E} 308\left(4.9 \times 10^{-324} \sim 1.8 \times 10^{308}\right)$ | 64 | 8 |

A 표2-5 기본형의 크기와 범위

I 참고 I float와 double은 양의 범위만 적은 것이다. 음의 범위는 양의 범위에 음수 부호(-)를 붙이면 된다.

각 자료형이 가질 수 있는 값의 범위를 정확히 외울 필요는 없고, 정수형(byte, short, int , long)의 경우 ’ $-2^{\mathrm{n}-1} \sim 2^{\mathrm{n}-1}-1$ ‘(n은 bit수)이라는 정도만 기억하고 있으면 된다. 예를 들어 int형의 경우 32 bit(4 byte)이므로’ $-2^{31} \sim 2^{31}-1^{\prime}$ 의 범위를 갖는다.

$$
2^{10}=1024 \fallingdotseq 10^{3} \text { 이므로, } 2^{31}=2^{10} \times 2^{10} \times 2^{10} \times 2=1024 \times 1024 \times 1024 \times 2 \fallingdotseq 2 \times 10^{9}
$$

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

따라서 int타입의 변수는 대략 10자리 수(약 20억, 2,000,000,000)의 값을 저장할 수 있 다는 것을 알 수 있다. 7~9자리의 수를 계산할 때는 넉넉하게 long타입(약 19자리)으로 변수를 선언하는 것이 좋다. 연산중에 저장범위를 넘어서게 되면 원하지 않는 값을 결과 로 얻게 될 것이기 때문이다.<br>실수형은 정수형과 저장형식이 달라서 같은 크기라도 훨씬 큰 값을 표현할 수 있으나 오 차가 발생할 수 있다는 단점이 있다. 그래서 정밀도(precision)가 중요한데, 정밀도가 높 을수록 발생하는 오차의 범위가 줄어든다. 아래의 표를 보면 float의 정밀도는 7자리인데, 이것은 10진수로 7자리의 수를 오차없이 저장할 수 있다는 뜻이다.

| 자료형 | 저장 가능한 값의 범위 | 정밀도 | 크기 |  |
| --- | --- | --- | --- | --- |
|  |  |  | bit | byte |
| float | 1.4E-45~3.4E38 $\left(1.4 \times 10^{-45} \sim 3.4 \times 10^{38}\right)$ | 7 자리 | 32 | 4 |
| double | 4.9E-324~1.8E308(4.9×10 $\left.{ }^{-324} \sim 1.8 \times 10^{308}\right)$ | 15 자리 | 64 | 8 |

A 표2-6 실수형의 범위와 정밀도

float는 약 $\pm 10^{38}$ 과 같이 큰 값을 저장할 수 있지만, 정밀도가 7자리 밖에 되지 않으므로 보다 높은 정밀도가 필요한 경우에는 변수의 타입으로 double을 선택해야한다. 이처럼 실 수형에서는 저장 가능한 값의 범위뿐만 아니라 정밀도도 타입 선택의 중요한 기준이 된 다.

## 2.2 상수와 리터럴(constant & literal)

’상수(constant)’는 변수와 마찬가지로 ’값을 저장할 수 있는 공간’이지만, 변수와 달리 한 번 값을 저장하면 다른 값으로 변경할 수 없다. 상수를 선언하는 방법은 변수와 동일하며, 단지 변수의 타입 앞에 키워드 ’final’을 붙이면 된다.

```txt
final int MAX_SPEED = 10; // 사ᄋ수 MAX_SPEED르ᄅ 서ᄂ어ᄂ & 초기화
```

그리고 상수는 선언과 동시에 초기화하는 것이 보통이며, 한번 값이 저장되고 나면 상수의 값을 변경하는 것이 허용되지 않는다.

```txt
final int MAX_VALUE; // 사ᄋ수 MAX_SPEED르ᄅ 서ᄂ어ᄂ
MAX_VALUE = 100; // 사ᄋ수 MAX_SPEED르ᄅ 초기화
MAX_VALUE = 200; // 에러. 사ᄋ수의 가ᄡ으ᄂ 벼ᄂ겨ᄋ하ᄅ 수 어ᄡ으ᄆ
```

상수의 이름은 모두 대문자로 하는 것이 암묵적인 관례이며, 여러 단어로 이루어져있는 경우 ’’로 구분하는 것이 일반적이다.

I 참고 I JDK 6부터 상수를 선언과 동시에 초기화 하지 않아도 사용하기 전에만 초기화하면 되도록 바뀌었다. 그래도 상수 는 선언과 동시에 초기화하는 습관을 들이는 것이 좋다.

## 리터럴(literal)

원래 12, 123, 3.14, ‘A’와 같은 값들이 ’상수’인데, 프로그래밍에서는 상수를 ’값을 한 번 저장하면 변경할 수 없는 저장공간’으로 정의하였기 때문에 이와 구분하기 위해 상수를 다 른 이름으로 불러야만 했다. 그래서 상수 대신 리터럴이라는 용어를 사용한다. 많은 사람 들이 리터럴이라는 용어를 어려워하는데, 리터럴은 단지 우리가 기존에 알고 있던 ’상수’ 의 의미하는 다른 용어일 뿐이다.

```txt
변수(variable) 하나의 값을 저장하기 위한 공간
상수(constant) 값을 한번만 저장할 수 있는 공간
리터럴(literal) 그 자체로 값을 의미하는 것
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-065_224_489_839_757.jpg -->

## 상수가 필요한 이유

아마도 이쯤에서 여러분들은 ’그냥 리터럴을 직접 쓰면 될 텐데, 굳이 상수가 따로 필요한 가?’라는 의문이 들 것도 같다. 먼저 다음의 코드를 보자.

```txt
int triangleArea = (20 * 10) / 2; // 사ᄆ가ᄀ혀ᄋ의 며ᄂ저ᄀ으ᄅ 구하느ᄂ 고ᄋ시ᄀ
int rectangleArea = 20* 10 ; // 사가ᄀ혀ᄋ의 며ᄂ저ᄀ으ᄅ 구하느ᄂ 고ᄋ시ᄀ
```

위의 코드는 삼각형과 사각형의 면적을 구해서 변수에 저장한다. 이 공식을 모르는 사람 은 없겠지만, 보다 복잡한 공식이라면 애기가 달라질 것이다. 게다가 20과 10이 아닌 다 른 값을 이용해서 결과를 얻고 싶다면 여러 곳을 수정해야한다.<br>그러면 이제 다음의 코드를 보자.

```txt
final int WIDTH = 20; // 포ᄀ
final int HEIGHT = 10; // 노ᄑ이
int triangleArea = (WIDTH * HEIGHT) / 2; // 사ᄆ가ᄀ혀ᄋ의 며ᄂ저ᄀ으ᄅ 구하느ᄂ 고ᄋ시ᄀ
int rectangleArea = WIDTH * HEIGHT ; // 사가ᄀ혀ᄋ의 며ᄂ저ᄀ으ᄅ 구하느ᄂ 고ᄋ시ᄀ
```

상수를 이용해서 기존의 코드를 변경한 것인데, 이전 코드에 비해 면적을 구하는 공식의 의미가 명확해졌다. 그리고 다른 값으로 계산할 때도 여러 곳을 수정할 필요없이 상수의 초기화만 다른 값으로 해주면 된다.<br>이처럼 상수는 리터럴에 ’의미있는 이름’을 붙여서 코드의 이해와 수정을 쉽게 만든다.

## 리터럴의 타입과 접미사

변수에 타입이 있는 것처럼 리터럴에도 타입이 있다. 변수의 타입은 저장될 ’값의 타입(리 터럴의 타입)’에 의해 결정되므로, 만일 리터럴에 타입이 없다면 변수의 타입도 필요없을 것이다.

| 종류 | 리터럴 | 접미사 |
| --- | --- | --- |
| 논리형 | false, true | 없음 |
| 정수형 | 123, 0b0101, 077, 0xFF, 100L | L |
| 실수형 | 3.14, 3.0e8, 1.4f, 0x1.0p-1 | f, d |
| 문자형 | ‘A’, ‘1’, ‘’ | 없음 |
| 문자열 | “ABC”, “123”, “A”, “true” | 없음 |

△ 표2-7 리터럴과 접미사

정수형과 실수형에는 여러 타입이 존재하므로, 리터럴에 접미사를 붙여서 타입을 구분 한다. 정수형의 경우, long타입의 리터럴에 접미사 ‘l’ 또는 ‘L’을 붙이고, 접미사가 없으 면 int타입의 리터럴이다. byte와 short타입의 리터럴은 별도로 존재하지 않으며 byte와 short타입의 변수에 값을 저장할 때는 int타입의 리터럴을 사용한다.<br>10진수 외에도 2, 8, 16진수로 표현된 리터럴을 변수에 저장할 수 있으며, 16진수라는 것을 표시하기 위해 리터럴 앞에 접두사’0x’ 또는 ’0X’를, 8진수의 경우에는 ’0’을 붙인다.

I 참고 I 접두사’0x’,‘0X’,Ob’,‘OB’,’O’의 ’O’은 알파벳이 아니라 숫자이다. 2진 리터럴은 JDK 7부터 추가되었다.

```txt
int octNum = 010; // 8지ᄂ수 10, 10지ᄂ수로 8
int hexNum = 0x10; // 16지ᄂ수 10, 10지ᄂ수로 16
int binNum = 0b10; // 2지ᄂ수 10, 10지ᄂ수로 2
```

그리고 JDK 7부터 정수형 리터럴의 중간에 구분자’\_를 넣을 수 있어서 큰 숫자를 편하게 읽을 수 있게 되었다.

```txt
long big = 100_000_000_000L; // long big = 100000000000L;
long hex = 0xFFFF_FFFF_FFFF_FFFFL; // long hex = 0xFFFFFFFFFFFFFFFFL;
```

실수형에서는 float타입의 리터럴에 접미사 ‘f’ 또는 ‘F’를 붙이고, double타입의 리터럴에 는 접미사 ’d’ 또는 ’D’를 붙인다.

```txt
float pi = 3.14f; // 저ᄇ미사 f 대시ᄂ F르ᄅ 사요ᄋ해도 되ᄂ다.
double rate = 1.618d; // 저ᄇ미사 d 대시ᄂ D르ᄅ 사요ᄋ해도 되ᄂ다.
```

실수형 리터럴에는 접미사를 붙여서 타입을 구분하며, float타입 리터럴에는 ’f’를, double 타입 리터럴에는 ’d’를 붙인다. 정수형에서는 int가 기본 자료형인 것처럼 실수형에서는 double이 기본 자료형이라서 접미사’d’는 생략이 가능하다. 실수형 리터럴인데, 접미사가 없으면 double타입 리터럴인 것이다.

```txt
float pi = 3.14; // 에러. floatEr이ᄇ 벼ᄂ수에 double타이ᄇ 리터러ᄅ 저자ᄋ부ᄅ가
double rate = 1.618; // OK. 저ᄇ미사 d느ᄂ 새ᄋ랴ᄀ하ᄅ 수 이ᄊ다.
```

위의 문장에서 3.14는 접미사가 붙지 않았으므로 float타입 리터럴이 아니라 double타입 리터럴로 간주된다. 그래서 3.14가 float타입의 범위에 속한 값임에도 불구하고 컴파일 시 에 에러가 발생한다. 에러를 피하려면 3.14f와 같이 접미사를 붙여야 한다.

리터럴의 접두사와 접미사는 대소문자를 구별하지 않으므로, 대문자와 소문자 중에서 어떤 것을 사용해도 상관없지만, 소문자’l’의 경우 숫자 ‘1’과 헷갈리기 쉬우므로 대문자인’ L ’을 사용하는 것이 좋다.

I 참고 I 리터럴에 접미사가 붙는 타입은 long, float, double뿐인데, double은 생략가능하므로 long과 float의 리터럴 에 접미사를 붙이는 것만 신경쓰면 된다.

리터럴에 소수점이나 10 의 제곱을 나타내는 기호 E 또는 e , 그리고 접미사 $\mathrm{f}, \mathrm{F}, \mathrm{d}, \mathrm{D}$ 를 포함하고 있으면 실수형 리터럴로 간주된다.

| 자료형 | 실수형 리터럴 | 동등한 표현 |
| --- | --- | --- |
| double | 10. | 10.0 |
| double | . 10 | 0.10 |
| float | 10f | 10.0f |
| float | 3.14e3f | 3140.0f |
| double | 1e1 | 10.0 |
| double | $1 \mathrm{e}-3$ | 0.001 |

- 표2-8 실수형 리터럴의 예

## 타입의 불일치

리터럴의 타입은 저장될 변수의 타입과 일치하는 것이 보통이지만, 타입이 달라도 저장범 위가 넓은 타입에 좁은 타입의 값을 저장하는 것은 허용된다.

```txt
int i = 'A'; // OK. 무ᄂ자'A'의 유니코드이ᄂ 65가 벼ᄂ수 i에 저자ᄋ되ᄂ다.
long l = 123; // OK. int보다 long이 더 버ᄆ위가 넓다.
double d = 3.14f; // OK. float보다 double이 더 버ᄆ위가 넓다.
```

그러나 리터럴의 값이 변수의 타입의 범위를 넘어서거나, 리터럴의 타입이 변수의 타입보 다 저장범위가 넓으면 컴파일 에러가 발생한다.

```txt
int i = 0x123456789; // 에러. int의 버ᄆ위르ᄅ 너ᄆ느ᄂ 가ᄡ으ᄅ 저자ᄋ
float f = 3.14; // 에러. float보다 double의 버ᄆ위가 넓다.
```

3.14는 3.14d에서 접미사가 생략된 것으로 double타입이다. 이 값을 float타입으로 표현 할 수 있지만, double타입의 리터럴이므로 float타입의 변수에 저장할 수 없다.

I 참고 I float는 접미사나 정밀도 등 신경 쓸 것이 많다. 이런 것들이 귀찮다면 그냥 double을 사용하자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

byte와 short타입의 리터럴은 따로 존재하지 않으므로 int타입의 리터럴을 사용한다. 단, 변수가 저장할 수 있는 범위에 속한 것이어야 한다.

```txt
byte b = 65; // OK. byte의 버ᄆ위(-128~127)에 소ᄀ하느ᄂ int타이ᄇ 리터러ᄅ
short s = 0x1234; // OK. short의 버ᄆ위에 소ᄀ하느ᄂ int타이ᄇ 리터러ᄅ
```

각 타입의 범위만 알아도 충분히 판단가능한 내용이다. 값의 크기에 상관없이 double타입 의 리터럴을 float타입의 변수에 저장할 수 없다는 것만 주의하자. 보다 자세한 내용은 이 장의 마지막 단원인 ’형변환’에서 설명한다.

## 지역 변수의 타입 추론 - var

JDK 10부터 지역 변수(local variable)의 경우, 변수를 선언할 때 타입 대신 ’var’를 사용 할 수 있게 되었다. 변수는 값을 담기 위한 것이고, 값의 타입과 변수의 타입이 일치하는 것이 보통이기 때문에 변수의 타입을 생략해도 컴파일러가 값의 타입을 보고 변수의 타입 을 추론(inference)할 수 있는 것이다.

I 참고 I 지역 변수는 메서드 내에 선언된 변수를 의미하며, 6장 이전까지의 변수는 모두 지역 변수다.

```txt
var year = 2024; // 아래의 무ᄂ자ᄋ과 도ᄋ이ᄅ
int year = 2024; // 벼ᄂ수의 타이ᄇ과 가ᄡ의 타이ᄇ이 이ᄅ치
    이ᄅ치
```

실제 타입 대신 ’var’를 사용하면 코드가 간결해지고, 변경에도 유리해진다. 클래스를 다른 것으로 바꿀때 변수의 타입은 변경하지 않아도 되기 때문이다.

```txt
LinkedHashMap map = new LinkedHashMap(); // 벼ᄂ겨ᄋ시 두 고ᄉ으ᄅ 고쳐야 하ᄆ
var map = new LinkedHashMap(); // 벼ᄂ겨ᄋ시 하ᄂ 고ᄉ마ᄂ 고치며ᄂ 되ᄆ.
```

만일 변수를 선언할 때 값을 대입하지 않거나 null을 대입하면, 변수의 타입을 추론할 수 없기 때문에 에러가 발생한다.

```txt
var obj; // 에러. 벼ᄂ수르ᄅ 초기화하지 않아서 벼ᄂ수의 타이ᄇ 추로ᄂ 부ᄅ가
var obj = null; // 에러. 벼ᄂ수르ᄅ null로 초기화하며ᄂ 벼ᄂ수의 타이ᄇ 추로ᄂ 부ᄅ가
```

그리고 아래의 경우처럼 의도했던 것과 다르게 타입이 추론될 수 있으므로 조심해야 하며 이럴 때는 ’var’대신에 실제 타입을 적어주면 된다.

```txt
byte b = 123; // 123의 타이ᄇ으ᄂ int지마ᄂ byte의 버ᄆ위르ᄅ 너ᄆ지않아서 OK
var b = 123; // byte가 아니라 int로 추로ᄂ되ᄂ다.
```

## 문자 리터럴과 문자열 리터럴

’A’와 같이 작은따옴표로 문자 하나를 감싼 것을 ’문자 리터럴’이라고 한다. 두 문자 이상은 큰 따옴표로 감싸야 하며 ’문자열 리터럴’이라고 한다.<br>I 참고 I 문자열은 ’문자의 연속된 나열’이라는 뜻이며, 영어로 ’string’이다.

```txt
char ch = 'J'; // char ch = 'Java'; 이러ᄒ게 하ᄅ 수 어ᄡ다.
String name = "Java"; // 벼ᄂ수 name에 무ᄂ자여ᄅ 리터러ᄅ "Java"르ᄅ 저자ᄋ
```

char타입의 변수는 단 하나의 문자만 저장할 수 있으므로, 여러 문자(문자열, 0~n개 문 자)를 저장하기 위해서는 String타입을 사용해야 한다.<br>문자열 리터럴은 ““안에 아무런 문자도 넣지 않는 것을 허용하며, 이를 빈 문자열(empty string)이라고 한다. 그러나 문자 리터럴은 반드시”안에 하나의 문자가 있어야한다.

```txt
String str = ""; // OK. 내요이 어ᄡ느ᄂ 비ᄂ 무ᄂ자여ᄅ
char ch = ''; // 에러. ''아ᄂ에 바ᄂ드시 하나의 무ᄂ자가 피ᄅ요
char ch = ' '; // OK. 고ᄋ배ᄀ 무ᄂ자(blank)로 벼ᄂ수 ch르ᄅ 초기화
```

사실 String은 클래스이므로 아래와 같이 객체를 생성하는 연산자 new를 사용해야 하지 만 특별히 위와 같은 표현도 허용한다.

```txt
String name = new String("Java"); // String개ᄀ체르ᄅ 새ᄋ서ᄋ
```

그리고 덧셈 연산자(+)를 이용하여 문자열을 결합할 수 있어서 다음과 같이 할 수 있다.

```txt
String name = "Ja" + "va"; // name으ᄂ "Java"
String str = name + 21; // stro
```

덧셈 연산자는 피연산자가 모두 숫자일 때는 두 수를 더하지만, 피연산자 중 어느 한 쪽이 String이면 나머지 한 쪽을 먼저 String으로 변환한 다음 두 String을 결합한다.

기본형과 참조형의 구별없이 어떤 타입의 변수도 문자열과 덧셈 연산을 수행하면 그 결 과가 문자열이 되는 것이다.

문자열 + any type → 문자열 + 문자열 → 문자열 any type + 문자열 → 문자열 + 문자열 → 문자열

예를 들어 $7+$ “7”을 계산할 때 7이 String이 아니므로, 먼저 7을 String으로 변환한 다음 “7”+“7”을 수행하여 “77”을 결과로 얻는다. 다음은 문자열 결합의 몇 가지 예를 보여준다.

$$
\begin{array}{lllll}
7+" & \rightarrow & \text { " } 7 \text { " } & + \text { " } \text { " } & \rightarrow
\end{array} \text { " } 7 \text { " } 2
$$

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
7 + 7 + "" → 14 + "" → "14" + "" → "14"
" \(+7+7\) → "7" + 7 → "7" + "7" → "77"
true + "" → "true" + "" → "true"
null + "" → "null" + "" → "null"
```

덧셈 연산자는 왼쪽에서 오른쪽의 방향으로 연산을 수행하기 때문에 결합순서에 따라 결과가 달라진다는 것에 주의하자. 그리고 7과 같은 기본형 타입의 값을 문자열로 변환할 때는 아무런 내용도 없는 빈 문자열(““)을 더해주면 된다는 것도 알아두자.

```txt
- 예제 2-3/StringEx.java
class StringEx {
    public static void main(String[] args) {
    String name = "Ja" + "va";
    String str = name + 21;
    System.out.println(name);
    System.out.println(str);
    System.out.println(7 + " ");
    System.out.println(" " + 7);
    System.out.println(7 + "");
    System.out.println("" + 7);
    System.out.println("" + "");
    System.out.println(7 + 7 + "");
    System.out.println("" + 7 + 7);
}
}
```

- 실행결과

---

Java

---

Java21

---

7

---

7

---

7

---

7

---

14

---

77

---

## 텍스트 블럭(text blocks)

JDK 15부터 다중행 문자열 리터럴(multiline string literal)을 작성할 수 있는 기능을 제공하며, ‘텍스트 블럭(text blocks)’이라고 부른다. 이 기능은 여러 줄로 이루어진 문자열을 작성하기 편리하게 도와준다.<br>이 전에는 여러 줄로 이루어진 문자열을 작성하려면, 아래와 같이 특수 문자들을 섞어서 문자열을 작성해야 한다.’ $\backslash \mathrm{n}$ ‘은 줄바꿈 문자이고,’ $\backslash \mathrm{t}$ ’은 탭 문자(키보드의 tab키)이다.

I 참고 I p.78의 표2-13에 특수 문자의 목록이 있다.

```txt
String str = "class Main {\n"
    + "\tpublic String main(String args[] {\n"
    + "\t\tSystem.out.println(\"Hello\");\n"
    + "\t}\n"
    + "}\n";
```

이렇게 작성하면 실수하기 쉽고 보기도 불편하다. 새로 추가된 텍스트 블럭을 이용하면특수 문자를 넣지 않고 편리하면서도 보기 좋게 다중행 문자열을 작성할 수 있다. 위의문자열을 텍스트 블럭으로 작성하면 다음과 같다.

I 참고 I 텍스트 블럭을 작성할 때 탭 키를 입력하면 4개의 공백 문자로 간주된다.

```txt
String str = """
class Main {
    public String main(String args[]) {
        System.out.println("Hello");
    }
}
""";
```

텍스트 블럭의 시작과 끝을 의미하는 “““사이에 텍스트를 탭 문자나 개행문자 없이 자유롭게 작성하면 된다. 주의할 점은 아래와 같이 여는”““의 다음 줄 부터 내용이 시작해야한다는 것이다.

```txt
String str1 = """Hello"""; // 에러. 테ᄀ스트 브ᄅ러ᄀ의 시자ᄀ """) 뒤에 내요ᄋ이 오며ᄂ 아ᄂ되ᄆ.
String str2 = """
        Hello"""; // OK. "Hello"와 도ᄋ이ᄅ
```

그리고 닫는 “““의 위치에 의해 들여쓰기의 기준이 된다는 것도 주의해야 한다. 아래의 코드에서 str3는”Hello”와 닫는 “““와 들여쓰기 위치가 같으므로”Hello”는 들여쓰기가 없다. 반면에 str4는 “““의 들여쓰기 위치가”Hello”보다 2칸 왼쪽에 있다. 그래서 “Hello”의왼쪽에 공백이 2 칸 추가된 것이다. 참고로 몇가지 예를 더 적었는데 가볍게 보고 넘어가길 바란다.

```txt
String str3 = """
    Hello
    """; // "Hello\n"와 도ᄋ이ᄅ
String str4 = """
    Hello
    """; // " Hello\n"와 도ᄋ이ᄅ. 다ᄃ느ᄂ ""의 위치가 드ᄅ여쓰기의 기주ᄂ
String str5 = """
    Hello
    """.indent (2); // str4와 도ᄋ이ᄅ. 드ᄅ여쓰기르ᄅ 수ᄉ자로 지저ᄋ 가느ᄋ
String str6 = """
    Hello\
    """; // "Hello"와 도ᄋ이ᄅ. '\'느ᄂ 하ᄂ 해ᄋ의 개해ᄋ 무ᄂ자(\n)르ᄅ 제거
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.3 형식화된 출력 - printf()

지금까지 화면에 출력할 때 println( )을 써왔는데, println( )은 사용하기엔 편하지만 변 수의 값을 그대로 출력하므로, 값을 변환하지 않고는 다른 형식으로 출력할 수 없다. 같은 값이라도 다른 형식으로 출력하고 싶을 때가 있다. 예를 들면, 소수점 둘째자리까지만 출 력한다던가, 정수를 16진수나 8진수로 출력한다던가. 이럴 때 printf()를 사용하면 된다. printf()는 ‘지시자(specifier)’를 통해 변수의 값을 여러 가지 형식으로 변환하여 출력하 는 기능을 가지고 있다. ’지시자’는 값을 어떻게 출력할 것인지를 지정해주는 역할을 한다. 정수형 변수에 저장된 값을 10진 정수로 출력할 때는 지시자’%d’를 사용하며, 변수의 값 을 지정된 형식으로 변환해서 지시자대신 넣는다. 예를 들어 int타입의 변수 age의 값이 14일 때, printf( )는 지시자 ‘%d’ 대신 14를 넣어서 출력한다.

```txt
    System.out.printf("age:%d", age);
→ System.out.printf("age:%d", 14);
→ System.out.printf("age:14"); // "age:14"가 화며ᄂ에 추ᄅ려ᄀ되ᄂ다.
```

만일 출력하려는 값이 2 개라면, 지시자도 2 개를 사용해야하며 출력될 값과 지시자의 순서 는 일치해야 한다. 물론 3개 이상의 값도 지시자를 지정해서 출력할 수 있으며 개수의 제 한은 없다.

```txt
    System.out.printf ("age:%d year:%d", age, year) ;
→ System.out.printf("age:%d year:%d", 14, 2017);
        \textit{l}
    "age:14 year:2017"이 화며ᄂ에 추ᄅ려ᄀ되ᄂ다.
```

println()과 달리 printf()는 출력 후 줄바꿈을 하지 않는다. 줄바꿈을 하려면 지시자 ‘%n’ 을 따로 넣어줘야 한다.

I 참고 I ‘%n’대신’‘을 사용해도 되지만, OS마다 줄바꿈 문자가 다를 수 있기 때문에’%n’을 사용하는 것이 더 안전하다.

```txt
System.out.printf("age:%d", age); // 추ᄅ려ᄀ 후 주ᄅ바꾸ᄆ으ᄅ 하지 않느ᄂ다.
System.out.printf("age:%d%n", age); // 추ᄅ려ᄀ 후 주ᄅ바꾸ᄆ으ᄅ 하ᄂ다.
```

printf()의 지시자 중에서 자주 사용되는 것만 뽑아보면 다음과 같다.<br>I 참고 I 지시자의 전체 목록을 보려면, Java API에서 Formatter클래스(java.util패키지)를 찾으면 된다.

| 지시자 | 설명 |
| --- | --- |
| %b | 불리언(boolean) 형식으로 출력 |
| %d | 10진(decimal) 정수의 형식으로 출력 |
| %○ | 8진(octal) 정수의 형식으로 출력 |
| %x, %X | 16진(hexa-decimal) 정수의 형식으로 출력 |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| %f | 부동 소수점(floating-point)의 형식으로 출력 |
| --- | --- |
| %e, %E | 지수(exponent) 표현식의 형식으로 출력 |
| %c | 문자(character)로 출력 |
| %s | 문자열(string)로 출력 |

- 표2-9 자주 사용되는 printf( )의 지시자
- 예제 2-4/PrintfEx.java

```txt
class PrintfEx {
    public static void main(String[] args) {
        byte b = 1;
        short s = 2;
        char c = 'A';
        int finger = 10;
        long big = 100_000_000_000L; // long big = 100000000000L;
        long hex = 0xFFFF_FFFF_FFFF_FFFFL ;
        int octNum = 010; // 8지ᄂ수 10, 10지ᄂ수로느ᄂ 8
        int hexNum = 0x10; // 16지ᄂ수 10, 10지ᄂ수로느ᄂ 16
        int binNum = 0b10; // 2지ᄂ수 10, 10지ᄂ수로느ᄂ 2
        System.out.printf("b=%d%n", b);
        System.out.printf("s=%d%n", s);
        System.out.printf("c=%c, %d %n", c, (int)c);
        System.out.printf("finger=[%5d]%n", finger);
        System.out.printf("finger=[%-5d]%n", finger);
        System.out.printf("finger=[%05d]%n", finger);
        System.out.printf("big=%d%n", big);
        System.out.printf("hex=%#x%n", hex); // '#'으ᄂ 저ᄇ두사(16지ᄂ수 0x, 8지ᄂ수 0)
        System.out.printf("octNum=%o, %d%n", octNum, octNum);
        System.out.printf("hexNum=%x, %d%n", hexNum, hexNum);
        System.out.printf("binNum=%s, %d%n", Integer.toBinaryString(binNum)
            , binNum);
    }
}
```

- 실행결과

```txt
b=1
s=2
c=A, 65
finger=[ 10]
finger=[10 ]
finger=[00010]
big=100000000000
hex=0xffffffffffffffff
octNum=10, 8
hexNum=10, 16
binNum=10, 2
```

정수형의 값을 printf()로 출력하는 예제이다. 정수를 출력할 때는 지시자 ’%d’를 사용하는데, 출력될 값이 차지할 공간을 숫자로 지정할 수 있다. 여러 값을 여러 줄로 간격 맞춰

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

출력할 때 꼭 필요한 기능이다. 아래의 결과를 보면 ‘0’과’-’가 어떤 역할을 하는지 설명하지 않아도 알 수 있을 것이다.

```txt
System.out.printf("finger = [%5d]%n", finger); // finger = [ 10]
System.out.printf("finger = [%-5d]%n", finger); // finger = [10 ]
System.out.printf("finger = [%05d]%n", finger); // finger = [00010]
```

지시자 ‘%x’와’%o’에 ‘#’를 사용하면 접두사 ’0x’와 ’0’이 각각 붙는다. 그리고’%X’는 16진수에 사용되는 접두사와 영문자를 대문자로 출력한다.

```txt
System.out.printf("hex = %x%n", hex); // hex=ffffffffffffffff
System.out.printf("hex = %#x%n", hex); // hex = 0xffffffffffffffff
System.out.printf("hex = %#X%n", hex); // hex = 0XFFFFFFFFFFFFFFF
```

10진수를 2진수로 출력해주는 지시자는 없기 때문에, 정수를 2진 문자열로 변환해주는’Integer.toBinaryString(int i)‘를 사용해야 한다. 이 메서드는 정수를 2진수로 변환해서문자열로 반환하므로 지시자’%s’를 사용했다.

```txt
System.out.printf("binNum=%s%n", Integer.toBinaryString(binNum));
```

그리고 C언어에서는 char타입의 값을 지시자 ‘%d’로 출력할 수 있지만, 자바에서는 허용되지 않는다. 아래와 같이 int타입으로 형변환해야만’%d’로 출력할 수 있다.

```txt
    System.out.printf("c=%c, %d %n", c, (int)c); // 혀ᄋ벼ᄂ화ᄂ이 꼬ᄀ 피ᄅ요하다.
```

- 예제 2-5/PrintfEx2.java

```txt
class PrintfEx2 {
    public static void main(String[] args) {
        String url = "www.codechobo.com";
        float f1 = .10f; // 0.10, 1.0e-1
        float f2 = 1e1f; // 10.0, 1.0e1, 1.0e+1
        float f3 = 3.14e3f;
        double d = 1.23456789;
        System.out.printf("f1=%f, %e, %g%n", f1, f1, f1);
        System.out.printf("f2=%f, %e, %g%n", f2, f2, f2);
        System.out.printf("f3=%f, %e, %g%n", f3, f3, f3);
        System.out.printf("d=%f%n", d);
        System.out.printf("d=%14.10f%n", d); // 저ᄂ체 14자리 주ᄋ 소수저ᄆ 10자리
        System.out.printf("[12345678901234567890]%n");
        System.out.printf("[%s]%n", url);
        System.out.printf("[%20s]%n", url);
        System.out.printf("[%-20s]%n", url); // 외ᄂ쪼ᄀ저ᄋ려ᄅ
        System.out.printf("[%.8s]%n", url); // 외ᄂ쪼ᄀ에서 8그ᄅ자마ᄂ 추ᄅ려ᄀ
    }
}
```

- 실행결과

```txt
f1=0.100000, 1.000000e-01, 0.100000
f2=10.000000, 1.000000e+01, 10.0000
f3=3140.000000, 3.140000e+03, 3140.00
d=1.234568 ← 마지마ᄀ 자리 바ᄂ오ᄅ리ᄆ되ᄆ
d= 1.2345678900
[12345678901234567890]
[www.codechobo.com]
[ www.codechobo.com]
[www.codechobo.com ]
[www.code]
```

실수형 값의 출력에 사용되는 지시자는 ‘%f’, ‘%e’, ‘%g’가 있는데,’%f’가 주로 쓰이고 ‘%e’ 는 지수형태로 출력할 때, ’ %g’ 는 값을 간략하게 표현할 때 사용한다.<br>’%f’는 기본적으로 소수점 아래 6자리까지만 출력하기 때문에 소수점 아래 7자리에서 반 올림한다. 그래서 1.23456789 가 1.234568 로 출력되었다. 그리고 다음과 같이 전체 자리 수와 소수점 아래의 자리수를 지정할 수도 있다.

```txt
System.out.printf("d=%14.10f%n", d); // 저ᄂ체 14자리 주ᄋ 소수저ᄆ 아래 10자리
```

%전체자리.소수점아래자리 f

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-075_173_997_1221_501.jpg -->

소수점도 한자리를 차지하며, 소수점 아래의 빈자리는 0으로 채우고 정수의 빈자리는 공 백으로 채워서 전체 자리수를 맞춘다.

I 참고 I 지시자를 ’%014.10’으로 지정했다면, 양쪽 빈자리를 모두 0으로 채웠을 것이다.

지시자 ’%s’에도 숫자를 추가하면 원하는 만큼의 출력공간을 확보하거나 문자열의 일부만 출력할 수 있다.

```txt
System.out.printf("[%s]%n", url); // 무ᄂ자여ᄅ의 기ᄅ이마ᄂ크ᄆ 추ᄅ려ᄀ고ᄋ가ᄂ으ᄅ 화ᄀ보
System.out.printf("[%20s]%n", url); // 최소 20그ᄅ자 추ᄅ려ᄀ고ᄋ가ᄂ 화ᄀ보. (우츠ᄀ저ᄋ려ᄅ)
System.out.printf("[%-20s]%n", url); // 최소 20그ᄅ자 추ᄅ려ᄀ고ᄋ가ᄂ 화ᄀ보. (좌츠ᄀ저ᄋ려ᄅ)
System.out.printf("[%.8s]%n", url); // 외ᄂ쪼ᄀ에서 8그ᄅ자마ᄂ 추ᄅ려ᄀ
```

지정된 숫자보다 문자열의 길이가 작으면 빈자리는 공백으로 출력된다. 공백이 있는 경우 기본적으로 우측 끝에 문자열을 붙이지만, ‘-’를 붙이면 좌측 끝에 붙인다. 그리고’.’을 붙 이면 문자열의 일부만 출력할 수 있다. 숫자를 직접 바꿔가면서 다양하게 테스트 해보자.

## 2.4 화면에서 입력받기 - Scanner

지금까지 화면에 출력만 해왔는데, 이제 화면으로부터 입력받는 방법에 대해서 배워보자. 자바에서 화면으로 부터 입력받는 방법은 여러 가지가 있으며, 점점 간단하고 편리한 방 향으로 발전해 왔다. 최신 방법은 JDK 6부터 추가된 Console클래스를 이용하는 것인데, 이 클래스는 인텔리제이와 같은 IDE에서 잘 동작하지 않으므로, 이와 유사한 Scanner클 래스를 이용해서 화면으로부터 입력받는 방법을 배워보자.

I 참고 I 화면으로부터 입력받는 방법들은 근본적으로 모두 같으므로 차이를 비교할 필요는 없다. 그저 상황에 맞는 편 리한 것을 선택해서 사용하자.

화면으로부터 입력받는 방법은 아직 배우지 않은 것들을 알아야 하는데도 불구하고 본인 이 직접 입력을 하면 자칫 지루해 질 수 있는 내용들이 좀 더 재미있어지지 않을까하는 생 각에서 미리 소개 하게 되었다. 나중에 자세히 배울 테니 지금은 이해하기보다 가져다 쓰 는 정도만 알아두자.<br>먼저 Scanner클래스를 사용하려면, 아래의 한 문장을 추가해야 한다.

```txt
import java.util.*; // Scanner크ᄅ래스르ᄅ 사요ᄋ하기 위해 추가
```

그 다음엔 Scanner클래스의 객체를 생성한다.

```txt
Scanner scanner = new Scanner(System.in); // Scanner크ᄅ래스의 개ᄀ체르ᄅ 새ᄋ서ᄋ
```

그리고 nextLine()이라는 메서드를 호출하면, 입력대기 상태에 있다가 입력을 마치고 ’엔 터키(Enter)’를 누르면 입력한 내용이 문자열로 반환된다.

```txt
String input = scanner.nextLine(); // 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ input에 저자ᄋ
int num = Integer.parseInt(input); // 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ int 타이ᄇ의 가ᄡ으로 벼ᄂ화ᄂ
```

만일 입력받은 문자열을 숫자로 변환하려면, Integer.parseInt()라는 메서드를 이용해야 한다. 이 메서드는 문자열을 int타입의 정수로 변환한다.

I 참고 I 만일 문자열을 float타입의 값으로 변환하길 원하면, Float.parseFloat( )를 사용해야한다. 다른 타입으로의 변 환은 p.505을 참고하자.

사실 Scanner클래스에는 nextInt()나 nextFloat()와 같이 변환없이 숫자로 바로 입력받을 수 있는 메서드들이 있고, 이 메서드들을 사용하면 문자열을 숫자로 변환하는 수고는 하지 않아도 된다.

```txt
int num = scanner.nextInt(); // 저ᄋ수르ᄅ 이ᄇ려ᄀ바ᄃ아서 벼ᄂ수 num에 저자ᄋ
```

그러나 이 메서드들은 화면에서 연속적으로 값을 입력받아서 사용하기에 까다로울 때가있다. 그럴때는 모든 값을 nextLine()으로 입력받아서 적절히 변환하자.

- 예제 2-6/ScannerEx.java

```txt
import java.util.*; // Scanner르ᄅ 사요ᄋ하기 위해 추가
class ScannerEx {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("두자리 저ᄋ수르ᄅ 하나 이ᄇ려ᄀ해주세요.>");
        String input = scanner.nextLine();
        int num = Integer.parseInt(input); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
// int num = scanner.nextInt();
        System.out.println("이ᄇ려ᄀ내요ᄋ :"+input);
        System.out.printf("num=%d%n", num);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-077_183_479_724_1153.jpg -->

만일 숫자가 아닌 문자 또는 기호를 입력하면, 입력받은 문자열을 숫자로 변환하는 과정인 Integer.parseInt()에서 에러가 발생한다. 특히 공백을 입력하지 않도록 주의하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3. 진법

### 3.1 10진법과 2진법

우리는 일상생활에서 주로 사용하는 것은 10진법이다. 아마도 사람이 10개의 손가락을 가 지고 있기 때문이 아닐까. 1946년에 개발된 컴퓨터인 에니악(ENIAC)은 사람에게 익숙한 10진법을 사용하도록 설계되었으나 전기회로는 전압이 불안정해서 전압을 10단계로 나누 어 처리하는 데 한계가 있었다. 그래서 1950년에 개발된 에드박(EDVAC)은 단 두 가지 단 계, 전기가 흐르면 1, 흐르지 않으면 0,만으로 동작하도록 설계되었고 매우 성공적이었다.<br>손가락의 개수가 10개인 사람에게 10진법이 적합하듯, 컴퓨터와 같은 전기회로에는 2진 법이 적합한 것이다.<br>그 이후부터 지금까지 대부분의 컴퓨터는 2진 체계로 설계되었기 때문에, 2진법을 알지 못하면 컴퓨터의 동작원리나 데이터 처리방식을 온전히 이해할 수 없다. 지금까지 변수에 값을 저장하면 10진수로 저장되는 것처럼 설명을 하였지만, 컴퓨터는 2진수(0과 1) 밖에 모르기 때문에 아래의 오른쪽과 같이 2진수로 바뀌어 저장된다. 2진수 11001은 10진수로 25 이다.

$$
\begin{aligned}
& \text { int age }=25 ; \quad / / \text { 변수 age에 } 25 \text { 를 저장 } \\
& \text { age } 25 \quad \longrightarrow \quad \text { age } 11001
\end{aligned}
$$

I 참고 I int타입의 크기가 4 byte이면, 32자리의 2진수로 표현해야하지만 앞의 0은 생략하였다. 0을 생략하지 않으면, ’11001’이 아니라 ’00000000000000000000000000011001’이다.

이처럼 2진법은 0과 1로만 데이터를 표현하기 때문에 10진법에 비해 많은 자리수를 필요 로 한다. 10진수 2와 같이 작은 숫자도 2진수로 표현하려면 2자리가 필요하다. 2진수 한 자리로는 1보다 큰 값을 표현할 수 없기 때문이다.

이것은 10진수에서 9보다 큰 수를 표현하기 위해서는 두 자리의 10진수가 필요한 것과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-078_494_1089_1833_289.jpg -->

그래서 2진수 1에 1을 더하면 2가 아닌 10이 되고, 2진수 11에 1을 더하면 12가 아닌 100 이 된다. 10진수와 비교해보면 쉽게 이해가 될 것이다.

| 2진수 |  | 10진수 |  |
| --- | --- | --- | --- |
| $\begin{array}{r}1 \\ +\quad 1 \\ \hline 10\end{array}$ | $\begin{array}{r}11 \\ +1 \\ \hline 100\end{array}$ | $\begin{array}{r}9 \\ +\quad 1 \\ \hline 10\end{array}$ | $\begin{array}{r}99 \\ +1 \\ \hline 100\end{array}$ |

자리수가 많아지긴 해도 2진수는 10진수를 온전히 표현할 수 있다. 게다가 덧셈이나 뺄셈 같은 연산도 10진수와 동일하다.

## 3.2 비트(bit)와 바이트(byte)

한 자리의 2진수를 ’비트(bit, binary digit)’라고 하며, 1 비트는 컴퓨터가 값을 저장할 수 있는 최소단위이다. 그러나 1 비트는 너무 작은 단위이기 때문에 1 비트 8개를 묶어서 ’바 이트(byte)’라는 단위로 정의해서 데이터의 기본 단위로 사용한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-079_194_1157_1252_438.jpg -->

이 외에도 ’워드(word)’라는 단위가 있는데, ’워드(word)’는 ’CPU가 한 번에 처리할 수 있 는 데이터의 크기’를 의미한다. 그림2-2에서는 워드의 크기를 4 바이트(32 비트)라고 했 지만, 사실 워드의 크기는 CPU의 성능에 따라 달라진다. 예를 들어 32 비트 CPU에서 1 워드는 32 비트(4 바이트)이고, 64 비트 CPU에서는 64 비트(8 바이트)이다.

I 참고 I nibble : 4 bit, 16진수 1자리(2진수 4자리)를 저장할 수 있는 단위

아래의 표는 1~4비트로 표현할 수 있는 값의 개수를 모두 나열한 것으로 1 비트(2진수 1 자리)로 0과 1, 모두 2개(2 ${ }^{1}$ )의 값을, 2비트(2진수 2자리)로는 4개(2 ${ }^{2}$ )의 값을 표현할 수 있다는 것을 알 수 있다.

I 참고 I 0001과 1은 같은 값이지만, 0001이 크기가 4 자리(4 비트)인 데이터라는 것을 강조하기 위해 빈자리를 0으로 채운 것이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| 1 bit (2개) | 2 bit (4개) | 3 bit (8개) | 4 bit (16개) | 10진수 |
| --- | --- | --- | --- | --- |
| 0 | 00 | 000 | 0000 | 0 |
| 1 | 01 | 001 | 0001 | 1 |
|  | 10 | 010 | 0010 | 2 |
|  | 11 | 011 | 0011 | 3 |
|  |  | 100 | 0100 | 4 |
|  |  | 101 | 0101 | 5 |
|  |  | 110 | 0110 | 6 |
|  |  | 111 | 0111 | 7 |
|  |  |  | 1000 | 8 |
|  |  |  | 1001 | 9 |
|  |  |  | 1010 | 10 |
|  |  |  | 1011 | 11 |
|  |  |  | 1100 | 12 |
|  |  |  | 1101 | 13 |
|  |  |  | 1110 | 14 |
|  |  |  | 1111 | 15 |

- 표2-10 1~4비트로 표현할 수 있는 값의 개수

이를 일반화하면, n비트로 $2^{\mathrm{n}}$ 개의 값을 표현할 수 있다. 그리고 n비트로 10진수를 표현 한다면, 표현가능한 10진수의 범위는 $0 \sim 2^{\mathrm{n}}-1$ 이 된다. 표 2-9의 맨 오른쪽 표를 보면, 4 비트로 모두 16 개 $\left(2^{4}\right)$ 의 값을 표현할 수 있으며, 4 비트로 10진수를 표현한다면 범위가 ’ $0 \sim 15\left(0 \sim 2^{4}-1\right)$ ’라는 것을 직접 확인할 수 있다.

```txt
n비트로 표혀ᄂ하ᄅ 수 이ᄊ느ᄂ 10지ᄂ수
가ᄡ의 개수 : 2n
가ᄡ의 버ᄆ위 : 0~2n-
```

I 참고 I 10진수 n자리로 표현할 수 있는 값의 범위가 ’ $0 \sim 10^{n}-1$ ’라는 것과 비교해보면 이해가 더 쉬울 것이다. 10진수 2자리 로 표현할 수 있는 값의 범위는 ’0~10 ${ }^{2}-1^{\prime}$, 즉 ’0~99’가 된다.

### 3.3 8진법과 16진법

2진법은 오직 0과 1, 두 개의 기호만으로 값을 표현하기 때문에, 2진법으로 값을 표현하 면 자리수가 상당히 길어진다는 단점이 있다. 이러한 단점을 보완하기 위해 2진법 대신 8 진법이나 16진법을 사용한다.<br>8진수는 2진수 3자리를, 16진수는 2진수 4자리를 각각 한자리로 표현할 수 있기 때문에 자리수가 짧아져서 알아보기 쉽고 서로 간의 변환방법 또한 매우 간단하다.

| 2진법 | 8진법 | 10진법 | 16진법 |  | 2진수 | 8진수 | 10진수 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 2개 | 0112344567 8개 | 0123456789  10개 | 0123456789 | O123456784-A C F F  16개 | 0 | 0 | 0 |
|  |  |  |  |  | 1 | 1 | 1 |
|  |  |  |  |  | 10 | 2 | 2 |
|  |  |  |  |  | 11 | 3 | 3 |
|  |  |  |  |  | 100 | 4 | 4 |
|  |  |  |  |  | 101 | 5 | 5 |
|  |  |  |  |  | 110 | 6 | 6 |
|  |  |  |  |  | 111 | 7 | 7 |
|  |  |  |  |  | 1000 | 10 | 8 |
|  |  |  |  |  | 1001 | 11 | 9 |
|  |  |  |  |  | 1010 | 12 | 10 |
|  |  |  |  |  | 11 | 1011 | 13 |
|  |  |  |  |  | C | 12 | 1100 |
|  |  |  |  |  | D | 13 | 1101 |
|  |  |  |  |  | E | 14 | 1110 |
|  |  |  |  |  | 15 | 1111 | 17 |
|  |  |  |  |  |  | 10000 | 20 |
|  |  |  |  |  |  |  | 16 |

- 그림2-3 2, 8, 10, 16진법에 사용되는 기호

8진법은 값을 표현하는데 8개의 기호가 필요하므로 0~7의 숫자를 기호로 사용하면 되지 만, 16진법은 16개의 기호가 필요하므로 0~9의 숫자만으로는 부족하다. 그래서 6개의 문 자(A~F)를 추가로 사용한다. 예를 들어 16진수 A는 10진수로 10이고, F는 15이다.

2진수를 8진수, 16진수로 변환<br>2진수를 8진수로 변환하려면, 2진수를 뒤에서부터 3자리씩 끊어서 그에 해당하는 8진수 로 바꾸면 된다. 8은 $2^{3}$ 이기 때문에, 8진수 한 자리가 2진수 3자리를 대신할 수 있는 것이 다. 2진수를 16진수로 변환하는 방법 역시 이와 비슷한데, 3자리가 아닌 4자리씩 끊어서 바꾼다는 점만 다르다.

I 참고 I 8진수 또는 16진수를 2진수로 변환하려면 위와 반대의 과정을 거치기만 하면 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-081_369_283_1683_373.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-081_252_602_1800_714.jpg -->

- 그림2-4 2진수를 8진수, 16진수로 변환

I 참고 I 8진수 또는 16진수를 2진수로 변환하려면 위와 반대의 과정을 거치기만 하면 된다.<br>\| 2진수 \| 16진수 \|<br>\| :— \| :— \|<br>\| 0000 \| 0 \|<br>\| 0001 \| 1 \|<br>\| 0010 \| 2 \|<br>\| 0011 \| 3 \|<br>\| 0100 \| 4 \|<br>\| 0101 \| 5 \|<br>\| 0110 \| 6 \|<br>\| 0111 \| 7 \|<br>\| 1000 \| 8 \|<br>\| 1001 \| 9 \|<br>\| 1010 \| A \|<br>\| 1011 \| B \|<br>\| 1100 \| C \|<br>\| 1101 \| D \|<br>\| 1110 \| E \|<br>\| 1111 \| F \|

위의 그림은 2진수를 8진수와 16진수로 변환하는 과정을 보여준다. 2진수 1010101100는 8진수로 ’1254’이고, 16진수로는 ’2AC’라는 것을 알 수 있다.

## 3.4 정수의 진법 변환

## 10진수를 n진수로 변환

10진수를 다른 진수로 변환하려면, 해당 진수로 나누고 나머지 값을 옆에 적는 것을 더 이 상 나눌 수 없을 때까지 반복한 다음 마지막 몫과 나머지를 아래부터 위로 순서대로 적으 면 된다. 글로 설명하니까 복합한 것 같지만 사실은 쉽다. 예를 들어 10진수 46을 2진수로 변환하려면, 46 을 2 로 나누고 그 몫과 나머지를 아래의 그림과 같이 적는다.

$$
\begin{array}{ccc}
2 & \begin{array}{c}
46 \\
23
\end{array} & \ldots 0 \\
\text { 몫 } & \text { 나머지 } &
\end{array}
$$

이 작업을 몫이 나누는 값인 2보다 작을 때까지 반복한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-082_306_272_929_670.jpg -->

이제 마지막 몫부터 나머지를 아래서 위로 순서대로 적기만 하면 2진수로 변환한 결과가 된다. 10진수를 8진수 또는 16진수로 변환하려면 2대신 8이나 16으로 나누면 된다. 즉, n 진수로 변환하려면, n으로 반복해서 나누기만 하면 되는 것이다.

| 8 | 816 나머지 | 16 | 1615 나머지 | 10진수 | 16진수 |
| --- | --- | --- | --- | --- | --- |
| 8 | 102 … 0 | 16 | 100 …15(F) | 10 | A |
| 8 | 12 … 6 |  | 6 … 4 | 11 | B |
|  | 1 … 4 |  |  | 12 | C |
| $816_{(10)} \rightarrow 1460_{(8)}$ |  | $1615_{(10)} \rightarrow 64 F_{(16)}$ |  | 13 | D |
|  |  |  |  | 14 | E |
|  |  |  |  | 15 | F |

아래의 그림은 10진수를 10진수로 변환하는 과정을 보여준다. 10진수를 10진수로 변환하 는 것이 의미는 없지만, 이 변환방법의 원리를 이해하고 기억하는데 도움이 될 것이다.

| 10 | 12345 | 나머지 |
| --- | --- | --- |
| 10 | 1234 | … 5 |
| 10 | 123 | … 4 |
| 10 | 12 | … 3 |
|  | 1 | … 2 |
| $12345_{(10)}$ |  | $\rightarrow 12345_{(10)}$ |

## n진수를 10진수로 변환

어떤 진법의 수라도 10진수로 변환하는 방법은 똑같다. 각 자리의 수에 해당 단위의 값을 곱해서 모두 더하면 된다. 예를 들어 10진수 123은 다음과 같이 풀어쓸 수 있다.

$$
\begin{aligned}
123_{(10)} & =100+20+3 \\
& =1 \times 100+2 \times 10+3 \times 1 \\
& =1 \times 10^{2}+2 \times 10^{1}+3 \times 10^{0}
\end{aligned}
$$

| $10^{2}$ | $10^{1}$ | $10^{0}$ |
| --- | --- | --- |
| 1 | 2 | 3 |

$$
1 \times 10^{2}+2 \times 10^{1}+3 \times 10^{0}
$$

마찬가지로 2진수는 다음과 같이 표현할 수 있는데, 각 자리의 단위가 10의 제곱이 아니 라 2 의 제곱이라는 점을 제외하면 10 진수와 동일하다.

| $2^{5}$ | $2^{4}$ | $2^{3}$ | $2^{2}$ | $2^{1}$ | $2^{0}$ |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 1 | 1 | 0 |

$$
1 \times 2^{5}+0 \times 2^{4}+1 \times 2^{3}+1 \times 2^{2}+1 \times 2^{1}+0 \times 2^{0}
$$

2의 제곱

---

10진수

---

| $2^{0}$ | $2^{1}$ | $2^{2}$ | $2^{3}$ | $2^{4}$ | $2^{5}$ | $2^{6}$ | $2^{7}$ | $2^{8}$ | $2^{9}$ | $2^{10}$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

$$
\begin{aligned}
101110_{(2)} & =1 \times 2^{5}+0 \times 2^{4}+1 \times 2^{3}+0 \times 2^{2}+0 \times 2^{1}+0 \times 2^{0} \\
& =1 \times 32+0 \times 16+1 \times 8+1 \times 4+1 \times 2+0 \times 1 \\
& =32+8+4+2 \\
& =46_{(10)}
\end{aligned}
$$

8진수와 16진수를 10진수로 변환하는 방법 역시 동일하다.

| $8^{3}$ | $8{ }^{2}$ | $8^{1}$ | $8^{0}$ |
| --- | --- | --- | --- |
| 1 | 4 | 6 | 0 |

$$
1 \times 8^{3}+4 \times 8^{2}+6 \times 8^{1}+0 \times 8^{0}
$$

8의 제곱

---

10진수

---

| $8^{0}$ | $8^{1}$ | $8^{2}$ | $8^{3}$ | $8{ }^{4}$ |
| --- | --- | --- | --- | --- |
| 1 | 8 | 64 | 512 | 4096 |

$$
\begin{aligned}
1460_{(8)} & =1 \times 8^{3}+4 \times 8^{2}+6 \times 8^{1}+0 \times 8^{0} \\
& =1 \times 512+4 \times 64+6 \times 8+0 \times 1 \\
& =512+256+48+0 \\
& =816_{(10)}
\end{aligned}
$$

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| $16^{2}$ | $16{ }^{1}$ | $16^{0}$ |
| --- | --- | --- |
| 6 | 4 | F |

$$
6 \times 16^{2}+4 \times 16^{1}+F \times 16^{0}
$$

16의 제곱

---

10진수

---

| $16^{0}$ | $16^{1}$ | $16^{2}$ | $16^{3}$ | $16^{4}$ |
| --- | --- | --- | --- | --- |
| 1 | 16 | 256 | 4096 | 65536 |

$$
\begin{aligned}
64 F_{(16)} & =6 \times 16^{2}+4 \times 16^{1}+F \times 16^{0} \\
& =6 \times 256+4 \times 16+F \times 1 \leftarrow F \text { 는 } 10 \text { 진수로 } 15 \text { 이므로 } 15 \times 1 \text { 과 같다. } \\
& =1536+64+15 \\
& =1615_{(10)}
\end{aligned}
$$

## 3.5 실수의 진법 변환

10진 소수점수를 2진 소수점수로 변환하는 방법<br>앞서 10진 정수를 2진 정수로 변환할 때, 10진수를 2로 계속 나누면서 나머지를 구했던 것을 기억할 것이다. 10진 소수점수를 2진 소수점수로 변환하는 방법은 이와 반대로 10진 소수점수에 2를 계속 곱한다.<br>예를 들어 10진수 0.625를 2진수로 변환하는 방법은 다음과 같다.

1. 10진 소수에 2를 곱한다.
   $$
   0.625 \times 2=1.25
   $$
2. 위의 결과에서 소수부만 가져다가 다시 2 를 곱한다.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-084_138_245_1564_709.jpg -->
3. (1)과 (2)의 과정을 소수부가 0이 될 때까지 반복한다.
   $$
   \begin{aligned}
   & 0.625 \times 2=1.25 \\
   & 0.25 \times 2=0.5 \\
   & 0.5 \times 2=1.0
   \end{aligned}
   $$

I 참고 I (3)의 과정에서 소수가 0이 되지 않고 무한히 반복될 수도 있다.<br>위의 결과에서 정수부만을 위에서 아래로 순서대로 적고 ’0.’을 앞에 붙이면 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-084_197_288_2110_688.jpg -->

참고로 10진 소수를 10진 소수로 변환하는 방법은 다음과 같다. 2대신 10을 곱할 뿐이다. 10진 소수를 2진 소수로 변환하는 방법을 기억하는데 도움이 될 것이다.

$$
\begin{aligned}
& 0.625 \times 10=6.25 \\
& 0.25 \times 10=2.5 \\
& 0.5 \times 10=5.0 \\
& 0.625_{(10)} \rightarrow 0.625_{(10)}
\end{aligned}
$$

## 2진 소수점수를 10진 소수점수로 변환하는 방법

그러면, 이제 2진 소수를 10진 소수로 바꿔서 0.101(2) 가 정말로 0.625 ${ }_{(10)}$ 인지 확인해보자. $0.625_{(10)}$ 를 다음과 같이 표현할 수 있듯이

|  | $10^{-1}$ | $10^{-2}$ | $10^{-3}$ |
| --- | --- | --- | --- |
| 0. | 6 | 2 | 5 |

$$
0.625_{(10)}=6 \times 10^{-1}+2 \times 10^{-2}+5 \times 10^{-3}
$$

$0.101_{(2)}$ 은 다음과 같이 표현할 수 있다.

|  | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ |
| --- | --- | --- | --- |
| 0. | 1 | 0 | 1 |

$$
\begin{aligned}
0.101_{(2)} & =1 \times 2^{-1}+0 \times 2^{-2}+1 \times 2^{-3} \\
& =1 \times 0.5+0 \times 0.25+1 \times 0.125 \\
& =0.5+0.125 \\
& =0.625_{(10)}
\end{aligned}
$$

위의 계산과정을 통해 $0.101_{(2)}$ 이 $0.625_{(10)}$ 라는 것을 확인할 수 있다.<br>I 참고 I 123.456처럼 정수부가 있는 소수점수는 정수부 123과 소수점부 0.456을 따로 변환한 다음에 더하면 된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.6 음수의 2진 표현 - 2의 보수법

앞서 살펴본 것과 같이 n비트의 2진수로 표현할 수 있는 값의 개수는 모두 $2^{\mathrm{n}}$ 개이므로, 4 비트의 2진수로는 모두 $2^{4}(=16)$ 개의 값을 표현할 수 있다. 이 값을 모두 ’부호없는 정수(0 과 양수)’의 표현에 사용하면, 아래와 같이 ’0부터 15까지의 정수’를 나타낼 수 있다.

| # | 2진수 | 부호없는 10진수 |
| --- | --- | --- |
| 1 | 0000 | 최소값 → 0 |
| 2 | 0001 | 1 |
| 3 | 0010 | 2 |
| 4 | 0011 | 3 |
| 5 | 0100 | 4 |
| 6 | 0101 | 5 |
| 7 | 0110 | 6 |
| 8 | 0111 | 7 |
| 9 | 1000 | 8 |
| 10 | 1001 | 9 |
| 11 | 1010 | 10 |
| 12 | 1011 | 11 |
| 13 | 1100 | 12 |
| 14 | 1101 | 13 |
| 15 | 1110 | 14 |
| 16 | 1111 | 최대값 → 15 |

A 표2-11 4 비트로 표현할 수 있는 부호없는 10진 정수

그러면 4비트의 2진수로 부호있는 정수, 즉 양수와 음수를 모두 표현하려면 어떻게 해야 할까? 4비트 2진수의 절반인 8개는 0으로 시작하고, 나머지 절반은 1로 시작하니까, 1로 시작하는 2진수를 음수표현에 사용하자. 이렇게 하면, ’왼쪽의 첫 번째 비트(MSB)’가 0이 면 양수, 1이면 음수이므로 첫 번째 비트만으로 값의 부호를 알 수 있게 된다.

I 참고 I 2진수의 제일 왼쪽의 1 bit를 MSB(most significant bit)라고 한다.

| # | 2진수 | 부호있는 10진수 |
| --- | --- | --- |
| 1 | 0000 | 0 |
| 2 | 0001 | 1 |
| 3 | 0010 | 2 |
| 4 | 0011 | 3 |
| 5 | 0100 | 4 |
| 6 | 0101 | 5 |
| 7 | 0110 | 6 |
| 8 | 0111 | 7 |
| 9 | 1000 | ??? |
| 10 | 1001 | ??? |
| 11 | 1010 | ??? |
| 12 | 1011 | ??? |
| 13 | 1100 | ??? |
| 14 | 1101 | ??? |
| 15 | 1110 | ??? |
| 16 | 1111 | ??? |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이제 위 표의 절반을 어떻게 음수로 채워야할까? 일단 양수처럼 0부터 순차적으로 채워보자.

| # | 2진수 | 부호있는 10진수 |
| --- | --- | --- |
| 1 | 0000 | 0 |
| 2 | 0001 | 1 |
| 3 | 0010 | 2 |
| 4 | 0011 | 3 |
| 5 | 0100 | 4 |
| 6 | 0101 | 5 |
| 7 | 0110 | 6 |
| 8 | 0111 | 최대값 → 7 |
| 9 | 1000 | -0 |
| 10 | 1001 | -1 |
| 11 | 1010 | -2 |
| 12 | 1011 | -3 |
| 13 | 1100 | -4 |
| 14 | 1101 | -5 |
| 15 | 1110 | -6 |
| 16 | 1111 | 최소값 → -7 |

음수를 이렇게 배치하면, 양수의 첫 번째 비트만 1로 바꾸면 음수가 된다는 장점이 있다. 그러나, 두 수를 더했을 때 2진수로 0이 되지 않는다는 것과 0이 두개(0, -0) 존재한다는 단점이 있다. 게다가 2진수가 증가할 때 10진 음수는 감소한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-087_687_1187_1293_450.jpg -->

그러나 위와 같이 ’2의 보수법’에 의해 음수를 배치하면, 절대값이 같은 양수와 음수를 더 했을 때 2진수로도 0을 결과로 얻으므로 부호를 신경쓰지 않고 덧셈할 수 있게 된다.<br>그리고 2진수가 증가할 때 10진 음수가 감소한다는 모순도 없어졌다. 다만, 첫 번째 비 트를 바꾸는 것만으로 값의 부호를 바꿀 수 없게 되었다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2의 보수법

어떤 수의 ‘n의 보수’는 더했을 때 n이 되는 수를 말한다. 7의 ’10의 보수’는 3이고, 3의 ’10 의 보수’는 7이다. 3과 7은 ’10의 보수의 관계’에 있다고 한다. ’2의 보수 관계’ 역시, 더해 서 2가 되는 두 수의 관계를 말하며 10진수 2는 2진수로 ‘10’이다. 2진수로 ’10’은 자리올 림이 발생하고 0이 되는 수를 뜻한다. 그래서 ’2의 보수 관계’에 있는 두 2진수를 더하면’(자리올림이 발생하고) 0이 된다.’

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-088_270_673_647_508.jpg -->

- 그림2-5 2의 보수 관계에 있는 두 2진수의 덧셈

위의 그림에서 알 수 있듯이 2진수 ’0101’와 ’1011’은 서로 ’2의 보수 관계’에 있으며, 이 두 2진수를 더하면 0이 된다. 이 덧셈이 10진수로도 0이 되려면, 2진수 ’0101’가 10진수로 5 니까. 2진수 ’1011’은 10진수로 -5이어야 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-088_687_761_1234_472.jpg -->

A 표2-12 2의 보수법으로 표현한 10진수

이처럼 서로 ’2의 보수 관계’에 있는 두 2진수로 5와 -5처럼 절대값이 같고 부호가 다른 두 10진수를 표현하는 것을 ’2의 보수법’이라고 하며, 현재 대부분의 시스템이 ’2의 보수 법’으로 부호있는 정수를 표현한다.

## 음수를 2진수로 표현하기

10진 음의 정수를 2진수로 변환하려면, 먼저 10진 음의 정수의 절대값을 2진수로 변환한 다. 그 다음에 이 2진수의 ‘2의 보수’를 구하면 된다. 예를 들어’-5’의 2진 표현을 구하는 과정은 다음과 같다.

- 5\_\{(10)\} \\xrightarrow\{\\text \{ (1) 절대값 \}\} 5\_\{(10)\} \\xrightarrow\{\\text \{ (2) 2진수 \}\} 0101\_\{(2)\} \\xrightarrow\{\\text \{ (3) \} 2 \\text \{ 의 보수 \}\} 1011\_\{(2)\}
- 그림2-6 10진 음의 정수의 2진 표현을 구하는 과정

위의 방법은 부호가 다르고 절대값이 같은 두 정수의 2진 표현이 서로 ’2의 보수’관계에 있 다는 것을 이용한 것으로 복잡해 보이지만 간단하다. 절대값은 부호만 떼어내면 되고, 10 진수를 2진수로 변환하는 방법은 이미 배웠고, ’2의 보수’로 변환하는 방법도 쉽다.

## 2의 보수 구하기

서로 ’2의 보수’의 관계에 있는 두 수를 더하면 ’0(자리올림 발생)’이 된다. 예를 들어 2진 수 ’0101’의 ’2의 보수’를 구하려면, ’0101’에 어떤 수를 더하면 0이 되는지 알아내야 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-089_55_974_1122_522.jpg -->

2의보수

아래와 같이 뺄셈으로 ’2의 보수’를 간단히 구할 수 있지만 자리수가 많아지면 뺄셈도 쉽 지 않다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-089_57_973_1419_528.jpg -->

2의 보수

다행히 뺄셈보다 ’2의 보수’를 더 간단히 구하는 방법이 있다. ’1의 보수’를 구한 다음 1을 더한다. 그러면, 2 의 보수를 구할 수 있다.

## 2 의 보수 $=1$ 의 보수 +1

’ 1 의 보수’는 0 을 1 로, 1 을 0 으로만 바꾸면 되므로 구하기 쉽다. 예를 들어, 2 진수 ’ 0101 ‘의’ 1 의 보수’는 ’ 1010 ’이다. 여기에 1 을 더하기만 하면 2 의 보수가 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-089_164_563_2014_867.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-089_124_635_2191_800.jpg -->

## 4. 기본형(primitive type)

이번 단원에서는 기본형의 보다 세부적인 내용에 대해 살펴볼 것이다. 다소 깊이 있는 내 용이므로 어렵다고 느낄 수도 있는데, 앞서 배운 기본형에 대한 대략적인 내용만으로도 별 부족함 없이 진도를 나갈 수 있으니까 다 이해하지 못해도 관찮다. 그래도 언젠가는 반 드시 알아야하는 내용이므로 가볍게라도 봐둘 필요는 있다.

## 4.1 논리형 - boolean

논리형에는 ‘boolean’ 한가지 밖에 없다. boolean형 변수에는 true와 false 중 하나를 저 장할 수 있으며 기본값(default)은 false이다.<br>boolean형 변수는 대답(yes/no), 스위치(on/off) 등의 논리구현에 주로 사용된다. 그리 고 boolean형은 true와 false, 두 가지의 값만을 표현하면 되므로 1 bit만으로도 충분하지 만, 자바에서는 데이터를 다루는 최소단위가 byte이기 때문에, boolean의 크기가 1 byte 이다. 아래 문장은 power라는 boolean형 변수를 선언하고 true로 변수를 초기화 했다.

```txt
boolean power = true;
boolean checked = False; // 에러. 대소무ᄂ자가 구부ᄂ되ᄆ. true 또느ᄂ false마ᄂ 가느ᄋ
```

자바에서는 대소문자가 구별되기 때문에 TRUE와 true는 다른 것으로 간주된다는 것에 주의하자.

## 4.2 문자형 - char

문자형 역시 ‘char’ 한 가지 자료형밖에 없다. 문자를 저장하기 위한 변수를 선언할 때 사 용되며, char타입의 변수는 단 하나의 문자만을 저장할 수 있다. 아래의 문장은 char타입 의 변수 ch를 선언하고, 문자 ’A’로 초기화한다.

```txt
char ch = 'A'; // 무ᄂ자 'A'르ᄅ char타이ᄇ의 벼ᄂ수 ch에 저자ᄋ.
```

위의 문장은 변수에 ’문자’가 저장되는 것 같지만, 사실은 문자가 아닌 ’문자의 유니코드 (정수)’가 저장된다. 컴퓨터는 숫자밖에 모르기 때문에 모든 데이터를 숫자로 변환하여 저 장하는 것이다. 문자’A’의 유니코드는 65이므로, 변수 ch에는 65가 저장된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-090_237_231_2040_722.jpg -->

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그래서 문자 리터럴 대신 문자의 유니코드를 직접 저장할 수도 있다. 문자 ’A’의 유니코드 는 10 진수로 65 이며, 아래의 두 문장은 동일한 결과를 얻는다.

```txt
char ch = 'A'; // OK. 무ᄂ자 'A'르ᄅ char타이ᄇ의 벼ᄂ수 ch에 저자ᄋ.
char ch = 65; // OK. 무ᄂ자의 코드르ᄅ 지ᄀ저ᄇ 벼ᄂ수 ch에 저자ᄋ
```

만일 어떤 문자의 유니코드를 알고 싶으면, char형 변수에 저장된 값을 정수형(int)으로 변환하면 된다.

```txt
int code = (int)ch; // ch에 저자ᄋ되ᄂ 가ᄡ으ᄅ int타이ᄇ으로 벼ᄂ화ᄂ하여 저자ᄋ하ᄂ다.
```

어떤 타입(type, 형)을 다른 타입으로 변환하는 것을 형변환(캐스팅, casting)이라고 하는 데, 형변환에 대해서는 이 장의 마지막에 자세히 설명할 것이다. 지금은 문자의 유니코드 를 알아내는 방법과, 어떤 유니코드가 어떤 문자를 나타내는가를 알아내는 방법이 있다는 것만 이해하고 넘어가자.

- 예제 2-7/CharToCode.java

```txt
class CharToCode {
    public static void main(String[] args) {
        char ch = 'A'; // char ch = 65;
        int code = (int)ch; // ch에 저자ᄋ되ᄂ 가ᄡ으ᄅ int타이ᄇ으로 벼ᄂ화ᄂ하여 저자ᄋ하ᄂ다.
        System.out.printf ("%c=%d (%#X) %n", ch, code, code) ;
        char hch = '가'; // char hch = 0xAC00;
        System.out.printf("%c=%d(%#X)%n", hch, (int)hch, (int) hch);
    }
}
```

- 실행결과

```txt
    A=65(0X41)
    가=44032(0XAC00)
```

실행결과를 보면, 문자 ’A’의 유니코드는 65(16진수로 0x41)이고, 문자 ’가’의 유니코드는 44032(16진수로 0xAC00)이라는 것을 알 수 있다. 유니코드를 알면 아래와 같이 char형 변수에 문자를 저장할 때, 문자 리터럴 대신에 유니코드를 직접 사용할 수도 있다.

```txt
char hch = 0xAC00; // char hch = '가';
char hch = '\uACOO'; // 이러ᄒ게도 가느ᄋ
```

## 특수 문자 다루기

영문자 이외에 tab이나 backspace 등의 특수문자를 저장하려면, 아래와 같이 조금 특별 한 방법을 사용한다.

```txt
char tab = '\t'; // 벼ᄂ수 tab에 태ᄇ 무ᄂ자르ᄅ 저자ᄋ
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>’ $\backslash \mathrm{t}$ ’는 실제로는 두 문자로 이루어져 있지만 하나의 문자(탭, tab)를 의미한다. 아래의 표는 탭(tab)과 같이 특수한 문자를 어떻게 표현할 수 있는지 알려준다.

| 특수 문자 | 문자 리터럴 |
| --- | --- |
| tab | $\backslash t$ |
| backspace |  |
| form feed |  |
| new line | $\backslash n$ |
| carriage return |  |
| 역슬래쉬(W) | $\backslash \backslash$ |
| 작은따옴표 | ' |
| 큰따옴표 | " |
| 유니코드(16진수)문자 | (예: char a=‘041’) |

A 표2-13 특수 문자를 표현하는 방법

- 예제 2-8/SpecialCharEx.java

```txt
class SpecialCharEx {
    public static void main(String[] args) {
        System.out.println('\''); // '''처러ᄆ 하ᄅ 수 어ᄡ다.
        System.out.println("abc\t123\b456"); // \b에 의해 3ᄋ=ᅵ 지워지ᄂ다.
        System.out.println('\n'); // 개해ᄋ(new line) 무ᄂ자 추ᄅ려ᄀ하고 개해ᄋ
        System.out.println("\"Hello\""); // 크ᄂ따오ᄆ표르ᄅ 추ᄅ려ᄀ하려며ᄂ 이러ᄒ게 하ᄂ다.
        System.out.println("c:\\");
    }
}
```

- 실행결과

```txt
'
abc 12456
"Hello"
c:\
```

I 참고 I 한글 윈도우에서는 역슬래쉬(back slash)가 ’'대신 ’W’로 표시된다.

## char의 저장형식

char타입의 크기는 2 byte(=16 bit)이므로, 16자리의 2진수로 표현할 수 있는 정수의 개수인 65536개( $=2^{16}$ )의 코드를 사용할 수 있으며, char형 변수는 이 범위 내의 코드 중 하나를 저장할 수 있다. 예를 들어, 문자 ‘A’를 저장하면, 아래와 같이 2진수 ’000000000 1000001’(10진수로 65)로 저장된다.

| 16 bit |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |

- 그림2-7 char의 저장형식(문자 ‘A’)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>char타입은 문자를 저장할 변수를 선언하기 위한 것이지만, 실제로 char타입의 변수에 문자가 아닌 ’문자의 유니코드(정수)’가 저장되고 저장형식 역시 정수형과 동일하다. 다만, 정수형과 달리 음수가 필요없으므로 저장할 수 있는 값의 범위가 다르다.

2 byte(=16 bit)로는 모두 $2^{16}(=65536)$ 개의 값을 표현할 수 있는데, char타입에 저장 되는 값인 유니코드는 모두 양수(0 포함)이므로, ‘0~65535’의 범위를 가지며, 정수형인 ’short’은 절반을 음수에 사용하므로’-32768~32767’을 범위로 갖는다.

```txt
16비트로 표현할 수 있는 정수의 개수 : \(2^{16}\) 개 (65536개)
    short타입의 범위 : \(-2^{15} \sim 2^{15}-1(-32768 \sim 32767)\)
    char타입의 범위 : \(0 \sim 2^{16}-1(0 \sim 65535)\)
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-093_239_910_838_554.jpg -->

다음과 같이 변수 ch와 s에 ’A’와 65를 저장하면, 둘 다 2진수로 똑같은 값이 저장된다. 컴 퓨터는 모든 값을 0과 1로 바꾸어 저장하기 때문이다.

```txt
char ch = 'A'; // char ch = 65;
short s = 65;
```

| 자료형 | 2진수 | 10진수 |
| --- | --- | --- |
| char | 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 | 65 |
| short | 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 1 | 65 |

- 표2-14 char타입과 short타입의 값 비교

그런데도 두 변수의 값을 출력해보면 결과가 다르다. println( )은 변수의 타입이 정수형 이면 변수에 저장된 값을 10진수로 해석하여 출력하고, 문자형이면 저장된 숫자에 해당하 는 유니코드 문자를 출력하기 때문이다.

```txt
System.out.println(ch); // Aᅡ 추ᄅ려ᄀ되ᄂ다.
System.out.println(s); // 65가 추ᄅ려ᄀ되ᄂ다.
```

이처럼 값은 어떻게 해석하느냐에 따라 결과가 달라지므로 값만으로는 값을 해석할 수 없 다. 값의 타입까지 알아야 올바르게 해석할 수 있는 것이다. 예를 들어 ’1231’이라는 값이 있을 때, 이 값의 타입을 모르면, 이 값을 ’천이백삼십일’로 해석해야할지, 아니면 12월 31 일이나 12시 31분으로 해석해야 할지 알 수 없다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 인코딩과 디코딩(encoding & decoding)

컴퓨터가 숫자밖에 모르기 때문에 문자가 숫자로 변환되어 저장된다는 것은 알겠는데, 그 러면 도대체 어떤 기준에 의한 것일까? 바로 아래의 오른쪽에 있는 표에 의한 것인데, 이 코드표는 ’유니코드(unicode)’이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-094_253_821_491_433.jpg -->

- 그림2-8 유니코드(unicode)를 이용한 인코딩과 디코딩

위의 그림에서 오른쪽 표를 보면, 문자 ‘A’의 유니코드가 65인 것을 알 수 있다. 그래서 문 자 ’A’를 유니코드로 인코딩하면 65가 되는 것이다. 반대로 65를 유니코드로 디코딩 하면 문자 ’A’가 된다. 이처럼 문자를 코드로 변환하는 것을 ’문자 인코딩(encoding)’, 그 반대 로 코드를 문자로 변환하는 것을 ’문자 디코딩(decoding)’이라고 하며, 문자를 저장할 때 는 인코딩을 해서 숫자로 변환해서 저장하고, 저장된 문자를 읽어올 때는 디코딩을 해서 숫자를 원래의 문자로 되돌려야 한다.

I 참고 I ‘encode’는’~을 코드화하다.’ 또는 ’~을 암호화하다.’라는 뜻이다.<br>당연한 애기지만 어떻게 인코딩을 했는지를 알아야 디코딩이 가능하다. 만일 인코딩에 사 용된 코드표와 디코딩에 사용된 코드표가 다르면 엉뚱한 글자들로 바뀌어 나타날 것이다. 웹서핑을 하다가 페이지 전체가 알아볼 수 없는 이상한 글자들로 가득 찬 경험이 적어도 한두 번쯤은 있을 텐데, 그 이유는 해당 html문서의 인코딩에 사용된 코드표와 웹브라우 져의 설정이 맞지 않아서이다.<br>대부분의 경우 웹페이지(html파일)에 인코딩 정보가 포함되어 있어서 웹브라우져가 올바 르게 디코딩하지만, 웹브라우져의 인코딩 설정이 웹페이지의 인코딩과 다른 경우 글자가 알아볼 수 없게 깨져서 나타난다. 아래의 그림은 웹브라우져의 인코딩을 ’중국어 번체’로 지정하여, 한글로 작성된 웹페이지가 알아볼 수 없는 문자들로 표시된 것이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-094_588_1074_1721_294.jpg -->

- 그림2-9 중국어 인코딩으로 읽어서 깨진 한글 웹페이지

## 아스키(ASCII)

‘ASCII’는 ’American Standard Code for Information Interchange’의 약어로 정보교 환을 위한 미국 표준 코드란 뜻이다. 아스키는 128개(=2 ${ }^{7}$ )의 문자 집합(character set)을 제공하는 7 bit부호로, 처음 32개의 문자는 인쇄와 전송 제어용으로 사용되는 ’제어문자 (control character)’로 출력할 수 없고 마지막 문자(DEL)를 제외한 33번째 이후의 문자 들은 출력할 수 있는 문자들로, 기호와 숫자, 영대소문자로 이루어져 있다.<br>아스키는 숫자 ’0~9’, 영문자 ’A~Z’와 ’a~z’가 연속적으로 배치되어 있다는 특징이 있으 며, 이러한 특징은 프로그래밍에서 유용하게 활용된다.

## 확장 아스키(Extended ASCII)와 한글

일반적으로 데이터는 byte단위로 다뤄지는데 아스키는 7 bit이므로 1 bit가 남는다. 이 남 는 공간을 활용해서 문자를 추가로 정의한 것이 ’확장 아스키’이다. 확장 아스키에 추가된 128개의 문자는 여러 국가와 기업에서 서로의 필요에 따라 다르게 정의해서 사용한다.<br>’ISO(국제표준화기구)’에서 확장 아스키의 표준을 몇 가지 발표했는데, 그 중에서 대표적 인 것이 ’ISO 8859-1’이다. 이 확장 아스키 버젼은 ’ISO Latin 1’이라고도 하는데 서유럽 에서 일반적으로 사용하는 문자들을 포함하고 있다.

확장 아스키로도 표현할 수 있는 문자의 개수가 255개뿐이므로 한글을 표현하기에는 턱 없이 부족하다. 그래서 생각해낸 것이 두 개의 문자코드로 한글을 표현하는 방법이었다.<br>한글을 표현하는 방법은 조합형과 완성형이 있는데, 조합형은 초성, 중성, 종성을 조합 하는 방식이고, 완성형은 확장 아스키의 일부 영역(162~254)에 해당하는 두 문자코드 를 조합하여 한글을 표현한다. 현재 조합형은 사용되지 않고 ’완성형(KSC 5601)에 없는 잘 안 쓰이는 8822글자를 추가한 ’확장 완성형(CP 949)’이 사용되는데, 이것이 바로 한글 윈도우에서 사용하는 문자 인코딩이다. 한글 윈도우에서 작성된 문서는 기본적으로 ’CP 949(확장 완성형)’로 인코딩되어 저장된다.

## 코드 페이지(code page, cp)

IBM이 자사의 PC에 ’확장 아스키’를 도입해서 사용하기 시작할 때, PC를 사용하는 지 역이나 국가에 따라 여러 버젼의 ’확장 아스키’가 필요했다. IBM은 이들을 ’코드 페이지 (code page)’라 하고, 각 코드 페이지에 ’CP xxx’와 같은 형식으로 이름을 붙였다. IBM은 MS와 같은 업체들과 협력하여 ’코드 페이지’를 만들어내고 공유했다. 한글 윈도우는 ’CP 949’를, 영문 윈도우는 ’CP 437’을 사용한다.

I 참고 I 코드 페이지는 확장 아스키의 256개 문자를 어떤 숫자로 변환할 것인지를 적어놓은 ’문자 코드표(code page)’이다.

## 유니코드(Unicode)

예전엔 같은 지역 내에서만 문서교환이 주를 이뤘지만, 인터넷이 발명되면서 서로 다른 지역의 다른 언어를 사용하는 컴퓨터간의 문서교환이 활발해지기 시작하자 서로 다른 문 자 인코딩을 사용하는 컴퓨터간의 문서 교환에 어려움을 겪게 되었다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이러한 어려움을 해소하고자 전 세계의 모든 문자를 하나의 통일된 문자 집합으로 표현하 고자 노력하였고 그 결과가 바로 ’유니코드’이다.

유니코드는 처음에 모든 문자를 2 byte $\left(=2^{16}=65536\right)$ 로 표현하려했으나, 2 byte $(=16$ bit)로도 부족해서 20 bit(약 100만 문자)로 확장되었다. 새로 추가된 문자들을 보충 문자 (supplementary character)라고 하는데 이 문자들을 표현하기 위해서는 char타입이 아 닌 int타입을 사용해야 한다. 우리가 보충문자를 쓸 일은 거의 없기 때문에 참고로만 알아 두면 된다.<br>유니코드는 먼저 유니코드에 포함시키고자 하는 문자들의 집합을 정의하였는데, 이것을 유니코드 문자 셋(또는 캐릭터 셋, character set)이라고 한다. 그리고 이 문자 셋에 번호 를 붙인 것이 유니코드 인코딩이다. 유니코드 인코딩에는 UTF-8, UTF-16, UTF-32 등 여러 가지 종류가 있는데 자바에서는 UTF-16을 사용해오다가 JDK 18부터 UTF-8 로 바뀌었다. UTF-16은 모든 문자를 2 byte의 고정크기로 표현하고 UTF-8은 하나의 문자를 1~4 byte의 가변크기로 표현한다. 그리고 두 인코딩 모두 처음 128문자가 아스키 와 동일하다. 아스키를 그대로 포함하고 있는 것이다.

I 참고 I 코드 포인트(code point)는 유니코드 문자 셋에 순서대로 붙인 일련번호이다. 유니코드에는 뭐라고 읽는지도 알 수 없는 문자들이 많이 포함되어 있으므로, 이 문자들은 번호(코드 포인트)를 붙여서 다루는 것이 편리하기 때문이다.

| code point | 유니코드 문자 셋 | ASCII | UTF-8 | UTF-16 |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |
| U+0061 | a | 0×61 | 0×61 | 0×0061 |
| U+0062 | b | 0×62 | 0×62 | 0×0062 |
| … | … | … | … | … |
| U+AC00 | 가 | - | 0xEAB080 | 0xAC00 |
| U+AC01 | 각 | - | 0xEAB081 | 0xAC01 |
| … | … | - | … |  |

- 표2-15 유니코드 인코딩 UTF-8과 UTF-16의 비교

모든 문자의 크기가 동일한 UTF-16이 문자를 다루기는 편리하지만, 1 byte로 표현할 수 있는 영어와 숫자가 2 byte로 표현되므로 문서의 크기가 커진다는 단점이 있다. UTF-8 에서 영문과 숫자는 1 byte 그리고 한글은 3 byte로 표현되기 때문에 문서의 크기가 작지 만 문자의 크기가 가변적이므로 다루기 어렵다는 단점이 있다. 인터넷에서는 전송 속도가 중요하므로, 문서의 크기가 작을수록 유리하다. 그래서 UTF-8인코딩으로 작성된 웹문서 의 수가 빠르게 늘고 있다.<br>예전에는 한글이 2 byte인코딩을 주로 사용 해오다가 한글이 3 byte인 UTF-8인코딩을 사용하게 되면서 텍스트 파일의 크기가 커져서 불리해졌다.

## 4.3 정수형 - byte, short, int, long

정수형에는 모두 4개의 자료형이 있으며, 각 자료형이 저장할 수 있는 값의 범위가 서로 다르다. 크기순으로 나열하면 다음과 같다. 단위는 byte이다.

| byte | \< | short | \< | int | \< | long |
| --- | --- | --- | --- | --- | --- | --- |
| 1 |  | 2 |  | 4 |  | 8 |

byte부터 long까지 1 byte부터 시작해서 2배씩 크기가 증가한다는 것을 알 수 있다. 이 중에서도 기본 자료형(default data type)은 int이다.

## 정수형의 저장형식과 범위

어떤 진법의 리터럴을 변수에 저장해도 실제로는 2진수로 바뀌어 저장된다. 이 2진수가 저 장되는 형식은 크게 정수형과 실수형이 있으며, 정수형은 다음과 같은 형식으로 저장된다.

| S | n-1 bit |
|---|---|

S : 부호 비트(양수는 0, 음수는 1)<br>n: 타입의 크기(단위:bit)<br>A 그림2-10 정수형의 저장형식<br>모든 정수형은 부호있는 정수이므로 왼쪽의 첫 번째 비트를 ‘부호 비트(sign bit)’로 사용 하고, 나머지는 값을 표현하는데 사용한다. 그래서 n비트로 표현할 수 있는 값의 개수인 $2^{\mathrm{n}}$ 개에서, 절반인’ 0 ’으로 시작하는 $2^{\mathrm{n}-1}$ 개의 값을 양수( 0 도 포함)의 표현에 사용하고, 나 머지 절반인 ’1’로 시작하는 $2^{\mathrm{n}-1}$ 개의 값은 음수의 표현에 사용한다.

| 정수형의 저장형식( n bit) |  | 종류 | 값의 개수 |
| --- | --- | --- | --- |
| 0 | n-1 bit | 0,양수 | $2^{n-1}$ 개 |
| 1 | n-1 bit | 음수 | $2^{n-1}$ 개 |

그래서 정수형은 타입의 크기만 알면, 최대값과 최소값을 쉽게 계산해낼 수 있다.<br>> n 비트로 표현할 수 있는 정수의 개수 :

$2^{\mathrm{n}}$

개(

$=2^{\mathrm{n}-1}$

개

$+2^{\mathrm{n}-1}$

개)<br>> n 비트로 표현할 수 있는 부호있는 정수의 범위 :

- 2\^\{\\mathrm\{n\}-1\} \\sim 2\^\{\\mathrm\{n\}-1\}-1

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-097_205_906_1959_556.jpg -->

위의 범위의 최대값에서 1을 빼는 이유는 범위에 0이 포함되기 때문이다. 예를 들어 byte 의 경우 크기가 1 byte(=8 bit)이므로, byte타입의 변수에 저장할 수 있는 값의 범위는 ’

- 128 \\sim 127\^\{\\prime\}

이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| byte의 저장형식(8 비트) | 종류 | 값의 개수 |
| --- | --- | --- |
| 0 0 0 0 0 0 0 0\$\$0 1 1 1 1 1 1 1 | 0,양수 | $2^{7}(0,1 \sim 127)$ |
| 1 0 0 0 0 0 0 0\$\$1 1 1 1 1 1 1 1 | 음수 | $2^{7}(-128 \sim-1)$ |

8 비트로 표현할 수 있는 정수의 개수 :

$2^{8}$

개 (

$=2^{7}$

개

$+2^{7}$

개)<br>8비트로 표현할 수 있는 부호있는 정수의 범위 :

- 2\^\{7\} \\sim 2\^\{7\}-1(-128 \\sim 127)

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-098_216_908_655_377.jpg -->

이처럼 타입의 크기만 알면, 모든 정수형의 표현 범위를 쉽게 계산해낼 수 있다.

| 타입 | 저장 가능한 값의 범위 | 크 기 |  |
| --- | --- | --- | --- |
|  |  | bit | byte |
| byte | $-128 \sim 127\left(-2^{7} \sim 2^{7}-1\right)$ | 8 | 1 |
| short | $-32,768 \sim 32,767\left(-2^{15} \sim 2^{15}-1\right)$ | 16 | 2 |
| int | $-2,147,483,648 \sim 2,147,483,647\left(-2^{31} \sim 2^{31}-1\right.$, 약 $\pm 20$ 억 $)$ | 32 | 4 |
| long | $-9,223,372,036,854,775,808 \sim 9,223,372,036,854,775,807\left(-2^{63} \sim 2^{63}-1\right)$ | 64 | 8 |

A 표2-16 정수형의 표현범위

## 정수형의 선택기준

변수에 저장하려는 정수값의 범위에 따라 4개의 정수형 중에서 하나를 선택하면 되겠지 만, byte나 short보다 int를 사용하도록 하자. byte와 short이 int보다 크기가 작아서 메 모리를 조금 더 절약할 수는 있지만, 저장할 수 있는 값의 범위가 작은 편이라서 연산 시 에 범위를 넘어서 잘못된 결과를 얻기가 쉽다.<br>그리고 JVM의 피연산자 스택(operand stack)이 피연산자를 4 byte단위로 저장하기 때 문에 크기가 4 byte보다 작은 자료형(byte, short)의 값을 계산할 때는 4 byte로 변환하 여 연산이 수행된다. 그래서 오히려 int를 사용하는 것이 더 효율적이다.<br>int타입의 크기는 4 byte(=32 bit)이므로, 표현할 수 있는 정수의 개수는 ’ $2^{32} \fallingdotseq 4 \times 10^{9}$, 약 40억’이며, 표현가능한 정수의 범위는 ’ $-2^{31} \sim 2^{31}-1$ se ± 20억’이다.

$$
2^{10}=1024 \fallingdotseq 10^{3} \text { 이므로, } 2^{32}=2^{10} \times 2^{10} \times 2^{10} \times 2^{2}=1024 \times 1024 \times 1024 \times 4 \fallingdotseq 4 \times 10^{9}
$$

결론적으로 정수형 변수를 선언할 때는 int타입으로 하고, int의 범위(약 ±20억)를 넘어 서는 수를 다뤄야할 때는 long을 사용하면 된다. 그리고 byte나 short은 성능보다 저장공 간을 절약하는 것이 더 중요할 때 사용하자.

[3](about:blank#fn3)<br>## 정수형의 오버플로우

만일 4 bit 2진수의 최대값인 ’1111’에 1을 더하면 어떤 결과를 얻을까? 4 bit의 범위를 넘 어서는 값이 되기 때문에 에러가 발생할까?

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-099_236_356_492_784.jpg -->

원래 2진수 ’1111’에 1을 더하면 ’10000’이 되지만, 4 bit로는 4자리의 2진수만 저장할 수 있기 때문에 ’0000’이 된다. 즉, 5자리의 2진수 ’10000’중에서 하위 4 bit만 저장하게 되는 것이다. 이처럼 연산과정에서 해당 타입이 표현할 수 있는 값의 범위를 넘어서는 것을 오 버플로우(overflow)라고 한다. 오버플로우가 발생했다고 해서 에러가 발생하는 것은 아니 다. 다만 예상했던 결과를 얻지 못할 뿐이다. 애초부터 오버플로우가 발생하지 않게 충분 한 크기의 타입을 선택해서 사용해야 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-099_302_1045_1144_487.jpg -->

- 그림2-11 4자리의 10진수와 2진수의 오버플로우

오버플로우는 ‘자동차 주행표시기(odometer)’나, ’계수기(counter)’ 등 우리의 일상생활에 서도 발견할 수 있는데, 네 자리 계수기라면 ‘0000’부터 ’9999’까지 밖에 표현하지 못하므 로 최대값인 ’9999’ 다음의 숫자는 ‘0000’이 될 것이다. 원래는 10000이 되어야하는데 다 섯 자리는 표현할 수 없어서 맨 앞의 1은 버려지기 때문이다.<br>그러면 이번엔 반대로 최소값인 ’0000’에서 1을 감소시키면 어떤 결과를 얻을까? 0에서 1을 뺄 수 없으므로 ’0000’ 앞에 저장되지 않은 1이 있다고 가정하고 뺄셈을 한다. 결과는 아래와 같이 네 자리로 표현할 수 있는 최대값이 된다.

| 10진수 |  | 2진수 |
| --- | --- | --- |
| 10 0 0 0 | ← 저장되지 않은1 이 있다고 가정 → | 10 0 0 0 |
| -)  1 |  | -)  1 |
| 9 9 9 9 |  | 1 1 1 1 |

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이는 마치 계수기를 거꾸로 돌리는 것과 같다. ’0000’에서 정방향으로 돌리면 ’0001’이 되 지만 역방향으로 돌리면 ’9999’가 되는 것이다.<br>I 참고 I TV의 채널을 증가시키다가 마지막 채널에서 채널을 더 증가시키면 첫 번째 채널로 이동하고, 첫번째 채널에서 채널 을 감소시키면 마지막 채널로 이동하는 것과 같다.

그래서 정수형 타입이 표현할 수 있는 최대값에 1을 더하면 최소값이 되고, 최소값에서 1 을 빼면 최대값이 된다.

최대값 +1 → 최소값<br>최소값 - 1 → 최대값

아래 그림과 같이 최소값과 최대값을 이어 놓았다고 생각하면 오버플로우의 결과를 더 이 해하기 쉽다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-100_331_1022_994_305.jpg -->

위의 그림을 2진수로 바꾸면 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-100_334_1022_1503_304.jpg -->

4 bit 2진수의 최소값인 ’0000’부터 시작해서 1씩 계속 증가하다 최대값인 ’1111’을 넘으면 다시 ’0000’이 된다. 그래서 값을 무한히 1씩 증가시켜도 ’0000’과 ’1111’의 범위를 계속 반 복하게 된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 부호있는 정수의 오버플로우

부호없는 정수와 부호있는 정수는 표현범위 즉, 최대값과 최소값이 다르기 때문에 오버플 로우가 발생하는 시점이 다르다. 부호없는 정수는 2진수로 ’0000’이 될 때 오버플로우가 발생하고, 부호있는 정수는 부호비트가 0에서 1이 될 때 오버플로우가 발생한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-101_809_1007_541_504.jpg -->

A 표2-17 부호없는 정수와 부호있는 정수의 오버플로우부호없는 정수의 경우 표현범위가 ‘0~15’이므로 이 값이 계속 반복되고, 부호있는 정수의 경우 표현범위가’-8~7’이므로 이 값이 무한히 반복된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-101_773_1060_1582_486.jpg -->

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
- 예제 2-9/OverflowEx.java
class OverflowEx {
    public static void main(String[] args) {
        short sMin = -32768;
        short sMax = 32767;
        char cMin = 0;
        char cMax = 65535;
        System.out.println("sMin = " + sMin);
        System.out.println("sMin-1= " + (short)(sMin-1));
        System.out.println("sMax = " + sMax);
        System.out.println("sMax+1= " + (short)(sMax+1));
        System.out.println("cMin = " + (int)cMin);
        System.out.println("cMin-1= " + (int)--cMin);
        System.out.println("cMax = " + (int)cMax);
        System.out.println("cMax+1= " + (int)++cMax);
    }
}
```

## 실행결과

```txt
sMin = -32768
sMin-1= 32767
sMax = 32767
sMax+1= -32768
cMin = 0
cMin-1= 65535
cMax = 65535
cMax+1= 0
```

short타입과 char타입의 최대값과 최소값에 1을 더하거나 뺀 결과를 출력하였다. 실행결과를 좀더 이해하기 쉽게 정리하면 다음과 같다.

$$
\begin{aligned}
& \text { sMin - } 1 \text { → sMax // 최소값 - } 1 \text { → 최대값 } \\
& \text {-32768 } 32767 \\
& \text { sMax + } 1 \text { → sMin // 최대값 + } 1 \text { → 최소값 } \\
& 32767 \text { - } 32768 \\
& \text { cMin - } 1 \text { → cMax // 최소값 - } 1 \text { → 최대값 } \\
& 065535 \\
& \text { cMax + } 1 \text { → cMin // 최대값 + } 1 \text { → 최소값 } \\
& 655350
\end{aligned}
$$

최소값에서 1을 빼면 최대값이 되고, 최대값에 1을 더하면 최소값이 된다는 것을 확인할수 있다. 아직 이해가 안 된다면, 아래의 표가 도움이 될 것이다.

| 개수 | 부호 | char | 2진수(16bit) | short | 부호 |
| --- | --- | --- | --- | --- | --- |
| 65536개 ( $2^{16}$ 개) | 0 (1개) | 최소값 → 0 | 0000000000000000 | 0 | 0 (1개) |
|  | 양수 ( $2^{16}-1$ 개, 65535개) | 1 | 0000000000000001 | 1 | 양수 ( $2^{15}-1$ 개, 32767개) |
|  |  | 2 | 0000000000000010 | 2 |  |
|  |  | 3 | 0000000000000011 | 3 |  |
|  |  | … | … | … |  |
|  |  | 32765 | 0111111111111101 | 32765 |  |
|  |  | 32766 | 0111111111111110 | 32766 |  |
|  |  | 32767 | 0111111111111111 | 32767 ← 최대값 |  |
|  |  | 32768 | 1000000000000000 | -32768 ← 최소값 | 음수 ( $2^{15}$ 개, 32768개) |
|  |  | 32769 | 1000000000000001 | -32767 |  |
|  |  | 32770 | 1000000000000010 | -32766 |  |
|  |  | … | … | … |  |
|  |  | 65532 | 1111111111111100 | -4 |  |
|  |  | 65533 | 1111111111111101 | -3 |  |
|  |  | 65534 | 1111111111111110 | -2 |  |
|  |  | 최대값 → 65535 | 1111111111111111 | -1 |  |

춎s-18 char와 short의 비교

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>’short’과 ’char’의 크기는 모두 16 bit이므로 표현할 수 있는 값의 개수 역시 $2^{16}$ 개(65536 개)로 같다. 그러나 ’short’은 이 중에서 절반(2 ${ }^{15}$ 개=32768개)을 ’음수’를 표현하는데 사용 하고, ’char’는 전체( $2^{16}$ 개=65535+1개)를 ’양수(65535개)와 0(1개)’을 표현하는데 사용한 다.

```txt
16비트로 표현할 수 있는 정수의 개수 : \(2^{16}\) 개 (65536개)
    short타입의 표현범위 : \(-2^{15} \sim 2^{15}-1(-32768 \sim 32767)\)
    char타입의 표현범위 : 0 ~ \(2^{16}-1\) (0~65535)
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-103_239_910_704_546.jpg -->

## 4.4 실수형 - float, double

실수형의 범위와 정밀도<br>실수형은 실수를 저장하기 위한 타입으로 float와 double, 두 가지가 있으며 각 타입의 변 수에 저장할 수 있는 값의 범위는 아래와 같다.

| 타입 | 저장 가능한 값의 범위(양수) | 정밀도 | 크기 |  |
| --- | --- | --- | --- | --- |
|  |  |  | bit | byte |
| float | $1.4 \times 10^{-45} \sim 3.4 \times 10^{38}$ | 7자리 | 32 | 4 |
| double | $4.9 \times 10^{-324} \sim 1.8 \times 10^{308}$ | 15자리 | 64 | 8 |

A 표2-19 실수형의 범위와 정밀도

표2-18의 범위는 ‘양의 범위’만 적은 것으로, 이 범위에’-‘부호를 붙이면 ’음의 범위’가된다. 예를 들어 float타입으로 표현가능한 음의 범위는’ $-1.4 \times 10^{-45} \sim-3.4 \times 10^{38}$ ’이 다. float타입으로 표현가능한 양의 범위와 음의 범위를 함께 그림으로 그리면 다음과 같 다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-103_215_1052_1880_483.jpg -->

- 그림2-12 float타입으로 표현할 수 있는 값의 범위

즉, float타입의 표현범위는 ’ $-3.4 \times 10^{38} \sim 3.4 \times 10^{38}$ ‘이지만,’ $-1.4 \times 10^{-45} \sim 1.4 \times 10^{-45}$, 범위(0은 제외)의 값은 표현할 수 없다. 실수형은 소수점수도 표현해야 하므로 ’얼마나 큰 값을 표현할 수 있는가’뿐만 아니라 ’얼마나 0에 가깝게 표현할 수 있는가’도 중요하다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Q. 실수형도 정수형처럼 저장할 수 있는 범위를 넘게 되면 오버플로우가 발생하나요?<br>A. 앞서 정수형에서 변수의 값이 표현범위를 벗어나는 것을 ‘오버플로우(overflow)’라고 배 웠습니다. 실수형에서도 변수의 값이 표현범위의 최대값을 벗어나면 ’오버플로우’가 발생하 는데요. 정수형과 달리 실수형에서는 오버플로우가 발생하면 변수의 값은 ’무한대(infinity)’ 가 됩니다.

그리고 정수형에는 없는 ’언더플로우(underflow)’가 있는데, ’언더플로우’는 실수형으로 표 현할 수 없는 아주 작은 값, 즉 양의 최소값보다 작은 값이 되는 경우를 말합니다. 이 때 변 수의 값은 0이 됩니다.

4 byte의 정수로는 ‘약 $\pm 2 \times 10^{9}$ 의 값밖에 표현할 수 없는데, 어떻게 같은 4 byte로’ ± $3.4 \times 10^{38}$ 과 같이 큰 값을 표현할 수 있는 것일까? 그 이유는 바로 값을 저장하는 형식이 다르기 때문이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-104_218_778_1009_443.jpg -->

- 그림2-13 int타입과 float타입의 표현형식

위 그림은 int타입과 float타입의 표현형식을 비교한 것인데, int타입은 ‘부호와 값’, 두 부 분으로 이루어져있지만, float타입과 같은 실수형은 ‘부호(S), 지수(E), 가수(M)’, 세 부분 으로 이루어져 있다. 즉, ’ 2 의 제곱을 곱한 형태 $\left( \pm \mathrm{M} \times 2^{\mathrm{E}}\right)$ ‘로 저장하기 때문에 이렇게 큰 범위의 값을 저장하는 것이 가능한 것이다.<br>그러나 정수형과 달리 실수형은 오차가 발생할 수 있다는 단점이 있다. 그래서 실수형에 는 표현할 수 있는 값의 범위뿐만 아니라 ’정밀도(precision)’도 중요한 요소이다.<br>표2-18을 보면 float타입은 정밀도가 7자리인데, 이것은’ $\mathrm{a} \times 10^{\mathrm{n}}$ ’( $1 \leqq \mathrm{a}$ \<10)의 형태로 표 현된 ’7자리의 10진수를 오차없이 저장할 수 있다’는 뜻으로 아래의 세 값은 float타입의 변수에 저장했을 때 오차없이 저장할 수 있다.

$$
\begin{array}{ll}
1234.567 & =1.234567 \times 10^{3} \\
0.00001234567 & =1.234567 \times 10^{-5} \\
1234567000 & =1.234567 \times 10^{9}
\end{array}
$$

만일 7자리 이상의 정밀도가 필요하다면, 변수의 타입을 double로 해야 한다. double타입 은 float타입보다 정밀도가 약 2배인, 10진수로 15자리의 정밀도를 가지므로 float타입보 다 훨씬 더 정밀하게 값을 표현할 수 있다.<br>실수형 값을 저장할 때, float타입이 아닌 double타입의 변수를 사용하는 경우는 대부분 저장하려는 ’값의 범위’때문이 아니라 ’보다 높은 정밀도’가 필요해서이다.

I 참고 I double이라는 이름은 float보다 약 2 배(double)의 정밀도를 갖는다는 의미에서 붙여진 것이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

연산속도의 향상이나 메모리를 절약하려면 float를 선택하고, 더 큰 값의 범위라던가 더높은 정밀도를 필요로 한다면 double을 선택해야 한다.

- 예제 2-10/FloatEx1.java

```txt
class FloatEx1 {
    public static void main(String[] args) {
        float f = 9.12345678901234567890f;
        float f2 = 1.2345678901234567890f;
        double d = 9.12345678901234567890d;
        System.out.printf(" 123456789012345678901234%n");
        System.out.printf("f : %f%n", f); // 소수저ᄆ 이하 6째자리까지 추ᄅ려ᄀ.
        System.out.printf("f : %24.20f%n", f);
        System.out.printf("f2 : %24.20f%n", f2);
        System.out.printf("d : %24.20f%n", d);
    }
}
```

- 실행결과

```txt
    123456789012345678901234
f : 9.123457 ← 7자리에서 바ᄂ오ᄅ리ᄆ되어ᄊ으ᄆ
f : 9.12345695495605500000
f2 : 1.23456788063049320000
d : 9.12345678901234600000
```

실수형 값을 출력할 때는 printf메서드의 지시자 ‘%f’를 사용한다.’%f’는 기본적으로 소수점 이하 6자리까지만 출력하므로, 7번째 자리에서 반올림되어 ’9.123457’이 되었다.

```txt
    System.out.printf("f : %f\n", f); // f : 9.123457
```

앞서 배운 것처럼, ’%24.20f’는 전체 24자리 중에서 20자리는 소수점 이하의 수를 출력하라는 뜻이다.

System.out.printf(“f : %24.20f n”, f);<br>\| 1 \| 2 \| 3 \| 4 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 0 \|<br>\| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \|<br>\| \| \| 9 \| . \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 9 \| 5 \| 4 \| 9 \| 5 \| 6 \| 0 \| 5 \| 5 \| 0 \| 0 \| 0 \| 0 \| 0 \|

위의 그림을 보면 실제로 저장된 값은 ’9.123456954956055’인데 앞뒤의 빈자리가 공백과0으로 채워진 것을 알 수 있다.<br>9.12345678901234567890 원래 값

↓<br>9.12345695495605500000 저장된 값<br>float타입의 변수 f에 저장하려던 원래의 값은 ’9.12345678901234567890’이지만 저장공간의 한계로 오차가 발생하여 실제 저장된 값은 ’9.12345695495605500000’이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그러나 이 두 값이 앞의 7자리는 일치한다. 정밀도가 7자리이므로 원래의 값에서 7자리의 값만 오차없이 저장된 것이다.

```txt
System.out.printf("f2 : %24.20f\n", f2); // f2 : 1.23456788063049320000
```

위와 같이 간혹 원래의 값과 8자리이상 일치하는 경우도 있지만 항상 그런 것은 아니기 때 문에 이런 결과를 기대해서는 안 된다.

## 실수형의 저장형식

앞서 언급한 바와 같이 실수형은 정수형과 저장형식이 달라서, 실수형은 값을 부동 소수 점(floating-point)의 형태로 저장한다. 부동 소수점은 실수를 ’ $\pm \mathrm{M} \times 2^{\mathrm{E}}$ ’와 같은 형태로 표현하는 것을 말하며, 부동 소수점은 부호(Sign), 지수(Exponent), 가수(Mantissa), 모 두 세 부분으로 이루어져 있다.

## $\pm \mathrm{M} \times 2^{\mathrm{E}}$

그래서 부동소수점수는 다음과 같이 세 부분으로 나누어 저장된다.

```txt
float : 1 + 8 + 23 = 32 (4 byte)
```

| S (1) | E (8) | M (23) |
|---|---|---|

```txt
double : 1 + 11 + 52 = 64 (8 byte)
```

| S (1) | E (11) | M (52) |
|---|---|---|

- 그림2-14 float와 double의 표현형식<br>위와 같은 표현형식은 IEEE754라는 표준을 따른 것인데, IEEE754는 ’전기 전자 기술자 협회(IEEE, Institute of Electrical and Electronics Engineers)’에서 제정한 부동 소수 점의 표현방법이다.

| 기호 | 의미 | 설명 |
| --- | --- | --- |
| S | 부호(Sign bit) | 0이면 양수, 1이면 음수 |
| E | 지수(Exponent) | 부호있는 정수. 지수의 범위는 -127 ~ 128(float), -1023 ~ 1024 (double) |
| M | 가수(Mantissa) | 실제값을 저장하는 부분. 10진수로 7자리(float), 15자리(double)의 정밀도로 저장 가능 |

A 표2-20 실수 표현형식의 구성요소

1. 부호 (Sign bit)<br>’S는 부호비트(sign bit)를 의미하며 1 bit이다. 이 값이 0이면 양수를, 1이면 음수를 의미 한다. 정수형과 달리 ’2의 보수법’을 사용하지 않기 때문에 양의 실수를 음의 실수로 바꾸 려면 그저 부호비트만 0에서 1로 변경하면 된다.

## 2. 지수(Exponent)

‘E’는 지수를 저장하는 부분으로 float의 경우, 8 bit의 저장공간을 갖는다. 지수는 ’부호있 는 정수’이고 8 bit로는 모두 $2^{8}(=256)$ 개의 값을 저장할 수 있으므로,’-127~128’의 값이 저장된다. 이 중에서 -127과 128은 ‘숫자 아님(NaN, Not a Number)’이나 ’양의 무한대 (POSITIVE\_INFINITY)’, ‘음의 무한대(NEGATIVE\_INFINITY)’와 같이 특별한 값의 표 현을 위해 예약되어 있으므로 실제로 사용가능한 지수의 범위는’-126~127’이다. 그래서 지수의 최대값이 127이므로 float타입으로 표현할 수 있는 최대값은 $2^{127}$ 이고, 10진수로 약 $10^{38}$ 이다. 그러나 float의 최소값은 가수의 마지막 자리가 $2^{-23}$ 이므로 지수의 최소값보 다 $2^{-23}$ 배나 더 작은 값, 약 $10^{-45}$ 이다.

$$
0.0000000000000000000001 \times 2^{-126}=1.0 \times 2^{-149} \fallingdotseq 10^{-45}
$$

## 3. 가수(Mantissa)

’M’은 실제 값인 가수를 저장하는 부분으로 float의 경우, 2진수 23자리를 저장할 수 있 다. 2진수 23자리로는 약 7자리의 10진수를 저장할 수 있는데 이것이 바로 float의 정밀 도가 된다. double은 가수를 저장할 수 있는 공간이 52자리로 float보다 약 2배이므로 double이 float보다 약 2배의 정밀도를 갖는 것이다.

## 부동 소수점의 오차

실수 중에는 ’파이(

$\pi=3.141592 \ldots$

)와 같은 무한 소수가 존재하므로, 정수와 달리 실수를 저장할 때는 오차가 발생할 수 있다. 게다가 10진수가 아닌 2진수로 저장하기 때문에 10 진수로는 유한 소수이더라도, 2진수로 변환하면 무한 소수가 되는 경우도 있다. 2진수로 는 10진 소수를 정확히 표현하기 어렵기 때문이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-107_135_439_1533_778.jpg -->

위의 그림에서 알 수 있듯이 9.1234567은 10진수로 유한 소수지만, 2진수로는 무한 소수 이다. 즉, 2진수로는 이 값을 정확히 표현하지 못한다는 애기다. 여기서부터 벌써 오차가 발생한다. 비록 2진수로 유한소수라도, 가수를 저장할 수 있는 자리수가 한정되어 있으므 로 저장되지 못하고 버려지는 값들이 있으면 오차가 발생한다.<br>2진수로 변환된 실수를 저장할 때는 먼저 ’1.xxx × 2

${ }^{\mathrm{n}}$

의 형태로 변환하는데, 이 과정을 정규화라고 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-107_79_1193_2034_413.jpg -->

정규화된 2진 실수는 항상 ’1.’으로 시작하기 때문에, ’1.’을 제외한 23자리의 2진수가 가 수(mantissa)로 저장되고 그 이후는 잘려나간다. 지수는 기저법으로 저장되기 때문에, 지 수인 3에 기저인 127을 더한 130이 2진수로 변환되어 저장된다. 10진수 130은 2진수로 ’10000010’이다.

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

I 참고 I 기저법은＇2의 보수법＇처럼 부호있는 정수를 저장하는 방법이다．저장할 때 특정값（기저）을 더했다가 읽어올 때는 다 시 뺀다．

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-108_294_1024_395_330.jpg -->

이 때 잘려나간 값들에 의해 발생할 수 있는 최대오차는 약

$2^{-23}$

인데，이 값은 가수의 마지 막 비트의 단위와 같다．

$2^{-23}$

은 10 진수로 0.0000001192 （약

$10^{-7}$

）이므로 float의 정밀도가 7자리라고 하는 것이다．어떤 책에서는＇소수점이하 6자리＇라고 하는데，이것은 소수점이 하의 자릿수만을 센 것으로，결국 같은 애기다．

$$
2^{-23} \fallingdotseq \begin{aligned}
& \text { 「7자리「 } \\
& 0.0000001192 \\
& \text { ㄴ6자리」 }
\end{aligned}=10^{-7}
$$

다음의 예제를 보면，float타입의 값이 실제로 어떻게 저장되는지 직접 확인할 수 있다．

－예제2－11／FloatToBinEx．java

```txt
class FloatToBinEx {
    public static void main(String args[]) {
        float f = 9.1234567f;
        int i = Float.floatToIntBits(f);
```

System．out．printf（＂％f％n＂，f）；<br>System．out．printf（＂％Xon＂，i）；／／16진수로 출력<br>\} // main의 끝<br>\}

－실행결과

```txt
9.123457
4111F9AE
```

Float클래스의 floatToIntBits（）는 float타입의 값을 int타입의 값으로 해석해서 반환한 다．반환된 값을 16진수로 출력하면，float타입의 값이 2진수로 어떻게 저장되는지 확인할 수 있다．실행결과를 보면，앞서 설명한 것과 달리 0×4111F9AE이다．그 이유는 잘려나간 첫 번째 자리의 값이 1이라서 반올림되어 0x4111F9AD의 2진수 마지막 자리 두 자리의 값 이＇ 01 ＇에서＇ 10 ＇으로 1 증가했기 때문이다．

I 참고 I 10진수와 달리 2진수는 1이면，반올림 한다．2진수에서는 1이 절반이기 때문이다．

1.  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-108_101_1050_2090_324.jpg -->

－반올림 발생

1. $2^{-1}$$2^{-2}$$2^{-3}$$2^{-4}$$2^{-5}$$2^{-6}$．．．$2^{-19}$$2^{-20}$$2^{-21}$$2^{-22}$$2^{-23}$001000⋯01110$\times 2^{3}$

## 5. 형변환

## 5.1. 형변환(캐스팅, casting)이란?

모든 변수와 리터럴에는 타입이 있다는 것을 배웠다. 프로그램을 작성하다 보면 같은 타 입뿐만 아니라 서로 다른 타입간의 연산을 수행해야하는 경우도 있다. 이럴 때는 연산을 수행하기 전에 타입을 일치시켜야 하는데, 변수나 리터럴의 타입을 다른 타입으로 변환하 는 것을 ’형변환(casting)’이라고 한다.

## 형변환이란, 변수 또는 상수의 타입을 다른 타입으로 변환하는 것

예를 들어 int타입의 값과 float타입의 값을 더하는 경우, 먼저 두 값을 같은 타입으로 즉, 둘 다 float타입으로 변환한 다음에 더해야 한다.

## 5.2 형변환 방법

형변환 방법은 아주 간단하다. 형변환하고자 하는 변수나 리터럴의 앞에 변환하고자 하는 타입을 괄호와 함께 붙여주기만 하면 된다.

## (타입)피연산자

여기에 사용되는 괄호()는 ’캐스트 연산자’또는 ’형변환 연산자’라고 하며, 형변환을 ’캐스 팅(casting)’이라고도 한다.<br>예를 들어 다음과 같은 코드가 있을 때,

```txt
double d = 85.4;
int score = (int)d; // double타이ᄇ의 벼ᄂ수 d르ᄅ int타이ᄇ으로 혀ᄋ벼ᄂ화ᄂ
```

두 번째 줄의 연산과정을 단계별로 살펴보면 다음과 같다.

```txt
int score = (int)d;
→ int score = (int)85.4; // 벼ᄂ수 d의 가ᄡ으ᄅ 읽어 와서 혀ᄋ벼ᄂ화ᄂ하ᄂ다.
→ int score = 85; // 혀ᄋ벼ᄂ화ᄂ의 겨ᄅ과이ᄂ 85르ᄅ 벼ᄂ수 score에 저자ᄋ하ᄂ다.
```

이 과정에서 알 수 있듯이, 형변환 연산자는 그저 피연산자의 값을 읽어서 지정된 타입으 로 형변환하고 그 결과를 반환할 뿐이다. 그래서 피연산자인 변수 d의 값은 형변환 후에도 아무런 변화가 없다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 2-12/CastingEx.java

```txt
class CastingEx {
    public static void main(String[] args) {
        double d = 85.4;
        int score = (int)d;
        System.out.println("score="+score);
        System.out.println("d="+d);
    }
}
```

- 실행결과

```txt
score=85
d=85.4 ← 혀ᄋ벼ᄂ화ᄂ 후에도 피여ᄂ사ᄂ자에느ᄂ 아무러ᄂ 벼ᄂ화가 어ᄡ다.
```

기본형(primitive type)에서 boolean을 제외한 나머지 타입들은 서로 형변환이 가능하다. 그리고 기본형과 참조형 간의 형변환은 불가능하다. 참조형의 형변환은 7장에서 설명할 것이고, 여기서는 기본형의 형변환에 대해서만 다룬다.

| 변 환 | 수식 | 결 과 |
| --- | --- | --- |
| int → char | (char) 65 | ‘A’ |
| char → int | (int) ‘A’ | 65 |
| float → int | (int) 1.6f | 1 |
| int → float | (float) 10 | 10.0f |

A 표2-21 기본형 간의 형변환

표2-20은 형변환의 몇 가지 예를 보여준다. float타입의 값을 int타입으로 변환할 때 소 수점 이하의 값은 반올림이 아닌 버림으로 처리된다는 점을 눈여겨보자. char타입도 실제 로는 정수로 저장되므로 값이 저장되는 형식은 크게 정수와 실수, 2가지 뿐이다.

## 5.3 정수형 간의 형변환

큰 타입에서 작은 타입으로의 변환, 예를 들어서 int타입(4 byte)의 값을 byte타입(1 byte) 으로 변환하는 경우는 아래와 같이 크기의 차이만큼 잘려나간다. 그래서 경우에 따라 ’값 손실(loss of data)’이 발생할 수 있다.

| 변환 | 2진수 | 10진수 | 값손실 |
| --- | --- | --- | --- |
| int↓byte | 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  0 0 0 | 1010 | 없음 |
| int↓byte | 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0  0 0 1 | 30044 | 있음 |

A 표2-22 정수형 간의 형변환 - 큰 타입에서 작은 타입으로 변환

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

반대로 작은 타입에서 큰 타입으로의 변환, 예를 들어서 byte타입(1 byte)의 값을 int타입 (4 byte)으로 변환하는 경우는 저장공간의 부족으로 잘려나가는 일이 없으므로 값 손실이 발생하지 않는다. 그리고 나머지 빈공간은 0 또는 1로 채워진다.

| 변환 | 2진수 |  | 10진수 | 값손실 |
| --- | --- | --- | --- | --- |
| byte  ↓  int | 0 0 0 0 1 0 1  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  1 |  | 10  10 | 없음 |

A 표2-23 정수형간의 형변환 - 작은 타입에서 큰 타입으로 변환(양수)

원래의 값을 채우고 남은 빈공간은 0으로 채우는 게 보통이지만, 변환하려는 값이 음수인 경우에는 빈 공간을 1로 채운다. 그 이유는 형변환 후에도 부호를 유지할 수 있도록 하기 위해서이다.

| 변환 | 2진수 | 10진수 | 값손실 |
| --- | --- | --- | --- |
| byte |  | -2  -2 | 없음 |
| ↓ |  |  |  |
| int |  |  |  |

A 표2-24 정수형간의 형변환 - 작은 타입에서 큰 타입으로 변환(음수)

왜 -2가 2진수로 ’11111111111111111111111111111110’이냐는 질문을 자주 받는데, 이런 의문 이 든다면 아직 ’2의 보수법’을 이해하지 못한 것이다. 2의 보수법을 다시 한 번 복습하기 바란다.

I 참고 I 2의 보수법은 p.72에 있다.

- 예제 2-13/CastingEx2.java

```txt
class CastingEx2 {
    public static void main(String[] args) {
        int i = 10;
        byte b = (byte)i;
        System.out.printf("[int -> byte] i=%d -> b=%d%n", i, b);
        i = 300;
        b = (byte)i;
        System.out.printf("[int -> byte] i=%d -> b=%d%n", i, b);
        b = 10;
        i = (int)b;
        System.out.printf("[byte -> int] b=%d -> i=%d%n", b, i);
        b = -2;
        i = (int)b;
        System.out.printf("[byte -> int] b=%d -> i=%d%n", b, i);
        System.out.println("i="+Integer.toBinaryString(i));
    }
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 실행결과

```txt
[int -> byte] i=10 -> b=10
[int -> byte] i=300 -> b=44
[byte -> int] b=10 -> i=10
[byte -> int] b=-2 -> i=-2
i=11111111111111111111111111111110
```

앞서 설명한 내용들을 확인해 보는 예제이다. 예제의 마지막에는 변수 i의 값인 -2가 2진 수로 출력된 것이다. 이처럼 ’Integer.toBinaryString(int i)’라는 메서드를 이용하면, 10 진 정수를 2진 정수로 변환한 문자열을 얻을 수 있다.

## 5.4 실수형 간의 형변환

실수형에서도 정수형처럼 작은 타입에서 큰 타입으로 변환하는 경우, 빈 공간을 0으로 채 운다. float타입의 값을 double타입으로 변환하는 경우, 지수(E)는 float의 기저인 127을 뺀 후 double의 기저인 1023을 더해서 변환하고, 가수(M)는 float의 가수 23자리를 채우 고 남은 자리를 0으로 채운다. 지수의 변화보다는 가수의 변화를 눈여겨보자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-112_134_1132_1226_291.jpg -->

- 그림2-15 float를 double로 형변환

반대로 double타입에서 float타입으로 변환하는 경우, 지수(E)는 double의 기저인 1023 을 뺀 후 float의 기저인 127을 더하고 가수(M)는 double의 가수 52자리 중 23자리만 저 장되고 나머지는 버려진다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-112_132_1138_1661_292.jpg -->

- 그림2-16 double을 float로 형변환

한 가지 주의할 점은 형변환할 때 가수의 24번째 자리에서 반올림이 발생할 수 있다는 것이다. 24번째 자리의 값이 1이면, 반올림이 발생하여 23번째 자리의 값이 1증가한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-112_219_1138_2039_291.jpg -->

- 그림2-17 double을 float로 형변환할 때 반올림이 발생하는 경우

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그리고 float타입의 범위를 넘는 값을 float로 형변환하는 경우는 ‘±무한대’ 또는 ’±0’을결과로 얻는다.

```txt
    double d = 1.0e100; // float의 최대가ᄡ보다 크ᄂ 가ᄡ으ᄅ d에 저자ᄋ (1.0 × 10 100)
    float f = (float)d; // d의 가ᄡ으ᄅ float로 혀ᄋ벼ᄂ화ᄂ해서 f에 저자ᄋ. f느ᄂ 무하ᄂ대가 되ᄂ다.
    double d = 1.0e-50; // float의 최소가ᄡ보다 자ᄀ으ᄂ 가ᄡ으ᄅ d에 저자ᄋ (1.0 × 10 -50)
    float f = (float)d; // f의 가ᄡ으ᄂ 0이 되ᄂ다.
```

- 예제 2-14/CastingEx3.java

```txt
class CastingEx3 {
    public static void main(String[] args) {
        float f = 9.1234567f;
        double d = 9.1234567;
        double d2 = (double)f;
        System.out.printf("f =%20.18f\n", f);
        System.out.printf("d =%20.18f\n", d);
        System.out.printf("d2=%20.18f\n", d2);
    }
}
```

- 실행결과

```txt
f =9.123456954956055000
d =9.12345670000000000
d2=9.123456954956055000
```

변수 f와 d에 같은 값을 저장했지만, 실제로 저장되는 값은 다르다. 변수 f에 저장된 값을 double타입으로 형변환해도 값은 그대로이다. 왜 이런 결과를 얻는지 하나씩 자세히 살펴보자.

1. float f = 9.1234567f;<br>$9.1234567=1.0010001111110011010110110111011100011111000110110100111001 \cdots \times 2^{3}$<br>버려짐 —————

| 0 | 10000010 | 00100011111100110101101 | 1011101110001111100011011010 | $\cdots$ |
|---|---|---|---|---|

↓

| 0 | 10000010 | 00100011111100110101110 | 반올림발생. 23번째 자리의 값이 1증가 |
|---|---|---|---|

1. double d = 9.1234567;<br>$9.1234567=1.0010001111110011010110110111011100011111000110110100111001 \cdots \times 2^{3}$

|  |  |  | 「버려짐- |
| --- | --- | --- | --- |
| 0 | 10000000010 | 0010001111110011010110110111011100011111000110110100 | 111001… |
| ↓ |  |  |  |
| 0 | 10000000010 | 0010001111110011010110110111011100011111000110110101 | 반올림 발생 |

같은 값을 저장해도 float와 double의 정밀도 차이때문에 서로 다른 값이 저장된다.

```txt
f=9.123456954956054700
0 10000010 00100011111100110101110 l
d=9.123456700000000200
0 10000000010 0010001111110011010110110111011100011111000110110101
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. double d2 = (double) f;<br>f \| 0 \| 10000010 \| 00100011111100110101110 \|<br>\| :— \| :— \| :— \|

↓<br>d2

| 0 | 10000000010 | 00100011111100110101110000000000000000000000000000000 |
|---|---|---|

저장할때 이미 값이 달라졌기 때문에, 형변환을 해도 값이 같아지지 않는다.<br>d 0100000000100010001111110011010111010111011100011111000110110101<br>d2 0100000000100010001111110011010111000000000000000000000000000000

## 5.5 정수형과 실수형 간의 형변환

정수형과 실수형은 저장형식이 완전히 다르기 때문에 정수형 간의 변환처럼 간단히 값을 채우고 자르는 식으로 할 수 없다. 좀 더 복잡한 변환과정을 거쳐야한다.

| int $: 1+31=32$ (4 byte) |  |  |
| --- | --- | --- |
| S (1) | 31 bit |  |
| float : $1+8+23=32$ (4 byte) |  |  |
| S (1) | E (8) | M (23) |

- 그림2-18 int타입과 float타입의 저장형식 비교

## 정수형을 실수형으로 변환

정수는 소수점이하의 값이 없으므로 비교적 변환이 간단하다. 그저 정수를 2진수로 변환 한 다음 정규화를 거쳐 실수의 저장형식으로 저장될 뿐이다. 이 과정은 이미 실수형의 저 장형식에서 설명했으므로 자세한 내용은 생략한다. 아래의 그림은 10진수 7을 float타입 의 변수에 저장되는 과정을 보여준다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-115_259_826_1180_699.jpg -->

실수형은 정수형보다 훨씬 큰 저장범위를 갖기 때문에, 정수형을 실수형으로 변환하는 것 은 별 무리가 없다. 정수를 2진수로 변환한 다음에 정규화해서 실수의 저장형식에 맞게 저장할 뿐이다. 한 가지 주의할 점은 실수형의 정밀도의 제한으로 인한 오차가 발생할 수 있다는 것이다.<br>예를 들어 int의 최대값은 약 20억으로 최대 10자리의 정밀도를 요구한다. 그러나 float 는 10진수로 약 7자리의 정밀도만을 제공하므로, int를 float로 변환할 때 정밀도 차이에 의한 오차가 발생할 수 있다. 그래서 10진수로 8자리 이상의 값을 실수형으로 변환할 때 는 float가 아닌 double로 형변환해야 오차가 발생하지 않을 것이다.

$$
\begin{array}{ll}
91234567 & \xrightarrow{\text { (float) }} 91234568.0 \xrightarrow{\text { (int) }} 91234568 \\
91234567 \xrightarrow{\text { (double) }} 91234567.0 \xrightarrow{\text { (int) }} 91234567
\end{array}
$$

위의 그림은 8자리의 int값을 각각 float와 double로 변환한 다음에 다시 int로 형변환했 을 때 값의 변화를 보여준다. float는 정밀도가 약 7자리이므로 8자리의 정수를 저장할 때 오차가 발생하는 것을 알 수 있다. 반면에 double은 약 15자리의 정밀도를 갖기 때문에 오 차없이 변환이 가능하다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

실수형을 정수형으로 변환<br>실수형을 정수형으로 변환하면, 실수형의 소수점이하 값은 버려진다. 정수형의 표현 형식으로 소수점 이하의 값은 표현할 수 없기 때문이다. 예를 들어 float타입의 상수9.1234567f를 int타입으로 형변환 하면 9가 된다.

| 0 | 10000010 | 001000111111001101011110 |
| --- | --- | --- |
| ↓ 1001.0001111111001101011110 → 1001  ↓ |  | 소수점 이하는 버려진다. |
| 0 | 0000000000000000000000000001001 | 10진수로 9 |

- 그림2-20 실수 9.1234567이 int타입으로 형변환되는 과정

그래서 실수형을 정수형으로 형변환할 때 반올림이 발생하지 않는다. 예를 들어, 실수1.666을 int로 형변환하면, 1이 된다.

## $1.666 \xrightarrow{\text { (int) }} 1$

만일 실수의 소수점을 버리고 남은 정수가 정수형의 저장범위를 넘는 경우에는 정수의 오버플로우가 발생한 결과를 얻는다.

- 예제 2-15/CastingEx4.java

```txt
class CastingEx4 {
    public static void main(String[] args) {
        int i = 91234567; // 8자리의 10지ᄂ수
        float f = (float)i; // int르ᄅ float로 혀ᄋ벼ᄂ화ᄂ
        int i2 = (int)f; // float르ᄅ다시 int로 혀ᄋ벼ᄂ화ᄂ
        double d = (double)i; // int르ᄅ double로 혀ᄋ벼ᄂ화ᄂ
        int i3 = (int)d; // double으ᄅ다시 int로 혀ᄋ벼ᄂ화
        float f2 = 1.666f;
        int i4 = (int)f2;
        System.out.printf("i=%d\n", i);
        System.out.printf("f=%f i2=%d\n", f, i2);
        System.out.printf("d=%f i3=%d\n", d, i3);
        System.out.printf("(int)%f=%d\n", f2, i4);
    }
}
```

- 실행결과

```txt
i=91234567
f=91234568.000000 i2=91234568
d=91234567.000000 i3=91234567
(int)1.666000=1
```

## 5.6 자동 형변환

서로 다른 타입 간의 대입이나 연산을 할 때, 형변환으로 타입을 일치시키는 것이 원칙이 다. 하지만, 경우에 따라 편의상의 이유로 형변환을 생략할 수 있다. 그렇다고 해서 형변 환되지 않는 것은 아니고, 컴파일러가 생략된 형변환을 자동적으로 추가한다.

```txt
float f = 1234; // 혀ᄋ벼ᄂ화ᄂ의 새ᄋ랴ᄀ. float f = (float)1234;와가ᄐ으ᄆ.
```

위의 문장에서 우변은 int타입의 상수이고, 이 값을 저장하려는 변수의 타입은 float이다. 서로 타입이 달라서 형변환이 필요하지만 편의상 생략하였다. float타입의 변수는 1234라 는 값을 저장하는데 아무런 문제가 없기 때문이다.<br>그러나 다음과 같이 변수가 저장할 수 있는 값의 범위보다 더 큰 값을 저장하려는 경우 에 형변환을 생략하면 에러가 발생한다.

```txt
byte b = 1000; // 에러. byte의 버ᄆ위(-128~127)르ᄅ 너ᄆ느ᄂ 가ᄡ으ᄅ 저자ᄋ.
```

에러 메시지는 ’incompatible types: possible lossy conversion from int to byte’인데, 앞서 배운 것과 같이 큰 타입에서 작은 타입으로의 형변환은 값 손실이 발생할 수 있다는 뜻이다.<br>그러나 다음과 같이 명시적으로 형변환 해줬을 경우, 형변환이 프로그래머의 실수가 아 닌 의도적인 것으로 간주하고 컴파일러는 에러를 발생시키지 않는다.

```txt
char ch = (char)1000; // 며ᄋ시저ᄀ 혀ᄋ벼ᄂ화ᄂ. 에러가 바ᄅ새ᄋ하지 않느ᄂ다.
```

또 다른 예로 다음과 같은 계산식에서 자주 형변환이 생략되는데, 서로 다른 두 타입의 연 산에서는 먼저 타입을 일치시킨 다음에 연산을 수행해야 하므로, 연산과정에서 형변환이 자동적으로 이루어진다.

```txt
int i = 3;
double d = 1.0 + i; // double d = 1.0 + (double)i;에서 혀ᄋ벼ᄂ화ᄂ이 새ᄋ랴ᄀ되ᄆ
```

서로 다른 두 타입 간의 덧셈에서는 두 타입 중 표현범위가 더 넓은 타입으로 형변환하여 타입을 일치시킨 다음에 연산을 수행한다. 그렇게 하는 것이 값손실의 위험이 더 적어서 올바른 결과를 얻을 확률이 높기 때문이다.

```txt
    double d = 1.0 + i;
→ double d = 1.0 + (double)i;
→ double d = 1.0 + (double)3; // 3으ᄅ double타이ᄇ으로 혀ᄋ벼ᄂ화ᄂ하며ᄂ 3.0이 되ᄂ다.
→ double d = 1.0 + 3.0; // double과 double의 더ᄉ세ᄆ겨ᄅ과 타이ᄇ으ᄂ double.
→ double d = 4.0; // double + double = double
```

이처럼 연산과정에서 자동적으로 발생하는 형변환을 ’산술 변환’이라고 하며, 다음 장에서 자세히 살펴볼 것이다.

## 자동 형변환의 규칙

형변환을 하는 이유는 주로 서로 다른 두 타입을 일치시키기 위해서 인데, 형변환을 생략 하면 컴파일러가 알아서 자동적으로 형변환을 한다고 했다. 그러면 컴파일러는 어떤 판단 기준으로 타입을 일치시킬까?

기존의 값을 최대한 보존할 수 있는 타입으로 자동 형변환한다.

표현범위가 좁은 타입에서 넓은 타입으로 형변환하는 경우에는 값 손실이 없으므로 두 타 입 중에서 표현범위가 더 넓은 쪽으로 형변환된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-118_188_1176_817_243.jpg -->

- 그림2-21 기본형의 자동 형변환이 가능한 방향

그림2-21은 형변환이 가능한 7개의 기본형을 왼쪽부터 오른쪽으로 표현할 수 있는 값의 범위가 작은 것부터 큰 것의 순서로 나열한 것이다.

화살표방향으로의 변환, 즉 왼쪽에서 오른쪽으로의 변환은 형변환 연산자를 사용하지 않아도 자동 형변환이 되며, 그 반대 방향으로의 변환은 반드시 형변환 연산자를 써줘야 한다.<br>보통 자료형의 크기가 큰 것일수록 값의 표현범위가 크기 마련이지만, 실수형은 정수형 과 값을 표현하는 방식이 다르기 때문에 같은 크기일지라도 실수형이 정수형보다 훨씬 더 큰 표현 범위를 갖기 때문에 float와 double이 같은 크기인 int와 long보다 오른쪽에 위치 한다.

I 참고 I 정수형을 실수형으로 형변환하는 경우, 정밀도의 한계로 인한 오차가 발생할 수 있다.<br>char와 short은 둘 다 2 byte의 크기로 크기가 같지만, char의 범위는 ’ $0 \sim 2^{16}-1(0 \sim$ 65535)‘이고 short의 범위는’ $-2^{15} \sim 2^{15}-1(-32768 \sim 32767)$ ’이므로 서로 범위가 달라서 둘 중 어느 쪽으로의 형변환도 값 손실이 발생할 수 있으므로 자동 형변환이 수행될 수 없 다.

1. boolean을 제외한 나머지 7개의 기본형은 서로 형변환이 가능하다.
2. 기본형과 참조형은 서로 형변환할 수 없다.
3. 서로 다른 타입의 변수 간의 연산은 형변환을 하는 것이 원칙이지만, 값의 범위가 작은 타입에서 큰 타입으로의 형변환은 생략할 수 있다.

## 자주 사용되는 타입 간의 변환

기본적인 타입 간의 변환은 프로그램에서 자주 사용되므로 반드시 기억해 두자.

1. 숫자를 문자로 변환 - 숫자에 ‘0’을 더한다.<br>(char) (3 + ’0’) → ‘3’
2. 문자를 숫자로 변환 - 문자에서 ’ 0 ’을 뺀다.
   $$
   \text { '3' - '0' → } 3
   $$
3. 숫자를 문자열로 변환 - 숫자에 빈 문자열(““)을 더한다.
   $$
   3+\text { "" → "3" }
   $$
4. 문자열을 숫자로 변환 - Integer.parseInt(), Double.parseDouble()을 사용한다.

```txt
Integer.parseInt("3") → 3
Double.parseDouble("3.14") → 3.14
```

1. 문자열을 문자로 변환 - charAt(0)을 사용한다.<br>“3”.charAt (0) → ‘3’
2. 문자를 문자열로 변환 - 빈 문자열(““)을 더한다.<br>‘3’ +”” → “3”

- 예제 2-16/CastingEx5.java

```txt
class CastingEx5 {
    public static void main(String[] args) {
        String str = "3";
        System.out.println(str.charAt(0) - '0');
        System.out.println('3' - '0' + 1);
        System.out.println(Integer.parseInt("3")+1);
        System.out.println("3" + 1);
        System.out.println((char) (3 + '0'));
    }
}
```

실행결과

---

3

---

4

---

4

---

31

---

3

---

I 참고 I 연습문제는 깃헙([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) PDF파일로 제공

Memo

Chapter 03<br>연산자<br>operator

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

## 1．연산자（operator）

연산자는＇연산을 수행하는 기호＇를 말한다．예를 들어＇＋＇기호는 덧셈 연산을 수행하며， ＇덧셈 연산자＇라고 한다．자바에서는 사칙연산（＋，－，＊，／）을 비롯해서 다양한 연산자들을 제공한다．처음에는 배워야할 연산자가 많아 보이지만，자주 쓰이는 것들을 중심으로 하 나씩 배워나가면 쉽게 익숙해질 것이다．

## 1.1 연산자와 피연산자

연산자가 연산을 수행하려면 반드시 연산의 대상이 있어야하는데，이것을＇피연산자（oper and）＇라고 한다．피연산자로 상수，변수 또는 식（式）등을 사용할 수 있다．

연산자（operator）연산을 수행하는 기호（＋，－，＊，／등）<br>피연산자（operand）연산자의 작업 대상（변수，상수，리터럴，수식）

다음과 같이＇x＋3＇이라는 식（式）이 있을 때，＇＋＇는 두 피연산자를 더해서 그 결과를 반환 하는 덧셈 연산자이고，변수 x와 상수 3은 이 연산자의 피연산자이다．

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-122_270_261_1201_700.jpg -->

이처럼 덧셈연산자＇＋＇는 두 값을 더한 결과를 반환하므로，두 개의 피연산자를 필요로 한 다．대부분의 연산자는 이처럼 두 개의 피연산자를 필요로 하며，하나 또는 세 개의 피연 산자를 필요로 하는 연산자도 있다．연산자는 피연산자로 연산을 수행하고 나면 항상 결 과값을 반환한다．예를 들어 x의 값이 5일 때，덧셈연산＇x＋3＇의 결과값은 8이 된다．

## 1.2 식（式）과 대입 연산자

연산자와 피연산자를 조합하여 계산하고자하는 바를 표현한 것을＇식（式，expression）＇이 라고 한다．그리고 식을 계산하여 결과를 얻는 것을＇식을 평가（evaluation）한다＇고 한다． 하나의 식을 평가（계산）하면，단 하나의 결과를 얻는다．만일 x의 값이 5라면，아래의 식 을 평가한 결과는 23 이 된다．

$$
4 * x+3
$$

작성한 식을 프로그램에 포함시키려면，식의 끝에＇；＇를 붙여서 문장으로 만들어야 한다．

```txt
4 * x + 3; // 무ᄂ자ᄋ(statement)
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

예를 들어 변수 x의 값이 5일 때, 위의 문장은 다음과 같은 과정으로 처리된다.

$$
\begin{aligned}
& \quad 4 \text { * } x+3 ; \\
& \rightarrow \quad 4 * 5+3 ; \\
& \rightarrow \quad 23 ; \quad / / \text { 결과를 얻었지만 쓰이지 않고 사라진다. }
\end{aligned}
$$

식이 평가되어 23이라는 결과를 얻었지만, 이 값이 어디에도 쓰이지 않고 사라지기 때문 에 이 문장은 아무런 의미가 없다. 그래서 아래와 같이 대입 연산자’=’를 사용해서 변수와 같이 값을 저장할 수 있는 공간에 결과를 저장해야한다.

$$
\begin{aligned}
& \quad y=4 * x+3 ; \\
& \rightarrow \quad y=4 * 5+3 ; \\
& \rightarrow \quad y=23 ; \quad / / \text { 식의 평가결과가 변수 } y \text { 에 저장된다. }
\end{aligned}
$$

그 다음에는 변수 y에 저장된 값을 다른 곳에 사용하거나 화면에 출력함으로써 의미있는 결과를 얻을 수 있다.

$$
\begin{aligned}
& y=4 * x+3 ; \\
& \text { System.out.println }(y) ; \quad / / \text { 변수 } y \text { 의 값을 화면에 출력 }
\end{aligned}
$$

만일 식의 평가결과를 출력하기만 원할 뿐, 이 값을 다른 곳에 사용하지 않을 것이라면 다 음과 같이 변수에 저장하지 않고 println메서드의 괄호( ) 안에 직접 식을 써도 된다.

```txt
System.out.println(4 * x + 3);
→ System.out.println(23); // 23이 화며ᄂ에 추ᄅ려ᄀ되ᄂ다.
```

## 1.3 연산자의 종류

배워야할 연산자의 개수가 많아서 부담스러울 수 있는데, 기능이 비슷한 것들끼리 묶어놓 고 보면 몇 종류 안 된다.

| 종류 | 연산자 | 설명 |
| --- | --- | --- |
| 산술 연산자 | + - \* / % \<\< >> | 사칙 연산(+,-,\*,/)과 나머지 연산(%) |
| 비교 연산자 | > \< >= \<= == != | 크고 작음과 같고 다름을 비교 |
| 논리 연산자 | £ & \| \| ! & \| \^ ~ | ’그리고(AND)’와 ’또는(OR)’으로 조건을 연결 |
| 대입 연산자 | = | 우변의 값을 좌변에 저장 |
| 기 타 | (type) ?: instanceof | 형변환 연산자, 삼항 연산자, instanceof연산자 |

- 표3-1 연산자의 기능별 분류

I 참고 I (type)은 ’형변환 연산자’를 의미한다.

연산자는 위의 표에서 알 수 있는 것처럼, 크게 산술, 비교, 논리, 대입 4가지로 나눌 수 있다. 산술, 비교, 대입 연산자는 이미 알고 있는 것들이고, 논리 연산자도 쉽게 이해가 될 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 피연산자의 개수에 의한 분류

피연산자의 개수로 연산자를 분류하기도 하는데, 피연산자의 개수가 하나면 ‘단항 연산 자’, 두 개면 ‘이항 연산자’, 세 개면 ‘삼항 연산자’라고 부른다. 대부분의 연산자는 ’이항 연 산자’이고, 삼항 연산자는 오직’? :’ 하나뿐이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-124_210_293_539_682.jpg -->

위의 식에는 두 개의 연산자가 포함되어 있는데, 둘 다 같은 기호”-‘로 나타내지만 엄연히 다른 연산자이다. 왼쪽의 것은 ’부호 연산자’이고, 오른쪽의 것은 ’뺄셈 연산자’이다. 이처 럼 서로 다른 연산자의 기호가 같은 경우도 있는데, 이럴 때는 피연산자의 개수로 구분이 가능하다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-124_225_325_1041_667.jpg -->

부호 연산자’는 단항 연산자로 피연산자가 ’3’ 한 개뿐이지만, ‘뺄셈 연산자’는 이항 연산자 로 피연산자가’-3’과 ‘5’ 두 개이다.<br>이처럼 연산자를 기능별, 피연산자의 개수별로 나누어 분류하는 것은 곧이어 배우게 될 ’연산자의 우선순위’때문이기도 하다. 연산자마다 우선순위가 다르지만, 같은 종류의 연산 자들은 우선순위가 비슷하기 때문에 각 종류별로 우선순위를 외우면 기억하기 더 쉽다.

## 1.4 연산자의 우선순위와 결합규칙

식에 사용된 연산자가 둘 이상인 경우, 연산자의 우선순위에 의해서 연산순서가 결정된 다. 곱셈과 나눗셈(

*, /)은 덧셈과 뺄셈(+, -)보다 우선순위가 높다는 것은 이미 수학에서 배워서 알고 있을 것이다. 그래서 아래의 식은 ’3*

4’가 먼저 계산된 다음, 그 결과에 5를 더해서 17을 결과로 얻는다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-124_203_239_1989_711.jpg -->

이처럼 연산자의 우선순위는 대부분 상식적인 선에서 해결된다. 아래의 표를 통해 이 사 실을 한번 확인해보자.<br>［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

| 식 | 설명 |
| --- | --- |
| $-\mathrm{x}+3$ | 단항 연산자가 이항 연산자보다 우선순위가 높다．그래서 $x$ 의 부호를 바꾼 다음덧셈이 수행된다．여기서＇－＇는 뺄셈 연산자가 아니라 부호 연산자이다． |
| $\mathrm{x}+3 * \mathrm{y}$ | 곱셈과 나눗셈이 덧셈과 뺄셈보다 우선순위가 높다．그래서＇ $3 * y$＇가 먼저 계산된다． |
| $\mathrm{x}+3>\mathrm{y}-2$ | 비교 연산자（ $\rangle$ ）보다 산술 연산자＇＋＇와＇－＇가 먼저 수행된다．그래서＇$x+3$＇과＇$y-2$＇가 먼저 계산된 다음에＇$\gamma$＇가 수행된다． |
| $\mathrm{x}>3$＆＆ $\mathrm{x}<5$ | 논리 연산자＇＆＆＇보다 비교 연산자가 먼저 수행된다．그래서＇$x>3$＇와＇$x$ 〈 5＇가 먼저 계산된 다음에＇＆＆＇가 수행된다．식의 의미는＇×가 3보다 크고 5보다 작다＇이다． |
| result＝x＋y＊3； | 대입 연산자는 연산자 중에서 제일 우선순위가 낮다．그래서 우변의 최종 연산결과가 변수 result에 저장된다． |

A 표3－2 연산자 우선순위의 예와 설명

표3－2에서 설명을 가린 채로 왼쪽의 식만 보고 어떤 순서로 연산이 수행될지 생각해보 자．그리 어렵지 않게 연산순서를 알아낼 수 있을 것이다．실제 프로그래밍에서 사용되는 대부분의 식은 이처럼 상식적으로 판단이 가능한 수준이다．<br>상식만으로 판단하기 쉽지 않은 우선순위 몇 가지를 아래의 표에 정리하였다．아직 배우 지 않은 연산자들이니까 지금은 가볍게 보고，이 장을 다 배운 후에 다시 확인하자．

| 식 | 설명 |
| --- | --- |
| $\mathrm{x} \ll 2+1$ | 쉬프트 연산자（《久）는 덧셈 연산자보다 우선순위가 낮다．  그래서 왼쪽의 식은＇×＜＜（2＋1）＇과 같다． |
| data＆0xFF＝＝ 0 | 비트 연산자（＆）는 비교 연산자（＝＝）보다 우선순위가 낮으므로 비교연산후에 비트연산이 수행된다．그래서 왼쪽의 식은＇data＆（0xFF＝＝0）＇과같다． |
| $\mathrm{x}<-1\| \| \mathrm{x}>3$＆＆ $\mathrm{x}<5$ | 논리 연산자 중에서 AND를 의미하는＇＆＇와＇＆＆＇가 OR를 의미하는＇｜＇와＇｜｜＇보다 우선순위가 높다．이처럼 수식에 AND와 OR가 함께 사용되는 경우는다음과 같이 괄호를 사용해서 우선순위를 명확히 하는 것이 좋다．  $x\langle-1\| \mid(x\rangle 3 \& \& x<5)$ |

－표 3－3 주의해야 할 연산자 우선순위의 예와 설명

우리가 알고 있는 일반적인 수학 상식과 표3－3에 정리된 내용정도면 연산자의 우선순위 문제는 해결된다．만일 우선순위가 확실하지 않다면，먼저 계산되어야하는 부분을 괄호 로 묶어주면 된다．괄호 안의 계산식이 먼저 계산될 것이 확실하기 때문이다．

I 참고 I 괄호는 연산자가 아니다．연산자의 우선순위를 임의로 지정할 때 사용하는 기호일 뿐이다．

## 연산자의 결합규칙

하나의 식에 같은 우선순위의 연산자들이 여러 개 있는 경우，어떤 순서로 연산을 수행할 까？우선순위가 같다고 해서 아무거나 먼저 처리하는 것은 아니고 나름대로의 규칙을 가 지고 있는데，그 규칙을＇연산자의 결합규칙＇이라고 한다．

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

연산자의 결합규칙은 연산자마다 다르지만, 대부분 왼쪽에서 오른쪽의 순서로 연산을 수 행하고, 단항 연산자와 대입 연산자만 그 반대로, 오른쪽에서 왼쪽의 순서로, 연산을 수행 한다.<br>그림3-1의 (a)에서 수식 ‘3+4-5’는 덧셈연산자’+‘의 결합방향이 왼쪽에서 오른쪽이 므로 수식의 왼쪽에 있는’ 3 + 4’를 먼저 계산하고, 그 다음에 ’ 3 + 4’의 연산결과인 7과 5 의 뺄셈을 수행한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-126_277_1141_643_308.jpg -->

- 그림3-1 연산자의 결합규칙

그림 3-1의 (b)에서 대입 연산자는 연산자의 결합규칙이 오른쪽에서 왼쪽이므로 수식 ’x = y = 3’에서 오른쪽의 대입연산자부터 처리한다. 따라서 ’y = 3’이 먼저 수행되어서 y 에 3이 저장되고 그 다음에 ’x = 3’이 수행되어 x 에도 3이 저장된다.

I 참고 I ’x=y=3;’은 ’y=3;’과 ’x=3;’을 하나의 문장으로 합쳐놓은 것으로 이해해도 좋다.

$$
\begin{aligned}
& x=y=3 \\
\rightarrow & x=3 \\
\rightarrow & 3
\end{aligned}
$$

앞서 모든 연산자는 연산결과를 갖는다고 했는데, 대입연산자도 예외는 아니다. 대입연산 자는 우변의 값을 좌변에 저장하고, 저장된 값을 연산결과로 반환한다. 그래서 ’ $\mathrm{y}=3$ ’의 연 산결과가 3이 되는 것이다.<br>지금까지 배운 연산자의 우선순위에 대해서 정리하면 다음과 같다.

1. 산술 > 비교 > 논리 > 대입. 대입은 제일 마지막에 수행된다.
2. 단항(1) > 이항(2) > 삼항(3). 단항 연산자의 우선순위가 이항 연산자보다 높다.
3. 단항 연산자와 대입 연산자를 제외한 모든 연산의 진행방향은 왼쪽에서 오른쪽이다.

표3-3과 이 내용만 잘 기억하고 있어도, 대부분의 연산자 우선순위 문제는 해결할 수 있 을 것이다. 그렇지 않을 때는 표3-4를 참고하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| 종 류 | 결합규칙 | 연산자 | 우선순위 |
| --- | --- | --- | --- |
| 단항 연산자 |  | ++ – + - ~ ! (type) | 높음 |
| 산술 연산자 | ⟶ | \* / % |  |
|  | ⟶ | + - |  |
|  | ⟶ | \<\< >> |  |
| 비교 연산자 | ⟶ | \< > \<= >= instanceof |  |
|  | ⟶ | == != |  |
| 논리 연산자 | ⟶ | & |  |
|  | ⟶ | \^ |  |
|  | ⟶ | \| |  |
|  | ⟶ | && |  |
|  | ⟶ | \|\| |  |
| 삼항 연산자 | ⟶ | ?: | 낮음 |
| 대입 연산자 |  | = += -= \*= /= %=  \<\<= >>= &= \^= \|= |  |

- 표 3-4 연산자의 우선순위와 결합규칙<br>I 주의 I 단항연산자에 있는 ‘+’와’-‘는 부호연산자이고,’(type)’은 형변환 연산자이다.<br>I 참고 I instanceof는 객체의 타입을 확인하는데 사용되는 연산자이다. 7장 객체지향개념 에에서 설명한다.

시험에서는 연산자의 우선순위와 결합규칙으로 어려운 문제가 나올 수 있겠지만, 실제 프 로그래밍에서는 앞서 정리한 3가지 내용과 몇 가지 예외적인 것들만 기억하는 것만으로도 충분하다.

## 1.5 산술 변환(usual arithmetic conversion)

이항 연산자는 두 피연산자의 타입이 일치해야 연산이 가능하므로, 피연산자의 타입이 서로 다르다면 연산 전에 형변환 연산자로 타입을 일치시켜야한다. 예를 들어 int타입과 float타입을 덧셈하는 경우, 형변환 연산자를 사용해서 피연산자의 타입을 둘 다 int 또는 float로 일치시켜야 한다.

```txt
int i = 10;
float f = 20.0f;
float result = f + (float)i; // 혀ᄋ벼ᄂ화ᄂ으로 두 피여ᄂ사ᄂ자의 타이ᄇ으ᄅ 이ᄅ치
```

대부분의 경우, 두 피연산자의 타입 중에서 더 큰 타입으로 일치시키는데, 그 이유는 작은 타입으로 형변환하면 원래의 값이 손실될 가능성이 있기 때문이다. 앞서 배운 것과 같이 작은 타입에서 큰 타입으로 형변환하는 경우, 자동적으로 형변환되므로 형변환 연산자를 생략할 수 있다.

```txt
float result = f + i; // 크ᄂ 타이ᄇ으로 혀ᄋ벼ᄂ화ᄂ시, 혀ᄋ벼ᄂ화ᄂ여ᄂ사ᄂ자 새ᄋ랴ᄀ가느ᄋ
```

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

이처럼 연산 전에 피연산자 타입의 일치를 위해 자동 형변환되는 것을＇산술 변환＇또는 ＇일반 산술 변환＇이라 하며，이 변환은 이항 연산에서만 아니라 단항 연산에서도 일어난다． ＇산술 변환＇의 규칙은 다음과 같다．

（1） 두 피연산자의 타입을 같게 일치시킨다．（보다 큰 타입으로 일치）

$$
\begin{array}{llll}
\text { long } & + \text { int } & \rightarrow \text { long } & + \text { long }
\end{array} \text { → long }, \text { float }+ \text { int } \quad \rightarrow \text { float }+ \text { float } \rightarrow \text { float }, \text { floc }_{\text {flouble }},
$$

（2） 피연산자의 타입이 int보다 작은 타입이면 int로 변환된다．

$$
\begin{aligned}
& \text { byte }+ \text { short → int }+ \text { int } \text { → int } \\
& \text { char }+ \text { short → int }+ \text { int } \text { → } \text { int }
\end{aligned}
$$

I 참고 I 모든 연산에서＇산술 변환＇이 일어나지만，쉬프트 연산자（《久，》〉），증감 연산자（＋＋，－）는 예외이다．

첫 번째 규칙은 앞서 자동 형변환에서 배운 것처럼 피연산자의 값손실을 최소화하기 위한 것이고，두 번째 규칙은 정수형의 기본 타입인 int가 가장 효율적으로 처리할 수 있는 타 입이기 때문에，그리고 int보다 작은 타입，예를 들면 char나 short의 표현범위가 좁아서 연산중에 오버플로우（overflow）가 발생할 가능성이 높기 때문에 만들어진 것이다．

여기서 한 가지 주목해야할 점은 연산결과의 타입이다．연산결과의 타입은 피연산자의 타 입과 일치한다．예를 들어 int와 int의 나눗셈 연산결과는 int이다．float와 double과 같은 실수형이 아니기 때문에 소수점 이하는 버려진다．그래서 아래의 식＇5 나누기 2＇의 결과가 2.5 가 아닌 2 이다．

$$
\begin{array}{ccc}
\text { int } & / & \text { int }
\end{array} \text { → } \text { int }
$$

위의 식에서 2．5라는 실수를 결과로 얻으려면，피연산자 중 어느 한 쪽을 float와 같은 실 수형으로 형변환해야 한다．그러면，다른 한 쪽은 산술 변환의 첫 번째 규칙에 의해 자동 적으로 형변환되어 두 피연산자 모두 실수형이 되고，연산결과 역시 실수형의 값을 얻을 수 있다．

$$
\begin{array}{lllll}
\text { int } & /(\text { float }) \text { int } & \rightarrow & \text { int } / \text { float } & \rightarrow \\
5 & /(\text { float }) 2 & \rightarrow & 5 & / 2.0 \mathrm{f}
\end{array} \text { → } 5.0 \mathrm{f} / 2.0 \mathrm{f} \rightarrow 2.5 \mathrm{f}
$$

결국 산술 변환이란，용어가 좀 거창하지만，연산 직전에 발생하는 자동 형변환일 뿐이다． 아래의 두 가지 규칙만 잘 기억해두자．

산술 변환이란？연산 수행 직전에 발생하는 피연산자의 자동 형변환

（1） 두 피연산자의 타입을 같게 일치시킨다（보다 큰 타입으로 일치）．<br>（2） 피연산자의 타입이 int보다 작은 타입이면 int로 변환된다．

## 2. 단항 연산자

## 2.1 증감 연산자 ++ –

증감연산자는 피연산자에 저장된 값을 1 증가 또는 감소시킨다. 증감연산자의 피연산자로 정수와 실수가 모두 가능하지만, 상수는 값을 변경할 수 없으므로 가능하지 않다.

앞서 형변환에서 설명한 것과 같이 대부분의 연산자는 피연산자의 값을 읽어서 연산에 사용할 뿐, 피연산자의 타입이나 값을 변경시키지 않는다. 오직 대입연산자와 증감연산자 만 피연산자의 값을 변경한다.

I 참고 I 증감연산자는 일반 산술 변환에 의한 자동 형변환이 발생하지 않으며, 연산결과의 타입은 피연산자의 타입과 같다.

증가 연산자(++) 피연산자의 값을 1 증가시킨다.<br>감소 연산자(–) 피연산자의 값을 1 감소시킨다.

일반적으로 단항 연산자는 피연산자의 왼쪽에 위치하지만, 증가 연산자 ‘++’와 감소 연산 자’–‘는 양쪽 모두 가능하다. 피연산자의 왼쪽에 위치하면 ’전위형(prefix)’, 오른쪽에 위치하면 ’후위형(postfix)’이라고 한다.<br>전위형과 후위형 모두 피연산자의 값을 1 증가 또는 감소시키지만, 증감연산자가 수식이 나 메서드 호출에 포함된 경우 전위형일 때와 후위형일 때의 결과가 다르다.

| 타입 | 설명 | 사용예 |
| --- | --- | --- |
| 전위형 | 값이 참조되기 전에 증가시킨다. | j = ++i; |
| 후위형 | 값이 참조된 후에 증가시킨다. | j = i++; |

- 표3-5 전위형과 후위형의 비교

그러나 ’++i,’와 ’i++;’처럼 증감연산자가 수식이나 메서드 호출에 포함되지 않고 독립적 인 하나의 문장으로 쓰인 경우에는 전위형과 후위형의 차이가 없다.

```txt
        ++i; // i’ 의 가ᄡ으ᄅ 1 즈ᄋ가시키ᄂ다.
        i++; // 위의 무ᄂ자ᄋ과 차이가 어ᄡ다.
```

```txt
class OperatorEx {
    public static void main(String args[]) {
        int i=5;
        i++; // i=i+1;과 가ᄐ으ᄂ 의미이다. ++i;로 바꿔ᄊ써도 겨ᄅ과느ᄂ 가ᄐ다.
        System.out.println(i);
        i=5; // 겨ᄅ과르ᄅ 비교하기 위해 i가ᄡ으ᄅ 다시 5로 벼ᄂ겨ᄋ.
        ++i;
        System.out.println(i);
    }
}
```

- 예제3-1/OperatorEx.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-129_151_195_2224_1433.jpg -->

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

i의 값을 증가시킨 후 출력할 때, 한번은 전위형 $(++\mathrm{i})$ 을 사용했고, 또 한 번은 후위형(i++)을 사용했다. 결과를 보면 두 번 모두 i의 초기값 5에서 1이 증가된 6이 출력됨을 알수 있다.

이 경우에는 어떤 수식에 포함된 것이 아니라 단독적으로 사용된 것이기 때문에, 증감연산자(++)를 피연산자의 왼쪽에 사용한 경우(전위형, ++i)와 오른쪽에 사용한 경우(후위형, $\mathrm{i}++$ )의 차이가 없다.<br>그러나 다른 수식에 포함되거나 메서드의 매개변수로 사용된 경우, 즉 단독으로 사용되지 않은 경우 전위형(++i)과 후위형(i++)의 결과는 다르다. 다음의 예제를 보자.

- 예제3-2/OperatorEx2.java

```txt
class OperatorEx2 {
    public static void main(String args[]) {
        int i=5, j=0;
        j = i++;
        System.out.println("j=i++; 시ᄅ해ᄋ후, i=" + i +", j="+ j);
        i=5; // 겨ᄅ과르ᄅ 비교하기 위해, i와 j의 가ᄡ으ᄅ 다시 5와 0으로 벼ᄂ겨ᄋ
        j=0;
        j = ++i;
        System.out.println("j=++i; 시ᄅ해ᄋ 후, i=" + i +", j="+ j);
    }
```

```txt
}
```

$$
\begin{array}{lll}
j=i++; & \text { 실행 후, } & i=6, \\
j=++i ; & \text { 실행 후, } & i=6, \\
j=6
\end{array}
$$

실행결과를 보면 i의 값은 두 경우 모두 1이 증가되어 6이 되지만, j의 값은 그렇지 않다.식을 계산하기 위해서는 식에 포함된 변수의 값을 읽어 와야 하는데, 전위형은 변수(피연산자)의 값을 먼저 증가시킨 후에 변수의 값을 읽어오는 반면, 후위형은 변수의 값을 먼저읽어온 후에 값을 증가시킨다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-130_255_1149_1789_244.jpg -->

A 그림3-2 전위형과 후위형의 연산과정 비교

전위형 ’j=++i;’에서는 i의 값을 증가시킨 후에 읽어오므로 i의 값이 5에서 6으로 증가된후에 이 값이 j에 저장되며, 후위형 ’j=i++;’에서는 i값인 5를 먼저 읽어온 다음에 i를 증가시키니까 j에 5가 저장된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

증감 연산자가 포함된 식을 이해하기 어려울 때는 다음과 같이 증감 연산자를 따로 떼어 내면 이해하기가 쉬워진다. 전위형의 경우 증감연산자를 식의 이전으로,

```txt
j = ++i; // 전위형
++i; // 증가 후에
j = i; // 참조하여 대입
```

후위형의 경우 증감연산자를 식의 이후로 떼어내면 된다.

```txt
j = i++; // 후위형
j = i; // 참조하여 대입 후에
i++; // 증가
```

다음은 메서드 호출에 증감연산자가 사용된 예이다.

- 예제 3-3/OperatorEx3.java

```txt
class OperatorEx3 {
    public static void main(String args[]) {
        int i=5, j=5;
        System.out.println(i++);
        System.out.println(++j);
        System.out.println("i = " + i + ", j = " +j);
    }
}
```

5<br>6<br>i = 6, j = 6<br>i는 값이 증가되기 전에 참조되므로 println()에게 i에 저장된 값 5 를 넘겨주고 나서 i의 값이 증가하기 때문에 5가 출력되고, j의 경우 j에 저장된 값을 증가 시킨 후에 println() 에게 값을 넘겨주므로 6이 출력된다. 결과적으로는 i, j 모두 1씩 증가되어 6이 된다.<br>아래의 왼쪽 코드에서 증감연산자를 따로 떼어내면 오른쪽과 같은 코드가 된다.

$$
\begin{aligned}
& \text { System.out.println(i++); } \\
& \text { System.out.println(++j); }
\end{aligned}
$$

⟷

```txt
System.out.println(i);
i++;
++j;
System.out.println(j);
```

증감연산자를 사용하면 코드가 간결해지지만, 지나치면 코드가 복잡해서 이해하기 어려 워지기도 한다. 예를 들어 x의 값이 5일 때, 아래 식이 수행된 후의 x의 값은 얼마일까?

```txt
x = x++ - ++x; // x의 가ᄡ으ᄂ -1? -2?
```

생각보다 쉽게 답을 내기 어려울 것이다. 실제 프로그래밍에서는 이러한 코드를 작성할 일이 없고, 이렇게 작성하는 것은 바람직하지 않다. 하나의 식에서 증감연산자의 사용을 최소화하고, 식에 두 번 이상 포함된 변수에 증감 연산자를 사용하는 것은 피해야 한다. 감소 연산자(–)는 피연산자의 값을 1 감소시킨다는 것만 빼면 증가 연산자와 동일하다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.2 부호 연산자 + -

부호 연산자’-‘는 피연산자의 부호를 반대로 변경한 결과를 반환한다. 피연산자가 음수면 양수, 양수면 음수가 연산의 결과가 된다. 부호연산자’+‘는 하는 일이 없으며, 쓰이는 경 우도 거의 없다. 부호연산자’-‘가 있으니까 형식적으로’+’를 추가해 놓은 것뿐이다.<br>부호 연산자는 boolean형과 char형을 제외한 기본형에만 사용할 수 있다.<br>I 참고 I 부호연산자는 덧셈, 뺄셈연산자와 같은 기호를 쓰지만 다른 연산자이다. 기호는 같아도 피연산자의 개수가 달라서 구별이 가능하다.

- 예제3-4/OperatorEx4.java

```txt
class OperatorEx4 {
    public static void main(String[] args) {
        int i = -10;
        i = +i;
        System.out.println(i);
        i = -10;
        i = -i;
        System.out.println(i);
    }
}
```

- 실행결과

---

- 10

10

---

지금까지 소개한 연산자 외에도 ‘단항 연산자’가 더 있지만, 편의상 관련된 이항연산자와 함께 놓았다. 논리부정 연산자’!‘는 5.1 논리 연산자’에서, 비트전환 연산자’~’는 5.2 비트 연산자에서 설명한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3. 산술 연산자

산술 연산자에는 사칙 연산자(+, -, \*, /)와 나머지 연산자(%)가 있다. 사칙연산은 일상생 활에서 자주 사용하는 익숙한 것이라 그리 어렵지 않을 것이다. 다만 몇 가지 주의할 사항 들이 있는데, 그 것들을 중심으로 설명할 것이다.

## 3.1 사칙 연산자 + - \* /

사칙 연산자, 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)은 아마도 프로그래밍에 가장 많이 사 용되는 연산자들 일 것이다. 여러분들이 이미 알고 있는 것처럼 곱셈(*), 나눗셈(/), 나머 지(%) 연산자가 덧셈(+), 뺄셈(-)연산자보다 우선순위가 높으므로 먼저 처리된다.<br>그리고 피연산자가 정수형인 경우, 나누는 수로 0을 사용할 수 없다. 만일 0으로 나눈다 면, 실행 시에 에러가 발생할 것이다.

- 예제 3-5/OperatorEx5.java

```txt
class OperatorEx5 {
    public static void main(String args[]) {
        int a = 10;
        int b = 4;
        System.out.printf("%d + %d = %d%n", a, b, a + b);
        System.out.printf("%d - %d = %d%n", a, b, a - b);
        System.out.printf("%d * %d = %d%n", a, b, a * b);
        System.out.printf("%d / %d = %d%n", a, b, a / b);
        System.out.printf("%d / %f = %f%n", a, (float)b, a / (float)b);
    }
}
```

$$
\begin{aligned}
& 10+4=14 \\
& 10-4=6 \\
& 10 \star 4=40 \\
& 10 / 4=2 \\
& 10 / 4.000000=2.500000
\end{aligned}
$$

- 실행결과

두 변수 a와 b에 각각 10과 4를 저장하여 사칙연산을 수행하고 그 결과를 출력하는 예제 이다. 한 가지 눈여겨볼 것은 10 을 4 로 나눈 결과가 2.5 가 아닌 2 라는 것이다.

```txt
int int int
10 / 4 → 2 // 소수저ᄆ 이하느ᄂ 버려지ᄂ다.
```

나누기 연산자의 두 피연산자가 모두 int타입인 경우, 연산결과 역시 int타입이다. 그래서 실제 연산결과는 2.5일지라도 int타입의 값인 2를 결과로 얻는다. int타입은 소수점을 저 장하지 못하므로 정수만 남고 소수점 이하는 버려지기 때문이다. 이 때, 반올림이 발생하 지 않는다는 것에 주의하자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그래서 올바른 연산결과를 얻기 위해서는 두 피연산자 중 어느 한 쪽을 실수형으로 형변 환해야 한다. 그래야만 다른 한 쪽도 같이 실수형으로 자동 형변환되어 결국 실수형의 값 을 결과로 얻는다.

```txt
int float float float float
10 / 4.0f → 10.0f / 4.0f → 2.5f
```

위의 연산과정을 보면, 두 피연산자의 타입이 일치하지 않으므로 int타입보다 범위가 넓은 float타입으로 일치시킨 후에 연산을 수행하는 것을 알 수 있다. 이제 float타입과 float타 입의 연산이므로 연산결과 역시 float타입이다.

```txt
System.out.println(3/0); // 시ᄅ해ᄋ하며ᄂ, 오류(ArithmeticException) 바ᄅ새ᄋ!!!
System.out.println(3/0.0); // Infinity가 추ᄅ려ᄀ되ᄆ
```

그리고 피연산자가 정수형인 경우, 나누는 수로 0을 사용할 수 없다. 만일 0으로 나누면, 컴파일은 정상적으로 되지만 실행 시 오류(ArithmeticException)가 발생한다.<br>부동 소수점값인 0.0f, 0.0d로 나누는 것은 가능하지만 그 결과는 Infinity(무한대)이다. 나눗셈 연산자’/‘와 나머지 연산자’%’의 피연산자가 무한대(Infinity) 또는 0.0인 경우의 결과를 표로 정리해 놓았다. 그리 중요한 것은 아니니까 참고만 하자.

I 참고 I NaN은 ’Not a Number’를 줄인 것으로, 숫자가 아니라는 뜻이다.

| x | y | x / y | x % y |
| --- | --- | --- | --- |
| 유한수 | $\pm 0.0$ | ±Infinity | NaN |
| 유한수 | ±Infinity | $\pm 0.0$ | x |
| $\pm 0.0$ | $\pm 0.0$ | NaN | NaN |
| ±Infinity | 유한수 | ±Infinity | NaN |
| ±Infinity | ±Infinity | NaN | NaN |

- 표3-6 피연산자가 유한수가 아닌 경우의 연산결과
- 예제3-6/OperatorEx6.java

```txt
class OperatorEx6 {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 20;
        커ᄆ파이ᄅ 에러가 바ᄅ새ᄋ하ᄂ다.
        byte c = a + b;
        System.out.println(c);
        byte c = (byte) (a+b);
```

\}<br>\}

- 실행결과

```txt
    OperatorEx6.java:5: error: incompatible types: possible
    lossy conversion from int to byte
        byte c = a + b;
            ^
        1 error
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이 예제를 컴파일하면 위와 같은 에러가 발생한다. 발생한 위치는 5 번째 줄이다. a와 b는 모두 int형보다 작은 byte형이기 때문에 연산자’+’는 이 두 개의 피연산자들의 자료형을 int형으로 변환한 다음 연산(덧셈)을 수행한다.

그래서 ’a+b’의 연산결과는 byte형이 아닌 int형(4 byte)인 것이다. 4 byte의 값을 1 byte의 변수에 형변환없이 저장하려고 했기 때문에 에러가 발생하는 것이다.

크기가 작은 자료형의 변수를 큰 자료형의 변수에 저장할 때는 자동으로 형변환(type conversion, casting)되지만, 반대로 큰 자료형의 값을 작은 자료형의 변수에 저장하려면 명시적으로 형변환 연산자를 사용해서 변환해주어야 한다.<br>예제의 5번째 줄 ’byte c = a + b;’를 ’byte c = (byte)(a + b);’와 같이 변경해야 컴파일 에러가 발생하지 않는다.

- 예제3-7/OperatorEx7.java

```txt
class OperatorEx7 {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 30;
        byte c = (byte) (a * b);
        System.out.println(c);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-135_114_192_1157_1436.jpg -->

이 예제를 실행하면 44가 화면에 출력된다. ‘10\* 30’의 결과는 300이지만, 형변환(캐스 팅, casting)에서 배운 것처럼, 큰 자료형에서 작은 자료형으로 변환하면 데이터의 손실이 발생하므로 값이 바뀔 수 있다. 300은 byte형의 범위를 넘기 때문에 byte형으로 변환하면 데이터 손실이 발생하여 결국 44가 byte형 변수 c에 저장된다.<br>아래의 표3-7에서 알 수 있듯이 byte형(1 byte)에서 int형(4 byte)으로 변환하는 것은 2진수 8자리에서 32자리로 변환하는 것이기 때문에 자료 손실이 일어나지 않는다. 원래 8 자리는 그대로 보존하고 나머지는 모두 0으로 채운다. 음수인 경우에는 부호를 유지하기 위해 0 대신 1 로 채운다.<br>반대로 int형을 byte형으로 변환하는 경우 앞의 24자리를 없애고 하위 8자리(1 byte)만 을 보존한다. 저장된 값이 10인 경우 값이 작아서 상위 24자리를 잘라내도 원래 값을 유지 하는데 지장이 없지만, byte형의 범위인’-128~127’의 범위를 넘는 int형의 값을 byte형 으로 변환하면, 원래의 값이 보존되지 않고 byte형의 범위 중 한 값을 가지게 된다. 이러 한 값 손실을 예방하기 위해서는 충분히 큰 자료형을 사용해야 한다.

| 변환 | 2진수 | 10진수 | 값손실 |
| --- | --- | --- | --- |
| byte↓int |  | 10  10 | 없음 |
| int↓byte |  | 300  44 | 있음 |

- 표3-7 byte와 int 간의 형변환

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 3-8/OperatorEx8.java

```txt
class OperatorEx8 {
    public static void main(String args[]) {
        int a = 1_000_000; // 1,000,000 1배마ᄂ
        int b = 2_000_000; // 2,000,000 2배마ᄂ
        long c = a * b; // a * b = 2,000,000,000,000 ?
        System.out.println(c);
        > 시ᄅ해ᄋ겨ᄅ과
    }
        -1454759936
}
```

식 ’a \* b’의 결과 값을 담는 변수 c의 자료형이 long타입(8 byte)이기 때문에 $2 \times 10^{12}$ 을 저장하기에 충분하므로 ’2000000000000’이 출력될 것 같지만, 결과는 전혀 다른 값이 출 력된다.<br>그 이유는 int타입과 int타입의 연산결과는 int타입이기 때문이다. ’a \* b’의 결과가 이미 int타입의 값(-1454759936)이므로 long형으로 자동 형변환되어도 값은 변하지 않는다.

```txt
        long c = a * b;
    → long c = 1000000 * 2000000;
    → long c = -1454759936;
```

올바른 결과를 얻으려면 아래와 같이 변수 a 또는 b의 타입을 ’long’으로 형변환해야 한다.

```txt
        long c = (long)a * b;
    → long c = (long)1000000 * 2000000;
    → long C = 100000OL * 2000000;
    → long c = 1000000L * 2000000L;
    → long c = 2000000000000L;
```

- 예제3-9/OperatorEx9.java

```txt
class OperatorEx9 {
    public static void main(String args[]) {
        long a = 1_000_000 * 1_000_000;
        long b = 1_000_000 * 1_000_000L;
        System.out.println("a="+a);
        System.out.println("b="+b);
    }
}
```

$$
\begin{aligned}
& a=-727379968 \\
& b=1000000000000
\end{aligned}
$$

이 예제는 예제3-8과 비슷한 내용의 예제인데, ’1000000\* 1000000’의 결과가 $10^{12}$ 임에 도 불구하고, -727379968이라는 결과가 출력되었다. 그 이유는 int타입과 int타입의 연 산결과는 int타입인데, 연산결과가 int타입의 최대값인 약 $2 \times 10^{9}$ 을 넘으므로 오버플로우 (overflow)가 발생했기 때문이다. 이미 오버플로우가 발생한 값을 아무리 long타입의 변 수에 저장을 해도 소용이 없다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

int int int<br>1000000 \* 1000000 → - 727379968 오버플로우 발생!!!

$$
\begin{array}{cccccc}
\text { int } & \text { long } & \text { long } & \text { long } & \text { long } \\
1000000 & * & 1000000 \mathrm{~L} & \rightarrow & 1000000 \mathrm{~L} & * \\
10000000 \mathrm{~L} & \rightarrow & 1000000000000 \mathrm{~L}
\end{array}
$$

그러나 ’1000000\* 1000000L’은 int타입과 long타입의 연산이기 때문에 그 결과가 long타입이다. long타입은 연산결과인 $10^{12}$ 을 저장할 수 있는 타입이므로 올바른 결과를 얻을수 있다.

- 예제 3-10/OperatorEx10.java

```txt
class OperatorEx10 {
    public static void main(String args[]) {
        int a = 1000000;
        int result1 = a * a / a; // 1000000 * 1000000 / 1000000
        int result2 = a / a * a; // 1000000 / 1000000 * 1000000
        System.out.printf("%d * %d / %d = %d%n", a, a, a, result1);
        System.out.printf("%d / %d * %d = %d%n", a, a, a, result2);
    }
}
```

- 실행결과

```txt
1000000 * 1000000 / 1000000 = -727
1000000 / 1000000 * 1000000 = 1000000
```

1,000,000에 1,000,000을 먼저 곱한 후에 나누는 것과 먼저 나눈 후에 곱하는 것의 연산결과가 다르다는 것을 알 수 있다. 먼저 곱하는 경우 int의 범위를 넘어서기 때문에 예상했던 것과 다른 결과가 나왔다.

```txt
        1000000 * 1000000 / 1000000
    → -727379968 / 1000000 오버프ᄅ로우 바ᄅ새ᄋ!!!
    → -727
        1000000 / 1000000 * 1000000
    → 1 * 1000000
    → 1000000
```

이처럼 같은 의미의 식이라도 연산의 순서에 따라서 다른 결과를 얻을 수 있다는 것에 주의하자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 3-11/OperatorEx11.java

```txt
class OperatorEx11 {
    public static void main(String args[]) {
        char a = 'a';
        char d = 'd';
        char zero = '0';
        char two = '2';
        System.out.printf("'%c' - '%c' = %d%n", d, a, d - a); // 'd'-'a'=3
        System.out.printf("'%c' - '%c' = %d%n", two, zero, two - zero);
        System.out.printf("'%c'=%d%n", a, (int)a);
        System.out.printf("'%c'=%d%n", d, (int)d);
        System.out.printf("'%c'=%d%n", zero, (int)zero);
        System.out.printf("'%c'=%d%n", two, (int)two);
    }
}
```

```txt
'd' - 'a' = 3
'2' - '0' = 2
'a'=97
'd'=100
'0'=48
'2'=50
```

사칙연산의 피연산자로 숫자뿐만 아니라 문자도 가능하다. 문자는 실제로 해당 문자의 유 니코드(부호없는 정수)로 바뀌어 저장되므로 문자간의 사칙연산은 정수간의 연산과 동일 하다. 주로 문자간의 뺄셈을 하는 경우가 대부분이며, 문자 ’ 2 ’를 숫자로 변환하려면 다음 과 같이 문자 ’0’을 빼주면 된다.

$$
\text { '2' - '0' → } 50-48 \text { → } 2
$$

문자 ‘2’의 유니코드는 50이고, 문자 ’0’은 48이므로, 두 문자간의 뺄셈은 2를 결과로 얻는 다. 아래의 표는 유니코드의 일부인데,’ 0 ’ ~ 9’까지의 문자가 연속적으로 배치되어 있는 것 을 알 수 있다. 그렇기 때문에 해당 문자에서 ’ $O$ ’을 빼주면 숫자로 변환되는 것이다.

| 문자 | 코드 | 문자 | 코드 | 문자 | 코드 |
| --- | --- | --- | --- | --- | --- |
| 0 | 48 | A | 65 | a | 97 |
| 1 | 49 | B | 66 | b | 98 |
| 2 | 50 | C | 67 | c | 99 |
| 3 | 51 | D | 68 | d | 100 |
| 4 | 52 | E | 69 | e | 101 |
| 5 | 53 | … | … | … | … |
| 6 | 54 | W | 87 | w | 119 |
| 7 | 55 | X | 88 | x | 120 |
| 8 | 56 | Y | 89 | y | 121 |
| 9 | 57 | Z | 90 | z | 122 |

- 표3-8 숫자와 영문자의 유니코드

‘A’~‘Z’와 ’a’~‘z’ 역시 연속적으로 배치되어 있기 때문에, 문자 ’d’에서 문자 ’a’를 빼면 다 음과 같이 처리된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 3-12/OperatorEx12.java

```txt
class OperatorEx12 {
    public static void main(String[] args) {
        char c1 = 'a'; // c1에느ᄂ 무ᄂ자 'a'의 코드가ᄡ이ᄂ 97이 저자ᄋ되ᄂ다.
        char c2 = c1; // c1에 xᅥ자ᄋ되어 이ᄊ느ᄂ 가ᄡ이 c2에 저자ᄋ되ᄂ다.
        char c3 =' '; // c3르ᄅ 고ᄋ배ᄀ으로 초기화 하ᄂ다.
        int i = c1 + 1; // 'a'+1 → 97+1 → 98
        c3 = (char) (c1 + 1);
        c2++;
        c2++;
```

```txt
    System.out.println("i=" + i);
    System.out.println("c2=" + c2);
    System.out.println("c3=" + c3);
    }
}
```

- 실행결과

```txt
i=98
c2=c
c3=b
```

’c1+1’을 계산할 때, c1이 char형이므로 int형으로 변환한 후 덧셈연산을 수행하게 된다. c1에 저장되어 있는 코드값이 변환되어 int형 값이 되는 것이다. 따라서 ’c1+1’은 ’97+1’이 되고 결과적으로 int형 변수 i에는 98이 저장된다.<br>’c2++’은 형변환없이 c2에 저장되어 있는 값을 1 증가시키므로, 예제에서는 원래 저장 되어 있던 값인 97이 1씩 두 번 증가되어 99가 된다. 코드값이 10진수로 99인 문자는 ’c’이 다. 따라서 c2를 출력하면, ’c’가 화면에 나타나는 것이다.

I 참고 I c2++;대신에 c2=c2+1;을 사용하면 에러가 발생할 것이다. c2+1의 연산결과는 int형이며, 그 결과를 다시 c2에 담으 려면 형변환 연산자를 사용하여 char형으로 형변환해야 하기 때문이다.

- 예제 3-13/OperatorEx13.java

```txt
class OperatorEx13 {
    public static void main(String[] args) {
        char c1 = 'a';
// char c2 = c1+1; // 라이ᄂ 5 : 커ᄆ파이ᄅ 에러바ᄅ새ᄋ!!!
        char c2 = 'a'+1; // 라이ᄂ 6 : 커ᄆ파이ᄅ 에러어ᄡ으ᄆ
        System.out.println(c2);
    }
}
```

이 예제를 컴파일 하면 오류가 발생하지 않고 실행도 올바른 결과를 얻는다. 덧셈 연산자 와 같은 이항 연산자는 int보다 작은 타입의 피연산자를 int로 자동 형변환한다고 배웠는 데, 어째서 아래의 코드처럼 형변환을 해주지 않고도 문제가 없는 것일까?

```txt
    char c2 = (char) ('a'+1);
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그것은 바로 ‘a’+1이 리터럴 간의 연산이기 때문이다. 상수 또는 리터럴 간의 연산은 실행 과정동안 변하는 값이 아니기 때문에, 컴파일 시에 컴파일러가 계산해서 그 결과로 대체 함으로써 코드를 보다 효율적으로 만든다.<br>표3-9에서 알 수 있듯이 컴파일러가 미리 덧셈연산을 수행하기 때문에 실행 시에는 덧 셈 연산이 수행되지 않는다. 그저 덧셈연산결과인 문자 ’b’를 변수 c2에 저장할 뿐이다.

| 컴파일 전의 코드 | 컴파일 후의 코드 |
| --- | --- |
| char c2 = ‘a’+1;  int sec $=60$ \* 60 \* 24; | char c2 = ‘b’;  int sec = 86400; |

A 표3-9 컴파일러에 의해서 최적화된 코드의 비교

그러나 라인 5와 같이 수식에 변수가 들어가 있는 경우에는 컴파일러가 미리 계산을 할 수 없기 때문에 아래의 오른쪽 코드와 같이 형변환을 해주어야 한다. 그렇지 않으면 컴파일 에러가 발생한다.

```txt
char c2 = c1 + 1; char c2 = (char) (c1+1);
```

일부러 뻔 한 리터럴 연산을 풀어쓸 필요는 없지만, 코드의 가독성과 유지보수를 위해서 그렇게 하는 경우가 있다. 표3-9에서 int타입의 변수 sec에 하루(day)를 초(秒, second) 단위로 변환한 값을 저장하는 코드를 보면, ’86400’이라는 값보다는 ’60*60*24’와 같이 적어주는 것이 이해하기도 쉽고 오류가 발생할 여지가 적다. 나중에 반나절(12시간)로 값 을 변경해야한다면 계산할 필요없이 ’60*60*12’로 변경하면 되기 때문이다. 이렇게 풀어 써도 결국 컴파일러에 의해서 미리 계산되기 때문에 실행 시의 성능차이는 없다.

- 예제 3-14/OperatorEx14.java

```txt
class OperatorEx14 {
    public static void main(String[] args) {
        char c = 'a';
        for(int i=0; i<26; i++) { // 브ᄅ러ᄀ{} 아ᄂ의 무ᄂ자ᄋ으ᄅ 26버ᄂ으ᄅ 바ᄂ보ᄀ하ᄂ다.
            System.out.print(c++); //'a'부터 26개의 무ᄂ자르ᄅ 추ᄅ려ᄀ하ᄂ다.
        }
        System.out.println(); // 주ᄅ바꾸ᄆ으ᄅ 하ᄂ다.
        c = 'A';
        for(int i=0; i<26; i++) { // 브ᄅ러ᄀ{} 아ᄂ의 무ᄂ자ᄋ으ᄅ 26버ᄂ으ᄅ 바ᄂ보ᄀ하ᄂ다.
            System.out.print(c++); //'A'부터 26개의 무ᄂ자르ᄅ 추ᄅ려ᄀ하ᄂ다.
        }
        System.out.println();
        c='0';
        for(int i=0; i<10; i++) { // 브ᄅ려ᄀ{} 아ᄂ의 무ᄂ자ᄋ으ᄅ 10버ᄂ으ᄅ 바ᄂ보ᄀ하ᄂ다.
            System.out.print(c++); //'0'부터 10개의 무ᄂ자르ᄅ 추ᄅ려ᄀ하ᄂ다.
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        }
        System.out.println();
    }
}
```

```txt
> 시ᄅ해ᄋ겨ᄅ과
    abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789
```

I 참고 I printIn메서드는 값을 출력하고 줄을 바꾸지만, print메서드는 줄을 바꾸지 않고 출력한다. 매개변수없이 printIn메서 드를 호출하면, 아무 것도 출력하지 않고 단순히 줄을 바꾸고 다음 줄의 처음으로 출력위치를 이동시킨다.

위의 예제를 실행하면, 문자 a부터 시작해서 26개의 문자를 출력하고, 또 문자 A부터 시작해서 26개의 문자, 0부터 9까지 10개의 문자를 출력한다. 소문자 a부터 z까지, 그리고대문자 A부터 Z까지, 숫자 0부터 9까지 연속적으로 코드가 지정되어 있기 때문에 이런 결과가 나타난다.<br>문자 a의 코드값은 10진수로 97, b의 코드값은 98, c의 코드값은 99, … , z의 코드값은122이며, 문자 A의 코드값은 10진수로 65, B의 코드값은 66, C의 코드값은 67, …, Z의코드값은 90이다. 그리고 문자 0의 코드값은 10진수로 48이다.<br>이 사실을 이용하면 대문자를 소문자로 소문자를 대문자로 변환하는 프로그램을 작성할수 있다.

I 참고 I 대문자와 소문자 간의 코드값 차이는 10진수로 32이다.

```txt
- 예제 3-15/OperatorEx15.java
class OperatorEx15 {
    public static void main(String[] args) {
        char lowerCase = 'a';
        char upperCase = (char) (lowerCase - 32);
        System.out.println(upperCase);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-141_112_191_1524_1438.jpg -->

소문자를 대문자로 변경하려면, 대문자 A가 소문자 a보다 코드값이 32가 적으므로 소문자 a의 코드값에서 32를 빼면 되고, 반대로 대문자를 소문자로 변환하려면 대문자의 코드값에 32를 더해주면 된다.

I 참고 I char형과 int형 간의 뺄셈연산 결과는 int형이므로, 연산 후 char형으로 다시 형변환해야 한다는 것을 잊지 말자.

```txt
- 예제 3-16/OperatorEx16.java
class OperatorEx16 {
    public static void main(String[] args) {
        float pi = 3.141592f;
        float shortPi = (int) (pi * 1000) / 1000f;
        System.out.println(shortPi);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-141_114_193_2223_1436.jpg -->

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

int형 간의 나눗셈 ‘int / int’를 수행하면 결과가 float나 double이 아닌 int임에 주의하라.그리고 나눗셈의 결과를 반올림을 하는 것이 아니라 버린다는 점도 꼭 기억하자. 예를 들어’ 3 / 2’의 결과는 1.5 또는 2가 아니라 1이다.<br>이 예제는 나눗셈 연산자의 이러한 성질을 이용해서 실수형 변수 pi의 값을 소수점 셋째자리까지만 빼내는 방법을 보여 준다.

```txt
(int) (pi * 1000) / 1000f;
```

위의 수식에서 제일 먼저 수행되는 것은 괄호 안의 ’pi \* 1000’이다. pi가 float이고 1000이 정수형이니까 연산의 결과는 float인 3141.592f가 된다.

```txt
(int) (3141.592f) / 1000f;
```

그 다음으로는 단항연산자인 형변환 연산자의 형변환이 수행된다. 3141.592f를 int로 변 환하면 3141을 얻는다. 소수점 이하는 반올림 없이 버려진다.

```txt
3141 / 1000f;
```

int와 float의 연산이므로, int가 float로 변환된 다음, float와 float의 연산이 수행된다.

```txt
3141.0f / 1000f → 3.141f
```

float와 float의 나눗셈이므로 결과는 float인 3.141f가 된다.<br>I 참고 I 1000f는 1000.0f와 같다.

그렇다면 버림이 아닌 반올림이 되도록 하려면 어떻게 해야 할까? 다음 예제가 그 방법을알려준다.

```txt
- 예제 3-17/OperatorEx17.java
```

```txt
class OperatorEx17 {
    public static void main(String args[]) {
        double pi = 3.141592;
        double shortPi = (int) (pi * 1000 + 0.5) / 1000.0;
        System.out.println(shortPi);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-142_114_191_1951_1259.jpg -->

이 예제는 소수점 넷째자리에서 반올림하는 방법을 보여준다. 이전 예제와 다른 점은 반올림을 위해 0.5 를 더해 준다는 것이다.

```txt
    (int) (pi * 1000 + 0.5) / 1000.0
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

위의 수식에서 제일 먼저 수행되는 것은 괄호 안의 ’pi \* 1000’이다. pi가 double이고 1000이 정수형이니까 연산의 결과는 double인 3141.592가 된다. 그리고 여기에 0.5를 더 하면 3142.092가 된다.

```txt
    (int) (3141.592 + 0.5) / 1000.0
→ (int) (3142.092) / 1000.0
```

그 다음엔 형변환 연산자에 의해서 형변환되어 3142.092 가 3142 가 된다.

```txt
3142 / 1000.0
```

int와 double의 연산이므로, int가 double로 변환된 다음, double과 double의 연산이 수 행된다.

```txt
3142.0 / 1000.0 → 3.142
```

double과 double의 나눗셈이므로 결과는 double인 3.142가 된다. 만일 1000.0이 아닌 1000으로 나누었다면, 3.142가 아닌 3을 결과로 얻었을 것이다.<br>Math.round()를 사용하면 좀 더 간단히 반올림할 수 있다. 다음의 예제는 이 메서드의 사용법을 알려준다.

```txt
 예제 3-18/OperatorEx18.java
class OperatorEx18 {
    public static void main(String args[]) {
        double pi = 3.141592;
        double shortPi = Math.round(pi * 1000) / 1000.0;
        System.out.println(shortPi);
    }
}
```

이 예제의 결과는 pi의 값을 소수점 넷째 자리인 5에서 반올림을 해서 3.142가 출력되었 다. round메서드는 매개변수로 받은 값을 소수점 첫째자리에서 반올림을 하고 그 결과를 정수로 돌려주는 메서드이다. 그래서 Math.round(3141.592)의 결과는 3142이다.

```txt
    Math.round(pi * 1000) / 1000.0
→ Math.round(3.141592 * 1000) / 1000.0
→ Math.round(3141.592) / 1000.0
→ 3142 / 1000.0
→ 3.142
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.2 나머지 연산자 %

나머지 연산자는 왼쪽의 피연산자를 오른쪽 피연산자로 나누고 난 나머지 값을 결과로 반환하는 연산자이다. 그리고 나눗셈에서처럼 나누는 수(오른쪽 피연산자)로 0을 사용할 수없다는 점에 주의하자. 나머지 연산자는 주로 짝수, 홀수 또는 배수 검사 등에 주로 사용된다.

- 예제3-19/OperatorEx19.java

```txt
class OperatorEx19 {
    public static void main(String args[]) {
        int x = 10;
        int y = 8;
        System.out.printf("%d으ᄅ %d로 나누며ᄂ, %n", x, y);
        System.out.printf("몫으ᄂ %d이고, 나머지느ᄂ %d이ᄇ니다.%n", x / y, x % y);
    }
}
```

- 실행결과

```txt
10으ᄅ 8로 나누며ᄂ,
몫으ᄂ 1이고, 나머지느ᄂ 2이ᄇ니다.
```

나눗셈 연산자와 나머지 연산자를 이용해서 몫과 나머지를 구하는 예제이다. 간단한 예제라서 따로 설명하지 않아도 이해하는 데 어려움이 없을 것이다.

```txt
class OperatorEx20 {
    public static void main(String[] args) {
        System.out.println(-10%8);
        System.out.println(10%-8);
        System.out.println(-10%-8);
    }
}
```

- 예제3-20/OperatorEx20.java<br>\| - 실행결과 \|<br>\| :— \|<br>\| -2 \|<br>\| 2 \|<br>\| -2 \|

나머지 연산자(%)는 나누는 수로 음수도 허용한다. 그러나 부호는 무시되므로 결과는 음수의 절대값으로 나눈 나머지와 결과가 같다.

```txt
    System.out.println(10% 8); // 10으ᄅ 8로 나누ᄂ 나머지 2가 추ᄅ려ᄀ되ᄂ다.
    System.out.println(10%-8); // 위와 가ᄐ으ᄂ 겨ᄅ과르ᄅ 어ᄃ느ᄂ다.
```

그냥 피연산자의 부호를 모두 무시하고, 나머지 연산을 한 결과에 왼쪽 피연산자(나눠지는 수)의 부호를 붙이면 된다.<br>［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

## 4．비교 연산자

비교 연산자는 두 피연산자를 비교하는 데 사용되는 연산자다．주로 조건문과 반복문의 조건식에 사용되며，연산결과는 오직 true와 false 둘 중의 하나이다．

비교 연산자 역시 이항 연산자이므로 비교하는 피연산자의 타입이 서로 다를 경우에는 자료형의 범위가 큰 쪽으로 자동 형변환하여 피연산자의 타입을 일치시킨 후에 비교한다 는 점에 주의하자．

## 4.1 대소비교 연산자＜＞＜＝＞＝

두 피연산자의 값의 크기를 비교하는 연산자이다．참이면 true를，거짓이면 false를 결과 로 반환한다．기본형 중에서는 boolean형을 제외한 나머지 자료형에 다 사용할 수 있지만 참조형에는 사용할 수 없다．

| 비교연산자 | 연산결과 |
| --- | --- |
| 〉 | 좌변 값이 크면，true 아니면 false |
| 〈 | 좌변 값이 작으면，true 아니면 false |
| ＞＝ | 좌변 값이 크거나 같으면，true 아니면 false |
| 〈＝ | 좌변 값이 작거나 같으면，true 아니면 false |

A 표3－10 대소비교 연산자의 종류와 연산결과

## 4.2 등가비교 연산자＝＝！＝

두 피연산자의 값이 같은지 또는 다른지를 비교하는 연산자이다．대소비교 연산자（〈，〉，〈＝，〉＝）와는 달리，기본형은 물론 참조형，즉 모든 자료형에 사용할 수 있다．기본형의 경 우 변수에 저장되어 있는 값이 같은지를 알 수 있고，참조형의 경우 객체의 주소값을 저장 하기 때문에 두 개의 피연산자（참조변수）가 같은 객체를 가리키고 있는지를 알 수 있다．<br>기본형과 참조형은 서로 형변환이 가능하지 않기 때문에 등가비교 연산자（＝＝，！＝）로 기 본형과 참조형을 비교할 수 없다．

| 비교연산자 | 연산결과 |
| --- | --- |
| ＝ | 두 값이 같으면，true 아니면 false |
| ！＝ | 두 값이 다르면，true 아니면 false |

－표3－11 등가비교 연산자의 종류와 연산결과

비교연산자는 수학기호와 유사한 기호와 의미를 가지고 있으므로 이해하는데 별 어려움 이 없을 것이다．한 가지 다른 점은＇두 값이 같다＇는 의미로＇＝＇가 아닌＇＝＝＇를 사용한다는 것인데，＇＝＇는 이미 배운 것과 같이 변수에 값을 저장할 때 사용하는＇대입연산자＇이기 때문 에＇＝＝＇로 두 값이 같은지 비교하는 연산자를 표현한다．

I 주의 I＇＞＝＇와 같이 두 개의 기호로 이루어진 연산자는＇＝＞＇와 같이 기호의 순서를 바꾸거나＇＞＝＇와 같이 중간에 공백이 들 어가면 안 된다．

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
class OperatorEx21 {
    public static void main(String args[]) {
        System.out.printf("10 == 10.0f \t %b%n", 10==10.0f);
        System.out.printf("'0'== 0 \t %b%n", '0'== 0);
        System.out.printf("'A'== 65 \t %b%n", 'A'== 65);
        System.out.printf("'A' > 'B' \t %b%n", 'A' > 'B');
        System.out.printf("'A'+1 != 'B' \t %b%n", 'A'+1 != 'B');
    }
}
```

- 예제 3-21/OperatorEx21.java<br>\| - 실행결과 \| \|<br>\| :— \| :— \|<br>\| 10 == 10.0f \| true \|<br>\| ‘0’== 0 \| false \|<br>\| ‘A’== 65 \| true \|<br>\| ‘A’ > ‘B’ \| false \|<br>\| ‘A’+1 != ‘B’ \| fals \|

비교 연산자도 이항 연산자이므로 연산을 수행하기 전에 형변환을 통해 두 피연산자의 타입을 같게 맞춘 다음 피연산자를 비교한다. $10==10$. Of에서 10은 int타입이고 10.0f는 float타입이므로, 10을 float로 변환한 다음에 비교한다. 두 값이 10.0f로 같으므로 결과 로 true를 얻게 된다.

$$
\begin{array}{ll}
10 & ==10.0 \mathrm{f} \\
\rightarrow 10.0 \mathrm{f} & ==10.0 \mathrm{f} \\
\rightarrow \text { true } &
\end{array}
$$

문자 ’A’의 유니코드는 10진수로 65이고, ’B’는 66, ’0’은 48이므로 나머지 식들은 다음과 같은 과정으로 연산된다.

$$
\begin{gathered}
{ }^{\prime} 0^{\prime}=0 \rightarrow 48=6 \rightarrow \text { false } \\
{ }^{\prime} \mathrm{A}^{\prime}=65 \rightarrow 65=65 \rightarrow \text { true } \\
{ }^{\prime} \mathrm{A}^{\prime}>{ }^{\prime} \mathrm{B}^{\prime} \rightarrow 65>66 \rightarrow \text { false } \\
{ }^{\prime} \mathrm{A}^{\prime}+1 \quad!={ }^{\prime} \mathrm{B}^{\prime} \rightarrow 65+1 \quad!=66 \rightarrow 66!=66 \rightarrow \text { false }
\end{gathered}
$$

- 예제 3-22/OperatorEx22.java

```txt
class OperatorEx22 {
    public static void main(String args[]) {
        float f = 0.1f;
        double d = 0.1;
        double d2 = (double)f;
        System.out.printf("10.0==10.0f %b%n", 10.0==10.0f);
        System.out.printf("0.1==0.1f %b%n", 0.1==0.1f);
        System.out.printf("f =%19.17f%n", f);
        System.out.printf("d =%19.17f%n", d);
        System.out.printf("d2=%19.17f%n", d2);
```

```txt
    System.out.printf("d==f %b%n", d==f);
    System.out.printf("d==d2 %b%n", d==d2);
    System.out.printf("d2==f %b%n", d2==f);
    System.out.printf("(float)d==f %b%n",
        (float) d==f);
    }
}
```

- 실행결과

```txt
10.0==10.0f true
0.1==0.1f false
f =0.10000000149011612
d =0.10000000000000000
d2=0.10000000149011612
d==f false
d==d2 false
d2==f true
(float) d==f true
```

이 예제의 결과를 보고 다소 혼란스러울 것이다. ’10.0==10.0f’는 true인데 ’0.1==0.1f’는 false라니 이해하기 어렵다. 왜 이런 결과를 얻는 것일까? 그것은 정수형과 달리 실수형은 근사값으로 저장되므로 오차가 발생할 수 있기 때문이다.<br>10.0f는 오차없이 저장할 수 있는 값이라서 double로 형변환해도 그대로 10.0이 되지만, 0.1f는 저장할 때 2진수로 변환하는 과정에서 오차가 발생한다. double타입의 상수인 0.1 도 저장되는 과정에서 오차가 발생하지만, float타입의 리터럴인 0.1f보다 적은 오차로 저 장된다.

```txt
float f = 0.1f; // f에 0.10000000149011612로 저자ᄋ되ᄂ다.
double d = 0.1; // doᅦ 0.10000000000000001로 저자ᄋ되ᄂ다.
```

이미 앞서 배운 것처럼 float타입의 값을 double타입으로 형변환하면, 부호와 지수는 달 라지지 않고 그저 가수의 빈자리를 0으로 채울 뿐이므로 0.1f를 double타입으로 형변환해 도 그 값은 전혀 달라지지 않는다. 즉, float타입의 값을 정밀도가 더 높은 double타입으 로 형변환했다고 해서 오차가 적어지는 것이 아니라는 애기다.

I 참고 I 그림3-3에서 지수부의 값도 달라진 것처럼 보이지만, float타입과 double타입의 기저(bias)의 차이에 의한 것일 뿐 달라지지 않았다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-147_142_1011_1688_487.jpg -->

- 그림3-3 float타입의 값을 double타입으로 변환

그래서 식 ’d==f’가 연산되는 과정을 단계별로 살펴보면 다음과 같다. 최종결과는 false이 다. 변수 f를 double타입으로 형변환해도 값이 변하지 않았음에 주목하자.

```txt
    d == f
→ d ==(double)f
→ 0.10000000000000001 == (double)0.10000000149011612
→ 0.10000000000000001 == 0.10000000149011612
→ false
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

마찬가지로 변수 d2에 변수 f의 값을 double로 형변환해서 저장해도, 직전에 설명한 것과 같이 f의 값이 그대로 d2에 저장된다. 그래서 ’d2==f’의 결과가 true가 되는 것이다.

```txt
    double d2 = (double)f;
→ double d2 = (double)0.10000000149011612;
→ double d2 = 0.10000000149011612;
    d2 == f
→ 0.10000000149011612 == 0.10000000149011612
→ true
```

그러면 float타입의 값과 double타입의 값을 비교하려면 어떻게 해야 하는 걸까? double 타입의 값을 float타입으로 형변환한 다음에 비교해야 한다. 그래야만 올바른 결과를 얻을 수 있다. 또는, 어느 정도의 오차는 무시하고 두 타입의 값을 앞에서 몇 자리만 잘라서 비 교할 수도 있다.

```txt
    (float) d == f
→ (float)0.10000000000000001 == 0.10000000149011612
→ 0.10000000149011612 == 0.10000000149011612
→ true
```

## 문자열의 비교

두 문자열을 비교할 때는, 비교 연산자 ’==’대신 equals()라는 메서드를 사용해야 한다. 비교 연산자는 두 문자열이 완전히 같은 것인지 비교할 뿐이므로, 문자열의 내용이 같은 지 비교하기 위해서는 equals( )를 사용하는 것이다. equals( )는 비교하는 두 문자열이 같 으면 true를, 다르면 false를 반환한다.

```txt
String str = new String("abc");
// equals()느ᄂ 두 무ᄂ자여ᄅ의 내요ᄋ이 가ᄐ으며ᄂ true, 다르며ᄂ false
boolean result = str.equals("abc"); // 내요ᄋ이 가ᄐ으므로 result에 true가 저자ᄋ되ᄆ
```

원래 String은 클래스이므로, 아래와 같이 new를 사용해서 객체를 생성해야한다.

```txt
String str = new String("abc"); // String크ᄅ래스의 개ᄀ체르ᄅ 새ᄋ서ᄋ
String str = "abc"; // 위의 무ᄂ자ᄋ으ᄅ 가ᄂ다ᄂ히 표혀ᄂ
```

그러나 특별히 String만 new를 사용하지 않고, 위와 같이 간단히 쓸 수 있게 허용한다. 위 두 문장은 거의 같지만, 한 가지 차이점이 있는데, 이에 대해서는 ’9장 java.lang패 키지와 유용한 클래스’에서 설명한다. 지금은 문자열을 비교할 때 비교 연산자가 아니라 equals( )를 사용해야한다는 것만 알면 된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 3-23/OperatorEx23.java

```txt
class OperatorEx23 {
    public static void main(String[] args) {
        String str1 = "abc";
        String str2 = new String("abc");
        System.out.printf("\"abc\"==\"abc\" ? %b%n", "abc"=="abc");
        System.out.printf(" str1==\"abc\" ? %b%n", str1=="abc");
        System.out.printf(" str2==\"abc\" ? %b%n", str2=="abc");
        System.out.printf("str1.equals(\"abc\") ? %b%n",
            str1.equals("abc"));
        System.out.printf("str2.equals(\"abc\") ? %b%n",
            str2.equals("abc"));
        System.out.printf("str2.equals(\"ABC\") ? %b%n",
            str2.equals("ABC"));
        System.out.printf("str2.equalsIgnoreCase(\"ABC\") ? %b%n",
            str2.equalsIgnoreCase("ABC"));
    }
}
```

- 실행결과

```txt
"abc"=="abc" ? true
    str1=="abc" ? true
    str2=="abc" ? false
str1.equals("abc") ? true
str2.equals("abc") ? true
str2.equals("ABC") ? false
str2.equalsIgnoreCase("ABC") ? true
```

str2와 “abc”의 내용이 같은데도 ’==’로 비교하면, false를 결과로 얻는다. 내용은 같지만서로 다른 객체라서 그렇다. 그러나 equals( )는 객체가 달라도 내용이 같으면 true를 반환한다. 그래서 문자열을 비교할 때는 항상 equals( )를 사용해야 한다는 것을 기억하자.<br>만일 대소문자를 구별하지 않고 비교하고 싶으면, equals( )대신 equalsIgnoreCase( )를사용하면 된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 5. 논리 연산자

’x가 4보다 작다’라는 조건은 비교연산자를 써서 ’x \< 4’와 같이 표현할 수 있다. 그러면, x 가 4보다 작거나 또는 10보다 크다’와 같이 두 개의 조건이 결합된 경우는 어떻게 표현해 야 할까? 이 때 사용하는 것이 ’논리 연산자’이다. 논리 연산자는 둘 이상의 조건을 ’그리 고(AND)’나 ’또는(OR)’으로 연결하여 하나의 식으로 표현할 수 있게 해준다.

## 5.1 논리 연산자 - &&, \|\|, !

논리 연산자 ‘&&’는 우리말로 ’그리고(AND)’에 해당하며, 두 피연산자가 모두 true일 때 만 true를 결과로 얻는다.’\|\|’는 ’또는(OR)’에 해당하며, 두 피연산자 중 어느 한 쪽만 true이어도 true를 결과로 얻는다. 그리고 논리 연산자는 피연산자로 boolean형 또는 boolean형 값을 결과로 하는 조건식만을 허용한다.<br>\|\| (OR결합) 피연산자 중 어느 한 쪽만 true이면 true를 결과로 얻는다.<br>&& (AND결합) 피연산자 양쪽 모두 true이어야 true를 결과로 얻는다.

I 참고 I ’\|’는 한글 키보드에서 Enter키의 바로 위에 있다.

논리 연산자의 피연산자가 ’참(true)인 경우’와 ’거짓(false)인 경우’의 연산결과를 표로 나 타내면 다음과 같다.

| x | y | x \|\| y | x && y |
| --- | --- | --- | --- |
| true | true | true | true |
| true | false | true | false |
| false | true | true | false |
| false | false | false | false |

A 표3-12 논리 연산자의 연산결과

이제 자주 사용될만한 몇 가지 예를 통해서 논리연산자가 실제로 어떻게 사용되고, 주의 해야 할 점은 어떤 것들이 있는지 살펴보자.

1. x는 10보다 크고, 20보다 작다.<br>’x > 10’와 ’x 〈 20’가 ’그리고(and)’로 연결된 조건이므로 다음과 같이 쓸 수 있다.

$$
x>10 \text { \&\& } x<20
$$

’x > 10’는 ’10 〈 x’와 같으므로 다음과 같이 쓸 수도 있다. 보통은 변수를 왼쪽에 쓰지만 이 런 경우 가독성측면에서 보면 아래의 식이 더 나을 수 있다.

$$
10<x \text { \&\& } x<20
$$

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그렇다고 해서 위의 식에서 논리연산자를 생략하고 ’10 \< x \< 20’과 같이 표현하는 것은 허용되지 않는다.

1. $i$ 는 2 의 배수 또는 3 의 배수이다.

어떤 수가 2의 배수라는 애기는 2로 나누었을 때 나머지가 0이라는 뜻이다. 그래서 나머 지연산의 결과가 0인지 확인하면 된다. ‘또는’으로 두 조건이 연결되었으므로 논리 연산자’\|\|’(OR)를 사용해야 한다.

$$
i \% 2==0 \quad \| \quad i \% 3==0
$$

i의 값이 8일 때, 위의 식은 다음과 같은 과정으로 연산된다.

$$
\begin{array}{lc} 
& \mathrm{i} \% 2==0 \\
\rightarrow & 8 \div 2==0 \\
\rightarrow & 0==0 \\
\rightarrow & \text { true || } 1 \mid 2=3=3=0 \\
\rightarrow & \text { true }
\end{array}
$$

1. i는 2의 배수 또는 3의 배수지만 6의 배수는 아니다.

이전 조건에 6의 배수를 제외하는 조건이 더 붙었다. 6의 배수가 아니어야 한다는 조건은 ‘i%6!=0’이고, 이 조건을’&&(AND)‘로 연결해야 한다.<br>( i %2==0 \|\| i%3==0 ) && i%6!=0<br>위의 식에 괄호를 사용한 이유는’&&‘가’\|\|‘보다 우선순위가 높기 때문이다. 만일 괄호를 사용하지 않으면’&&’를 먼저 연산한다. 다음의 두 식은 동일하다.

$$
\begin{array}{llcc}
i \% 2==0 & |\mid & i \% 3==0 & \& \& \\
i \% 2==0 & |\mid & (i \% 3==0 & \& \& \\
i \% 6!=0) &
\end{array}
$$

이처럼 하나의 식에 ‘&&’와’\|\|‘가 같이 포함된 경우,’&&가 먼저 연산되어야하는 경우라 도 괄호를 사용해서 우선순위를 명확히 해주는 것이 좋다.

1. 문자 ch는 숫자(‘0’~‘9’)이다.

사용자로부터 입력된 문자가 숫자(‘0’~‘9’)인지 확인하는 식은 다음과 같이 쓸 수 있다.

$$
' 0^{\prime}<=\text { ch \&\& ch <= '9' }
$$

유니코드에서 문자 ’0’부터 ’9’까지 연속적으로 배치되어 있기 때문에 가능한 식이다. 문자 ’0’부터 ’9’까지 유니코드는 10진수로 다음과 같다.

| 문자 | ‘0’ | ‘1’ | ‘2’ | ‘3’ | ‘4’ | ‘5’ | ‘6’ | ‘7’ | ‘8’ | ‘9’ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 문자코드 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 |

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그래서 ch의 값이 ’5’인 경우 위의 식은 다음과 같은 과정으로 연산된다.

$$
\begin{aligned}
& \quad{ }^{\prime} 0^{\prime}<=\text { ch \&\& } \quad \text { ch }<={ }^{\prime} 9^{\prime} \\
& \rightarrow{ }^{\prime} 0^{\prime}<={ }^{\prime} 5{ }^{\prime} \text { \&\& }{ }^{\prime} 5{ }^{\prime}<={ }^{\prime} 9^{\prime} \\
& \rightarrow \quad 48<=53 \text { \&\& } \quad 53<=57 \\
& \rightarrow \\
& \rightarrow \\
& \text { true \&\& true } \\
& \text { true }
\end{aligned}
$$

## (5) 문자 ch 는 대문자 또는 소문자이다.

(4)의 경우와 마찬가지로 문자 ‘a’부터 ’z’까지, 그리고 ’A’부터 ’Z’까지도 연속적으로 배치되어 있으므로 문자 ch가 대문자 또는 소문자’인지 확인하는 식은 다음과 같이 쓸 수 있다.<br>(’a’ \<= ch && ch \<= ‘z’) \|\| (‘A’ \<= ch && ch \<= ‘Z’)

이제 예제를 통해서 직접 확인해보자.

- 예제3-24/OperatorEx24.java

```txt
class OperatorEx24 {
    public static void main(String args[]) {
        int x = 0;
        char ch = ' ';
        x = 15;
        System.out.printf("x=%2d, 10 < x && x < 20 =%b%n", x,
                10 < x && x < 20);
        x = 6;
        System.out.printf("x=%2d, x%%2==0 || x%%3==0 && x%%b!=0 =%b%n",
                x, x%2==0||x%3==0&&x%6!=0);
        System.out.printf("x=%2d, (x%%2==0 || x%%3==0) && x%%!=0 =%b%n",
            x, (x%2==0||x%3==0)&&x%6!=0);
        ch='1';
        System.out.printf("ch='%c', '0' <= ch && ch <= '9' =%b%n", ch,
                '0' <= ch && ch <='9');
        ch='a';
        System.out.printf("ch='%c', 'a' <= ch && ch <= 'z' =%b%n", ch,
                'a' <= ch && ch <='z');
        ch='A';
        System.out.printf("ch='%c', 'A' <= ch && ch <= 'Z' =%b%n", ch,
                'A' <= ch && ch <='Z');
        ch='q';
        System.out.printf("ch='%c', ch=='q' || ch=='Q' =%b%n", ch,
                    ch=='q' || ch=='Q');
    }
}
```

- 실행결과

```txt
x=15, 10 < x && x < 20 =true
x= 6, x%2==0 || x%3==0 && x%6!=0 =true
x= 6, (x%2==0 || x%3==0) && x%6!=0 =false
ch='1', '0' <= ch && ch <= '9' =true
ch='a', 'a' <= ch && ch <= 'z' =true
ch='A', 'A' <= ch && ch <= 'Z' =true
ch='q', ch=='q' || ch=='Q' =true
```

지금까지 논리 연산자에 대해 배운 내용들을 확인할 수 있는 간단한 예제이다. 변수의 값과 조건식을 다양하게 변경해가면서 실행하여, 결과가 예측과 일치하는지 확인해 보자.

- 예제 3-25/OperatorEx25.java

```txt
import java.util.*; // Scanner크ᄅ래스르ᄅ 사요ᄋ하기 위해 추가
class OperatorEx25 {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        char ch = ' ';
        System.out.print("무ᄂ자르ᄅ 하나 이ᄇ려ᄀ하세요.>");
        String input = scanner.nextLine();
        ch = input.charAt(0);
        if('0'<= ch && ch <= '9') {
            System.out.println("이ᄇ려ᄀ하시ᄂ 무ᄂ자느ᄂ 수ᄉ자이ᄇ니다.");
        }
        if(('a'<= ch && ch <= 'z') || ('A'<= ch && ch <= 'Z')) {
            System.out.println("이ᄇ려ᄀ하시ᄂ 무ᄂ자느ᄂ 여ᄋ무ᄂ자이ᄇ니다.");
        }
    } // main
}
```

- 실행결과 1

문자를 하나 입력하세요.>7입력하신 문자는 숫자입니다.

- 실행결과 2

문자를 하나 입력하세요.>a입력하신 문자는 영문자입니다.

이 예제는 사용자로부터 하나의 문자를 입력받아서 숫자인지 영문자인지 확인한다. 조건문 if는 괄호()안의 연산결과가 참인 경우 블럭\{\}내의 문장을 수행한다. 그래서 아래의 코드는 ‘0’\<=ch && ch \<=’9’가 참일 때, 화면에 ’입력하신 문자는 숫자입니다.’라고 출력한다.

```txt
if('0'<= ch && ch <= '9') {
        System.out.printf("이ᄇ려ᄀ하시ᄂ 무ᄂ자느ᄂ 수ᄉ자이ᄇ니다.");
    }
```

조건문 if에 대해서는 다음 장에서 자세히 배울 것이므로 가볍게 보고 넘어가자.

## 효율적인 연산(short circuit evaluation)

논리 연산자의 또 다른 특징은 효율적인 연산을 한다는 것이다. OR연산\| \| ‘의 경우, 두 피 연산자 중 어느 한 쪽만 ’참’이어도 전체 연산결과가 ’참’이므로 좌측 피연산자가 ’true(참)’ 이면, 우측 피연산자의 값은 평가하지 않는다.

| x | y | x \|\| y |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

‘x가 true이면, x \|\| y는 항상 true이다.’

AND연산 ’&&’의 경우도 마찬가지로 어느 한쪽만 ’거짓(false)’이어도 전체 연산결과가 ’거 짓(false)’이므로 좌측 피연산자가 ’거짓(false)’이면, 우측 피연산자는 평가하지 않는다.

| x | y | x && y |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

‘x가 false이면, x && y는 항상 false이다.’

그래서 같은 조건식이라도 피연산자의 위치에 따라서 연산속도가 달라질 수 있는 것이다. OR연산 ‘\|\|’의 경우에는 연산결과가 ’참’일 확률이 높은 피연산자를 연산자의 왼쪽에 놓아 야 더 빠른 연산결과를 얻을 수 있다.<br>(’a’\<= ch && ch \<= ‘z’) \|\| (‘A’\<= ch && ch \<= ‘Z’)<br>위의 식은 문자 ch가 소문자 또는 대문자인지 확인하는 것인데, 이 식에서 문자 ch가 소 문자인 조건을 대문자인 조건보다 왼쪽에 놓았다. 그 이유는 사용자로부터 문자 ch를 입 력받을 때, 사용자가 대문자보다 소문자를 입력할 확률이 높다고 판단했기 때문이다. 실 제로 사용자가 소문자를 더 자주 입력한다면, 이 식은 더 효율적으로 처리될 것이다.

- 예제 3-26/OperatorEx26.java

```txt
class OperatorEx26 {
    public static void main(String[] args) {
        int a = 5;
        int b = 0;
        System.out.printf("a=%d, b=%d%n", a, b);
        System.out.printf("a!=0 || ++b!=0 = %b%n", a!=0 || ++b!=0);
        System.out.printf("a=%d, b=%d%n", a, b);
```

```txt
        System.out.printf("a==0 && ++b!=0 = %b%n", a==0 && ++b!=0);
        System.out.printf("a=%d, b=%d%n", a, b);
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
a=5, b=0
a!=0 || ++b!=0 = true
a=5, b=0
a==0 && ++b!=0 = false
a=5, b=0
```

논리 연산자가 효율적인 연산을 하는지 확인하는 예제이다. 변수 b에 증감 연산자 ‘++’을 사용해서 우측 피연산자가 처리되면, b의 값이 증가하도록 했다.<br>그러나 실행결과에서 알 수 있듯이, 두 번의 논리연산 후에도 b의 값은 여전히 0인 채로 남아있다.’\|\|(OR)‘의 경우는 좌측 피연산자(a!=0)가 참이라서, 그리고’&&(AND)’의 경 우는 좌측 피연산자(a==0)가 거짓이라서 우측 피연산자를 평가하지 않았기 때문이다.

## 논리 부정 연산자 !

이 연산자는 피연산자가 true이면 false를, false면 true를 결과로 반환한다. 간단히 말해 서, true와 false를 반대로 바꾸는 것이다.

| x | !x |
| --- | --- |
| true | false |
| false | true |

- 표 3-13 논리 부정 연산자의 연산결과

어떤 값에 논리 부정 연산자!’를 반복적으로 적용하면, 참과 거짓이 차례대로 반복된다. 이 연산자의 이러한 성질을 이용하면, 한번 누르면 켜지고, 다시 한 번 누르면 꺼지는 TV 의 전원버튼과 같은 ’토글 버튼(toggle button)’을 논리적으로 구현할 수 있다.<br>false (거짓, off) $\xrightarrow{!}$ true(참, on) $\xrightarrow{!}$ false(거짓, off) $\xrightarrow{!}$ true(참, on) $\xrightarrow{!} \ldots$

논리 부정 연산자!’가 주로 사용되는 곳은 조건문과 반복문의 조건식이며, 이 연산자를 잘 사용하면 조건식이 보다 이해하기 쉬워진다. 예를 들어 ’문자 ch는 소문자가 아니다’라 는 조건을 아래의 왼쪽과 같이 쓰기보다 오른쪽과 같이 논리부정연산자!’를 사용하는 쪽 이 알기 쉽다.

$$
c h<\text { 'a' || ch > 'z' }
$$

⟷ !(‘a’ \<= ch && ch \<= ‘z’)

위와 같이 논리부정연산자!’를 적절히 사용해서 보다 이해하기 쉬운 식이 되도록 노력하자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 3-27/OperatorEx27.java

```txt
class OperatorEx27 {
    public static void main(String[] args) {
        boolean b = true;
        char ch = 'C';
        System.out.printf("b=%b%n", b);
        System.out.printf("!b=%b%n", !b);
        System.out.printf("!!b=%b%n", !!b);
        System.out.printf("!!!b=%b%n", !!!b);
        System.out.println();
        System.out.printf("ch=%c%n", ch);
        System.out.printf("ch < 'a' || ch > 'z'=%b%n",
                ch < 'a' || ch > 'z');
        System.out.printf("!('a'<=ch && ch<='z')=%b%n",
            !('a'<= ch && ch<='z'));
        System.out.printf(" 'a'<=ch && ch<='z' =%b%n",
                'a'<=ch && ch<='z');
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
b=true
!b=false
!!b=true
!!!b=false
ch=C
ch < 'a' || ch > 'z'=true
!('a'<=ch && ch<='z')=true
    'a'<=ch && ch<='z' =false
```

식 ‘!!b’가 평가되는 과정은 아래와 같다. 단항연산자는 결합방향이 오른쪽에서 왼쪽이므로 피연산자와 가까운 것부터 먼저 연산된다. 그래서 피연산자인 b와 가까운 논리 부정 연산자’!‘가 먼저 수행되어 false를 결과로 얻는다. 그리고 이 값에 다시’!’연산을 수행하므로true를 결과로 얻는다.

```txt
    !!b
    → !!true 가까우ᄂ 여ᄂ사ᄂ자가 머ᄂ저 여ᄂ사ᄂ되ᄂ다.
    → !false !true의 겨ᄅ과느ᄂ false이다.
    → true !false의 겨ᄅ과느ᄂ true이다.
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 5.2 비트 연산자 & \| \^ ~ 《 >

비트 연산자는 피연산자를 비트단위로 논리 연산한다. 피연산자를 이진수로 표현했을 때 의 각 자리를 아래의 규칙에 따라 표3-14와 같이 연산을 수행하며, 피연산자로 실수는 허 용하지 않는다. 정수(문자 포함)만 허용된다.

I (OR연산자) 피연산자 중 한 쪽의 값이 10이면, 1을 결과로 얻는다. 그 외에는 0을 얻는다. & (AND연산자) 피연산자 양 쪽이 모두 1이어야만 1을 결과로 얻는다. 그 외에는 0을 얻는다. \^ (XOR연산자) 피연산자의 값이 서로 다를 때만 1을 결과로 얻는다. 같을 때는 0을 얻는다.

| x | y | x \| y | x & y | $x^{\wedge} y$ |
| --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 |

- 표3-14 비트 연산자의 연산결과<br>I 참고 I 연산자 ’\^’는 배타적 XOR(eXclusive OR)라고 하며, 피연산자의 값이 서로 다른 경우, 즉 배타적인 경우에만 참(1)을 결과로 얻는다.

비트OR연산자’\|’는 주로 특정 비트의 값을 변경할 때 사용한다. 아래의 식은 피연산자 0xAB 의 마지막 4 bit를 ’F’로 변경하는 방법을 보여준다.

| 식 | 2진수 | 16진수 |
| --- | --- | --- |
| $0 \times \mathrm{AB} \mid 0 \times \mathrm{F}=0 \times \mathrm{AF}$ | 1 0 1 0 1 0 1 1  \| )0 0 0 0 1 1 1 1 | 0×AB  0×F |
|  | 1 0 1 0 1 1 1 1 | 0xAF |

비트AND연산자&’는 주로 특정 비트의 값을 뽑아낼 때 사용한다. 아래의 식에서는 피연 산자의 마지막 4 bit가 어떤 값인지 알아내는데 사용되었다.

| 식 | 2진수 | 16진수 |
| --- | --- | --- |
| $0 \times \mathrm{AB}$ & $0 \times \mathrm{F}=0 \times \mathrm{B}$ | 1 0 1 0 1 0 1 1  & )0 0 0 0 1 1 1 1 | $0 \times \mathrm{AB}$  0xF |
|  | 0 0 0 0 1 0 1 1 | $0 \times \mathrm{B}$ |

비트XOR연산자\^ 는 두 피연산자의 비트가 다를 때만 1이 된다. 그리고 같은 값으로 두고 XOR연산을 수행하면 원래의 값으로 돌아오는 특징이 있어서 간단한 암호화에 사용된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| 식 | 2진수 | 16진수 |
| --- | --- | --- |
| $0 \times \mathrm{AB}{ }^{\wedge} 0 \times \mathrm{F}=0 \times \mathrm{A} 4$ | 1 0 1 0 1 0 1 1 | 0×AB |
|  | \^)0 0 0 0 1 1 1 1 | 0xF |
| 0xA4 \^ 0xF = 0xAB | 1 0 1 0 0 1 0 0 | 0xA4 |
|  | \^)0 0 0 0 1 1 1 1 | 0xF |
|  | 1 0 1 0 1 0 1 1 | 0×AB |

지금까지 이해를 돕기 위해 2진수를 8자리로 표현하였지만, 사실은 int타입(4 byte)간의 연산이라 32자리로 표현하는 것이 맞다. 그리고 비트연산에서도 피연산자의 타입을 일치시키는 ’산술 변환’이 일어날 수 있다.

```txt
class OperatorEx28 {
    public static void main(String[] args) {
        int x = 0xAB, y = 0xF;
        System.out.printf("x = %#X \t\t%s%n", x, toBinaryString(x));
        System.out.printf("y = %#X \t\t%s%n", y, toBinaryString(y));
        System.out.printf("%#X | %#X = %#X \t%s%n" ,
                x, y, x | y, toBinaryString(x | y));
        System.out.printf("%#X & %#X = %#X \t%s%n" ,
                x, y, x & y, toBinaryString(x & y));
        System.out.printf("%#X ^ %#X = %#X \t%s%n" ,
                x, y, x ^ y, toBinaryString(x ^ y));
        System.out.printf("%#X ^ %#X ^ %#X = %#X %s%n" ,
            x, y, y, x ^ y ^ y, toBinaryString(x ^ y ^ y));
    } // main의 끄ᄐ
    static String toBinaryString(int x) { // 10지ᄂ 저ᄋ수르ᄅ 2지ᄂ수로 벼ᄂ화ᄂ하느ᄂ 메서드
        String zero = "0000000000000000000000000000000";
        String tmp = zero + Integer.toBinaryString(x);
        return tmp.substring(tmp.length()-32);
    }
}
```

- 실행결과
- 예제 3-28/OperatorEx28.java<br>\| x = 0XAB \| \| 00000000000000000000000010101011 \|<br>\| :— \| :— \| :— \|<br>\| y = 0XF \| \| 00000000000000000000000000001111 \|<br>\| OXAB \| OXF = \| OXAF \| 00000000000000000000000010101111 \|<br>\| OXAB & OXF = \| 0XB \| 00000000000000000000000000001011 \|<br>\| OXAB \^ 0XF = \| 0XA4 \| 00000000000000000000000010100100 \|<br>\| OXAB \^ 0XF \^ \| 0XF = 0XAB \| 00000000000000000000000010101011 \|

비트연산의 결과를 2진수로 출력하기 위해 toBinaryString()이라는 메서드를 작성해서 사용하였다. 이 메서드는 4 byte의 정수를 32 자리의 2 진수로 변환한다. 이 메서드가 어떻게 동작하는 지를 이해하기에는 아직 배워야할 것들이 많으므로 설명은 생략한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

비트 전환 연산자 ~<br>이 연산자는 피연산자를 2진수로 표현했을 때, 0은 1로, 1은 0으로 바꾼다. 논리부정 연산 자’!’와 유사하다.

| x | ~x |
| --- | --- |
| 1 | 0 |
| 0 | 1 |

- 표3-15 비트전환 연산자의 2진 연산결과

비트 전환 연산자’~’에 의해 ’비트 전환’되고 나면, 부호있는 타입의 피연산자는 부호가 반 대로 변경된다. 즉, 피연산자의 ’1의 보수’를 얻을 수 있는 것이다. 그래서 비트 전환 연산 자를 ’1의 보수’연산자라고도 한다.

| 2진수 | 10진수 |
| --- | --- |
| 0 0 0 0 1 0 1 0 | 10 |
| ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ | ↓ |
| 1 1 1 1 0 1 0 1 | -11 |

- 표3-16 byte타입의 비트전환연산

예를 들어 10진수 10을 비트전환 연산한 결과는 -11이고, 이 값은 10의 ’1의 보수’이다. 이 미 배운 것과 같이 1의 보수에 1을 더하면 음수가 되므로 -11에 1을 더하면 -10이 되고 -11은 10의 ’1의 보수’가 맞다는 것을 확인할 수 있다.

| 2진수 | 10진수 |
| --- | --- |
| 0 0 x | 10 |
| 1 1 3÷ 1 3/ 0 1 | -11 |
| 1 01 × 1 × 1 0 11 30 1 S | -11 |
| 0 0 0 0 0 0 0 1 | +) 1 |
| 1 1 1 1 0 1 1 0 | -10 |

A 표3-17 음수를 2진수로 표현하는 방법

위의 표에서는 연산결과를 8자리의 2진수로 표현했지만, 비트 전환 연산자는 피연산자의 타입이 int보다 작으면 int로 자동 형변환(산술 변환) 후에 연산하기 때문에 연산결과는 32자리의 2진수이다.

| 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
|---|---|---|---|---|---|---|---|

↓ int타입(32bit)으로 자동 형변환

| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |

↓ 1은 0으로, 0은 1로 바뀐다.

| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

－예제3－29／OperatorEx29．java

```txt
class OperatorEx29 {
    public static void main(String[] args) {
        byte p = 10;
        byte n = -10;
        System.out.printf(" p =%d \t%s%n", p, toBinaryString(p));
        System.out.printf("~p =%d \t%s%n", ~p, toBinaryString(~p));
        System.out.printf("~p+1=%d \t%s%n", ~p+1, toBinaryString(~p+1));
        System.out.printf("~~p =%d \t%s%n", ~~p, toBinaryString(~~p));
        System.out.println();
        System.out.printf(" n =%d%n", n);
        System.out.printf("~(n-1)=%d%n", ~(n-1));
    } // main의 끄ᄐ
    // 10지ᄂ 저ᄋ수르ᄅ 2지ᄂ수로 벼ᄂ화ᄂ하느ᄂ 메서드
    static String toBinaryString(int x) {
        String zero = "00000000000000000000000000000000";
        String tmp = zero + Integer.toBinaryString(x);
        return tmp.substring(tmp.length()-32);
    }
}
```

－실행결과<br>\| p＝10 \| 00000000000000000000000000001010 \|<br>\| :— \| :— \|<br>\| ～p＝－11 \| 11111111111111111111111111110101 \|<br>\| $\sim \mathrm{p}+1=-10$ \| 11111111111111111111111111110110 \|<br>\| ～～p＝10 \| 00000000000000000000000000001010 \|<br>\| n＝－10 \| \|<br>\| $\sim(\mathrm{n}-1)=10$ \| \|

결과를 보면，어떤 양의 정수에 대한 음의 정수를 얻으려면 어떻게 해야 하는지 알 수 있 다．양의 정수 p가 있을 때，p에 대한 음의 정수를 얻으려면＇$\sim \mathrm{p}+1$＇을 계산하면 된다．이 사실을 통해서－10을 2진수로 어떻게 표현할 수 있는지 알 수 있을 것이다．<br>반대로 음의 정수 n이 있을 때，n에 대한 양의 정수를 얻으려면＇～（n－1）＇을 계산하면 된 다．물론 부호연산자＇－＇를 사용하면 되므로，이렇게 복잡하게 변환하지 않는다．참고로만 알아두자．<br>＇～～p＇는 변수 p에 비트 전환 연산을 두 번 적용한 것인데，1을 0으로 바꿨다가 다시 0을 1로 바꾸므로 원래의 값이 된다．그러나 연산결과의 타입이 byte가 아니라 int라는 것에 주의하자．

## 쉬프트 연산자 《＞＞

이 연산자는 피연산자의 각 자리（2진수로 표현했을 때）를＇오른쪽（＞＞）＇또는＇왼쪽（〈 ${ }^{2}$ 으로 이동（shift）한다고 해서＇쉬프트 연산자（shift operator）＇라고 이름 붙여졌다．<br>예를 들어＇8 《 2＇는 왼쪽 피연산자인 10진수 8의 2진수를 왼쪽으로 2자리 이동한다．<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이 때, 자리이동으로 저장범위를 벗어난 값들은 버려지고 빈자리는 0으로 채워진다. 이 과정을 그림과 함께 단계별로 살펴보면 다음과 같다.

(1)10진수 8은 2진수로 ’00001000’이다.

| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
|---|---|---|---|---|---|---|---|

(2)’8 ‹‹ 2’은 10진수 8의 2진수를 왼쪽으로 2자리 이동시킨다.

|  | $8\langle\langle 2$ |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |  |

(3)자리이동으로 인해 저장범위를 벗어난 값은 버려지고, 빈자리는 0으로 채워진다.

| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 버려진다 |  | 빈자리를 0으로 채운다 |  |  |  |  |  |  |  |  |

(4)’8 《 2’의 결과는 2진수로 ’00100000’이 된다. (10진수로 32)

| 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
|---|---|---|---|---|---|---|---|

‘《’연산자의 경우, 피연산자의 부호에 상관없이 각 자리를 왼쪽으로 이동시키며 빈칸을 0 으로만 채우면 되지만,’ $\rangle\rangle$ 연산자는 오른쪽으로 이동시키기 때문에 부호있는 정수는 부호 를 유지하기 위해 왼쪽 피연산자가 음수인 경우 빈자리를 1로 채운다. 물론 양수일 때는 0 으로 채운다.

- 8 \\gg 2 \\rightarrow-2

| 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |  |  |

$$
8\rangle\rangle 2 \rightarrow 2
$$

| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |  |  |

쉬프트 연산자의 좌측 피연산자는 산술변환이 적용되어 int보다 작은 타입은 int타입으로 자동 변환되고 연산결과 역시 int타입이 된다. 그러나 쉬프트 연산자는 다른 이항연산자 들과 달리 피연산자의 타입을 일치시킬 필요가 없기 때문에 우측 피연산자에는 산술변환 이 적용되지 않는다.

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

아래의 표는 쉬프트 연산의 결과를 2진수와 10진수로 나타낸 것이다．각 쉬프트 연산의 결과를 비교해보자．

| 수식 | 자리이동 | 연산결과 |  |
| --- | --- | --- | --- |
|  |  | 2진수 | 10진수 |
| $8\rangle\rangle 0$ | 없음 | 00000000000000000000000000001000 | 8 |
| $8 \gg 1$ | 오른쪽으로 한 번 | 00000000000000000000000000000100 | 4 |
| $8 \gg 2$ | 오른쪽으로 두 번 | 00000000000000000000000000000010 | 2 |
| －8）＞0 | 없음 | 11111111111111111111111111111000 | －8 |
| －8＞＞ 1 | 오른쪽으로 한 번 | 11111111111111111111111111111100 | －4 |
| －8＞＞ 2 | 오른쪽으로 두 번 | 11111111111111111111111111111110 | －2 |
| $8\langle\langle 0$ | 없음 | 00000000000000000000000000001000 | 8 |
| $8\langle\langle 1$ | 왼쪽으로 한 번 | 00000000000000000000000000010000 | 16 |
| $8\langle\langle 2$ | 왼쪽으로 두 번 | 00000000000000000000000000100000 | 32 |
| －8 《 0 | 없음 | 11111111111111111111111111111000 | －8 |
| －8＜＜ 1 | 왼쪽으로 한 번 | 11111111111111111111111111110000 | －16 |
| －8 《 2 | 왼쪽으로 두 번 | 11111111111111111111111111100000 | －32 |

－표3－18 쉬프트 연산의 예

위의 표를 보면，2진수 n자리를 왼쪽으로 이동하면 피연산자를 $2^{\mathrm{n}}$ 으로 곱한 결과를，오른 쪽으로 이동하면 피연산자를 $2^{\mathrm{n}}$ 으로 나눈 결과를 얻는다는 것을 알 수 있다．<br>> $x \ll n$ 은 $x * 2^{n}$ 의 결과와 같다．<br>> $x \gg n$ 은 $x / 2^{n}$ 의 결과와 같다．

2 진수로의 자리이동이 왜 $2^{\mathrm{n}}$ 으로 곱하거나 나눈 결과와 같은지 이해가 안가면，10진수로 자리이동을 해보자．예를 들어 10진수 123을 왼쪽으로 2자리 이동하면 12300이 되는데， 이 값은 123에 $10^{2}$ 으로 곱한 결과라는 것을 알 수 있다．이 값을 다시 오른쪽으로 2자리 이동하면 123이 되고 이 값은 12300을 $10^{2}$ 으로 나눈 결과가 된다．이처럼 10진수에서의 자리이동은 $10^{\mathrm{n}}$ 으로 곱하거나 나눈 결과를 얻는다．단지 2진수이기 때문에 자리이동시 $2^{\mathrm{n}}$ 으로 곱하거나 나눈 결과를 얻는 것뿐이다．<br>그리고，＇x 〈〈 n＇또는＇x 〉〉n＇에서，n의 값이 자료형의 bit수 보다 크면，자료형의 bit수 로 나눈 나머지만큼만 이동한다．예를 들어 int타입이 4 byte（＝32 bit）인 경우，자리수를 32번 바꾸면 결국 제자리로 돌아오기 때문에，＇8＞＞32＇는 아무 일도 하지 않는다．＇8＞＞ 34＇는 34를 32로 나눈 나머지인 2만큼만 이동하는＇8＞＞2＇를 수행한다．당연히 n은 정수 만 가능하며 음수인 경우，부호없는 정수로 자동 변환된다．

곱셈이나 나눗셈 연산자를 사용하면 같은 결과를 얻을 수 있는데，굳이 쉬프트 연산자를 제공하는 이유 무엇일까？그 이유는 속도 때문이다．

예를 들어＇8＞＞2＇의 결과는＇8／4＇의 결과와 같다．하지만，＇8／4＇를 연산하는데 걸리 는 시간보다＇8＞＞2＇를 연산하는데 걸리는 시간이 더 적게 걸린다．다시 말하면，＇＞＞＇또는

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

‘《’연산자를 사용하는 것이 나눗셈’/’ 또는 곱셈 ’\*’ 연산자 보다 더 빠르다.<br>그러나 프로그램의 실행속도도 중요하지만 프로그램을 개발할 때 코드의 가독성(readability)도 중요하다. 쉬프트 연산자가 속도가 빠르긴 해도 곱셈이나 나눗셈 연산자보다는 가독성이 떨어질 것이다. 쉬프트 연산자보다 곱셈 또는 나눗셈 연산자를 주로 사용하고, 보다 빠른 실행속도가 요구되어지는 곳만 쉬프트 연산자를 사용하는 것이 좋다.

- 예제3-30/OperatorEx30.java

```txt
class OperatorEx30 {
    // 10지ᄂ 저ᄋ수르ᄅ 2지ᄂ수로 벼ᄂ화ᄂ하느ᄂ 메서드
    static String toBinaryString(int x) {
        String zero = "00000000000000000000000000000000";
        String tmp = zero + Integer.toBinaryString(x);
        return tmp.substring(tmp.length()-32);
    }
    public static void main(String[] args) {
        int dec = 8;
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 0, dec >> 0, toBinaryString(dec >> 0));
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 1, dec >> 1, toBinaryString(dec >> 1));
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 2, dec >> 2, toBinaryString(dec >> 2));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 0, dec << 0, toBinaryString(dec << 0));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 1, dec << 1, toBinaryString(dec << 1));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 2, dec << 2, toBinaryString(dec << 2));
        System.out.println();
        dec = -8;
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 0, dec >> 0, toBinaryString(dec >> 0));
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 1, dec >> 1, toBinaryString(dec >> 1));
        System.out.printf("%d >> %d = %4d \t%s%n",
            dec, 2, dec >> 2, toBinaryString(dec >> 2));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 0, dec << 0, toBinaryString(dec << 0));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 1, dec << 1, toBinaryString(dec << 1));
        System.out.printf("%d << %d = %4d \t%s%n",
            dec, 2, dec << 2, toBinaryString(dec << 2));
        System.out.println();
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    dec = 8;
    System.out.printf("%d >> %2d = %4d \t%s%n",
            dec, 0, dec >> 0, toBinaryString(dec >> 0));
    System.out.printf("%d >> %2d = %4d \t%s%n",
        dec, 32, dec >> 32, toBinaryString(dec >> 32));
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
8>> 0 = 8 0000000000000000000000000001000
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-164_31_802_761_199.jpg -->

```txt
8 >> 2 = 2 00000000000000000000000000000010
8 << 0 = 8 0000000000000000000000000001000
8 << 1 = 16 0000000000000000000000000010000
8 << 2 = 32 0000000000000000000000000100000
-8 >> 0 = -8 111111111111111111111111111111000
-8 >> 1 = -4 111111111111111111111111111111100
-8 >> 2 = -2 1111111111111111111111111111111110
-8 << 0 = -8 111111111111111111111111111111000
-8 << 1 = -16 111111111111111111111111111110000
-8 << 2 = -32 111111111111111111111111111100000
8 >> 0 = 8 0000000000000000000000000001000
8 >> 32 = 8 0000000000000000000000000001000
```

## 표3-18의 내용을 직접 확인할 수 있는 예제이다. 값을 바꿔가며 결과를 확인해보자.

- 예제 3-31/OperatorEx31.java

```txt
class OperatorEx31 {
    public static void main(String[] args) {
        int dec = 1234;
        int hex = 0xABCD;
        int mask = 0xF;
        System.out.printf("hex=%X%n", hex);
        System.out.printf("%X%n", hex & mask);
        hex = hex >> 4;
        System.out.printf("%X%n", hex & mask);
        hex = hex >> 4;
        System.out.printf("%X%n", hex & mask);
        hex = hex >> 4;
        System.out.printf("%X%n", hex & mask);
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
hex=ABCD
D
C
B
A
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

쉬프트 연산자와 비트AND연산자를 이용해서 16진수를 끝에서부터 한자리씩 뽑아내는 예 제이다. 비트AND연산자는 두 bit가 모두 1일 때만 1이 되므로 0xABCD와 0x000F를 비 트AND연산하면 다음과 같이 마지막 자리만 남고 나머지자리는 모두 0이 된다.

| &) | A | B | C | D |
| --- | --- | --- | --- | --- |
|  | 1010 | 1011 | 1100 | 1101 |
|  | 0000 | 0000 | 0000 | 1111 |
|  | 0 | 0 | 0 | F |
|  | 0000 | 0000 | 0000 | 1101 |
|  | 0 | 0 | 0 | D |

그 다음엔 쉬프트 연산자로 OxABCD를 2진수로 4자리를 오른쪽으로 이동한다. 2진수 4 자리는 16진수로 한자리에 해당하므로 0xABCD는 0x0ABC가 된다.

0xABCD >> 4 → 0×OABC<br>\| A \| B \| C \| D \| \| 0 \| A \| B \| C \|<br>\| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \| :— \|<br>\| 1010 \| 1011 \| 1100 \| 1101 \| → \| 0000 \| 1010 \| 1011 \| 1100 \|

I 참고 I 0×ABCD의 왼쪽 첫 번째 비트가 1인데 왜 0으로 채워졌을까? 정수 상수는 int타입(4 byte)이므로 0×ABCD는 사실 0×0000ABCD에서 앞의 0이 생략된 것이기 때문이다.

0×0ABC에 다시 0×F로 비트AND연산을 수행하면, 0×ABCD의 오른쪽 끝에서 두번째 자 리인 OxC 를 결과로 얻을 수 있다.

| &) | 0 | A | B | C |
| --- | --- | --- | --- | --- |
|  | 0000 | 1010 | 1011 | 1100 |
|  | 0000 | 0000 | 0000 | 1111 |
|  | 0 | 0 | 0 | F |
|  | 0000 | 0000 | 0000 | 1100 |
|  | 0 | 0 | 0 | C |

위 과정을 반복하면 16진수 0xABCD의 각 자리를 하나씩 얻을 수 있다.

## 6. 그 외의 연산자

## 6.1 조건 연산자 ? :

조건 연산자는 조건식, 식1, 식2 모두 세 개의 피연산자를 필요로 하는 삼항 연산자이며, 삼항 연산자는 조건 연산자 하나뿐이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-166_241_301_635_657.jpg -->

조건 연산자는 첫 번째 피연산자인 조건식의 평가결과에 따라 다른 결과를 반환한다. 조 건식의 평가결과가 true이면 식1이, false이면 식2가 연산결과가 된다. 가독성을 높이기 위해 조건식을 괄호( )로 둘러싸는 경우가 많지만 필수는 아니다.

```txt
result = (x > y) ? x : y ;
```

위의 문장에서 식 ’x > y’의 결과가 true이면, 변수 result에는 x의 값이 저장되고, false이 면 y 의 값이 저장된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-166_229_1092_1336_283.jpg -->

- 그림3-4 조건식의 결과가 참(true)일 때(a)와 거짓(false)일 때(b)

만일 x의 값이 5, y의 값이 3이라면, 이 식은 다음과 같은 과정으로 계산된다.

```txt
result = (x > y) ? x : y ;
→ result = (5 > 3) ? 5 : 3 ;
→ result = (true) ? 5 : 3 ; 조거ᄂ시ᄀᄋ= true (차ᄆ) 이므로 여ᄂ사ᄂ겨ᄅ과느ᄂ 5
→ result = 5;
```

조건 연산자는 조건문인 if문으로 바꿔 쓸 수 있으며, if문 대신 조건 연산자를 사용하면 코드를 보다 간단히 할 수 있다. 아래 왼쪽의 조건 연산자가 쓰인 문장을 if문으로 바꾸면 오른쪽과 같다.

```txt
result = (x > y) ? x : y ;
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-166_35_120_2252_708.jpg -->

```txt
if (x > y)
    result = x; // x > y가 true이ᄅ때
else
    result = y; // x > y가 false이ᄅ때
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

아직 if문을 배우지 않았지만, 조건 연산자를 사용하는 것이 if문보다 간략하다는 것은 한눈에 알 수 있다.<br>조건 연산자를 중첩해서 사용하면 셋 이상 중의 하나를 결과로 얻을 수 있다. 아래의 식은 x의 값이 양수면 1, 0이면 0, 음수면 -1, 즉 셋 중의 하나를 결과로 반환한다.

```txt
result = x > 0 ? 1 : ( x == 0 ? 0 : -1);
```

조건 연산자의 결합규칙이 오른쪽에서 왼쪽이므로 괄호가 없어도 되지만 가독성을 높이기 위해 사용했다. 만일 x 의 값이 3 이라면, 위의 식은 아래와 같은 과정으로 처리된다.

```txt
result = x > 0 ? 1 : (x == 0 ? 0 : -1);
→ result = x > 0 ? 1 : (3 == 0 ? 0 : -1);
→ result = x > 0 ? 1 : ( false ? 0 : -1); 조거ᄂ시ᄀᄋ= false이므로, 여ᄂ사ᄂ겨ᄅ과느ᄂ 시ᄀ2
→ result = 3 > 0 ? 1 : -1;
→ result = true ? 1 : -1; 조거ᄂ시ᄀᄋ= true이므로, 여ᄂ사ᄂ겨ᄅ과느ᄂ 시ᄀ1
→ result = 1;
```

조건 연산자를 여러 번 중첩하면 코드가 간략해지긴 하지만, 가독성이 떨어지므로 꼭 필 요한 경우에 한번 정도만 중첩하는 것이 좋다.

그리고 조건 연산자의 식1과 식2, 이 두 피연산자의 타입이 다른 경우, 이항 연산자처럼산술 변환이 발생한다.

```txt
    x = x + (mod < 0.5 ? 0 : 0.5) 0과 0.5의 타이ᄇ이 다르다.
    → x = x + (mod < 0.5 ? 0.0 : 0.5) 0이 0.0 으로 벼ᄂ화ᄂ되어ᄊ다.
```

위의 식에서 조건 연산자의 피연산자 0과 0.5의 타입이 다르므로, 자동 형변환이 일어나서 double타입으로 통일되고 연산결과 역시 double타입이 된다.

- 예제3-32/OperatorEx32.java

```txt
class OperatorEx32 {
    public static void main(String args[]) {
        int x, y, z;
        int absX, absY, absZ;
        char signX, signY, signZ;
        x = 10;
        y = -5;
        z = 0;
        absX = x >= 0 ? x : -x; // x 의 가ᄡ이 으ᄆ수이며ᄂ, 야ᄋ수로 마ᄂ드ᄂ다.
        absY = y >= 0 ? y : -y;
        absZ = z >= 0 ? z : -z;
```

```txt
    signX = x > 0 ? '+' : ( x==0 ? ' ' : '-'); // 조거ᄂ 여ᄂ사ᄂ자르ᄅ 주ᄋ처ᄇ
    signY = y > 0 ? '+' : ( y==0 ? ' ' : '-');
    signZ = z > 0 ? '+' : ( z==0 ? ' ' : '-');
    System.out.printf("x=%c%d%n", signX, absX);
    System.out.printf("y=%c%d%n", signY, absY);
    System.out.printf("z=%c%d%n", signZ, absZ);
    }
}
```

$$
\begin{aligned}
& x=+10 \\
& y=-5 \\
& z=0
\end{aligned}
$$

조건 연산자를 이용해서 변수의 절대값을 구한 후, 부호를 붙여 출력하는 예제이다. 간단 해서 이해하는 데 별 어려움은 없을 것이다.

## 6.2 대입 연산자 = op=

대입 연산자는 변수와 같은 저장공간에 값 또는 수식의 연산결과를 저장하는데 사용된다. 이 연산자는 오른쪽 피연산자의 값(식이라면 평가값)을 왼쪽 피연산자에 저장한다. 그리 고 저장된 값을 연산결과로 반환한다. 예를 들어, 아래의 문장은 변수 x에 3을 저장하고, 연산결과인 3 을 화면에 출력한다.

```txt
System.out.println(x = 3); // 벼ᄂ수 x에 3이 저자ᄋ되고
→ System.out.println(3); // 여ᄂ사ᄂ겨ᄅ과이ᄂ 3이 추ᄅ려ᄀ되ᄂ다.
```

대입 연산자는 연산자들 중에서 가장 낮은 우선순위를 가지고 있기 때문에 식에서 제일 나중에 수행된다. 그리고 앞서 배운 것처럼 연산 진행 방향이 오른쪽에서 왼쪽이기 때문 에 ’ $\mathrm{x}=\mathrm{y}=3 ;$ ‘에서’ $\mathrm{y}=3$ ‘이 먼저 수행되고 그 다음에’ $\mathrm{x}=\mathrm{y}$ ’가 수행된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-168_210_224_1592_721.jpg -->

- 그림3-5 대입 연산자의 결합방향(오른쪽에서 왼쪽)

## Ivalue와 rvalue

대입 연산자의 왼쪽 피연산자를 ’lvalue(left value)’이라 하고, 오른쪽 피연산자를 ’rvalue (right value)’라고 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-168_124_276_2118_699.jpg -->

- 그림3-6 대입 연산자의 Ivalue (왼쪽 값)와 rvalue (오른쪽 값)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

대입연산자의 rvalue는 변수뿐만 아니라 식이나 상수 등이 모두 가능한 반면, lvalue는 반드시 변수처럼 값을 변경할 수 있는 것이어야 한다. 그래서 리터럴이나 상수같이 값을 저장할 수 없는 것들은 lvalue가 될 수 없다.

```txt
int i = 0;
3 = i + 3; // 에러. lvalue가 가ᄡ으ᄅ 저자ᄋ하ᄅ 수 이ᄊ느ᄂ 고ᄋ가ᄂ이 아니다.
i + 3 = i; // 에러. lvalue의 여ᄂ사ᄂ겨ᄅ과느ᄂ 리터러ᄅ(i+3 → 0+3 → 3)
final int MAX = 3; // 벼ᄂ수 아ᄑ에 키워드 final으ᄅ 부ᄐ이며ᄂ 사ᄋ수가 되ᄂ다.
MAX = 10; // 에러. 사ᄋ수 (MAX) 에 새로우ᄂ 가ᄡ으ᄅ 저자ᄋ하ᄅ 수 어ᄡ다.
```

앞서 배운 것과 같이 변수 앞에 키워드 ’final’을 붙이면 상수가 된다. 상수에 한 번 저장된값은 바꿀 수 없다.

## 복합 대입 연산자

대입 연산자는 다른 연산자(op)와 결합하여 ’op=’와 같은 방식으로 사용될 수 있다. 예를들면, ’i = i + 3’은 ’i += 3’과 같이 표현될 수 있다. 그리고 결합된 두 연산자는 반드시 공백없이 붙여 써야 한다.

| op= | = |
| --- | --- |
| i +=3; | i = i + 3; |
| i -= 3; | i = i - 3; |
| i \*= 3; | i = i \* 3; |
| i /= 3; | i = i / 3; |
| i %= 3; | i = i % 3; |
| i \<\<= 3; | i = i \<\< 3; |
| i >>= 3; | i = i >> 3; |
| i &= 3; | i = i & 3; |
| i \^= 3; | i = i \^ 3; |
| i \|= 3; | i = i \| 3; |
| i \*= 10 + j; | $\mathrm{i}=\mathrm{i} *(10+\mathrm{j})$; |

- 표3-19 복합 대입 연산자의 종류

표3-19의 왼쪽은 복합 연산자의 사용 예이고, 오른쪽은 대입 연산자를 이용한 왼쪽과 동일한 의미의 식이다. 복합 연산자가 잘 익숙해지지 않는다면, 오른쪽과 같은 형태의 식을사용하다가 점차 왼쪽의 형태로 바꿔가도록 하자.<br>한 가지 주의할 점은 표3-19의 마지막 줄처럼, 대입연산자의 우변이 둘 이상의 항으로이루어져 있는 경우이다. ’i *= 10 + j;’를 ’i = i * 10 +j;’와 같은 것으로 오해하지 않도록하자.

I 참고 I 연습문제는 깃헙([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) PDF파일로 제공<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Memo

Chapter 04<br>조건문과 반복문<br>if, switch, for, while statement<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

지금까지는 코드의 실행흐름이 무조건 위에서 아래로 한 문장씩 순차적으로 진행되었지 만 때로는 조건에 따라 문장을 건너뛰고, 때로는 같은 문장을 반복해서 수행해야할 때 가 있다. 이처럼 프로그램의 흐름(flow)을 바꾸는 역할을 하는 문장들을 ’제어문(flow control statement)’이라고 한다. 제어문에는 ’조건문과 반복문’이 있는데, 조건문은 조건 에 따라 다른 문장이 수행되도록 하고, 반복문은 특정 문장들을 반복해서 수행한다.

## 1. 조건문 - if, switch

조건문은 조건식과 조건에 따라 실행될 블럭\{\}으로 구성되며, 조건식의 결과에 따라 실행 할 문장이 달라져서 프로그램의 실행 흐름을 바꿀 수 있다.<br>조건문은 if문과 switch문, 두 가지가 있으며 주로 if문이 사용된다. 처리할 경우의 수가 많을 때는 if문보다 switch문이 효율적이지만, switch문은 if문보다 제약이 많다.

## 1.1 if문

if문은 가장 기본적인 조건문이며, 다음과 같이 ’조건식’과 ’블럭\{\}’로 이루어져 있다. ’if’의 뜻이 ’만일 ~이라면…’이므로 ’만일(if) 조건식이 참(true)이면 블럭\{\} 안의 문장들을 실행 하라.’라는 의미로 이해하면 된다.

```txt
if (조거ᄂ시ᄀ) {
    // 조거ᄂ시ᄀ이 차ᄆ(true) 이ᄅ 때 수해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
}
```

만일 다음과 같은 if문이 있을 때, 조건식 ’score > 60’이 참(true)이면 블럭\{\} 안의 문장이 실행되어 화면에 “합격입니다.”라고 출력되고 거짓(false)이면, if문 다음의 문장으로 넘어 간다.

```txt
if (score > 60) {
    System.out.println("하ᄇ겨ᄀ이ᄇ니다.");
}
```

위 if문의 조건식이 평가되는 과정을 단계별로 살펴보면 다음과 같다. 변수 score의 값을 80으로 가정하였다.

```txt
    score > 60
→ 80 > 60
→ true 조거ᄂ시ᄀ이 차ᄆ(true) 이므로 브ᄅ러ᄀ{} 아ᄂ의 무ᄂ자ᄋ이 시ᄅ해ᄋ되ᄂ다.
```

위 조건식의 결과는 ’true’이므로 if문 괄호\{\} 안의 문장이 실행된다. 만일 조건식의 결과 가 ’false’이면, 괄호\{\} 안의 문장은 실행되지 않을 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 조건식

if문에 사용되는 조건식은 일반적으로 비교 연산자와 논리 연산자로 구성된다. 이미 연산 자를 배울 때 살펴보았지만, 복습 차원에서 몇 개를 골라 표로 정리했다.

| 조건식 | 조건식이 참일 조건 |
| --- | --- |
| $90<=\mathrm{x}$ && $\mathrm{x}<=100$ | 정수 x가 900이상 1000이하일 때 |
| $\mathrm{x}<0\| \| \mathrm{x}>100$ | 정수 ×가 0보다 작거나 100보다 클 때 |
| $\mathrm{x} \% 3==0$ && $\mathrm{x} \% 2!=0$ | 정수 x가 3의 배수지만, 2의 배수는 아닐 때 |
| ch==‘y’ \|\| ch==‘Y’ | 문자 ch가 ‘y’ 또는 ’Y’일 때 |
| ch==’ ’ \|\| ch==‘ \|\| ch==’’ | 문자 ch가 공백이거나 탭 또는 개행 문자일 때 |
| ‘A’ \<= ch && ch \<= ‘Z’ | 문자 ch가 대문자일 때 |
| ‘a’ \<= ch && ch \<= ‘z’ | 문자 ch가 소문자일 때 |
| ‘0’ \<= ch && ch \<= ‘9’ | 문자 ch가 숫자일 때 |
| str.equals (“yes”) | 문자열 str의 내용이 “yes”일 때(대소문자 구분) |
| str.equalsIgnoreCase(“yes”) | 문자열 str의 내용이 “yes”일 때(대소문자 구분안함) |

- 표4-1 자주 사용되는 조건식

조건식을 작성할 때 실수하기 쉬운 것이, 등가비교 연산자 ‘==’대신 대입 연산자’=’를 사 용하는 것이다. 예를 들어 ’x가 0일 때 참’인 조건식은 ’x==0’인데, 아래와 같이 실수로 ’x=0’이라고 적는 경우가 있다.

```txt
        if (x = 0) { ... } x에 0, 0 = x-T有되고, 겨ᄅ과느ᄂ 0이 되ᄂ다.
    → if (0) { ... } 겨ᄅ과가 true 또느ᄂ false가 아니므로 에러가 바ᄅ새ᄋ하ᄂ다.
```

자바에서 조건식의 결과는 반드시 true 또는 false이어야 한다는 것을 잊지 말자.

- 예제 4-1/FlowEx.java

```txt
class FlowEx {
    public static void main(String[] args) {
        int x= 0;
        System.out.printf ("x=%d 이ᄅ때, 차ᄆ이ᄂ 거ᄉ으ᄂ%n", x);
        if(x==0) System.out.println("x==0");
        if(x!=0) System.out.println("x!=0");
        if(!(x==0)) System.out.println("!(x==0)");
        if(!(x!=0)) System.out.println("!(x!=0)");
        x = 1;
        System.out.printf ("x=%d 이ᄅ때, 차ᄆ이ᄂ 거ᄉ으ᄂ%n", x) ;
        if(x==0) System.out.println("x==0");
        if(x!=0) System.out.println("x!=0");
        if(!(x==0)) System.out.println("!(x==0)");
        if(!(x!=0)) System.out.println("!(x!=0)");
    }
}
```

- 실행결과

```txt
x=0 이ᄅ 때, 차ᄆ이ᄂ 거ᄉ으ᄂ
x==0
    !(x!=0)
x=1 이ᄅ 때, 차ᄆ이ᄂ 거ᄉ으ᄂ
x!=0
!(x==0)
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

블럭\{\}<br>괄호\{\}로 여러 문장을 하나의 단위로 묶을 수 있는데, 이것을 ‘블럭(block)’이라고 한다. 블럭은’\{‘로 시작해서,’\}‘로 끝나는데,’\}‘다음에 문장의 끝을 의미하는’;’을 붙이지 않는 다는 것에 주의하자.<br>블럭 내의 문장들은 탭(tab)으로 들여쓰기(indentation)를 해서 블럭 안에 속한 문장이 라는 것을 알기 쉽게 해주는 것이 좋다. 탭(tab)은 키보드의 맨 왼쪽에 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-174_297_1277_633_193.jpg -->

블럭의 시작을 의미하는 ’\{’의 위치는 아래와 같이 두 가지 스타일이 있는데, 각 스타일마 다 장단점이 있으므로 본인의 취향에 맞는 것으로 선택해서 사용하자. 왼쪽의 스타일은 라인의 수가 짧아진다는 장점이, 오른쪽의 스타일은 블럭의 시작과 끝을 찾기 쉽다는 장 점이 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-174_213_1046_1214_309.jpg -->

블럭 안에는 보통 여러 문장을 넣지만, 한 문장만 넣거나 아무런 문장도 넣지 않을 수 있 다. 만일 블럭 내의 문장이 하나뿐 일 때는 아래와 같이 괄호\{\}를 생략할 수 있다.

```txt
if(score > 60)
    System.out.println("하ᄇ겨ᄀ이ᄇ니다.");
```

또는 아래와 같이 한 줄로 쓸 수도 있다.

```txt
if(score > 60) System.out.println("하ᄇ겨ᄀ이ᄇ니다.");
```

이처럼 블럭 내의 문장이 하나뿐인 경우 괄호\{\}를 생략할 수 있지만 가능하면 생략하지 않고 사용하는 것이 바람직하다. 나중에 새로운 문장들이 추가되면 괄호\{\}로 문장들을 감 싸 주어야 하는데, 이 때 괄호\{\}를 추가하는 것을 잊기 쉽기 때문이다.

```txt
if (score > 60)
    System.out.println("하ᄇ겨ᄀ이ᄇ니다."); // 무ᄂ자ᄋ1 if무ᄂ에 소ᄀ하ᄂ 무ᄂ자ᄋ
    System.out.println("추ᄀ하드리ᄇ니다."); // 무ᄂ자ᄋ2. if무ᄂ에 소ᄀ하ᄂ 무ᄂ자ᄋ이 아니ᄆ
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>if문에 새로운 코드 한 줄이 추가되었지만, 괄호\{\}로 묶지 않았기 때문에 ’문장2’는 if문에속한 문장이 아니다. 들여쓰기를 했기 때문에 if문에 속한 것으로 착각하기 쉽지만단지 들여쓰기를 했다고 if문에 속한 문장이 되는 것은 아니다.<br>아래와 같이 괄호\{\}로 묶어줘야만 두 문장 모두 if문에 속한 문장이 된다.

```txt
    if (score > 60) {
        System.out.println("하ᄇ겨ᄀ이ᄇ니다."); // 무ᄂ자ᄋ1 if무ᄂ에 소ᄀ하ᄂ 무ᄂ자ᄋ
        System.out.println("추ᄀ하드리ᄇ니다."); // 무ᄂ자ᄋ2. if무ᄂ에 소ᄀ하ᄂ 무ᄂ자ᄋ
    }
```

지금은 ’이런 실수를 누가할까?’라는 생각이 들겠지만, 에러를 못 찾아서 한참을 고생하다가 이렇게 어처구니없는 곳에서 실수가 발견되곤 한다. 대부분의 실수는 늘 쉬운 곳에 있다는 것을 잊지 말자.

- 예제 4-2/FlowEx2.java

```txt
import java.util.*; // Scanner크ᄅ래스르ᄅ 사요ᄋ하기 위해 추가
class FlowEx2 {
    public static void main(String[] args) {
        int input;
        System.out.print("수ᄉ자르ᄅ 하나 이ᄇ려ᄀ하세요.>");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
        input = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
        if(input==0) {
            System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이ᄇ니다.");
        }
        if(input!=0)
            System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이 아니ᄇ니다.");
            System.out.printf("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ %d이ᄇ니다.", input);
    } // main의 끄ᄐ
}
```

- 실행결과 1

숫자를 하나 입력하세요.>3입력하신 숫자는 0이 아닙니다.입력하신 숫자는 3입니다.

- 실행결과 2

숫자를 하나 입력하세요.>0입력하신 숫자는 0입니다.입력하신 숫자는 0입니다.<br>두 번째 if문은 괄호\{\}를 생략했기 때문에, 조건식 바로 다음에 오는 하나의 문장만 if문에속하게 된다. 그래서 실행결과를 보면 세 번째 출력문이 항상 출력된다.

```txt
    if(input!=0)
        System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이 아니ᄇ니다.");
        System.out.printf("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ %d이ᄇ니다.", input); // if무ᄂ 바ᄁ의 무ᄂ자ᄋ
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

만일 두 문장 모두 if문에 속하게 하려면 괄호\{\}로 묶으면 된다. 예제의 두 번째 if문에 괄 호\{\}를 추가하여 다음과 같은 실행결과가 나오는지 확인해보자.

- 실행결과

```txt
수ᄉ자르ᄅ 하나 이ᄇ려ᄀ하세요.>0
이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이ᄇ니다.
```

## 1.2 if-else문

if문의 변형인 if-else문의 구조는 다음과 같다. if문에 ’else블럭’이 추가되었다. ’else’의 뜻이 ’그 밖의 다른’이므로 조건식의 결과가 참이 아닐 때, 즉 거짓일 때 else블럭의 문장 을 수행하라는 뜻이다.

```txt
if (조거ᄂ시ᄀ) {
    // 조거ᄂ시ᄀ이 차ᄆ(true) 이ᄅ 때 수해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
} else {
    // 조거ᄂ시ᄀᄋ=ᅵ 거지ᄉ (false) 이ᄅ 때 수해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
}
```

조건식의 결과에 따라 이 두 개의 블럭\{\} 중 어느 한 블럭\{\}의 내용이 수행되고 전체 if문 을 벗어나게 된다. 두 블럭\{\}의 내용이 모두 수행되거나, 모두 수행되지 않는 경우는 있을 수 없다. 아래 왼 쪽의 두 개의 if문을 if-else문으로 바꾸면 오른쪽과 같다.

```txt
if(input==0) {
    System.out.println("0이ᄇ니다.");
}
if(input!=0) {
    System.out.println("0이 아니ᄇ니다.");
}
```

```txt
if(input==0) {
    System.out.println("0이ᄇ니다.");
} else {
    System.out.println("0이 아니ᄇ니다.");
}
```

왼쪽 코드의 두 조건식은 어느 한 쪽이 참이면 다른 한 쪽이 거짓인 상반된 관계에 있기 때문에 오른 쪽과 같이 if-else문으로 바꿀 수 있는 것이지, 두 개의 if문을 항상 if-else 문으로 바꿀 수 있는 것은 아니다.<br>그리고 왼 쪽의 코드는 두 개의 조건식을 계산해야하지만, if-else문을 사용한 오른쪽의 코드는 하나의 조건식만 계산하므로 더 효율적이다.

## 예제 4-3/FlowEx3.java

```txt
import java.util.*; // Scanner크ᄅ래스르ᄅ 사요ᄋ하기 위해 추가
class FlowEx3 {
    public static void main(String[] args) {
        System.out.print("수ᄉ자르ᄅ 하나 이ᄇ려ᄀ하세요.>");
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    Scanner scanner = new Scanner(System.in);
    int input = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ input에 저자ᄋ
    if(input==0) {
        System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이ᄇ니다.");
    } else { // input!=0이ᄂ겨ᄋ우
        System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이 아니ᄇ니다.");
    }
    } // main의 끄ᄐ
} 수ᄉ자르ᄅ 하나 이ᄇ려ᄀ하세요.>5
이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이 아니ᄇ니다.
```

- 실행결과 1

숫자를 하나 입력하세요.>5입력하신 숫자는 이이늡니다.

- 실행결과 2

숫자를 하나 입력하세요.>0입력하신 숫자는 0입니다.<br>if-else문 역시 블럭 내의 문장이 하나뿐인 경우 아래와 같이 괄호\{\}를 생략할 수 있다.

```txt
if(input = = 0)
    System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이ᄇ니다.");
    else
    System.out.println("이ᄇ려ᄀ하시ᄂ 수ᄉ자느ᄂ 0이 아니ᄇ니다.");
```

## 1.3 if-else if문

if - else문은 경우의 수가 둘 일 때 그 중 하나가 수행되는 구조인데, 경우의 수가 셋 이상 인 경우에는 어떻게 해야 할까? 그럴 때는 한 문장에 여러 개의 조건식을 쓸 수 있는 ’if- else if’문을 사용하면 된다.

```txt
if (조거ᄂ시ᄀ1) {
    // 조거ᄂ시ᄀ1의 여ᄂ사ᄂ 겨ᄅ과가 차ᄆ이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
} else if (조거ᄂ시ᄀ2) {
    // 조거ᄂ시ᄀ2의 여ᄂ사ᄂ 겨ᄅ과가 차ᄆ이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
} else if (조거ᄂ시ᄀ3) { // 여러 개의 else if르ᄅ 사요ᄋ하ᄅ 수 이ᄊ다.
    // 조거ᄂ시ᄀ3의 여ᄂ사ᄂ 겨ᄅ과가 차ᄆ이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
} else { // 마지마ᄀ으ᄂ 보토ᄋ else브ᄅ러ᄀ으로 끄ᄐ나며, else브ᄅ러ᄀ으ᄂ 새ᄋ랴ᄀ가느ᄋ하다.
    // 위의 어느 조거ᄂ시ᄀ도 마ᄂ조ᄀ하지 않으ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
}
```

첫 번째 조건식부터 순서대로 평가해서 결과가 참인 조건식을 만나면, 해당 블럭\{\}만 실 행하고 ’if-else if’문 전체를 벗어난다.<br>만일 결과가 참인 조건식이 하나도 없으면, 마지막에 있는 else블럭의 문장들이 실행된 다. 그리고 else블럭은 생략이 가능하다. else블럭이 생략되었을 때는 if-else if문의 어떤 블럭도 수행되지 않을 수 있다.<br>예를 들어 다음과 같은 if-else if문이 있을 때, 변수 score의 값이 85라면, 다음의 과정 으로 처리된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

③

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-178_400_373_259_622.jpg -->

```txt
} else if(score >=70)
{
    grade = 'c';
} else {
    grade = 'D';
}
```

1. 결과가 참인 조건식을 만날 때까지 첫 번째 조건식부터 순서대로 평가한다.(첫 번째 조건식이 거짓이면, 두 번째 조건식으로 넘어간다.)
2. 참인 조건식을 만나면, 해당 블럭\{ \}의 문장들을 실행한다.
3. if-else if문 전체를 빠져나온다.

- 예제 4-4/FlowEx4.java

```txt
import java.util.*;
class FlowEx4 {
    public static void main(String[] args) {
        int score = 0; // 저ᄆ수르ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수
        char grade =' '; // 하ᄀ저ᄆ으ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수. 고ᄋ배ᄀ으로 초기화하ᄂ다.
        System.out.print("저ᄆ수르ᄅ 이ᄇ려ᄀ하세요.>");
        Scanner scanner = new Scanner(System.in);
        score = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ score에 저자ᄋ
        if (score >= 90) { // score가 90저ᄆ 보다 가ᄐ거나 크며ᄂ A하ᄀ저ᄆ
            grade = 'A';
        } else if (score >=80) { // score가 80저ᄆ 보다 가ᄐ거나 크며ᄂ B하ᄀ저ᄆ
            grade = 'B';
        } else if (score >=70) { // score가 70저ᄆ 보다 가ᄐ거나 크며ᄂ C하ᄀ저ᄆ
            grade = 'C';
        } else { // 나머지느ᄂ D하ᄀ저ᄆ
            grade = 'D';
        }
        System.out.println("다ᄋ시ᄂ의 하ᄀ저ᄆ으ᄂ "+ grade +"이ᄇ니다.");
    }
}
```

- 실행결과 1

점수를 입력하세요.>70<br>당신의 학점은 C입니다.

- 실행결과 2

점수를 입력하세요.>63<br>당신의 학점은 D 입니다.

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

점수를 입력하면，그에 해당하는 학점을 출력하는 간단한 예제이다．여기서 한 가지 눈여겨봐야할 것은 두 번째와 세 번째 조건식이다．

```txt
if (score >= 90) {
    grade = 'A';
} else if (80 <= score && score < 90) { // 80 s score < 90
    grade = 'B';
} else if (70 <= score && score < 80) { // 70 s score < 80
    grade = 'C';
} else { // score < 70
    grade = 'D';
}
```

점수가 90점 미만이고，80점 이상인 사람에게＇B＇학점을 주는 조건이라면，위의 코드에서처럼 조건식이＇80 〈＝score＆＆score 〈90＇이 되어야 하는 것이 아닌가？<br>그럼에도 불구하고，두 번째 조건식을＇score＞＝80＇이라고 쓸 수 있는 것은 첫 번째 조건식인＇score $\rangle=90$＇이 거짓이기 때문이다．＇score $\rangle=90$＇이 거짓이라는 것은＇score〈90＇이 참이라는 뜻이므로 두 번째 조건식에서＇score＜90＇이라는 조건을 중복해서 확인할필요가 없다．세 번째 조건식도 같은 이유로，＇70 〈＝score＆＆score〈80＇이 아닌，＇score＞＝70＇과 같이 간단히 쓸 수 있다．

```txt
if (score >= 90) {
    grade = 'A';
} else if (80 <= score && score < 90 ) {
    grade = 'B';
} else if (70 <= score && score < 80 ) {
    grade = 'C';
} else {
    grade = 'D';
}
```

```txt
if (score >= 90) {
    grade = 'A';
} else if (score >=80) {
    grade = 'B';
} else if (score >=70) {
    grade = 'C';
} else {
    grade = 'D';
}
```

그래서 만일 아래와 같이 왼쪽의 if－else if문을 별개의 if문으로 떼어낸다면，오른쪽과 같이 조건식이 달라져야 한다．

```txt
if (score >= 90) {
    grade = 'A';
} else if (score >=80) {
    grade = 'B';
} else if (score >=70) {
    grade = 'C';
} else {
    grade = 'D';
}
```

```txt
if (score >= 90) {
    grade = 'A';
}
if (80 <= score && score < 90) {
    grade = 'B';
}
if (70 <= score && score < 80) {
    grade = 'C';
}
if (score < 70) {
    grade = 'D';
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

if-else if문이 여러 개의 if문을 합쳐놓은 것이긴 하지만, 조건식을 바꾸지 않고 여러 개 의 if문으로 쪼개놓기만 하면 전혀 다른 코드가 된다는 점에 유의하자.

## 1.4 중첩 if문

if문의 블럭 내에 또 다른 if문을 포함시키는 것이 가능하며 이것을 중첩 if문이라고 부르 며 중첩의 횟수에는 거의 제한이 없다.

```txt
if (조거ᄂ시ᄀ1) {
    // 조거ᄂ시ᄀ1의 여ᄂ사ᄂ 겨ᄅ과가 true이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
    if (조거ᄂ시ᄀ2) {
        // 조거ᄂ시ᄀ1과 조거ᄂ시ᄀ2가 모두 true이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ
    } else {
        // 조거ᄂ시ᄀ1이 true이고, 조거ᄂ시ᄀ2가 false이ᄅ 때 시ᄅ해ᄋ되느ᄂ 무ᄂ자ᄋ드ᄅ
    }
} else {
    // 조거ᄂ시ᄀ1이 false이ᄅ 때 시ᄅ해ᄋ되느ᄂ 무ᄂ자ᄋ드ᄅ
}
```

위와 같이 내부의 if문은 외부의 if문보다 안쪽으로 들여쓰기를 해서 두 if문의 범위가 명 확히 구분될 수 있도록 작성하는 것이 좋다.<br>중첩if문에서는 괄호\{\}의 생략에 더욱 조심해야 한다. 바깥쪽의 if문과 안쪽의 if문이 서 로 엉켜서 if문과 else블럭의 관계가 의도한 바와 다르게 형성될 수도 있기 때문이다.

```txt
if (num >= 0)
    if (num != 0)
        sign = '+';
else
    sign = '-';
```

⟷

```txt
if (num >= 0) {
    if (num != 0) {
        sign = '+';
    } else {
        sign = '-';
    }
}
```

왼쪽 코드는 언뜻 보기에 else블럭이 바깥쪽의 if문에 속한 것처럼 보이지만, 괄호가 생략 되었을 때 else블럭은 가까운 if문에 속한 것으로 간주되므로 실제로는 오른쪽과 같이 안 쪽 if문의 else블럭이 되어버린다. 이제 else블럭은 어떤 경우에도 실행될 수 없다. 그래서 아래와 같이 괄호\{\}를 넣어서 if블럭과 else블럭의 관계를 확실히 해주는 것이 좋다.

```txt
if (num >= 0) {
    if (num != 0)
        sign = '+';
} else {
    sign = '-';
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 4-5/FlowEx5.java

```txt
import java.util.*;
class FlowEx5 {
    public static void main(String[] args) {
        int score = 0;
        char grade = ' ', opt = '0';
        System.out.print("저ᄆ수르ᄅ 이벼ᅧᄀ해주세요.>");
        Scanner scanner = new Scanner(System.in);
        score = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 저ᄆ수르ᄅ score에 저자ᄋ
        System.out.printf("다ᄋ시ᄂ의 저ᄆ수느ᄂ %d이ᄇ니다.%n", score);
        if (score >= 90) { // score가 90저ᄆ 보다 가ᄐ거나 크며ᄂ A하ᄀ저ᄆ(grade)
            grade = 'A';
            if (score >= 98) { // 90저ᄆ 이사ᄋ 주ᄋ에서도 98저ᄆ 이사ᄋ으ᄂ A+
                opt = '+';
            } else if (score < 94) { // 90저ᄆ 이사ᄋ 94저ᄆ 미마ᄂ으ᄂ A-
                opt = '-';
            }
        } else if (score >= 80){ // score가 80저ᄆ 보다 가ᄐ거나 크며ᄂ B하ᄀ저ᄆ(grade)
            grade = 'B';
            if (score >= 88) {
                opt = '+';
            } else if (score < 84) {
                opt = '-';
            }
        } else { // 나머지느ᄂ C하ᄀ저ᄆ(grade)
            grade = 'C';
        }
        System.out.printf("다ᄋ시ᄂ의하ᄀ저ᄆ으ᄂ %c%c이ᄇ니다.%n", grade, opt);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-181_53_348_1701_916.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-181_185_353_1698_549.jpg -->

점수를 입력해주세요. >81<br>당신의 점수는 81입니다.<br>당신의 학점은 B-입니다.

## 실행결과 3

점수를 입력해주세요. >85<br>당신의 점수는 85입니다.<br>당신의 학점은 B0입니다.

위 예제는 모두 3개의 if문으로 이루어져 있으며 if문 안에 또 다른 2개의 if문을 포함하고 있는 모습을 하고 있다. 제일 바깥쪽에 있는 if문에서 점수에 따라 학점(grade)을 결정하 고, 내부의 if문에서는 학점을 더 세부적으로 나누어서 평가를 하고 그 결과를 출력한다. 외부 if문의 조건식에 의해 한번 걸러졌기 때문에 내부 if문의 조건식은 더 간단해 질 수 있다.<br>원래는 아래의 왼쪽과 같이 써야하는데, ’90 〈= score’라는 조건이 이미 외부 if문의 조 건식과 동일하므로 오른쪽의 조건식처럼 간단히 쓸 수 있는 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
if (score >= 90) {
    grade = 'A';
    if (score >= 98) {
        opt = '+';
    } else if (90 <= score && score < 94) {
        opt = '-';
    }
    ...
```

```txt
    if (score >= 90) {
        grade = 'A';
        if (score >= 98) {
            opt = '+';
        } else if (score < 94) {
            opt = '-';
        }
        ...
```

아래 오른쪽의 if-else if문은 else블럭이 생략되었는데, 만일 생략되지 않았다면 왼쪽과같은 코드가 될 것이다. 변수 opt를 선언할 때 이미 ’0’으로 초기화했기 때문에 굳이 else 블럭을 쓸 필요가 없는 것이다.

```txt
char opt = '0';
    ...
if (score >= 98) {
    opt = '+';
} else if (score < 94) {
    opt = '-';
} else { // 94 ⇆ score < 98
    opt = '0';
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-182_229_696_1081_776.jpg -->

## 1.5 switch문

if문은 조건식의 결과가 참과 거짓, 두 가지 밖에 없기 때문에 경우의 수가 많아질수록 else-if를 계속 추가해야하므로 조건식이 많아져서 복잡해지고, 여러 개의 조건식을 계산 해야하므로 처리시간도 많이 걸린다.<br>이러한 if문과 달리 switch문은 단 하나의 조건식으로 많은 경우의 수를 처리할 수 있고, 표현도 간결하므로 알아보기 쉽다. 그래서 처리할 경우의 수가 많은 경우에는 if문보다 switch문으로 작성하는 것이 좋다. 다만 switch문은 제약조건이 있기 때문에, 경우의 수 가 많아도 어쩔 수 없이 if문으로 작성해야 하는 경우가 있다.<br>switch문은 조건식을 먼저 계산한 다음, 그 결과와 일치하는 case문으로 이동한다. 이동 한 case문 아래에 있는 문장들을 수행하며, break문을 만나면 전체 switch문을 빠져나가 게 된다.

1. 조건식을 계산한다.
2. 조건식의 결과와 일치하는 case문으로 이동한다.
3. 이후의 문장들을 실행한다.
4. break문이나 switch문의 끝을 만나면 switch문 전체를 빠져나간다.

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
switch (조건식) {
    case 값1 :
            // 조건식의 결과가 값1과 같을 경우 수행될 문장들
            //...
            break;
    case 값2 :
            // 조건식의 결과가 값2와 같을 경우 수행될 문장들
            //...
            break; // switch문을 벗어난다.
        //...
        default :
            // 조건식의 결과와 일치하는 case문이 없을 때 수행될 문장들
            //...
}
→
```

만일 조건식의 결과와 일치하는 case문이 하나도 없는 경우에 default문으로 이동한다. default문은 if문의 else블럭과 같은 역할을 한다고 보면 된다. default문의 위치는 어디 라도 상관없으나 보통 마지막에 놓기 때문에 break문을 쓰지 않아도 된다.<br>switch문에서 break문은 각 case문의 영역을 구분하는 역할을 하는데, 만일 break문을 생략하면 case문 사이의 구분이 없어지므로 다른 break문을 만나거나 switch문 블럭\{\}의 끝을 만날 때까지 나오는 모든 문장들을 수행한다. 이러한 이유로 각 case문의 마지막에 break문을 빼먹는 실수를 하지 않도록 주의해야한다.<br>그러나 경우에 따라서는 다음과 같이 고의적으로 break문을 생략하는 경우도 있다.

```txt
switch (level) {
    case 3 :
        grantDelete(); // 사ᄀ제궈ᄂ하ᄂ으ᄅ 주ᄂ다.
    case 2 :
        grantWrite(); // 쓰기궈ᄂ하ᄂ으ᄅ 주ᄂ다.
    case 1 :
        grantRead(); // 읽기궈ᄂ하ᄂ으ᄅ 주ᄂ다.
}
```

I 참고 I 위의 코드는 사용자에게 읽기, 쓰기, 삭제권한을 주는 기능의 grantRead( ), grantWrite( ), grantDelete( )가 존재한다 는 가정 하에 작성되었다.

위의 코드는 전체 코드가 아닌 코드의 일부를 발췌한 것인데, 회원제로 운영되는 웹사이 트에서 많이 사용될 만한 코드이다.

로그인한 사용자의 등급(level)을 체크하여, 등급에 맞는 권한을 부여하는 방식으로 되 어 있다. 제일 높은 등급인 3을 가진 사용자는 grantDelete( ), grantWrite( ), grantRead ()가 모두 수행되어 읽기, 쓰기, 삭제 권한까지 모두 갖게 되고, 제일 낮은 등급인 1을 가 진 사용자는 읽기 권한만을 갖게 된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

예를 들어 변수 level의 값이 2라면, 다음과 같은 흐름으로 진행된다.

```txt
int level = 2;
...
switch (level) {
    case 3 :
        grantDelete(); // 사ᄀ제궈ᄂ하ᄂ으ᄅ 주ᄂ다.
    case 2 :
        grantWrite(); // 쓰기궈ᄂ하ᄂ으ᄅ 주ᄂ다.
    case 1 :
        grantRead(); // 읽기궈ᄂ하ᄂ으ᄅ 주ᄂ다.
    }
```

변수 level의 값이 2이므로 조건식의 결과는 2가 되고, 이와 일치하는 case문인 ’case 2 :’로 이동한다. break문이 없으므로 ’case 2 :’에 속한 grantWrite()뿐만 아니라 ’case 1 :’에 속한 grantRead()까지 수행되고 더 이상 문장이 없으므로 switch문을 빠져나온다.<br>switch문의 제약조건<br>switch문의 조건식은 결과값이 반드시 정수이어야 하며, 이 값과 일치하는 case문으로 이 동하기 때문에 case문의 값 역시 정수이어야 한다. 그리고 중복되지 않아야 한다. 같은 값의 case문이 여러 개이면, 어디로 이동해야할 지 알 수 없기 때문이다.<br>게다가 case문의 값은 반드시 상수이어야 한다. 변수나 실수, 문자열은 case문의 값으로사용할 수 없다.<br>switch문의 제약조건

1. switch문의 조건식 결과는 정수 값(long타입 제외) 또는 참조형(객체 주소)만 허용
2. case문에는 정수 값, 문자열 리터럴 또는 참조형만 가능(중복 불가)

I 참고 I JDK 14부터 switch문의 조건식에 int타입과 참조형이 가능하다. JDK 7이전에는 int타입만 가능했다.

```txt
public static void main(String[] args) {
    int num = 10;
    final int ONE = 1;
        ⋯
    switch(result) {
            case '1': // OK. 무ᄂ자 리터러ᄅ(49와 도ᄋ이ᄅ)
            case ONE: // OK. 저ᄋ수 사ᄋ수
            case "YES": // OK. 무ᄂ자여ᄅ 리터러ᄅ. JDK 7부터 허요ᄋ
            case Double d: // OK. 차ᄆ조혀ᄋ. JDK 14부터 허요ᄋ
            case num: // 에러. 벼ᄂ수느ᄂ 부ᄅ가
            case 1.0: // 에러. 시ᄅ수도 부ᄅ가
                ⋯
    }
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

문자 ’1’은 정수 49와 동등하므로 문제가 없고, ONE은 정수가 아닌 것처럼 보이지만, ’final’이 붙은 정수 상수이므로 case문의 값으로 적합하다. 그러나 변수나 실수 리터럴은 case문의 값으로 적합하지 않다. JDK 14부터 switch문의 조건식에 참조형 값을 허용하 면서 case문에도 Double과 같은 참조형이 가능해 졌다. 다만 타입만 적으면 안되고 변수 선언하듯이 ’Double d’와 같은 형식으로 적어야 한다.<br>참조형은 앞으로 자세히 배울 것이니 지금은 가볍게 보고 넘어가자.

```txt
- 예제 4-6/FlowEx6.java
import java.util.*;
class FlowEx6 {
    public static void main(String[] args) {
        System.out.print("혀ᄂ재 워ᄅ으ᄅ 이ᄇ려ᄀ하세요.>");
        Scanner scanner = new Scanner(System.in);
        int month = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ month에 저자ᄋ
        switch(month) {
            case 3:
            case 4:
            case 5:
                System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 보ᄆ이ᄇ니다.");
                break;
            case 6: case 7: case 8:
                System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 여르ᄆ이ᄇ니다.");
                break;
            case 9: case 10: case 11:
                System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 가으ᄅ이ᄇ니다.");
                break;
            default:
    // case 12: case 1: case 2:
                System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 겨우ᄅ이ᄇ니다.");
        }
    } // main의 끄ᄐ
}
```

현재 몇 월인지 입력받아서 해당하는 계절을 출력하는 예제이다. 간단한 예제이므로 별로 설명할 것은 없다 case문은 한 줄에 하나씩 쓰던, 한 줄에 붙여서 쓰던 상관없다.

```txt
case 3:
case 4:
case 5:
    System.out.println("혀ᄂ재의 계
저ᄅ으ᄂ ...");
    break;
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-185_36_122_2120_949.jpg -->

```txt
case 3: case 4: case 5:
    System.out.println("혀ᄂ재의 계
저ᄅ으ᄂ ...");
    break;
```

그리고 예제의 switch문을 if문으로 변경하면 다음과 같다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    if (month == 3 || month == 4 || month == 5) {
        System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 보ᄆ이ᄇ니다.");
    } else if(month==6 || month==7 || month==8) {
        System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 여르ᄆ이ᄇ니다.");
    } else if(month==9 || month==10 || month==11) {
        System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 가으ᄅ이ᄇ니다.");
    } else { // if(month == 12 || month == 1 || month == 2)
        System.out.println("혀ᄂ재의 계저ᄅ으ᄂ 겨우ᄅ이ᄇ니다.");
    }
```

두 문장을 비교해보면, 이 예제에서는 if문보다 switch문이 더 알아보기 쉽고 간결하다는것을 알 수 있다.

- 예제 4-7/FlowEx7.java

```txt
import java.util.*;
class FlowEx7 {
    public static void main(String[] args) {
        System.out.print("가위(1),바위(2),보(3) 주ᄋ 하나르ᄅ 이ᄇ려ᄀ하세요.>");
        Scanner scanner = new Scanner(System.in);
        int user = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ user에 저자ᄋ
        int com = (int) (Math.random() * 3) + 1; // 1,2,3주ᄋ 하Lᅡᅡ com에 저자ᄋ되ᄆ
        System.out.println("다ᄋ시ᄂ으ᄂ "+ user +"이ᄇ니다.");
        System.out.println("커ᄆ으ᄂ "+ com +"이ᄇ니다.");
        switch(user-com) {
            case 2: case -1:
                System.out.println("다ᄋ시ᄂ이 져ᄊ스ᄇ니다.");
                break;
            case 1: case -2:
                System.out.println("다ᄋ시ᄂ이 이겨ᄊ스ᄇ니다.");
                break;
            case 0:
                System.out.println("비겨ᄊ스ᄇ니다.");
    // break; // 마지마ᄀ 무ᄂ자ᄋ이므로 break르ᄅ 사요ᄋ하ᄅ 피ᄅ요가 어ᄡ다.
        }
    } // main의 끄ᄐ
}
```

- 실행결과 1

```txt
가위 (1) , 바위 (2) ,보 (3) 주ᄋ 하나르ᄅ 이ᄇ려ᄀ하세요.>1
다ᄋ시ᄂ으ᄂ 1이ᄇ니다.
커ᄆ으ᄂ 1이ᄇ니다.
비겨ᄊ스ᄇ니다.
```

- 실행결과 2

```txt
가위 (1) , 바위 (2) ,보 (3) 주ᄋ 하나르ᄅ 이ᄇ려ᄀ하세요.>3
다ᄋ시ᄂ으ᄂ 3이ᄇ니다.
커ᄆ으ᄂ 2이ᄇ니다.
다ᄋ시ᄂ이 이겨ᄊ스ᄇ니다.
```

이 예제는 컴퓨터와 사용자가 가위바위보를 하는 간단한 게임이다. 사용자로부터 1(가위),2(바위), 3(보) 중의 하나를 입력받고, 컴퓨터는 1, 2, 3 중에서 하나를 임의로 선택한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

난수(임의의 수)를 얻기 위해서 Math.random()을 사용했는데, 이 메서드는 0.0과 1.0사이의 범위에 속하는 하나의 double값을 반환한다. 0.0은 범위에 포함되고 1.0은 포함되지않는다.

```txt
0.0 <= Math.random() < 1.0
```

만일 1 과 3 사이의 정수를 구하기를 원한다면, 다음과 같은 과정으로 난수를 구하는 식을얻을 수 있다.

1. 각 변에 3을 곱한다.
   $$
   \begin{aligned}
   0.0 * 3 & <=\text { Math.random() } * 3<1.0 * 3 \\
   0.0 & <=\text { Math. } \operatorname{random}() * 3<3.0
   \end{aligned}
   $$
2. 각 변을 int형으로 변환한다.

```txt
(int) 0.0 <= (int) (Math.random() * 3) < (int) 3.0
    0 <= (int) (Math.random() * 3) < 3
```

1. 각 변에 1을 더한다.

```txt
0 + 1 <= (int) (Math.random() * 3) + 1 < 3 + 1
    1 <= (int) (Math.random() * 3) + 1 < 4
```

자, 이제는 1과 3사이의 정수 중 하나를 얻을 수 있다. 1은 포함되고 4는 포함되지 않는다.<br>I 참고 I 순서 2와 3을 바꿔서, 각 변에 1을 먼저 더한 다음 int형으로 변환해도 같은 결과를 얻는다.<br>위와 같이 식을 변환해가며 범위를 조절하면 원하는 범위의 값을 얻을 수 있다. 주사위를 던졌을 때 나타나는 임의의 값을 얻기 위해서는 3대신 6을 곱하면 된다. 그렇게 하면 1과6사이의 값을 얻어낼 수 있을 것이다.<br>이제 사용자가 입력한 값(user)하고 컴퓨터가 생성한 난수(com)하고 비교해서 가위바위 보의 승부결과를 판단해야 한다. 두 값 모두 3 가지 값이 가능하므로, 아래의 표와 같이 모 두 9 가지의 경우의 수를 처리해야한다.

| com  user | 가위(1) | 바위(2) | 보(3) |
|---|---|---|---|

| 가위(1) | 무승부 | 컴승 | 유저승 |
| --- | --- | --- | --- |
| 바위(2) | 유저승 | 무승부 | 컴승 |
| 보(3) | 컴승 | 유저승 | 무승부 |

user에서 com의 값을 빼면, 아래의 표와 같은 결과를 얻는다. 무승부는 0, 컴퓨터 승리는 -1 과 2 , 사용자의 승리는 $1,-2$ 이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

| com  user | 가위(1) | 바위(2) | 보(3) |
| --- | --- | --- | --- |
| 가위(1) | 0 | -1 | -2 |
| 바위(2) | 1 | 0 | -1 |
| 보(3) | 2 | 1 | 0 |

경우의 수가 9개에서 5개로 줄었다. 그리고 이 값들은 모두 정수이므로 switch문으로 처리가 가능하다.

```txt
        switch(user - com) {
            case 2: case -1:
                System.out.println("다ᄋ시ᄂ이 져ᄊ스ᄇ니다.");
                break;
            case 1: case -2:
                System.out.println("다ᄋ시ᄂ이 이겨ᄊ스ᄇ니다.");
                break;
            case 0:
                System.out.println("비겨ᄊ스ᄇ니다.");
// break; // 마지마ᄀ 무ᄂ자ᄋ이므로 break르ᄅ 사요ᄋ하ᄅ 피ᄅ요가 어ᄡ다.
        }
- 예제 4-8/FlowEx8.java
import java.util.*;
class FlowEx8 {
    public static void main(String[] args) {
        System.out.print("다ᄋ시ᄂ의 주미ᄂ버ᄂ호르ᄅ 이ᄇ려ᄀ하세요. (011231-1111222)>");
        Scanner scanner = new Scanner(System.in);
        String regNo = scanner.nextLine();
        char gender = regNo.charAt(7); // 이ᄇ려ᄀ바ᄃ으ᄂ 버ᄂ호의 8버ᄂ째 무ᄂ자르ᄅ gender에 저자ᄋ
        switch(gender) {
            case '1': case '3':
                System.out.println("다ᄋ시ᄂ으ᄂ 나ᄆ자이ᄇ니다.");
                break;
            case '2': case '4':
                System.out.println("다ᄋ시ᄂ으ᄂ 여자이ᄇ니다.");
                break;
            default:
                System.out.println("유효하지 않으ᄂ 주미ᄂ드ᄋ로ᄀ버ᄂ호이ᄇ니다.");
        }
    } // main의 끄ᄃ 시ᄅ유ᄋ그ᄅ과
} 다ᄋ시ᄂ의 주미ᄂ버ᄂ호르ᄅ 이ᄇ려ᄀ하세요. (011231-1111222) >110101-2111222
            다ᄋ시ᄂ으ᄂ 여자이ᄇ니다.
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

주민등록번호를 입력받아서 성별을 출력하는 예제이다. 주민등록번호 뒷 번호의 첫 자리의 값은 성별을 의미하는데, 그 값이 1, 3이면 남자, 2, 4이면 여자를 의미한다. 입력받은주민등록번호는 char배열 regNo에 저장되며, 이 배열에서 성별을 의미하는 값은 8번째에 저장되어 있다.

```txt
gender = regNo.charAt(7); // 이ᄇ려ᄀ바ᄃ으ᄂ 버ᄂ호의 8버ᄂ째 무ᄂ자르ᄅ gender에 저자ᄋ
```

문자열에 저장된 문자는 ’문자열.charAt(index)’로 가져올 수 있는데, index는 연속된정수이며 1이 아닌 0부터 시작한다. 그래서 8번째 문자는 regNo.charAt(8)이 아닌 reg No.charAt(7)이다.

| index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| regNo | ‘1’ | ‘1’ | ‘0’ | ‘1’ | ‘0’ | ‘1’ | ’\_’ | ‘2’ | ‘1’ | ‘1’ | ‘1’ | ‘2’ | ‘2’ | ‘2’ |

char는 하나의 문자를 다루기 위한 타입이지만, char타입의 값은 사실 문자가 아닌 정수(유니코드)로 저장되기 때문에 이처럼 char타입의 값도 switch문의 조건식과 case문에사용할 수 있다.

- 예제 4-9/FlowEx9.java

```txt
import java.util.*;
class FlowEx9 {
    public static void main(String[] args) {
        char grade = ' ';
        System.out.print("다ᄋ시ᄂ의 저ᄆ수르ᄅ 이ᄇ려ᄀ하세요. (1~100) >");
        Scanner scanner = new Scanner(System.in);
        int score = scanner.nextInt(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ score에 저자ᄋ
        switch(score) {
            case 100: case 99: case 98: case 97: case 96:
            case 95: case 94: case 93: case 92: case 91: case 90:
                grade = 'A';
                break;
            case 89: case 88: case 87: case 86: case 85:
            case 84: case 83: case 82: case 81: case 80:
                grade = 'B';
                break;
            case 79: case 78: case 77: case 76: case 75:
            case 74: case 73: case 72: case 71: case 70:
                grade = 'C';
                break;
            default :
                grade = 'F';
        } // end of switch
```

```txt
        System.out.println("당신의 학점은 "+ grade +"입니다.");
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-190_150_475_363_451.jpg -->

- 실행결과 2

당신의 점수를 입력하세요. (1~100)>69당신의 학점은 F입니다.

이 예제는 예제4-4의 if문을 switch문을 이용해서 변경한 것이다. 이 예제를 if문을 이용해서 구현하려면, 조건식이 4 개가 필요하며, 최대 4 번의 조건식을 계산해야 한다.<br>반면에 switch문은 조건식을 1번만 계산하면 되므로 더 빠르다. 그러나 case문이 너무많아져서 좋지 않은 코드가 되었다. 반드시 속도를 더 향상시켜야 한다면 복잡하더라도 switch문을 선택해야겠지만, 그렇지 않다면 이런 경우 if문이 더 적합하다.

- 예제 4-10/FlowEx10.java

```txt
import java.util.*;
class FlowEx10 {
    public static void main(String[] args) {
        int score = 0;
        char grade = ' ';
        System.out.print("다ᄋ시ᄂ의 저ᄆ수르ᄅ 이ᄇ려ᄀ하세요. (1~100) >");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
        score = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 르ᄅ 수ᄉ자로 벼ᄂ화ᄂ
        switch(score/10) {
            case 10:
            case 9 :
                grade = 'A';
                break;
            case 8 :
                grade = 'B';
                break;
            case 7 :
                grade = 'C';
                break;
            default :
                grade = 'F';
        } // end of switch
        System.out.println("다ᄋ시ᄂ의 하ᄀ저ᄆ으ᄂ "+ grade +"이ᄇ니다.");
    } // main의 끄ᄐ
}
```

- 실행결과<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이전 예제에 기교를 부려서 보다 간결하게 작성한 예제이다. score를 10으로 나누면, 전에 배운 것과 같이 ’int / int’의 결과는 int이기 때문에, 예를 들어 ’88/10’은 8.8이 아니라8을 얻는다. 따라서 80과 89사이의 숫자들은 10으로 나누면 결과가 8이 된다. 마찬가지로70과 79사이의 숫자들은 10으로 나누면 7이 된다.<br>이처럼 switch문에서는 조건식을 잘 만들어서 case문의 갯수를 줄이는 것이 중요하다.

## switch문의 중첩

if문처럼 switch문도 중첩이 가능하다. 아래의 예제는 보기만 해도 별도의 설명이 필요 없을 것이다. 한 가지 주의할 점은 중첩 switch문에서 break문을 빼먹기 쉽다는 것이다.

- 예제 4-11/FlowEx11.java

```txt
import java.util.*;
class FlowEx11 {
    public static void main(String[] args) {
        System.out.print("다ᄋ시ᄂ의 주미ᄂ버ᄂ호르ᄅ 이ᄇ려ᄀ하세요. (011231-1111222)>");
        Scanner scanner = new Scanner(System.in);
        String regNo = scanner.nextLine();
        char gender = regNo.charAt(7); // 이ᄇ려ᄀ바ᄂ으ᄂ 버ᄂ호의 8버ᄂ째 무ᄂ자르ᄅ gender에 저자ᄋ
        switch(gender) {
            case '1': case '3':
                switch(gender) {
                    case '1':
                        System.out.println("다ᄋ시ᄂ으ᄂ 2000녀ᄂ 이저ᄂ에 추ᄅ새ᄋ하ᄂ 나ᄆ자이ᄇ니다.");
                        break;
                    case '3':
                        System.out.println("다ᄋ시ᄂ으ᄂ 2000녀ᄂ 이후에 추ᄅ새ᄋ하ᄂ 나ᄆ자이ᄇ니다.");
                }
                break; // ᄋl break무ᄂ으ᄅ 빼매ᄀ지 않도로ᄀ 주의
            case '2': case '4':
                switch(gender) {
                    case '2':
                        System.out.println("다ᄋ시ᄂ으ᄂ 2000녀ᄂ 이저ᄂ에 추ᄅ새ᄋ하ᄂ 여자이ᄇ니다.");
                        break;
                    case '4':
                        System.out.println("다ᄋ시ᄂ으ᄂ 2000녀ᄂ 이후에 추ᄅ새ᄋ하ᄂ 여자이ᄇ니다.");
                        break;
                }
                break;
            default:
                System.out.println("유효하지 않으ᄂ 주미ᄂ드ᄋ로ᄀ버ᄂ호이ᄇ니다.");
        }
    } // main의 끄ᄐ
} 다ᄋ시ᄂ의 주미ᄂ버ᄂ호르ᄅ 이ᄇ려ᄀ하세요. (011231-1111222)>010101-4111222
        다ᄋ시ᄂ으ᄂ 2000녀ᄂ 이후에 추ᄅ새ᄋ하ᄂ 여자이ᄇ니다.
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## switch식(switch expression)

JDK 14부터 switch문의 기능이 확장되어서, 전통적으로 문장(statement)이었던 switch 문이 식(式, expression)으로도 쓰일 수 있다. 예제4-10의 switch문을 switch식으로 바꾸면 다음과 같다.

```txt
char grade = switch(score/10) {
    case 9, 10 -> 'A'; // 코ᄆ마(,)로 여러 case르ᄅ 하ᄇ치ᄅ 수 이ᄊ다.
    case 8 -> 'B'; // break;가 어ᄡ어도 다으ᄆ case로 너ᄆ어가지 않느ᄂ다.
    case 7 -> 'C';
    default -> 'F';
}; ← 끄ᄐ에 세미코ᄅ로ᄂ으ᄅ 부ᄐ이느ᄂ거ᄉ으ᄅ 이ᄌ지마ᄅ 거ᄉ
```

코드가 훨씬 간결해 졌다. 예전의 switch문과 비슷하게 작성하는 것도 여전히 가능하다. 하지만 break문 대신 yield문을 사용해서 대입할 값을 지정해야 한다.

I 참고 I yield는 var처럼 상황에 따라 예약어가 되는 문맥 예약어라서 switch식 내에서만 예약어이다.

```txt
char grade = switch(score/10) {
    case 10 :
    case 9 :
        yield 'A'; // score가 900이며ᄂ, grade에 'A'르ᄅ 대이ᄇ
    case 8 : yield 'B';
    case 7 : yield 'C';
    default : yield 'F';
};
```

아무래도 화살표(->)를 사용하는 쪽이 break나 yield를 붙이지 않아도 되니 간결하다. 앞서 break문을 생략하는 코드를 소개했지만, break문을 넣어야하는데 잊는 경우가 많아서의도한 것인지 실수인지 알기 어려워서 break문을 아예 쓰지 않는 쪽으로 변경되었다.

```txt
char grade = switch(score/10) {
    case 9, 10 -> { // 여러 무ᄂ자ᄋ으ᄂ 과ᄅ호{}로 무ᄁ느ᄂ다.
        System.out.println("score = " + score);
        yield 'A'; // yield르ᄅ 새ᄋ랴ᄀ하ᄅ 수 어ᄡ다.
    }
    case 8 -> 'B';
        ⋯
```

case문에 해당하는 문장이 여럿일 때는 괄호\{로 묶는다. break문은 쓰지 않으며 yield는 생략할 수 없다. switch식은 어떤 조건에서도 반드시 결과값을 반환해야 하므로 모든 경우를 다 처리할 수 있어야 한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        char grade = switch(score/10) {
            case 9, 10 -> 'A';
            case 8 -> 'B';
            case 7 -> 'C';
// default -> 'F'; // 이 무ᄂ자ᄋ이 어ᄡ으며ᄂ 에러. 가ᄡ으ᄅ 바ᄂ화ᄂ하ᄅ 수 어ᄡ느ᄂ 겨ᄋ우가 조ᄂ재
        };
```

switch문은 모던 프로그래밍 언어에서 활용도가 높고 점점 복잡해지고 있다. 이 외에도더 많은 기능이 있지만 진도에 맞춰 추가로 설명할 것이다.<br>처음 배울 때는 if문만으로도 프로그래밍이 충분히 가능하므로 switch문에 대한 부담은갖지 않길 바란다. 다음은 예제4-10의 switch문을 식으로 변경한 것이다.

- 예제 4-12/FlowEx12.java

```txt
import java.util.*;
class FlowEx12 {
    public static void main(String[] args) {
        int score = 0;
        System.out.print("다ᄋ시ᄂ의 저ᄆ수르ᄅ 이ᄇ려ᄀ하세요. (1~100)>");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
        score = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 르ᄅ 수ᄉ자로 벼ᄂ화ᄂ
        char grade = switch(score/10) {
            case 9, 10 -> 'A';
            case 8 -> 'B';
            case 7 -> 'C';
            default -> 'F';
        };
        System.out.println("다ᄋ시ᄂ의 하ᄀ저ᄆ으ᄂ "+ grade +"이ᄇ니다.");
    } // main의 끄ᄐ
}
```

- 실행결과

## 2. 반복문 - for, while, do-while

반복문은 어떤 작업이 반복적으로 실행되게 할 때 사용되며, 반복문의 종류로는 for문과 while문, 그리고 while문의 변형인 do-while문이 있다.<br>for문이나 while문에 속한 문장은 조건에 따라 한 번도 실행되지 않을 수 있지만 do- while문에 속한 문장은 무조건 최소한 한 번은 실행될 것이 보장된다. 반복문은 주어진 조건을 만족하는 동안 주어진 문장들을 반복적으로 실행하므로 조건식을 포함하며, if문 과 마찬가지로 조건식의 결과가 true이면 참이고, false면 거짓으로 간주된다.<br>for문과 while문은 구조와 기능이 유사하여 항상 서로 변환이 가능하기 때문에 반복문 을 작성해야할 때 for문과 while문 중 어느 쪽을 선택해도 좋으나 for문은 주로 반복 횟수 를 알고 있을 때 사용한다.

## 2.1 for문

for문은 반복 횟수를 알고 있을 때 적합하다. 구조가 조금 복잡하지만 직관적이라 오히려 이해하기 쉽다. 자세한 설명에 앞서 가장 기본적인 for문의 예를 하나 소개할까 한다. 아 래의 for문은 블럭\{\} 내의 문장을 5번 반복한다. 즉, “I can do it.”이라는 문장이 5번 출 력된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-194_244_924_1280_547.jpg -->

변수 i에 1을 저장한 다음, 매 반복마다 i의 값을 1씩 증가시킨다. 그러다가 i의 값이 5를 넘으면 조건식 ‘i\<=5’ 가 거짓이 되어 반복을 마치게 된다. i의 값이 1부터 5까지 1씩 증가 하니까 모두 5 번 반복한다. 만일 10 번 반복하기를 원한다면, 5 를 10 으로 바꾸기만 하면 된다.<br>이제 for문에 대해 좀 더 자세히 배운 다음에 예제를 통해 자주 사용되는 for문의 형태를 가장 쉬운 것부터 조금씩 난이도를 높여가며 소개할 것이다.

## for문의 구조와 수행순서

for문은 아래와 같이 ‘초기화’, ‘조건식’, ‘증감식’, ‘블럭\{\}’, 모두 4부분으로 이루어져 있으 며, 조건식이 참인 동안 블럭\{\} 내의 문장들을 반복하다 거짓이 되면 반복문을 벗어난다.

```txt
for (초기화;조거ᄂ시ᄀ;즈ᄋ가ᄆ시ᄀ) {
    // 조거ᄂ시ᄀ이 차ᄆ이ᄅ 때 수해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
}
```

I 참고 I 반복하려는 문장이 단 하나일 때는 괄호\{\}를 생략할 수 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

제일 먼저 ‘(1)초기화’가 수행되고, 그 이후부터는 조건식이 참인 동안’(2)조건식 → (3)수행 될 문장 → (4)증감식’의 순서로 반복된다. 그러다가 (2)조건식이 거짓이 되면, for문 전체를 빠져나가게 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-195_336_412_480_775.jpg -->

초기화<br>반복문에 사용될 변수를 초기화하는 부분이며 처음에 한번만 수행된다. 보통 변수 하나로 for문을 제어하지만, 둘 이상의 변수가 필요할 때는 아래와 같이 콤마’, 를 구분자로 변수 를 초기화하면 된다. 단, 두 변수의 타입이 같아야 한다.

```txt
for(int i=1;i<=10;i++) { ... } // 벼ᄂ수 i의 가ᄡ으ᄅ 1로 초기화 하ᄂ다.
for(int i=1,j=0;i<=10;i++) { ... } // intEr이ᄇ의 벼ᄂ수 i와 j르ᄅ 서ᄂ어ᄂ하고 초기화
```

조건식<br>조건식의 값이 참(true)이면 반복을 계속하고, 거짓(false)이면 반복을 중단하고 for문을 벗어난다. for의 뜻이 ‘~하는 동안’이므로 조건식이 ’참인 동안’ 반복을 계속한다고 생각하 면 쉽다.

```txt
for(int i=1;i<=10;i++) { ... } // 'i<=10'가 차ᄆ이ᄂ 도ᄋ아ᄂ 브ᄅ러ᄀ{}아ᄂ의 무ᄂ자ᄋ드ᄅ으ᄅ 바ᄂ보ᄀ
```

조건식을 잘못 작성하면 블럭\{\} 내의 문장이 한 번도 수행되지 않거나 영원히 반복되는 무한반복에 빠지기 쉬우므로 주의해야 한다. 반복문에서 문제가 발생하는 대부분은 조건 문이며, 블럭\{\} 안에 ’System.out.println(i);’만 넣어도 간단히 확인 가능하다.

증감식<br>반복문을 제어하는 변수의 값을 증가 또는 감소시키는 식이다. 매 반복마다 변수의 값이 증감식에 의해 점차 변하다가 결국 조건식이 거짓이 되어 for문을 벗어나게 된다.

```txt
for(int i=1;i<=10;i++) { ... } // 1부터 10까지 1씨ᄀ 즈ᄋ가
for(int i=10;i>=1;i--) { ... } // 10부터 1까지 1씨ᄀ 가ᄆ소
for(int i=1;i<=10;i+=2) { ... } // 1부터 10까지 2씨ᄀ 즈ᄋ가
for(int i=1;i<=10;i*=3) { ... } // 1부터 10까지 3배씨ᄀ 즈ᄋ가
```

## ［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

증감식도 쉼표，＇를 이용해서 두 문장 이상을 하나로 연결해서 쓸 수 있다．

```txt
for(int i=1, j=10;i<=10;i++, j--) { ... } // i느ᄂ 1부터 10까지 1씨ᄀ 즈ᄋ가하고
        // j느ᄂ 10부터 1까지 1씨ᄀ 가ᄆ소하ᄂ다.
```

지금까지 살펴본 이 3가지 요소는 생략할 수 있으며，심지어 모두 생략 가능하다．<br>for（；；）｛ ．．．\} // 초기화, 조건식, 증감식 모두 생략. 조건식은 참이 된다.

조건식이 생략된 경우，참（true）으로 간주되어 무한 반복문이 된다．대신 블럭｛\} 안에 if문을 넣어서 특정 조건을 만족하면 for문을 빠져 나오게 해야 한다．무한 반복문에 대해서는곧 자세히 다룰 것이다．<br>이제 다양한 예제를 통해 for문을 어떻게 활용하는지 알아보자．

```txt
class FlowEx13 {
    public static void main(String[] args) {
        for(int i=1;i<=5;i++)
            System.out.println(i); // i의 가ᄡ으ᄅ 추ᄅ려ᄀ하ᄂ다.
        for(int i=1;i<=5;i++)
            System.out.print(i); // print()르ᄅ 쓰며ᄂ 가로로 추ᄅ려ᄀ되ᄂ다.
        System.out.println();
    }
}
```

－예제 4－13／FlowEx13．java

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-196_285_190_1240_1259.jpg -->

1 부터 5 까지 세로로 한번，가로로 한번 출력하는 간단한 예제이다．아래의 표를 보면 i의값이 변화함에 따라 조건식의 결과가 어떻게 되는지 알 수 있다．

| i | $\mathrm{i}<=5$ |
| --- | --- |
| 1 | 1 ＜＝ 5 → true 참 |
| 2 | 2 ＜＝ 5 → true 참 |
| 3 | 3 〈＝5 → true 참 |
| 4 | 4 ＜＝ 5 → true 참 |
| 5 | 5 〈＝ 5 → true 참 |
| 6 | 6 ＜＝ 5 → false 거짓，반복종료 |

사실 i의 값은 1부터 6까지 변하지만，i값이 6일 때 조건식이＇6〈＝5＇가 되고，이 식의 결과는 거짓（false）이므로 for문을 벗어나기 때문에 6은 출력되지 않는다．

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 4-14/FlowEx14.java

```txt
class FlowEx14 {
    public static void main(String[] args) {
        int sum = 0; // 하ᄇ계르ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수.
        for(int i=1; i <= 10; i++) {
            sum += i ; // sum = sum + i;
            System.out.printf("1부터 %2d 까지의 하ᄇ: %2d%n",
                i, sum);
        }
    } // main의 끄ᄐ
}
```

- 실행결과<br>\| 1부터 \| 1 \| 까지의 합: \| 1 \|<br>\| :— \| :— \| :— \| :— \|<br>\| 1부터 \| 2 \| 까지의 합: \| 3 \|<br>\| 1부터 \| 3 \| 까지의 합: \| 6 \|<br>\| 1부터 \| 4 \| 까지의 합: \| 10 \|<br>\| 1부터 \| 5 \| 까지의 합: \| 15 \|<br>\| 1부터 \| 6 \| 까지의 합: \| 21 \|<br>\| 1부터 \| 7 \| 까지의 합: \| 28 \|<br>\| 1부터 \| 8 \| 까지의 합: \| 36 \|<br>\| 1부터 \| 9 \| 까지의 합: \| 45 \|<br>\| 1부터 \| 10 \| 까지의 합: \| 55 \|

1 부터 10 까지의 합을 구하는 예제이다. 변수 $i$ 를 1 부터 10 까지 변화시키면서 i를 sum에계속 더해서 누적시킨다. 그 과정을 출력했으므로 어렵지 않게 이해할 수 있을 것이다.

| i | sum = sum +i |
| --- | --- |
| 1 | $1=0+1$ |
| 2 | $3=1+2$ |
| 3 | $6=3+3$ |
| 4 | $10=6+4$ |
| 5 | $15=10+5$ |
| 6 | $21=15+6$ |
| 7 | $28=21+7$ |
| 8 | $36=28+8$ |
| 9 | $45=36+9$ |
| 10 | $55=45+10$ |

이와 같이 매 반복마다 변수들의 값이 어떻게 변하는지 적어보면 이해하기 쉬워진다. 반복회수가 많은 경우에는 일부 구간만 적어보면 된다.

- 예제 4-15/FlowEx15.java

```txt
class FlowEx15 {
    public static void main(String[] args) {
        for(int i=1,j=10;i<=10;i++,j--)
            System.out.printf("%d \t %d%n", i, j);
    }
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>for문에 i와 j, 두 개의 변수로 i는 1부터 10까지 증가시키는 동시에, j는 10부터 1까지 감소시키며 출력한다. 하나의 for문에 두 개의 변수를 이용해서 출력하는 예를 보여준 것인데, 사실 아래처럼 하나의 변수로도 같은 결과를 얻을 수 있다.

```txt
for(int i=1;i<=10;i++) {
    System.out.printf("%d \t %d%n", i, 11-i);
}
```

실행결과에서 i와 j의 관계를 살펴보면, i와 j를 더한 값이 11로 일정하다는 것을 알 수 있다. 이 사실을 이용하면 j는 ’11-i’가 된다. 그래서 j대신 ’11 - i’라는 식을 사용할 수 있는것이다.

$$
\begin{aligned}
& i+j=11 \\
& j=11-i
\end{aligned}
$$

아무래도 for문에 사용되는 변수의 수가 적은 것이 더 효율적이고 간단하다.

```txt
class FlowEx16 {
    public static void main(String[] args) {
        System.out.println("i \t 2*i \t 2*i-1 \t i*i \t 11-i \t i%3 \t i/3");
        System.out.println("----------------------------------------------");
            for(int i=1;i<=10;i++)
                System.out.printf("%d \t %d \t %d \t %d \t %d \t %d \t %d%n",
                    i, 2*i, 2*i-1, i*i, 11-i, i%3, i/3);
    }
}
```

- 예제 4-16/FlowEx16.java<br>\| 실행결과 \| \| \| \| \| \| \|<br>\| :— \| :— \| :— \| :— \| :— \| :— \| :— \|<br>\| i \| 2*i \| 2*i-1 \| i\*i \| 11-i \| i%3 \| i/3 \|<br>\| 1 \| 2 \| 1 \| 1 \| 10 \| 1 \| 0 \|<br>\| 2 \| 4 \| 3 \| 4 \| 9 \| 2 \| 0 \|<br>\| 3 \| 6 \| 5 \| 9 \| 8 \| 0 \| 1 \|<br>\| 4 \| 8 \| 7 \| 16 \| 7 \| 1 \| 1 \|<br>\| 5 \| 10 \| 9 \| 25 \| 6 \| 2 \| 1 \|<br>\| 6 \| 12 \| 11 \| 36 \| 5 \| 0 \| 2 \|<br>\| 7 \| 14 \| 13 \| 49 \| 4 \| 1 \| 2 \|<br>\| 8 \| 16 \| 15 \| 64 \| 3 \| 2 \| 2 \|<br>\| 9 \| 18 \| 17 \| 81 \| 2 \| 0 \| 3 \|<br>\| 10 \| 20 \| 19 \| 100 \| 1 \| 1 \| 3 \|

변수 $i$ 의 값이 1 부터 10 까지 변하는 동안, 다양한 연산자로 짝수 $(2 * \mathrm{i})$, 홀수 $(2 * \mathrm{i}+1)$, 제곱(i\*i), 역순(11-i), 순환(i%3), 반복(i/3)을 구하는 방법을 보여준다.<br>나머지 연산자’%‘를 이용하면 특정 범위의 값들이 순환하면서 반복되는 결과를 얻을 수있다는 것과 나누기 연산자’/’는 같은 값이 연속적으로 반복되게 할 수 있다는 점을 눈여겨보자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 중첩 for문

if문 안에 또 다른 if문을 넣을 수 있는 것처럼, for문 안에 또 다른 for문을 포함시키는 것도 가능하다. 그리고 중첩의 횟수는 거의 제한이 없다. 중첩 for문을 설명하는데 별찍기만큼 좋은 것은 없다. 일단 가장 쉬운 것부터 시작해보자.<br>만일 다음과 같이 5행 10열의 별’\*’을 찍으려면 어떻게 해야 할까?

```txt
**********
**********
**********
**********
**********
```

가장 간단한 방법은 다음과 같이 한 줄씩 5 번 출력하는 것이다.

```txt
System.out.println("**********");
System.out.println("**********");
System.out.println("**********");
System.out.println("**********");
System.out.println("**********");
```

그러나 우리는 for문을 배웠으니, 다음과 같이 간단히 할 수 있다.

```txt
for(int i=1;i<=5;i++) {
    System.out.println("**********"); // 10개의 벼ᄅ으ᄅ 추ᄅ려ᄀ하ᄂ다.
}
```

‘System.out.println(“**********”);’ 역시 반복적인 일을 하는 문장이니 for문으로 바꿀 수 있다. 이 문장을 for문으로 바꾸면 다음과 같다.

System.out.println(“**********”);

```txt
for(int j=1;j<=10;j++) {
    System.out.print("*");
}
System.out.println();
```

왼쪽의 문장 대신 오른쪽의 for문을 이전의 for문에 넣으면 다음과 같이 두 개의 for문이중첩된 형태가 된다.

```txt
for(int i=1;i<=5;i++) {
    System.out.println("**********");
}
```

```txt
for(int i=1;i<=5;i++) {
    for(int j=1;j<=10;j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 4-17/FlowEx17.java

```txt
class FlowEx17 {
    public static void main(String[] args) {
        for(int i=1;i<=5;i++) {
            for(int j=1;j<=10;j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    } // main의 끄ᄐ
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-200_255_225_540_1225.jpg -->

이번엔 다음과 같은 삼각형 모양의 별을 출력해보자.

```txt
*
**
***
****
*****
```

앞서 배운 바와 같이 가로로 출력하려면, println메서드 대신 print메서드로 출력하면 된 다. 아래의 for문은 ’****\*’을 출력하고 줄 바꿈을 한다.

```txt
    for(int j=1;j<=5;j++) {
        System.out.print("*"); // *****으ᄅ 추ᄅ려ᄀ하ᄂ다.
    }
    System.out.println(); // 주ᄅ 바꾸ᄆ으ᄅ 하ᄂ다.
```

따라서 다음과 같이 코드를 작성하면, 우리가 원하는 결과를 얻을 수 있다.

```txt
for(int j=1;j<=1;j++){System.out.print("*");} System.out.println(); // *
for(int j=1;j<=2;j++){System.out.print("*");} System.out.println(); // **
for(int j=1;j<=3;j++){System.out.print("*");} System.out.println(); // ***
for(int j=1;j<=4;j++){System.out.print("*");} System.out.println(); // ****
for(int j=1;j<=5;j++){System.out.print("*");} System.out.println(); // *****
```

위 문장들을 잘 보면 조건식의 숫자만 변할 뿐 나머지는 같다. 똑같은 내용이 반복되는데 반복문으로 간단히 처리할 방법이 없을까? 이럴 때는 한 문장의 조건식에 숫자 대신 변수i를 넣고, 이 문장을 i의 값이 1부터 5까지 증가하는 for문 안에 넣으면 된다.

```txt
for(int i=1;i <= 5;i++) {
    for(int j=1;j<=i;j++) { System.out.print("*");} System.out.println();
}
```

위의 코드는 for문으로 1 부터 5 까지 출력하는 것과 근본적으로 같다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이제 위의 코드로 우리가 원하는 결과를 얻을 수 있는지 직접 확인해 보자.

- 예제 4-18/FlowEx18.java

```txt
import java.util.*;
class FlowEx18 {
    public static void main(String[] args) {
        int num = 0;
        System.out.print("*으ᄅ 추ᄅ려ᄀ하ᄅ 라이ᄂ의 수르ᄅ 이벼ᅧᄀ하세요.>");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
        num = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
        for(int i=0;i<num;i++) {
            for(int j=0;j<=i;j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
*으ᄅ 추ᄅ려ᄀ하ᄅ 라이ᄂ의 수르ᄅ 이벼ᅧᄀ하세요.>10
*
**
***
****
*****
******
*******
********
*********
**********
```

사용자로부터 라인의 수를 입력받아 별을 출력하도록 약간 수정하였다.<br>다음은 반복문의 단골손님인 구구단을 출력하는 예제이다. 예제 $4-16$ 을 약간만 변경한것이다.

- 예제 4-19/FlowEx19.java

```txt
class FlowEx19 {
    public static void main(String[] args) {
        for(int i=2;i<=9;i++) {
            for(int j=1;j<=9;j++) {
                System.out.printf("%d x %d = %d%n",i,j,i*j);
            }
        }
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 × 7 = 14
2 x 8 = 16
2 x 9 = 18
3 x 1 = 3
3 x 2 = 6
    ...주ᄋ가ᄂ새ᄋ랴ᄀ...
9 × 7 = 63
9 × 8 = 72
9 × 9 = 81
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

반복문을 중첩해서 구구단을 출력하는 예제이다. 안쪽 for문은 하나의 단을 출력하고, 바깥쪽 for문은 안쪽 for문을 8번(2단~9단) 반복해서 출력한다. 실행결과를 보면 중첩된 for문이 어떤 순서로 반복되는지 알 수 있다. 바깥쪽 for문이 한번 반복될 때마다 안쪽 for 문의 모든 반복이 끝나고서야 바깥쪽 for문의 다음 반복으로 넘어간다.<br>안쪽 for문의 내부에 문장이 하나뿐 이므로 다음과 같이 괄호를 생략할 수 있다.

```txt
for(int i=2;i<=9;i++) {
    for(int j=1;j <= 9;j++)
        System.out.printf("%d x %d = %d%n", i, j, i*j);
}
```

바깥쪽 for문에게는 안 쪽 for문 전체가 하나의 문장이므로 다음과 같이 바깥쪽 for문의 괄호\{\}도 생략이 가능하다.

```txt
for(int i=2;i<=9;i++)
    for(int j=1;j<=9;j++)
        System.out.printf("%d x %d = %d%n", i, j, i*j);
```

되도록이면 괄호\{\}를 사용하는 것이 좋지만 너무 많아도 복잡하므로 이처럼 간략하게 생 략하는 것도 좋다.

```txt
class FlowEx20 {
    public static void main(String[] args) {
        for(int i=1;i<=3;i++)
            for(int j=1;j<=3;j++)
                for(int k=1;k<=3;k++)
                    System.out.println(""+i+j+k);
    } // main의 끄ᄐ
}
```

- 예제 4-20/FlowEx20.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-202_465_243_1418_1208.jpg -->

3개의 반복문이 중첩되어 있는 경우 어떤 순서로 반복이 수행되는지를 눈으로 직접 확인 할 수 있는 예제이다. 실행결과를 잘 살펴보자. 각 반복문이 3번씩 반복하므로 모두 27번 (3*3*3=27)이 반복된다. i, j, k가 각각1, 2, 3일 때 식 ““+i+j+k는 아래와 같이 계산된 다.”“+i+j+k →”“+1+2+3 →”1”+2+3 → “12”+3 → “123”

I 참고 I 위 과정이 이해되지 않는다면, p.55를 참고하자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 4-21/FlowEx21.java

```txt
class FlowEx21 {
    public static void main(String[] args) {
        for(int i=1;i<=5;i++) {
            for(int j=1;j<=5;j++) {
                System.out.printf("[%d,%d]",i,j);
            }
            System.out.println();
        }
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
    [1,1][1,2][1,3][1,4][1,5]
    [2,1] [2,2] [2,3] [2,4] [2,5]
    [3,1] [3,2] [3,3] [3,4] [3,5]
    [4,1] [4,2] [4,3] [4,4] [4,5]
[5,1] [5,2] [5,3] [5,4] [5,5]
```

2중 반복문을 이용해서 i와 j를 1부터 5까지 1씩 증가시키면서 i와 j의 값을 쌍으로 출력하였다. 이 2중 for문 안에 if문을 넣어서 조건에 맞는 쌍만 출력함으로써 다양한 모양을 만들어 낼 수 있다. 다음의 예제를 보자.

- 예제 4-22/FlowEx22.java

```txt
class FlowEx22 {
    public static void main(String[] args) {
        for(int i=1;i<=5;i++) {
            for(int j=1;j<=5;j++) {
                if(i==j) {
                    System.out.printf("[%d,%d]", i, j);
                } else {
                    System.out.printf("%5c",' ');
                }
            }
            System.out.println();
        }
    } // main의 끄ᄐ
}
```

- 실행결과

```txt
[1,1]
    [2,2]
        [3,3]
            [4,4]
                [5,5]
```

바로 전 예제의 2중 for문에 if문을 넣어서 조건식 ’i==j’를 만족하는 경우에만 i와 j의 값을 출력하고 나머지는 공백을 출력하였다.

i==j

```txt
        [1,1][1,2][1,3][1,4][1,5]
        [2,1][2,2][2,3][2,4][2,5]
        [3,1][3,2][3,3][3,4][3,5]
        [4,1][4,2][4,3][4,4][4,5]
        [5,1][5,2][5,3][5,4][5,5]
```

if문의 조건식을 다르게 하면, 다양한 모양의 출력결과를 얻어낼 수 있다. 여기서 숫자쌍대신 별’\*’을 찍으면 별찍기가 되므로, 이 예제를 이용하면 별찍기가 한결 쉬워진다. 출력되어야할 별의 위치에 해당하는 숫자쌍을 모두 표시한 다음 이 숫자쌍들의 공통점을 찾아서 조건식으로 표현하면 된다.

## 향상된 for문(enhanced for statement)

JDK 5부터 배열과 컬렉션에 저장된 요소에 접근할 때 기존보다 편리한 방법으로 처리할수 있도록 for문의 새로운 문법이 추가되었다.

```txt
for( 타이ᄇ 벼ᄂ수며ᄋ : 배여ᄅ 또느ᄂ 커ᄅ레ᄀ셔ᄂ) { // 조거ᄂ시ᄀ이 어ᄡ다!!!
    // 바ᄂ보ᄀ하ᄅ 무ᄂ자ᄋ
}
```

위의 문장에서 타입은 배열 또는 컬렉션의 요소의 타입이어야 한다. 배열 또는 컬렉션에 저장된 값이 매 반복마다 하나씩 순서대로 읽혀서 변수에 저장된다. 그리고 반복문의 괄호\{\}내에서는 이 변수를 사용해서 코드를 작성한다.

```txt
int[] arr = {10,20,30,40,50};
```

배열 arr을 위와 같이 선언했을 때, 이 배열의 모든 요소를 출력하는 for문은 아래와 같다.

```txt
for(int i=0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-204_142_620_1039_849.jpg -->

위의 왼쪽은 일반적인 for문으로, 그리고 오른쪽은 향상된 for문으로 작성되었다. 두 for 문은 동등하며, 향상된 for문은 골치거리인 조건식이 없어서 문제가 발생할 확률이 줄어든다. 그러나 향상된 for문은 배열이나 컬렉션에 저장된 요소들을 읽어오는 용도로만 사용할 수 있다는 제약이 있다.

아직은 배열을 배우지 않아서 좀 어렵게 느껴질 수도 있는데, 지금은 이해하지 못해도괜챃다. 이런 형태의 for문도 있다는 정도만 알아두어도 앞으로 진도를 나가면서 자연스럽게 익숙해질 것이다.

```txt
- 예제 4-23/FlowEx23.java
```

```txt
class FlowEx23 {
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};
        int sum = 0;
        for(int i=0;i<arr.length;i++)
            System.out.printf("%d ", arr[i]);
        System.out.println();
        for(int tmp : arr) {
            System.out.printf("%d ", tmp);
            sum += tmp;
        }
        System.out.println();
        System.out.println("sum="+sum);
    } // main의 끄ᄐ
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-204_185_303_2199_1148.jpg -->

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.2 while문

for문에 비해 while문은 구조가 간단하다. if문처럼 조건식과 블럭\{\}만으로 이루어져 있 다. 다만 if문과 달리 while문은 조건식이 ‘참(true)인 동안’, 즉 조건식이 거짓이 될 때까지 블럭\{\} 내의 문장을 반복한다.

```txt
while (조거ᄂ시ᄀ) {
    // 조거ᄂ시ᄀ의 여ᄂ사ᄂ겨ᄅ과가 차ᄆ(true) 이ᄂ 도ᄋ아ᄂ, 바ᄂ보ᄀ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
}
```

while문은 먼저 조건식을 평가해서 조건식이 거짓이면 문장 전체를 벗어나고, 참이면 블 럭\{\} 내의 문장을 실행하고 다시 조건식으로 돌아간다. 조건식이 거짓이 될 때까지 이 과정이 계속 반복된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-205_385_407_941_805.jpg -->

1. 조건식이 참(true)이면 블럭\{\}안으로 들어가고, 거짓(false)이면 while문을 벗어난다.
2. 블럭\{\}의 문장을 실행하고 다시 조건식으로 돌아간다.

## for문과 while문의 비교

1부터 10까지의 정수를 순서대로 출력하는 for문을 while문으로 변경하면 아래 오른쪽과같다.

```txt
// 1.초기화, 2.조거ᄂ시ᄀ, 3.즈ᄋ가ᄆ시ᄀ
for(int i=1;i<=10;i++) {
    System.out.println(i);
}
```

⟷

```txt
int i=1; // 1.초기화
while(i<=10) { // 2.조거ᄂ시ᄀ
    System.out.println(i);
    i++; // 3.즈ᄋ가ᄆ시ᄀ
}
```

위의 두 코드는 완전히 동일하다. for문은 초기화, 조건식, 증감식을 한 곳에 모아 놓은 것 일 뿐, while문과 다르지 않다. 그래서 for문과 while문은 항상 서로 변환이 가능하다.<br>그래도 이 경우 for문이 더 간결하고 알아보기 쉽다. 만일 초기화나 증감식이 필요하지 않은 경우라면, while문이 더 적합할 것이다. 앞으로 소개할 예제들은 for문보다 while문 이 더 적합한 것들이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## while문의 조건식은 생략불가

한 가지 주의할 점은 for문과 달리 while문의 조건식은 생략할 수 없다는 것이다.

```txt
while( ) { // 에러. 조거ᄂ시ᄀ이 어ᄡ으ᄆ.
        ...
}
```

그래서 while문의 조건식이 항상 참이 되도록 하려면 반드시 true를 넣어야 한다. 다음의두 반복문은 블럭\{\} 내의 문장을 무한 반복한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-206_160_1280_749_194.jpg -->

```txt
class FlowEx24 {
    public static void main(String[] args) {
        int i= 5;
        while(i--!=0) {
            System.out.println(i + " - I can do it.");
        }
    } // main의 끄ᄐ
}
```

- 예제 4-24/FlowEx24.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-206_667_676_766_772.jpg -->

변수 i의 값만큼 블럭\{\}을 반복하는 예제이다. i의 값이 5이므로 ’I can do it.’이 모두 5번(4~0) 출력되었다. while문의 조건식은 i의 값이 0이 아닌 동안만 참이 되고, i의 값이 매반복마다 1씩 감소하다 0이 되면 조건식은 거짓이 되어 while문을 벗어난다.<br>’i–’가 후위형이므로 조건식이 평가된 후에 i의 값이 감소된다는 점에 주의하자. 그래서 실행결과에서 i의 값이 5~1이 아닌 4~0으로 출력된 것이다.<br>아직 이해가 잘 안 간다면 아래 오른쪽과 같이 조건식에서 감소 연산자

${ }^{\text {‥-'를 분리해보 }}$

자. 좀 더 이해하기 쉬운 코드가 될 것이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-206_210_558_1908_190.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-206_36_123_1996_771.jpg -->

```txt
while(i!=0) {
    i--;
    System.out.println(i);
}
```

그러나 ’–i’와 같은 전위형은 감소 연산자가 조건식에서 분리되면 while문을 벗어나기때문에 전과 다른 문장이 된다. 아래 오른쪽의 while문은 반복을 거듭해도 i의 값이 감소하지 않아서 조건식이 결코 거짓이 될 수 없다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
while(--i!=0) {
    System.out.println(i);
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-207_68_71_353_973.jpg -->

```txt
--i; // while무ᄂ으ᄅ 버ᄉ어나ᄆ
while(i!=0) {
    System.out.println(i);
}
```

예제4-24에서 ‘i–’대신’–i’를 사용한다면, 어떤 결과를 얻을지 예측해보고 예제를 수정하여 직접 결과를 확인해 보자.

```txt
class FlowEx25 {
    public static void main(String[] args) {
        int i=11;
        System.out.println("카우ᄂ트 다우ᄂ으ᄅ 시자ᄀ하ᄇ니다.");
        while(i--!=0) {
            System.out.println(i);
            for(long j=0;j<5_000_000_000L;j++) {
                ;
            }
        }
        System.out.println("GAME OVER");
    }
}
```

- 예제 4-25/FlowEx25.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-207_533_341_843_1286.jpg -->

10부터 0까지 1씩 감소시켜가면서 출력을 하되, for문으로 매 출력마다 약간의 시간이 지연되도록 했다. 컴퓨터의 성능에 따라 지연되는 시간이 달라지므로 지연시간이 너무 짧거나 길면 반복횟수를 적절히 변경하자.

```txt
    for(long j=0;j<5_000_000_000L;j++) {
            ; // 아무러ᄂ 내요ᄋ도 어ᄡ느ᄂ 비ᄂ 무ᄂ자ᄋ
        }
```

이 for문의 블럭\{\} 내에는 아무 일도 하지 않는 빈 문장’;’하나만 있을 뿐 그 외에는 아무것도 없다. 그저 조건식과 증감식을 $2,000,000,000$ 번 반복하면서 시간을 보낼 뿐이다.<br>블럭 내에 문장이 하나뿐일 때 괄호\{\}를 생략할 수 있으므로 위의 for문을 다음과 같이바꿀 수 있다.

```txt
    for(long j=0;j<5_000_000_000L;j++);
```

또는 아래와 같이 괄호\{\}를 써주고 빈 문장’,’을 없앨 수 있다. 블럭\{\}안에는 문장을 넣지않아도 되기 때문이다.

```txt
    for(long j=0;j<5_000_000_000L;j++){}
```

간혹 실수로 다음과 같이 코드를 작성하는 경우가 있는데, 이럴 때는 빈 문장’;’만 for문에속한 것으로 간주되어 블럭\{\}은 반복되지 않는다. 단 한번만 수행된다.

```txt
    for (i=1;i <=10;i++) ; // 비ᄂ 무ᄂ자ᄋ';'으ᄅ 10버ᄂ 바ᄂ보ᄀ하ᄂ다.
    {
        System.out.println("i="+ i); // i=110| 추ᄅ려ᄀ되ᄂ다.
    }
```

for문은 i의 값이 11일 때, 조건식이 거짓이 되어 반복을 마치므로 i의 값은 11이 출력된다.

- 예제 4-26/FlowEx26.java

```txt
import java.util.*;
class FlowEx26 {
    public static void main(String[] args) {
        int num = 0, sum = 0;
        System.out.print("수ᄉ자르ᄅ 이ᄇ려ᄀ하세요. (예:12345)>");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine(); // 화며ᄂ으ᄅ 토ᄋ해 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
        num = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
        while(num!=0) {
            // num으ᄅ 10으로 나누ᄂ 나머지르ᄅ sum에 더하ᄆ
            sum += num%10; // sum = sum + num%10;
            System.out.printf("sum=%3d num=%d%n", sum, num);
            num /= 10; // num = num / 10; num으ᄅ 10으로 나누ᄂ 가ᄡ으ᄅ 다시 num에 저자ᄋ
        }
        System.out.println("가ᄀ자리수의 하ᄇ:"+sum);
    }
}
```

- 실행결과

```txt
수ᄉ자르ᄅ 이ᄇ려ᄀ하세요. (예:12345)>12345
sum = 5 num = 12345
sum = 9 num = 1234
sum = 12 num = 123
sum = 14 num = 12
sum = 15 num = 1
가ᄀ 자리수의 하ᄇ:15
```

사용자로부터 숫자를 입력받고, 이 숫자의 각 자리의 합을 구하는 예제이다. 실행결과에서 알 수 있듯이 12345를 입력하면, 결과는 15(1+2+3+4+5=15)이다.

어떤 수를 10으로 나머지 연산하면 마지막 자리를 얻을 수 있다. 그리고 10으로 나누면마지막 한자리가 제거된다.

$$
\begin{array}{llll}
12345 & \div & 10 & \rightarrow \\
12345 & / & 10 & \rightarrow \\
& 1234
\end{array}
$$

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그래서 입력 받은 숫자 num을 0이 될 때까지 반복해서 10으로 나눠가면서, 10으로 나머 지 연산을 하면 num의 모든 자리를 얻을 수 있다. 이 과정을 단계별로 살펴보면 다음과 같다.

| num | num%10 | sum = sum + num%10  (sum+=num%10) | num = num / 10  (num/=10) |
| --- | --- | --- | --- |
| 12345 | 5 | $5=0+5$ | $1234=12345 / 10$ |
| 1234 | 4 | $9=5+4$ | $123=1234 / 10$ |
| 123 | 3 | $12=9+3$ | $12=123 / 10$ |
| 12 | 2 | $14=12+2$ | $1=12 / 10$ |
| 1 | 1 | $15=14+1$ | $0=1 / 10$ |
| 0 | - | - | - |

num의 값은 ’num/=10’에 의해 한자리씩 줄어들다가 0이 되면, while문의 조건식이 거짓 이 되어 반복을 멈춘다.

- 예제 4-27/FlowEx27.java

```txt
class FlowEx27 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 0;
        // i르ᄅ 1씨ᄀ즈ᄋ가시켜서 sum에 계소ᄀ 더해나가ᄂ다.
        while((sum += ++i) <= 100) {
            System.out.printf("%d - %d%n", i, sum);
        }
    } // main의 끄ᄐ
}
```

- 실행결과

1-1<br>2-3<br>3-6<br>4-10<br>5-15<br>6-21<br>7-28<br>8-36<br>9-45<br>10-55<br>11-66<br>12-78<br>13-91

1부터 몇까지 더하면 누적합계가 100을 넘지 않는 제일 큰 수가 되는지 알아내는 예제이 다. 이전에 비해 조건식 (sum+=++i) 〈=100’이 복잡한데, 아래의 두 식을 하나로 합쳐놓 은 것이라고 생각하면 이해하기 쉬울 것이다.

```txt
    sum += ++i // i’ 의 가ᄡ으ᄅ 1 즈ᄋ가시켜서 sum에 누저ᄀ
    sum <= 100 // sum의 가ᄡ이 100보다 자ᄀ거나 가ᄐ으ᄂ지 화ᄀ이ᄂ
```

식이 좀 복잡하긴 해도 예제가 전체적으로 간결하다. 자바를 배우다보면 이와 같은 식들 이 자주 등장하므로 익숙해져야 한다.

- 예제 4-28/FlowEx28.java

```txt
import java.util.*;
class FlowEx28 {
    public static void main(String[] args) {
        int num;
        int sum = 0;
        boolean flag = true; // while무ᄂ의 조거ᄂ시ᄀ으로 사요ᄋ되ᄅ 벼ᄂ수
        Scanner scanner = new Scanner(System.in);
        System.out.println("하ᄇ계르ᄅ 구하ᄅ 수ᄉ자르ᄅ 이ᄇ려ᄀ하세요. (끄ᄐ내려며ᄂ 0으ᄅ 이ᄇ려ᄀ) ") ;
        while(flag) { // flag의 가ᄡ이 true이므로 조거ᄂ시ᄀ으ᄂ 차ᄆ이 되ᄂ다.
            System.out.print(">>");
            String tmp = scanner.nextLine();
            num = Integer.parseInt(tmp);
            if(num!=0) {
                sum += num; // num이 0이 아니며ᄂ, sum에 더하ᄂ다.
            } else {
                flag = false; // numᄋ| 0이며ᄂ, flag의 가ᄡ으ᄅ false로 벼ᄂ겨ᄋ.
            }
        } // while무ᄂ의 끄ᄐ
    System.out.println("하ᄇ계:"+ sum);
    }
}
```

- 실행결과

```txt
하ᄇ계르ᄅ 구하ᄅ 수ᄉ자르ᄅ 이ᄇ려ᄀ하세요. (끄ᄐ내려며ᄂ 0으ᄅ 이ᄇ려ᄀ)
>>100
>>200
>>300
>>400
    >>0
하ᄇ계:1000
```

사용자로부터 반복해서 숫자를 입력받다가 0을 입력하면 입력을 마치고 총 합을 출력하는예제이다. while문의 조건식으로 변수 flag를 사용했는데, 처음엔 flag에 true를 저장해서 계속 반복을 하다가 사용자가 0을 입력하면 flag의 값을 false로 바뀌서 반복을 멈추게한다.

```txt
    while(flag) { // flag의 가ᄡ이 true이므로 조거ᄂ시ᄀ으ᄂ 차ᄆ이 되ᄂ다.
        System.out.print(">>");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine();
        num = Integer.parseInt(tmp);
        if(num!=0) {
            sum += num; // num이 0이 아니며ᄂ, sum에 더하ᄂ다.
        } else {
            flag = false; // numᄋ= 0이며ᄂ, flag의 가ᄡ으ᄅ false로 벼ᄂ겨ᄋ.
        }
    }
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

while문의 조건식이 상수는 아니지만, 변수가 고정된 값을 유지하므로 무한 반복문과 같다. 그래서 특정 조건을 만족할 때 반복을 멈추게 하는 if문이 반복문 안에 꼭 필요하다.

## 2.3 do-while문

do-while문은 while문의 변형으로 기본적인 구조는 while문과 같으나 조건식과 블럭\{\}의 순서를 바꿔놓은 것이다. 그래서 블럭\{\}을 먼저 실행한 후에 조건식을 평가한다.<br>while문은 조건식의 결과에 따라 블럭\{\}이 한 번도 실행되지 않을 수 있지만, do-while문은 최소한 한번은 실행될 것을 보장한다.

```txt
    do {
        // 조거ᄂ시ᄀ의 여ᄂ사ᄂ겨ᄅ과가 차ᄆ이ᄅ 때 시ᄅ해ᄋ되ᄅ 무ᄂ자ᄋ드ᄅ으ᄅ 저ᄀ느ᄂ다.
    } while (조거ᄂ시ᄀ); ← 끄ᄐ에 ';'으ᄅ 이ᄌ지 않도로ᄀ 주의
```

그리 많이 쓰이지는 않지만, 다음의 예제처럼 반복적으로 사용자의 입력을 받아서 처리할때 유용하다.

- 예제 4-29/FlowEx29.java

```txt
import java.util.*;
class FlowEx29 {
    public static void main(String[] args) {
        int input = 0, answer = 0;
        answer = (int) (Math.random() * 100) + 1; // 1~100사이의 이ᄆ의의 수르ᄅ 저자ᄋ
        Scanner scanner = new Scanner(System.in);
        do {
            System.out.print("1과 100사이의 저ᄋ수르ᄅ 이ᄇ려ᄀ하세요.>");
            input = scanner.nextInt();
            if(input > answer) {
                System.out.println("더 자ᄀ으ᄂ 수로 다시 시도해보세요.");
            } else if(input < answer) {
                System.out.println("더 크ᄂ 수로 다시 시도해보세요.");
            }
        } while(input!=answer);
        System.out.println("저ᄋ다ᄇ이ᄇ니다.");
    }
}
```

- 실행결과

```txt
1과 100사이의 저ᄋ수르ᄅ 이ᄇ려ᄀ하세요.>50
더 자ᄀ으ᄂ 가ᄡ으로 다시 시도해보세요.
1과 100사이의 저ᄋ수르ᄅ 이ᄇ려ᄀ하세요.>25
더 자ᄀ으ᄂ 가ᄡ으로 다시 시도해보세요.
1과 100사이의 저ᄋ수르ᄅ 이ᄇ려ᄀ하세요.>12
더 크ᄂ 가ᄡ으로 다시 시도해보세요.
1과 100사이의 저ᄋ수르ᄅ 이ᄇ려ᄀ하세요.>21
저ᄋ다ᄇ이ᄇ니다.
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Math.random()을 이용해서 1과 100사이의 임의의 수를 변수 answer에 저장하고, 이 값을 맞출 때까지 반복하는 예제이다. 사용자 입력인 input이 변수 answer의 값과 다른 동안 반복하다가 두 값이 같으면 반복을 벗어난다.

```txt
class FlowEx30 {
    public static void main(String[] args) {
        for(int i=1;i<=100;i++) {
            System.out.printf("i=%d ", i);
            int tmp = i;
            do {
                // tmp%10ᄋ= 3의 배수이ᄂ지 화ᄀ이ᄂ(0 제외)
                if(tmp%10%3==0 && tmp%10!=0)
                    System.out.print("짜");
            // tmp /= 10으ᄂ tmp = tmp / 10과 도ᄋ이ᄅ
            } while((tmp/=10)!=0);
            System.out.println();
        }
    } // main
}
```

- 예제 4-30/FlowEx30.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-212_461_190_846_1260.jpg -->

숫자 중에 3의 배수(3, 6, 9)가 포함되어 있으면, 포함된 개수만큼 박수를 치는 369게임을1부터 100까지 출력하는 예제이다. 숫자의 각 자리를 확인해야하므로 예제4-26에서처럼10으로 나누고 10으로 나머지 연산을 한다. 그러나 이 작업은 변수 i에 직접하면 안되고다른 변수에 저장해서 처리해야 한다. 변수 i는 for문의 반복을 제어하는데 사용하는 변수이기 때문이다.

```txt
    int tmp = i; // i의 가ᄡ으ᄅ 다르ᄂ 벼ᄂ수에 저자ᄋ하ᄂ다.
    do {
        if(tmp%10%3==0 && tmp%10!=0) // tmp%100 3의 배수이ᄂ지 화ᄀ이ᄂ(0으ᄂ 제외)
            System.out.print("짜ᄀ");
    } while((tmp/=10)!=0);
```

예를 들어 i의 값이 97일 때, do-while문이 반복되는 동안 변수 tmp의 값은 식’tmp/=10’에 의해 다음과 같이 변화된다.

| tmp | tmp%10 | tmp%10%3 | $\mathrm{tmp}=\mathrm{tmp} / 10$ |
| --- | --- | --- | --- |
| 97 | 7 | 1 | $9=97 / 10$ |
| 9 | 9 | 0 | $0=9 / 10$ |

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

두 번째 반복에서만 if문의 조건식’tmp%10%3==0 && tmp%10!=0’을 만족시키므로 ‘짝’ 이 한번 출력된다는 것을 알 수 있다. 위의 표에서 알 수 있듯이 tmp%10은 tmp의 끝자리 이다. 식 ‘tmp%10%3==0’은 tmp의 끝자리가 3의 배수인지 확인하기 위한 것이다. 이 식 은 tmp%10의 값이 0일 때도 참이므로, 식 ’tmp%10!=0’을’&&’로 연결해서 tmp%10의 값 이 0인 경우를 제외해야 한다.

## 2.4 break문

앞서 switch문에서 break문에 대해 배웠던 것을 기억할 것이다. 반복문에서도 break문 을 사용할 수 있는데, switch문에서 그랬던 것처럼, break문은 자신이 포함된 가장 가까 운 반복문을 벗어난다. 주로 if문과 함께 사용되어 특정 조건을 만족하면 반복문을 벗어나 게 한다.

- 예제 4-31/FlowEx31.java

```txt
class FlowEx31 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 0;
        while(true) {
            if(sum > 100)
                - break;
            ++i;
            sum += i;
        } // end of while
            -
        System.out.println("i=" + i);
        System.out.println("sum=" + sum);
    }
}
```

```txt
i=14
sum=105
```

숫자를 1 부터 계속 더해 나가서 몇까지 더하면 합이 100 을 넘는지 알아내는 예제이다. i의 값을 1부터 1씩 계속 증가시켜가며 더해서 sum에 저장한다. sum의 값이 100을 넘으면 if 문의 조건식이 참이므로 break문이 실행되어 자신이 속한 반복문을 즉시 벗어난다.

이처럼 무한 반복문에는 조건문과 break문이 항상 같이 사용된다. 그렇지 않으면 무한 히 반복되기 때문에 프로그램이 종료되지 않을 것이다.

I 참고 I sum += i;와 ++i; 두 문장을 sum += ++i;과 같이 한 문장으로 줄여 쓸 수 있다. 예제4-27과 비교해보자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.5 continue문

continue문은 반복문 내에서만 사용될 수 있으며, 반복이 진행되는 도중에 continue문을 만나면 반복문의 끝으로 이동하여 다음 반복으로 넘어간다. for문의 경우 증감식으로 이 동하며, while문과 do-while문의 경우 조건식으로 이동한다.<br>continue문은 반복문 전체를 벗어나지 않고 다음 반복을 계속 수행한다는 점이 break 문과 다르다. 주로 if문과 함께 사용되어 특정 조건을 만족하는 경우에 continue문 이후의 문장들을 수행하지 않고 다음 반복으로 넘어가서 계속 진행하도록 한다.<br>전체 반복 중에 특정조건을 만족하는 경우를 제외할 때 유용하다.

- 예제 4-32/FlowEx32.java

```txt
class FlowEx32 {
    public static void main(String[] args) {
        for(int i=0;i <= 10;i++) {
            if (i%3==0)
                - continue;
            System.out.println(i);
        - }
    }
}
```

- 실행결과

```txt
1
2
4
5
7
8
10
```

1과 10사이의 숫자를 출력하되 그 중에서 3의 배수인 것은 제외하도록 하였다. i의 값이 3 의 배수인 경우, if문의 조건식 ‘i%3==0’은 참이 되어 continue문에 의해 반복문의 블럭 끝’\}‘으로 이동된다. 즉, continue문과 반복문 블럭의 끝’\}’ 사이의 문장들을 건너뛰고 반복 을 이어가는 것이다.

- 예제 4-33/FlowEx33.java

```txt
import java.util.*;
class FlowEx33 {
    public static void main(String[] args) {
        int menu = 0;
        int num = 0;
        Scanner scanner = new Scanner(System.in);
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        while(true) {
            System.out.println("(1) square");
            System.out.println("(2) square root");
            System.out.println("(3) log");
            System.out.print("워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0)>");
            String tmp = scanner.nextLine(); // 화며ᄂ에서 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
            menu = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
            if(menu==0) {
                System.out.println("프로그래ᄆ으ᄅ 조ᄋ료하ᄇ니다.");
                break;
            } else if (!(1 <= menu && menu <= 3)) {
                System.out.println("메뉴르ᄅ 자ᄅ모ᄉ 서ᄂ태ᄀ하셔ᄊ스ᄇ니다. (조ᄋ료느ᄂ 0) ");
                continue;
            }
            System.out.println("서ᄂ태ᄀ하시ᄂ 메뉴느ᄂ "+ menu +"버ᄂ이ᄇ니다.");
        }
    } // main의 끄ᄐ
}
```

## 실행결과

```txt
(1) square
(2) square root
(3) log
워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0) >4
메뉴르ᄅ 자ᄅ모ᄉ 서ᄂ태ᄀ하셔ᄊ스ᄇ니다. (조ᄋ료느ᄂ 0)
(1) square
(2) square root
(3) log
워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0) >1
서ᄂ태ᄀ하시ᄂ 메뉴느ᄂ 1버ᄂ이ᄇ니다.
(1) square
(2) square root
(3) log
워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0) >0
프로그래ᄆ으ᄅ 조ᄋ료하ᄇ니다.
```

메뉴를 보여주고 선택하게 하는 예제이다. 메뉴를 잘못 선택한 경우, continue문으로 다시 메뉴를 보여주고, 종료(0)를 선택한 경우 break문으로 반복을 벗어나 프로그램이 종료되도록 했다. 이 예제는 메뉴를 보여주고 선택하는 것을 반복하는 것 외에 별다른 기능이없지만, 곧 이 예제를 좀 더 쓸 만한 것으로 발전시킬 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.6 이름 붙은 반복문

break문은 근접한 단 하나의 반복문만 벗어날 수 있기 때문에, 여러 개의 반복문이 중첩 된 경우에는 break문으로 중첩 반복문을 완전히 벗어날 수 없다. 이때는 중첩 반복문 앞 에 이름을 붙이고 break문과 continue문에 이름을 지정해 줌으로써 하나 이상의 반복문 을 벗어나거나 반복을 건너뛸 수 있다.

- 예제 4-34/FlowEx34.java

```txt
class FlowEx34
{
    public static void main(String[] args)
    {
        // for무ᄂ에 Loop1이라느ᄂ 이르ᄆ으ᄅ 부ᄐ여ᄊ다.
        Loop1 : for(int i=2;i <=9;i++) {
            for(int j=1;j <=9;j++) {
                if(j==5)
                    - break Loop1;
// - break;
// continue Loop1; ●
    // continue; ●
                System.out.println(i+"*"+ j +"="+ i*j);
            } // end of for j <
        - System.out.println();
        } // end of Loop1 <
        -
> 시ᄅ해ᄋ겨ᄅ과
    }
}
2*1=2
    2*2=4
    2*3=6
        2*4=8
```

구구단을 출력하는 예제이다. 제일 바깥에 있는 for문에 Loop1이라는 이름을 붙였다. 그 리고 j가 5일 때 break문을 수행하도록 했다. 반복문의 이름이 지정되지 않은 break문 은 자신이 속한 하나의 반복문만 벗어날 수 있지만, 지금처럼 반복문에 이름을 붙여 주고 break문에 반복문 이름을 지정해주면 둘 이상의 반복문도 벗어날 수 있다.<br>j가 5일 때 반복문 Loop1을 벗어나게 했으므로 2단의 4번째 줄까지 밖에 출력되지 않았 다. 만일 반복문의 이름이 지정되지 않은 break문이었다면 2단부터 9단까지 모두 네 줄씩 출력되었을 것이다.<br>예제에서는 ‘break Loop1;’ 아래의 세 문장들을 주석처리하였다. 이 네 문장(2개의 break문과 2개의 continue문) 중의 하나를 선택하고 선택한 문장을 제외한 나머지는 주 석처리한 다음, 어떤 결과를 얻을지 예측하고 실행한 후에 예측한 결과와 비교해보자.

I 참고 I continue Loop1;과 같은 문장을 쓸 일은 거의 없을 테니 무시해도 좋다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 4-35/FlowEx35.java

```txt
import java.util.*;
class FlowEx35 {
    public static void main(String[] args) {
        int menu = 0, num = 0;
        Scanner scanner = new Scanner(System.in);
        outer:
        while(true) {
            System.out.println("(1) square");
            System.out.println("(2) square root");
            System.out.println("(3) log");
            System.out.print("워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0)>");
            String tmp = scanner.nextLine(); // 화며ᄂ에서 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
            menu = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
            if(menu==0) {
                System.out.println("프로그래ᄆ으ᄅ 조ᄋ료하ᄇ니다.");
                break;
            } else if (!(1<= menu && menu <= 3)) {
                System.out.println("메뉴르ᄅ 자ᄅ모ᄉ 서ᄂ태ᄀ하셔ᄊ스ᄇ니다. (조ᄋ료느ᄂ 0) ");
                continue;
            }
            for(;;) {
                System.out.print("계사ᄂ하ᄅ가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (계사ᄂ 조ᄋ료:0, 저ᄂ체 조ᄋ료: 99) >");
                tmp = scanner.nextLine(); // 화며ᄂ에서 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
                num = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp) 으ᄅ 수ᄉ자로 벼ᄂ화ᄂ
                if(num==0)
                    break; // 계사ᄂ 조ᄋ료. for무ᄂ으ᄅ 버ᄉ어나ᄂ다.
                if(num==99)
                    break outer; // 저ᄂ체 조ᄋ료. for무ᄂ과 while무ᄂ으ᄅ 모두 버ᄉ어나ᄂ다.
                switch(menu) {
                    case 1:
                        System.out.println("result="+ num*num);
                        break;
                    case 2:
                        System.out.println("result="+ Math.sqrt(num));
                        break;
                    case 3:
                        System.out.println("result="+ Math.log(num));
                        break;
                }
            } // for(;;)
        } // while의 끄ᄐ
    } // main의끄ᄐ
}
```

## 실행결과

```txt
(1) square
(2) square root
(3) log
워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0) >1
계사ᄂ하ᄅ 가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (계사ᄂ 조ᄋ료: 0, 저ᄂ체 조ᄋ료: 99)>2
result=4
계사ᄂ하ᄅ 가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (계사ᄂ 조ᄋ료:0, 저ᄂ체 조ᄋ료:99)>3
result=9
계사ᄂ하ᄅ 가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (계사ᄂ 조ᄋ료:0, 저ᄂ체 조ᄋ료: 99)>0
(1) square
(2) square root
(3) log
워ᄂ하느ᄂ 메뉴 (1~3) 르ᄅ 서ᄂ태ᄀ하세요. (조ᄋ료:0) >2
계사ᄂ하ᄅ 가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료:0, 저ᄂ체조ᄋ료:99)>4
result=2.0
계사ᄂ하ᄅ 가ᄡ으ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료:0, 저ᄂ체조ᄋ료: 99) >99
```

이 예제는 예제4-33을 발전시킨 것으로 메뉴를 선택하면 해당 연산을 반복할 수 있게 for문을 추가하였다. 이 예제를 실행해서 다양하게 테스트한 후에 분석하면 더 이해하기 쉬울 것이다.<br>아래와 같이 반복문만 떼어놓고 보면, 무한 반복문인 while문 안에 또 다른 무한 반복문 인 for문이 중첩된 구조라는 것을 알 수 있다. while문은 메뉴를 반복해서 선택할 수 있게 해주고, for문은 선택된 메뉴의 작업을 반복해서 할 수 있게 해준다.

```txt
outer:
while(true) {
    ⋯
    for(;;) {
        ...
        if(num==0) // 계사ᄂ 조ᄋ료. for무ᄂ으ᄅ 버ᄉ어나ᄂ다.
            - break;
        if(num==99) // 저ᄂ체 조ᄋ료. for무ᄂ과 while무ᄂ 모두 버ᄉ어나ᄂ다.
            - break outer;
        ⋯
    } // for(;;)
    >
} // while(true)
    >
```

선택된 메뉴에서 0을 입력하면 break문으로 for문을 벗어나서 다른 메뉴를 선택할 수 있 게 되고, 99를 입력하면 ’break outer;’에 의해 for문과 while문 모두를 벗어나 프로그램 이 종료된다.

[4](about:blank#fn4)Chapter 05<br>배열<br>array<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1. 배열(array)

## 1.1 배열(array)이란?

같은 타입의 여러 변수를 하나로 묶은 것을 ’배열(array)’이라고 한다. 많은 양의 데이터를 저장하기 위해서, 예를 들어 10,000개의 데이터를 저장하기 위해 변수를 그만큼 선언해야 한다면 상상하는 것만으로도 상당히 곤혹스러울 것이다.<br>이런 경우에 배열을 사용하면 많은 양의 데이터를 손쉽게 다룰 수 있다.<br>“배열은 같은 타입의 여러 변수를 하나로 묶은 것”

여기서 중요한 것은 ’같은 타입’이어야 한다는 것이며, 서로 다른 타입의 변수들로 구성된 배열은 만들 수 없다. 한 학급의 시험점수를 저장하고자 할 때가 배열을 사용하기 좋은 예 이다. 만일 배열을 사용하지 않는다면 학생 5 명의 점수를 저장하기 위해서 아래와 같이 5 개의 변수를 선언해야 할 것이다.

```txt
int score1, score2, score3, score4, score5 ;
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-220_177_867_1182_400.jpg -->

- 그림5-2 메모리에 생성된 배열

```txt
- 그리ᄆ5-1 메모리에 새ᄋ서ᄋ되ᄂ 벼ᄂ수드ᄅ
```

변수 대신 배열을 이용하면 다음과 같이 간단히 처리할 수 있다. 변수의 선언과 달리 다뤄 야할 데이터의 수가 아무리 많아도 단지 배열의 길이만 바꾸면 된다.

```txt
int[] score = new int[5]; // 5개의 int 가ᄡ으ᄅ 저자ᄋ하ᄅ 수 이ᄊ느ᄂ 배여ᄅ으ᄅ 새ᄋ서ᄋ하ᄂ다.
```

아래의 그림은 위의 코드가 실행되어 생성된 배열을 그림으로 나타낸 것이다. 값을 저장 할 수 있는 공간은 score\[0\]부터 score\[4\]까지 모두 5개이며, 변수 score는 배열을 다루는 데 필요한 참조 변수일 뿐 값을 저장하기 위한 공간은 아니다

I 참고 I 배열처럼 여러 변수를 하나로 묶은 것을 객체라고 하며, 객체를 다루려면 참조 변수가 필요하다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-220_124_1088_2006_288.jpg -->

- 그림5-2 메모리에 생성된 배열

위의 그림에서 알 수 있듯이, 변수와 달리 배열은 각 저장공간이 연속적으로 배치되어 있 다는 특징이 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1.2 배열의 선언과 생성

배열을 선언하는 방법은 간단하다. 원하는 타입의 변수를 선언하고 변수 또는 타입에 배 열을 의미하는 대괄호\[\]를 붙이면 된다. 대괄호\[\]는 타입 뒤에 붙여도 되고 변수이름 뒤 에 붙여도 되는데, 저자의 경우 대괄호를 타입에 붙이는 쪽을 선호한다. 대괄호가 타입의 일부라고 보기 때문이다.

| 선언 방법 | 선언 예 |
| --- | --- |
| 타입\[ \] 변수이름; | int\[\] score;  String\[\] name; |
| 타입 변수이름\[ \]; | int score\[\];  String name\[\]; |

△ 표5-1 배열의 선언 방법과 선언 예

## 배열의 생성

배열을 선언한 다음에 배열을 생성해야 한다. 배열을 선언하는 것은 단지 생성된 배열을 다루기 위한 참조변수를 위한 공간이 만들어질 뿐이고, 배열을 생성해야만 비로소 값을 저장할 공간이 만들어진다. 배열을 생성하려면 연산자 ’new’와 함께 배열의 타입과 길이 를 지정해 주어야 한다.

```txt
타이ᄇ[] 벼ᄂ수이르ᄆ; // 배여ᄅ으ᄅ 서ᄂ어ᄂ(배여ᄅ으ᄅ 다루기 위하ᄂ 차ᄆ조 벼ᄂ수 서ᄂ어ᄂ)
벼ᄂ수이르ᄆ = new 타이ᄇ[기ᄅ이]; // 배여ᄅ으ᄅ 새ᄋ서ᄋ(시ᄅ제 저자ᄋ 고ᄋ가ᄂ으ᄅ 새ᄋ서ᄋ)
```

아래의 코드는 ’길이가 5 인 int배열’을 생성한다.

```txt
int[] score; // int타이ᄇ의 배여ᄅ으ᄅ 다루기 위하ᄂ 차ᄆ조 벼ᄂ수 score서ᄂ어ᄂ
score = new int[5]; // intEF이ᄇ의 가ᄡ 5개르ᄅ 저자ᄋ하ᄅ 수 이ᄊ느ᄂ 배여ᄅ
```

다음과 같이 배열의 선언과 생성을 동시에 하면 간략히 한 줄로 할 수 있는데, 대부분의 경우 이렇게 한다.

```txt
int[] score = new int[5]; // 배여ᄅ의 서ᄂ어ᄂ과 새ᄋ서ᄋ으ᄅ 도ᄋ시에
```

이제 배열의 선언과 생성 과정을 단계별로 그림과 함께 자세히 살펴보자.

1. int\[\] score;<br>int타입 배열 참조변수 score를 선언한다. 데이터를 저장할 수 있는 공간은 아직 마련 되지 않았다.

```txt
score
```

□<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. score = new int\[5\];<br>연산자 ’new’에 의해서 메모리의 빈 공간에 5개의 int타입 값을 저장할 수 있는 공간이 마련된다.

| score | score \[0\] | score\[1\] | score\[2\] | score\[3\] | score \[4\] |
| --- | --- | --- | --- | --- | --- |
| □ |  |  |  |  |  |
|  | 0×100 |  |  |  |  |

그리고 각 배열 요소는 자동적으로 int의 기본값(default)인 0으로 초기화된다.

| score | score\[0\] | score\[1\] | score\[2\] | score\[3\] | score \[4\] |
| --- | --- | --- | --- | --- | --- |
|  | 0 | 0 | 0 | 0 | 0 |
|  | 0×100 |  |  |  |  |

끝으로 대입 연산자’=’에 의해 배열의 주소가 int배열 참조 변수 score에 저장된다.

| score |  | score\[0\] | score\[1\] | score \[2\] | score \[3\] | score \[4\] |
| --- | --- | --- | --- | --- | --- | --- |
| 0x100 |  | 0 | 0 | 0 | 0 | 0 |
|  | 0×100 |  |  |  |  |  |

I 참고 I 배열이 주소 $0 \times 100$ 번지에 생성되었다고 가정한 그림이다.

참조 변수 score를 통해서만 배열에 값을 저장하거나 읽어 올 수 있다. 이 배열은 ’길이가 5인 int배열’이며, 참조 변수의 이름을 따서 ’배열 score’라고 부르자.

## 1.3 배열의 길이와 인덱스

생성된 배열의 각 저장공간을 ’배열의 요소(element)’라고 하며, ’배열이름\[인덱스\]’의 형 식으로 배열의 요소에 접근한다. 인덱스(index)는 배열의 요소마다 붙여진 일련번호로 각 요소를 구별하는데 사용된다. 우리가 변수의 이름을 지을 때 score1, score2, score3과 같 이 번호를 붙이는 것과 비슷하다고 할 수 있다. 다만 인덱스는 1이 아닌 0부터 시작한다.

인덱스(index)의 범위는 0 ~ 배열길이-1

예를 들어 길이가 5 인 배열은 모두 5 개의 요소(저장공간)를 가지며 인덱스의 범위는 1 부터 5 까지가 아닌 0 부터 4 까지, 즉 0, 1, 2, 3, 4가 된다.<br>int\[\] score = new int\[5\]; // 길이가 5인 int배열

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-222_205_1089_2102_287.jpg -->

- 그림5-3 배열의 요소와 인덱스

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>배열에 값을 저장하고 읽어오는 방법은 변수와 같다. 변수이름 대신 ’배열이름\[인덱스\]’를 사용한다는 점만 다르다.

```txt
score[3] = 100; // 배여ᄅ score의 4버ᄂ째 요소에 100으ᄅ 저자ᄋ하ᄂ다.
int value = score[3]; // 배여ᄅ score의 4버ᄂ째 요소에 저자ᄋ되ᄂ 가ᄡ으ᄅ 읽어서 value에 저자ᄋ
```

위의 코드를 단계별로 살펴보면 다음과 같다.

1. score\[3\] = 100; // 배열 score의 4번째 요소에 100을 저장한다.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-223_125_1090_742_464.jpg -->
2. int value = score\[3\]; // 배열 score의 4번째 요소의 값을 읽어서 value에 저장.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-223_215_1090_981_464.jpg -->

배열의 다른 장점은 index로 상수 대신 변수나 수식도 사용할 수 있다는 것이다. 그래서 왼쪽의 코드를 오른쪽과 같이 for문을 이용해서 간단히 할 수 있다. 오른쪽 코드는 index 로 상수대신 변수 i를 사용하고, for문으로 변수 i의 값을 0부터 4까지 증가시킨다.

```txt
score[0] = 0;
score[1] = 10;
score[2] = 20;
score[3] = 30;
score[4] = 40;
```

⟶

```txt
for (int i=0; i < 5; i++) {
    score[i] = i * 10;
}
```

for문의 제어변수 i는 배열의 index로 사용하기에 딱 알맞아서, 배열을 다룰 때 for문은 거의 필수적이다. 만일 아래와 같이 괄호\[\] 안에 수식이 포함된 경우, 이 수식이 먼저 계 산된다. 그래야만 배열의 몇 번째 요소인지 알 수 있기 때문이다.

```txt
int tmp = score[i+1];
```

예를 들어 score\[3\]의 값이 100이고, 변수 i의 값이 2일 때, 위의 문장은 다음과 같이 계산 된다.

```txt
int tmp = score[i+1];
→ int tmp = score[2+1];
→ int tmp = score[3];
→ int tmp = 100;
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>배열을 다룰 때 한 가지 주의할 점은 index의 범위를 벗어난 값을 index로 사용하지 않아야 한다는 것이다. 예를 들어 다음과 같이 길이가 5 인 배열이 선언되어 있을 때, index의범위는 0~4이다. 이 때, 이 범위를 벗어나는 값인 5를 index로 사용하면 안된다는 애기다.

```txt
int[] score = new int[5]; // 기ᄅ이가 5이ᄂ int배여ᄅ. index의 버ᄆ위느ᄂ 0~4
        ...
    score[5] = 100; // index의 버ᄆ위(0~4) 르ᄅ 버ᄉ어나ᄂ 가ᄡ으ᄅ index로 사요ᄋ.
```

유효한 범위를 벗어난 값을 index로 사용하는 것은 가장 흔한 실수이다. 그러나 컴파일러는 이러한 실수를 걸러주지 못한다. 왜냐하면 배열의 index로 변수를 많이 사용하는데,변수의 값은 실행 시에 대입되므로 컴파일러는 이 값의 범위를 확인할 수 없다.

그래서 유효한 범위의 값을 index로 사용하는 것은 전적으로 프로그래머의 책임이며, 유효하지 않은 값을 index로 사용하면, 무사히 컴파일을 마쳤더라도 실행 시에 에러(ArrayIndexOutOfBoundsException)가 발생한다.

- 예제5-1/ArrayEx.java

```txt
class ArrayEx {
    public static void main(String[] args) {
        int[] score = new int[5];
        int k = 1;
        score[0] = 50;
        score[1] = 60;
        score[k+1] = 70; // score[2] = 70
        score[3] = 80;
        score[4] = 90;
        int tmp = score[k+2] + score[4]; // int tmp = score[3] + score[4]
        // for무ᄂ으로 배여ᄅ의 모드ᄂ 요소르ᄅ 추ᄅ려ᄀ하ᄂ다.
        for(int i=0; i < 5; i++) {
            System.out.printf("score[%d]:%d%n",i, score[i]);
        }
        System.out.printf("tmp:%d%n", tmp);
        System.out.printf("score[%d]:%d%n",7,score[7]); // index의 버ᄆ위르ᄅ 버ᄉ어나ᄂ 가ᄡ
    } // main
}
```

- 실행결과

```txt
score[0]:50
score[1]:60
score[2]:70
score[3]:80
score[4]:90
tmp:170
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 7
        at ArrayEx1.main(ArrayEx.java:20)
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>앞서 배운 내용을 직접 확인할 수 있는 간단한 예제이다. 배열 score는 길이가 5 이므로 index의 범위가 0~4인데, 일부러 이 범위에 속하지 않는 7을 배열의 index로 지정해서 값을 출력해보았다. 컴파일 시에는 아무런 문제가 없지만, 실행 시에는 아래와 같은 에러 가 발생하였다.

Exception in thread “main” java.lang.ArrayIndexOutOfBoundsException: 7 at ArrayEx.main(ArrayEx.java:20)

위 메시지는 배열의 인덱스가 유효한 범위를 넘었다는 뜻이다.

## 배열의 길이

앞서 배운 것과 같이 배열을 생성할 때 괄호\[\]안에 배열의 길이를 적어야 하는데, 배열의 길이는 배열 요소의 개수, 즉 값을 저장할 수 있는 공간의 개수다.<br>당연히 배열의 길이는 양의 정수이어야 하며 최대값은 int타입의 최대값, 약 20억이다. 실제로 이렇게 큰 배열을 생성하는 경우는 꽤 드무니까 배열의 길이는 거의 제약이 없다 고 할 수 있다.

```txt
타이ᄇ[] 배여ᄅ이르ᄆ = new 타이ᄇ[기ᄅ이];
int[] arr = new int[5]; // 기ᄅ이가 5이ᄂ int배여ᄅ
```

그런데 길이가 0인 배열도 생성이 가능하다. 길이가 0이라는 애기는 값을 저장할 수 있는 공간이 하나도 없다는 뜻인데, 이런 배열을 생성하는 것이 무슨 의미가 있을까?

```txt
int[] arr = new int[0]; // 기ᄅ이가 0이ᄂ 배여ᄅ도 새ᄋ서ᄋ이 가느ᄋ하다!!!
```

그래도 프로그래밍을 하다보면 길이가 0인 배열이 필요한 상황이 있고 나름 유용하다. 앞 으로 진도를 나가면서 길이가 0인 배열이 필요한 상황을 만나게 될 것이므로 지금은 자바 에서 ’배열의 길이가 0일 수도 있다.’는 것만 기억하자.

배열의 길이는 int범위의 양의 정수(0 포함)이어야 한다.

## 배열이름.length

배열의 길이는 ’배열이름.length’를 통해서 알 수 있다. 아래의 코드에서 배열 arr의 길이 가 5이므로 arr.length의 값도 5이다.

```txt
int[] arr = new int[5]; // 기ᄅ이가 5이ᄂ int배여ᄅ
int tmp = arr.length; // arr.length의 가ᄡ으ᄂ 5이고 tmp에 5가 저자ᄋ되ᄂ다.
```

배열은 한번 생성하면 길이를 변경할 수 없기 때문에, ’배열이름.length’는 상수다. 즉, 값 을 읽을 수만 있을 뿐 변경할 수 없다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
int[] arr = new int[5];
arr.length = 10; // 에러. 배여ᄅ의 기ᄅ이느ᄂ 벼ᄂ겨ᄋ하ᄅ 수 어ᄡ으ᄆ.
```

아래의 코드는 배열의 각 요소를 for문을 이용해서 출력한다. 여기서 배열 score의 길이는6이며, index의 범위는 0~5이다.

```txt
int[] score = new int[6]; // 배여ᄅ의 기ᄅ이느ᄂ 6이고 index버ᄆ위느ᄂ 0~5
for (int i=0; i < 6; i++) {
    System.out.println(score[i]);
}
```

이 때 코드를 다음과 같이 변경하여 배열의 길이를 줄인다면, 유효한 index의 범위는0~4가 된다.

```txt
int[] score = new int[5]; // 배여ᄅ의 기ᄅ이르ᄅ 6에서 5로 벼ᄂ겨ᄋ.
for (int i=0; i < 6; i++) { // 시ᄅ수로 조거ᄂ시ᄀ으ᄅ 벼ᄂ겨ᄋ하지 않으ᄆ
    System.out.println(score[i]); // 에러바ᄅ새ᄋ!!!
}
```

배열의 길이가 변경되었으니 for문의 조건식도 변경해야 한다. 그런데 이것을 잊고 실행 하면 for문은 배열의 유효한 index 범위인 0~4를 넘어 0부터 5까지 반복하기 때문에 6번 째 반복에서 예외(index가 유효한 범위를 벗어났다는 에러)가 발생하여 비정상적으로 종료될 것이다.

그래서 for문의 조건식에 배열의 길이를 대신 ’배열이름.length’를 적는 것이 좋다.

```txt
int[] score = new int[5]; // 배여ᄅ의 기ᄅ이르ᄅ 6에서 5로 벼ᄂ겨ᄋ
for (int i=0; i < score.length; i++) { // 조거ᄂ시ᄀ으ᄅ 벼ᄂ겨ᄋ하지 않아도 되ᄆ
    System.out.println(score[i]);
}
```

’배열이름.length’는 배열의 길이가 변경되면 자동적으로 같이 변경되므로, 배열과 함께사용되는 for문의 조건식을 일일이 변경해주지 않아도 된다.

```txt
for (int i=0; i < 6; i++) { ⟶ for (int i=0; i < score.length; i++) {
```

for문뿐만 아니라, 모든 경우에 배열의 길이를 직접 적어주는 것보다 ’배열이름.length’를사용하는 것이 코드의 관리가 쉽고 에러가 발생할 확률이 적어진다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>배열의 길이 변경하기<br>배열은 한번 선언되고 나면 길이를 변경할 수 없다고 배웠는데, 그렇다면 배열에 저장할 공간이 부족한 경우에는 어떻게 해야 할까? 더 큰 길이의 새로운 배열을 생성한 다음, 기 존의 배열에 저장된 값들을 새로운 배열에 복사하면 된다.

배열의 길이를 변경하는 방법 :

1. 더 큰 배열을 새로 생성한다.
2. 기존 배열의 내용을 새로운 배열에 복사한다.

이런 작업들은 비용이 많이 들기 때문에, 처음부터 배열의 길이를 넉넉하게 잡아줘서 새 로 배열을 생성해야하는 일이 가능한 적게 발생하도록 해야 한다. 그렇다고 배열의 길이 를 너무 크게 잡으면 메모리를 낭비하게 되므로, 기존의 2 배의 길이로 생성하는 것이 보 통이다.<br>보다 자세한 내용은 ’1.5 배열의 복사’에서 다룬다.

## 1.4 배열의 초기화

배열은 생성과 동시에 자동으로 자신의 타입에 해당하는 기본값으로 초기화되므로 배열 을 사용하기 전에 따로 초기화를 해주지 않아도 되지만, 원하는 값을 저장하려면 아래와 같이 각 요소마다 값을 지정해 줘야한다.

```txt
int[] score = new int[5]; // 기ᄅ이가 5이ᄂ int혀ᄋ 배여ᄅ으ᄅ 새ᄋ서ᄋ하ᄂ다.
score[0] = 50; // 가ᄀ 요소에 지ᄀ저ᄇ 가ᄡ으ᄅ 저자ᄋ하ᄂ다.
score[1] = 60;
score[2] = 70;
score[3] = 80;
score[4] = 90;
```

배열의 길이가 큰 경우에는 이렇게 요소 하나하나에 값을 지정하기 보다는 for문을 사용 하는 것이 좋다. 위의 코드를 for문을 이용해서 바꾸면 다음과 같다.

```txt
int[] score = new int[5]; // 기ᄅ이가 5이ᄂ int혀ᄋ 배여ᄅ으ᄅ 새ᄋ서ᄋ하ᄂ다.
for(int i=0; i < score.length; i++)
    score[i] = i * 10 + 50;
```

그러나 for문으로 배열을 초기화하려면, 저장하려는 값에 일정한 규칙이 있어야만 가능하 기 때문에 자바에서는 다음과 같이 배열을 간단히 초기화 할 수 있는 방법을 제공한다.

```txt
int[] score = new int[]{ 50, 60, 70, 80, 90}; // 배여ᄅ의 새ᄋ서ᄋ과 초기화르ᄅ 도ᄋ시에
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

저장할 값들을 괄호\{\} 안에 쉼표로 구분해서 나열하면 되며, 괄호\{\} 안의 값의 개수에 의해 배열의 길이가 자동으로 결정되기 때문에 괄호\[\] 안에 배열의 길이는 적지 않는다.

```txt
int[] score = new int[]{ 50, 60, 70, 80, 90};
int[] score = { 50, 60, 70, 80, 90}; // new int[]르ᄅ 새ᄋ랴ᄀ하ᄅ 수 이ᄊ으ᄆ
```

심지어는 위와 같이 ’new 타입\[\]’을 생략하여 코드를 더 간단히 할 수도 있다. 아무래도생략된 형태의 코드가 더 간단하므로 자주 사용된다. 다만 다음과 같이 배열의 선언과 생성을 따로 하는 경우에는 생략할 수 없다는 것만 주의하자.

```txt
int[] score;
score = new int[]{ 50, 60, 70, 80, 90}; // OK
score = { 50, 60, 70, 80, 90}; // 에러. new int[]르ᄅ 새ᄋ랴ᄀ하ᄅ 수 어ᄡ으ᄆ
```

또 다른 예로, 아래와 같이 매개변수로 int배열을 받는 add메서드가 정의되어 있고 이 메서드를 호출해야할 경우 역시 ’new 타입\[ \]’을 생략할 수 없으며, 이유는 같다.

```txt
int add(int[] arr) { /* 내요ᄋ 새ᄋ랴ᄀ */ } // add메서드
int result = add(new int[]{ 100, 90, 80, 70, 60}); // OK
int result = add({ 100, 90, 80, 70, 60}); // 에러. new int[]르ᄅ 새ᄋ랴ᄀ하ᄅ 수 어ᄡ으ᄆ
```

그리고 괄호\{\} 안에 아무 것도 넣지 않으면, 길이가 0인 배열이 생성된다. 배열을 가리키는 참조변수를 null대신 길이가 0인 배열로 초기화하기도 한다. 아래의 세 문장은 모두 길이가 0인 배열을 생성한다.

```txt
int[] score = new int[0]; // 기ᄅ이가 0이ᄂ 배여ᄅ
int[] score = new int[]{}; // 기ᄅ이가 0이ᄂ 배여ᄅ
int[] score = {}; // 기ᄅ이가 0이ᄂ 배여ᄅ, new int[]가 새ᄋ랴ᄀ되ᄆ
```

## 배열의 출력

배열을 초기화할 때 for문을 사용하듯이, 배열에 저장된 값을 확인할 때도 다음과 같이 for문을 사용하면 된다.

```txt
int[] iArr = { 100, 95, 80, 70, 60 };
// 배여ᄅ의 요소르ᄅ 수ᄂ서대로 하나씨ᄀ 추ᄅ려ᄀ
for(int i=0;i < iArr.length; i++) {
    System.out.println(iArr[i]);
}
```

println메서드는 출력 후에 줄 바꿈을 하므로, 여러 줄에 출력되어 보기 불편할 때가 있다. 그럴 때는 다음과 같이 출력 후에 줄 바꿈을 하지 않는 print메서드를 사용하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
int[] iArr = { 100, 95, 80, 70, 60 };
for(int i=0;i < iArr.length; i++) {
    System.out.print(iArr[i]+","); // 가ᄀ 요소가ᄂ의 구벼ᄅ으ᄅ 위해 쉬ᄆ표르ᄅ 너ᄋ느ᄂ다.
}
System.out.println(); // 다으ᄆ 추ᄅ려ᄀ이 바로 이어지지 않도로ᄀ 주ᄅ 바꾸ᄆ으ᄅ 하ᄂ다.
```

더 간단한 방법은 ‘Arrays.toString(배열이름)’메서드를 사용하는 것이다. 이 메서드는 배열의 모든 요소를’\[첫번째 요소, 두번째 요소, …\]’와 같은 형식의 문자열로 만들어서 반환한다. 이 메서드와 관련된 자세한 내용은 진도를 나가면서 자연스럽게 알게 될 것들이므로 지금은 이 메서드를 이용하면 배열의 내용을 쉽게 확인할 수 있다는 것만 알아두자.

I 참고 I Arrays.toString()을 사용하려면, ’import java.util.\*;’를 추가해 야 한다.

```txt
int[] iArr = { 100, 95, 80, 70, 60 };
// 배여ᄅ iArr의 모드ᄂ 요소르ᄅ 추ᄅ려ᄀ하ᄂ다. [100, 95, 80, 70, 60]이 추ᄅ려ᄀ되ᄂ다.
System.out.println(Arrays.toString(iArr));
```

만일 iArr의 값을 바로 출력하면 어떻게 될까? iArr은 참조변수니까 변수에 저장된 값, 즉’배열의 주소’가 출력될 것으로 생각했다면 지금까지 잘 이해하고 있는 것이다.

그러나 이러한 예상과는 달리 ‘[타입@주소](mailto:%ED%83%80%EC%9E%85@%EC%A3%BC%EC%86%8C)’의 형식으로 출력된다.’\[I’는 1차원 int배열이라는 의미이고, ’@’뒤에 나오는 16진수는 배열의 주소인데 실제 주소가 아닌 내부 주소이다. 이 내용은 지금 진도와 맞지 않는 내용이므로 가볍게 참고만 하고, 배열을 가리키는참조변수를 출력해봐야 별로 얻을 정보가 없다는 정도만 기억하자.

```txt
// 배여ᄅ으ᄅ 가리키느ᄂ 차ᄆ조벼ᄂ수 iArr의 가ᄡ으ᄅ 추ᄅ려ᄀ하ᄂ다.
System.out.println(iArr); // [I@14318bb와 가ᄐ으ᄂ 혀ᄋ시ᄀ의 무ᄂ자여ᄅ이 추ᄅ려ᄀ되ᄂ다.
```

예외적으로 char배열은 println메서드로 출력하면 각 요소가 구분자없이 그대로 출력되는데, 이것은 println메서드가 char배열일 때만 이렇게 동작하도록 작성되었기 때문이다.

```txt
    char[] chArr = { 'a', 'b', 'c', 'd' };
    System.out.println(chArr); // abcd가 추ᄅ려ᄀ되ᄂ다.
```

- 예제 5-2/ArrayEx2.java

```txt
import java.util.*; // Arrays.toString()으ᄅ 사요ᄋ하기 위해 추가
class ArrayEx2 {
    public static void main(String[] args) {
        int[] iArr1 = new int[10];
        int[] iArr2 = new int[10];
// int[] iArr3 = new int[]{100, 95, 80, 70, 60};
        int[] iArr3 = {100, 95, 80, 70, 60};
        char[] chArr = {'a', 'b', 'c', 'd'};
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        for(int i=0; i < iArr1.length; i++ ) {
            iArr1[i] = i + 1; // 1~10의 수ᄉ자르ᄅ 수ᄂ서대로 배여ᄅ에 너ᄒ느ᄂ다.
        }
        for(int i=0; i < iArr2.length; i++ ) {
            iArr2[i] = (int) (Math.random()*10) + 1; // 1~10의 가ᄡ으ᄅ 배여ᄅ에 저자ᄋ
        }
        // 배여ᄅ에 저자ᄋ되ᄂ 가ᄡ드ᄅ으ᄅ 추ᄅ려ᄀ하ᄂ다.
        for(int i=0; i < iArr1.length;i++) {
            System.out.print(iArr1[i]+",");
        }
        System.out.println();
        System.out.println(Arrays.toString(iArr2));
        System.out.println(Arrays.toString(iArr3));
        System.out.println(Arrays.toString(chArr));
        System.out.println(iArr3);
        System.out.println(chArr);
    }
}
```

- 실행결과

```txt
1,2,3,4,5,6,7,8,9,10,
[3, 4, 8, 10, 1, 10, 6, 2, 7, 1]
[100, 95, 80, 70, 60]
[a, b, c, d]
[I@14318bb ← 시ᄅ해ᄋ하ᄅ 때 마다 다ᄅ라지ᄅ 수 이ᄊ다.
abcd
```

## 1.5 배열의 복사

배열은 한번 생성하면 그 길이를 변경할 수 없기 때문에 더 많은 저장공간이 필요하면 보 다 큰 배열을 새로 만들고 이전 배열로부터 내용을 복사해야 한다.<br>배열을 복사하는 방법은 두 가지가 있는데, 먼저 for문을 이용해서 배열을 복사하는 방 법은 다음과 같다.

```txt
int[] arr = {1,2,3,4,5}; // arr.length느ᄂ 5
        ⋯
    int[] tmp = new int[arr.length*2]; // 1. arr보다 기ᄅ이가 2배이ᄂ 배여ᄅ 새ᄋ서ᄋ
    for(int i=0; i < arr.length;i++) // 2. arr의 내요ᄋ으ᄅ tmp에 보ᄀ사
        tmp[i] = arr[i]; // arr[i]의가ᄡ으ᄅ tmp[i]에저자ᄋ
    arr = tmp; // 3. 차ᄆ조벼ᄂ수 arr이 새로우ᄂ 배여ᄅ으ᄅ 가리키게 하ᄂ다.
```

이 작업은 꽤 비용이 많이 들기 때문에, 처음부터 배열의 길이를 넉넉하게 잡아줘서 새로 배열을 생성해야하는 상황이 가능한 적게 발생하도록 해야 한다. 그렇다고 배열의 길이를 너무 크게 잡으면 메모리를 낭비하게 되므로, 위의 코드에서처럼 기존의 2배정도의 길이 로 배열을 생성하는 것이 좋다.<br>이 과정을 단계별로 그림과 함께 살펴보면 다음과 같다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 배열 arr의 길이인 arr.length의 값이 5이므로 길이가 10인 int배열 tmp가 생성되고, 배열 tmp의 각 요소는 int의 기본값인 0 으로 초기화된다.

```txt
    int[] tmp = new int[arr.length*2];
    → int[] tmp = new int[5*2];
    → int[] tmp = new int[10];
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-231_122_763_588_368.jpg -->

| tmp | tmp \[0\] | tmp \[1\] | tmp \[2\] | tmp \[3\] | tmp \[4\] | tmp \[5\] | tmp \[6\] | tmp \[7\] | tmp \[8\] | tmp \[9\] |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0×200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| $0 \times 200$ |  |  |  |  |  |  |  |  |  |  |

1. for문을 이용해서 배열 arr의 모든 요소에 저장된 값을 하나씩 배열 tmp에 복사한다.

```txt
for(int i=0; i < arr.length;i++)
    tmp[i] = arr[i];
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-231_315_1279_1110_369.jpg -->

1. 참조변수 arr에 참조변수 tmp의 값을 저장한다. arr의 값은 0×100에서 0×200으로 바뀌고, arr 은 배열 tmp를 가리키게 된다.

```txt
    arr = tmp; // 벼ᄂ수 tmp에 저자ᄋ되ᄂ 가ᄡ으ᄅ 벼ᄂ수 arr에 저자ᄋ하ᄂ다.
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-231_315_1280_1680_368.jpg -->

결국 참조변수 arr과 tmp는 같은 배열을 가리키게 된다. 즉, 배열 arr과 배열 tmp는 이름 만 다를 뿐 동일한 배열이다. 그리고 전에 arr이 가리키던 배열은 더 이상 사용할 수 없게 된다.

[5](about:blank#fn5)

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-232_279_1280_298_190.jpg -->

아직 참조 변수에 대해서 자세히 배우지 않았기 때문에 이해하기 어려울 수 있다. 지금은배열의 길이를 변경할 때 이런 식으로 처리한다는 정도만 이해해도 충분하다.

- 예제 5-3/ArrayEx3.java

```txt
class ArrayEx3 {
    public static void main(String[] args) {
        int[] arr = new int[5];
        // 배여ᄅ arr에 1~5르ᄅ 저자ᄋ하ᄂ다.
        for(int i=0; i < arr.length;i++)
            arr[i] = i + 1;
        System.out.println("[벼ᄂ겨ᄋ저ᄂ]");
        System.out.println("arr.length:"+arr.length);
        for(int i=0; i < arr.length;i++)
            System.out.println("arr["+i+"]:"+arr[i]);
        int[] tmp = new int[arr.length*2];
        // 배여ᄅ arr에 저자ᄋ되ᄂ 가ᄡ드ᄅ으ᄅ 배여ᄅ tmp에 보ᄀ사하ᄂ다.
        for(int i=0; i < arr.length;i++)
            tmp[i] = arr[i];
        arr = tmp; // tmp에 저자ᄋ되ᄂ 가ᄡ으ᄅ arr에 저자ᄋ하ᄂ다.
        System.out.println("[벼ᄂ겨ᄋ후]");
        System.out.println("arr.length:"+arr.length);
        for(int i=0; i < arr.length;i++)
            System.out.println("arr["+i+"]:"+arr[i]);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-232_738_248_1102_1197.jpg -->

배열의 복사는 for문보다 System.arraycopy()를 사용하는 것이 빠르다.

System.arraycopy( )를 이용한 배열의 복사<br>for문 대신 System클래스의 arraycopy()를 사용하면 보다 간단하고 빠르게 배열을 복사할 수 있다. for문은 배열의 요소 하나하나에 접근해서 복사하지만, arraycopy()는 지정된 범위의 값들을 한 번에 통째로 복사한다. 각 요소들이 연속적으로 저장되어 있다는 배열의 특성때문에 이렇게 처리하는 것이 가능한 것이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

이전 예제에서 배열의 복사에 사용된 for문을 arraycopy()로 바꾸면 다음과 같다.

```txt
for(int i=0; i < num.length;i++) { newNum[i] = num[i]; }
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-233_47_41_440_989.jpg -->

```txt
System.arraycopy(num, 0, newNum, 0, num.length);
```

arraycopy()를 호출할 때는 어느 배열의 몇 번째 요소에서 어느 배열로 몇 번째 요소로몇 개의 값을 복사할 것인지 지정해줘야 하는데, 다음과 같이 생각하면 이해하기 쉽다.

```txt
System.arraycopy (num, 0, newNum, 0, num.length);
num[0]에서 newNum[0]으로 num.length개의 데이터르ᄅ 보ᄀ사
```

배열 num의 내용을 배열 newNum으로, 배열 num의 첫 번째 요소(num\[0\])부터 시작해 서 num.length개의 데이터를 newNum의 첫 번째 요소(newNum\[0\])에 복사한다.

이때 복사하려는 배열의 위치가 적절하지 못하여 복사하려는 내용보다 여유 공간이 적으면 에러(ArrayIndexOutOfBoundsException)가 발생한다.<br>\| 참고 \| Arrays.copyOf()나 Arrays.copyOfRange()로도 배열을 복사할 수 있다. p. 654

- 예제 5-4/ArrayEx4.java

```txt
class ArrayEx4 {
    public static void main(String[] args) {
        char[] abc = { 'A', 'B', 'C', 'D'};
        char[] num = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
        System.out.println(abc);
        System.out.println(num);
        // 배여ᄅ abc와 num으ᄅ 부ᄐ여서 하나의 배여ᄅ(result) 로 마ᄂ드ᄂ다.
        char[] result = new char[abc.length+num.length];
        System.arraycopy(abc, 0, result, 0, abc.length);
        System.arraycopy(num, 0, result, abc.length, num.length);
        System.out.println(result);
        // 배여ᄅ abc으ᄅ 배여ᄅ num의 처ᄉ 버ᄂ째 위치부터 배여ᄅ abc의 기ᄅ이마ᄂ크ᄆ 보ᄀ사
        System.arraycopy(abc, 0, num, 0, abc.length);
        System.out.println(num);
            // number의 이ᄂ데ᄀ스6 위치에 3개르ᄅ 보ᄀ사
        System.arraycopy(abc, 0, num, 6, 3);
        System.out.println(num);
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-233_35_133_1840_1336.jpg -->

```txt
ABCD
0123456789
ABCD0123456789
ABCD456789
ABCD45ABC9
```

다른 배열과 달리 char배열은 for문을 사용하지 않고도 print()나 println()으로 배열에저장된 모든 문자를 출력할 수 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1.6 배열의 활용

지금까지 배열의 기본적인 내용은 모두 살펴보았는데, 아직 배열을 어떻게 활용해야 할지 감이 잘 오지 않을 것이다. 이제 다양한 예제를 통해서 배열을 어떻게 활용하는지 배워보 자.

| \[예제5-5\] | 총합과 평균 | 배열의 모든 요소를 더해서 총합과 평균을 구한다. |
| --- | --- | --- |
| \[예제5-6\] | 최대값과 최소값 | 배열의 요소 중에서 제일 큰 값과 제일 작은 값을 찾는다. |
| \[예제5-7,8\] | 섞기(shuffle) | 배열의 요소의 순서를 반복해서 바꾼다. (카드섞기, 로또번호생성) |
| \[예제5-9\] | 임의의 값으로 배열 채우기 | 연속 또는 불연속적인 값들로 배열을 초기화 한다. |
| \[예제5-10\] | 정렬하기(sort) | 오름차순, 내림차순으로 배열을 정렬 |
| \[예제5-11\] | 빈도수 구하기 | 배열에 어떤 값이 몇 개 저장되어 있는지 세어서 보여준다. |

이 외에도 배열의 활용방법은 무궁무진하지만, 이 예제들만 잘 배워두면 앞으로 배울 더 높은 수준의 활용을 이해하는데 별 어려움이 없을 것이다.

- 예제 5-5/ArrayEx5.java

```txt
class ArrayEx5 {
    public static void main(String[] args) {
        int sum = 0; // 초ᄋ저ᄆ으ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수
        float average = 0f; // 펴ᄋ규ᄂ으ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수
        int[] score = {100, 88, 100, 100, 90};
            바ᄂ보ᄀ무ᄂ으로 배여ᄅ에 저자ᄋ되
            어 이ᄊ느ᄂ 가ᄡ으ᄅ 모두 더하ᄂ다.
        for (int i=0; i < score.length; i++ ) {
            sum += score[i];
        }
        average = sum / (float)score.length; // 계사ᄂ겨ᄅ과르ᄅ float로 어ᄃ기 위해서 혀ᄋ벼ᄂ화ᄂ
        System.out.println("초ᄋ저ᄆ : " + sum);
> 시ᄅ해ᄋ겨ᄅ과
초ᄋ저ᄆ : 478
펴ᄋ규ᄂ : 95.6
        System.out.println("펴ᄋ규ᄂ : " + average);
    }
}
```

for문을 이용해서 배열에 저장된 값을 모두 더한 결과를 배열의 개수로 나누어서 평균을 구하는 예제이다. 평균을 구하기 위해 전체 합을 배열의 길이인 score.length로 나누었 다.

이 때 int와 int 간의 연산은 int를 결과로 얻기 때문에 정확한 평균값을 얻지 못하므로 score.length를 float로 변환후에 나누었다.

$$
\begin{aligned}
& 478 / 5 \rightarrow 95 \\
& 478 /(\text { float }) 5 \rightarrow 478 / 5.0 \mathrm{f} \rightarrow 478.0 \mathrm{f} / 5.0 \mathrm{f} \rightarrow 95.6 \mathrm{f}
\end{aligned}
$$

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 5-6/ArrayEx6.java

```txt
class ArrayEx6 {
    public static void main(String[] args) {
        int[] score = { 79, 88, 91, 33, 100, 55, 95};
        int max = score[0]; // 배여ᄅ의 처ᄉ 버ᄂ째 가ᄡ으로 최대가ᄡ으ᄅ 초기화
        int min = score[0]; // 배여ᄅ의 처ᄉ 버ᄂ째 가ᄡ으로 최소가ᄡ으ᄅ 초기화
        for(int i=1; i < score.length;i++) {
            if(score[i] > max) {
                max = score[i];
            } else if(score[i] < min) {
                min = score[i];
            }
        } // end of for
        System.out.println("최대가ᄡ :" + max);
        System.out.println("최소가ᄡ :" + min);
    } // end of main
} // end of class
```

배열에 저장된 값 중에서 최대값과 최소값을 구하는 예제이다. 배열의 첫 번째 요소 ’score\[0\]’의 값으로 변수 max와 min을 초기화 하였다.<br>그 다음 반복문을 통해서 배열의 두 번째 요소 ’score\[1\]’부터 max와 비교하기 시작한다. 만일 배열에 담긴 값이 max에 저장된 값보다 크다면, 이 값을 max에 저장한다.<br>이런 식으로 배열의 마지막 요소까지 비교하고 나면 max에는 배열에 담긴 값 중에서 최 대값이 저장된다. 최소값 min 도 같은 방식으로 얻을 수 있다.

- 예제 5-7/ArrayEx7.java

```txt
class ArrayEx7 {
    public static void main(String[] args) {
        int[] numArr = new int[10];
        for (int i=0; i < numArr.length; i++ ) {
            numArr[i] = i; // 배여ᄅ으ᄅ 0~9의 수ᄉ자로 초기화
            System.out.print(numArr[i]);
        }
        System.out.println();
        for (int i=0; i < 100; i++ ) {
            int n = (int) (Math.random() * 10); // 0~9주ᄋ의 하ᄂ 가ᄡ으ᄅ 이ᄆ의로 어ᄃ느ᄂ다.
            int tmp = numArr[0];
            numArr[0] = numArr[n];
            numArr[n] = tmp;
        }
        for (int i=0; i < numArr.length; i++ )
            System.out.print(numArr[i]);
    } // main의끄ᄐ
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-235_98_372_1964_1014.jpg -->

- 실행결과

[6](about:blank#fn6)<br>## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

길이가 10인 배열 numArr을 생성하고 0~9를 순서대로 저장하여 출력한다. 그 다음 random()을 이용해서 배열의 임의의 위치에 있는 값과 배열의 첫 번째 요소인 ’numArr\[0\]’의 값을 교환하는 일을 100번 반복한다.<br>만일 random()을 통해 얻은 값 n이 3이라면, 왼쪽의 코드는 오른쪽처럼 될 것이다.

```txt
int tmp = numArr[0];
numArr[0] = numArr[n];
numArr[n] = tmp;
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-236_30_120_610_772.jpg -->

```txt
int tmp = numArr[0];
numArr[0] = numArr[3];
numArr[3] = tmp;
```

오른쪽의 코드는 numArr\[0\]과 numArr\[3\]에 저장된 값을 서로 바꾸는 일을 한다. 두 컵 에 담긴 내용물을 서로 바꾸려면, 하나의 빈 컵이 더 필요한 것처럼. 두 변수에 저장된 값을 서로 바꾸려면, 별도의 저장공간이 하나 더 필요하다. 여기서는 변수 tmp가 빈 컵의 역할을 한다. 위의 코드를 단계별로 그림을 그려보면 다음과 같다.

1. tmp = numArr\[0\]; // numArr\[0\]의 값을 변수 tmp에 저장한다.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-236_200_1148_1069_289.jpg -->

   1. tmp = numArr $[0]$;
2. numArr $[0]=$ numArr\[3\]; // numArr\[3\]의 값을 numArr\[0\]에 저장한다.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-236_343_1150_1396_289.jpg -->
3. numArr \[3\] = tmp; // tmp의 값을 numArr\[3\]에 저장한다.
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-236_349_1151_1823_288.jpg -->

이 작업을 반복적으로 수행하면, 배열 numArr의 값들이 섞이게 된다. 이 예제를 응용하면 카드게임에서 카드 한 벌을 생성하여 초기화한 다음, 카드를 섞는 것과 같은 일을 할수 있다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

가끔 배열 numArr에 중복된 값이 생길 수도 있지 않느나는 질문을 받는데, 애초에 중복 된 값이 없는 배열에서 값들의 위치만 서로 바꾸는 것이므로 중복된 값이 나올 수가 없다. 종이에 숫자를 써서 직접 해보면 확실히 이해가 될 것이다.

- 예제 5-8/ArrayEx8.java

```txt
class ArrayEx8 {
    public static void main(String[] args) {
        int[] ball = new int[45]; // 45개의 저ᄋ수르ᄅ 저자ᄋ하기 위하ᄂ 배여ᄅ 새ᄋ서ᄋ.
        // 배여ᄅ의 가ᄀ 요소에 1~45의 가ᄡ으ᄅ 저자ᄋ하ᄂ다.
        for(int i=0; i < ball.length; i++)
            ball[i] = i+1; // ball[0]에 1이 저자ᄋ되ᄂ다.
        int temp = 0; // 두 가ᄡ으ᄅ 바꾸느ᄂ데 사요ᄋ하ᄅ 이ᄆ시벼ᄂ수
        int j = 0; // 이ᄆ의의 가ᄡ으ᄅ 어ᄃ어서 저자ᄋ하ᄅ 벼ᄂ수
        // 배여ᄅ의 i버ᄂ째 요소와 이ᄆ의의 요소에 저자ᄋ되ᄂ 가ᄡ으ᄅ 서로 바꿔서 배여ᄅ으ᄅ 서ᄁ느ᄂ다.
        // 0버ᄂ째 부터 5버ᄂ째 요ᄉᄁᄁ지 모두 6개마ᄂ 바꾸ᄂ다.
        for(int i=0; i < 6; i++) {
            j = (int) (Math.random() * 45); // 0~44버ᄆ위의 이ᄆ의의 가ᄡ으ᄅ 어ᄃ느ᄂ다.
            temp = ball[i];
            ball[i] = ball[j];
            ball[j] = temp;
        }
        // 배여ᄅ ball의 아ᄑ에서 부터 6개의 요소르ᄅ 추ᄅ려ᄀ하ᄂ다.
        for(int i=0; i < 6; i++)
            System.out.printf("ball[%d]=%d%n", i, ball[i]);
    }
}
```

```txt
ball [0]=40
ball[1]=12
ball[2]=19
ball[3]=39
ball[4]=29
ball[5]=3
```

로또번호를 생성하는 예제이다. 길이가 45 인 배열에 1 부터 45 까지의 값을 담은 다음 반복 문을 이용해서 ball\[i\]와 임의의 위치에 있는 값과 자리를 바꾸는 것을 6번 반복한다. 이것 은 마치 1부터 45까지의 번호가 쓰인 카드를 잘 섞은 다음 맨 위의 6장을 꺼내는 것과 같 다고 할 수 있다.<br>45개의 요소 중에서 앞에 6개의 요소만 임의의 위치에 있는 요소와 자리를 바꾸면 된다.

```txt
    // 배여ᄅ의 이ᄂ데ᄀ스가 i이ᄂ 요소와 이ᄆ의의 요소 j에 저자ᄋ되ᄂ 가ᄡ으ᄅ 서로 바꿔서 배여ᄅ으ᄅ 서ᄁ느ᄂ다.
    // 0 버ᄂ째부터 5버ᄂ째 요소까지 모두 6개마ᄂ 바꾸ᄂ다.
    for(int i=0; i < 6; i++) {
        j = (int) (Math.random() * 45); // 0~44버ᄆ위의 이ᄆ의의 가ᄡ으ᄅ 어ᄃ느ᄂ다.
        temp = ball[i];
        ball[i] = ball[j];
        ball[j] = temp;
    }
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-237_128_380_2042_950.jpg -->

사실 예제5-7도 100번씩이나 반복할 필요가 없다. 다음과 같이 변경하면 더 효율적이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
for (int i=0; i < numArr.length; i++ ) {
    int n = (int) (Math.random() * 10); // 0~9주ᄋ의 하ᄂ 가ᄡ으ᄅ 이ᄆ의로 어ᄃ느ᄂ다.
    int tmp = numArr[i];
    numArr[i] = numArr[n];
    numArr[n] = tmp;
    }
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-238_102_311_404_887.jpg -->

## 임의의 값으로 배열 채우기

배열을 연속적인 범위의 임의의 값으로 채우는 것은 다음과 같이 random()으로 쉽게 가능하다.

```txt
    for(i=0;i<arr.length;i++) {
        arr[i] = (int) (Math.random()*5); // 0~4버ᄆ위의 이ᄆ의의 가ᄡ으ᄅ 저자ᄋ
    }
```

그러면, 불연속적인 범위의 값들로 배열을 채우는 것은 어떻게 해야 할까? 배열을 하나더 사용하면 된다. 먼저 배열 code에 불연속적인 값들을 담고, 임의로 선택된 index에 저장된 값으로 배열 arr의 요소들을 하나씩 채우면 되는 것이다. 저장된 값에 상관없이 배열의 index는 항상 연속적이기 때문이다. 다음의 예제를 보자.

- 예제 5-9/ArrayEx9.java

```txt
import java.util.*; // Arrays.toString()으ᄅ 사요ᄋ하기 위해 추가
class ArrayEx9 {
    public static void main(String[] args) {
        int[] code = { -4, -1, 3, 6, 11 }; // 부ᄅ여ᄂ소ᄀ저ᄀ이ᄂ 가ᄡ으로 구서ᄋ되ᄂ 배여ᄅ
        int[] arr = new int[10];
        for (int i=0; i < arr.length; i++ ) {
            int tmp = (int) (Math.random() * code.length);
            arr[i] = code[tmp];
        }
        System.out.println(Arrays.toString(arr));
    } // main의끄ᄐ
}
```

$$
[-4,-4,-1,-1,3,6,3,3,11,3] \text { ← 실행할 때 마다 달라진다. }
$$

- 실행결과

배열 code의 길이가 5이므로 code.length의 값은 5가 된다. 따라서 변수 tmp에는 0~4범위에 속한 임의의 정수가 저장되는데, 이 범위는 배열 code의 index의 범위와 일치한다.

```txt
    int tmp = (int) (Math.random()*code.length);
    → int tmp = (int) (Math.random()*5); // tmp에 0,1,2,3,4주ᄋ의 하L나 저자ᄋ되ᄂ
다.
```

만일 i의 값이 0이고, tmp의 값이 4라면 다음과 같이 계산되어 arr\[0\]에는 code\[4\]의 값<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

인 11이 저장된다.

$$
\begin{aligned}
\operatorname{arr}[\mathrm{i}] & =\operatorname{code}[\mathrm{tmp}] ; & & \\
\rightarrow \operatorname{arr}[0] & =\operatorname{code}[4] ; & & / / \operatorname{code}[4] \text { 는 배열 code의 } 5 \text { 번째 요소이므로 11이다. } \\
\rightarrow \operatorname{arr}[0] & =11 ; & & / / \operatorname{arr}[0] \text { 에 11이 저장된다. }
\end{aligned}
$$

위의 상황을 그림으로 그려보면 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-239_140_734_636_399.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-239_127_1252_823_398.jpg -->

이와 같은 과정이 반복

- 예제5-10/ArrayEx10.java

```txt
class ArrayEx10 {
    public static void main(String[] args) {
        int[] numArr = new int[10];
        for (int i=0; i < numArr.length; i++ ) {
            System.out.print(numArr[i] = (int) (Math.random() * 10));
        }
        System.out.println();
        for (int i=0; i < numArr.length-1 ; i++ ) {
            boolean changed = false; // 자리비꾸ᄆ이 바ᄅ새ᄋ해ᄊ느ᄂ지르ᄅ 체크
            for (int j=0; j < numArr.length-1-i ;j++) {
                if(numArr[j] > numArr[j+1]) { // 여ᄑ의 가ᄡ이 자ᄀ으며ᄂ 서로 바꾸ᄂ다.
                    int temp = numArr[j];
                    numArr[j] = numArr[j+1];
                    numArr[j+1] = temp;
                    changed = true; // 자리비꾸ᄆ이 바ᄅ새ᄋ해ᄊ으니 changed르ᄅ true로.
                }
            } // end for j
        if (!changed) break; // 자리비꾸ᄆ이 어ᄡ으며ᄂ 바ᄂ보ᄀ무ᄂ으ᄅ 버ᄉ어나ᄂ다.
> 시ᄅ해ᄋ겨ᄅ과
```

1344213843

---

1342134438

---

1321344348

---

1213343448

---

1123334448

---

```txt
    } // main의끄ᄐ
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>길이가 10인 배열에 0과 9사이의 임의의 값으로 채운 다음, 버블정렬 알고리즘을 통해서 크기순으로 정렬하는 예제이다. 이 알고리즘의 정렬방법은 아주 간단하다. 배열의 길이가 n일 때, 배열의 첫 번째부터 n-1까지의 요소에 대해, 바로 옆의 요소의 값과 크기를 비교 하여 자리바꿈을 반복하는 것이다.

```txt
for (int j=0;j < numArr.length-1-i; j++) {
    // numArr[j]와 바로 여ᄑ의 요소 numArr[j+1]으ᄅ 비교
    if(numArr[j] > numArr[j+1]) { // 외ᄂ쪼ᄀ의 가ᄡ이 크며ᄂ 서로 바꾸ᄂ다.
        int tmp = numArr[j];
        numArr[j] = numArr[j+1];
        numArr[j+1] = tmp;
    }
}
```

예를 들어 다음과 같이 길이가 5인 int배열이 있을 때, 첫 번째와 두 번째 요소의 값을 비 교해서 왼쪽 요소의 값이 크면 두 값의 위치를 바꾸고, 그렇지 않으면 바꾸지 않는다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-240_99_353_1038_655.jpg -->

위의 그림에서 왼쪽의 값이 크므로 두 값의 자리를 바꾼다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-240_99_353_1255_656.jpg -->

두 번째 비교에서는 왼쪽의 값이 작으므로 두 값의 자리를 바꾸지 않는다. 이러한 작업을 배열의 끝에 도달할 때 까지 반복하면 배열에서 제일 큰 값이 배열의 마지막 값이 된다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-240_216_354_1515_655.jpg -->

비교횟수는 모두 4번이며, 이 값은 배열의 길이보다 1이 작은 값(numArr.length-1)이 다. 즉, 배열의 길이가 5 라면, 4 번만 비교하면 된다는 뜻이다. 나머지 값들이 아직 정렬되 지 않았으므로 비교작업을 배열의 첫 번째 요소부터 다시 해야 한다.<br>그러나 처음과 달리 이번엔 세 번만 비교하면 된다. 배열의 마지막 요소는 최대값이므로 비교할 필요가 없기 때문이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-240_109_354_2075_655.jpg -->

이처럼 비교작업(아래의 for문)을 반복할수록 비교할 범위는 하나씩 줄어든다. 그래서 원 래는 배열의 길이에서 1이 작은 ’numArr.length-1’번을 비교해야 하는데, 매 반복마다 비교횟수가 1씩 줄어들기 때문에 바깥쪽 for문의 제어변수 i를 빼주는 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
for (int j=0;j < numArr.length-1-i;j++) {
    // numArr[j]와 바로 여ᄑ의 요소 numArr[j+1]으ᄅ 비교하ᄂ다.
    if(numArr[j] > numArr[j+1]) { // 외ᄂ쪼ᄀ의 가ᄡ이 크며ᄂ 서로 바꾸ᄂ다.
        int tmp = numArr[j];
        numArr[j] = numArr[j+1];
        numArr[j+1] = tmp;
    }
}
```

위의 작업이 한번 수행되는 것만으로는 정렬이 되지 않기 때문에 아래의 그림에서 알 수 있는 것처럼, 비교작업(위의 for문)을 모두 4번, 즉, ’배열의 길이-1’번 만큼 반복해서 비 교해야 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-241_622_858_797_419.jpg -->

그래서 바깥쪽 for문의 조건식이 ’numArr.length-1’이어야 하는 것이다.

```txt
for (int i=0;i < numArr.length-1;i++) {
    changed = false; // 매 바ᄂ보ᄀ마다 changed르ᄅ false로 초기화
    for (int j=0;j < numArr.length-1-i;j++) {
        if(numArr[j] > numArr[j+1]) { // 여ᄑ의 가ᄡ이 자ᄀ으며ᄂ 서로 바꾸ᄂ다.
            int tmp = numArr[j];
            numArr[j] = numArr[j+1];
            numArr[j+1] = tmp;
            changed = true; // 자리비꾸ᄆ이 바ᄅ새ᄋ해ᄊ으니 changed르ᄅ true로 바꾸ᄂ다.
        }
    } // end for j
    if (!changed) break; // 자리바꾸ᄆ이 어ᄡ으며ᄂ 바ᄂ보ᄀ무ᄂ으ᄅ 버ᄉ어나ᄂ다.
    for(int k=0; k<numArr.length;k++)
        System.out.print(numArr[k]); // 저ᄋ려ᄅ되ᄂ 겨ᄅ과르ᄅ 추ᄅ려ᄀ
    System.out.println();
} // end of for i
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

보다 효율적인 작업을 위해 changed라는 boolean형 변수를 두어서 자리바꿈이 없으면 break문을 수행하여 정렬을 마치도록 했다. 자리바꿈이 없다는 것은 정렬이 완료되었음을 뜻하기 때문이다.<br>이 정렬 방법을 ’버블 정렬(bubble sort)’라고 하는데, 비효율적이지만 가장 간단하다.

```txt
System.out.print(numArr[i] = (int) (Math.random() * 10));
```

그리고 위의 문장은 아래의 두 문장을 하나로 합친 것이다.

```txt
    numArr[i] = (int) (Math.random() * 10);
    System.out.print(numArr[i]);
```

```txt
class ArrayEx11 {
    public static void main(String[] args) {
        int[] numArr = new int[10];
        int[] counter = new int[10];
        for (int i=0; i < numArr.length; i++ ) {
            numArr[i] = (int) (Math.random() * 10); // 0~9 의 이ᄆ의의 수르ᄅ 배여ᄅ에 저자ᄋ
            System.out.print(numArr[i]);
        }
        System.out.println();
        for (int i=0; i < numArr.length; i++ ) {
            counter[numArr[i]]++;
        }
        for (int i=0; i < numArr.length; i++ ) {
            System.out.println( i +"의개수 :"+ counter[i]);
        }
    } // main의끄ᄐ
}
```

- 예제 5-11/ArrayEx11.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-242_460_209_1250_1240.jpg -->

길이가 10인 배열을 만들고 0~9의 임의의 값으로 초기화 한다. 그리고 이 배열에 저장된각 숫자가 몇 번 반복해서 나타나는지를 세어서 배열 counter에 담고 화면에 출력한다.<br>간단한 예제라서 아래의 코드만 이해하면 나머지는 별 어려움이 없을 것이다.

```txt
    for (int i=0; i < numArr.length ; i++ ) {
            counter[numArr[i]]++;
    }
```

random()을 사용했기 때문에 실행할 때마다 결과가 달라지겠지만, 실행결과를 토대로계산과정을 단계별로 살펴보면 다음과 같다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    counter[numArr[i]]++; // i의 가ᄡ이 0이ᄂ 겨ᄋ우르ᄅ 가저ᄋ하며ᄂ,
→ counter[numArr[0]]++; // numArr[0] 의 가ᄡ으ᄂ 4이다.
→ counter[4]++; // counter[4] 의 가ᄡ으ᄅ 1즈ᄋ가시키ᄂ다.
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-243_125_1252_467_383.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-243_127_1253_609_383.jpg -->

배열 counter에서, 배열 numArr에 저장된 값과 일치하는 인덱스의 요소에 저장된 값을 1증가시킨다. 위의 그림에서는 numArr\[0\]에 4가 저장되어있으므로 배열 counter의 인 덱스가 4인 요소에 저장된 값이 0에서 1로 증가되었다. 이 과정이 반복되고 나면, 배열 counter의 각 요소에는 해당 인덱스의 값이 몇 번 나타났는지 알 수 있는 값이 저장된다.

배열을 이용한 카운팅은 반장 선거처럼 값의 범위가 제한적일 때만 사용할 수 있다는 단 점이 있지만, 정렬과 중복제거를 아주 빠르게 처리할 수 있다. 어떻게하면 카운팅 결과가 저장된 배열로 부터 정렬과 중복제거를 할 수 있을지 생각해보자.

I 플래시동영상 I 예제5-11에 대한 설명은 압축된 소스파일의 ’/flash/Array.exe’에서 자세히 볼 수 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2. String배열

### 2.1 String배열의 선언과 생성

배열의 타입이 String인 경우에도 int배열의 선언과 생성방법은 다르지 않다. 예를 들어 3개의 문자열(String)을 담을 수 있는 배열을 생성하는 문장은 다음과 같다.

```txt
String[] name = new String[3]; // 3개의 무ᄂ자여ᄅ으ᄅ 다ᄆ으ᄅ 수 이ᄊ느ᄂ 배여ᄅ으ᄅ 새ᄋ서ᄋ
```

위의 문장을 수행한 결과를 그림으로 표현하면 다음과 같다. 3개의 String타입의 참조변 수를 저장하기 위한 공간이 마련되고 참조형 변수의 기본값은 null이므로 각 요소의 값은 null로 초기화 된다.

I 참고 I null은 참조 변수가 어떠한 객체도 가리키고 있지 않다는 뜻이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-244_125_771_1006_446.jpg -->

참고로 변수의 타입에 따른 기본값은 다음과 같다.

| 타입 | 기본값 |
| --- | --- |
| boolean | false |
| char | ‘000’ |
| byte, short, int | 0 |
| long | OL |
| float | 0.0f |
| double | 0.0d 또는 0.0 |
| 참조형 | null |

- 표5-2 타입에 따른 변수의 기본값(default value)

### 2.2 String배열의 초기화

초기화 역시 int배열과 동일한 방법으로 한다. 아래와 같이 배열의 각 요소에 문자열을 지 정하면 된다.

```txt
String[] name = new String[3]; // 기ᄅ이가 3이ᄂ String배여ᄅ으ᄅ 새ᄋ서ᄋ
name[0] = "Kim";
name[1] = "Park";
name[2] = "Yi";
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

또는 괄호\{\}를 사용해서 다음과 같이 간단히 초기화 할 수도 있다.

```txt
String[] name = new String[]{"Kim", "Park", "Yi"};
String[] name = { "Kim", "Park", "Yi"}; // new String[]으ᄅ 새ᄋ랴ᄀ가느ᄋ
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-245_125_771_523_623.jpg -->

- 그림5-4 초기화된 String배열

특별히 String클래스만 “Kim”과 같이 큰따옴표만으로 간략히 표현하는 것이 허용되지만,원래 String은 클래스이므로 아래의 왼쪽처럼 new연산자를 통해 객체를 생성해야한다.

```txt
String[] name = new String[3]; String[] name = new String[3];
name[0] = new String("Kim"); name[0] = "Kim";
name[1] = new String("Park"); name[1] = "Park";
name[2] = new String("Yi"); name[2] = "Yi";
```

그림5-4도 편의상 간략히 그린 것이며, 원래는 아래와 같이 그려야 더 정확한 그림이다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-245_249_773_1192_622.jpg -->

배열에 실제 객체가 아닌 객체의 주소가 저장되어 있는 것을 볼 수 있다. 이처럼, 기본형배열이 아닌 경우, 즉, 참조형 배열의 경우 배열에 저장되는 것은 객체의 주소이다. 참조형 배열을 객체 배열이라고도 하는데, 다음 장인 ’6장 객체지향개념 1’에서 배울 것이다.

I 참고 I 모든 참조 변수에는 객체가 메모리에 저장된 주소 또는 null이 저장된다.

- 예제 5-12/ArrayEx12.java

```txt
class ArrayEx12 {
    public static void main(String[] args) {
        String[] names = {"Kim", "Park", "Yi"};
        for(int i=0; i < names.length;i++)
            System.out.println("names["+i+"]:"+names[i]);
        String tmp = names[2]; // 배여ᄅ names의 세 버ᄂ째요소르ᄅ tmp에 저자ᄋ
        System.out.println("tmp:"+tmp);
        names[0] = "Yu"; // 배여ᄅ names의 처ᄉ 버ᄂ째 요소르ᄅ "Yu"로 벼ᄂ겨ᄋ
        for(String str : names) // 햐ᄋ사ᄋ되ᄂ for무ᄂ
            System.out.println(str);
    } // main
}
```

- 실행결과

```txt
names[0]:Kim
names[1]:Park
names[2]:Yi
tmp:Yi
Yu
Park
Yi
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제5-13/ArrayEx13.java

```txt
class ArrayEx13 {
    public static void main(String[] args) {
        char[] hex = { 'C', 'A', 'F', 'E'};
        String[] binary = { "0000", "0001", "0010", "0011"
                    , "0100", "0101", "0110", "0111"
                    , "1000", "1001", "1010", "1011"
                    , "1100", "1101", "1110", "1111" };
        String result="";
        for (int i=0; i < hex.length ; i++ ) {
            if(hex[i] >='0' && hex[i] <='9') {
                result += binary[hex[i]-'0']; // '8'-'0'의겨ᄅ과느ᄂ 8
            } else { // A~F이며ᄂ
                result += binary[hex[i]-'A'+10]; // 'C'-'A'의겨ᄅ과느ᄂ 2
            }
        }
                    // String(char[] value)
        System.out.println("hex:"+ new String(hex));
        System.out.println("binary:"+result);
    }
}
```

16진수를 2진수로 변환하는 예제이다. 먼저 변환하고자 하는 16진수를 배열 hex에 나열한다. 16진수에는 A~F까지 6개의 문자가 포함되므로 char배열로 처리하였다. 그리고 문자열 배열 binary에는 이진수 ‘0000’ 부터 ‘1111’(16진수로 0~F)까지 모두 16개의 값을 문자열로 저장하였다.<br>for문을 이용해서 배열 hex에 저장된 문자를 하나씩 읽어서 그에 해당하는 이진수 표현을 배열 binary에서 얻어 result에 덧붙이고 그 결과를 화면에 출력한다.

```txt
    result += binary[hex[i]-'A'+10];
```

i의 값이 0일 때, hex\[0\]의 값은 ’C’이므로, 위의 문장은 다음과 같은 과정으로 계산된다.

```txt
→ result += binary[hex[0]-'A'+10]; // hex[0] C'
→ result += binary['C'-'A'+10]; // 'C'-'A' → 67-65 → 2
→ result += binary[2+10];
→ result += binary[12];
→ result + ="1100";
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.3 char배열과 String클래스

지금까지 여러 문자, 즉 문자열을 저장할 때 String타입의 변수를 사용했다. 사실 문자열 은 ’문자를 연이어 늘어놓은 것’이라는 뜻으로 char배열과 같은 뜻이다. 그런데 자바에서 char배열이 아닌 String클래스로 문자열을 처리하는 이유는 String클래스가 char배열에 여러 가지 기능을 추가하여 확장한 것이기 때문이다.<br>그래서 char배열보다 String클래스를 사용하는 것이 문자열을 다루기 더 편리하다.<br>> String클래스는 char배열에 기능(메서드)을 추가한 것이다.

객체지향개념이 나오기 이전의 언어들은 데이터와 기능을 따로 다루었지만, 객체지향언 어에서는 데이터와 그에 관련된 기능을 하나의 클래스에 묶어서 다룰 수 있게 한다. 즉, 서로 관련된 것들끼리 데이터와 기능을 구분하지 않고 함께 묶는 것이다.

I 참고 I 여기서 ‘기능’은 함수를 의미하며, 메서드는 객체지향 언어에서 ’함수’ 대신 사용하는 용어일 뿐 함수와 같은 뜻이다.<br>char배열과 String클래스의 한 가지 중요한 차이가 있는데, String객체(문자열)는 읽을 수만 있을 뿐 내용을 변경할 수 없다는 것이다.

```txt
String str = "Java";
str = str + "21"; // "Java21"이라느ᄂ 새로우ᄂ 무ᄂ자여ᄅ이 str에 저자ᄋ되ᄂ다.
System.out.println(str); // "Java21"
```

위의 문장에서 문자열 str의 내용이 변경되는 것 같지만, 문자열은 변경할 수 없으므로 새 로운 내용의 문자열이 생성된다.

I 참고 I 변경 가능한 문자열을 다룰 때는 StringBuffer클래스(p.508)를 사용하면 된다.

## String클래스의 주요 메서드

String클래스는 상당히 많은 문자열 관련 메서드를 제공하지만, 가장 기본적인 몇 가지만 살펴보고 나머지는 9장에서 자세히 설명할 것이다. 지금은 원하는 결과를 얻으려면 어떻 게 코드를 작성하는지만 이해하자.

| 메서드 | 설명 |
| --- | --- |
| char charAt (int index) | 문자열에서 해당 위치(index)에 있는 문자를 반환한다. |
| int length() | 문자열의 길이를 반환한다. |
| String substring (int from, int to) | 문자열에서 해당 범위(from~to)에 있는 문자열을 반환한다. (to는 범위에 포함되지 않음) |
| boolean equals(Object obj) | 문자열의 내용이 같은지 확인한다. 같으면 true, 다르면 false |
| char\[ \] toCharArray( ) | 문자열을 문자 배열(char\[ \])로 변환해서 반환한다. |

- 표5-3 String클래스의 주요 메서드

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>charAt()은 문자열에서 지정된 index에 있는 문자 하나를 가져온다. 배열에서 ’배열이름 \[index\]’로 index에 위치한 값을 가져오는 것과 같다고 생각하면 된다. 배열과 마찬가지로 charAt( )의 index는 0부터 시작한다.

```txt
String str = "ABCDE";
char ch = str.charAt(3); // 무ᄂ자여ᄅ str의 4버ᄂ째 무ᄂ자 'D' 르ᄅ ch에 저자ᄋ.
```

| index | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| 문자 | A | B | C | D | E |

substring()은 문자열의 일부를 뽑아낼 수 있다. 주의할 것은 범위의 끝은 포함되지 않는다는 것이다. 예를 들어, index의 범위가 1~4라면 4는 범위에 포함되지 않는다.

```txt
String str = "012345";
String tmp = str.substring(1,4); // str에서 index버ᄆ위 1~4의 무ᄂ자드ᄅ으ᄅ 바ᄂ화ᄂ
System.out.println(tmp); // "123"이 추ᄅ려ᄀ되ᄂ다.
```

equals( )는 이미 앞에서 간단히 배웠는데, 문자열의 내용이 같은지 다른지 확인할 때 사용한다. 기본형 변수의 값을 비교하는 경우 ’==’연산자를 사용하지만, 문자열의 내용을 비 교할 때는 equals()를 사용해야 한다. 그리고 이 메서드는 대소문자를 구분한다는 점에주의하자. 대소문자를 구분하지 않고 비교하려면 equals()대신 equalsIgnoreCase()를사용해야 한다.

```txt
String str = "abc";
if(str.equals("abc")) { // str과 "abc"의 내요ᄋ이 가ᄐ으며ᄂ true
        ⋯
    }
```

char배열과 String의 변환<br>가끔 char배열을 String으로 변환하거나, 또는 그 반대로 변환해야하는 경우가 있다. 그럴 때 다음의 코드를 사용하자.

```txt
    char[] chArr = { 'A', 'B', 'C' };
    String str = new String(chArr); // char배여ᄅ → String
    char[] tmp = str.toCharArray(); // String → char배여ᄅ
```

- 예제 5-14/ArrayEx14.java

```txt
class ArrayEx14 {
    public static void main(String[] args) {
        String src = "ABCDE";
        for(int i=0; i < src.length(); i++) {
            char ch = src.charAt(i); // src의 i버ᄂ째 무ᄂ자르ᄅ ch에 저자ᄋ
            System.out.println("src.charAt("+i+"):"+ ch);
        }
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    // String으ᄅ char[]로 벼ᄂ화ᄂ
    char[] chArr = src.toCharArray();
    // char배여ᄅ(char[])으ᄅ 추ᄅ려ᄀ
    System.out.println(chArr);
    }
}
```

- 실행결과

```txt
src.charAt(0):A
src.charAt(1):B
src.charAt (2) :C
src.charAt (3) :D
src.charAt(4):E
ABCDE
```

String의 charAt()을 사용하는 방법을 보여주는 예제이다. charAt(int index)은 문자열 의 index번째 위치에 있는 문자를 반환한다. idx의 값은 배열처럼 0부터 시작한다는 것에주의하자.<br>그리고 println()로 문자 배열을 출력하면 문자 배열의 모든 문자를 순서대로 붙여서 출력한다.

- 예제 5-15/ArrayEx15.java

```txt
class ArrayEx15 {
    public static void main(String[] args) {
        String source = "SOSHELP";
        String[] morse = {".-", "-...", "-.-.","-..", "."
                ,"..-.", "--.", "....","..",".---"
                , "-.-", ".-..", "--", "-.", "---"
                , ".--.", "--.-",".-.","...","-"
                , "..-", "...-", ".--", "-..-","-.--"
                , "--.." };
        String result="";
        for (int i=0; i < source.length() ; i++ ) {
            result+=morse[source.charAt(i)-'A'];
        }
        System.out.println("source:"+ source);
        System.out.println("morse:"+result);
    }
}
```

- 실행결과

```txt
source:SOSHELP
morse:...---.........-...---
```

문자열을 모르스(morse)부호로 변환하는 예제이다. 이전의 16진수를 2진수로 변환하는예제와 같지만, 이번엔 char배열 대신 String을 사용했다.<br>String의 문자 개수는 length()로 얻을 수 있고, charAt(int index)는 String의 index 번째 문자를 반환한다. 그래서 for문의 조건식에 length()를 사용하고 charAt(int index)를 통해서 source에서 문자를 하나씩 차례대로 읽어 올 수 있다.

```txt
    result+=morse[source.charAt(i)-'A']; // i가 0이ᄅ때
→ result+=morse[source.charAt(0)-'A']; // source.charAt(0)느ᄂ 처ᄉ 버ᄂ째 무ᄂ자
→ result+=morse['S'-'A']; // 'S'-'A' → 83-65 → 18
→ result+=morse[18];
→ result+="..."; // result = result + "...";
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 2.4 커맨드 라인을 통해 입력받기

Scanner클래스의 nextLine()외에도 화면을 통해 사용자로부터 값을 입력받을 수 있는 간단한 방법이 있다. 바로 커맨드라인을 이용한 방법인데, 프로그램을 실행할 때 클래스 이름 뒤에 공백문자로 구분하여 여러 개의 문자열을 프로그램에 전달 할 수 있다.<br>만일 실행할 프로그램의 main메서드가 담긴 클래스의 이름이 MainTest라고 가정하면 다음과 같이 실행할 수 있을 것이다.

```txt
c:\...\ch05> java MainTest abc 123
```

커맨드라인을 통해 입력된 두 문자열 “abc”와 “123”은 String배열에 담겨서 MainTest 클래스의 main메서드의 매개변수(args)에 전달된다. 그리고는 main메서드 내에서 args\[0\], args\[1\]과 같은 방식으로 커맨드라인으로 부터 전달받은 문자열에 접근할 수 있 다. 여기서 $\operatorname{args}[0]$ 은 “abc”이고 $\operatorname{args}[1]$ 은 “123”이 된다.

- 예제 5-16/ArrayEx16.java

```txt
class ArrayEx16 {
    public static void main(String[] args) {
        System.out.println("매개벼ᄂ수의 개수:"+args.length);
        for(int i=0;i< args.length;i++) {
            System.out.println("args[" + i + "] = \""+ args[i] + "\"");
        }
             시ᄅ해ᄋ겨ᄅ과
    }
} C:\...>cd \Users\userid\jdk21\ch05\out\production\ch05
            C:\...\ch05>java ArrayEx16 abc 123 "Hello world"
            매개벼ᄂ수의 개수:3
            args[0] = "abc"
            args[1] = "123"
            args[2] = "Hello world"
            C: \...\ch05>java ArrayEx16 ← 매개벼ᄂ수르ᄅ 이ᄇ려ᄀ하지 않아ᄊ다.
            매개벼ᄂ수의 개수:0
```

I 참고 I 실행결과에서 ’…’은 경로를 짧게 생략해서 표현한 것이며, ’userid’는 사용자에 따라 다를 수 있다.<br>커맨드라인에 입력된 매개변수는 공백문자로 구분하기 때문에 입력값에 공백이 있는 경 우 큰따옴표(“)로 감싸주어야 한다. 그리고 커맨드라인에서 숫자를 입력해도 숫자가 아닌 문자열로 처리된다는 것에 주의해야한다. 문자열”123”을 숫자 123으로 바꾸려면 다음과 같이 한다.

```txt
    int num = Integer.parseInt("123"); // 벼ᄂ수 num에 수ᄉ자 123이 저자ᄋ되ᄂ다.
```

그리고 커맨드라인에 매개변수를 입력하지 않으면 크기가 0인 배열이 생성되어 args. length의 값은 0이 된다. 앞서 배운 것처럼 이렇게 크기가 0인 배열을 생성하는 것도 가 능하다. 만일 입력된 매개변수가 없다고 해서 배열을 생성하지 않으면 참조변수 args의 값은 null이 될 것이고, 배열 args를 사용하는 모든 코드에서 에러가 발생할 것이다. 이러 한 에러를 피하려면, 다음과 같이 main메서드에 if문을 추가해야 한다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
public static void main(String][] args) {
    if(args!=null) { // args가 null이 아니ᄅ 때마ᄂ 과ᄅ호{}의 무ᄂ자ᄋ드ᄅ으ᄅ 수해ᄋ
        System.out.println("매개벼ᄂ수의 개수:"+args.length);
        for(int i=0;i< args.length;i++) {
            System.out.println("args[" + i + "] = \""+ args[i] + "\"");
        }
    }
}
```

그러나 입력된 매개변수가 없을 때, JVM이 null 대신 크기가 0인 배열을 생성해서 args에 전달하도록 구현되어 있어서 우리는 이러한 수고를 덜게 되었다.

## 예제 5-17/ArrayEx17.java

```txt
class ArrayEx17 {
    public static void main(String[] args) {
        if (args.length !=3) { // 이ᄇ려ᄀ되ᄂ 가ᄡ의 개수가 3개가 아니며ᄂ,
            System.out.println("usage: java ArrayEx17 NUM1 OP NUM2");
            System.exit(0); // 프로그래ᄆ으ᄅ 조ᄋ료하ᄂ다.
        }
        int num1 = Integer.parseInt(args[0]); // 무ᄂ자여ᄅ으ᄅ 수ᄉ자로 벼ᄂ화ᄂ하ᄂ다.
        char op = args[1].charAt(0); // 무ᄂ자여ᄅ으ᄅ 무ᄂ자(char)로 벼ᄂ화ᄂ하ᄂ다.
        int num2 = Integer.parseInt(args[2]);
        int result = 0;
        switch(op) { // switch무ᄂ의 수시ᄀ으로 char타이ᄇ의 벼ᄂ수도 가느ᄋ하다.
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default :
                System.out.println("지워ᄂ되지 않느ᄂ 여ᄂ사ᄂ이ᄇ니다.");
        }
        System.out.println("겨ᄅ과:"+result);
    }
}
```

- 실행결과

```txt
C: \...\ch05>java ArrayEx17
usage: java ArrayEx17 NUM1 OP NUM2
C:\...\ch05>java ArrayEx17 10 + 3
겨ᄅ과:13
C:\...\ch05>java ArrayEx17 10 x 3
겨ᄅ과:30
```

I 참고 I 실행결과에서 ‘…’은 경로()를 짧게 생략해서 표현한 것이며, ’userid’ 는 사용자에 따라 다를 수 있다. ’cd’명령을 이용해서 해당 경로로 이동한 다음에 실행해야 한다.

화면으로부터 사칙연산을 수행하는 수식을 입력받아서 계산하여 그 결과를 보여주는 예제이다. 커맨드라인으로부터 입력받은 데이터는 모두 문자열이므로 숫자와 문자로 변환이 필요하며, Integer.parseInt()를 사용했다.<br>［ebook－샘플．무료 공유］자바의 정석 4판 Java 21 올컬러 2025．7． 7 출시 seong．namkung＠gmail．com

## 3．다차원 배열

지금까지 우리가 배운 배열은 1차원 배열인데，2차원 이상의 배열，즉 다차원（多次元， multi－dimensional）배열도 가능하다．메모리의 용량이 허용하는 한，차원의 제한은 없 지만，주로 1，2차원 배열이 사용되므로 2차원 배열만 잘 이해하면 3차원 이상의 배열도 어렵지 않게 다룰 수 있으므로 2차원 배열에 대해서 중점적으로 배울 것이다．

### 3.1 2차원 배열의 선언과 인덱스

2차원 배열을 선언하는 방법은 1차원 배열과 같다．다만 괄호［］가 하나 더 들어갈 뿐이다．

| 선언 방법 | 선언 예 |
| --- | --- |
| 타입［ ］［ ］변수이름； | int［］［］score； |
| 타입 변수이름［ ］［ ］； | int score［］［］； |
| 타입［ ］변수이름［ ］； | int［］score［］； |

－표5－4 2차원 배열의 선언<br>I 참고 I 3차원이상의 고차원 배열의 선언은 대괄호［］의 개수를 차원의 수만큼 추가해 주기만 하면 된다．

2차원 배열은 주로 테이블 형태의 데이터를 담는데 사용되며，만일 4행 3열의 데이터를 담기 위한 배열을 생성하려면 다음과 같이한다．

```txt
int[][] score = new int[4][3]; // 4해ᄋ 3여ᄅ의 2차워ᄂ 배여ᄅ으ᄅ 새ᄋ서ᄋ하ᄂ다.
```

위 문장이 수행되면 아래의 그림처럼 4행 3열의 데이터，모두 12개의 int값을 저장할 수 있는 공간이 마련된다．

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-252_228_445_1566_584.jpg -->

위의 그림에서는 각 요소，즉 저장 공간의 타입을 적어놓은 것이고，실제로는 배열 요소의 타입인 int의 기본값인 0이 저장된다．배열을 생성하면，배열의 각 요소에는 배열 요소 타 입의 기본값이 자동적으로 저장된다．

## 2차원 배열의 index

2차원 배열은 행（row）과 열（column）로 구성되어 있기 때문에 index도 행과 열에 각각 하나씩 존재한다．＇행index＇의 범위는＇0～행의 길이－1＇이고＇열index＇의 범위는＇0～열 의 길이－1＇이다．그리고 2차원 배열의 각 요소에 접근하는 방법은＇배열이름［행index］［열 index］＇이다．<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>만일 다음과 같이 배열 score를 생성하면, score\[0\]\[0\]부터 score\[3\]\[2\]까지 모두 12개(4 $\times 3=12$ )의 int값을 저장할 수 있는 공간이 마련되고, 각 배열 요소에 접근할 수 있는 방법 은 아래의 그림과 같다.

```txt
int[][] score = new int[4][3]; // 4해ᄋ 3여ᄅ의 2차워ᄂ 배여ᄅ score르ᄅ 새ᄋ서ᄋ
```

열 $\operatorname{index}(0 \sim$ 열의 길이-1)<br>\| 행 index (0 ~ 행의 길이-1) \| 0 \| \| 1 \| 2 \|<br>\| :— \| :— \| :— \| :— \| :— \|<br>\| \| 0123 \| score\[0\] \[0\] \| score\[0\] \[1\] \| score\[0\] \[2\] \|<br>\| \| \| score\[1\] \[0\] \| score\[1\] \[1\] \| score\[1\] \[2\] \|<br>\| \| \| score\[2\] \[0\] \| score\[2\] \[1\] \| score\[2\] \[2\] \|<br>\| \| \| score\[3\] \[0\] \| score\[3\] \[1\] \| score\[3\] \[2\] \|

배열 score의 1행 1열에 100을 저장하고, 이 값을 출력하려면 다음과 같이 하면 된다.

```txt
score[0][0] = 100; // 배여ᄅ score의 1해ᄋ 1여ᄅ에 100으ᄅ 저자ᄋ
System.out.println(score[0][0]); // 배여ᄅ score의 1해ᄋ 1여ᄅ의 가ᄡ으ᄅ 추ᄅ려ᄀ
```

### 3.2 2차원 배열의 초기화

2차원 배열도 괄호 \{\}를 사용해서 생성과 초기화를 동시에 할 수 있다. 다만, 1차원 배열보 다 괄호\{\}를 한번 더 써서 행별로 구분해 준다.

```txt
int[][] arr = new int[][]{ {1, 2, 3}, {4, 5, 6} };
int[][] arr = { {1, 2, 3}, {4, 5, 6} }; // new int[][]가 새ᄋ랴ᄀ되ᄆ
```

크기가 작은 배열은 위와 같이 간단히 한 줄로 써도 되지만, 가능하면 다음과 같이 행별로 줄 바꿈을 해주는 것이 보기도 좋고 이해하기 쉽다.

```txt
int[][] arr = {
    {1, 2, 3},
    {4, 5, 6}
};
```

만일 아래와 같은 테이블 형태의 데이터를 배열에 저장하려면,

|  | 국어 | 영어 | 수학 |
| --- | --- | --- | --- |
| 1 | 100 | 100 | 100 |
| 2 | 20 | 20 | 20 |
| 3 | 30 | 30 | 30 |
| 4 | 40 | 40 | 40 |
| 5 | 50 | 50 | 50 |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

다음과 같이 하면 된다.

```txt
int[][] score = {
            {100, 100, 100}
        , {20, 20, 20}
        , {30, 30, 30}
        , {40, 40, 40}
        , {50, 50, 50}
    };
```

위 문장이 수행된 후에, 2차원 배열 score가 메모리에 어떤 형태로 만들어지는지 그려보 면 다음과 같다. V

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-254_538_1090_874_283.jpg -->

- 그림5-5 2차원 배열의 구조

그림5-5에서 알 수 있듯이 2차원 배열은 ’배열의 배열’로 구성되어 있다. 여러 개의 1차원 배열을 묶어서 또 하나의 배열로 만든 것이다. 그러면, 여기서 score.length의 값은 얼마일까?

배열 참조변수 score가 참조하고 있는 배열의 길이가 얼마인가를 세어보면 될 것이다. 정답은 5이다. 그리고 score\[0\].length은 배열 참조변수 score\[0\]이 참조하고 있는 배열의 길이이므로 3 이다.<br>같은 이유로 score\[1\].length, score\[2\].length, score\[3\].length, score\[4\].length의 값역시 모두 3 이다.

만일 for문을 이용해서 2차원 배열을 초기화한다면 다음과 같을 것이다.

```txt
// 2차워ᄂ 배여ᄅ score의 모드ᄂ 요소르ᄅ 10으로 초기화하ᄂ다.
for (int i=0; i < score.length; i++) {
    for (int j=0; j < score[i].length; j++) {
        score[i][j] = 10;
    }
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 5-18/ArrayEx18.java

```txt
class ArrayEx18 {
    public static void main(String[] args) {
            int[][] score = {
                            { 100, 100, 100}
                        , { 20, 20, 20}
                        , { 30, 30, 30}
                        , { 40, 40, 40}
                    };
        int sum = 0;
        for(int i=0;i < score.length;i++) {
            for(int j=0;j < score[i].length;j++) {
                System.out.printf("score[%d][%d]=%d%n", i, j, score[i][j]);
            }
        }
        for (int[] tmp : score) {
            for (int i : tmp) {
                sum += i;
            }
        }
        System.out.println("sum="+sum);
    }
}
```

- 실행결과

```txt
score[0][0]=100
score[0][1]=100
score[0][2]=100
score[1][0]=20
score[1][1]=20
score[1][2]=20
score[2][0]=30
score[2][1]=30
score[2][2]=30
score[3][0]=40
score[3][1]=40
score[3][2]=40
sum=570
```

2차원 배열 score의 모든 요소의 합을 구하고, 출력하는 예제이다. 하나의 이중 for문으로 처리가 가능한 작업이지만, 향상된 for문으로 2차원 배열의 모든 요소를 읽어오는 방법을 보여주기 위해 출력과 합계를 따로 처리하였다.

```txt
for (int i : score) { // 에러. 2차워ᄂ 배여ᄅ score의 가ᄀ 요소느ᄂ 1차워ᄂ 배여ᄅ
        sum += i;
    }
```

이렇게 간단히 되면 좋겠지만, 2차원 배열 score의 각 요소는 1차원 배열이므로 아래와 같 이 for문을 하나 더 추가해야 한다.

```txt
    for (int[] tmp : score) { // score의가ᄀ요소(1차워ᄂ 배여ᄅ 주소) 르ᄅ tmp에 저자ᄋ
        for (int i : tmp) { // tmp느ᄂ 1차워ᄂ 배여ᄅ으ᄅ 가리키느ᄂ 차ᄆ조벼ᄂ수
            sum += i;
        }
    }
```

I 참고 I 향상된 for문으로 배열의 각 요소의 값을 읽을 수 있지만, 배열에 저장된 값은 변경할 수 없다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제5-19/ArrayEx19.java

```txt
class ArrayEx19 {
    public static void main(String[] args) {
            int[][] score = {
                    { 100, 100, 100}
                    , { 20, 20, 20}
                    , { 30, 30, 30}
                    , { 40, 40, 40}
                    , { 50, 50, 50}
                };
        // 과모ᄀ벼ᄅ 초ᄋ저ᄆ
        int korTotal = 0, engTotal = 0, mathTotal = 0;
        System.out.println("버ᄂ호 구ᄀ어 여ᄋ어 수하ᄀ 초ᄋ저ᄆ 펴ᄋ규ᄂ ");
        System.out.println("=============================");
        for(int i=0;i < score.length;i++) {
            int sum = 0; // 개이ᄂ벼ᄅ 초ᄋ저ᄆ
            float avg = 0.0f; // 개이ᄂ벼ᄅ 펴ᄋ규ᄂ
            korTotal += score[i][0];
            engTotal += score[i][1];
            mathTotal += score[i][2];
            System.out.printf("%3d", i+1);
            for(int j=0;j < score[i].length;j++) {
                sum += score[i][j];
                System.out.printf("%5d", score[i][j]);
            }
            avg = sum/ (float) score[i].length; // 펴ᄋ규ᄂ계사ᄂ
            System.out.printf("%5d %5.1f%n", sum, avg);
        }
        System.out.println("=============================");
        System.out.printf("초ᄋ저ᄆ:%3d %4d %4d%n",korTotal,engTotal,mathTotal);
    }
}
```

- 실행결과<br>\| 번호 \| 국어 \| 영어 \| 수학 \| 총점 \| 평균 \|<br>\| :— \| :— \| :— \| :— \| :— \| :— \|<br>\| 1 \| 100 \| 100 \| 100 \| 300 \| 100.0 \|<br>\| 2 \| 20 \| 20 \| 20 \| 60 \| 20.0 \|<br>\| 3 \| 30 \| 30 \| 30 \| 90 \| 30.0 \|<br>\| 4 \| 40 \| 40 \| 40 \| 120 \| 40.0 \|<br>\| 5 \| 50 \| 50 \| 50 \| 150 \| 50.0 \|<br>\| 총점: 240 \| \| 240 \| 240 \| \| \|

5명의 학생의 세 과목 점수를 더해서 각 학생의 총점과 평균을 계산하고, 과목별 총점을계산하는 예제이다. 간단한 예제이므로 자세한 설명은 생략한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.3 가변 배열

자바는 2차원 이상의 배열을 ’배열의 배열’의 형태로 처리한다는 사실을 이용하면 보다 자유로운 형태의 배열을 구성할 수 있다.<br>2차원 이상의 다차원 배열을 생성할 때 전체 배열 차수 중 마지막 차수의 길이를 지정하지 않고, 추후에 각기 다른 길이의 배열을 생성함으로써 고정된 형태가 아닌 보다 유동적인 가변 배열을 구성할 수 있다.<br>만일 다음과 같이 ’5 × 3’길이의 2차원 배열 score를 생성하는 코드가 있을 때,

```txt
int[][] score = new int[5][3]; // 5해ᄋ 3여ᄅ의 2차워ᄂ 배여ᄅ 새ᄋ서ᄋ
```

위 코드를 다음과 같이 표현 할 수 있다.

```txt
int[][] score = new int[5][]; // 두 버ᄂ째 차워ᄂ의 기ᄅ이느ᄂ 지저ᄋ하지 않느ᄂ다.
score[0] = new int[3];
score[1] = new int[3];
score[2] = new int[3];
score[3] = new int[3];
score[4] = new int[3];
```

첫 번째 코드와 같이 2차원 배열을 생성하면 직사각형 테이블 형태의 고정적인 배열만 생 성할 수 있지만, 두 번째 코드와 같이 2차원 배열을 생성하면 다음과 같이 각 행마다 다른 길이의 배열을 생성하는 것이 가능하다.

```txt
int[][] score = new int[5][];
score[0] = new int[4];
score[1] = new int[3];
score[2] = new int[2];
score[3] = new int[2];
score[4] = new int[3];
```

위의 코드에 의해서 생성된 2차원 배열을 그림으로 표현하면 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-257_538_1273_1805_368.jpg -->

- 그림5-6 가변 배열의 구조

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

score.length의 값은 여전히 5 지만, 일반적인 2 차원 배열과 달리 score\[0\].length의 값은4 이고 score\[1\].length의 값은 3으로 서로 다르다.<br>가변배열 역시 중괄호\{\}를 이용해서 다음과 같이 생성과 초기화를 동시에 하는 것이 가능하다.

```txt
int[][] score = {
            {100, 100, 100, 100}
        , {20, 20, 20}
        , {30, 30}
        , {40, 40}
        , {50, 50, 50}
    };
```

I 플래시동영상 I /flash/MultiDim.exe을 보면 가변 배열의 생성과정을 자세히 볼 수 있다.

## 3.4 다차원 배열의 활용

다차원 배열의 대표적인 예제들을 몇 가지 골라보았다. 이 예제들만 잘 이해해도 다차원배열을 활용하는데 별 어려움이 없을 것이다.

```txt
[예제5-20] 좌표에 X표하기 이ᄇ려ᄀ하ᄂ 2차워ᄂ 좌표의 위치에 X르ᄅ 표시
[예제5-21] 비ᄋ고 비ᄋ고파ᄂ으ᄅ 마ᄂ드ᄅ고 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자르ᄅ 비ᄋ고파ᄂ에서 지우ᄂ다.
[예제5-22] 해ᄋ려ᄅ의 고ᄇ세ᄆ 두 해ᄋ려ᄅ(matrix)으ᄅ 고ᄇ하ᄂ 겨ᄅ과르ᄅ 추ᄅ려ᄀ
[예제5-23] 다ᄂ어 마ᄌ추기 여ᄋ어 다ᄂ어르ᄅ 보여주고, 뜨ᄉ으ᄅ 마ᄌ추느ᄂ 게이ᄆ
```

이 예제에 추가하면 좋을만한 기능은 없는지 고민해보고, 조금씩 단계별로 발전시켜보면좋은 공부가 될 것이다.

- 예제 5-20/MultiArrEx.java

```txt
import java.util.*;
class MultiArrEx {
    public static void main(String[] args) {
        final int SIZE = 10;
        int x = 0, y = 0;
        char[][] board = new char[SIZE][SIZE];
        byte[][] shipBoard = {
            // 1 2 3 4 5 6 7 8 9
                { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 1
                { 1, 1, 1, 1, 0, 0, 1, 0, 0 }, // 2
                { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 3
                { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 4
                { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, // 5
                { 1, 1, 0, 1, 0, 0, 0, 0, 0 }, // 6
                { 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 7
                { 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 8
                { 0, 0, 0, 0, 0, 1, 1, 1, 0 }, // 9
        };
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        // 1해ᄋ에 해ᄋ버ᄂ호르ᄅ, 1여ᄅ에 여ᄅ버ᄂ호르ᄅ 저자ᄋ하ᄂ다.
        for(int i=1;i<SIZE;i++)
            board[0][i] = board[i][0] = (char)(i+'0');
        Scanner scanner = new Scanner(System.in);
        while(true) {
            System.out.print("좌표르ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료느ᄂ 00)>");
            String input = scanner.nextLine(); // 화며ᄂ이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ input에 저자ᄋ
            if(input.length()==2) { // 두 그ᄅ자르ᄅ 이ᄇ려ᄀ하ᄂ 겨ᄋ우
                x = input.charAt(0) - '0'; // 무ᄂ자르ᄅ 수ᄉ자로 벼ᄂ화ᄂ
                y = input.charAt(1) - '0';
                if(x==0 && y==0) // x와 y가 모두 0이ᄂ 겨ᄋ우 조ᄋ료
                    break;
            }
            if(input.length()!=2 || x<=0 || x>=SIZE || y<=0 || y>=SIZE){
                System.out.println("자ᄅ모ᄉ되ᄂ 이ᄇ려ᄀ이ᄇ니다. 다시 이ᄇ려ᄀ해주세요.");
                continue;
            }
            // shipBoard[x-1][y-1]의가ᄡ이 1이며ᄂ, 'O'으ᄅ board[x][y]에저자ᄋ하ᄂ다.
            board[x][y] = shipBoard[x-1][y-1]==1 ? 'O' : 'X';
            // 배여ᄅ board의 내요ᄋ으ᄅ 화며ᄂ에 추ᄅ려ᄀ하ᄂ다.
            for(int i=0;i<SIZE;i++)
                System.out.println(board[i]); // board[i]느ᄂ 1차워ᄂ 배여ᄅ
            System.out.println();
        }
    } // main의끄ᄐ
}
```

- 실행결과

```txt
좌표르ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료느ᄂ 00)>1010
자ᄅ모ᄉ되ᄂ 이ᄇ려ᄀ이ᄇ니다. 다시 이ᄇ려ᄀ해주세요.
좌표르ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료느ᄂ 00)>33
    123456789
1
2
    X
4
5
6
7
8
9
좌표르ᄅ 이ᄇ려ᄀ하세요. (조ᄋ료느ᄂ 00)>00
```

둘이 마주 앉아 다양한 크기의 배를 상대방이 알지 못하게 배치한 다음, 번갈아가며 좌표를 불러서 상대방의 배의 위치를 알아내는 게임을 간단히 하여 예제로 만들어 보았다.

2차원 char배열 board는 입력한 좌표를 표시하기 위한 것이고, 2차원 byte배열 shipBoard에는 상대방의 배의 위치를 저장한다. 0은 바다이고, 1은 배가 있는 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    char[][] board = new char[SIZE][SIZE];
    byte[][] shipBoard = {
        // 1 2 3 4 5 6 7 8 9
            { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 1
            { 1, 1, 1, 1, 0, 0, 1, 0, 0 }, // 2
            { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 3
            { 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 4
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, // 5
            { 1, 1, 0, 1, 0, 0, 0, 0, 0 }, // 6
            { 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 7
            { 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 8
            { 0, 0, 0, 0, 0, 1, 1, 1, 0 }, // 9
    };
```

배열 board는 좌표를 쉽게 입력하기 위한 행번호와 열번호가 필요하다. 그래서 배열 board가 배열 shipBoard보다 행과 열의 길이가 1씩 큰 것이다.

```txt
// 1해ᄋ에 해ᄋ버ᄂ호르ᄅ, 1여ᄅ에 여ᄅ버ᄂ호르ᄅ 저자ᄋ하ᄂ다.
for(int i=1;i<SIZE;i++) {
    board[0][i] = board[i][0] = (char)(i+'0'); // (char) (1+'0') → '1'
} // (char) (2+'0') → '2'
```

board는 char배열이므로, 숫자를 문자로 변환하여 저장해야한다. 그래서 변수 i에 문자 ’0’을 더한다. 숫자 1에 문자’0’을 더하면 문자 ’1’이 된다. 그 다음엔 무한 반복문으로 좌표 를 반복해서 입력받는다. 입력받은 좌표 x, y에 저장된 값이 1이면, board\[x\]\[y\]에 ’O’를 저장하고, 1이 아니면 ’X’를 저장한다. 배열 board와 shipBoard간에는 좌표가 가로, 세로 로 각각 1씩 차이가 난다는 점을 잊지 말자.

```txt
    while(true) {
        ⋯
        board[x][y] = shipBoard[x-1][y-1]==1 ? 'O':'X';
```

그리고 2차원 char배열의 각 요소는 1차원 배열이므로 아래의 왼쪽과 같이 간단히 출력할 수 있다. 원래는 오른쪽과 같이 배열의 각 요소를 하나씩 출력해야하는데, println메서드 로 1 차원 char배열의 참조변수를 출력하면, 배열의 모든 요소를 한 줄로 출력한다.

I 참고 I 그림5-5에서 알 수 있듯이 2차원 배열의 각 요소는 1차원 배열의 참조변수 역할을 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-260_235_1279_1972_192.jpg -->

println메서드가 모든 1차원 배열을 이렇게 출력할 수 있는 것은 아니고, char배열인 경우 만 가능하다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제5-21/MultiArrEx2.java

```txt
import java.util.*;
class MultiArrEx2 {
    public static void main(String[] args) {
        final int SIZE = 5;
        int x = 0 , y = 0, num = 0;
        int[][] bingo = new int[SIZE][SIZE];
        Scanner scanner = new Scanner(System.in);
        // 배여ᄅ의 모드ᄂ 요소르ᄅ 1부터 SIZE*SIZE까지의 수ᄉ자로 초기화
        for(int i=0;i<SIZE;i++)
            for(int j=0;j<SIZE;j++)
                bingo[i][j] = i*SIZE + j + 1;
        // 배여ᄅ에 저자ᄋ되ᄂ 가ᄡ으ᄅ 뒤서ᄁ느ᄂ다. (shuffle)
        for(int i=0;i<SIZE;i++) {
            for(int j=0;j<SIZE;j++) {
                x = (int) (Math.random() * SIZE);
                y = (int) (Math.random() * SIZE);
                // bingo[i][j]와 이ᄆ의로 서ᄂ태ᄀ되ᄂ 가ᄡ(bingo[x][y])으ᄅ 바꾸ᄂ다.
                int tmp = bingo[i][j];
                bingo[i][j] = bingo[x][y];
                bingo[x][y] = tmp;
            }
        }
        do {
            for(int i=0;i<SIZE;i++) {
                for(int j=0;j<SIZE;j++)
                    System.out.printf("%2d ", bingo[i][j]);
                System.out.println();
            }
            System.out.println();
            System.out.printf("1~%d의 수ᄉ자르ᄅ 이벼ᅧᄀ하세요. (조ᄋ료:0)>", SIZE*SIZE);
            String tmp = scanner.nextLine(); // 화며ᄂ에서 이ᄇ려ᄀ바ᄃ으ᄂ 내요ᄋ으ᄅ tmp에 저자ᄋ
            num = Integer.parseInt(tmp); // 이ᄇ려ᄀ바ᄃ으ᄂ 무ᄂ자여ᄅ(tmp)르ᄅ 수ᄉ자로 벼ᄂ화ᄂ
            // 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자와 가ᄐ으ᄂ 수ᄉ자가 저자ᄋ되ᄂ 요소르ᄅ 차ᄌ아서 0으ᄅ 저자ᄋ
            outer:
            for(int i=0;i<SIZE;i++) {
                for(int j=0;j<SIZE;j++) {
                    if(bingo[i][j]==num) {
                        bingo[i][j] = 0;
                        break outer; // 2주ᄋ 바ᄂ보ᄀ무ᄂ으ᄅ 버ᄉ어나ᄂ다.
                    }
                }
            }
        } while(num!=0);
    } // main의끄ᄐ
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 실행결과

| 9 | 22 | 2 | 12 | 17 |
| --- | --- | --- | --- | --- |
| 6 | 1 | 25 | 3 | 5 |
| 16 | 7 | 11 | 19 | 23 |
| 14 | 10 | 21 | 13 | 8 |
| 4 | 15 | 20 | 24 | 18 |
| 1~25의 숫자를 입력하세요. (종료:0) >1 |  |  |  |  |
| 9 | 22 | 2 | 12 | 17 |
| 6 | 0 | 25 | 3 | 5 |
| 16 | 7 | 11 | 19 | 23 |
| 14 | 10 | 21 | 13 | 8 |
| 4 | 15 | 20 | 24 | 18 |
| 1~25의 숫자를 입력하세요. (종료:0) >9 |  |  |  |  |
| 0 | 22 | 2 | 12 | 17 |
| 6 | 0 | 25 | 3 | 5 |
| 16 | 7 | 11 | 19 | 23 |
| 14 | 10 | 21 | 13 | 8 |
| 4 | 15 | 20 | 24 | 18 |
| 1~25의 숫자를 입력하세요. (종료:0) >0 |  |  |  |  |

$5 \times 5$ 크기의 빙고판에 1~25의 숫자를 차례로 저장한 다음에, Math.random()을 이용해 서 저장된 값의 위치를 섞는다. 여기까지의 과정은 지금까지 여러 번 반복된 것이므로 자세한 설명은 생략한다.

그 다음에 사용자로부터 숫자를 입력받아서 일치하는 숫자가 빙고판에 있으면 해당 숫자를 0으로 바꾼다.

```txt
// 이ᄇ려ᄀ바ᄃ으ᄂ 수ᄉ자와 가ᄐ으ᄂ 수ᄉ자가 저자ᄋ되ᄂ 요소르ᄅ 차ᄌ아서 0으ᄅ 저자ᄋ
outer:
for(int i=0;i<SIZE;i++) {
    for(int j=0;j<SIZE;j++) {
        if(bingo[i][j] == num) {
            bingo[i][j] = 0; // 이ᄅ치하느ᄂ 수ᄉ자르ᄅ 차ᄌ으며ᄂ 0으로 벼ᄂ겨ᄋ
            break outer; // 2주ᄋ 바ᄂ보ᄀ무ᄂ으ᄅ 버ᄉ어나ᄂ다.
        }
    }
}
```

입력받은 숫자와 일치하는 숫자를 빙고판에서 찾는 방법은 간단하다. 배열의 첫 번째 요 소부터 순서대로 하나씩 비교하다 일치하는 숫자를 찾으면, 값을 0으로 바꾸고 break문으로 반복문을 빠져나오면 된다. 이중 반복문이므로, 이름 붙은 break문을 사용해야 한다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제5-22/MultiArrEx3.java

```txt
class MultiArrEx3 {
    public static void main(String[] args) {
        int[][] m1 = {
            {1, 2, 3},
            {4, 5, 6}
        };
        int[][] m2 = {
            {1, 2},
            {3, 4},
            {5, 6}
        };
        final int ROW = m1.length; // m1의 해ᄋ 기ᄅ이
        final int COL = m2[0].length; // m2의 여ᄅ 기ᄅ이
        final int M2_ROW = m2.length; // m2의해ᄋ기ᄅ|
        int[][] m3 = new int[ROW][COL];
        // 해ᄋ려ᄅ고ᄇ m1 x m2의 겨ᄅ과르ᄅ m3에 저자ᄋ
        for(int i=0;i<ROW;i++)
            for(int j=0;j<COL;j++)
                for(int k=0;k<M2_ROW;k++)
                    m3[i][j] += m1[i][k] * m2[k][j];
        // 해ᄋ려ᄅ m3르ᄅ 추ᄅ려ᄀ
        for(int i=0;i<ROW;i++) {
            for(int j=0;j<COL;j++) {
                System.out.printf("%3d ", m3[i][j]);
            }
            System.out.println();
        }
    } // main의끄ᄐ
}
```

- 실행결과<br>\| 22 \| 28 \|<br>\| :— \| :— \|<br>\| 49 \| 64 \|

수학에서 두 개의 행렬(matrix) m1과 m2가 있을 때, 이 두 행렬을 곱한 결과인 행렬 m3 는 아래와 같이 정의된다.

I 참고 I 학교 과제로 자주 출제되기 때문에 넣은 예제다. 어렵게 느껴진다면 넘어가도 좋다.

$$
\left(\begin{array}{cc}
\mathrm{m} 1 & \mathrm{~m} 2 \\
\left(\begin{array}{lll}
A 0 & A 1 & A 2 \\
B 0 & B 1 & B 2
\end{array}\right) \times\left(\begin{array}{ll}
a 0 & a 1 \\
b 0 & b 1 \\
c 0 & c 1
\end{array}\right)
\end{array}\right)=\left(\begin{array}{cc}
A 0 \times a 0+A 1 \times b 0+A 2 \times c 0 & A 0 \times a 1+A 1 \times b 1+A 2 \times c 1 \\
B 0 \times a 0+B 1 \times b 0+B 2 \times c 0 & B 0 \times a 1+B 1 \times b 1+B 2 \times c 1
\end{array}\right)
$$

두 행렬의 곱셈이 가능하려면, m1의 열의 길이와 m2의 행의 길이가 같아야 한다는 조건 이 있다. 위의 경우에는 m1이 2행 3열이고, m2가 3행 2열이므로 곱셈이 가능하다.<br>그리고 곱셈연산의 결과인 행렬 m3의 행의 길이는 m1의 행의 길이와 같고, 열의 길이 는 m2의 열의 길이와 같다. 2행 3열인 행렬과 3행 2열인 행렬을 곱하면 결과는 2행 2열의 행렬이 되는 것이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

지금까지의 내용은 수학에서 정의된 행렬의 곱셈에 대한 정의와 규칙일 뿐, 왜 그렇게 되 는지 따지지 말자. 이에 맞게 코드를 작성하는 것만 생각하자. 위의 행렬의 곱셈 공식을 2 차원 배열로 표현하면 아래와 같다.

$$
\begin{array}{l|l|l|}
\mathrm{m} 1 & \mathrm{~m} 2 \\
\hline \mathrm{~m} 1[0][0] & \mathrm{m} 1[0][1] & \mathrm{m} 1[0][2] \\
\hline \mathrm{m} 1[1][0] & \mathrm{m} 1[1][1] & \mathrm{m} 1[1][2] \\
\hline
\end{array} \quad \times \frac{\mathrm{m} 2[0][0]}{\mathrm{m} 2[0][1]} . \quad \frac{\mathrm{m} 3}{\mathrm{~m} 2[1][0]} \frac{\mathrm{m} 2[1][1]}{\mathrm{m} 2[2][0]}=\begin{array}{|l|l|}
\hline \mathrm{m} 2[2][0][1] \\
\hline \mathrm{m} 3[1][0] & \mathrm{m} 3[1][1] \\
\hline
\end{array}
$$

그리고 행렬 곱셈의 결과인 행렬 m3의 각 요소들은 아래와 같이 계산된다.

$$
\begin{aligned}
\mathrm{m} 3[0][0] & =\mathrm{m} 1[0][0] * \mathrm{~m} 2[0][0] \\
& +\mathrm{m} 1[0][1] * \mathrm{~m} 2[1][0] \\
& +\mathrm{m} 1[0][2] * \mathrm{~m} 2[2][0] ; \\
\mathrm{m} 3[0][1] & =\mathrm{m} 1[0][0] * \mathrm{~m} 2[0][1] \\
& +\mathrm{m} 1[0][1] * \mathrm{~m} 2[1][1] \\
& +\mathrm{m} 1[0][2] * \mathrm{~m} 2[2][1] ; \\
\mathrm{m} 3[1][0] & =\mathrm{m} 1[1][0] * \mathrm{~m} 2[0][0] \\
& +\mathrm{m} 1[1][1] * \mathrm{~m} 2[1][0] \\
& +\mathrm{m} 1[1][2] * \mathrm{~m} 2[2][0] ; \\
\mathrm{m} 3[1][1] & =\mathrm{m} 1[1][0] * \mathrm{~m} 2[0][1] \\
& +\mathrm{m} 1[1][1] * \mathrm{~m} 2[1][1] \\
& +\mathrm{m} 1[1][2] * \mathrm{~m} 2[2][1] ;
\end{aligned}
$$

위의 문장들을 자세히 들여다보면, 행렬 m3의 행index가 행렬 m1의 행index와 일치하고, m3의 열index가 m2의 열index와 일치한다는 것을 알 수 있다. 그래서 위의 문장들은 다 음과 같이 2중 for문으로 대체할 수 있다.

```txt
for(int i=0;i<2;i++) { // i = 0, 1
    for(int j=0;j<2;j++) { // j = 0, 1
        m3[i][j] = m1[i][0] * m2[0][j]
            + m1[i][1] * m2[1][j]
            + m1[i][2] * m2[2][j];
    }
}
```

위의 문장을 잘 보면 여전히 반복되는 부분이 있다. m1의 열index와 m2의 행index가 동일 하게 0부터 2까지 1씩 증가한다. 이 부분을 또 하나의 for문으로 바꾸면 다음과 같이 된다.

```txt
for(int i=0;i<2;i++) {
    for(int j=0;j<2;j++) {
        for(int j=0;k<3;k++) { // k = 0, 1, 2
            m3[i][j] += m1[i][k] * m2[k][j];
        }
    }
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

행렬 m1과 m2의 길이가 달라져도 행렬 m3가 계산될 수 있도록, 배열 m3의 크기와 for 문의 조건식이 동적으로 계산되게 하였다.

```txt
    final int ROW = m1.length; // m1의 해ᄋ 기ᄅ이 (m3의 해ᄋ 기ᄅ이)
    final int COL = m2[0].length; // m2의 여ᄅ 기ᄅ이 (m3의 여ᄅ 기ᄅ이)
    final int M2_ROW = m2.length; // m2의 해ᄋ 기ᄅ이
    int[][] m3 = new int[ROW][COL];
```

두 행렬의 곱셈이 가능하려면, 배열 m1의 열의 길이와 배열 m2의 행의 길이가 일치해야 한다는 것에 주의하자.

- 예제5-23/MultiArrEx4.java

```txt
import java.util.*;
class MultiArrEx4{
    public static void main(String[] args) {
        String[][] words = {
            {"chair","의자", // words[0][0], words[0][1]
            {"computer","커ᄆ퓨터"}, // words[1][0], words[1][1]
            {"integer","저ᄋ수"} // words[2][0], words[2][1]
        };
        Scanner scanner = new Scanner(System.in);
        for(int i=0;i<words.length;i++) {
            System.out.printf("Q%d. %s의 뜨ᄉ으ᄂ?", i+1, words[i][0]);
            String tmp = scanner.nextLine();
            if(tmp.equals(words[i][1])) {
                System.out.printf("저ᄋ다ᄇ이ᄇ니다.%n%n");
            } else {
                System.out.printf("트ᄅ려ᄊ스ᄇ니다. 저ᄋ다ᄇ으ᄂ %s이ᄇ니다.%n%n",words[i][1]);
            }
        } // for
    } // main의끄ᄐ
}
```

- 실행결과

```txt
Q1. chair의 뜨ᄉ으ᄂ?dmlwk
트ᄅ려ᄊ스ᄇ니다. 저ᄋ다ᄇ으ᄂ 의자이ᄇ니다.
Q2. computer의 뜨ᄉ으ᄂ?커ᄆ퓨터
저ᄋ다ᄇ이ᄇ니다.
Q3. integer의 뜨ᄉ으ᄂ?저ᄋ수
저ᄋ다ᄇ이ᄇ니다.
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
여ᄋ다ᄂ어르ᄅ 보여주고 다ᄂ어의 뜨ᄉ으ᄅ 마ᄌ추느ᄂ 예제이다. words[i][0]으ᄂ 무ᄂ제이고, words[i][1]으ᄂ
다ᄇ이다. words[i][0]으ᄅ 화며ᄂ에 보여주고, 이ᄇ려ᄀ바ᄃ으ᄂ 다ᄇ으ᄂ tmp에 저자ᄋ하ᄂ다.
    System.out.printf("Q%d. %s의 뜨ᄉ으ᄂ?", i+1, words[i][0]);
    String tmp = scanner.nextLine();
그 다으ᄆ에ᄂ equals( )로 tmp와 words[i][1]으ᄅ 비교해서 저ᄋ다ᄇ이ᄂ지 화ᄀ이ᄂ하ᄂ다.
    if(tmp.equals(words[i][1])) {
        System.out.printf("저ᄋ다ᄇ이ᄇ니다.%n%n");
    } else {
        System.out.printf("트ᄅ려ᄊ스ᄇ니다. 저ᄋ다ᄇ으ᄂ %s이ᄇ니다.%non",words[i][1]);
    }
```

I 참고 I 연습문제는 깃헙([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) PDF파일로 제공

Chapter 06<br>객체지향 프로그래밍 ।<br>Object-oriented Programming I<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 1. 객체지향언어

## 1.1 객체지향 언어의 역사

요즘은 컴퓨터의 눈부신 발전으로 활용 폭이 넓고 다양해져서 컴퓨터가 사용되지 않는 분 야가 없을 정도지만, 초창기에는 주로 과학실험이나 미사일 발사실험과 같은 모의실험 (simulation)을 목적으로 사용되었다. 이 시절의 과학자들은 모의실험을 위해 실제 세계 와 유사한 가상 세계를 컴퓨터 속에 구현하고자 노력하였으며 이러한 노력은 객체지향이 론을 탄생시켰다.<br>객체지향이론의 기본 개념은 ’실제 세계는 사물(객체)로 이루어져 있으며, 발생하는 모든 사건들은 사물간의 상호작용이다.’라는 것이다. 실제 사물의 속성과 기능을 분석한 다음, 데이터(변수)와 함수로 정의함으로써 실제 세계를 컴퓨터 속에 옮겨 놓은 것과 같은 가상 세계를 구현하고 이 가상세계에서 모의실험을 함으로써 많은 시간과 비용을 절약할 수 있 었다. 객체지향이론은 상속, 캡슐화, 추상화 개념을 중심으로 점차 구체적으로 발전되었 으며 1960년대 중반에 객체지향이론을 프로그래밍언어에 적용한 시뮬라(Simula)라는 최 초의 객체지향언어가 탄생하였다.<br>그 당시에는 FORTRAN이나 COBOL과 같은 절차적 언어들이 주류를 이루었으며, 객체 지향언어는 널리 사용되지 못하고 있었다. 1980년대 중반에 C++을 비롯하여 여러 객체 지향언어가 발표되면서 객체지향언어가 본격적으로 개발자들의 관심을 끌기 시작하였지 만 여전히 사용자층이 넓지 못했다.<br>그러나 프로그램의 규모가 점점 커지고 사용자들의 요구가 빠르게 변화해가는 상황을 절차적 언어로는 극복하기 어렵다는 한계를 느끼고 객체지향언어를 이용한 개발방법론이 대안으로 떠오르게 되면서 조금씩 입지를 넓혀가고 있었다.<br>자바가 1995년에 발표되고 1990년대 말에 인터넷의 발전과 함께 크게 유행하면서 객체 지향언어는 이제 프로그래밍언어의 주류로 자리 잡았다.

## 1.2 객체지향언어

객체지향언어는 기존의 프로그래밍언어와 다른 전혀 새로운 것이 아니라, 기존의 프로그 래밍 언어에 몇 가지 새로운 규칙을 추가한 보다 발전된 형태의 것이다. 이러한 규칙들을 이용해서 코드 간에 서로 관계를 맺어 줌으로써 보다 유기적으로 프로그램을 구성하는 것 이 가능해졌다. 기존의 프로그래밍 언어에 익숙한 사람이라면 자바의 객체지향적인 부분 만 새로 배우면 된다. 다만 절차적 언어에 익숙한 프로그래밍 습관을 객체지향적으로 바 꾸도록 노력해야할 것이다. 객체지향언어의 주요특징은 다음과 같다.

1. 코드의 재사용성이 높다.<br>새로운 코드를 작성할 때 기존의 코드를 이용하여 쉽게 작성할 수 있다.
2. 코드의 관리가 용이하다.<br>코드간의 관계를 이용해서 적은 노력으로 쉽게 코드를 변경할 수 있다.

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 신뢰성이 높은 프로그래밍을 가능하게 한다.<br>제어자와 메서드를 이용해서 데이터를 보호하고 올바른 값을 유지하도록 하며,<br>코드의 중복을 제거하여 코드의 불일치로 인한 오동작을 방지할 수 있다.

객체지향언어의 가장 큰 장점은 ’코드의 재사용성이 높고 변경에 유리하다.’는 것이다. 이 러한 객체지향언어의 장점은 프로그램의 개발과 유지보수에 드는 시간과 비용을 획기적 으로 개선하였다.<br>앞으로 상속, 다형성과 같은 객체지향개념을 학습할 때 재사용성과 유지보수 그리고 중 복된 코드의 제거, 이 세 가지 관점에서 보면 보다 쉽게 이해할 수 있을 것이다.<br>객체지향 프로그래밍은 프로그래머에게 거시적 관점에서 설계할 수 있는 능력을 요구하 기 때문에 객체지향개념을 이해했다 하더라도 자바의 객체지향적 장점들을 충분히 활용 한 프로그램을 작성하기란 쉽지 않을 것이다.<br>너무 객체지향개념에 얽매여서 고민하기 보다는 일단 프로그램을 기능적으로 완성한 다 음 어떻게 하면 보다 객체지향적으로 코드를 개선할 수 있을지를 고민하여 점차 개선해 나가는 것이 좋다.<br>이러한 경험들이 축적되어야 프로그램을 객체지향적으로 설계할 수 있는 능력이 길러지 는 것이지 처음부터 이론을 많이 안다고 해서 좋은 설계를 할 수 있는 것은 아니다.

## 2. 클래스와 객체

## 2.1 클래스와 객체의 정의와 용도

클래스란 ‘객체를 정의한 것.’ 또는 ’객체의 설계도’라고 할 수 있다. 클래스는 객체를 생성 하는데 사용되며, 객체는 클래스에 정의된 대로 생성된다.

클래스의 정의 클래스란 객체를 정의해 놓은 것이다.<br>클래스의 용도 클래스는 객체를 생성하는데 사용된다.

객체의 사전적인 정의는, ’실제로 존재하는 것’이다. 우리가 주변에서 볼 수 있는 책상, 의 자, 자동차와 같은 사물들이 곧 객체이다. 객체지향이론에서는 사물과 같은 유형적인 것 뿐만 아니라, 개념이나 논리와 같은 무형적인 것들도 객체로 간주한다.<br>프로그래밍관점에서 객체는 클래스에 정의된 대로 메모리에 생성된 것을 뜻한다.

객체의 정의 실제로 존재하는 것. 사물 또는 개념<br>객체의 용도 객체가 가지고 있는 기능과 속성에 따라 다름

유형의 객체 책상, 의자, 자동차, TV와 같은 사물<br>무형의 객체 수학공식, 프로그램 에러와 같은 논리나 개념

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>클래스와 객체의 관계를 우리가 살고 있는 실생활에서 예를 들면, 제품 설계도와 제품과 의 관계라고 할 수 있다. 예를 들면, TV설계도(클래스)는 TV라는 제품(객체)을 정의한 것 이며, TV(객체)를 만드는데 사용된다.<br>또한 클래스는 단지 객체를 생성하는데 사용될 뿐, 객체 그 자체는 아니다. 우리가 원하 는 기능의 객체를 사용하기 위해서는 먼저 클래스로부터 객체를 생성하는 과정이 선행되 어야 한다.<br>우리가 TV를 보기 위해서는, TV(객체)가 필요한 것이지 TV설계도(클래스)가 필요한 것 은 아니며, TV설계도(클래스)는 단지 TV라는 제품(객체)을 만드는데 사용될 뿐이다.<br>그리고 TV설계도를 통해 TV가 만들어진 후에야 사용할 수 있다. 프로그래밍에서는 먼 저 클래스를 작성한 다음, 클래스로부터 객체를 생성하여 사용한다.

I 참고 I 객체를 사용한다는 것은 객체가 가지고 있는 속성과 기능을 사용한다는 뜻이다.

| 클래스 | 객 체 |
| --- | --- |
| 제품 설계도 | 제품 |
| TV 설계도 | TV |
| 붕어빵 기계 | 붕어빵 |

△ 표6-1 클래스와 객체의 예

클래스를 정의하고 클래스를 통해 객체를 생성하는 이유는 설계도를 통해서 제품을 만드 는 이유와 같다. 하나의 설계도만 잘 만들어 놓으면 제품을 만드는 일이 쉬워진다. 제품을 만들 때마다 매번 고민할 필요없이 설계도대로 만들면 되기 때문이다.<br>설계도 없이 제품을 만든다고 생각해보라. 복잡한 제품일수록 설계도 없이 제품을 만든 다는 것은 상상할 수도 없을 것이다.

이와 마찬가지로 클래스를 한번만 잘 만들어 놓기만 하면, 매번 객체를 생성할 때마다 어떻게 객체를 만들어야 할지를 고민하지 않아도 된다. 그냥 클래스로부터 객체를 생성해 서 사용하기만 하면 되는 것이다.<br>JDK(Java Development Kit)에서는 프로그래밍을 위해 많은 수의 유용한 클래스(Java API)를 기본적으로 제공하고 있으며, 우리는 이 클래스들을 이용해서 원하는 기능의 프로 그램을 보다 쉽게 작성할 수 있다.

## 2.2 객체와 인스턴스

클래스로부터 객체를 만드는 과정을 클래스의 인스턴스화(instantiate)라고 하며, 어떤 클 래스로부터 만들어진 객체를 그 클래스의 인스턴스(instance)라고 한다.

예를 들면, Tv클래스로부터 만들어진 객체를 Tv클래스의 인스턴스라고 한다. 결국 인스 턴스는 객체와 같은 의미이지만, 객체는 모든 인스턴스를 대표하는 포괄적인 의미를 갖고 있으며, 인스턴스는 어떤 클래스로부터 만들어진 것인지를 강조하는 보다 구체적인 의미 를 갖고 있다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>예를 들면, ’책상은 인스턴스다.’라고 하기 보다는 ’책상은 객체다.’라는 쪽이, ’책상은 책상 클래스의 객체이다.’라고 하기 보다는 ’책상은 책상 클래스의 인스턴스다.’라고 하는 것이 더 자연스럽다.<br>인스턴스와 객체는 같은 의미이므로 두 용어의 사용을 엄격히 구분할 필요는 없지만, 위 의 예에서 본 것과 같이 문맥에 따라 구별하여 사용하는 것이 좋다.

클래스 $\xrightarrow{\text { 인스턴스화 }}$ 인스턴스 (객체)

## 2.3 객체의 구성요소 - 속성과 기능

객체는 속성과 기능, 두 종류의 구성요소로 이루어져 있으며, 일반적으로 객체는 다수의 속성과 다수의 기능을 갖는다. 즉, 객체는 속성과 기능의 집합이라고 할 수 있다. 그리고 객체가 가지고 있는 속성과 기능을 그 객체의 멤버(구성원, member)라 한다.

클래스란 객체를 정의한 것이므로 클래스에는 객체의 모든 속성과 기능이 정의되어있 다. 클래스로부터 객체를 생성하면, 클래스에 정의된 속성과 기능을 가진 객체가 만들어 지는 것이다.<br>속성과 기능은 아래와 같이 같은 뜻의 여러 가지 용어가 있으며, 앞으로 이 중에서도 ’속 성’보다는 ’멤버 변수’를, ’기능’보다는 ’메서드’를 주로 사용할 것이다.

속성(property) 멤버 변수(member variable), 특성(attribute), 필드(field), 상태(state) 기능(function) 메서드(method), 함수(function), 행위(behavior)

보다 쉽게 이해할 수 있도록 TV를 예로 들어보자. TV의 속성으로는 전원상태, 크기, 길 이, 높이, 색상, 볼륨, 채널과 같은 것들이 있으며, 기능으로는 켜기, 끄기, 볼륨 높이기, 채널 변경하기 등이 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-271_268_1043_1704_496.jpg -->

- 그림6-1 TV의 속성과 기능

객체지향 프로그래밍에서는 속성과 기능을 각각 변수와 메서드로 표현한다.

```txt
속성(property) → 멤버 변수(member variable)
기능(function) → 메서드(method)
```

채널 → int channel<br>채널 높이기 → channelUp( ) \{ … \}<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>위에서 분석한 내용을 토대로 Tv클래스를 만들어 보면 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-272_432_1279_389_191.jpg -->

I 참고 I 멤버 변수와 메서드를 선언할 때 순서는 관계없지만, 일반적으로 메서드보다 멤버 변수를 먼저 선언하고 멤버 변수 는 멤버 변수끼리 메서드는 메서드끼리 모아 놓는 것이 일반적이다.

실제 TV가 갖는 기능과 속성은 이 외에도 더 있지만, 프로그래밍에 필요한 속성과 기능만 을 선택하여 클래스를 작성하면 된다.<br>각 변수의 타입은 속성의 값에 알맞은 것을 선택해야 한다. 전원상태(power)의 경우, on 과 off 두 가지 값을 가질 수 있으므로 boolean으로 선언했다.<br>power()의 ‘power = !power;’ 이 문장에서 power의 값이 true면 false로, false면 true 로 변경하는 일을 한다. power의 값에 관계없이 항상 반대의 값으로 변경해주면 되므로 굳이 if문을 사용할 필요가 없다. 참고로 if문을 사용하여 코드를 작성하면 다음과 같다.

```txt
if (power) // if (power==true)
    power = false;
else
    power = true;
```

## 2.4 인스턴스의 생성과 사용

Tv클래스를 선언한 것은 Tv설계도를 작성한 것에 불과하므로, Tv인스턴스를 생성해야 제품(Tv)을 사용할 수 있다. 클래스로부터 인스턴스를 생성하는 방법은 여러가지가 있지 만 일반적으로는 다음과 같이 한다.

```txt
크ᄅ래스며ᄋ 벼ᄂ수며ᄋ; // 크ᄅ래스의 개ᄀ체르ᄅ 차ᄆ조하기 위하ᄂ 차ᄆ조 벼ᄂ수 (리모코ᄂ) 르ᄅ 서ᄂ어ᄂ
벼ᄂ수며ᄋ = new 크ᄅ래스며ᄋ(); // 크ᄅ래스의 개ᄀ체르ᄅ 새ᄋ서ᄋ 후, 개ᄀ체의 주소르ᄅ 차ᄆ조 벼ᄂ수에 저자ᄋ(여ᄂ겨ᄅ)
Tv t; // Tv크ᄅ래스 타이ᄇ의 차ᄆ조 벼ᄂ수 t르ᄅ 서ᄂ어ᄂ
t = new Tv(); // Tvoll스터ᄂ스르ᄅ 새ᄋ서ᄋ하ᄂ 후, 새ᄋ서ᄋ되ᄂ Tvolᄂ스터ᄂ스의 주소르ᄅ t에 저자ᄋ
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-1/TvEx. java

```txt
class Tv {
    // Tv 의 소ᄀ서ᄋ (메ᄆ버벼ᄂ수)
    String color; // 새ᄀ사ᄋ
    boolean power; // 저ᄂ워ᄂ사ᄋ태(on/off)
    int channel; // 채너ᄅ
    // Tv 의 기느ᄋ (메서드)
    void power() { power = !power; } // TV 르ᄅ 켜거나 그느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelUp() { ++channel; } // TV 의 채너ᄅ으ᄅ 노ᄑ이느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelDown() { --channel; } // TV 의 채너ᄅ으ᄅ 나ᄌ추느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
}
class TvEx {
        public static void main(String args[]) {
            Tv t; // Tv이ᄂ스터ᄂ스르ᄅ 차ᄆ조하기 위하ᄂ 벼ᄂ수 t르ᄅ 서ᄂ어ᄂ
            t = new Tv(); // Tv이ᄂ스터ᄂ스르ᄅ 새ᄋ서ᄋ
            t.channel = 7; // Tvoll스터ᄂ스의 메ᄆ버벼ᄂ수 channel의 가ᄡ으ᄅ 7로 하ᄂ다.
            t.channelDown(); // Tv이ᄂ스터ᄂ스의 메서드 channelDown()으ᄅ 호추ᄅ하ᄂ다.
            System.out.println("혀ᄂ재 채너ᄅ으ᄂ " + t.channel + " 이ᄇ니다.");
        }
}
```

이 예제는 Tv클래스로부터 인스턴스를 생성하고 인스턴스의 속성(channel)과 메서드(channelDown())를 사용하는 방법을 보여 주는 것이다. 이 예제를 그림과 함께 단계별로 자세히 살펴보도록 하자.

1. Tv t;

Tv클래스 타입의 참조변수 t를 선언한다. 메모리에 참조 변수 t를 위한 공간이 마련된다. 아직 인 스턴스가 생성되지 않았으므로 참조 변수로 아무것도 할 수 없다.<br>t □

1. $t=$ new $\operatorname{Tv}()$;

연산자 new에 의해 Tv클래스의 인스턴스가 메모리의 빈 공간에 생성된다. 주소가 0×100인 곳에 생성되었다고 가정하자. 이 때, 멤버 변수는 각 자료형에 해당하는 기본값으로 초기화 된다.<br>color는 참조형이므로 null로, power는 boolean이므로 false로, 그리고 channel은 int이므로 0 으로 초기화 된다.<br>t □

| color | 0×100 |
| --- | --- |
| power | null |
| channel | false |
|  | 0 |
|  | power () |
|  | channelUp() |
|  | channelDown() |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그 다음에는 대입 연산자(=)에 의해서 생성된 객체의 주소가 참조 변수 t에 저장된다. 이제는 참 조 변수 t를 통해 Tv인스턴스에 접근할 수 있다. 인스턴스를 다루기 위해서는 참조 변수가 반드시 필요하다.

I 참고 I 아래 그림에서의 화살표는 참조 변수 t가 Tv인스턴스를 참조하고 있다는 것을 알기 쉽게 하기 위해 추가한 상징적인 것이다. 이 때, 참조 변수 t가 Tv인스턴스를 ‘가리키고 있다’ 또는 ’참조하고 있다’라고 한다.

| t 0x100 |  | 0×100 |
| --- | --- | --- |
|  | color | null |
|  | power | false |
|  | channel | 0 |
|  |  | power () |
|  |  | channelUp() |
|  |  | channelDown() |

1. t.channel = 7 ;<br>참조 변수 t에 저장된 주소에 있는 인스턴스의 멤버 변수 channel에 7을 저장한다. 여기서 알 수 있는 것처럼, 인스턴스의 멤버 변수(속성)를 사용하려면 ’참조변수.멤버변수’와 같이 하면 된다.

| t 0x100 |  | 0x100 |
| --- | --- | --- |
|  | color | null |
|  | power | false |
|  | channel | 7 |
|  |  | power () |
|  |  | channelUp() |
|  |  | channelDown() |

1. t.channelDown() ;<br>참조 변수 t가 참조하고 있는 Tv인스턴스의 channelDown메서드를 호출한다. channel Down메 서드는 멤버 변수 channel에 저장되어 있는 값을 1 감소시킨다.<br>void channelDown() \{ –channel; \}<br>channelDown()에 의해서 channel의 값은 7에서 6이 된다.

| t 0x100 |  | 0×100 |
| --- | --- | --- |
|  | color | null |
|  | power | false |
|  | channel | 6 |
|  |  | power () |
|  |  | channelUp() |
|  |  | channelDown() |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. System.out.println(“현재채널은” + t.channel + ” 입니다.”);

참조 변수 t가 참조하고 있는 Tv인스턴스의 멤버 변수 channel에 저장되어 있는 값을 출력한다. 현재 channel의 값은 6이므로 ’현재 채널은 6 입니다.’가 화면에 출력된다.

인스턴스와 참조 변수의 관계는 마치 우리가 일상생활에서 사용하는 TV와 TV리모콘의 관계와 같다. TV리모콘(참조 변수)을 사용하여 TV(인스턴스)를 다루기 때문이다. 다른 점 은 인스턴스는 오직 참조 변수를 통해서만 다룰 수 있다는 것이다.

그리고 TV를 사용하려면 TV 리모콘을 사용해야하고, 에어콘을 사용하려면, 에어콘 리 모콘을 사용해야하는 것처럼 Tv인스턴스를 사용하려면, Tv클래스 타입의 참조 변수가 필 요하다.

## 인스턴스는 참조 변수를 통해서만 다룰 수 있으며,  참조 변수의 타입은 인스턴스의 타입과 일치해야 한다.

- 예제 6-2/TvEx2.java

```txt
class Tv2 {
    // Tv2의 소ᄀ서ᄋ(메ᄆ버 벼ᄂ수)
    String color; // 새ᄀ사ᄋ
    boolean power; // 저ᄂ워ᄂ사ᄋ태(on/off)
    int channel; // 채너ᄅ
    // Tv2의 기느ᄋ(메서드)
    void power() { power = !power; } // TV 르ᄅ 켜거나 그느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelUp() { ++channel; } // TV 의 채너ᄅ으ᄅ 노ᄑ이느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelDown() { --channel; } // TV 의 채너ᄅ으ᄅ 나ᄌ추느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
}
class TvEx2 {
    public static void main(String args[]) {
        Tv2 t1 = new Tv2(); // Tv2 t1; t1 = new Tv2();르ᄅ하ᄂ 무ᄂ자ᄋ으로 가느ᄋ
        Tv2 t2 = new Tv2();
        System.out.println("t1의 channel가ᄡ으ᄂ " + t1.channel + "이ᄇ니다.");
        System.out.println("t2의 channel가ᄡ으ᄂ " + t2.channel + "이ᄇ니다.");
        t1.channel = 7; // channel 가ᄡ으ᄅ 7으로 하ᄂ다.
        System.out.println("t1의 channel가ᄡ으ᄅ 7로 벼ᄂ겨ᄋ하여ᄊ스ᄇ니다.");
        System.out.println("t1의 channel가ᄡ으ᄂ " + t1.channel + "이ᄇ니다.");
        System.out.println("t2의 channel가ᄡ으ᄂ " + t2.channel + "이ᄇ니다.");
    }
}
```

- 실행결과

```txt
t1의 channel가ᄡ으ᄂ 0이ᄇ니다.
t2의 channel가ᄡ으ᄂ 0이ᄇ니다.
t1의 channel가ᄡ으ᄅ 7로 벼ᄂ겨ᄋ하여ᄊ스ᄇ니다.
t1의 channel가ᄡ으ᄂ 7이ᄇ니다.
t2의 channel가ᄡ으ᄂ 0이ᄇ니다.
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

위의 예제는 Tv클래스의 인스턴스 t1과 t2를 생성한 후에, 인스턴스 t1의 멤버 변수인 channel의 값을 변경하였다.

I 참고 I 참조 변수 t1이 가리키고 (참조하고) 있는 인스턴스를 간단히 인스턴스 t1이라고 했다.

1. Tv2 t1 = new Tv2();<br>Tv2 t2 = new Tv2();
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-276_386_540_579_242.jpg -->

   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-276_385_539_579_882.jpg -->
2. t1.channel = 7; // t1이 가리키고 있는 인스턴스의 멤버 변수 channel의 값을 7로 변경
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-276_387_540_1065_232.jpg -->

   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-276_386_539_1065_892.jpg -->

같은 클래스로부터 생성되었어도 각 인스턴스의 속성(멤버 변수)은 서로 다른 값을 유지할 수 있으며, 메서드의 내용은 모든 인스턴스에서 동일하다.

- 예제 6-3/TvEx3.java

```txt
class Tv3 {
    // Tv3의 소ᄀ서ᄋ(메ᄆ버 벼ᄂ수)
    String color; // 새ᄀ사ᄋ
    boolean power; // 저ᄂ워ᄂ사ᄋ태(on/off)
    int channel; // 채너ᄅ
    // Tv3의 기느ᄋ (메서드)
    void power() { power = !power; } // TV 르ᄅ 켜거나 그느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelUp() { ++channel; } // TV 의 채너ᄅ으ᄅ 노ᄑ이느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
    void channelDown() { --channel; } // TV 의 채너ᄅ으ᄅ 나ᄌ추느ᄂ 기느ᄋ으ᄅ 하느ᄂ 메서드
}
class Tv3 {
    public static void main(String args[]) {
        Tv3 t1 = new Tv3();
        Tv3 t2 = new Tv3();
        System.out.println("t1의 channel가ᄡ으ᄂ " + t1.channel + "이ᄇ니다.");
        System.out.println("t2의 channel가ᄡ으ᄂ " + t2.channel + "이ᄇ니다.");
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        t2 = t1; // t1 에 저자ᄋ되ᄂ 가ᄡ(주소) 으ᄅ t2에 저자ᄋ
        t1.channel = 7; // channel 가ᄡ으ᄅ 7로 벼ᄂ겨ᄋ
        System.out.println("t1의 channel가ᄡ으ᄅ 7로 벼ᄂ겨ᄋ하여ᄊ스ᄇ니다.");
        System.out.println("t1의 channel가ᄡ으ᄂ " + t1.channel + "이ᄇ니다.");
        System.out.println("t2의 channel가ᄡ으ᄂ " + t2.channel + "이ᄇ니다.");
    }
}
```

- 실행결과

```txt
t1의 channel가ᄡ으ᄂ 0이ᄇ니다.
t2의 channel가ᄡ으ᄂ 0이ᄇ니다.
t1의 channel가ᄡ으ᄅ 7로 벼ᄂ겨ᄋ하여ᄊ스ᄇ니다.
t1의 channel가ᄡ으ᄂ 7이ᄇ니다.
t2의 channel가ᄡ으ᄂ 7이ᄇ니다.
```

이 예제의 실행과정을 그림과 함께 설명하면 다음과 같다.<br>1.Tv3 t1 = new Tv3();<br>Tv3 t2 = new Tv3();

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-277_387_540_1162_410.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-277_384_537_1163_1070.jpg -->

1. t2 = t1; // t1이 저장하고 있는 값 (주소) 을 t2에 저장한다.<br>t1은 참조 변수이므로, 인스턴스의 주소를 저장하고 있다. 이 문장이 실행되면, t2가 가지고 있던 값은 잃어버리게 되고 t1에 저장되어 있던 값이 t2에 저장된다. 그러면 t2 역시 t1이 참조하고 있던 인스턴스를 같이 참조하게 되고, t2가 원래 참조하고 있던 인스턴스는 더 이상 사용할 수 없게 된 다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-277_393_1201_1888_409.jpg -->

I 참고 I 자신을 참조하고 있는 참조 변수가 하나도 없는 인스턴스는 더 이상 사용될 수 없으므로 ’가비지 컬렉터(garbage collector)’에 의해서 자동으로 메모리에서 제거된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. t1.channel = 7; // channel 값을 7로 변경
   <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-278_393_1203_416_232.jpg -->
2. System.out.println(“t1의 channel값은”+t1.channel+“입니다.”); System.out.println(“t2의 channel값은”+t2.channel+“입니다.”); 이제 t1, t2 모두 같은 Tv인스턴스를 가리키기 때문에 t1.channel과 t2.channel의 값은 7이며 다음 과 같은 결과가 화면에 출력된다.

```txt
t1의 channel가ᄡ으ᄂ 7이ᄇ니다.
t2의 channel가ᄡ으ᄂ 7이ᄇ니다.
```

이 예제에서 알 수 있듯이, 하나의 참조 변수에 하나의 값(주소)만이 저장될 수 있으므로 둘 이상의 참조 변수가 하나의 인스턴스를 가리키는(참조하는) 것은 가능하지만 하나의 참조 변수로 여러 개의 인스턴스를 가리키는 것은 가능하지 않다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-278_501_1005_1447_339.jpg -->

- 그림6-2 참조 변수와 인스턴스의 관계

## 2.5 객체 배열

다수의 객체를 다뤄야할 때, 배열을 이용하면 편리할 것이다. 객체 역시 배열로 다루는 것 이 가능하며, 이를 ’객체 배열’이라고 한다. 그렇다고 객체 배열 안에 객체가 저장되는 것 은 아니고, 객체의 주소가 저장된다. 사실 객체 배열은 참조 변수들을 하나로 묶은 참조<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com) 변수 배열인 것이다.

```txt
Tv tv1, tv2, tv3; ⟶ Tv[] tvArr = new Tv[3];
```

길이가 3인 객체 배열 tvArr을 아래와 같이 생성하면, 각 요소는 참조 변수의 기본값인 null로 자동 초기화 된다. 그리고 이 객체 배열은 3 개의 객체, 엄밀히 말하면 객체의 주소, 를 저장할 수 있다.

```txt
Tv[] tvArr = new Tv[3]; // 기ᄅ이가 3이ᄂ Tv타이ᄇ의 차ᄆ조 벼ᄂ수 배여ᄅ
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-279_125_772_820_623.jpg -->

위의 그림에서 알 수 있듯이 객체 배열을 생성하는 것은, 그저 객체를 다루기 위한 참조 변수들이 만들어진 것일 뿐, 아직 객체가 생성되지 않았다. 객체를 생성해서 객체 배열의 각 요소에 저장하는 것을 잊으면 안 된다. 지금은 이런 실수를 안 할 것 같지만, 객체 배열 에서 제일 많이 받는 질문이 객체 배열만 생성해 놓고 ’분명히 객체를 생성했는데, 에러가발생한다.’는 것이다.

```txt
Tv[] tvArr = new Tv[3]; // 차ᄆ조 벼ᄂ수 배여ᄅ (개ᄀ체 배여ᄅ) 으ᄅ 새ᄋ서ᄋ
// 개ᄀ체르ᄅ 새ᄋ서ᄋ해서 배여ᄅ의 가ᄀ 요소에 저자ᄋ
tvArr[0] = new Tv();
tvArr[1] = new Tv();
tvArr[2] = new Tv();
```

배열의 초기화 블럭을 사용하면, 다음과 같이 한 줄로 간단히 할 수 있다.

```txt
Tv[] tvArr = { new Tv(), new Tv(), new Tv() };
```

다뤄야할 객체의 수가 많을 때는 for문을 사용하면 된다.

```txt
Tv[] tvArr = new Tv[100];
for(int i=0;i<tvArr.length;i++) {
    tvArr[i] = new Tv();
}
```

모든 배열이 그렇듯이 객체 배열도 같은 타입의 객체만 저장할 수 있다. 그러면, 여러 종

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-4/TvEx4.java

```txt
class TvEx4 {
    public static void main(String args[]) {
        Tv4[] tvArr = new Tv4[3]; // 기ᄅ이가 3이ᄂ Tv개ᄀ체 배여ᄅ
        // Tv개ᄀ체르ᄅ 새ᄋ서ᄋ해서 Tv개ᄀ체 배여ᄅ의 가ᄀ 요소에 저자ᄋ
        for(int i=0; i < tvArr.length;i++) {
            tvArr[i] = new Tv4();
            tvArr[i].channel = i+10; // tvArr[i]의 channel에 i+10으ᄅ저자ᄋ
        }
        for(int i=0; i < tvArr.length;i++) {
            tvArr[i].channelUp(); // tvArr[i]의 메서드르ᄅ 호추ᄅ. 채너ᄅ이 1즈ᄋ가
            System.out.printf("tvArr[%d].channel=%d%n",i,
                tvArr[i].channel);
        }
    } // main의끄ᄐ
}
class Tv4 {
    String color; // 새ᄀ사ᄋ
    boolean power; // 저ᄂ워ᄂ사ᄋ태(on/off)
    int channel; // 채너ᄅ
    void power() { power = !power; }
    void channelUp() { ++channel; }
    void channelDown() { --channel; }
}
```

- 실행결과

```txt
tvArr[0].channel=11
tvArr[1].channel=12
tvArr[2].channel=13
```

## 2.6 클래스의 또 다른 정의

클래스는 ’객체를 생성하기 위한 틀’이며 ’클래스는 속성과 기능으로 정의되어있다.’고 했 다. 이것은 객체지향이론 관점에서의 정의이고, 이번엔 프로그래밍적인 관점에서 클래스 의 정의와 의미를 살펴보자.

## 1. 클래스 - 데이터와 함수의 결합

프로그래밍언어에서 데이터 처리를 위한 데이터 저장형태의 발전과정은 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-280_230_1269_1979_194.jpg -->

- 그림6-3 데이터 저장 개념의 발전 과정

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 변수 하나의 데이터를 저장할 수 있는 공간
2. 배열 같은 종류의 여러 데이터를 하나의 집합으로 저장할 수 있는 공간
3. 구조체 서로 관련된 여러 데이터를 종류에 관계없이 하나의 집합으로 저장할 수 있는 공간
4. 클래스 데이터와 함수의 결합(구조체 + 함수)

하나의 데이터를 저장하기 위해 변수를, 그리고 같은 종류의 데이터를 보다 효율적으로 다루기 위해서 배열이라는 개념을 도입했으며, 후에는 구조체(structure)가 등장하여 자 료형의 종류에 상관없이 서로 관계가 깊은 변수들을 하나로 묶어서 다룰 수 있게 했다.

그동안 데이터와 함수가 서로 관계가 없는 것처럼 데이터는 데이터끼리, 함수는 함수끼리 따로 다루어져 왔지만, 사실 함수는 주로 데이터를 가지고 작업을 하기 때문에 많은 경우 에 있어서 데이터와 함수는 관계가 깊다.

그래서 자바와 같은 객체지향언어에서는 변수(데이터)와 함수를 하나의 클래스에 정의 하여 서로 관계가 깊은 변수와 함수들을 함께 다룰 수 있게 했다.<br>서로 관련된 변수들을 정의하고 이들에 대한 작업을 수행하는 함수들을 함께 정의한 것 이 바로 클래스이다. C언어에서는 문자열을 문자의 배열로 다루지만, 자바에서는 String 이라는 클래스로 문자열을 다룬다. 문자열을 단순히 문자의 배열로 정의하지 않고 클래스 로 정의한 이유는 문자열과 문자열을 다루는데 필요한 함수들을 함께 묶기 위해서이다.

```txt
public final class String implements java.io.Serializable, Comparable {
    private char[] value; // 무ᄂ자여ᄅ으ᄅ 저자ᄋ하기 위하ᄂ 고ᄋ가ᄂ
    public String replace(char oldChar, char newChar) {
        ...
        char[] val = value; // 가ᄐ으ᄂ 크ᄅ래스 내의 벼ᄂ수르ᄅ 사요ᄋ해서 자ᄀ어ᄇ으ᄅ 하ᄂ다.
        ⋯
    }
        ⋯
}
```

위 코드는 String클래스의 실제 소스의 일부이다. 클래스 내부에 value라는 문자 배열이 선언되어 있고, 문자열을 다루는 데 필요한 함수들을 함께 정의해 놓았다. 문자열의 일부 를 뽑아내는 함수나 문자열의 길이를 알아내는 함수들은 항상 작업 대상으로 문자열을 필 요로 하기 때문에 문자열과 깊은 관계에 있어서 함께 정의하였다.<br>이렇게 하면 변수와 함수가 서로 연결되어 작업이 간단하고 명료해진다.

1. 클래스 - 사용자정의 타입(user-defined type)

프로그래밍언어에서 제공하는 기본형(primitive type)외에 프로그래머가 서로 관련된 변수들을 묶어서 하나의 타입으로 새로 추가하는 것을 사용자정의 타입(user-defined type)이라고 한다.

많은 프로그래밍언어에서 사용자정의 타입을 정의할 수 있는 방법을 제공하고 있으며 자바와 같은 객체지향언어에서는 클래스가 곧 사용자 정의 타입이다. 기본형의 개수는 8

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

개로 정해져 있지만 참조형의 개수가 정해져 있지 않은 이유는 이처럼 프로그래머가 새로운 타입을 추가할 수 있기 때문이다.

```txt
int hour; // 시가ᄂ으ᄅ 표혀ᄂ하기 위하ᄂ 벼ᄂ수
int minute; // 부ᄂ으ᄅ 표혀ᄂ하기 위하ᄂ 벼ᄂ수
float second; // 초르ᄅ 표혀ᄂ하기 위하ᄂ 벼ᄂ수, 1/100초까지 표혀ᄂ하려고 float로 해ᄊ다.
```

하나의 시간을 표현하기 위해 위와 같이 3 개의 변수를 선언하였다. 만일 3 개의 시간을 다뤄야 한다면 다음과 같이 해야 할 것이다.

```txt
int hour1, hour2, hour3;
int minute1, minute2, minute3;
float second1, second2, second3;
```

이처럼 다뤄야 하는 시간의 개수가 늘어날 때마다 시, 분, 초를 위한 변수를 추가해야 하는데 데이터의 개수가 많으면 이런 식으로는 곤란하다.

```txt
int[] hour = new int[3];
int[] minute = new int[3];
float[] second = new float[3];
```

위와 같이 배열로 처리하면 다뤄야 하는 시간 데이터의 개수가 늘어나더라도 배열의 크기만 변경해주면 되므로, 변수를 매번 새로 선언해줘야 하는 불편함과 복잡함은 없어졌다.그러나 하나의 시간을 구성하는 시, 분, 초가 분리되어 있어서 실행 중에 시, 분, 초가 따로 섞여서 올바르지 않은 데이터가 될 가능성이 있다. 이런 경우 시, 분, 초를 하나로 묶는사용자정의 타입, 즉 클래스를 정의하여 사용하는 것이 좋다.

```txt
class Time { // 세 개oᅴ 벼ᄂ수르ᄅ 하나로 무ᄁ느ᄂ 새로우ᄂ 타이ᄇ으ᄅ 저ᄋ의
    int hour;
    int minute;
    float second;
}
```

위의 코드는 시, 분, 초를 저장하기 위한 세 변수를 멤버 변수로 갖는 Time클래스를 정의한 것이다. 사용자정의 타입 Time클래스를 이용해서 코드를 작성하면 아래와 같다.

| 비객체지향적 코드 | 객체지향적 코드 |
| --- | --- |
|  |  |
|  |  |

A 표6-2 비객체지향적 코드와 객체지향적 코드의 비교

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>이제 시, 분, 초가 하나의 단위로 묶여서 다루어지기 때문에 다른 시간 데이터와 섞이는일은 없겠지만, 시간 데이터에는 다음과 같은 추가적인 제약조건이 있다.

1. 시, 분, 초는 모두 0보다 크거나 같아야 한다.
2. 시의 범위는 0~23, 분과 초의 범위는 0~59 이다.

이러한 조건들이 모두 프로그램 코드에 반영될 때, 보다 정확한 데이터를 유지할 수 있을것이다. 객체지향언어가 아닌 언어에서는 이러한 추가적인 조건들을 반영하기가 어렵다.<br>그러나 객체지향언어에서는 제어자와 메서드를 이용해서 이러한 조건들을 코드에 쉽게반영할 수 있다.<br>아직 제어자에 대해서 배우지는 않았지만, 위의 조건들을 반영하여 Time클래스를 작성해 보았다. 가볍게 참고만 하기 바란다.

```txt
public class Time {
    private int hour; // 제어자 private으ᄅ 부ᄐ이며ᄂ 외부에서 저ᄇ그ᄂ 부ᄅ가
    private int minute;
    private float second;
    public int getHour() { return hour; }
    public int getMinute() { return minute; }
    public float getSecond() { return second; }
    public void setHour(int h) { // public메서드로마ᄂ hour 벼ᄂ겨ᄋ 가느ᄋ
        if (h < 0 || h > 23) return;
        hour = h; // 조거ᄂ에 마ᄌ느ᄂ 가ᄡ이ᄅ 때마ᄂ 벼ᄂ겨ᄋ 가느ᄋ
    }
    public void setMinute(int m) {
        if (m < 0 || m > 59) return;
        minute = m;
    }
    public void setSecond(float s) {
        if (s < 0.0f || s > 59.99f) return;
        second = s;
    }
}
```

제어자를 이용해서 변수의 값을 직접 변경하지 못하도록 하고 대신 메서드를 통해서 값을변경하도록 작성하였다. 값을 변경할 때 지정된 값의 유효성을 if문으로 점검한 다음에 유효한 값일 경우에만 변경된다..<br>이 외에도 시간의 차를 구하는 메서드와 같이 시간과 관련된 메서드를 추가로 정의하여 Time클래스를 향상시켜 보는 것도 좋은 프로그래밍 공부거리가 될 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3. 변수와 메서드

## 3.1 선언위치에 따른 변수의 종류

변수는 클래스 변수, 인스턴스 변수, 지역 변수 모두 세 종류가 있다. 변수의 종류를 결정 짓는 중요한 요소는 ’변수의 선언된 위치’이므로 변수의 종류를 파악하려면, 변수가 어느 영역에 선언되었는지 확인하는 것이 중요하다.<br>영역은 클래스 영역과 메서드 영역 두 가지뿐이며, 메서드 영역이 아니면 클래스 영역이 라고 생각하면 쉽다. 메서드 영역에 선언된 변수는 지역 변수(lv)이며, 그 외에는 모두 멤 버 변수다. 멤버 변수 중 static이 붙은 것은 클래스 변수(cv), 붙지 않은 것은 인스턴스 변 수(iv)이다. 그리고 인스턴스 변수와 클래스 변수의 타입으로 var를 사용할 수 없다.

```txt
class MyClass
{
    int iv; // 이ᄂ스터ᄂ스 벼ᄂ수 . 크ᄅ래스 여ᄋ여ᄀ
    static int cv; // 크ᄅ래스 벼ᄂ수(static벼ᄂ수, 고ᄋ유 벼ᄂ수)
    void method()
    {
        int lv = 0; // 지여ᄀ 벼ᄂ수
    }
}
```

| 변수의 종류 | 선언 위치 | 생성 시기 |
| --- | --- | --- |
| 클래스 변수  (class variable) | 클래스 영역 | 클래스가 메모리에 올라갈 때 |
| 인스턴스 변수  (instance variable) |  | 인스턴스가 생성될 때 |
| 지역 변수  (local variable) | 클래스 영역 이외의 영역  (메서드, 생성자, 초기화 블럭 내부) | 변수 선언문이 수행될 때 |

A 표6-3 변수의 종류와 특징

1. 인스턴스 변수(iv, instance variable)

클래스 영역에 선언되며, 인스턴스를 생성할 때 만들어진다. 그래서 인스턴스 변수(iv)를 사용하려면 먼저 인스턴스를 생성해야 한다.<br>각 인스턴스는 독립적인 저장 공간을 가지므로 서로 다른 값을 가질 수 있다. 인스턴스 마다 고유한 상태를 유지해야하는 속성의 경우, 인스턴스 변수(iv)로 선언한다.

1. 클래스 변수(cv, class variable)

클래스 변수는 인스턴스 변수 앞에 static을 붙인 것이다. 인스턴스 변수와 달리, 클래스 변수는 모든 인스턴스가 저장 공간(변수)을 공유한다. 같은 클래스의 모든 인스턴스들이 공통적인 값을 유지해야하는 속성의 경우, 클래스 변수로 선언해야 한다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

클래스 변수는 인스턴스를 생성하지 않고도 언제라도 바로 사용할 수 있으며, ’클래스 이 름. 클래스 변수’와 같은 형식으로 사용한다. 예를 들어 클래스 MyClass의 클래스 변수 cv 를 사용하려면 ’MyClass.cv’와 같이 하면 된다.<br>클래스 변수는 클래스가 메모리에 ’로딩(loading)’될 때 자동 생성되어 프로그램이 종료 될 때까지 유지되며, public을 앞에 붙이면 같은 프로그램 내에서 어디서나 접근할 수 있 는 ’전역 변수(global variable)’의 성격을 갖는다.

I 참고 I 참조 변수의 선언이나 객체의 생성과 같이 클래스의 정보가 필요할 때, 클래스는 메모리에 로딩된다.

1. 지역 변수 (local variable, lv)

메서드 내에 선언되어 메서드 내에서만 사용 가능하며, 메서드가 호출되면 만들어졌다가 메서드가 종료되면 소멸된다. for문 또는 while문의 블럭 내에 선언된 지역 변수는, 지역 변수가 선언된 블럭\{\} 내에서만 사용 가능하며, 블럭\{\}을 벗어나면 소멸되어 사용할 수 없게 된다. 우리가 6장 이전에 선언한 변수들은 모두 main메서드의 지역 변수다.

## 3.2 클래스 변수와 인스턴스 변수

클래스 변수와 인스턴스 변수의 차이를 이해하기 위한 예로, 카드 게임의 카드를 클래스 로 정의해보자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-285_238_601_1317_704.jpg -->

- 그림6-4 게임 카드

카드 클래스를 작성하기 위해 먼저 카드를 분석해서 속성과 기능을 알아내야 한다. 속성 으로는 카드의 무늬, 숫자, 폭, 높이 정도를 생각할 수 있을 것이다.<br>이 중에서 어떤 속성을 클래스 변수로 선언할지, 또 어떤 속성들을 인스턴스 변수로 선 언할 것인지 한번 생각해보자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-285_383_1278_1876_369.jpg -->

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

각 Card인스턴스는 자신만의 무늬(kind)와 숫자(number)를 유지하고 있어야 하므로 이들을 인스턴스 변수로 선언하였고, 각 카드의 폭(width)과 높이(height)는 모든 인스턴스가 공통적으로 같은 값을 유지해야하므로 클래스 변수로 선언하였다.

이렇게 하면 카드의 폭을 변경해야 할 때, 모든 카드의 width값을 변경하지 않고 한 카드의 width값만 변경해도 모든 카드의 width값이 변경된다.

- 예제 6-5/CardEx.java

```txt
class CardEx {
    public static void main(String args[]) {
        System.out.println("Card.width = " + Card.width);
        System.out.println("Card.height = " + Card.height);
        Card c1 = new Card();
        c1.kind = "Heart";
        c1.number = 7;
        Card c2 = new Card();
        c2.kind = "Spade";
        c2.number = 4;
        System.out.println("c1으ᄂ " + c1.kind + ", " + c1.number
            + "이며, 크기느ᄂ (" + c1.width + ", " + c1.height + ")" );
        System.out.println("c2느ᄂ " + c2.kind + ", " + c2.number
            + "이며, 크기느ᄂ (" + c2.width + ", " + c2.height + ")" );
        System.out.println("c1의 width와 height르ᄅ 가ᄀ가ᄀ 50, 80으로 벼ᄂ겨ᄋ하ᄇ니다.");
        c1.width = 50;
        c1.height = 80;
        System.out.println("c1으ᄂ " + c1.kind + ", " + c1.number
            + "이며, 크기느ᄂ (" + c1.width + ", " + c1.height + ")" );
        System.out.println("c2느ᄂ " + c2.kind + ", " + c2.number
            + "이며, 크기느ᄂ (" + c2.width + ", " + c2.height + ")" );
    }
}
class Card {
    String kind ;
    int number;
    static int width = 100;
    static int height = 250;
}
```

- 실행결과

```txt
Card.width = 100
Card.height = 250
c1으ᄂ Heart, 7이며, 크기느ᄂ (100, 250)
c2느ᄂ Spade, 4이며, 크기느ᄂ (100, 250)
c1 의 width와 height르ᄅ 가ᄀ가ᄀ 50, 80으로 벼ᄂ겨ᄋ하ᄇ니다.
c1으ᄂ Heart, 7이며, 크기느ᄂ (50, 80)
c2느ᄂ Spade, 4이며, 크기느ᄂ (50, 80)
```

I 플래시동영상 I MemberVar.exe는 예제6-5의 실행 과정을 설명과 함께 보여준다.<br>Card클래스의 클래스 변수(static변수)인 width, height는 Card클래스의 인스턴스를 생성하지 않고도 ’클래스 이름. 클래스 변수’와 같은 방식으로 사용할 수 있다.<br>Card인스턴스인 c1과 c2는 클래스 변수인 width와 height를 공유하기 때문에, c1의width와 height를 변경하면 c2의 width와 height값도 바뀐 것과 같은 결과를 얻는다.<br>Card.width, c1.width, c2.width는 모두 같은 저장 공간을 참조하므로 항상 같은 값을갖게 된다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>클래스 변수를 사용할 때는 Card.width와 같이 ’클래스 이름. 클래스 변수’의 형태로 하는 것이 좋다. 참조 변수 c1, c2를 통해서도 클래스 변수를 사용할 수 있지만 이렇게 하면 클 래스 변수를 인스턴스 변수로 오해하기 쉽기 때문이다.

인스턴스 변수는 인스턴스가 생성될 때마다 생성되므로 다른 값을 갖지만, 클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로, 같은 값을 갖는다.

## 3.3 메서드

’메서드(method)’는 특정 작업을 수행하는 문장들을 하나로 묶은 것이다. 기본적으로 수 학의 함수와 유사하며, 어떤 값을 입력하면 이 값으로 작업을 수행해서 결과를 반환한다.<br>예를 들어 제곱근을 구하는 메서드 ’Math.sqrt()’는 4.0을 입력하면, 2.0을 결과로 반환 한다.

I 참고 I 메서드는 입력값 또는 출력값(결과값)이 없을 수도 있으며, 심지어는 입력값과 출력값이 모두 없을 수도 있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-287_327_433_1081_793.jpg -->

그저 메서드가 작업을 수행하는데 필요한 값만 주고 원하는 결과를 얻으면 될 뿐, 이 메서 드가 내부적으로 어떤 과정을 거쳐 결과를 만들어내는지 전혀 몰라도 된다. 즉, 메서드에 넣을 값(입력)과 반환하는 결과(출력)만 알면 되는 것이다. 그래서 메서드를 내부가 보이 지 않는 ’블랙 박스(black box)’라고도 한다.<br>sqrt()외에도 지금까지 빈번히 사용해온 println()이나 random()과 같은 메서드들 역 시 내부적으로 어떻게 동작하는지 몰라도 사용하는데 아무런 어려움이 없었다.

## 메서드를 사용하는 이유

메서드를 통해서 얻는 이점은 여러 가지가 있지만 그 중에서 대표적인 세 가지가 있다. 아 직 메서드를 배우기 전이므로 여기서 나열하는 이점들이 잘 와 닿지 않을 수 있지만, 이 이점들을 염두에 두고 있으면 메서드를 더 깊게 이해하는데 도움이 될 것이다.

## 1. 높은 재사용성(reusability)

이미 Java API에서 제공하는 메서드들을 사용하며 경험한 것처럼 한번 만들어 놓은 메서 드는 몇 번이고 호출할 수 있으며, 다른 프로그램에서도 사용이 가능하다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 중복된 코드의 제거

프로그램을 작성하다보면, 같은 내용의 문장들이 여러 곳에 반복해서 나타나곤 한다. 이 렇게 반복되는 문장들을 묶어서 하나의 메서드로 작성해 놓으면, 반복되는 문장들 대신 메서드를 호출하는 문장으로 대체할 수 있다. 그러면, 전체 소스 코드의 길이도 짧아지고, 변경사항이 발생했을 때 수정해야할 코드의 양이 줄어들어 오류가 발생할 가능성도 함께 줄어든다. 아래의 코드는 예제 $5-10$ 을 약간 변경한 것인데, 배열을 출력하는 같은 내용의 문장이 두 번 반복된다.

```txt
public static void main(String args[]) {
        ...
    for (int i=0;i<10;i++)
        numArr[i] = (int) (Math.random()*10);
    for (int i=0;i<10;i++)
        System.out.printf("%d", numArr[i]);
    System.out.println();
            ...주ᄋ가ᄂ 새ᄋ랴ᄀ...
    for (int i=0;i<10;i++)
        System.out.printf("%d", numArr[i]);
    System.out.println();
}
```

이처럼 같은 내용의 문장들이 반복되면, 소스 코드도 길어지고 해당 문장에서 변경 사항 이 발생했을 때 여러 곳을 고쳐야 하므로 일도 많아지고 오류를 만들어낼 가능성도 높다. 아래와 같이 printArr이라는 메서드를 만들어서 이전의 코드에 적용하면, 다음과 같다.

```txt
static void printArr(int[] numArr) {
    for(int i=0;i<10;i++)
        System.out.printf("%d", numArr[i]); — 0ᅵ제 여기마ᄂ 벼ᄂ겨ᄋ하며ᄂ 되ᄂ다.
    System.out.println();
}
public static void main(String args[]) {
    ⋯
    for(int i=0;i<10;i++)
        numArr[i] = (int) (Math.random()*10);
    printArr(numArr); // 배여ᄅ으ᄅ 추ᄅ려ᄀ
        ...주ᄋ가ᄂ 새ᄋ랴ᄀ...
        바ᄂ보ᄀ되느ᄂ 코드 대시ᄂ 메서드르ᄅ 호추ᄅ
    printArr(numArr); // 배여ᄅ으ᄅ 추ᄅ려ᄀ
}
```

이처럼 반복적으로 나타나는 문장들을 메서드로 만들어 사용하면 코드의 중복이 제거되 고, 변경사항이 발생했을 때 이 메서드만 수정하면 되므로 관리도 쉽고 오류의 발생가능 성도 낮아진다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

아직 메서드에 대해 배우지 않아서 이해가지 않는 부분이 있겠지만, 지금은 메서드의 장 점으로 이런 것들이 있다는 정도만 이해하자.

## 3. 프로그램의 구조화

지금까지는 main메서드 안에 모든 문장을 넣는 식으로 프로그램을 작성해왔다. 길어야 100줄 정도 밖에 안 되는 작은 프로그램을 작성할 때는 이렇게 해도 별 문제가 없지만, 몇 천 줄, 몇 만 줄이 넘는 프로그램도 이런 식으로 작성할 수는 없다. 큰 규모의 프로그램에 서는 문장들을 작업 단위로 나눠서 여러 개의 메서드에 담아 프로그램의 구조를 단순화시 키는 것이 필수적이다. 예를 들어서 예제5-10을 작업 단위로 나누어서 메서드로 만들면, main메서드가 아래와 같이 간단해 진다.

```txt
public static void main(String args[]) {
    int[] numArr = new int[10];
    initArr(numArr); // 1. 배여ᄅ으ᄅ 초기화
    printArr(numArr); // 2. 배여ᄅ으ᄅ 추ᄅ려ᄀ
    sortArr(numArr); // 3. 배여ᄅ으ᄅ 저ᄋ려ᄅ
    printArr(numArr); // 4. 배여ᄅ으ᄅ 추ᄅ려ᄀ
}
```

이처럼 main메서드는 프로그램의 전체 흐름이 한눈에 들어올 정도로 단순하게 구조화하는 것이 좋다. 그래야 나중에 프로그램에 문제가 발생해도 해당 부분을 쉽게 찾아서 해결 할 수 있다.

처음에 프로그램을 설계할 때 내용이 없는 메서드를 작업 단위로 만들어 놓고, 하나씩 완성해가는 것도 프로그램을 구조화하는 좋은 방법이다. 아래의 코드는 성적처리 프로그 램을 설계한 것인데, 처음에 showMenu메서드를 호출해서 메뉴를 보여주고 선택한 메뉴 에 따라 다른 작업을 하도록 작성하였다.

```txt
static int showMenu() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
static void inputRecord() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
static void changeRecord() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
static void deleteRecord() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
static void searchRecord() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
static void showRecordList() { /* 나주ᄋ에 내요ᄋ으ᄅ 와ᄂ서ᄋ하ᄂ다.*/ }
public static void main(String args[]) {
        ⋯
    switch(showMenu()) {
        case 1: inputRecord(); break; // 데이터르ᄅ 이ᄇ려ᄀ바ᄃ느ᄂ 메서드
        case 2: changeRecord(); break; // 데이터르ᄅ 벼ᄂ겨ᄋ하느ᄂ 메서드
        case 3: deleteRecord(); break; // 데이터르ᄅ 사ᄀ제하느ᄂ 메서드
        case 4: searchRecord(); break; // 데이터르ᄅ 거ᄆ새ᄀ하느ᄂ 메서드
        default: showRecordList(); // 데이터의 모ᄀ로ᄀ으ᄅ 보여주느ᄂ 메서드
    }
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.4 메서드의 선언과 구현

메서드는 크게 두 부분, ’선언부(header,머리)’와 ’구현부(body, 몸통)’로 이루어져 있다. 메서드를 정의한다는 것은 선언부와 구현부를 작성하는 것을 뜻하며 다음과 같은 형식으 로 메서드를 정의한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-290_524_1105_582_300.jpg -->

메서드 선언부(method declaration, 메서드 머리)<br>메서드 선언부는 ‘메서드의 이름’과 ’매개변수 선언’, 그리고 ’반환타입’으로 구성되어 있으 며, 메서드가 작업을 수행하기 위해 어떤 값들을 필요로 하고 작업의 결과로 어떤 타입의 값을 반환하는지에 대한 정보를 제공한다.<br>예를 들어 아래에 정의된 메서드 add는 두 개의 정수를 입력받아서, 두 값을 더한 결과(int타입의 값)를 반환한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-290_363_1138_1522_258.jpg -->

메서드의 선언부는 후에 변경할 일이 생기지 않게 신중히 작성해야한다. 메서드의 선언부 가 변경되면, 그 메서드가 호출되는 모든 곳을 같이 변경해야 하기 때문이다.

매개변수 선언(parameter declaration)<br>매개변수는 메서드가 작업을 수행하는데 필요한 값들(입력)을 제공받기 위한 것이며, 필 요한 값의 개수만큼 변수를 선언하며 쉼표’,를 구분자로 사용한다. 주의할 점은 일반적인 변수 선언과 달리 두 변수의 타입이 같아도 변수의 타입을 생략할 수 없다는 것이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
int add(int x, int y) { ... } // OK.
int add(int x, y) { ... } // 에러. 매개벼ᄂ수 y 의 타이ᄇ이 어ᄡ다.
```

선언할 수 있는 매개변수의 개수는 거의 제한이 없지만, 만일 입력해야할 값의 개수가 많은 경우에는 배열이나 참조 변수를 사용하면 된다. 만일 값을 전혀 입력받을 필요가 없다면 괄호() 안에 아무 것도 적지 않는다.

I 참고 I 매개변수도 메서드 내에 선언된 것으로 간주되므로 ’지역 변수(local variable)’이다.

메서드의 이름(method name)<br>메서드의 이름도 앞서 배운 변수의 명명규칙대로 작성하면 된다. 메서드는 특정 작업을 수행하므로 메서드의 이름은 ’add’처럼 동사인 경우가 많으며, 이름만으로도 메서드의 기 능을 쉽게 알 수 있게 의미있는 이름을 짓도록 노력해야 한다.

반환타입(return type)<br>메서드의 작업수행 결과(출력)인 ’반환값(return value)’의 타입을 적는다. 반환값이 없는 경우 반환타입으로 ’void’를 적어야한다.<br>아래에 정의된 메서드 ’print99danAll’은 구구단 전체를 출력한다. 작업을 수행하는데 필요한 값도, 작업수행의 결과인 반환값도 없다. 그래서 반환타입이 ’void’이다.

I 참고 I ’void’는 ’아무 것도 없음’을 의미한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-291_383_395_1303_1256.jpg -->

```txt
void print99danAll() {
    for(int i=1;i<=9;i++) {
        for(int j=2;j<=9;j++) {
            System.out.print(j+"*"+i+"="+(j*i)+" ");
        }
        System.out.println();
    }
}
```

메서드의 구현부(method body, 메서드 몸통)<br>메서드의 선언부 다음에 오는 괄호\{\}를 ’메서드의 구현부’라고 하는데, 여기에 메서드를 호출했을 때 수행될 문장들을 넣는다. 우리가 그동안 작성한 문장들은 모두 main메서드의 구현부\{\}에 속한 것들이었으므로 지금까지 하던 대로만 하면 된다.<br>return문<br>메서드의 반환타입이 ’void’가 아닌 경우, 구현부\{\}안에 ’return 반환값;’이 반드시 포함되 어 있어야 한다. 이 문장은 작업을 수행한 결과인 반환값을 호출한 메서드로 전달하는데,이 값의 타입은 반환타입과 일치하거나 자동 형변환이 가능한 것이어야 한다.<br>여러 변수를 선언할 수 있는 매개변수와 달리 return문은 단 하나의 값만 반환할 수 있 는데, 메서드로의 입력(매개변수)은 여러 개일 수 있어도 출력(반환값)은 없거나 하나만 허용한다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
int add (int x, int y)
{
    int result = x + y;
    return result; // 자ᄀ어ᄇ 겨ᄅ과 (바ᄂ화ᄂ가ᄡ) 르ᄅ 바ᄂ화ᄂ하ᄂ다.
}
```

타입이 일치해야 한다.<br>위의 코드에서 ’return result;’는 변수 result에 저장된 값을 호출한 메서드로 반환한다. 변수 result의 타입이 int이므로 메서드 add의 반환타입과 일치하는 것을 알 수 있다.

## 지역 변수(local variable)

메서드 내에 선언된 변수들은 그 메서드 내에서만 사용할 수 있으므로 서로 다른 메서드 라면 같은 이름의 변수를 선언해도 된다. 이처럼 메서드 내에 선언된 변수를 ’지역 변수 (local variable)’라고 한다.

I 참고 I 매개변수도 메서드 내에 선언된 것으로 간주되므로 지역 변수이다.

```txt
int add(int x, int y) {
    int result = x + y;
    return result;
}
int multiply(int x, int y) {
    int result = x * y;
    return result;
}
```

위에 정의된 메서드 add와 multiply에 각기 선언된 변수, x, y, result는 이름만 같을 뿐 서로 다른 변수이다. 이처럼 영역이 다르면 구분할 수 있으므로 이름이 같아도 된다.

## 3.5 메서드의 호출

메서드를 정의했어도 호출하지 않으면 아무 일도 일어나지 않는다. 메서드를 호출해야만 구현부\{\}의 문장들이 수행된다. 메서드를 호출하는 방법은 다음과 같다.

I 참고 I main메서드는 프로그램 실행 시 JVM에 의해 자동으로 호출된다.

메서드이름(값1, 값2, …); // 메서드를 호출하는 방법

```txt
print99danAll(); // void print99danAll()으ᄅ 호추ᄅ
int result = add(3, 5); // int add(int x, int y)르ᄅ호추ᄅ하고, 겨ᄅ과르ᄅ result에저자ᄋ
```

## 인자(argument)와 매개변수(parameter)

메서드를 호출할 때 괄호()안에 지정해준 값들을 ’인자(argument)’라고 하는데, 인자의 개수와 순서는 호출된 메서드에 선언된 매개변수와 일치해야 한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

그리고 인자는 메서드가 호출되면서 매개변수에 대입되므로, 인자의 타입은 매개변수의타입과 일치하거나 자동 형변환이 가능한 것이어야 한다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-293_483_931_429_566.jpg -->

만일 아래와 같이 메서드에 선언된 매개변수의 개수보다 많은 값을 괄호()에 넣거나 타입이 다른 값을 넣으면 컴파일러가 에러를 발생시킨다.

```txt
int result = add(1, 2, 3); // 에러. 메서드에 서ᄂ어ᄂ되ᄂ 매개벼ᄂ수의 개수가 다르ᄆ
int result = add(1.0, 2.0); // 에러. 메서드에 서ᄂ어ᄂ되ᄂ 매개벼ᄂ수의 타이ᄇ이 다르ᄆ
```

반환타입이 void가 아닌 경우, 메서드가 작업을 수행하고 반환한 값을 대입 연산자로 변수에 저장하는 것이 보통이지만, 원하지 않으면 저장하지 않아도 된다.

```txt
int result = add(3, 5); // int add(int x, int y) 의호추ᄅ 겨ᄅ과르ᄅ result에저자ᄋ
add(3, 5); // OK. 메서드 add가 바ᄂ화ᄂ하ᄂ 겨ᄅ과르ᄅ 사요ᄋ하지 않아도 되ᄂ다.
```

메서드의 실행흐름<br>같은 클래스 내의 메서드끼리 참조변수를 사용하지 않고도 서로 호출이 가능하지만 static메서드는 같은 클래스 내의 인스턴스 메서드를 호출할 수 없다.<br>다음은 두 개의 값을 매개변수로 받아서 사칙연산을 수행하는 4개의 메서드를 가진MyMath클래스를 정의한 것이다.

```txt
class MyMath {
    long add(long a, long b) {
        long result = a+b;
        return result;
    // return a + b; // 위의 두 주ᄅ으ᄅ 하ᄂ 주ᄅ로 가ᄂ다ᄂ히 하ᄅ 수 이ᄊ다.
    }
    long subtract(long a, long b) { return a - b; }
    long multiply(long a, long b) { return a * b; }
    double divide(double a, double b) { return a / b; }
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

MyMath클래스의 ’add(long a, long b)’를 호출하려면 먼저 ’MyMath mm = new MyMath();’로, MyMath클래스의 인스턴스를 생성해야 한다.

```txt
MyMath mm = new MyMath(); // 머ᄂ저 이ᄂ스터ᄂ스르ᄅ 새ᄋ서ᄋ
long value = mm.add(1L, 2L); // 메서드르ᄅ 호추ᄅ
    4 (1)
long add(long a, long b) {
    long result = a + b; (2)
    return result;
}
```

1. 메서드 add를 호출한다. 호출시 지정한 1L, 2L이 매개변수 a, b에 각각 복사(대입) 된다.
2. 괄호\{\}안에 있는 문장들이 순서대로 수행된다.
3. 괄호\{\}안의 모든 문장이 실행되거나 return문을 만나면, 호출한 메서드(main메서드)로되돌아와서 이후의 문장들을 실행한다.

메서드가 호출되면 지금까지 실행 중이던 메서드는 실행을 잠시 멈추고 호출된 메서드의 문장들이 실행된다. 호출된 메서드의 작업이 모두 끝나면, 다시 호출한 메서드로 돌아와 이후의 문장들을 실행한다.<br>위의 그림에서는 편의상 메서드 add의 호출결과가 바로 value에 저장되는 것처럼 그렸 지만, 사실은 호출한 자리를 반환값이 대신하고 대입연산자에 의해 이 값이 변수 value에 저장된다.

```txt
long value = add(1L, 2L);
→ long value = 3L;
```

add메서드의 매개변수의 타입이 long이므로 호출할 때 long 또는 long으로 자동 형변환 가능한 값을 제공해야 한다. 제공된 값은 메서드의 매개변수로 복사된다. 위의 코드에서 는 1L과 2L의 값이 long타입의 매개변수 a와 b에 각각 복사된다.

메서드는 호출시 넘겨받은 값으로 작업을 수행하고 그 결과를 반환하면서 종료된다. 반환 된 값은 대입 연산자에 의해서 변수 value에 저장된다. 메서드의 결과를 저장하기 위한 변 수 value역시 반환값과 같은 타입이거나 반환값이 자동 형변환되어 저장될 수 있는 타입 이어야 한다.

- 예제 6-6/MyMathEx.java

```txt
class MyMathEx {
    public static void main(String args[]) {
        MyMath mm = new MyMath();
        long result1 = mm.add(5L, 3L);
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
        long result2 = mm.subtract(5L, 3L);
        long result3 = mm.multiply(5L, 3L);
        double result4 = mm.divide(5L, 3L);
        System.out.println("add(5L, 3L) = " + result1);
        System.out.println("subtract(5L, 3L) = " + result2);
        System.out.println("multiply(5L, 3L) = " + result3);
        System.out.println("divide(5L, 3L) = " + result4);
    }
}
class MyMath {
    long add(long a, long b) {
        long result = a+b;
        return result;
    // return a + b; // 위의 두 주ᄅ으ᄅ 하ᄂ 주ᄅ로 가ᄂ다ᄂ히 하ᄅ 수 이ᄊ다.
    }
    long subtract(long a, long b) { return a - b; }
    long multiply(long a, long b) { return a * b; }
    double divide(double a, double b) {
        return a / b;
    }
}
```

사칙연산을 위한 4개의 메서드가 정의되어 있는 MyMath클래스를 이용한 예제이다. 이예제를 통해서 클래스에 선언된 메서드를 어떻게 호출하는지 알 수 있을 것이다.<br>여기서 눈여겨봐야 할 곳은 divide(double a, double b)를 호출하는 부분이다. divide메서드에 선언된 매개변수 타입은 double형인데, 이와 다른 long형의 값인 5L과 3L을 사용해서 호출하는 것이 가능하다.

```txt
double result4 = mm.divide( 5L , 3L ); // double대시ᄂ long으ᄅ 지저ᄋ
double divide(double a, double b) { // long0| double로 자도ᄋ 혀ᄋ벼ᄂ화ᄂ
    return a / b; // return 5.0 / 3.0;
    }
```

호출 시에 입력된 값은 메서드의 매개변수에 대입되는 값이므로, long형의 값을 double형변수에 저장하는 것과 같아서 ’double a = 5L;’을 수행 했을 때와 같이 long형의 값인 5L은 double형 값인 5.0으로 자동 형변환되어 divide의 매개변수 a에 저장된다.<br>그래서, divide메서드에 두 개의 정수값(5L, 3L)을 입력하여 호출하였음에도 불구하고연산결과가 double형의 값이 된다.

이와 마찬가지로 add(long a, long b)메서드에도 매개변수 a, b에 int형의 값을 넣어add(5,3)과 같이 호출하는 것이 가능하다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 3.6 return문

return문은 현재 실행중인 메서드를 종료하고 호출한 메서드로 되돌아간다. 지금까지 반 환값이 있을 때만 return문을 썼지만, 원래는 반환값의 유무에 관계없이 모든 메서드에는 적어도 하나의 return문이 있어야 한다. 그런데도 반환타입이 void인 경우, return문 없 이도 아무런 문제가 없었던 이유는 컴파일러가 메서드의 마지막에 ’return;’을 자동적으로 추가해주었기 때문이다.

```txt
    void printGugudan(int dan) {
        for(int i=1;i <= 9;i++) {
            System.out.printf("%d * %d = %d%n", dan, i, dan * i );
        }
// return; // 바ᄂ화ᄂ 타이ᄇ이 void이므로 새ᄋ랴ᄀ 가느ᄋ. 커ᄆ파이ᄅ러가 자도ᄋ 추가
    }
```

그러나 반환타입이 void가 아닌 경우, 즉 반환값이 있는 경우, 반드시 return문이 있어야 한다. return문이 없으면 컴파일 에러(error: missing return statement)가 발생한다.

```txt
int multiply(int x, int y) {
    int result = x * y;
    return result; // 바ᄂ화ᄂ타이ᄇ이 void가 아니므로 새ᄋ랴ᄀ 부ᄅ가
}
```

아래의 코드는 두 값 중에서 큰 값을 반환하는 메서드이다. 이 메서드의 리턴타입이 int이 고 int타입의 값을 반환하는 return문이 있지만, return문이 없다는 에러가 발생한다.<br>왜냐하면 if문 조건식의 결과에 따라 return문이 실행되지 않을 수도 있기 때문이다.

```txt
int max(int a, int b) {
    if(a > b)
        return a; // 에러. 조거ᄂ시ᄀ이 차ᄆ이ᄅ 때마ᄂ 시ᄅ해ᄋ되ᄂ다.
}
```

그래서 이런 경우 다음과 같이 if문의 else블럭에 return문을 추가해서, 항상 결과값이 반 환되도록 해야 한다. 이런 실수를 안할 것 같지만 코드가 길어지면 장담할 수 없다.

```txt
int max(int a, int b) {
    if(a > b)
        return a;
    else
        return b;
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>반환값(return value)<br>return문의 반환값으로 주로 변수가 오긴 하지만 항상 그런 것은 아니다. 아래 왼쪽의 코 드는 오른쪽과 같이 간략히 할 수 있는데, 오른 쪽의 코드는 return문의 반환값으로 ‘x+y’ 라는 식(式)이 적혀있다. 그렇다고 해서 식이 반환되는 것은 아니고, 이 식을 계산한 결과가 반환된다.

```txt
int add(int x, int y) {
    int result = x + y;
    return result;
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-297_77_123_641_948.jpg -->

```txt
    int add(int x, int y) {
        return x + y ;
}
```

I 참고 I 수학에서처럼, result의 값이 ’x+y’와 같으므로 result대신 ’x+y’를 쓸 수 있다고 생각하면 이해하기 쉽다.

예를 들어 매개변수 x와 y의 값이 각각 3과 5라면, ‘return x+y’,는 다음과 같은 계산과정을 거쳐서 반환값은 8 이 된다.

```txt
return x + y;
→ return 3 + 5;
→ return 8;
```

아래의 diff메서드는 두 개의 정수를 받아서 그 차이를 절대값으로 반환한다. 오른쪽 코드 역시 메서드를 반환하는 것이 아니라 메서드 abs를 호출하고, 그 결과를 받아서 반환한 다. 메서드 abs의 반환타입이 메서드 diff의 반환타입과 일치하기 때문에 가능하다는 것에 주의하자.

```txt
int diff(int x, int y) {
    int result = abs(x-y);
    return result;
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-297_180_678_1558_948.jpg -->

간단한 메서드의 경우 if문 대신 조건 연산자를 사용하기도 한다. 메서드 abs는 입력받은정수의 부호를 판단해서 음수일 경우 부호 연산자(-)를 사용해서 양수로 반환한다.

```txt
int abs(int x) {
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-297_35_122_2064_948.jpg -->

```txt
int abs(int x) {
    return x >= 0 ? x : -x;
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 매개변수의 유효성 검사

메서드의 구현부\{\}를 작성할 때, 제일 먼저 해야 하는 일이 매개변수의 값이 적절한 것인 지 확인하는 것이다. 메서드를 작성하는 사람은 ’호출하는 쪽에서 알아서 값을 넘겨주겠 지.’라고 생각하면 안된다. 타입만 맞으면 어떤 값도 매개변수를 통해 넘어올 수 있기 때 문에, 가능한 모든 경우의 수에 대해 고민하고 그에 대비한 코드를 작성해야 한다.

아래에 정의된 메서드 divide는 매개변수 x를 y로 나눈 결과를 실수(float타입)로 반환하 는데, 0 으로 나누는 것은 금지되어 있기 때문에 계산 전에 y의 값이 0인지 확인해야 한다.<br>만일 y의 값이 0이면, 나누기를 할 수 없으므로 return문으로 작업을 중단하고 메서드 를 빠져나와야 한다. 그렇지 않으면, 나누기를 하는 문장에서 에러가 발생하여 프로그램 이 비정상적으로 종료된다.

```txt
float divide(int x, int y) {
    // 자ᄀ어ᄇ으ᄅ 하기 저ᄂ에 나누느ᄂ 수 (y) 가 0이ᄂ지 화ᄀ이ᄂ하ᄂ다.
    if(y==0) {
        System.out.println("0으로 나누ᄅ 수 어ᄡ스ᄇ니다.");
        return 0; // 매개벼ᄂ수가 유효하지 않으므로 메서드르ᄅ 조ᄋ료하ᄂ다.
    }
    return x / (float) y;
}
```

적절하지 않은 값이 매개변수를 통해 넘어온다면 매개변수의 값을 보정하던가, 보정하는 것이 불가능하다면 return문을 사용해서 작업을 중단하고 호출한 메서드로 되돌아가야 한다.<br>이 책의 많은 예제에서 코드를 단순화하기 위해서 유효성 검사를 생략한 경우가 많지만 여러분들이 메서드를 작성할 때는 매개변수의 유효성 검사하는 코드를 반드시 넣길 바란 다. 매개변수의 유효성 검사는 메서드의 작성에 있어서 간과하기 쉬운 중요한 부분이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

### 3.7 JVM의 메모리 구조

자바 프로그램이 실행되면, JVM은 시스템으로부터 프로그램을 수행하는데 필요한 메모 리를 할당받고 JVM은 이 메모리를 용도에 따라 여러 영역으로 나누어 관리한다.<br>그 중 3가지 주요 영역(method area, call stack, heap)에 대해서 알아보자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-299_902_719_592_650.jpg -->

- 그림6-5 JVM의 메모리 구조

I 참고 I cv는 클래스 변수, iv는 인스턴스 변수, Iv는 지역 변수를 뜻한다.

1. 메서드 영역(method area)
   - 프로그램 실행 중 어떤 클래스가 필요하면, JVM은 해당 클래스의 클래스파일(\*.class)을 읽 어서 분석하여 클래스에 대한 정보(클래스 데이터)를 이곳에 저장한다. 이 때, 그 클래스의 클래스 변수(class variable)도 이 영역에 함께 생성된다.
2. 힙(heap)
   - 인스턴스가 생성되는 공간. 프로그램 실행 중에 인스턴스는 모두 이곳에 생성된다. 즉, 인스턴스 변수(instance variable)가 생성되는 공간이다.
3. 호출 스택(call stack 또는 execution stack)
   - 호출 스택은 메서드의 작업에 필요한 메모리 공간을 제공한다. 메서드가 호출되면, 호출스택 에 호출된 메서드를 위한 메모리가 할당되며, 이 메모리는 메서드가 작업을 수행하는 동안 지 역 변수(매개변수 포함)와 연산의 결과를 저장하는데 사용된다. 그리고 메서드가 종료되면 할당되었던 메모리 공간은 자동으로 반환된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

메서드가 호출되면 호출 스택에 메서드를 위한 작업 공간이 마련된다. 이 작업 공간은 메 서드 마다 서로 구별되며 지역 변수가 저장된다.

처음 호출된 메서드를 위한 작업 공간이 호출스택의 맨 밑에 마련되고, 메서드가 수행 중에 다른 메서드를 호출하면, 자신의 바로 위에 호출된 메서드를 위한 공간이 마련된다.

이 때 호출한 메서드(caller)는 수행을 멈추고, 호출된 메서드(callee)가 수행되기 시작한 다. 호출된 메서드가 수행을 마치면, 이 메서드가 사용하던 메모리공간이 호출 스택에서 제거되며, 멈추었던 메서드(caller)는 다시 수행을 계속하게 된다.<br>호출스택의 제일 상위에 위치하는 메서드가 현재 실행 중인 메서드이며, 나머지는 대기 상태에 있게 된다.<br>따라서, 호출스택을 조사해 보면 메서드 간의 호출관계와 현재 수행중인 메서드가 어느 것인지 알 수 있다. 호출스택의 특징을 정리해보면 다음과 같다.

- 메서드가 호출되면 수행에 필요한 메모리를 스택에 할당받는다.
- 메서드가 수행을 마치고나면 할당받은 메모리가 스택에서 자동 제거된다.
- 호출 스택의 제일 위에 있는 메서드만 현재 실행 중인 메서드이다. (나머지는 대기중)
- 아래에 있는 메서드가 바로 위의 메서드를 호출한 메서드이다.

반환타입(return type)이 있는 메서드는 종료되면서 결과값을 자신을 호출한 메서드 (caller)에게 반환한다. 대기상태에 있던 호출한 메서드(caller)는 넘겨받은 반환값으로 수 행을 계속 진행하게 된다.

- 예제 6-7/CallStackEx.java

```txt
class CallStackEx {
    public static void main(String[] args) {
        firstMethod(); // static메서드느ᄂ 개ᄀ체 새ᄋ서ᄋ어ᄡ이 호추ᄅ 가느ᄋ
    }
    static void firstMethod() {
        secondMethod();
    }
    static void secondMethod() {
        System.out.println("secondMethod()");
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-300_113_315_1876_1135.jpg -->

main()이 firstMethod()를 호출하고 firstMethod()는 secondMethod()를 호출한다. 객 체를 생성하지 않고도 메서드를 호출할 수 있으려면, 메서드 앞에 ’static’을 붙여야 한다. 잠시 후에 자세히 설명할 것이므로 지금은 이정도만 알아두자.

위의 예제를 실행시켰을 때, 프로그램이 수행되는 동안 호출스택의 변화를 그림과 함께 살펴보도록 하자.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-301_575_1255_296_380.jpg -->

- 그림6-6 예제6-7의 실행 시 호출스택의 변화

1. ~(2) 위의 예제를 실행시키면, JVM에 의해 main메서드가 호출되면서 프로그램이 시작. 이 때, 호출 스택 에는 main메서드를 위한 메모리 공간이 할당되고 main메서드의 코드가 수행되기 시작
2. main메서드가 firstMethod( )를 호출. 아직 main메서드가 끝난 것은 아니므로 main메서드는 대기 중 firstMethod()가 끝나야 main메서드의 나머지 문장들을 수행할 수 있기 때문.
3. firstMethod()가 secondMethod()를 호출. firstMethod()는 secondMethod()가 끝날 때까지 대기 중.
4. secondMethod( )에서 println( )을 호출했다. println( )에 의해 ’secondMethod( )’가 화면에 출력된다.
5. println( )의 수행이 완료되어 호출 스택에서 사라지고 자신을 호출한 secondMethod( )로 되돌아간다. 대기 중이던 secondMethod( )는 println( )을 호출한 이후부터 수행을 재개한다.
6. secondMethod( )에 더 이상 수행할 코드가 없으므로 종료. 자신을 호출한 firstMethod( )로 돌아간다.
7. firstMethod()도 더 이상 수행할 코드가 없으므로 종료. 자신을 호출한 main메서드로 돌아간다.
8. main메서드도 더 이상 수행할 코드가 없으므로 종료. 호출 스택은 완전히 비워지고 프로그램은 종료.

```txt
- 예제 6-8/CallStackEx2.java
class CallStackEx2 {
    public static void main(String[] args) {
        System.out.println("main(String[] args) 이 시자ᄀ되어ᄊ으ᄆ.");
        firstMethod();
        System.out.println("main(String[] args) 이끄ᄐ나ᄊ으ᄆ.");
    }
    static void firstMethod() {
        System.out.println("firstMethod() 이 시자ᄀ되어ᄊ으ᄆ.");
        secondMethod();
        System.out.println("firstMethod() 이 끄ᄐ나ᄊ으ᄆ.");
    }
    static void secondMethod() {
        System.out.println("secondMethod() 이 시자ᄀ되어ᄊ으ᄆ.");
        System.out.println("secondMethod() 이 끄ᄐ나ᄊ으ᄆ.");
    }
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 실행결과

```txt
main(String[] args) 이 시자ᄀ되어ᄊ으ᄆ.
firstMethod() 이 시자ᄀ되어ᄊ으ᄆ.
secondMethod() 이 시자ᄀ되어ᄊ으ᄆ.
secondMethod() 이 끄ᄐ나ᄊ으ᄆ.
firstMethod() 이 끄ᄐ나ᄊ으ᄆ.
main(String[] args) 이 끄ᄐ나ᄊ으ᄆ.
```

예제6-7에 출력문을 추가해서 각 메서드의 시작과 종료의 순서를 확인하는 예제이다. 그 림6-6과 함께 다시 한 번 호출과정을 확인해보자.

## 3.8 기본형 매개변수와 참조형 매개변수

자바에서는 메서드를 호출할 때 매개변수로 지정한 값을 메서드의 매개변수에 복사해서 넘겨준다. 매개변수의 타입이 기본형(primitive type)일 때는 기본형 값이 복사되겠지만, 참조형(reference type)이면 인스턴스의 주소가 복사된다.<br>메서드의 매개변수를 기본형으로 선언하면 단순히 저장된 값만 얻지만, 참조형으로 선 언하면 값이 저장된 곳의 주소를 알 수 있기 때문에 값을 읽어 오는 것은 물론 값을 변경 하는 것도 가능하다.

- 예제 6-9/PrimitiveParamEx.java

```txt
class Data { int x; }
class PrimitiveParamEx {
    public static void main(String[] args) {
        Data d = new Data();
        d.x = 10;
        System.out.println("main() : x = " + d.x);
        change(d.x);
        System.out.println("After change(d.x)");
        System.out.println("main() : x = " + d.x);
    }
    static void change(int x) { // 기보ᄂ혀ᄋ 매개벼ᄂ수
        x = 1000;
        System.out.println("change() : x = " + x);
    }
}
```

- 실행결과

```txt
main() : x = 10
change() : x = 1000
After change(d.x)
main() : x = 10
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>change메서드에서 main메서드로부터 넘겨받은 d.x의 값을 1000으로 변경했는데도 main메서드에서는 d.x의 값이 그대로이다. 왜 이런 결과가 나오는지 아래의 그림으로 확인해 보자.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-303_360_411_496_369.jpg -->

1. 

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-303_360_408_496_809.jpg -->

1. 

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-303_360_408_496_1248.jpg -->

1. 
2. change메서드가 호출되면서 ’d.x’가 change메서드의 매개변수 x에 복사됨
3. change메서드에서 $x$ 의 값을 1000 으로 변경
4. change메서드가 종료되면서 매개변수 $x$ 는 스택에서 제거됨

’d.x’의 값이 변경된 것이 아니라, change메서드의 매개변수 x의 값이 변경된 것이다. 즉, 원본이 아닌 복사본이 변경된 것이라 원본에는 아무런 영향을 미치지 못한다. 이처럼 기 본형 매개변수는 변수의 값을 읽을 수 있지만 변경할 수는 없다.

```txt
- 예제 6-10/ReferenceParamEx.java
class Data2 { int x; }
class ReferenceParamEx {
    public static void main(String[] args) {
        Data2 d = new Data2();
        d.x = 10;
        System.out.println("main() : x = " + d.x);
        change(d);
        System.out.println("After change(d)");
        System.out.println("main() : x = " + d.x);
    }
    static void change(Data2 d) { // 차ᄆ조혀ᄋ 매개벼ᄂ수
        d.x = 1000;
        System.out.println("change() : x = " + d.x);
    }
}
```

I 플래시동영상 I ReferenceParam.exe를 보면 예제6-10의 실행과정을 자세히 볼 수 있다.<br>이전 예제와 달리 change메서드를 호출한 후에 d.x의 값이 변경되었다. change메서드의 매개변수가 참조형이므로 값이 아니라 ’값이 저장된 주소’를 change메서드에게 넘겨주었 기 때문에 값을 읽어오는 것뿐만 아니라 변경하는 것도 가능하다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-304_427_1293_285_189.jpg -->

1. change메서드가 호출되면서 참조 변수 d의 값(주소)이 매개변수 d에 복사됨. 이제 매개변수 d에 저장된 주소값으로 x에 접근이 가능
2. change메서드에서 매개변수 d로 x 의 값을 1000으로 변경
3. change메서드가 종료되면서 매개변수 d는 스택에서 제거됨

이전 예제와 달리, change메서드의 매개변수를 참조형으로 선언했기 때문에, x 의 값이 아닌 주소가 매개변수 d에 복사되었다. 이제 main메서드의 참조변수 d와 change메서드 의 참조변수 d는 같은 객체를 가리키게 된다. 그래서 매개변수 d로 x의 값을 읽는 것과 변 경하는 것이 모두 가능한 것이다. 이 두 예제의 차이를 이해하는 것은 매우 중요하다.

```txt
class ReferenceParamEx2 {
    public static void main(String[] args)
    {
        int[] x = {10}; // 크기가 1이ᄂ 배여ᄅ. x[0] = 10;
        System.out.println("main() : x = " + x[0]);
        change(x);
        System.out.println("After change(x)");
        System.out.println("main() : x = " + x[0]);
    }
    static void change(int[] x) { // 차ᄆ조혀ᄋ 매개벼ᄂ수
        x[0] = 1000;
        System.out.println("change() : x = " + x[0]);
    }
}
```

- 예제 6-11/ReferenceParamEx2.java
  <!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-304_219_357_1737_1092.jpg -->

이전의 참조형 매개변수 예제를 Data2클래스의 인스턴스 대신 길이가 1인 배열 x를 사용 하도록 변경한 것이다. 배열도 객체와 같이 참조변수를 통해 데이터가 저장된 공간에 접 근한다는 것을 이미 배웠다. 이전 예제의 Data2클래스 타입의 참조변수 d와 같이 변수 x 도 int배열 타입의 참조변수이기 때문에 같은 결과를 얻는다.<br>임시적으로 간단히 처리할 때는 별도의 클래스를 선언하는 것보다 이처럼 배열을 이용 하는 것도 좋은 방법이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-12/ReferenceParamEx3.java

```txt
class ReferenceParamEx3 {
    public static void main(String[] args) {
        int[] arr = new int[] {3,2,1,6,5,4};
        printArr(arr); // 배여ᄅ의 모드ᄂ 요소르ᄅ 추ᄅ려ᄀ
        sortArr(arr); // 배여ᄅ으ᄅ 저여ᄅ
        printArr(arr); // 저ᄋ려ᄅ후 겨ᄅ과르ᄅ 추ᄅ려ᄀ
        System.out.println("sum="+sumArr(arr)); // 배여ᄅ의 초ᄋ하ᄇ으ᄅ 추ᄅ려ᄀ
    }
    static void printArr(int[] arr) { // 배여ᄅ의 모드ᄂ 요소르ᄅ 추ᄅ려ᄀ
        System.out.print("[");
        for(int i : arr) // 햐ᄋ사ᄋ되ᄂ for무ᄂ
            System.out.print(i+",");
        System.out.println("]");
    }
    static int sumArr(int[] arr) { // 배여ᄅ의 모드ᄂ 요소의 하ᄇ으ᄅ 바ᄂ화ᄂ
        int sum = 0;
        for(int i=0;i<arr.length;i++)
            sum += arr[i];
        return sum;
    }
    static void sortArr(int[] arr) { // 배여ᄅ으ᄅ 오르ᄆ차수ᄂ으로 저ᄋ려ᄅ
        for(int i=0;i<arr.length-1;i++)
            for(int j=0;j<arr.length-1-i;j++)
                if(arr[j] > arr[j+1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
    } // sortArr(int[] arr)
}
```

```txt
[3,2,1,6,5,4,]
[1,2,3,4,5,6,]
sum=21
```

메서드로 배열을 다루는 여러 가지 방법을 보여주는 예제이다. 매개변수의 타입이 배열이니까, 참조형 매개변수이다. 그래서 sortArr메서드에서 정렬한 것이 원래의 배열에 영향을 미친다. 그 외에는 따로 설명하지 않아도 충분히 이해가 될 것이다.

- 예제 6-13/ReturnEx.java

```txt
class ReturnEx {
    public static void main(String[] args) {
        ReturnEx r = new ReturnEx();
        int result = r.add(3,5);
        System.out.println(result);
        int[] result2 = {0}; // 배여ᄅ으ᄅ 새ᄋ서ᄋ하고 result2[0]의 가ᄡ으ᄅ 0으로 초기화
        r.add(3,5,result2); // 배여ᄅ으ᄅ add메서드의 매개벼ᄂ수로 저ᄂ다ᄅ
        System.out.println(result2[0]);
    }
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    int add(int a, int b) {
        return a + b;
    }
    void add(int a, int b, int[] result) {
        result[0] = a + b; // 매개벼ᄂ수로 너ᄆ겨바ᄃ으ᄂ 배여ᄅ에 여ᄂ사ᄂ겨ᄅ과르ᄅ 저자ᄋ
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-306_149_194_439_1256.jpg -->

이 예제는 반환값이 있는 메서드를 반환값이 없는 메서드로 바꾸는 방법을 보여준다. 앞서 배운 참조형 매개변수를 활용하면 반환값이 없어도 메서드의 실행결과를 얻어 올 수있다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-306_158_1218_848_224.jpg -->

메서드는 단 하나의 값만을 반환할 수 있지만 이것을 응용하면 여러 개의 값을 반환받을수 있다.

## 3.9 참조형 반환타입

매개변수뿐만 아니라 반환타입도 참조형이 가능하다. 반환타입이 참조형이라는 것은 반환하는 값의 타입이 참조형이라는 애긴데, 모든 참조형 타입의 값은 ’객체의 주소’이므로그저 정수값이 반환되는 것일 뿐 특별할 것이 없다. 일단 예제부터 먼저 살펴보자.

```txt
- 예제 6-14/ReferenceReturnEx.java
class Data3 { int x; }
class ReferenceReturnEx {
    public static void main(String[] args) {
        Data3 d = new Data3();
        d.x = 10;
        Data3 d2 = copy(d);
        System.out.println("d.x ="+d.x);
        System.out.println("d2.x="+d2.x);
    }
    static Data3 copy(Data3 d) { // 차ᄆ조혀ᄋ 바ᄂ화ᄂ타이ᄇ. 개ᄀ체의 주소(저ᄋ수) 르ᄅ 바ᄂ화ᄂ
        Data3 tmp = new Data3();
        tmp.x = d.x;
        return tmp;
    }
}
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-306_147_190_2067_1260.jpg -->

copy메서드는 새로운 객체를 생성한 후에, 매개변수로 넘겨받은 객체에 저장된 값을 복사해서 반환한다. 반환하려는 값이 Data3객체의 주소이므로 반환 타입이 ’Data3’이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시

[seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
static Data3 copy(Data d) {
    Data3 tmp = new Data3(); // 새로우ᄂ 개ᄀ체 tmp르ᄅ 새ᄋ서ᄋ
    tmp.x = d.x; // d.x의 가ᄡ으ᄅ tmp.x에 보ᄀ사
    return tmp; // 보ᄀ사하ᄂ 개ᄀ체의 주소르ᄅ 바ᄂ화ᄂ
}
```

이 메서드의 반환타입이 ’Data3’이므로, 호출결과를 저장하는 변수의 타입 역시 ’Data3’타입의 참조변수이어야 한다.

```txt
Data3 d2 = copy(d); // static Data3 copy(Data d)
```

copy메서드 내에서 생성한 객체를 main메서드에서 사용할 수 있으려면, 이렇게 새로운객체의 주소를 반환해야 한다. 그렇지 않으면, copy메서드가 종료되면서 새로운 객체의참조가 사라지기 때문에 더 이상 이 객체를 사용할 방법이 없다.<br>copy메서드가 호출된 직후부터 종료까지의 과정을 단계별로 살펴보면 다음과 같다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-307_352_530_1046_430.jpg -->

1. copy(d);

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-307_354_530_1045_1059.jpg -->

1. tmp.x = d.x;

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-307_353_530_1499_431.jpg -->

1. return tmp;

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-307_352_529_1500_1059.jpg -->

1. 
2. copy메서드를 호출하면서 참조변수 d의 값이 매개변수 d에 복사된다.
3. 새로운 객체를 생성한 다음, d.x에 저장된 값을 tmp.x에 복사한다.
4. copy메서드가 종료되면서 반환한 tmp의 값은 참조변수 d2에 저장된다.
5. copy메서드가 종료되어 tmp가 사라졌지만, d2로 새로운 객체를 다룰 수 있다.

반환타입이 ’참조형’이라는 것은<br>메서드가 ’객체의 주소’를 반환한다는 것을 의미한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

### 3.10 재귀 호출(recursive call)

메서드의 내부에서 메서드 자신을 다시 호출하는 것을 ’재귀 호출(recursive call)’이라 하고, 재귀 호출을 하는 메서드를 ’재귀 메서드’라 한다.

```txt
void method() {
    method(); // 재귀 호추ᄅ. 메서드 자시ᄂ으ᄅ 호추ᄅ하ᄂ다.
}
```

어떻게 메서드가 자기자신을 호출할 수 있는지 의아하겠지만, 메서드 입장에서는 자기 자신을 호출하는 것과 다른 메서드를 호출하는 것의 차이가 없다. ’메서드 호출’이라는 것이그저 특정 위치에 저장되어 있는 명령들을 수행하는 것일 뿐이기 때문이다.<br>호출된 메서드는 ’값에 의한 호출(call by value)’을 통해, 원래의 값이 아닌 복사된 값으로 작업하기 때문에 호출한 메서드와 관계없이 독립적인 작업수행이 가능하다.

그런데 위의 코드처럼 오로지 재귀 호출뿐이면, 무한히 자기 자신을 호출하기 때문에 무한반복에 빠지게 된다. 무한반복문이 조건문과 함께 사용되어야하는 것처럼, 재귀 호출도조건문이 필연적으로 따라다닌다.

```txt
void method(int n) {
    if(n = = 0)
        return; // n의 가ᄡ이 0이ᄅ 때, 메서드르ᄅ 조ᄋ료하ᄂ다.
    System.out.println(n);
    method(--n); // 재귀 호추ᄅ. method(int n) 으ᄅ 호추ᄅ
}
```

이 코드는 매개변수 n을 1씩 감소시켜가면서 재귀 호출을 하다가 n의 값이 0이 되면 재귀호출을 중단하게 된다. 재귀호출은 반복문과 유사한 점이 많으며, 대부분의 재귀 호출은반복문으로 작성하는 것이 가능하다. 위의 코드를 반복문으로 작성하면 다음의 오른쪽 코드와 같다.

```txt
void method(int n) {
    if(n==0) return;
    System.out.println(n);
    method(--n); // 재귀호추ᄅ
}
```

⟶

```txt
void method(int n) {
    while(n!=0) {
        System.out.println(n--);
    }
}
```

반복문은 그저 같은 문장을 반복해서 수행하는 것이지만, 메서드를 호출하는 것은 반복문보다 몇 가지 과정, 예를 들면 매개변수 복사와 종료 후 복귀할 주소저장 등, 이 추가로 필요하기 때문에 반복문보다 재귀 호출의 수행시간이 더 오래 걸린다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>그렇다면 ‘왜? 굳이 반복문 대신 재귀 호출을 사용할까’. 그 이유는 바로 재귀 호출이 주는 간결함 때문이다. 몇 겹의 반복문과 조건문으로 복잡하게 작성된 코드가 재귀 호출로 작 성하면 보다 단순한 구조로 바뀔 수도 있다. 아무리 효율적이라도 알아보기 힘들게 작성 하는 것보다 다소 비효율적이어도 알아보기 쉽게 작성하는 것이 논리적 오류가 발생할 확 률도 줄어들고 나중에 수정하기도 좋다.

어떤 작업을 반복적으로 처리해야한다면, 먼저 반복문으로 작성해보고 너무 복잡하면 재귀 호출로 간단히 할 수 없는지 고민해볼 필요가 있다. 재귀 호출은 비효율적이므로 재 귀 호출에 드는 비용보다 재귀 호출의 간결함이 주는 이득이 충분히 큰 경우에만 사용해 야 한다는 것도 잊지 말자.

대표적인 재귀 호출의 예는 팩토리얼(factorial)을 구하는 것이다. 팩토리얼은 한 숫자가 1 이 될 때까지 1씩 감소시켜가면서 계속해서 곱해 나가는 것인데, n!(n은 양의 정수)과 같 이 표현한다. 예를 들면, ’ $5!=5 * 4 * 3 * 2 * 1=120$ ’이다.<br>팩토리얼을 수학적으로 표현하면 다음과 같다.

```txt
\(\mathrm{f}(\mathrm{n})=\mathrm{n} * \mathrm{f}(\mathrm{n}-1)\), 단 \(\mathrm{f}(1)=1\)
```

다음 예제는 위의 함수를 자바로 구현한 것이다.

- 예제 6-15/FactorialEx.java

```txt
class FactorialEx {
    public static void main(String args[]) {
        int result = factorial(4);
        System.out.println(result);
    }
    static int factorial(int n) {
        int result = 0;
        if ( n == 1)
            result = 1;
        else
            result = n * factorial(n-1); // 다시 메서드 자시ᄂ으ᄅ 호추ᄅ
        return result;
    }
}
```

I 플래시동영상 I /flash/RecursiveCall.exe를 보면 예제6-15의 실행과정을 자세히 볼 수 있다.

위 예제는 팩토리얼을 계산하는 메서드를 구현하고 테스트하는 것이다. factorial()이 static메서드이므로 인스턴스를 생성하지 않고 직접 호출할 수 있다. 그리고 main메서드 와 같은 클래스에 있기 때문에 static메서드를 호출할 때 클래스이름을 생략하는 것이 가 능하다. 그래서 ’FactorialEx.factorial(4)’대신 ’factorial(4)’와 같이 하였다.<br>예제6-15는 실행과정을 플래시 동영상으로 보여주기 위해 작성한 것이라 코드가 길어 졌는데, 좀 더 간단히 하면 다음과 같이 쓸 수 있다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    static int factorial(int n) {
        if(n==1) return 1;
        return n * factorial(n-1);
    }
```

이해하기 어려운 코드는 변수에 직접 값을 대입해보면 알기 쉬워진다. 만일 매개변수 n의값이 3이라면, n대신 3을 직접 대입해보자. 오른쪽의 코드처럼 된다.

```txt
int factorial(int n) {
    if(n==1) return 1;
    return n * factorial(n-1);
}
```

```txt
int factorial(int 3) {
    if(3==1) return 1;
    return 3 * factorial(3-1);
}
```

같은 방법으로 main메서드에서 factorial(1)을 호출했을 때의 실행과정을 살펴보자. 아래의 그림은 매개변수 n 대신 1을 대입한 것이다.

```txt
    int result = factorial(1);
```

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-310_292_732_1047_520.jpg -->

if문의 조건식이 참이 되어 1을 반환하기 때문에, 재귀 호출이 일어나기도 전에 factorial 메서드는 종료된다. 그리고 result에는 ’factorial(1)’의 반환값인 1이 저장된다. 위의 그림에서는 반환값이 바로 result에 저장되는 것처럼 되어 있지만, 정확히는 아래와 같이 반환값이 메서드의 호출을 대신한다.

```txt
    int result = factorial(1);
→ int result = 1;
```

이번엔 ’factorial(2)’를 호출했을 때의 실행과정도 살펴보자. 매개변수의 값이 1이 아니므로 조건식이 거짓이 되어 그 다음 문장인 ’return 2 \* factorial(1);’이 수행되고, 이 식을계산하는 과정에서 다시 factorial(1)이 호출된다.

1. factorial(2)를 호출하면서 매개변수 n에 2가 복사된다.
2. ’return 2 \* factorial(1);’을 계산하려면 factorial(1)을 호출한 결과가 필요하다.<br>그래서 factorial(1)이 호출되고 매개변수 n에 1이 복사된다.
3. if문의 조건식이 참이므로 1을 반환하면서 메서드는 종료된다. 그리고 factorial(1)을 호출한곳으로 되돌아간다.<br>(4)이제 factorial(1)의 결과값인 1을 얻었으므로, return문이 다음의 과정으로 계산된다.

```txt
    return 2 * factorial(1);
    → return 2 * 1;
    → return 2;
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
int result = factorial(2);
    int factorial(int(2) {
    if(2==1) return 1;
    return 2 * factorial(1)
}
    int factorial(int(1) {
        if(1==1) return 1;
        return 1 * factorial(0)
        }
```

factorial(2)는 종료되면서 결과값 2를 반환하고, 이 값은 변수 result에 저장된다.

```txt
    int result = factorial(2);
→ int result = 2;
```

이제 매개변수 n의 값이 커도 어떤 과정으로 계산되는지 이해할 수 있으리라 생각한다. 그런데 만일 factorial( )의 매개변수 n의 값이 0이면 어떻게 될까? 또는 100,000과 같이 큰 수이면 어떻게 될까? 예제를 변경해서 실행해보면 쉽게 알 수 있겠지만 그 전에 잠시 시간을 갖고 어떻게 될 것인지 예측해보자. 먼저 매개변수 n의 값이 0인 경우는 if문의 조 건식이 절대 참이 될 수 없기 때문에 계속해서 재귀호출만 일어날 뿐 메서드가 종료되지 않으므로 스택에 계속 데이터가 쌓여만 간다.

```txt
int factorial(int 0) {
    if(0==1) return 1;
    return 0 * factorial(-1);
}
        int factorial(int -1) {
            if \((-1==1)\) return 1;
            return -1 * factorial(-2);
        }
                int factorial(int -2) {
                    if \((-2==1)\) return 1;
                    return -2 * factorial(-3);
                }
                        ...
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

어느 시점에 이르러서는 결국 스택의 저장 한계를 넘게 되고, ’스택오버플로우 에러(Stack OverflowError)’가 발생한다. 매개변수 n의 값이 100,000과 같이 큰 경우에도 마찬가지 다.

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-312_511_354_406_1052.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-312_409_265_506_193.jpg -->

<!-- 이미지 미이전(노션 원본 참고): imagesaa164a53-808c-4dcc-91bd-3d7161d0e957-312_407_264_507_470.jpg -->

이처럼 우리가 메서드를 작성할 때, ’호출하는 사람이 당연히 알아서 적절한 값을 인자로 주겠지.’라는 막연한 믿음을 가지면 안 되고, 어떤 값이 들어와도 에러없이 처리되는 견고 한 코드를 작성해야 한다. 그래서 ’매개변수의 유효성 검사’가 중요한 것이다.

```txt
static int factorial(int n) {
    if(n <= 0 || n > 12) return -1; // 매개벼ᄂ수 n의 유효서ᄋ 거ᄆ사르ᄅ 추가
    if(n==1) return 1;
    return n * factorial(n-1);
}
```

매개변수 n의 상한값을 12 로 정한 이유는 13 !의 값이 factorial()의 반환타입인 int의 최 대값(약20억)보다 크기 때문이다. 만일 그 이상의 값을 구하고 싶으면 반환타입을 int보다 큰 long이나 BigInteger로 변경하면 된다.

I 참고 I BigInteger는 배열을 이용해서 무한히 큰 정수를 다룰 수 있게 해주는 클래스로 p.548에서 자세히 배운다.

참고로 재귀 메서드 factorial을 반복문으로 작성하면 다음과 같다.

```txt
int factorial(int n) {
    if(n==1) return 1;
    return n * factorial(n-1);
}
```

⟶

```txt
int factorial(int n) {
    int result = 1;
    while(n!=0)
        result *= n--;
    return result;
}
```

while문으로 작성한 오른쪽의 코드는 왼쪽의 재귀 호출과 달리 많은 수의 반복에도 ’스택 오버플로우 에러’와 같은 메모리 부족 문제를 겪지 않을 뿐만 아니라 속도도 빠르다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-16/FactorialEx2.java

```txt
class FactorialEx2 {
    static long factorial(int n) {
        if(n<=0 || n>20) return -1; // 매개벼ᄂ수의 유효서ᄋ거ᄆ사.
        if(n<=1) return 1;
            return n * factorial(n-1);
    }
    public static void main(String args[]) {
        int n = 21;
        long result = 0;
        for(int i = 1; i <= n; i++) {
                result = factorial(i);
                if(result==-1) {
                    System.out.printf ("유효하지 않으ᄂ 가ᄡ이ᄇ니다. (0<n<=20) : %d%n", n) ;
                    break;
                }
                System.out.printf ("%2d!=%20d%n", i, result) ;
        }
    } // main의끄ᄐ
}
```

- 실행결과<br>\| 1 != \| 1 \|<br>\| :— \| :— \|<br>\| $2!=$ \| 2 \|<br>\| 3 != \| 6 \|<br>\| 4 != \| 24 \|<br>\| $5!=$ \| 120 \|<br>\| 6!= \| 720 \|<br>\| 7!= \| 5040 \|<br>\| 8 != \| 40320 \|<br>\| 9!= \| 362880 \|<br>\| 10!= \| 3628800 \|<br>\| 11!= \| 39916800 \|<br>\| 12!= \| 479001600 \|<br>\| 13!= \| 6227020800 \|<br>\| 14!= \| 87178291200 \|<br>\| 15!= \| 1307674368000 \|<br>\| 16!= \| 20922789888000 \|<br>\| 17!= \| 355687428096000 \|<br>\| 18 != \| 6402373705728000 \|<br>\| 19!= \| 121645100408832000 \|<br>\| 20!= \| 2432902008176640000 \|<br>\| 유효하지 않은 값입니다. $(0<\mathrm{n}<=20): 21$ \| \|

이전 예제 6-15에 매개변수의 유효성을 검사하는 코드를 추가해서 factorial()의 매개변수 n이 음수이거나 20보다 크면 -1을 반환하도록 하였다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-17/MainEx.java

```txt
class MainEx {
    public static void main(String args[]) {
        main(null); // 재귀 호추ᄅ. 자기 자시ᄂ으ᄅ 다시 호추ᄅ
    }
}
```

- 실행결과

```txt
java.lang.StackOverflowError
    at MainEx.main(MainEx.java:3)
    at MainEx.main(MainEx.java:3)
    ...
    at MainEx.main(MainEx.java:3)
    at MainEx.main(MainEx.java:3)
```

main메서드 역시 자기 자신을 호출하는 것이 가능하며 아무런 조건도 없이 계속해서 자기 자신을 다시 호출하기 때문에 무한 호출에 빠지게 된다.<br>main메서드가 종료되지 않고 호출 스택에 계속해서 쌓이게 되므로 결국 호출 스택의 메모리 한계를 넘게 되고 StackOverflowError가 발생하여 프로그램은 비정상적으로 종료된다.

- 예제 6-18/PowerEx.java

```txt
class PowerEx {
    public static void main(String[] args) {
        int x = 2;
        int n = 5;
        long result = 0;
        for(int i=1; i<=n; i++) {
            result += power(x, i);
        }
        System.out.println(result);
    }
    static long power(int x, int n) {
        if(n==1) return x;
        return x * power(x, n-1);
    }
}
```

$\mathrm{x}^{1}$ 부터 $\mathrm{x}^{\mathrm{n}}$ 까지의 합을 구하는 예제이다. 재귀 호출로 $\mathrm{x}^{\mathrm{n}}$ 을 구하는 power()를 작성하였다.x는 2, n은 5로 계산했기 때문에 $2^{1}+2^{2}+2^{3}+2^{4}+2^{5}$ 의 결과인 62 가 출력되었다.<br>x의 n제곱을 계산하는 메서드는 다음과 같이 정의할 수 있는데, 이 메서드 역시 메서드의 정의에 자신을 포함하는 재귀 메서드이다.

$$
f(x, n)=x \text { * } f(x, n-1) \text {, 단 } f(x, 1)=x
$$

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>예를 들어 2 의 4 제곱을 구해보자. x 는 2 이고, n 은 4 이므로 각각을 메서드에 대입하면 다 음과 같이 된다.

$$
f(2,4)=2 * f(2,3)
$$

$\mathrm{f}(2,3)$ 은 ’ $2 * \mathrm{f}(2,2)$ ‘이므로, 위의 식에 $\mathrm{f}(2,3)$ 대신’ $2 * \mathrm{f}(2,2)$ ’를 대입하면 다음과 같다.

$$
\begin{aligned}
& f(2,4)=2 * f(2,3) \\
& f(2,4)=2 * 2 * f(2,2)
\end{aligned}
$$

같은 방식으로 반복해서 계산하면 다음과 같다. $f(2,1)$ 은 2 라는 것에 주의하자.

$$
\begin{aligned}
f(2,4) & =2 * f(2,3) \\
\rightarrow f(2,4) & =2 * 2 * f(2,2) \\
\rightarrow f(2,4) & =2 * 2 * 2 * f(2,1) \\
\rightarrow f(2,4) & =2 * 2 * 2 * 2
\end{aligned}
$$

이 메서드도 재귀 호출이 아닌 반복문으로 처리하는 것이 가능하다. 재귀 호출의 예를 보 여주기 위해 재귀 메서드로 작성한 것 뿐이다.

### 3.11 클래스 메서드와 인스턴스 메서드

변수에서 그랬던 것과 같이, 메서드 앞에 static이 붙어 있으면 클래스 메서드이고 붙어 있지 않으면 인스턴스 메서드이다.<br>클래스 메서드도 클래스 변수처럼, 객체를 생성하지 않고도 ’클래스이름. 메서드이름(매 개변수)’와 같은 식으로 호출이 가능하다. 반면에 인스턴스 메서드는 반드시 객체를 생성 해야만 호출할 수 있다. 그렇다면 클래스를 정의할 때, 어느 경우에 static을 사용해서 클 래스 메서드로 정의해야하는 것일까?<br>클래스는 ’데이터(변수)와 데이터에 관련된 메서드의 집합’이므로, 같은 클래스 내에 있 는 메서드와 멤버변수는 아주 밀접한 관계가 있다.

인스턴스 메서드는 인스턴스 변수와 관련된 작업을 하는, 즉 메서드의 작업을 수행하는 데 인스턴스 변수를 필요로 하는 메서드이다. 그런데 인스턴스 변수는 인스턴스(객체)를 생성해야만 만들어지므로 인스턴스 메서드 역시 인스턴스를 생성해야 호출할 수 있다.<br>반면에 메서드 중에서 인스턴스와 관계없는(인스턴스 변수나 인스턴스 메서드를 사용하 지 않는) 메서드를 클래스 메서드(static메서드)로 정의한다.

물론 인스턴스 변수를 사용하지 않는다고 해서 반드시 클래스 메서드로 정의해야하는 것은 아니지만 특별한 이유가 없는 한 클래스 메서드로 정의한다.

인스턴스 메서드 - 인스턴스(iv의 집합)가 필요한 메서드<br>클래스 메서드 - 인스턴스 (iv의 집합) 가 필요없는 메서드<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

1. 멤버변수 중 모든 인스턴스에 공통으로 사용하는 것에 static을 붙인다.
   - 인스턴스는 서로 독립적이기 때문에 각 인스턴스의 변수(iv)는 서로 다른 값을 유지한다. 그 러나 모든 인스턴스에서 같은 값이 유지되어야 하는 변수는 static을 붙여서 클래스 변수로 정 의한다.
2. 클래스 변수(static변수)는 인스턴스를 생성하지 않아도 사용할 수 있다.
   - static이 붙은 변수(클래스 변수, cv)는 클래스가 메모리에 올라갈 때 자동으로 생성되기 때 문이다.
3. 클래스 메서드(static메서드)는 인스턴스 변수를 사용할 수 없다.
   - 인스턴스 변수는 인스턴스가 반드시 존재해야만 사용할 수 있는데, 클래스 메서드(static이 붙은 메서드)는 인스턴스 생성 없이 호출가능하므로 클래스 메서드가 호출되었을 때 인스턴 스가 존재하지 않을 수도 있다. 그래서 클래스 메서드에서 인스턴스변수의 사용을 금지한다.<br>반면에 인스턴스 변수나 인스턴스 메서드는 static변수나 static메서드를 사용하는 것이 항상 가능하다. 인스턴스 변수가 존재한다는 것은 static변수가 이미 메모리에 존재한다는 것을 의 미하기 때문이다.
4. 메서드 내에서 인스턴스 변수를 사용하지 않는다면, static을 붙이는 것을 고려한다.
   - 메서드 내에서 인스턴스 변수가 필요하다면, static을 붙일 수 없다. 반대로 인스턴스 변수가 필요하지 않다면 static을 붙여서 성능을 높이자.<br>static을 안 붙인 메서드(인스턴스메서드)는 실행 시 호출되어야할 메서드를 찾는 과정이 추 가적으로 필요하기 때문에 시간이 더 걸린다.
   - 멤버 변수 중 모든 인스턴스에 공통된 값을 가져야 하는 것에 static을 붙이자.
   - 작성한 메서드 중에서 인스턴스 변수나 인스턴스 메서드를 사용하지 않는 메서드에 static을 붙일 것을 고려한다.<br>[7](about:blank#fn7)<br>## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
class MyMath2 {
    long a, b; // 이ᄂ스터ᄂ스 벼ᄂ수
    // 이ᄂ스터ᄂ스 벼ᄂ수 a, b마ᄂ으ᄅ 이요ᄋ해서 자ᄀ어ᄇ하므로 매개벼ᄂ수가 피ᄅ요어ᄡ다.
    long add() { return a + b; } // a, b느ᄂ 이ᄂ스터ᄂ스 벼ᄂ수
    long subtract() { return a - b; }
    long multiply() { return a * b; }
    double divide() { return a / b; }
    // 이ᄂ스터ᄂ스 벼ᄂ수와 과ᄂ계어ᄡ이 매개벼ᄂ수마ᄂ으로 자ᄀ어ᄇ이 가느ᄋ하다.
    static long add(long a, long b) { return a + b; } // a, b느ᄂ 지여ᄀ 벼ᄂ수
    static long subtract(long a, long b) { return a - b; }
    static long multiply(long a, long b) { return a * b; }
    static double divide(double a, double b) { return a / b; }
}
class MyMathEx2 {
    public static void main(String args[]) {
        // 크ᄅ래스 메서드 호추ᄅ. 이ᄂ스터ᄂ스 새ᄋ서ᄋ어ᄡ이 호추ᄅ 가느ᄋ
        System.out.println(MyMath2.add(200L, 100L));
        System.out.println(MyMath2.subtract(200L, 100L));
        System.out.println(MyMath2.multiply(200L, 100L));
        System.out.println(MyMath2.divide(200.0, 100.0));
        MyMath2 mm = new MyMath2(); // 이ᄂ스터ᄂ스르ᄅ 새ᄋ서ᄋ
        mm.a = 200L;
        mm.b = 100L;
        // 이ᄂ스터ᄂ스 메서드느ᄂ 개ᄀ체새ᄋ서ᄋ 후에마ᄂ 호추ᄅ이 가느ᄋ하ᄆ.
        System.out.println(mm.add());
        System.out.println(mm.subtract());
        System.out.println(mm.multiply());
        System.out.println(mm.divide());
    }
}
```

- 예제 6-19/MyMathEx2.java<br>\| 길행결과 \|<br>\| :— \|<br>\| 300 \|<br>\| 100 \|<br>\| 20000 \|<br>\| 2.0 \|<br>\| 300 \|<br>\| 100 \|<br>\| 20000 \|<br>\| 2.0 \|

인스턴스 메서드인 add( ), subtract( ), multiply( ), divide( )는 인스턴스 변수인 a와 b만으로 작업이 가능하기 때문에, 매개변수가 필요없어서 괄호()에 매개변수를 선언하지 않았다.<br>반면에 add(long a, long b), subtract(long a, long b) 등은 인스턴스 변수 없이 매개변수만으로 작업을 수행하기 때문에 static을 붙여서 클래스 메서드로 선언하였다.<br>그래서 MyMathEx2의 main메서드에서 보면, 클래스 메서드는 객체생성없이 바로 호출이 가능했고, 인스턴스 메서드는 MyMath2클래스의 인스턴스를 생성한 후에야 호출이가능했다.

이 예제를 통해서 어떤 경우 인스턴스 메서드로, 또는 클래스 메서드로 선언해야 하는지, 그리고 그 차이를 이해하는 것은 매우 중요하다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

### 3.12 클래스 멤버와 인스턴스 멤버간의 참조와 호출

같은 클래스의 멤버들은 별도의 인스턴스를 생성하지 않고도 서로 참조 또는 호출이 가능하다. 단, 클래스 멤버가 인스턴스 멤버를 참조 또는 호출하고자 하는 경우에는 인스턴스를 생성해야 한다.<br>그 이유는 인스턴스 멤버가 존재하는 시점에 클래스 멤버는 항상 존재하지만, 클래스 멤버가 존재하는 시점에 인스턴스 멤버가 존재하지 않을 수도 있기 때문이다.

I 참고 I 인스턴스 멤버란 인스턴스 변수와 인스턴스 메서드를 의미한다.

```txt
class TestClass {
    void instanceMethod() {} // 이ᄂ스터ᄂ스 메서드
    static void staticMethod() {} // static메서드
    void instanceMethod2() { // 이ᄂ스터ᄂ스 메서드
        instanceMethod(); // 다르ᄂ 이ᄂ스터ᄂ스 메서드르ᄅ 호추ᄅ하ᄂ다.
        staticMethod(); // static메서드르ᄅ 호추ᄅ하ᄂ다.
    }
    static void staticMethod2() {// static메서드
        instanceMethod(); // 에러. 이ᄂ스터ᄂ스 메서드르ᄅ 호추ᄅ하ᄅ 수 어ᄡ다.
        staticMethod(); // static메서드느ᄂ 호추ᄅ 하ᄅ 수 이ᄊ다.
    }
} // end of class
```

위의 코드는 같은 클래스 내의 인스턴스 메서드와 static메서드 간의 호출에 대해서 설명하고 있다. 같은 클래스 내의 메서드는 서로 객체의 생성이나 참조변수 없이 직접 호출이가능하지만 static메서드는 인스턴스 메서드를 호출할 수 없다.

```txt
class TestClass2 {
    int iv; // 이ᄂ스터ᄂ스 벼ᄂ수
    static int cv; // 크ᄅ래스 벼ᄂ수
    void instanceMethod() { // 이ᄂ스터ᄂ스 메서드
        System.out.println(iv); // 이ᄂ스터ᄂ스 벼ᄂ수르ᄅ 사요ᄋ하ᄅ 수 이ᄊ다.
        System.out.println(cv); // 크ᄅ래스 벼ᄂ수르ᄅ 사요ᄋ하ᄅ 수 이ᄊ다.
    }
    static void staticMethod() { // static메서드
        System.out.println(iv); // 에러. 이ᄂ스터ᄂ스 벼ᄂ수르ᄅ 사요ᄋ하ᄅ 수 어ᄡ다.
        System.out.println(cv); // 크ᄅ래스 벼ᄂ수느ᄂ 사요ᄋ하ᄅ 수 이ᄊ다.
    }
} // end of class
```

이번엔 변수와 메서드간의 호출에 대해서 살펴보자. 메서드간의 호출과 마찬가지로 인스턴스 메서드는 인스턴스 변수를 사용할 수 있지만, static메서드는 인스턴스 변수를 사용할 수 없다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-20/MemberCall.java

```txt
class MemberCall {
    int iv = 10;
    static int cv = 20;
    int iv2 = cv;
// static int cv2 = iv; // 에러. 크ᄅ래스 벼ᄂ수느ᄂ 이ᄂ스터ᄂ스 벼ᄂ수르ᄅ 사요ᄋ하ᄅ 수 어ᄡ으ᄆ.
    static int cv2 = new MemberCall().iv; // 이처러ᄆ 개ᄀ체르ᄅ 새ᄋ서ᄋ해야 사요ᄋ가느ᄋ.
    static void staticMethod1() {
        System.out.println(cv);
// System.out.println(iv); // 에러. 크ᄅ래스 메서드에서 이ᄂ스터ᄂ스 벼ᄂ수르ᄅ 사요ᄋ부ᄅ가.
        MemberCall c = new MemberCall();
        System.out.println(c.iv); // 개ᄀ체르ᄅ 새ᄋ서ᄋ하ᄂ 후에야 이ᄂ스터ᄂ스 벼ᄂ수의 차ᄆ조가느ᄋ.
}
    void instanceMethod1() {
        System.out.println(cv);
        System.out.println(iv); // 이ᄂ스터ᄂ스 메서드에서느ᄂ 이ᄂ스터ᄂ스 벼ᄂ수르ᄅ 바로 사요ᄋ가느ᄋ.
}
    static void staticMethod2() {
        staticMethod1();
// instanceMethod1(); // 에러. 크ᄅ래스 메서드에서느ᄂ 이ᄂ스터ᄂ스 메서드르ᄅ 호추ᄅ하ᄅ 수 어ᄡ으ᄆ.
        MemberCall c = new MemberCall();
        c.instanceMethod1(); // 이ᄂ스터ᄂ스르ᄅ 새ᄋ서ᄋ하ᄂ 후에야 호추ᄅ하ᄅ 수 이ᄊ으ᄆ.
    }
    void instanceMethod2() { // 이ᄂ스터ᄂ스 메서드에서느ᄂ 이ᄂ스터ᄂ스 메서드와 크ᄅ래스 메서드
        staticMethod1(); // 모두 이ᄂ스터ᄂ스 새ᄋ서ᄋ어ᄡ이 바로 호추ᄅ이 가느ᄋ하다.
        instanceMethod1();
    }
}
```

클래스 멤버(클래스 변수와 클래스 메서드)는 언제나 참조 또는 호출이 가능하기 때문에 인스턴스 멤버가 클래스 멤버를 사용하는 것은 아무런 문제가 안 된다. 클래스 멤버간의 참조 또는 호출 역시 아무런 문제가 없다.<br>그러나, 인스턴스 멤버(인스턴스 변수와 인스턴스 메서드)는 반드시 객체를 생성한 후에 만 참조 또는 호출이 가능하기 때문에 클래스 멤버가 인스턴스 멤버를 참조, 호출하기 위 해서는 객체를 생성하여야 한다.<br>하지만, 인스턴스 멤버간의 호출에는 아무런 문제가 없다. 하나의 인스턴스 멤버가 존재 한다는 것은 인스턴스가 이미 생성되어있다는 것을 의미하며, 즉 다른 인스턴스 멤버들도 모두 존재하기 때문이다.<br>실제로는 같은 클래스 내에서 클래스 멤버가 인스턴스 멤버를 참조 또는 호출해야 하는 경우는 드물다. 만일 그런 경우가 발생한다면, 인스턴스 메서드로 작성해야할 메서드를 클래스 메서드로 한 것은 아닌지 생각해봐야 한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com) ■ 알아두면 좋아요!

수학의 대입법처럼, c = new MemberCall()이므로 c.instanceMethod1();에서 c대신 new MemberCall()을 대입하여 사용할 수 있다.

```txt
MemberCall c = new MemberCall();
int result = c.instanceMethod1();
```

그래서 위의 두 줄을 다음과 같이 한 줄로 할 수 있다.

```txt
int result = new MemberCall().instanceMethod1();
```

대신 참조변수를 선언하지 않았기 때문에 생성된 MemeberCall인스턴스는 더 이상 사용할 수 없다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 4. 오버로딩(overloading)

## 4.1 오버로딩이란?

메서드도 변수와 마찬가지로 같은 클래스 내에서 서로 구별될 수 있어야 하므로 각기 다 른 이름을 가져야 한다. 그러나 자바에서는 한 클래스 내에 이미 같은 이름의 메서드가 있 어도 매개변수의 개수 또는 타입이 다르면, 같은 이름의 메서드를 여러 개 정의할 수 있 다.<br>이처럼 한 클래스 내에 같은 이름의 메서드를 여러 개 정의하는 것을 ‘메서드 오버로딩( method overloading)’ 또는 간단히 ‘오버로딩(overloading)’이라 한다.<br>오버로딩(overloading)의 사전적 의미는 ’과적하다.’ 즉, 많이 싣는 것을 뜻한다. 보통 하 나의 메서드 이름에 하나의 기능을 구현하는데, 하나의 메서드 이름으로 여러 기능을 구 현하기 때문에 붙여진 이름다. 앞으로 ’메서드 오버로딩’을 간단히 ’오버로딩’이라고 하자.

## 4.2 오버로딩의 조건

같은 이름의 메서드를 정의한다고 해서 무조건 오버로딩인 것은 아니다. 오버로딩이 성립 하기 위해서는 다음과 같은 조건을 만족해야 한다.

1. 메서드 이름이 같아야 한다.
2. 매개변수의 개수 또는 타입이 달라야 한다.
3. 반환타입은 상관없다.

비록 메서드의 이름이 같아도 매개변수가 다르면 서로 구별될 수 있기 때문에 오버로딩이 가능한 것이다. 위의 조건을 만족시키지 못하는 메서드는 중복 정의로 간주되어 컴파일 시에 에러가 발생한다. 그리고 오버로딩된 메서드들은 매개변수에 의해서만 구별될 수 있 으므로 반환 타입은 오버로딩을 구현하는데 아무런 영향을 주지 못한다는 것에 주의하자.

## 4.3 오버로딩의 예

오버로딩의 예로 가장 대표적인 것은 println메서드이다. 지금까지 println메서드에 괄호 안에 값만 지정해주면 화면에 출력하는데 아무런 어려움이 없었다.

사실은 println메서드를 호출할 때 매개변수로 지정하는 값의 타입에 따라서 호출되는 println메서드가 달라진다.<br>PrintStream클래스에는 어떤 종류의 매개변수를 지정해도 출력할 수 있도록 아래와 같 이 10개의 오버로딩된 println메서드가 정의되어 있다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
void println()
void println(boolean x)
void println(char x)
void println(char[] x)
void println(double x)
void println(float x)
void println(int x)
void println(long x)
void println(Object x)
void println(String x)
```

println메서드를 호출할 때 매개변수로 넘겨주는 값의 타입에 따라서 위의 오버로딩된 메 서드들 중의 하나가 선택되어 실행되는 것이다.<br>몇 가지 예를 들어 오버로딩에 대해 자세히 설명하고자 한다.

## \[보기 1\]

```txt
int add(int a, int b) { return a+b; }
int add(int x, int y) { return x+y; }
```

위의 두 메서드는 매개변수의 이름만 다를 뿐 매개변수의 타입이 같기 때문에 오버로딩이 성립하지 않는다. 매개변수의 이름이 다르면 메서드 내에서 사용되는 변수의 이름이 달라 질 뿐, 아무런 의미가 없다. 그래서 이 두 메서드는 완전히 동일한 것이다. 마치 수학에서 $' \mathrm{f}(\mathrm{x})=\mathrm{x}+1$ ‘과’ $\mathrm{f}(\mathrm{a})=\mathrm{a}+1$ ’이 같은 표현인 것과 같다.<br>컴파일하면, ’add(int,int) is already defined(이미 같은 메서드가 정의되었다).’라는 메 시지가 나타날 것이다.

## \[보기 2\]

```txt
int add(int a, int b) { return a+b; }
long add(int a, int b) { return (long) (a + b); }
```

이번 경우는 리턴타입만 다른 경우이다. 매개변수의 타입과 개수가 일치하기 때문에 $\operatorname{add}(3,3)$ 과 같이 호출하였을 때 어떤 메서드가 호출된 것인지 결정할 수 없기 때문에 오 버로딩으로 간주되지 않는다.<br>이 경우 역시 컴파일하면, ’add(int,int) is already defined(이미 같은 메서드가 정의되 었다).’라는 메시지가 나타날 것이다.

## \[보기 3\]

```txt
long add(int a, long b) { return a+b; }
long add(long a, int b) { return a+b; }
```

두 메서드 모두 int형과 long형 매개변수가 하나씩 선언되어 있지만, 서로 순서가 다른 경 우이다. 이 경우에는 호출 시 매개변수의 값에 의해 호출될 메서드가 구분될 수 있으므로 오버로딩으로 간주한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>이처럼 매개변수의 순서만을 다르게 하여 오버로딩을 구현하면, 사용자가 매개변수의 순 서를 외우지 않아도 되는 장점이 있지만, 오히려 단점이 될 수도 있기 때문에 주의해야 한 다.

예를 들어 add(3,3L)과 같이 호출하면 첫 번째 메서드가, $\mathrm{add}(3 \mathrm{~L}, 3)$ 과 같이 호출하면 두 번째 메서드가 호출된다. 단, add(3,3)과 같이 호출할 수 없다. 이렇게 호출할 경우, 두 메서드 중 어느 메서드를 호출한 것인지 알 수 없기 때문에 컴파일 에러가 발생한다.

\[보기 4\]

```txt
int add(int a, int b) { return a+b; }
long add(long a, long b) { return a+b; }
long add(int[] a) { // 배여ᄅ의 모드ᄂ 요소의 하ᄇ으ᄅ 바ᄂ화ᄂ
    long result = 0;
    for(int i=0; i < a.length; i++) {
        result += a[i];
    }
    return result;
}
```

위 메서드들은 모두 바르게 오버로딩되어 있다. 정의된 매개변수가 서로 다르긴 해도, 세 메서드 모두 매개변수로 넘겨받은 값을 더해서 그 결과를 돌려주는 일을 한다.<br>같은 일을 하지만 매개변수를 달리해야하는 경우에, 이와 같이 이름은 같고 매개변수를 다르게 하여 오버로딩을 구현한다.

## 4.4 오버로딩의 장점

지금까지 오버로딩의 정의와 성립하기 위한 조건을 알아보았다. 그렇다면 오버로딩을 구 현함으로써 얻는 이득은 무엇인가에 대해서 생각해보자.<br>만일 메서드도 변수처럼 단지 이름만으로 구별된다면, 한 클래스내의 모든 메서드들은 이름이 달라야한다. 그렇다면, 이전에 예로 들었던 10가지의 println메서드들은 각기 다 른 이름을 가져야 한다.<br>예를 들면, 아래와 같은 방식으로 메서드 이름이 변경되어야 할 것이다.

```txt
void println()
void printlnBoolean (boolean x)
void printlnChar(char x)
void printlnDouble(double x)
void printlnString(String x)
```

모두 근본적으로는 같은 기능을 하는 메서드지만, 서로 다른 이름을 가져야 하기 때문에 메서드를 작성하는 쪽은 이름을 짓기 어렵고, 메서드를 사용하는 쪽도 이름을 일일이 구 분해서 기억해야하기 때문에 서로 부담이 된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

하지만 오버로딩으로 여러 메서드들이 println이라는 하나의 이름으로 정의될 수 있다면, println이라는 이름만 기억하면 되므로 기억하기도 쉽고 이름도 짧게 할 수 있어서 오류의 가능성을 줄일 수 있다. 그리고 메서드의 이름만 보고도 ’이 메서드들은 이름이 같으니, 같은 기능을 하겠구나.’라고 쉽게 예측할 수 있게 된다.<br>또 하나의 장점은 메서드의 이름을 절약할 수 있다는 것이다. 하나의 이름으로 여러 개의 메서드를 정의할 수 있으니, 메서드의 이름을 짓는데 고민을 덜 수 있는 동시에 사용되었어야 할 메서드 이름을 다른 메서드의 이름으로 사용할 수 있기 때문이다.

- 예제 6-21/OverloadingEx.java

```txt
class OverloadingEx {
    public static void main(String args[]) {
        MyMath3 mm = new MyMath3();
        System.out.println("mm.add(3, 3) 겨ᄅ과:" + mm.add(3,3));
        System.out.println("mm.add(3L, 3) 겨ᄅ과: " + mm.add(3L,3));
        System.out.println("mm.add(3, 3L) 겨ᄅ과: " + mm.add(3,3L));
        System.out.println("mm.add(3L, 3L) 겨ᄅ과: " + mm.add(3L,3L));
        int[] a = {100, 200, 300};
        System.out.println("mm.add(a) 겨ᄅ과: " + mm.add(a));
    }
}
class MyMath3 {
    int add(int a, int b) {
        System.out.print("int add(int a, int b) - ");
        return a+b;
    }
    long add(int a, long b) {
        System.out.print("long add(int a, long b) - ");
        return a+b;
    }
    long add(long a, int b) {
        System.out.print("long add(long a, int b) - ");
        return a+b;
    }
    long add(long a, long b) {
        System.out.print("long add(long a, long b) - ");
        return a+b;
    }
    int add(int[] a) { // 배여ᄅ의 모드ᄂ 요소의 하ᄇ으ᄅ 겨ᄅ과로 도ᄅ려주ᄂ다.
        System.out.print("int add(int[] a) - ");
        int result = 0;
        for(int i=0; i < a.length;i++) {
            result += a[i];
        }
        return result;
    }
}
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 실행결과

```txt
int add(int a, int b) - mm.add(3, 3) 겨ᄅ과:6
long add(long a, int b) - mm.add(3L, 3) 겨ᄅ과: 6
long add(int a, long b) - mm.add(3, 3L) 겨ᄅ과: 6
long add(long a, long b) - mm.add(3L, 3L) 겨ᄅ과: 6
int add(int[] a) - mm.add(a) 겨ᄅ과: 600
```

I 참고 I add(3L, 3), add(3, 3L), add(3L, 3L)의 결과는 모두 6L이지만, System.out.println(6L);을 수행하면 6이 출력된다.리터럴의 접미사는 출력되지 않기 때문이다.

실행결과의 출력순서를 보고 의아할 수도 있다. 어떻게 add메서드가 println메서드보다먼저 출력될 수 있는가?

```txt
System.out.println("mm.add(3, 3) 겨ᄅ과:" + mm.add(3,3));
```

println메서드가 결과를 출력하려면, add 메서드의 결과가 먼저 계산되어야 하기 때문이 다. 간단히 위의 문장이 아래의 두 문장을 하나로 합친 것이라고 생각하면 이해가 쉬울 것이다.

```txt
int result = mm.add(3,3);
System.out.println("mm.add(3, 3) 겨ᄅ과:" + result);
```

## 4.5 가변인자(varargs)와 오버로딩

기존에는 메서드의 매개변수 개수가 고정적이었으나 JDK 5부터 동적으로 지정해 줄 수 있게 되었으며, 이 기능을 ’가변인자(variable arguments)’라고 한다.<br>가변인자는 ’타입… 변수명’과 같은 형식으로 선언하며, PrintStream클래스의 printf() 가 대표적인 예이다.

```txt
public PrintStream printf(String format, Object... args) { ... }
```

위와 같이 가변인자 외에도 매개변수가 더 있다면, 가변인자를 매개변수 중에서 제일 마지막에 선언해야 한다. 그렇지 않으면, 컴파일 에러가 발생한다. 가변인자인지 아닌지를 구별할 방법이 없기 때문에 허용하지 않는 것이다.

```txt
// 커ᄆ파이ᄅ 에러 바ᄅ새ᄋ - 가벼ᄂ이ᄂ자느ᄂ 하ᄋ사ᄋ 마지마ᄀ 매개벼ᄂ수이어야 하ᄂ다.
public PrintStream printf(Object... args, String format) {
    ⋯
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

만일 여러 문자열을 하나로 결합하여 반환하는 concatenate메서드를 작성한다면, 아래와같이 매개변수의 개수를 다르게 해서 여러 개의 메서드를 작성해야할 것이다.

```txt
String concatenate(String s1, String s2) { ... }
String concatenate(String s1, String s2, String s3) { ... }
String concatenate(String s1, String s2, String s3, String s4){ ... }
```

이럴 때, 가변인자를 사용하면 메서드 하나로 간단히 대체할 수 있다.

```txt
String concatenate(String... str) { ... }
```

이 메서드를 호출할 때는 아래와 같이 인자의 개수를 가변적으로 할 수 있다. 심지어는 인자가 아예 없어도 되고 배열도 인자가 될 수 있다.

```txt
System.out.println(concatenate()); // 이ᄂ자가 어ᄡ으ᄆ
System.out.println(concatenate("a")); // 이ᄂ자가 하나
System.out.println(concatenate("a", "b")); // 이ᄂ자가 두己
System.out.println(concatenate(new String[]{"A", "B"})); // 배여ᄅ도 가느ᄋ
```

이쯤에서 아마도 눈치를 챘을 것이다. 그렇다. 가변인자는 내부적으로 배열을 이용하는것이다. 그래서 가변인자가 선언된 메서드를 호출할 때마다 배열이 새로 생성된다. 가변인자가 편리하지만, 이런 비효율이 숨어있으므로 꼭 필요한 경우에만 가변인자를 사용하자.

그러면 가변인자는 아래와 같이 매개변수의 타입을 배열로 하는 것과 어떤 차이가 있는가?

```txt
String concatenate(String[] str) { ... }
String result = concatenate(new String[0]); // 이ᄂ자로 배여ᄅ으ᄅ 지저ᄋ
String result = concatenate(null); // 이ᄂ자로 null으ᄅ 지저ᄋ
String result = concatenate(); // 에러. 이ᄂ자가 피ᄅ요하ᄆ.
```

매개변수의 타입을 배열로 하면, 반드시 인자를 지정해 줘야하기 때문에, 위의 코드에서처럼 인자를 생략할 수 없다. 그래서 null이나 길이가 0인 배열을 인자로 지정해줘야 하는불편함이 있다.

I 참고 I C언어와 달리 자바에서는 길이가 0인 배열이 허용된다.

가변인자를 오버로딩할 때 한 가지 주의해야할 점이 있는데, 먼저 예제부터 살펴보자.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 예제 6-22/VarArgsEx.java

```txt
class VarArgsEx {
    public static void main(String[] args) {
        String[] strArr = { "100", "200", "300" };
        System.out.println(concatenate("", "100", "200", "300"));
        System.out.println(concatenate("-", strArr));
        System.out.println(concatenate(",", new String[]{"1", "2", "3"}));
        System.out.println("["+concatenate(",", new String[0])+"]");
        System.out.println("["+concatenate(",")+"]");
    }
    static String concatenate(String delim, String... args) {
        String result = "";
        for(String str : args) {
            result += str + delim;
        }
        return result;
    }
```

- 실행결과

```txt
    static String concatenate(String... args) {
        return concatenate("", args);
    }
*/
} // class
```

concatenate메서드는 매개변수로 입력된 문자열에 구분자를 사이에 포함시켜 결합해서반환한다. 가변인자로 매개변수를 선언했기 때문에 문자열을 개수의 제약없이 매개변수로 지정할 수 있다.

```txt
    String[] strArr = new String[]{"100", "200", "300"};
    System.out.println(concatenate("-", strArr));
```

위의 두 문장을 하나로 합치면 아래와 같이 쓸 수 있다.

```txt
System.out.println(concatenate("-", new String[]{"100", "200", "300"}));
```

그러나 아래와 같은 문장은 허용되지 않는다는 것에 주의하자.

```txt
System.out.println(concatenate("-", {"100", "200", "300"}));
```

위의 예제에서는 주석처리하였지만, concatenate메서드의 또 다른 오버로딩된 메서드가있다.

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    static String concatenate(String delim, String... args) {
        String result = "";
        for(String str : args) {
            result += str + delim;
        }
        return result;
    }
    static String concatenate(String... args) {
        return concatenate("",args);
    }
```

이 두 메서드는 별 문제가 없어 보이지만 위의 예제에서 주석을 풀고 컴파일을 하면 아래와 같이 컴파일에러가 발생한다.

```txt
VarArgsEx.java:5: error: reference to concatenate is ambiguous
    System.out.println(concatenate("-", "100", "200", "300"));
            ^
    both method concatenate(String,String...) in VarArgsEx and method
concatenate(String...) in VarArgsEx match
1 error
```

에러의 내용을 살펴보면 두 오버로딩된 메서드가 구분되지 않아서 발생하는 것임을 알 수있다. 가변인자를 선언한 메서드를 오버로딩하면, 메서드를 호출했을 때 이와 같이 구별되지 못하는 경우가 발생하기 쉽기 때문에 주의해야 한다. 가능하면 가변인자를 사용한메서드는 오버로딩하지 않는 것이 좋다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 5. 생성자(Constructor)

## 5.1 생성자란?

생성자는 인스턴스가 생성될 때 호출되는 ’인스턴스 초기화 메서드’이다. 따라서 인스턴스 변수의 초기화 작업에 주로 사용되며, 인스턴스 생성 시에 실행되어야 할 작업을 위해서 도 사용된다.

I 참고 I 인스턴스 초기화란, 인스턴스 변수들을 초기화하는 것을 뜻한다.

생성자도 일종의 메서드지만 리턴값이 없다는 점이 일반적인 메서드와 다르다. 그리고 생 성자 앞에 리턴값이 없음을 뜻하는 키워드 void를 붙이지 않는다. 생성자의 조건은 다음 과 같다.

1. 생성자의 이름은 클래스의 이름과 같아야 한다.
2. 생성자는 리턴 값이 없다.

I 참고 I 모든 생성자가 예외없이 리턴값이 없으므로 void를 붙이지 않는 것이다.

생성자는 다음과 같이 정의한다. 생성자도 오버로딩이 가능하므로 하나의 클래스에 여러 개의 생성자가 존재할 수 있다.

```txt
크ᄅ래스이르ᄆ (타이ᄇ 벼ᄂ수며ᄋ, 타이ᄇ 벼ᄂ수며ᄋ, ... ) {
    // 이ᄂ스터ᄂ스 새ᄋ서ᄋ 시 수해ᄋ되ᄅ 코드,
    // 주로 이ᄂ스터ᄂ스 벼ᄂ수의 초기화 코드르ᄅ 저ᄀ느ᄂ다.
}
class Card {
        Card() { // 매개벼ᄂ수가 어ᄡ느ᄂ 새ᄋ서ᄋ자.
            ...
        }
        Card(String k, int num) { // 매개벼ᄂ수가 이ᄊ느ᄂ 새ᄋ서ᄋ자.
            ...
        }
        ...
}
```

연산자 new가 인스턴스를 생성하는 것이지 생성자가 인스턴스를 생성하는 것이 아니다. 생성자라는 용어 때문에 오해하기 쉬운데, 생성자는 단순히 인스턴스변수들의 초기화에 사용되는 조금 특별한 메서드일 뿐이다. 생성자가 갖는 몇 가지 특징만 제외하면 일반적 인 메서드와 다르지 않다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Card클래스의 인스턴스를 생성하는 코드를 예로 들어, 수행되는 과정을 단계별로 나누어 보면 다음과 같다.

```txt
Card c = new Card();
```

1. 연산자 new에 의해서 메모리(heap)에 Card클래스의 인스턴스가 생성된다.
2. 생성자 $\operatorname{Card}()$ 가 호출되어 수행된다.
3. 생성된 Card인스턴스의 주소가 참조변수 c에 저장된다.

지금까지 인스턴스를 생성하기위해 사용해왔던 ‘클래스이름(’)이 바로 생성자였던 것이 다. 인스턴스를 생성할 때는 반드시 클래스 내에 정의된 생성자 중의 하나를 선택하여 지 정해주어야 한다.

## 5.2 기본 생성자(default constructor)

지금까지는 생성자를 모르고도 프로그래밍을 해 왔지만, 사실 모든 클래스에는 반드시 하 나 이상의 생성자가 정의되어 있어야 한다.<br>그러나 지금까지 클래스에 생성자를 정의하지 않고도 인스턴스를 생성할 수 있었던 이 유는 컴파일러가 제공하는 ‘기본 생성자(default constructor)’ 덕분이었다.

컴파일 할 때, 소스파일(\*.java)의 클래스에 생성자가 하나도 정의되지 않은 경우 컴파일 러는 자동적으로 아래와 같은 내용의 기본 생성자를 추가한다.

```txt
크ᄅ래스이르ᄆ() { }
Card() { }
```

컴파일러가 자동적으로 추가해주는 기본 생성자는 이와 같이 매개변수도 없고 아무런 내 용도 없는 아주 간단한 것이다.

그동안 우리는 인스턴스를 생성할 때 컴파일러가 제공한 기본 생성자를 사용해왔던 것 이다. 특별히 인스턴스 초기화 작업이 요구되어지지 않는다면 생성자를 정의하지 않고 컴 파일러가 제공하는 기본 생성자를 사용하는 것도 좋다.

I 참고 I 클래스의 ’접근 제어자(access modifier)’가 public인 경우에는 기본 생성자로 ’public 클래스이름( ) \{ \}’이 추가된다.

- 예제 6-23/ConstructorEx.java

```txt
class Data_1 {
    int value;
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
class Data_2 {
    int value;
    Data_2(int x) { // 매개벼ᄂ수가 이ᄊ느ᄂ 새ᄋ서ᄋ자.
        value = x;
    }
}
class ConstructorEx {
    public static void main(String[] args) {
        Data_1 d1 = new Data_1();
        Data_2 d2 = new Data_2(); // compile error바ᄅ새ᄋ
    }
}
```

## 실행결과

```txt
ConstructorEx.java:15: cannot resolve symbol
symbol : constructor Data_2 ()
location: class Data_2
        Data_2 d2 = new Data_2(); // compile error바ᄅ새ᄋ
^
1 error
```

이 예제를 컴파일 하면 위와 같은 에러 메시지가 나타난다. 이것은 Data\_2에서 Data\_2()라는 생성자를 찾을 수 없다는 내용인데, Data\_2에 생성자 Data\_2()가 정의되어 있지 않기 때문에 에러가 발생한 것이다.<br>Data\_1의 인스턴스를 생성하는 코드에는 에러가 없는데, Data\_2의 인스턴스를 생성하는 코드에서 에러가 발생하는 이유는 무엇일까?<br>그 이유는 Data\_1에는 정의되어 있는 생성자가 하나도 없으므로 컴파일러가 기본 생성자를 추가해주었지만, Data\_2에는 이미 생성자 Data\_2(int x)가 정의되어 있으므로 기본생성자가 추가되지 않았기 때문이다.<br>컴파일러가 자동적으로 기본 생성자를 추가해주는 경우는 ’클래스 내에 생성자가 하나도없을 때’뿐이라는 것을 명심해야 한다.

```txt
Data_1 d1 = new Data_1(); _ Data_1 d1 = new Data_1();
Data_2 d2 = new Data_2(); // 에러 Data_2 d2 = new Data_2(10); // OK
```

이 예제에서 컴파일 에러가 발생하지 않도록 하기 위해서는 위의 오른쪽 코드와 같이 Data\_2의 인스턴스를 생성할 때 생성자 Data\_2(int x)를 사용하던가, 아니면 클래스 Data\_2에 생성자 Data\_2()를 추가로 정의해줘야 한다.

기본 생성자가 컴파일러에 의해서 자동 추가되는 경우는<br>생성자가 하나도 없을 때 뿐이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 5.3 매개변수가 있는 생성자

생성자도 메서드처럼 매개변수를 선언하여 호출 시 값을 넘겨받아서 인스턴스의 초기화작업에 사용할 수 있다. 인스턴스마다 각기 다른 값으로 초기화되어야 하는 경우가 많기때문에 매개변수를 사용한 초기화는 매우 유용하다.<br>아래의 코드는 자동차를 클래스로 정의한 것인데, 단순히 color, gearType, door 세 개의 인스턴스 변수와 두 개의 생성자를 가지고 있다.

```txt
class Car {
    String color; // 새ᄀ사ᄋ
    String gearType; // 벼ᄂ소기 조ᄋ류 - auto(자도ᄋ), manual(수도ᄋ)
    int door; // 무ᄂ의 개수
    Car() {} // 기보ᄂ 새ᄋ서ᄋ자
    Car(String c, String g, int d) { // 매개벼ᄂ수가 이ᄊ느ᄂ 새ᄋ서ᄋ자
        color = c;
        gearType = g;
        door = d;
    }
}
```

Car인스턴스를 생성할 때, 생성자 Car()를 사용하면, 인스턴스를 생성한 후에 인스턴스 변수들을 따로 초기화해야 하지만, 매개변수가 있는 생성자 Car(String color, String gearType, int door)를 이용하면 인스턴스를 생성하는 동시에 원하는 값으로 초기화를할 수 있다.<br>인스턴스를 생성한 다음에 인스턴스 변수의 값을 변경하는 것보다 매개변수를 갖는 생성자를 사용하는 것이 코드를 보다 짧고 변경에 유리하게 만든다.

```txt
Car c = new Car();
c.color = "white";
c.gearType = "auto";
c.door = 4;
```

위의 양쪽 코드 모두 같은 내용이지만, 오른쪽의 코드가 더 간결하고 직관적이다. 이처럼클래스를 작성할 때 다양한 생성자를 제공함으로써 인스턴스 생성 후에 추가로 초기화를하지 않아도 되게 하는 것이 좋다.

- 예제 6-24/CarEx.java

```txt
class Car {
    String color; // 새ᄀ사ᄋ
    String gearType; // 벼ᄂ소기조ᄋ류 - auto(자도ᄋ), manual(수도ᄋ)
    int door; // 무ᄂ의 개수
    Car() {}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
    Car(String c, String g, int d) {
        color = c;
        gearType = g;
        door = d;
    }
}
class CarEx {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.color = "white";
        c1.gearType = "auto";
        c1.door = 4;
        Car c2 = new Car("white", "auto", 4);
        System.out.println("c1의 color=" + c1.color + ", gearType="
            + c1.gearType+ ", door="+c1.door);
        System.out.println("c2의 color=" + c2.color + ", gearType="
            + c2.gearType+ ", door="+c2.door);
    }
}
```

- 실행결과

```txt
    c1의 color=white, gearType=auto, door=4
    c2 of color=white, gearType=auto, door=4
```

## 5.4 생성자에서 다른 생성자 호출하기 - this(), this

같은 클래스의 멤버들 간에 서로 호출할 수 있는 것처럼 생성자도 서로 호출이 가능하다. 단, 다음의 두 조건을 만족시켜야 한다.

- 생성자의 이름으로 클래스이름 대신 this를 사용한다.
- 다른 생성자를 호출할 때 반드시 첫 줄에서만 호출이 가능하다.

다음의 코드는 생성자를 작성할 때 지켜야하는 두 조건을 모두 만족시키지 못했기 때문에 에러가 발생한다.

```txt
Car(String color) {
    door = 5; // 처N 버ᄂ째 주ᄅ
    Car(color, "auto", 4); // 에러1. 새ᄋ서ᄋ자의 두 버ᄂ째 주ᄅ에서 다르ᄂ 새ᄋ서ᄋ자 호추ᄅ
} // 에러2. this(color, "auto", 4);로 해야하ᄆ
```

생성자 내에서 다른 생성자를 호출할 때는 클래스이름인 ’Car’대신 ’this’를 사용해야하는 데 그러지 않아서 에러이고, 또 다른 에러는 생성자 호출이 첫 번째 줄이 아닌 두 번째 줄 이기 때문에 에러이다.<br>생성자에서 다른 생성자를 첫 줄에서만 호출이 가능하도록 한 이유는 생성자 내에서 초 기화 작업 중에 다른 생성자를 호출하면, 호출된 다른 생성자 내에서도 멤버변수들의 값 을 초기화를 할 것이므로 이전의 초기화 작업이 무의미해질 수 있기 때문이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-25/CarEx2.java

```txt
class Car2 {
    String color; // 새ᄀ사ᄋ
    String gearType; // 벼ᄂ소기조ᄋ류 - auto(자도ᄋ), manual(수도ᄋ)
    int door; // 무ᄂ의 개수
    Car2() {
        this("white", "auto", 4);
    }
```

```txt
    Car2(String color) {
        this(color, "auto", 4);
    }
    Car2(String color, String gearType, int door) {
        this.color = color;
        this.gearType = gearType;
        this.door = door;
    }
}
class CarEx2 {
    public static void main(String[] args) {
        Car2 c1 = new Car2();
        Car2 c2 = new Car2("blue");
        System.out.println("c1의 color=" + c1.color + ", gearType="
            + c1.gearType+ ", door="+c1.door);
        System.out.println("c2의 color=" + c2.color + ", gearType="
            + c2.gearType+ ", door="+c2.door);
    }
}
```

- 실행결과

```txt
c1의 color=white, gearType=auto, door=4
c2 of color=blue, gearType=auto, door=4
```

생성자 Car2()에서 또 다른 생성자 Car2(String color, String gearType, int door)를호출하였다. 이처럼 생성자간의 호출에는 생성자의 이름 대신 this를 사용해야 하므로 ‘Car2’ 대신 ’this’를 사용했다. 그리고 생성자 Car2()의 첫째 줄에서 호출하였다는 점을눈여겨보기 바란다.

```txt
Car2() {
    color = "white";
    gearType = "auto";
    door = 4;
}
```

⟶

```txt
Car2() {
    this("white","auto",4);
}
```

위 코드는 양쪽 모두 같은 일을 하지만 오른쪽 코드는 생성자 Car2(String color, String gearType, int door)로 더 간략히 한 것이다. Car2 c1 = new Car2();와 같이 생성자 Car2()로 Car2인스턴스를 생성한 경우에, 인스턴스변수 color는 “white”, gearType은 “auto”, door는 4로 초기화 되도록 하였다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>이것은 마치 실생활에서 자동차(Car인스턴스)를 생산할 때, 아무런 옵션도 주지 않으면, 기본적으로 흰색(white)에 자동변속기어(auto) 그리고 문의 개수가 4개인 자동차가 생산 되도록 하는 것에 비유할 수 있다.

같은 클래스 내의 생성자들은 일반적으로 서로 관계가 깊어서 이처럼 서로 호출하도록 하 면 코드의 중복을 줄이고 더 좋은 코드를 얻을 수 있다. 그리고 수정이 필요한 경우에도 보다 적게 변경하면 되므로 유지보수가 쉬워진다.

```txt
Car2 (String c, String g, int d) {
    color = c;
    gearType = g;
    door = d;
}
```

```txt
Car2 (String color, String gearType,
int door) {
    this.color = color;
    this.gearType = gearType;
    this.door = door;
}
```

왼쪽 코드의 ’color = c;’는 생성자의 매개변수로 선언된 지역변수 c의 값을 인스턴스변수 color에 저장한다. 이 때 변수 color와 c는 이름만으로도 서로 구별되므로 아무런 문제가 없다.<br>하지만, 오른쪽 코드처럼 생성자의 매개변수로 선언된 변수의 이름이 color로 인스턴스 변수 color와 같을 경우에는 이름만으로 두 변수가 서로 구별이 안 된다. 이런 경우에는 인스턴스 변수 앞에 ’this’를 붙이면 구별이 가능하다.<br>this.color는 인스턴스 변수이고, color는 생성자의 매개변수로 선언된 지역 변수이다. 왼쪽 코드와 같이 매개변수 이름을 다르게 하는 것 보다 ’this’로 구별되게 하는 것이 의미 가 더 명확하고 이해하기 쉽다.<br>’this’는 참조 변수이며 인스턴스 자신을 가리킨다. 참조변수를 통해 인스턴스의 멤버에 접근할 수 있는 것처럼, ’this’로 인스턴스 변수에 접근할 수 있는 것이다.

하지만, ‘this’를 사용할 수 있는 것은 인스턴스 멤버뿐이다. static메서드(클래스 메서 드)에서는 인스턴스 멤버들을 사용할 수 없는 것처럼, ’this’ 역시 사용할 수 없다. 왜냐하 면, static메서드는 인스턴스를 생성하지 않고도 호출될 수 있으므로 static메서드가 호출 된 시점에 인스턴스(this)가 존재하지 않을 수도 있기 때문이다.

생성자를 포함한 모든 인스턴스 메서드에는 인스턴스 자신을 가리키는 참조변수 ’this’가 지역 변수로 숨겨진 채로 존재한다. 일반적으로 인스턴스 메서드는 인스턴스와 관련된 작 업을 하기 때문에 인스턴스의 정보가 필요하지만, static메서드는 인스턴스와 관련 없는 작업을 하므로 인스턴스에 대한 정보가 필요없다.<br>> this 인스턴스 자신을 가리키는 참조 변수, 인스턴스의 주소가 저장되어 있으며 모든 인스턴스 메서드에 지역변수로 숨겨진 채로 존재한다.<br>> this(), this(매개변수) 생성자, 같은 클래스의 다른 생성자를 호출할 때 사용한다.

I 참고 I this와 this()는 생긴것 만 비슷할 뿐 전혀 다른 것이다. this는 ’참조 변수’이고, this( )는 ’생성자’이다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 5.5 생성자를 이용한 인스턴스의 복사

현재 사용하고 있는 인스턴스와 같은 상태를 갖는 인스턴스를 하나 더 만들고자 할 때 생 성자를 이용할 수 있다. 두 인스턴스가 같은 상태를 갖는다는 것은 두 인스턴스의 모든 인 스턴스 변수(상태)가 동일한 값을 갖고 있다는 것을 뜻한다.<br>하나의 클래스로부터 생성된 모든 인스턴스의 메서드와 클래스 변수는 서로 동일하기 때문에 인스턴스간의 차이는, 인스턴스마다 각기 다른 값을 가질 수 있는 인스턴스 변수 뿐이다.

```txt
    Car(Car c) {
        color = c.color;
        gearType = c.gearType;
        door = c.door;
    }
```

위의 코드는 Car클래스의 참조 변수를 매개변수로 선언한 생성자이다. 매개변수로 넘겨 진 참조 변수가 가리키는 Car인스턴스의 인스턴스 변수인 color, gearType, door의 값을 인스턴스 자신으로 복사하는 것이다.<br>이렇게 하면 어떤 인스턴스의 상태를 전혀 알지 못해도 똑같은 상태의 인스턴스를 추가 로 생성할 수 있다. Java API의 많은 클래스들이 인스턴스의 복사를 위한 생성자를 제공 하고 있다.

I 참고 I Object클래스에 정의된 clone( )을 이용하면 간단히 인스턴스를 복사할 수 있다. p. 486

- 예제 6-26/CarEx3.java

```txt
class Car3 {
    String color; // 새ᄀ사ᄋ
    String gearType; // 벼ᄂ소기조ᄋ류 - auto(자도ᄋ), manual(수도ᄋ)
    int door; // 무ᄂ의 개수
    Car3() {
        this("white", "auto", 4);
    }
    Car3 (Car3 c) { // 이ᄂ스터ᄂ스의 보ᄀ사르ᄅ 위하ᄂ 새ᄋ서ᄋ자.
        color = c.color;
        gearType = c.gearType;
        door = c.door;
    }
    Car3(String color, String gearType, int door) {
        this.color = color;
        this.gearType = gearType;
        this.door = door;
    }
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

```txt
class CarEx3 {
    public static void main(String[] args) {
        Car3 c1 = new Car3();
        Car3 c2 = new Car3(c1); // c1 의 보ᄀ사보ᄂ c2르ᄅ 새ᄋ서ᄋ하ᄂ다.
        System.out.println("c1의 color=" + c1.color + ", gearType="
            + c1.gearType+ ", door="+c1.door);
        System.out.println("c2의 color=" + c2.color + ", gearType="
            + c2.gearType+ ", door="+c2.door);
        c1.door=100; // c1 의 이ᄂ스터ᄂ스벼ᄂ수 door의 가ᄡ으ᄅ 벼ᄂ겨ᄋ하ᄂ다.
        System.out.println("c1.door=100; 수해ᄋ후");
        System.out.println("c1의 color=" + c1.color + ", gearType="
            + c1.gearType+ ", door="+c1.door);
        System.out.println("c2의 color=" + c2.color + ", gearType="
            + c2.gearType+ ", door="+c2.door);
    }
}
```

- 실행결과

```txt
c1의 color=white, gearType=auto, door=4
c2 of color=white, gearType=auto, door=4
c1.door=100; 수해ᄋ 후
c1의 color=white, gearType=auto, door=100
c2 of color=white, gearType=auto, door=4
```

인스턴스 c2는 c1을 복사하여 생성된 것이므로 서로 같은 상태를 갖지만, 서로 독립적으 로 메모리 공간에 존재하는 별도의 인스턴스이므로 c1의 값들이 변경되어도 c2는 영향을 받지 않는다.<br>생성자 ’Car(Car c)’는 아래와 같이 다른 생성자인 ’Car(String color, String gearType, int door)’를 호출하는 것이 바람직하다. 무작정 새로 코드를 작성하는 것보다 기존의 코 드를 최대한 활용하도록 고민해야 한다.

```txt
Car(Car c) {
    color = c.color;
    gearType = c.gearType;
    door = c.door;
}
```

```txt
Car(Car c) {
// Car(String color,String gearType,int door)
    this(c.color, c.gearType, c.door);
}
```

지금까지 생성자에 대해서 모르고도 자바프로그래밍이 가능했던 것을 생각한다면, 생성 자는 그리 중요하지 않은 것으로 생각될지도 모른다. 하지만, 지금까지 본 것처럼 생성자 를 잘 활용하면 보다 간결하고 직관적인 코드를 작성할 수 있을 것이다.

인스턴스를 생성할 때는 다음의 2 가지 사항을 결정해야 한다.

1. 클래스 - 어떤 클래스의 인스턴스를 생성할 것인가?
2. 생성자 - 선택한 클래스의 어떤 생성자로 인스턴스를 생성할 것인가?

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 6 변수의 초기화

## 6.1 변수의 초기화

변수를 선언하고 처음으로 값을 저장하는 것을 ’변수의 초기화’라고 한다. 변수의 초기화는 경우에 따라서 필수적이기도 하고 선택적이기도 하지만, 가능하면 선언과 동시에 적절 한 값으로 초기화 하는 것이 바람직하다.

멤버 변수는 초기화를 하지 않아도 자동적으로 변수의 자료형에 맞는 기본값으로 초기 화가 이루어지므로 초기화하지 않고 사용할 수 있지만, 지역변수는 사용하기 전에 반드시 초기화해야 한다. 인스턴스 변수와 클래스 변수는 초기화가 필수가 아니라서 타입 추론 (var)을 허용하지 않는다.

```txt
class InitTest {
    int x; // 이ᄂ스터ᄂ스 벼ᄂ수. 타이ᄇ 추로ᄂ(var) 부ᄅ가
    int y = x; // 이ᄂ스터ᄂ스 벼ᄂ수. 타이ᄇ 추로ᄂ(var) 부ᄅ가
    void method1() {
        int i; // 지여ᄀ 벼ᄂ수
        int j = i; // 에러. 지여ᄀ 벼ᄂ수르ᄅ 초기화하지 않고 사요ᄋ
    }
}
```

위의 코드에서 x, y는 인스턴스 변수이고, i, j는 지역변수이다. 그 중 x와 i는 선언만 하고 초기화를 하지 않았다. 그리고 y 를 초기화 하는데 x 를 사용하였고, j 를 초기화 하는데 i 를 사용하였다.

인스턴스 변수 x는 초기화를 해주지 않아도 자동적으로 int형의 기본값인 0으로 초기화 되므로, ‘int $\mathrm{y}=\mathrm{x}$’,’와 같이 할 수 있다. x 의 값이 0이므로 y 역시 0이 저장된다.<br>하지만, method1( )의 지역 변수 i는 자동적으로 초기화되지 않으므로, 초기화되지 않은 상태에서 변수 j를 초기화 하는데 사용될 수 없다. 컴파일하면, 에러가 발생한다.

멤버 변수(클래스 변수와 인스턴스 변수)와 배열의 초기화는 선택이지만,<br>지역 변수의 초기화는 필수이다.

참고로 각 타입의 기본값(default value)은 다음과 같다.

| 자료형 | 기본값 |
| --- | --- |
| boolean | false |
| char | ‘000’ |
| byte, short, int | 0 |
| long | 0L |
| float | 0.0f |
| double | 0.0d 또는 0.0 |
| 참조형 | null |

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)<br>변수의 초기화에 대한 예를 몇 가지 더 살펴보자.

| 선언예 | 설명 |
| --- | --- |
| int i=10;  int $\mathrm{j}=10$; | int형 변수 i를 선언하고 10으로 초기화 한다.  int형 변수 j를 선언하고 10으로 초기화 한다. |
| int $\mathrm{i}=10, \mathrm{j}=10$; | 같은 타입의 변수는 콤마(,)를 사용해서 함께 선언하거나 초기화할 수 있다. |
| int $\mathrm{i}=10$, long $\mathrm{j}=0$; | 에러. 타입이 다른 변수는 함께 선언하거나 초기화할 수 없다. |
| int i=10;  int j=i; | 변수 i에 저장된 값으로 변수 j를 초기화 한다.  변수 j는 i의 값인 10으로 초기화 된다. |
| int j=i;  int i=10; | 에러. 변수 i가 선언되기 전에 i를 사용할 수 없다. |

- 표6-4 다양한 초기화 방법

멤버 변수의 초기화는 지역 변수와 달리 여러 가지 방법이 있는데 앞으로 멤버 변수의 초 기화에 대한 모든 방법에 대해 비교, 정리할 것이다.

- 멤버 변수의 초기화 방법

1. 명시적 초기화(explicit initialization)
2. 생성자(constructor)
3. 초기화 블럭(initialization block)
   - 인스턴스 초기화 블럭 : 인스턴스 변수를 초기화하는데 사용.
   - 클래스 초기화 블럭 : 클래스 변수를 초기화하는데 사용.

## 6.2 명시적 초기화(explicit initialization)

변수를 선언과 동시에 초기화하는 것을 명시적 초기화라고 한다. 가장 기본적이면서도 간 단한 초기화 방법이므로 여러 초기화 방법 중에서 가장 우선적으로 고려되어야 한다.

```txt
class Car {
    int door = 4; // 기보ᄂ혀ᄋ(primitive type) 벼ᄂ수의 초기화
    Engine e = new Engine(); // 차ᄆ조혀ᄋ(reference type) 벼ᄂ수의 초기화
    //...
}
```

명시적 초기화가 간단하고 명료하긴 하지만, 보다 복잡한 초기화가 필요할 때는 ‘초기화블럭(initialization block)’ 또는 생성자를 사용해야 한다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## 6.3 초기화 블럭(initialization block)

초기화 블럭에는 ‘클래스 초기화 블럭’과 ’인스턴스 초기화 블럭’ 두 가지 종류가 있다. 클 래스 초기화 블럭은 클래스 변수의 초기화에 사용되고, 인스턴스 초기화 블럭은 인스턴스 변수의 초기화에 사용된다.

```txt
크ᄅ래스 초기화 브ᄅ러ᄀ 크ᄅ래스 벼ᄂ수의 보ᄀ자ᄇ하ᄂ 초기화에 사요ᄋ
이ᄂ스터ᄂ스 초기화 브ᄅ러ᄀ 이ᄂ스터ᄂ스 벼ᄂ수의 보ᄀ자ᄇ하ᄂ 초기화에 사요ᄋ
```

초기화 블럭을 작성하려면, 인스턴스 초기화 블럭은 단순히 클래스 내에 블럭\{\}만들고 그 안에 코드를 작성하기만 하면 된다. 그리고 클래스 초기화 블럭은 인스턴스 초기화 블럭 앞에 단순히 static을 붙이기만 하면 된다.

초기화 블럭 내에는 조건문, 반복문, 예외처리구문 등을 자유롭게 사용할 수 있으므로, 초 기화 작업이 복잡하여 명시적 초기화만으로는 부족한 경우 초기화 블럭을 사용한다.

```txt
class InitBlock {
    static { /* 크ᄅ래스 초기화 브ᄅ러ᄀ 이ᄇ니다. */ }
    { /* 이ᄂ스터ᄂ스 초기화 브ᄅ러ᄀ 이ᄇ니다. */ }
    // ...
}
```

클래스 초기화 블럭은 클래스가 메모리에 처음 로딩될 때 한번만 수행되며, 인스턴스 초 기화 블럭은 생성자와 같이 인스턴스를 생성할 때 마다 수행된다.<br>그리고 생성자보다 인스턴스 초기화 블럭이 먼저 수행된다는 사실도 기억해두자.<br>I 참고 I 클래스가 처음 로딩될 때 클래스 변수들이 자동적으로 메모리에 만들어지고, 곧바로 클래스 초기화 블럭이 클래스 변수들을 초기화한다.

인스턴스 변수의 초기화는 주로 생성자를 사용하고, 인스턴스 초기화 블럭은 모든 생성자 에서 공통으로 수행돼야 하는 코드를 넣는데 사용한다.

```txt
Car() {
    count++;
    serialNo = count;
    color="White";
    gearType ="Auto";
}
Car(String color, String gearType) {
    count++;
    serialNo = count;
    this.color=color;
    this.gearType = gearType;
}
```

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

예를 들면, 위와 같이 클래스의 모든 생성자에 공통으로 수행되어야 하는 문장들이 있을때, 이 문장들을 모든 생성자에 넣기보다 아래와 같이 인스턴스 블럭에 넣어주면 코드가보다 간결해진다.

```txt
    {
        count++; 이ᄂ스터ᄂ스 초기화 브ᄅ러ᄀ
        serialNo = count;
    }
    Car() {
        color="White";
        gearType ="Auto";
    }
    Car(String color, String gearType) {
        this.color=color;
        this.gearType = gearType;
    }
```

이처럼 코드의 중복을 제거하는 것은 코드의 신뢰성을 높여 주고, 오류의 발생 가능성을줄여 준다는 장점이 있다. 즉, 재사용성을 높이고 중복을 제거하는 것, 이것이 바로 객체지향프로그래밍이 추구하는 궁극적인 목표이다.<br>프로그래머는 이와 같은 객체지향언어의 요소들을 잘 이해하고 활용하여 코드의 중복을최대한 제거하기 위해서 노력해야 한다.

- 예제 6-27/BlockEx.java

```txt
class BlockEx {
    static {
        System.out.println("static { }"); - 크ᄅ래스 초기화 브ᄅ러ᄀ
    }
    {
        System.out.println("{ }");
    }
    public BlockEx() {
        System.out.println("새ᄋ서ᄋ자");
    }
    public static void main(String args[]) {
        System.out.println("BlockEx be = new BlockEx(); ");
        BlockEx be = new BlockEx();
        System.out.println("BlockEx be2 = new BlockEx(); ")
        BlockEx be2 = new BlockEx();
    }
}
```

```txt
> 시ᄅ해ᄋ겨ᄅ과 \(2 \)
static { }
BlockEx be = new BlockEx();
    { }
새ᄋ서ᄋ자
BlockEx be2 = new BlockEx();
    { }
새ᄋ서ᄋ자
```

\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

예제가 실행되면서 BlockEx가 메모리에 로딩될 때, 클래스 초기화 블럭이 가장 먼저 수행 되어 ’static \{\}’이 화면에 출력된다. 그 다음에 main메서드가 수행되어 BlockEx인스턴스 가 생성되면서 인스턴스 초기화 블럭이 먼저 수행되고, 끝으로 생성자가 수행된다.<br>위의 실행결과에서 알 수 있듯이 클래스 초기화 블럭은 처음 메모리에 로딩될 때 한번만 수행되었지만, 인스턴스 초기화 블럭과 생성자는 인스턴스가 생성될 때 마다 수행되었다.

- 예제 6-28/StaticBlockEx.java

```txt
class StaticBlockEx {
    static int[] arr = new int[10];
    static {
        for(int i=0;i<arr.length;i++) {
            // 1과 10사|의 이ᄆ의의 가ᄡ으ᄅ 배여ᄅ arr에 저자ᄋ
            arr[i] = (int) (Math.random()*10) + 1;
        }
    }
    public static void main(String args[]) {
        for(int i=0; i<arr.length;i++)
            System.out.println("arr["+i+"] :" + arr[i]);
    }
}
```

- 실행결과

```txt
arr[0] :4
arr[1] :8
arr[2] :7
arr[3] :2
arr[4] :2
arr[5] :10
arr[6] :7
arr[7] :10
arr[8] :1
arr[9] :7
```

명시적 초기화를 통해 배열 arr을 생성하고, 클래스 초기화 블럭을 이용해서 배열의 각 요 소들을 임의의 값으로 채우도록 했다.

이처럼 배열이나 예외처리가 필요한 복잡한 초기화 작업은 명시적 초기화만으로 할 수 없다. 이런 경우에 추가적으로 클래스 초기화 블럭을 사용해야 한다.

I 참고 I 인스턴스 변수의 복잡한 초기화는 생성자 또는 인스턴스 초기화 블럭을 사용한다.

## 6.4 멤버변수의 초기화 시기와 순서

지금까지 멤버변수를 초기화하는 방법에 대해서 알아봤다. 이제는 초기화가 수행되는 시 기와 순서에 대해서 정리해보도록 하자.

클래스변수의 초기화 시점 클래스가 처음 로딩될 때 단 한번 초기화 된다.<br>인스턴스변수의 초기화 시점 인스턴스가 생성될 때마다 각 인스턴스별로 초기화가 이루어진다<br>클래스변수의 초기화 순서 기본값 → 명시적 초기화 → 클래스 초기화 블럭<br>인스턴스변수의 초기화 순서 기본값 → 명시적 초기화 → 인스턴스 초기화 블럭 → 생성자

프로그램 실행도중 클래스에 대한 정보가 요구될 때, 클래스는 메모리에 로딩된다. 예를 들면, 클래스 멤버를 사용했을 때, 인스턴스를 생성할 때 등이 이에 해당한다.<br>하지만, 해당 클래스가 이미 메모리에 로딩되어 있다면, 또다시 로딩하지 않는다. 물론 초기화도 다시 수행되지 않는다.<br>\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

I 참고 I 클래스의 로딩 시기는 JVM의 종류에 따라 좀 다를 수 있다. 클래스가 필요할 때 메모리에 로딩하도록 설계가 되어있는 것도 있고, 실행효율을 높이기 위해서 사용될 클래스들을 프로그램이 시작될 때 미리 로딩하도록 되어있는 것도 있다.

```txt
class InitTest {
    static int cv = 1; 명시적 초기화
    int iv = 1; (explicit initialization)
    static { cv = 2; } // 클래스 초기화 블럭
    { iv = 2; } // 인스턴스 초기화 블럭
    InitTest () { // 생성자
        iv = 3;
    }
}
```

I 플래시동영상 I Initialization.exe에 초기화 과정에 대한 보다 자세한 설명이 있다.

위의 InitTest클래스는 클래스변수(cv)와 인스턴스변수(iv)를 각각 하나씩 가지고 있다. ’new InitTest();’와 같이 하여 인스턴스를 생성했을 때, cv와 iv가 초기화되어가는 과정 을 단계별로 자세히 살펴보도록 하자.

| 클래스 초기화 |  |  | 인스턴스 초기화 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| 기본값 | 명시적 초기화 | 클래스 초기화 블럭 | 기본값 | 명시적 초기화 | 인스턴스 초기화 블럭 | 생성자 |
| CV □ 0 | cv □ 1 | cv □ 2 | CV □ 2 | CV □ 2 | cv □ 2 | CV □ 2 |
|  |  |  | iv □ 0 | iv □ 1 | iv □ 2 | iv □ 3 |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |

- 클래스 변수 초기화 (1~3) : 클래스가 처음 메모리에 로딩될 때 차례대로 수행됨.
- 인스턴스 변수 초기화(4~7) : 인스턴스를 생성할 때 차례대로 수행됨

I 중요 I 클래스 변수는 항상 인스턴스 변수보다 항상 먼저 생성되고 초기화된다.

1. cv가 메모리(method area)에 생성되고, cv에는 int형의 기본값인 0이 cv에 저장된다.
2. 그 다음에는 명시적 초기화(int $\mathrm{cv}=1$ )에 의해서 cv에 1이 저장된다.
3. 마지막으로 클래스 초기화 블럭(cv=2)이 수행되어 cv에는 2가 저장된다.
4. InitTest클래스의 인스턴스가 생성되면서 iv가 메모리(heap)에 존재하게 된다. iv 역시 int형 변수이므로 기본값 0이 저장된다.
5. 명시적 초기화에 의해서 iv에 1이 저장되고
6. 인스턴스 초기화 블럭이 수행되어 iv에 2가 저장된다.
7. 마지막으로 생성자가 수행되어 iv에는 3이 저장된다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-29/ProductEx.java

```txt
class Product {
    static int count = 0; // 새ᄋ서ᄋ되ᄂ 이ᄂ스터ᄂ스의 수르ᄅ 저자ᄋ하기 위하ᄂ 벼ᄂ수
    int serialNo; // 이ᄂ스터ᄂ스 고유의 버ᄂ호
    {
        ++count; Product이ᄂ스터ᄂ스가 새ᄋ서ᄋ되ᄅ 때마다 count의
        serialNo = count; 가ᄡ으ᄅ 1씨ᄀ 즈ᄋ가시켜서 serialNo에 저자ᄋ하ᄂ다.
    }
    public Product() {} // 기보ᄂ 새ᄋ서ᄋ자, 새ᄋ랴ᄀ가느ᄋ
}
class ProductEx {
    public static void main(String args[]) {
        Product p1 = new Product();
        Product p2 = new Product();
        Product p3 = new Product();
        System.out.println("p1의제푸ᄆ버ᄂ호(serial no)느ᄂ " + p1.serialNo);
        System.out.println("p2의제푸ᄆ버ᄂ호(serial no)느ᄂ " + p2.serialNo);
        System.out.println("p3의 제푸ᄆ버ᄂ호(serial no) 느ᄂ " + p3.serialNo);
        System.out.println("새ᄋ사ᄂ되ᄂ 제푸ᄆ의 수느ᄂ 모두 "+Product.count+"개 이ᄇ니다.");
    }
}
```

- 실행결과

```txt
p1의 제푸ᄆ버ᄂ호(serial no)느ᄂ 1
p2 의 제푸ᄆ버ᄂ호 (serial no)느ᄂ 2
p3의 제푸ᄆ버ᄂ호(serial no)느ᄂ 3
새ᄋ사ᄂ되ᄂ 제푸ᄆ의 수느ᄂ 모두 3개 이ᄇ니다.
```

공장에서 제품을 생산할 때 제품마다 생산 일련번호(serial no)를 부여하는 것과 같이 Product클래스의 인스턴스가 고유의 일련번호(serialNo)를 갖도록 하였다.<br>Product클래스의 인스턴스를 생성할 때마다 인스턴스 블럭이 수행되어, 클래스 변수 count의 값을 1증가시킨 다음, 그 값을 인스턴스변수 serialNo에 저장한다.<br>이렇게 함으로써 새로 생성되는 인스턴스는 이전에 생성된 인스턴스보다 1이 증가된 serialNo값을 갖게 된다.

생성자가 하나 밖에 없기 때문에 인스턴스 블럭 대신, Product클래스의 생성자를 사용해 도 결과는 같지만, 코드의 의미상 모든 생성자에서 공통으로 수행되어야하는 내용이기 때 문에 인스턴스 블럭을 사용하였다.<br>만일 count를 인스턴스 변수로 선언했다면, 인스턴스가 생성될 때마다 0으로 초기화 될 것이므로 모든 Product인스턴스의 serialNo값은 항상 1이 될 것이다.

## \[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

- 예제 6-30/DocumentEx.java

```txt
class Document {
    static int count = 0;
    String name; // 무ᄂ서며ᄋ(Document name)
    Document() { // 무ᄂ서 새ᄋ서ᄋ 시 무ᄂ서며ᄋ으ᄅ 지저ᄋ하지 않아ᄊ으ᄅ 때
        this("제모ᄀ어ᄡ으ᄆ" + ++count);
    }
    Document(String name) {
        this.name = name;
        System.out.println("무ᄂ서 " + this.name + "가 새ᄋ서ᄋ되어ᄊ스ᄇ니다.");
    }
}
class DocumentEx {
    public static void main(String args[]) {
        Document d1 = new Document();
        Document d2 = new Document("자바.txt");
        Document d3 = new Document();
        Document d4 = new Document();
    }
}
```

- 실행결과

```txt
무ᄂ서 제모ᄀ어ᄡ으ᄆ1가 새ᄋ서ᄋ되어ᄊ스ᄇ니다.
무ᄂ서 자바.txt가 새ᄋ서ᄋ되어ᄊ스ᄇ니다.
무ᄂ서 제모ᄀ어ᄡ으ᄆ2가 새ᄋ서ᄋ되어ᄊ스ᄇ니다.
무ᄂ서 제모ᄀ어ᄡ으ᄆ3가 새ᄋ서ᄋ되어ᄊ스ᄇ니다.
```

바로 이전의 일련번호 예제를 응용한 것으로, 워드프로세서나 문서 편집기에 이와 유사한코드가 사용된다. 문서(Document)를 생성할 때, 문서의 이름을 지정하면 그 이름의 문서가 생성되지만, 문서의 이름을 지정하지 않으면 프로그램이 일정한 규칙을 적용해서 자동으로 이름을 결정한다.<br>예를 들면, ‘제목없음1’, ‘제목없음2’, ‘제목없음3’ … 과 같은 식으로 문서의 이름이 결정된다. 문서의 이름은 서로 구별될 수 있어야 하기 때문이다.

[8](about:blank#fn8)\[ebook - 샘플. 무료 공유\] 자바의 정석 4판 Java 21 올컬러 2025. 7. 7 출시 [seong.namkung@gmail.com](mailto:seong.namkung@gmail.com)

Memo

---

1. I 참고 I 표의 숫자는 각 문맥 예약어가 추가된 JDK 버전을 의미하며, 자바 언어 명세(Java Language Spec)을 참고하였다. ([https://docs.oracle.com/javase/specs/jls/se21/html/jls-3.html\\#jls-3.9](https://docs.oracle.com/javase/specs/jls/se21/html/jls-3.html/#jls-3.9))[↩︎](about:blank#fnref1)
2. 클래스이름 변수이름; // 변수의 타입이 기본형이 아닌 것들은 모두 참조변수[↩︎](about:blank#fnref2)
3. I 참고 I long타입의 범위를 벗어나는 값을 다룰 때는, 실수형 타입이나 BigInteger클래스(p.548)를 사용하면 된다.[↩︎](about:blank#fnref3)
4. I 참고 I 연습문제는 깃헙([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) PDF파일로 제공[↩︎](about:blank#fnref4)
5. I 참고 I 배열은 참조 변수를 통해서만 접근할 수 있으므로, 참조 변수가 없는 배열은 사용할 수 없다. 이렇게 쓸모없게 된 배 열은 JVM의 가비지 컬렉터(garbage collector)에 의해 자동으로 메모리에서 제거된다.[↩︎](about:blank#fnref5)
6. I 참고 I Math.random() 때문에 실행 할 때 마다 결과가 다를 수 있다.[↩︎](about:blank#fnref6)
7. I 참고 I random()과 같은 Math클래스의 메서드는 모두 static이다. Math클래스에는 인스턴스 변수가 하나도 없다.[↩︎](about:blank#fnref7)
8. I 참고 I 연습문제는 깃헙([https://github.com/castello/javajungsuk4)에서](<https://github.com/castello/javajungsuk4)%EC%97%90%EC%84%9C>) PDF파일로 제공[↩︎](about:blank#fnref8)
