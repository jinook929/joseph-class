const arr = [54, 22, 14, 64, 95, 85];

//평균 : 모든 점수의 합 / 점수의 개수
let sum = 0; // 계속 써야하는 변수는 루프 바깥쪽에 선언, 잠깐 쓰는 변수는 루프 안쪽에 선언
for (let i = 0; i < arr.length; i++) {
	sum = sum + arr[i]; // = sum += arr[i]
}
console.log(`SUM : ${sum}`);

let avg = (sum / arr.length).toFixed(3); // toFixed(3): 소수점 3번째 자리까지만 출력. arr.length 는 arr배열의 총 길이(숫자의 개수)
console.log("AVG : " + avg); //

//최저 점수 : 1.점수를 배열중 하나의 점수로고정시켜놓고 나머지 점수와 비교하는 식으로 하는방식  2. 한 점수를 정해놓고 그 점수와 비교하는 방식
let min = 101;
for (let i = 0; i < arr.length; i++) {
	const socore = arr[i];
	//만일 score가 min보다 작으면 swap(바꿔줌)
	if (socore < min) {
		min = socore;
	}
}
console.log(`MIN : ${min}`);

//최고
let max = -1;
for (let i = 0; i < arr.length; i++) {
	const socore = arr[i];
	//만일 score가 min보다 작으면 swap(바꿔줌)
	if (socore > max) {
		max = socore; //-> score와 max값을 비교해 크면 그 숫자를  max값에 저장, 54점이 -1보다 크면 max값을 54점으로 스왑, 그다음 22점과 비교 = score < max 이므로 스왑하지않음 14점도 마찬가지 , 64점은 더 크므로 스왑. 이제 max값은 64, 95점과 비교 -> 최종적으로  score는 95점
	}
}
console.log(`MAX : ${max}`);
