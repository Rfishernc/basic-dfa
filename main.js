function automaton(A) {
    let q = 1;
    for(let i = 0; i < A.length; i++) {
        switch(q) {
            case 1: if(A[i] === '1') {q = 2}; break;
            case 2: if(A[i] === '0') {q = 3}; break;
            case 3: if(A[i] === '0' || A[i] === '1') {q = 2}; break;
            default: break;
        }
    }
    if(q === 2) {
        return true;
    }
}
