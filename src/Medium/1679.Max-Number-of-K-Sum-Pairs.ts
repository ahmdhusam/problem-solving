// function maxOperations(nums: number[], k: number): number {
//     let operationsLength = 0;
//     let obj: any = {};

//     for (const i in nums) {
//         if (obj[k - nums[i]]) {
//             operationsLength++;
//             obj[k - nums[i]] = obj[k - nums[i]] - 1;
//         } else if (!obj[nums[i]] && nums[i] < k) {
//             obj[nums[i]] = 1;
//         } else if (obj[nums[i]]) {
//             obj[nums[i]]++;
//         }
//     }

//     obj = null;

//     return operationsLength;
// }
