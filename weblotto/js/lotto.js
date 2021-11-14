const btn = document.getElementById('btn');

btn.addEventListener(
  'click',
  () => {
    console.log();

    const target = document.getElementById('resultDiv'); // 자리 할당

    const balls = makeLottoNum(); // 로또함수를 balls라는 변수에 저장

    target.innerHTML = ''; //리셋

    for (const num of balls) {
      //balls가 배열이기 때문에 in(객체 리터럴)이 아닌 of
      const tag = document.createElement('h3'); // 자리 크기 설정
      const textNode = document.createTextNode(num); // 로또번호 삽입
      tag.appendChild(textNode); // 로또번호를 자리크기에 맞춰 삽입
      target.appendChild(tag); // 로또번호가 들어간 자리크기를 resultDiv 자리에 삽입
    }
  },
  false
);

function makeLottoNum() {
  //로또번호 무작위로 생성 함수

  const arr = [];

  while (true) {
    // //숫자를 생성 1 - 45 사이의 숫자
    // const num = parseInt(Math.random() * 45) + 1;

    // //검사
    // const index = arr.indexOf(num);

    // console.log(`Num : ${num}   INDEX: ${index}`);

    // if (index >= 0) {
    //   continue;
    // }

    // const newLength = arr.push(num);

    // if (newLength === 6) {
    //   break;
    // }

    // 숫자를 생성 1 - 45 사이의 숫자
    const currentNum = Math.floor(Math.random() * (45 - 1 + 1) + 1)
    // 이미 나온 숫자인지 검사
    console.log(`Number Collection : [${arr}] // Current Number : ${currentNum}`)
    if (arr.includes(currentNum)) {
      console.log(`${currentNum} is already in the collection.`)
      continue
    }
    // 새로운 숫자인 경우, 로또 번호로 추가
    const arrLength = arr.push(currentNum)
    // 6개 숫자가 모였는지 확인
    if (arrLength === 6) {
      break
    }
  }
  return arr;
}
