// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
    const sizeMap = tangerine.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1)
        return acc
    }, new Map())
    
    let result = 0
    const sortedCount = [...sizeMap.values()].sort((a, b) => b - a)
    
    for (const c of sortedCount) {
        result++
        if (k > c) k -= c
        else break
    }
    return result
}
