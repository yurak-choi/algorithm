// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    return arr1.map((n1, i) => {
        let orNum = n1 | arr2[i]
        let index = 0
        const array = new Array(n).fill(' ')

        while (orNum > 0) {
            if (orNum % 2 === 1) array[index] = '#'
            orNum = Math.floor(orNum / 2) 
            index++
        }

        return array.reverse().join('')
    })
}

// 내장 함수(toString)를 사용한 다른 사람들의 풀이
function solution(n, arr1, arr2) {
    return arr1.map((n1, i) => {
        return (n1 | arr2[i]).toString(2).padStart(n, '0').replace(/0|1/g, s => +s ? '#' : ' ')
    })
}
