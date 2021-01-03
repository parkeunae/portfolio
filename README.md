# Portfolio Website

## 소개
(아직 제작 중입니다.)<br/>
자기 소개와 프로젝트를 한 곳에서 쉽게 확인할 수 있는 포트폴리오 사이트입니다.<br/>
React 세팅 공부를 위해 제작하기 시작하였습니다.<br/>
create-react-app 없이 React 환경을 세팅하였습니다.<br/>
웹 접근성을 고려하여 ARIA, 시멘틱 마크업을 하려고 노력했습니다.
<br/><br/>

## 개발 환경
* React + webpack + Babel + TypeScript + SCSS
* 메일 전송: [EmailJS](https://www.emailjs.com/docs/)
* 메일 전송 후 toast message: [react-toastify](https://fkhadra.github.io/react-toastify/introduction/)

> 일부 디자인 (컬러, 컴포넌트 크기 등) https://www.figmacrush.com/freelance-platform-free-figma-ui-kit/ 참고하여 개발
<br/>

## 화면
<img src="/images/portfolio_desktop.png" width="450px" title="PC 화면 버전" alt="Portfolio PC Ver."></img>
<img src="/images/portfolio_mobile.png" width="100px" title="모바일 화면 버전" alt="Portfolio Mobile Ver."></img>
<br/>

## 기능
1. About me<br/>
  이름, 이메일, 자신을 소개하는 글, 기타 외부 링크
  (Github,
  [Blog](https://enai.tistory.com/),
  [이력서](https://drive.google.com/file/d/1Lb6sVraf5gBWpA4s9-6u33TFcBO33oxM/view?usp=sharing))
2. Project<br/>
  개인 프로젝트 모음
3. Contact me<br/>
  메일 전송 기능<br/>
  전송 후 성공/실패 메시지 띄우기
<br/>

## TODO
1. 크로스 브라우징 처리
2. 버튼 호버 효과 등 기타 css 효과
3. 완성 후 Github Page로 배포
