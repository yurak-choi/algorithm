// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    const surveyMap = new Map()
    
    survey.forEach(([t1, t2], i) => {
        const point = choices[i]
        if (point === 4) return
        
        const key = point < 4 ? t1 : t2
        surveyMap.set(key, (surveyMap.get(key) || 0) + Math.abs(point - 4))
    })

    return [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']].map(([t1, t2]) => {
        return (surveyMap.get(t1) || 0) >= (surveyMap.get(t2) || 0) ? t1 : t2
    }).join('');
}
