// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
    return files.sort((a, b) => {
        const aNumber = a.match(/\d{1,5}/)
        const bNumber = b.match(/\d{1,5}/)
        
        const aHead = a.slice(0, aNumber.index).toLowerCase()
        const bHead = b.slice(0, bNumber.index).toLowerCase()
        
        if (aHead === bHead) {
            return +aNumber - +bNumber
        }
        return aHead.localeCompare(bHead)
    })
}
