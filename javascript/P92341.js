// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
    const LAST_TIME = 23 * 60 + 59
    const timeMap = records.reduce((acc, cur) => {
        let [time, carNumber, history] = cur.split(' ')
        
        const [h, m] = time.split(':')
        time = +h * 60 + +m
        
        let parkingTime = acc.get(carNumber) || 0
        if (history === 'IN') parkingTime += LAST_TIME - time
        else parkingTime -= LAST_TIME - time
        
        return acc.set(carNumber, parkingTime)
    }, new Map())

    return [...timeMap.keys()].sort().map(carNumber => {
        const additionalTime = timeMap.get(carNumber) - fees[0]

        if (additionalTime < 0) return fees[1]
        
        return fees[1] + Math.ceil(additionalTime / fees[2]) * fees[3]
    })
}
