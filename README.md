## Client
1. npx create-react-app .
2. npm install react-bootstrap bootstrap
3. npm install react-router-dom
4. npm install axios
5. npm install http-proxy-middleware
6. npm install @emotion/css
7. npm install @emotion/react
8. npm install @emotion/styled
9. npm install sass
10. npm install firebase
11. npm install react-redux
12. npm install @reduxjs/toolkit
13. npm install react-icons@4.11.0
14. npm install swiper@latest
15. npm install react-avatar
16. npm install moment  -> 시간   
17. npm install --save chart.js react-chartjs-2 (부트스트랩 그래프 적용하기)

## Server
1. npm init; 또는 npm init -y;(추천)
2. npm install express --save;
(express은 가상의 서버가 정할때)
3. npm install nodemon --save; 
(서버 저장 할 때마다 나갔다 들어갔다 하기 귀찮으니깐 자동적으로 저장하는 방법)
4. npm install path --save;("path": "^0.12.7" -> 확인)
5. npm install mongoose --save
6. npm install multer --save;
7. npm install aws-sdk@2.348.0 --save
8. npm i multer-s3@2.10.0 (버전 낮은 버전)
(npm i multer-s3 --save 이렇게 이미 설치한 뒤면 버전 확인 후 3.1로되어 있으면 버전을 맞게 수정하고 npm i를 다시 적어 다시 설치하기)

## 트러블 슈팅
<details>
<summary>git 업로드 버그</summary>
깃허브 화살표 폴더 문제 해결 <br/>
- git 업로드 설정 :<br/>
1. .git 파일 제거 : `rm -rf .git` <br/>
2. 스테이지에 존재하는 파일 제거 : `git rm --cached . -rf`<br/>
<br/>

" 2번 명령어를 실행하니 해당 경로의 폴더가 에디터 상에서 빨갛게 나타났다. 처음에 폴더가 다 지워진 줄 알고 놀랐는데, 알고보니 캐시(?)만 날아간 거고 폴더는 무사했다. (yarn start로 켜보니 잘 작동됨) 빨간색은 add, commit을 하면 사라진다. "
<br/>

3. 마지막으로 해야 할 작업 (한 번만 진행) : 위 두 단계 화살표가 들어있는 폴더마다 해주고 마지막으로 최상에서 add, commit, push로 변경 샇앙을 반영해주면 됨
<br />

### 참고 링크 `https://velog.io/@yena1025/%EA%B9%83%ED%97%88%EB%B8%8C-%ED%99%94%EC%82%B4%ED%91%9C-%ED%8F%B4%EB%8D%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0`
</details>


# ADD 프로젝트
ADD는 대학 정보포털 및 커뮤니티를 제공하는 서비스이다. 