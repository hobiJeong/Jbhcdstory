function solution(numbers) {
    let sum = 0;
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
      for(let j = i + 1; j < numbers.length; j++) {
        sum = numbers[i] + numbers[j];
        answer.push(sum);
      }
    }
    answer = [ ... new Set(answer)];
    answer.sort((a,b) => a-b);
    return answer;
}

// i를 0부터 numbers.length - 1 만큼 돌림. j는 i + 1부터 돌림.
// 배열에 존재하는 모든 수끼리 더하고 sum에 저장 후 answer 배열에 push
// Set은 유니크한 값만을 담을 수 있음. 따라서 배열을 Set형태로 만들어 중복을 제거.
// 그 후 전개연산자 ... 을 통해 중복이 제거된 배열로 재생성 후 return 