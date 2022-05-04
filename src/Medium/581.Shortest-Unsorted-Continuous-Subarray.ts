// function findUnsortedSubarray(nums: number[]): number {
//     const numsSortedClone = nums.map(a => a).sort((a, b) => a - b);
//     const notEqual = [];

//     for (let i in nums) {
//         if (nums[i] !== numsSortedClone[i]) {
//             notEqual.push(nums[i]);
//         }
//     }

//     const start = nums.indexOf(notEqual[0]);
//     const end = nums.lastIndexOf(notEqual[notEqual.length - 1]);

//     return start !== -1 ? end - start + 1 : 0;
// }
