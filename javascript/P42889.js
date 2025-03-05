// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    const lastStageMap = new Map()
    stages.forEach(stage => {
        const count = lastStageMap.get(stage) || 0
        lastStageMap.set(stage, count + 1)
    })
    
    return new Array(N).fill(0)
        .map((_, i) => {
            const now = i + 1
            let challenge = 0
            for (let j = now; j <= N; j++) {
                challenge += lastStageMap.get(j) || 0
            }
            return [now, (lastStageMap.get(now) || 0) / challenge]
        })
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])
}
