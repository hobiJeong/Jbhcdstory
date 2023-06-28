function solution(s) {
    const dex = parseInt(s.length / 2);
    let answer = 0;
    if(s.length % 2 === 1) {
        return answer = [dex];
    }else if(s.length %2 === 0) {
        return answer = [dex] + [dex + 1];
    }

}

// 두 정수 사이의 합
// 문자열을 받아서 홀수라면 가운데 글자를, 짝수라면 가운데 2글자를 출력
// parseInt함수는 숫자 내림을 함. 만약 5글자를 받았다면 
// s.length / 2 를 통해 2.5로 만들고 parseInt로 내림을 해 2가 됨.
// 나머지 연산을 통해 홀수라면 2번째 인덱스의 원소를 출력해 가운데 글자가출력.
// 반대로 짝수는 두글자를 출력하기 때문에 dex와 dex + 1 을 통해 두글자 출력.