// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    const tupleMap = new Map()
    
    let num = ''
    for (let i = 2; i < s.length - 1; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            num += s[i]
        } else if (num) {
            tupleMap.set(num, (tupleMap.get(num) || 0) + 1)
            num = ''
        }
    }
    
    // 정규식 이용하는 방법
    // s.match(/\d+/g).forEach(num => {
    //     tupleMap.set(num, (tupleMap.get(num) || 0) + 1)
    // })
    
    const result = []
    tupleMap.forEach((v, k) => {
        result[tupleMap.size - v] = +k
    })
    
    return result
}
