// function twoSum(numbers: number[], target: number): [number, number] {
//     const { length } = numbers;
//     let start = 0;
//     let end = length - 1;

//     while (numbers[start] + numbers[end] !== target) {
//         if (numbers[end] > target || numbers[end] + numbers[start] >= target) {
//             end--;
//         } else {
//             start++;
//         }
//     }

//     return [++start, ++end];
// }
