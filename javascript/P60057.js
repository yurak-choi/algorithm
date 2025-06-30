// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    let answer = s.length
    
    for (let i = 1; i <= Math.round(s.length / 2); i++) {
        const strArr = [s.slice(0, i)]
        let count = 1
        let k = 0
        
        for (let j = i; j < s.length; j += i) {
            const str = s.slice(j, j + i)
            
            if (strArr[k] === str) {
                count++
            } else {
                if (count > 1) strArr[k] = count + strArr[k]
                strArr.push(str)
                count = 1
                k++
            }
        }
        if (count > 1) strArr[k] = count + strArr[k]
        
        const compressionLength = strArr.join('').length
        if (compressionLength < answer) answer = compressionLength
    }
  
    return answer
}
