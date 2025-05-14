// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
    const result = []
    let num = 0
    let count = 0
    
    while (result.length < t) {
        const convertNum = num.toString(n)
        for (let i = 0; i < convertNum.length; i++) {
            if (count++ % m === p - 1) result.push(convertNum[i].toUpperCase())
            if (result.length >= t) break
        }
        num++
    }
    
    return result.join('');
}
