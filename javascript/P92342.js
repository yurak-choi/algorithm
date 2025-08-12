// https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
    let answer = Array(11).fill(0);
    let maxDiff = 0;

    function getAnswer(apeachPoint, ryanPoint, count, point, ryanInfo) {
        if (point > 10) {
            const diff = ryanPoint - apeachPoint
            
            if (maxDiff < diff) {
                ryanInfo[10] = n - count
                maxDiff = diff
                answer = ryanInfo
            }
            return
        }
 
        const index = 10 - point
        if (n > count + info[index]) {
            const updatedRyanInfo = [...ryanInfo]
            updatedRyanInfo[index] = info[index] + 1
            
            getAnswer(
                apeachPoint,
                ryanPoint + point,
                count + updatedRyanInfo[index],
                point + 1,
                updatedRyanInfo
            )
        }

        getAnswer(apeachPoint + (info[index] ? point : 0), ryanPoint, count, point + 1, ryanInfo)
    }

    getAnswer(0, 0, 0, 1, answer)

    return maxDiff === 0 ? [-1] : answer
}
