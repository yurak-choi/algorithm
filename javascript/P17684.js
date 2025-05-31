// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
    const answer = []
    const dictionaryMap = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((w, i) => [w, i + 1]))
    
    let dictionaryMaxLength = 1
    let sliceIndex = dictionaryMaxLength
    
    while (msg.length) {
        const w = msg.slice(0, sliceIndex)
        const dictionaryNum = dictionaryMap.get(w)
        
        if (!dictionaryNum) {
            sliceIndex--
            continue
        }
        
        answer.push(dictionaryNum)
        msg = msg.slice(sliceIndex)
        
        const wc = w + msg[0]
        dictionaryMap.set(wc, dictionaryMap.size + 1)
        
        if (dictionaryMaxLength < wc.length) dictionaryMaxLength = wc.length
        
        sliceIndex = dictionaryMaxLength
    }
    
    return answer
}
