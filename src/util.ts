
function average(numbers: number[]): number {
    const total = numbers.reduce((n1, n2) => n1 + n2, 0);
    return (numbers.length == 0) ? 0 : total / numbers.length;
}

export {average};
