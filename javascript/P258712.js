// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    const defaultMapObj = Object.fromEntries(friends.map(f => [f, 0]))
    const giftMap = new Map(friends.map(f => [f, {
        index: 0,
        ...defaultMapObj
    }]))
    
    gifts.forEach(gift => {
        const [sender, reciever] = gift.split(' ')
        
        const senderItem = giftMap.get(sender)
        const recieverItem = giftMap.get(reciever)
        
        giftMap.set(sender, {
            ...senderItem,
            [reciever]: senderItem[reciever] + 1,
            index: senderItem.index + 1
        })
        
        giftMap.set(reciever, {
            ...recieverItem,
            [sender]: recieverItem[sender] - 1,
            index: recieverItem.index - 1
        })
    })
    
    let result = 0
    friends.forEach(f => {
        const outerItem = giftMap.get(f)
        let count = 0
        
        friends.forEach(f2 => {
            if (f === f2) return
    
            const innerItem = giftMap.get(f2)
            if (outerItem[f2] > 0 || (outerItem[f2] === 0 && outerItem.index > innerItem.index)) {
                count++
            }
        })

        if (count > result) result = count
    });
    
    return result
}
