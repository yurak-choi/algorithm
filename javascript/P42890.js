// https://school.programmers.co.kr/learn/courses/30/lessons/42890

function getCombination(arr, k) {
    if (k === 0) return [[]]
  
    const result = []
    
    for (let i = 0; i <= arr.length - k; i++) {
        const tailCombs = getCombination(arr.slice(i + 1), k - 1)
        tailCombs.forEach(comb => result.push([arr[i], ...comb]))
    }
    return result
}

function solution(relation) {
    const indexArr = relation[0].map((_, i) => i)
    const excludes = []
    let answer = 0
    let k = 1

    while (k <= relation[0].length) {
        const combs = getCombination(indexArr, k++)
        const filteredCombs = combs.filter((comb) => {
            return !excludes.some((item) => item.every((element) => comb.includes(element)))
        })
        
        filteredCombs.forEach((comb) => {
            const checkObj = {}
            let count = 0
            
            for (let i = 0; i < relation.length; i++) {
                const key = comb.map((item) => relation[i][item]).join()
                if (checkObj[key]) break
                
                checkObj[key] = true
                count++
            }
            
            if (count === relation.length) {
                excludes.push(comb)
                answer++
            }
        })
    }
    return answer
}
