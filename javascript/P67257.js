// https://school.programmers.co.kr/learn/courses/30/lessons/67257

function calculate(n1, n2, operator) {
    if (operator === '+') return n1 + n2
    if (operator === '-') return n1 - n2
    return n1 * n2
}

function solution(expression) {
    const PRIORITY_ARRAY = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-'],
    ]
    const originOperators = expression.match(/[+*-]/g)
    const originOperands = expression.match(/\d+/g).map(Number)
    
    let answer = 0
    PRIORITY_ARRAY.forEach((priority) => {
        const operators = [...originOperators]
        const operands = [...originOperands]
        
        priority.forEach((p) => {
            while (true) {
                const i = operators.findIndex((o) => o === p)
                if (i === -1) break
                
                operands[i] = calculate(operands[i], operands[i + 1], p)
                operands.splice(i + 1, 1)
                operators.splice(i, 1)
            }
        })
        
        const lastValue = Math.abs(operands[0])
        if (lastValue > answer) answer = lastValue
    })
    
    return answer
}
