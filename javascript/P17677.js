// https://school.programmers.co.kr/learn/courses/30/lessons/17677

const checkValidAndGetPlus = ([char1, char2]) => {
    if (char2 < 'a' || char2 > 'z') return 2
    if (char1 < 'a' || char1 > 'z') return 1
    return 0
}

function solution(str1, str2) {
    const formatStr1 = str1.toLowerCase()
    const intersectionCheckMap = {}
    let union = 0
    let i = 0
    
    while (i < str1.length - 1) {
        const str = formatStr1[i] + formatStr1[i + 1]
        const plus = checkValidAndGetPlus(str)
        if (plus > 0) {
            i += plus
            continue
        }
        
        intersectionCheckMap[str] = (intersectionCheckMap[str] || 0) + 1
        union++
        i++
    }
    
    const formatStr2 = str2.toLowerCase()
    let intersection = 0
    i = 0
    
    while (i < str2.length - 1) {
        const str = formatStr2[i] + formatStr2[i + 1]
        const plus = checkValidAndGetPlus(str)
        if (plus > 0) {
            i += plus
            continue
        }
        
        const count = intersectionCheckMap[str]
        if (count > 0) {
            intersection++
            intersectionCheckMap[str] = count - 1
        } else {
            union++
        }
        
        i++
    }

    if (!union) return 65536
    return Math.floor(65536 * intersection / union)
}
