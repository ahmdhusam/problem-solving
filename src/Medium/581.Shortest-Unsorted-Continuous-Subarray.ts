// function findUnsortedSubarray(nums: number[]): number {
//     const numsSortedClone = nums.map(a => a).sort((a, b) => a - b);
//     const notEqualList = [];

//     for (let i in nums) {
//         if (nums[i] !== numsSortedClone[i]) {
//             notEqualList.push(nums[i]);
//         }
//     }

//     const start = nums.indexOf(notEqualList[0]);
//     const end = nums.lastIndexOf(notEqualList.at(-1));

//     return start !== -1 ? end - start + 1 : 0;
// }
