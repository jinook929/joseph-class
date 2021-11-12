// Math.floor(Math.random() * (max - min)) + min; 
const nums = {}

//// Target range of random number : 3 ~ 10

// => 0 ~ 9 : get integers from Math.random()
// for(let i = 0; i < 50; i++){
//     // nums.push(Math.floor(Math.random() * 10))
//     let tmpRandNum = Math.floor(Math.random() * 10)
//     nums[tmpRandNum] = nums[tmpRandNum] + 1 || 1
// }

// 3 ~ 12 : set the start of the range
// for(let i = 0; i < 50; i++){
//     let tmpRandNum = Math.floor(Math.random() * 10 + 3)
//     nums[tmpRandNum] = nums[tmpRandNum] + 1 || 1
// }

// 3 ~ 9 : set the end of the range
// for(let i = 0; i < 50; i++){
//     let tmpRandNum = Math.floor(Math.random() * (10 - 3) + 3)
//     nums[tmpRandNum] = nums[tmpRandNum] + 1 || 1
// }

// 3 ~ 10 : include the maximum integer
for(let i = 0; i < 500000; i++){
    let tmpRandNum = Math.floor(Math.random() * (10 - 3 + 1) + 3)
    nums[tmpRandNum] = nums[tmpRandNum] + 1 || 1
}

console.log(nums)