// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
    const gemsSortCount = new Set(gems).size
    const gemsMap = new Map()
    let result = [1, gems.length]
    
    for (let i = 0; i < gems.length; i++) {
        gemsMap.delete(gems[i])
        gemsMap.set(gems[i], i)
        
        if (gemsMap.size === gemsSortCount) {
            const first = gemsMap.values().next().value
            if (i - first < result[1] - result[0]) result = [first + 1, i + 1]
            if (i - first === gemsSortCount - 1) break
        }
    }
    return result
}
