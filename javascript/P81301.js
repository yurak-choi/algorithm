// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = s;

    for(let i=0; i< numbers.length; i++) {
        result = result.split(numbers[i]).join(i);
    }

    return Number(result);
}
