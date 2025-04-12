// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const kindCount = new Set(nums).size
    const choiceCount = nums.length / 2
    
    return choiceCount <= kindCount ? choiceCount : kindCount
}
