function solution(n) {
    const water = '수';
    const park = '박';
    let answer = '';
    for(let i=1; i<=n; i++) {
      if(i % 2 === 1){
       answer += water;
      } else {
       answer += park;
      }
}
        return answer;

}
