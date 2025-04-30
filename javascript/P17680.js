// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    let cache = []
    let result = 0
    cities.forEach(city => {
        const lowerCity = city.toLowerCase()
        const index = cache.findIndex(cache => cache === lowerCity)
        
        if (index === -1) {
            result += 5
            
            if (cache.length < cacheSize) cache = [lowerCity, ...cache]
            else cache = [lowerCity, ...cache.slice(0, cacheSize - 1)]
        }
        else {
            result++
            cache = [lowerCity, ...cache.slice(0, index), ...cache.slice(index + 1, cacheSize)]
        }
    })
    return result;
}
