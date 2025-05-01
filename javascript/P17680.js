// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    const cache = []
    let result = 0
    cities.forEach(city => {
        const lowerCity = city.toLowerCase()
        const index = cache.indexOf(lowerCity)
        
        if (index === -1) {
            result += 5
            if (cache.length === cacheSize) cache.shift()
        }
        else {
            result++
            cache.splice(index, 1)
        }
        cache.push(lowerCity)
    })
    
    return result;
}
