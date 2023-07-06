function solution(a,b) {
    
    let answer = 0;
    if ( a > b ) {
        for (b; b<=a; b++) {
            answer += b;
        }
        } else if ( b > a ) {
            for (a; a<=b; a++) {
                answer += a;
            }
        } else {
            answer = a;
        }
    return answer;
}

// a와 b의 사이의 정수를 모두 더한 값 구하기.
// a와 b가 같으면 아무거나 출력