// function removeDuplicates(s: string, k: number): string {
//     const charsQty: any = {};

//     for (let i in s.split('')) {
//         if (charsQty[s[i]]) {
//             charsQty[s[i]].push(+i);
//         } else {
//             charsQty[s[i]] = [+i];
//         }

//         if (charsQty[s[i]]?.length === k && charsQty[s[i]]?.at(-k) === +i + 1 - k) {
//             charsQty[s[i]].length -= k;
//         } else if (charsQty[s[i]]?.length > k) {
//             charsQty[s[i]].length -= k;
//         }
//     }

//     return s
//         .split('')
//         .filter(
//             (char, index) => charsQty[char]?.length && charsQty[char].includes(index) && charsQty[char].length !== k
//         )
//         .join('');
// }

// function removeDuplicates(s: string, k: number): string {
//     const stack: [string, number][] = [];

//     for (let char of s.split('')) {
//         if (stack.length && stack.at(-1)[0] === char) {
//             stack.at(-1)[1]++;
//         } else {
//             stack.push([char, 1]);
//         }

//         if (stack.at(-1)[1] === k) {
//             stack.pop();
//         }
//     }

//     let str = '';
//     for (let [char, charsQty] of stack) {
//         str += char.repeat(charsQty);
//     }

//     return str;
// }
