// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    let result = 0
    let firstWordIndex = 0
    let readCount = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[firstWordIndex]) readCount++
        else readCount--
        
        if (readCount === 0) {
            firstWordIndex = i + 1
            result++
        }
    }
    return readCount > 0 ? result + 1 : result
}
