// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
    
    if ((sum1 + sum2) % 2 === 1) return -1
    
    const totalQueue = [...queue1, ...queue2]
    const target = (sum1 + sum2) / 2
    const maxCount = 3 * queue1.length - 3
    
    let pointer1 = 0
    let pointer2 = queue1.length
    let answer = 0
    
    while (answer <= maxCount) {
        if (sum1 === target) return answer
        
        if (sum1 > target) {
            sum1 -= totalQueue[pointer1++]
            // pointer1 = pointer1 === totalQueue.length ? 0 : pointer1
        } else {
            sum1 += totalQueue[pointer2++]
            // pointer2 = pointer2 === totalQueue.length ? 0 : pointer2
        }
        answer++
    }
    return -1
}
