function solution(s) {
    let arr = s.split('');
    let sor = arr.sort();
    let res = sor.reverse();
    const answer = res.join('');
    return answer;   
}

 // 문자열 내림차순으로 배치하기
 // 문자열 뒤집기