//브라우저에 내장된 표준 비동기통신객체 생성하기
//const - 상수선언할 때 - ECMAScript6(2015)
//let - 변수 선언할 때
//XMLHttRequsest는 객체이름으로 new다음에 작성하면 객체 생성됨
const xhr = new  XMLHttpRequest()
//상수라서 대문자로 표시함. - 눈에 잘 띄게 했다.
const NEWS_URL = https://api.hnpwa.com/vo/news/1.json
//xhr은 XMLHttRequest객체를 참조하는 변수입니다.
//재사용성을 높이는 코드를 작성하는 첫단춘는 함수 중심의 코딩을 전개하기
//open함수는 XMLHttpRequset에 선언되어 있다. - 소유주이다.
//파라미터의 갯수는 3개 입니다
//@param - GET 전송방식 (Rest API)
//@param - 해커뉴스의 최신목록을 가져오는 URL
//@param - true(:동기) or false(:비동기-default)
xhr.open("GET", NEWS_URL, false)
//send도 XMLHttRequest제공하는 함수 입니다.
xhr.send()//send가 호출되었을 때 서버에 요청이간다. 
//Object
//JSON.stringify
//JSON.parse
console.log(xhr.response);
console.log(xhr.responseText);
console.log(xhr.responseXML);