function solution(lottos, win_nums) {
    const ranknum = { 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1 };
    const answer = [];
    let zerocount = 0;
    let min = 0;
    
    for(let i of win_nums) {
      if(lottos.includes(i)) {
        min += 1;
      }
    }
    
    for(let i = 0; i < 6; i++) {
      if(lottos[i] === 0) {
        zerocount += 1;
      } 
    }
    
    const max = min + zerocount;
    
    for(let i = 1; i < 7; i++) {
      if(ranknum[i] === max) {
        answer.push(i);
      } 
      if(ranknum[i] === min) {
        answer.push(i);
      }
    }
    
    if ( max === 0 ) {
      answer.push(6);
    } 
      
    if ( min === 0 ) {
      answer.push(6);
    }
      
    return answer;
  }