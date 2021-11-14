for (let i = 2; i <= 9; i++) {
	console.log(`< Table of ${i} >`);

	for (let j = 1; j <= 9; j++) {
		console.log(i + " * " + j + " = " + i * j);
	}

	console.log("");
}
//   초기값 i =2, 조건식 (i<=9)이 true이면
//   명령문 실행 ( console.log) -> 그 다음 for문으로 이동
//   -> j 초기값 = 1; i의 값은 2인 상태로 j반복문 실행
//   ->j조건식 true 이면 console.log 실행 -> 그 다음 증감식
//   j의 값 1증가 -> j 조건식이 false일 때 까지 반복 후
//   i반복문으로 돌아가 i 조건식이 false일 때 까지 반복
