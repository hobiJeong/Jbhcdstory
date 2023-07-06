function solution(s) {
    let countp = 0;
    let county = 0;
    let answer = '';
    let arr = s.split('');  
    for (i = 0; i < arr.length; i++) {
      if( arr[i]  === 'p'  ) {
         countp += 1;
         } else if( arr[i]  === 'P' ) {
           countp += 1;
         } else if( arr[i]  === 'y' ) {
           county += 1;
         } else if( arr[i]  === 'Y' ) {
           county += 1;
         } 
    }
    if ( countp === county ) {
      answer = true;
    } else {
      answer = false;
    }
    return answer;
  }
  // 문자열 내 p와 y의 개수
  // p나 P와 y나 Y의 개수를 세서 그 갯수가 같으면 true 다르면 false 출력   