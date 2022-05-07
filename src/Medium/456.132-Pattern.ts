// function find132pattern(nums: number[]) {
//     let p2 = Number.MIN_SAFE_INTEGER;
//     const stack: number[] = [];

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] < p2) {
//             return true;
//         }

//         while (!!stack.length && nums[i] > stack.at(-1)) {
//             p2 = stack.pop()!;
//         }

//         stack.push(nums[i]);
//     }

//     return false;
// }
