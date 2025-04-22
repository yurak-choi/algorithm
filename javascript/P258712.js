// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    const friendIndex = {}
    const giftHistory = []
    const giftIndex = Array(friends.length).fill(0)
    
    friends.forEach((friend, i) => {
        giftHistory[i] = Array(friends.length).fill(0)
        friendIndex[friend] = i
    })
    
    gifts.forEach(gift => {
        const [sender, reciever] = gift.split(' ')
        
        giftHistory[friendIndex[sender]][friendIndex[reciever]] += 1
        giftIndex[friendIndex[sender]] += 1
        giftIndex[friendIndex[reciever]] -= 1
    })
    
    let result = 0
    for (let i = 0; i < friends.length; i++) {
        let count = 0
        
        for (let j = 0; j < friends.length; j++) {
            if (i === j) continue
            
            if (giftHistory[i][j] > giftHistory[j][i]) count++
            else if (giftHistory[i][j] === giftHistory[j][i] && giftIndex[i] > giftIndex[j]) count++
        }
        
        if (count > result) result = count
    }
    
    return result
}
