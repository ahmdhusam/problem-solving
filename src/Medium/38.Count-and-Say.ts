function countAndSay(n: number): string {
    if (n === 1) return '1';

    let say = '11';

    function inner(str: string) {
        const stack: [string, number][] = [];
        for (let i = 0; i < str.length; i++) {
            if (!!stack.length && stack[stack.length - 1][0] === str[i]) {
                stack[stack.length - 1][1]++;
            } else {
                stack.push([str[i], 1]);
            }
        }

        return stack.reduce((acc, [str, count]) => (acc += `${count}${str}`), '');
    }

    while (n > 2) {
        say = inner(say);
        n--;
    }

    return say;
}
