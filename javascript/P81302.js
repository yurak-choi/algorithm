// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
    return places.map((place, k) => {
        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[i].length; j++) {
                if (place[i][j] !== 'P') continue
                
                if (place[i + 1]?.[j] === 'P') return 0
                if (place[i][j + 1] === 'P') return 0
                
                if (place[i + 1]?.[j] === 'O' && place[i + 2]?.[j] === 'P') return 0
                if (place[i][j + 1] === 'O' && place[i][j + 2] === 'P') return 0
                
                if ((place[i + 1]?.[j] === 'O' || place[i][j + 1] === 'O') && place[i + 1]?.[j + 1] === 'P') return 0
                if ((place[i + 1]?.[j] === 'O' || place[i][j - 1] === 'O') && place[i + 1]?.[j - 1] === 'P') return 0
            }
        }
        return 1
    })
}
