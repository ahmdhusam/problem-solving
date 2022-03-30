// import search from './704.Binary-Search';
// function searchInsert(nums: number[], target: number, firstTime = true): number {
//     const indexOfTarget: number = search([...nums], target);

//     if (!firstTime && indexOfTarget !== -1) {
//         return indexOfTarget + 1;
//     }

//     if (target < nums[0]) {
//         return 0;
//     }

//     if (indexOfTarget !== -1) {
//         return indexOfTarget;
//     } else {
//         return searchInsert(nums, target - 1, false);
//     }
// }
