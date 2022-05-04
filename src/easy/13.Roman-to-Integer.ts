// function romanToInt(s: string): number {
//     const romanNumerals = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     const romanNumerals2 = {
//         IV: 4,
//         IX: 9,
//         XL: 40,
//         XC: 90,
//         CD: 400,
//         CM: 900
//     };

//     let sum: number = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (romanNumerals2[s[i] + s[i + 1]]) {
//             sum += romanNumerals2[s[i] + s[++i]];
//             continue;
//         }

//         sum += romanNumerals[s[i]];
//     }

//     return sum;
// }

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); //1994
