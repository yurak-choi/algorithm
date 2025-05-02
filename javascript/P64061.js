// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    const rowIndex = Array(board.length).fill(0)
    const stackArr = []
    let count = 0
    
    moves.forEach(move => {
        const col = move - 1
        if (rowIndex[col] === board.length) return
        
        while (!board[rowIndex[col]][col]) rowIndex[col]++
        
        const peekItem = stackArr[stackArr.length - 1]
        const newItem = board[rowIndex[col]++][col]

        if (peekItem === newItem) {
            stackArr.pop()
            count++
        } else {
            stackArr.push(newItem)   
        }
    })
    return count * 2
}
