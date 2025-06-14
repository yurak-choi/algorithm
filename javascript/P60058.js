// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function splitString(p) {
    let count = 0
    let i = 0
    for (; i < p.length; i++) {
        if (p[i] === '(') count++
        else count--
        
        if (count === 0) break
    }
    return [p.slice(0, i + 1), p.slice(i + 1)]
}

function checkValid(u) {
    let count = 0
    for (let i = 0; i < u.length; i++) {
        if (u[i] === '(') count++
        else count--
        
        if (count < 0) return false
    }
    
    return true
}

function makeValid(u, v) {
    if (checkValid(u)) return u + v
    
    let convert = ''
    for (let i = 1; i < u.length - 1; i++) {
        if (u[i] === '(') convert += ')'
        else convert += '('
    }
    
    return '(' + v + ')' + convert
}

function solution(p) {
    const [u, v] = splitString(p)
    
    return makeValid(u, v.length === 0 ? '' : solution(v))
}
