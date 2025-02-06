
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
    const num_str = num.toString()
    const num_len = num_str.length
    let sum = 0

    for (let i = 0; i < num_len; i++) {
        sum += Math.pow(parseInt(num_str[i]), num_len)
    }

    return sum == num ? 'Armstrong' : ''
}

export function numParity(num) {
    return num % 2 == 0 ? 'Even' : 'Odd'
}

export function totalSum(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum
}