// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(n) {
    if (n <= 1) return false
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

function solution(n, k) {
    let answer = 0;
    
    n.toString(k).split('0').forEach(n => {
        if (isPrime(+n)) answer++
    })
    return answer;
}
