function solution(num_list) {
    console.log('문자열을 입력해주세요 : \n ex) solution([1, 2, 3, 4])');
    let answer = 0;
    let multi = 1;
    if(num_list.length>20) {
        console.log('배열이 너무 깁니다.');
    }
    else if(num_list.length<2) {
        console.log('배열이 너무 짧습니다.');
    }
    else if(num_list.length>=11) {
        for(let i of num_list) {
            answer += i;
        }
        console.log('answer = ', answer);
        return answer;
    }
    else if(num_list.length<=10) {
        for(let i=0; i<num_list.length; i++) {
            multi = multi * num_list[i];
        }
        answer = multi;
        console.log('answer = ', answer);
        return answer;
    }
}

// 배열의 값을 입력받고 배열의 길이가 11이상이면 모든 원소의 합을, 10이하이면 모든 원소의 곱을 출력.
// 합연산에서 i를 num_list의 원소로 선언후 합산.
// 곱연산에서 만약 multi가 0이라면 곱을 할때마다 0만 나오므로 1로 선언,
// 이후 num_list.length의 길이-1만큼 num_list의 모든 인덱스의 원소를 곱해서 answer로 return


function solution(num_list) {
    let multi = 1;
    let answer = num_list.reduce((accumulator, currentNumber) => accumulator + currentNumber);
    if(num_list.length>20) {
        console.log('배열이 너무 깁니다.');
    }
    else if(num_list.length<2) {
        console.log('배열이 너무 짧습니다.');
    }
    else if(num_list.length>=11) {
        console.log('answer = ', answer);
        return answer;
    }
    else if(num_list.length<=10) {
        answer = 0;
        for(let i=0; i<num_list.length; i++) {
            multi = multi * num_list[i];
        }
        answer = multi;
        return answer;
    }
}

// 배열의 값을 입력받고 배열의 길이가 11이상이면 모든 원소의 합을, 10이하이면 모든 원소의 곱을 출력.
// 곱하기는 실패. 배열의 합산에서 reduce()함수 사용
// const answer = num_list.reduce((accumulator, currentNumber) => accumulator + currentNumber); 사용
// accumlator = 합. currentNumber은 현재 숫자. 배열 인덱스 0부터 돌면서 accumlator