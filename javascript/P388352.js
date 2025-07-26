// https://school.programmers.co.kr/learn/courses/30/lessons/388352

function getCombination(arr, k) {
    if (k === 0) return [[]]
  
    const result = []
    
    for (let i = 0; i <= arr.length - k; i++) {
        const tailCombs = getCombination(arr.slice(i + 1), k - 1)
        tailCombs.forEach(comb => result.push([arr[i], ...comb]))
    }
    return result
}

function solution(n, q, ans) {
    const zeroSet = new Set(ans.reduce((acc, cur, i) => {
        if (cur === 0) return [...acc, ...q[i]]
        return acc
    }, []))
    
    const arr = Array.from({ length: n }, (_, i) => {
        if (zeroSet.has(i + 1)) return
        return i + 1
    }).filter(Boolean)
    
    const combArr = getCombination(arr, 5)
    
    let answer = 0
    for (const comb of combArr) {
        let i = 0
        for (; i < q.length; i++) {
            if ((10 - new Set([...comb, ...q[i]]).size) !== ans[i]) break
        }
        
        if (i === q.length) answer++
    }
    return answer;
}
