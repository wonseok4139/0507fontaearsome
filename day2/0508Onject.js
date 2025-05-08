// 📌 Object(객체) = 필드(속성) + 함수(메서드)

// 객체 userA 정의
const userA = {
  name: '강감찬', // 이름 속성
  age: 55, // 나이 속성
  gender: '남자', // 성별 속성
};

// 객체 userB 정의
const userB = {
  name: '이순신',
  age: 40,
  gender: '남자',
};

// 👉 객체 전체 출력
console.log(userA); // { name: '강감찬', age: 55, gender: '남자' }
console.log(userB); // { name: '이순신', age: 40, gender: '남자' }

// 👉 객체의 속성 접근 (2가지 방법)
console.log(userA['name']); // 강감찬
console.log(userA['age']); // 55

// 👉 점(.) 표기법으로 속성 접근
console.log(userA.name + ' , ' + userB.name); // 강감찬 , 이순신
console.log(userB.name); // 이순신

// 👉 문자열 직접 출력 (정적 메시지)
console.log('나는 강감찬 이고, 나이는 55세이다.');

// ❌ 잘못된 코드 예 (배워야 할 포인트)
console.log('나는' + ["user('name' + 이고, 나이는 55세 입니다."]);
// 이 줄은 잘못된 문법이야. 수정하면 아래처럼 돼야 함:
console.log('나는 ' + userA.name + '이고, 나이는 ' + userA.age + '세 입니다.');
