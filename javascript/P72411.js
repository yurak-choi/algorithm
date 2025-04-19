// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
    const courseMap = new Map(course.map(c => [c, new Map()]))
    
    courseMap.forEach((countMap, num) => {
        orders.forEach(order => {
            if (order.length < num) return
            
            order = order.split('').sort()
            const index = Array.from({ length: num }, (_, i) => i)
            
            while (true) {                
                const str = index.map(i => order[i]).join('')
                countMap.set(str, (countMap.get(str) || 0) + 1)

                let i = num - 1;
                while (i >= 0 && index[i] === order.length - num + i) {
                    i--
                }
                
                if (i < 0) break

                index[i]++
                for (let j = i + 1; j < num; j++) {
                    index[j] = index[j - 1] + 1
                }
            }
        })
    })
    
    return [...courseMap.values()].map((countMap) => {
        let max = 0
        let result = []
        
        countMap.forEach((count, str) => {
            if (count < 2 || count < max) return
            if (count > max) result = []
            
            max = count
            result.push(str)
        })
        return result
    }).flat().sort()
}
