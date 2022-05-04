// function twoSum(nums: number[], target: number): number[] | void {
//     let start = 0,
//         end = nums.length - 1,
//         left = nums[start],
//         right = nums[end];

//     while (start < nums.length - 1) {
//         if (start === end) {
//             start++;
//             end = nums.length - 1;
//             left = nums[start];
//             right = nums[end];
//             continue;
//         }

//         if (left + right === target) return [start, end];

//         end--;
//         right = nums[end];
//     }
// }
