function solution(numbers) {
    let answer = 0;
    for (i = 0; i <= 9; i++) {
        if( -1 === numbers.indexOf(i)) {
            answer += i;
        }
    }
    return answer;
}