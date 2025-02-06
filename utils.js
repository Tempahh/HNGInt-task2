
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
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num) || num <= 1) return false;

    let sum = 1;
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}

export function isArmstrong(num) {
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num)) {
      return false;
    }
  
    const numberAsString = Math.abs(num).toString();
    const numberLength = numberAsString.length;
    const sum = numberAsString.split('').reduce((acc, digit) => {
      return acc + Math.pow(parseInt(digit, 10), numberLength);
    }, 0);
  
    return sum === Math.abs(num) ? ['armstrong']: [];
}


export function numParity(num) {
    return num % 2 == 0 ? 'even' : 'odd'
}

export function totalSum(num) {
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num)) return 0;

    return Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}
