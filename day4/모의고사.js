function solution(answers) {
    const numone = [1,2,3,4,5];
    const numtwo = [2,1,2,3,2,4,2,5];
    const numthr = [3,3,1,1,2,2,4,4,5,5];
    const answer = [];

    let ansone = 0;
    let anstwo = 0;
    let ansthr = 0;

    for(i = 0; i < answers.length; i++) {
      numone.push(numone[i]);
      numtwo.push(numtwo[i]);
      numthr.push(numthr[i]);
      if(numone[i] === answers[i]) {
        ansone += 1;
      }
      if(numtwo[i] === answers[i]) {
        anstwo += 1;
      }
      if(numthr[i] === answers[i]) {
        ansthr += 1;
      }
    }
    
    if (Math.max(ansone, anstwo, ansthr) === ansone) {
        answer.push(1);
    } 
    if (Math.max(ansone, anstwo, ansthr) === anstwo) {
        answer.push(2);
    } 
    if (Math.max(ansone, anstwo, ansthr) === ansthr) {
        answer.push(3);
    } 
    return answer;
}