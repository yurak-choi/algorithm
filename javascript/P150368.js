// https://school.programmers.co.kr/learn/courses/30/lessons/150368

function getCombination(arr, k) {
    if (k === 0) return [[]]
  
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
        const tailCombs = getCombination(arr, k - 1)
        tailCombs.forEach(comb => result.push([arr[i], ...comb]))
    }
    return result
}

function solution(users, emoticons) {
    let answer = [0, 0]
    
    getCombination([10, 20, 30, 40], emoticons.length).forEach((comb) => {
        const prices = emoticons.map((emoticon, i) => emoticon * (100 - comb[i]) / 100)
        
        let plusService = 0
        let purchasePrice = 0
        
        users.forEach((user) => {
            let price = 0
            for (let i = 0; i < prices.length; i++) {
                if (comb[i] >= user[0]) price += prices[i]
            }
            
            if (price >= user[1]) plusService++
            else purchasePrice += price
        })

        if (plusService > answer[0]) answer = [plusService, purchasePrice]
        else if (plusService === answer[0] && purchasePrice > answer[1]) answer = [plusService, purchasePrice]
    })
    
    return answer
}
