function twoSum(numbers: number[], target: number): number[] {
    const { length } = numbers;
    const arrSum = [];
    let sum = 0;

    for (let index = length - 1; index >= 0; index--) {
        if (numbers[index] === 0) {
            arrSum.unshift(index + 1);
            continue;
        }

        if (numbers[index] + sum <= target) {
            arrSum.unshift(index + 1);
            sum += numbers[index];
        }
    }

    if (sum !== target) {
        const newSum = twoSum(numbers, sum);
        arrSum.push(...newSum);
    }
    return arrSum;
}

console.log(twoSum([-3, 3, 4, 90], 0)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
