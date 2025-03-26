// https://school.programmers.co.kr/learn/courses/30/lessons/67258

// 1차 답안: 효율성 테스트 실패...
function solution(gems) {
    const gemsSet = new Set(gems)
    let l = 1
    let r = gemsSet.size
    let result = [1, gems.length]
    
    while (r <= gems.length) {
        const rangeSet = new Set(gems.slice(l - 1, r))
        if (rangeSet.size < gemsSet.size) {
            r++
            continue
        }
        
        const nowLeftIndex = l++
        const nowDiff = r - nowLeftIndex
        if (nowDiff < result[1] - result[0]) {
            result = [nowLeftIndex, r]
        }
        
        if (nowDiff === gemsSet.size - 1) break
    }
    
    return result;
}

// 2차 답안
function solution(gems) {
    const gemsSortCount = new Set(gems).size
    const gemsMap = new Map([[gems[0], 1]])

    let l = 1
    let r = 1
    let result = [1, gems.length]
    
    while (r <= gems.length) {
        if (gemsMap.size < gemsSortCount) {
            gemsMap.set(gems[r], (gemsMap.get(gems[r++]) || 0) + 1)
            continue
        }
        
        const nowL = l++
        if (r - nowL < result[1] - result[0]) result = [nowL, r]
        
        if (r - nowL === gemsSortCount - 1) break
        
        const gemCount = gemsMap.get(gems[nowL - 1])
        if (gemCount <= 1) gemsMap.delete(gems[nowL - 1])
        else gemsMap.set(gems[nowL - 1], gemCount - 1)
    }
    
    return result;
}

// 다른 사람 풀이 보고 적용한 답안
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
