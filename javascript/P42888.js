// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    const ACTION_TEXT = {
        Enter: '들어왔습니다.',
        Leave: '나갔습니다.'
    }
    
    const nicknameMap = new Map()
    const answer = [];
    
    return record
        .reduce((acc, cur) => {
            const [action, id, nickname] = cur.split(' ')
            
            if (action !== 'Leave') nicknameMap.set(id, nickname)
            if (action !== 'Change') acc.push([id, action])

            return acc
        }, [])
        .map(([id, action]) => `${nicknameMap.get(id)}님이 ${ACTION_TEXT[action]}`)
}
