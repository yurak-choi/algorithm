// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    const tupleSet = new Set()
    
    s.match(/\d+[,\d+]*/g).sort((a, b) => a.length - b.length).forEach(tuple => {
        tuple.split(',').forEach(num => tupleSet.add(+num))
    })
    
    return [...tupleSet]
}
