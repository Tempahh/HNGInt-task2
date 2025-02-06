
export function isPrime(num) {
    if (num <= 1) return false
    if(num == 2) return true
    if(num % 2 == 0) return false

    for (let i = 3; i <= Math.sqrt(num); i += 2){
        if (num % i == 0) return false
    }

    return true
}

export function isPerfect(num) {
    let sum = 1
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            sum += i
            if (i != num / i) sum += num / i
        }
    }

    return sum == num
}

export function isArmstrong(num) {
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num) || num < 0) return false;

    const numStr = num.toString();
    const numLen = numStr.length;
    const sum = numStr.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), numLen), 0);
    return sum === num ? 'armstrong' : undefined;
}

export function numParity(num) {
    return num % 2 == 0 ? 'even' : 'Odd'
}

export function totalSum(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum
}