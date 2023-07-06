function solution(n) {
    let str = String(n);
    let int = str.split('');
    let nmap = int.map(Number);
    let answer = 0;
        for(let i = 0; i < nmap.length; i++) {
        answer += nmap[i];
        }
    return answer;
}

// String으로 n을 문자열로 변경
// split함수를 통해 배열로 쪼갬
// map함수를 통해 배열을 순회하며 Number를 통해 문자열을 정수로 변경.
// for문을 통해 nmap의 모든 원소를 answer에 더하고 return