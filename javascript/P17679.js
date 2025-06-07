// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
    const rearranged = []
    for (let i = 0; i < n; i++) {
        rearranged[i] = []
        
        for (let j = m - 1; j >= 0; j--) {
            rearranged[i].push(board[j][i])
        }
    }
    
    let answer = 0
    while (true) {
        const equalArray = []
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < rearranged[i].length - 1; j++) {
                if (
                    rearranged[i][j] === rearranged[i][j + 1]
                    && rearranged[i][j] === rearranged[i + 1][j]
                    && rearranged[i][j] === rearranged[i + 1][j + 1]
                ) {
                    equalArray.push([i, j])
                }
            }
        }
        
        if (equalArray.length === 0) break
        
        equalArray.forEach(([i, j]) => {
            rearranged[i][j] = null
            rearranged[i][j + 1] = null
            rearranged[i + 1][j] = null
            rearranged[i + 1][j + 1] = null
        })
        
        for (let i = 0; i < n; i++) {
            rearranged[i] = rearranged[i].filter(element => {
                if (element) return true
                answer++
                return false
            })
        }
    }
    return answer
}
