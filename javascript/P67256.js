// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    const keypadCoords = [
        [3, 1],
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ]
    let nowLeft = [3, 0]
    let nowRight = [3, 2]
    
    return numbers.map(num => {
        if ([1, 4, 7].includes(num)) {
            nowLeft = keypadCoords[num]
            return 'L'
        } else if ([3, 6, 9].includes(num)) {
            nowRight = keypadCoords[num]
            return 'R'
        } else {
            const nextCoords = keypadCoords[num]
            const leftDistance = Math.abs(nowLeft[0] - nextCoords[0]) + Math.abs(nowLeft[1] - nextCoords[1])
            const rightDistance = Math.abs(nowRight[0] - nextCoords[0]) + Math.abs(nowRight[1] - nextCoords[1])
            
            if (leftDistance < rightDistance || (hand === 'left' && rightDistance === leftDistance)) {
                nowLeft = nextCoords
                return 'L'
            }
            
            nowRight = nextCoords
            return 'R'
        }
    }).join('')
}
