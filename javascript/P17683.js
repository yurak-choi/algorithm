// https://school.programmers.co.kr/learn/courses/30/lessons/17683

function convertMelody(m) {
    return m.replace(/[A-Z]#/g, (text) => text[0].toLowerCase())
}

function calculatePlayTime(time1, time2) {
    const [h1, m1] = time1.split(':').map(Number)
    const [h2, m2] = time2.split(':').map(Number)
    return h2 * 60 + m2 - h1 * 60 - m1
}

function solution(m, musicinfos) {    
    let maxPlayTime = 0
    let answer = '(None)';
    m = convertMelody(m)
    
    musicinfos.forEach((info) => {
        let [start, end, title, melody] = info.split(',')
        const playTime = calculatePlayTime(start, end)
        
        melody = convertMelody(melody)
        melody = melody.repeat(Math.floor(playTime / melody.length)) + melody.slice(0, playTime % melody.length)
        
        if (melody.includes(m) && playTime > maxPlayTime) {
            answer = title
            maxPlayTime = playTime
        }
    })
    return answer;
}
