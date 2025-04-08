// https://school.programmers.co.kr/learn/courses/30/lessons/389479

function solution(players, m, k) {
    const serverMap = new Map()
    
    return players.reduce((acc, cur, i) => {
        if (cur >= m) {
            const addCount = Math.floor(cur / m) - (serverMap.get(i) || 0)
            
            if (addCount > 0) {
                for (let j = i + 1; j < i + k; j++) {
                    serverMap.set(j, (serverMap.get(j) || 0) + addCount)
                }
                return acc + addCount
            }
        }
        return acc
    }, 0)
}
