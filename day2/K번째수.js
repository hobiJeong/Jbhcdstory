function solution(array, commands) {
    arrsum = [];
    answer = [];
      
      for (let i = 0; i < commands.length; i++) {
        arrsum = array.slice(commands[i][0] - 1 , commands[i][1]);
        arrsum.sort((a,b) => a-b);
        answer.push(arrsum[commands[i][2] - 1] );
      }
    return answer;
  }

// K번째수를 찾는다.
