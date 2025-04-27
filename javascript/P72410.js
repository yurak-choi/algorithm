// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    let answer = new_id
        .toLowerCase() // 1
        .replace(/[^a-z\d-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
    
    if (answer === '') answer = 'a' // 5
    
    if (answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/g, '') // 6
    else if (answer.length <= 2) answer = answer.padEnd(3, answer[answer.length - 1]) // 7
    
    return answer;
}
