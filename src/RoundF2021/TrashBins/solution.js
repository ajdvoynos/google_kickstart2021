const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allLines = [];
rl.on('line', (line)=>{
    allLines.push(line);
}).on('close', ()=>{
    const T = allLines.shift();
    for(let i = 0; i < T; i++){
        let N = allLines.shift();
        let S = allLines.shift();
        trash(i,N,S);
    }
});

function trash(T,N,S){
    let aux = 0;
    let count = 0;
    //Find first 1
    let i = 0;
    for(;S[i] != 1; i++){
        aux++;
    }
    
    //Sum of integers for cases when we start with a house with no trash can (same at the end on a house with no trash can)
    count += aux * (aux + 1) / 2; 
    aux = 0;
    //Increase aux with count of 0's 
    //Increase count when a 1 is found and reset 0's
    for (;i < N; i++) {
        if(S[i] == 1){
            if(aux == 0){
                continue;
            }else{
                if(aux % 2 !== 0){
                    count += Math.pow((aux+1) / 2, 2);
                }else{
                    aux = aux / 2;
                    count += aux * aux + aux;
                }
            }
            aux = 0;
        }else {
            aux++;
        }
    }
    if(aux != 0){
        //Sum of integers again
        count += aux * (aux + 1) / 2;
    }
    let ret = `Case #${T+1}: ${count}`;
    console.log(ret)
}