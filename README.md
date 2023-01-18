# 원티드 프리온보딩 프론트엔드 4주차 과제

## 🎯 과제

- 목표 : API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
- 기간 : 2023. 01. 16 ~ 2023. 01. 19

<br/>

## ✨ 프로젝트 실행 방법

### 클라이언트

```
git clone https://github.com/preonbording-5/pre-onboarding-8th-4-5

npm install
npm start
```

### 서버

```md
npm run api
```

<br/>

## 📌 배포 링크

[클라이언트 배포 링크](https://profound-lollipop-2477f1.netlify.app/)

<br/>

## 📁 src 폴더 구조

```
src 
├── App.tsx
├── index.tsx
├── index.css
├── api
│   ├── commentApi.ts
│   └── instance.ts
├── components
│   ├── CommentItem.tsx
│   ├── CommentInputForm.tsx
│   ├── CommentList.tsx
│   └── Pagination.tsx
├── constants
│   └── constants.ts
├── redux
│   ├── CommentSlice.ts
│   ├── PageSlice.ts
│   ├── index.tsx
│   └── modeSlice.ts
└── types
    └── types.ts
```

<br/>

## ✅ Best Practice 선정 및 개발 과정

[1. API 호출](https://github.com/preonbording-5/pre-onboarding-8th-4-5/wiki/1.-API-%ED%98%B8%EC%B6%9C)  
[2. Redux-Toolkit 비동기 처리](https://github.com/preonbording-5/pre-onboarding-8th-4-5/wiki/2.-Redux-Toolkit-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC)

<br/>

### ✔️ Commit Message Convention

| Prefix   | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)    |
| ci       | Changes to our CI configuration files and scripts                                                      |
| docs     | Documentation only changes                                                                             |
| feat     | A new feature                                                                                          |
| fix      | A bug fix                                                                                              |
| perf     | A code change that improves performance                                                                |
| refactor | A code change that neither fixes a bug nor adds a feature                                              |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test     | Adding missing tests or correcting existing tests                                                      |

<br/>

## 💪 팀원 소개

| 이름      | 개인 Repository 주소                      |
| --------- | ----------------------------------------- |
| 박인      | https://github.com/innie0526              |
| 오신정    | https://github.com/ShinjungOh             |
| 이민지    | https://github.com/vanillovin             |
| 이정우    | https://github.com/azerose                |
| 황성택    | https://github.com/Seongtaek-H            |

<br/>

## 🛠 기술 스택 및 라이브러리
```
React, TypeScript, tailwind, Redux Toolkit, Redux-thunk
```
