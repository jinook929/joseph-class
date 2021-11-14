//// 정해진 숫자만큼 출력하는 함수 만들기
// 함수 선언
function randomNum(min, max) {
	// var randNum = Math.floor(Math.random() * (max - min) + min); // This will not return the max number.
	var randNum = Math.floor(Math.random() * (max - min + 1) + min);
	return randNum;
}

// 숫자 범위 정하기
let start = 6;
let end = 9;
// for loop통해서 100번 연속으로 생성
const randNums = [];
for (let i = 1; i < 100; i++) {
	let randNum = randomNum(start, end);
	if (randNum < start || randNum > end) {
		// 임의의 숫자가 범위를 벗어난 경우
		console.log(randNum + " is out of range...");
	} else {
		// 임의의 숫자가 정상적인 범위에서 성성된 경우
		randNums.push(randNum);
	}
}

// 범위 안의 모든 숫자가 있는지 확인
for (let i = start; i <= end; i++) {
	if (randNums.includes(i)) {
		console.log(`${i} is in randNums!!!`);
	} else {
		console.log(`${i} is not in randNums...`);
	}
}
console.log(randNums);
