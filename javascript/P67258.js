// https://school.programmers.co.kr/learn/courses/30/lessons/67258

// 효율성 테스트 실패...
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
