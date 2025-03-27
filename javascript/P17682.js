// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    const POINT_CONSTANT = { 'S': 1, 'D': 2, 'T': 3, '*': 2, '#': -1 }
    const pointSetList = dartResult.match(/\d+[SDT][*#]?/g)
    const result = []
    
    pointSetList.forEach((pointSet, i) => {
        const [point, bonus, option] = pointSet.match(/\d+|[SDT]|[*#]/g)
        result[i] = Math.pow(point, POINT_CONSTANT[bonus]) * (POINT_CONSTANT[option] || 1)
        
        if (option === '*' && i - 1 >= 0) {
            result[i - 1] = result[i - 1] * 2
        }
    })
    
    return result[0] + result[1] + result[2];
}
