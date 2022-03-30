// export default function search(nums: number[], target: number): number {
//     const { length } = nums;
//     let start: number = 0;
//     let end: number = length - 1;

//     while (start <= end) {
//         let midIndex: number = Math.floor((end - start) / 2 + start);
//         let mid = nums[midIndex];

//         if (mid === target) {
//             return midIndex;
//         }

//         if (target > mid) {
//             start = midIndex + 1;
//             continue;
//         } else {
//             end = midIndex - 1;
//             continue;
//         }
//     }

//     return -1;
// }
