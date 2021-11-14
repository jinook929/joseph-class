//최대값 최소값
function maxPrint(arry) {
  let max = -1;
  let min = 1000;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > max) {
      max = arry[i];
    }
    if (arry[i] < min) {
      min = arry[i];
    }
  }
  console.log("Max ===> " + max + " // Min ===> " + min)
  return [max, min];
}

const nums = [1, 2, 5, 3, 6, 7, 9];
const nums2 = [1231, 12566, 745735, 124];
const myMaxNum = maxPrint(nums);
console.log(`Max = ${myMaxNum[0]}, Min = ${myMaxNum[1]}`);
console.log(maxPrint(nums2));

// ----------------------------------------------------------------
// 정해진 범위안에서 숫자 뽑기

function randomNumber(start, end) {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * (end - start + 1)) + start;
    arr.push(rand);
  }
  return arr;
}

console.log(randomNumber(1, 100));
console.log(randomNumber(7, 16));
console.log(randomNumber(12, 13));

// --------------------------------------------------------------
// 중복없는 무작위 숫자 뽑기 (1 ~ 45)
for(let i = 0; i < 10; i++){
  const rand = [];
  while (true) {
    let randomNumber2 = Math.floor(Math.random() * 45) + 1;
    const index = rand.indexOf(randomNumber2);
    if (index >= 0) {
      continue;
    }
    let newLength = rand.push(randomNumber2);
    if (newLength === 6) {
      break;
    }
  }
  console.log(rand);
}
