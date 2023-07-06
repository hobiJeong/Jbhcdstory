function solution(participant, completion) {
    const answer = {};

    for (let i of participant) {
        answer[i] = 0;
    }

    for (let i of participant) {
        answer[i] += 1;
    }

    for (let i of completion) {
        answer[i] -= 1;
    }
    
    for(let i in answer) {
        if ( answer[i] === 1) {
            return i;
        }
    }
}