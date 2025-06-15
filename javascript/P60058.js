// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function splitString(p) {
    let count = 0
    let i = 0
    let valid = true
    for (; i < p.length; i++) {
        if (p[i] === '(') count++
        else count--
        
        if (count < 0) valid = false
        if (count === 0) break
    }
    return [p.slice(0, i + 1), p.slice(i + 1), valid]
}

function makeValid(u, v, valid) {
    if (valid) return u + v
    
    let convert = ''
    for (let i = 1; i < u.length - 1; i++) {
        if (u[i] === '(') convert += ')'
        else convert += '('
    }
    
    return '(' + v + ')' + convert
}

function solution(p) {
    const [u, v, valid] = splitString(p)
    
    return makeValid(u, v.length === 0 ? '' : solution(v), valid)
}
