### 에듀롬 한국 웹사이트

[에듀롬 한국 웹사이트](http://eduroam.kreonet.kr)는 정적 웹사이트 생성기 [지킬(Jekyll)](https://jekyllrb-ko.github.io)를 통해 제작하였습니다.

정적 웹사이트 생성기는 동적언어(PHP, JAVA)와 데이터베이스(MySQL, MariaDB) 없이 HTML 파일로 웹사이트를 생성합니다. 이를 웹서버에 업로드 하는 것으로 웹사이트를 구축할 수 있습니다. 또는 GitHub Pages를 이용하여 무료로 웹에 게시할 수 있습니다.


### 사이트 내려받기

Git으로 clone을 하거나, GitHub에서 [다운로드](https://github.com/kreonet/eduroam-kr-website/archive/master.zip)합니다.
```console
$ git clone https://github.com/kreonet/eduroam-kr-website
$ cd eduroam-kr-website
```


### 게시글 작성하기

게시글은 게시판에 글을 올리는 것과 같이 날자가 지정된 게시물입니다.  
`http://사이트도메인/카테고리/yyyy/mm/dd/글제목/` 의 주소를 갖습니다.  
`_posts/2018-01-10-renew.md` 파일을 텍스트 에디터로 열어보세요.

**1. `_posts` 디렉토리에 `yyyy-mm-dd-slug.md` 파일 작성 (텍스트 파일)**

* slug: 해당 포스트의 고유 키로 url의 일부로 사용. 왠만하면 특수문자없이 영문자,숫자,-(하이픈),.(점)...만 사용.
* yyyy,mm,dd: 발행 년,월,일.
* 참고: 최종적으로 포스트의 url(permalink)는 `http://사이트도메인/카테고리/yyyy/mm/dd/slug/`

**2. 파일 상단에 [front matter] 작성**

```
layout    : post
title     : "에듀롬 웹사이트 개편 및 2018년 계획"
author    : 에듀롬담당자
date      : 2018-01-10 12:00:00
categories: news
tags      : renew
toc       : false
cover     : "/assets/instacode.png"
```

항목       | 내용
-----------|--------------
layout     | post로 고정
title      | 게시글 제목
author     | 게시글 작성자
date       | 게시글 작성일
categories | 게시글 분류 (띄어쓰기, 한글 X)
tags       | 태그 (띄어쓰기, 한글 X)
toc        | 목차 자동생성 여부 (true, false)
cover      | 커버 이미지 URL

**3. 본문 작성**

[마크다운(markdown) 문법](https://ko.wikipedia.org/wiki/마크다운)으로 본문을 작성합니다. HTML보다 쉽고 직관적입니다.


### 페이지 작성하기

페이지는 글을 올리는 것과 같이 날자가 지정된 게시물입니다.  
`http://사이트도메인/permlink` 의 주소를 갖습니다.  
`collabo.md` 파일을 텍스트 에디터로 열어보세요.

**1. 루트 디렉토리에 `permlink.md` 파일 작성 (텍스트 파일)**

**2. 파일 상단에 [front matter] 작성**

```
layout: page
title: 협력기관
toc: false
permalink: /collabo/
cover: /assets/covers/collaboration.jpg
```

항목      | 내용
----------|-------------
layout    | page로 고정
title     | 게시글 제목
toc       | 목차 자동생성 여부 (true, false)
permalink | 절대링크 (영어로만, 특수문자/띄어쓰기/한글X)
cover     | 커버 이미지 URL

**3. 본문 작성**

[마크다운(markdown) 문법](https://ko.wikipedia.org/wiki/마크다운)으로 본문을 작성합니다. HTML보다 쉽고 직관적입니다.


### 영문 페이지 작성하기

```
layout: page
title: Collaborations
lang: en
toc: false
permalink: /en/collabo/
cover: /assets/covers/collaboration.jpg
```

front matter를 작성할 때, `lang: en`을 추가하고, permlink가 `/en/`으로 시작하도록 한다.


### 메뉴(사이트맵) 작성하기

```
menu:
  - title: "이용방법"
    url: "/connect/"
  - title: "협력기관"
    url: "/collabo/"
  - title: "기반기술"
    url: "/tech/"

...
en:
  ...
  menu:
    - title: "Connect"
      url: "/en/connect/"
    - title: "Collabo"
      url: "/en/collabo/"
    - title: "Technology"
      url: "/en/tech/"
```

`_config.yml` 파일의 menu를 수정하고 빌드합니다.

### 웹사이트 생성 방법

리눅스나 맥에서 ruby를 설치하고 다음 명령을 실행합니다.  
(ruby가 설치되지 않았다면, [rbenv](https://rorlab.gitbooks.io/railsguidebook/content/contents/rbenv.html
)와 [jekyll](http://jekyllrb-ko.github.io/docs/installation/)을 설치하세요.)

```console
$ cd eduroam-kr-website
$ bundle exec jekyll build
$ tar zcvf site.tgz _site/
```

웹사이트는 `_site` 폴더에 생성됩니다. 생성된 HTML 파일의 `src, href`에 기록되는 URL은 웹서버 루트를 기준으로 한 `절대경로`로 생성됩니다. 웹서버에 업로드 하셔야 제대로 보입니다.

다음 명령을 실행하면, `http://127.0.0.1:8080`으로 생성된 웹페이지를 확인할 수 있습니다.

```console
$ bundle exec jekyll serve --host 0.0.0.0 --port 8080 --force_polling
```


### 이용 방법 (GitHub Pages 이용)

GitHub은 Jekyll로 작성된 웹페이지를 무료로 호스팅 해 주고 있습니다. 또한 CNAME 을 통해 기존에 보유한 도메인과도 연동할 수 있습니다. [GitHub Pages 도메인 네임 설정 하기](http://blog.saltfactory.net/setting-domain-name-in-github-pages-via-cname/) 문서를 참고하세요

**(주)카카오 기술블로그**는 GitHub Pages를 통해 웹페이지를 제공하고 있습니다.  
코드 : https://github.com/kakao/kakao.github.io
사이트 : https://kakao.github.io 또는 http://tech.kakao.com

