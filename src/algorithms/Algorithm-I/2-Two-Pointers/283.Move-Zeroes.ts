// /**
//  Do not return anything, modify nums in-place instead.
//  */
// function moveZeroes(nums: number[]): void {
//     const { length } = nums;
//     let numsClone: (number | null)[] = nums.slice();

//     for (let numIndex in numsClone) {
//         if (numsClone[numIndex] === 0) {
//             numsClone[numIndex] = null;
//             numsClone.push(0);
//         }
//     }

//     numsClone = numsClone.filter(num => num !== null);
//     nums.splice(0, length, ...(numsClone as number[]));
// }
