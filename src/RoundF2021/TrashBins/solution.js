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
    let trashFound = false;
    for (let i = 0; i < N; i++) {
        if(S[i] == 1){
            if(aux == 0){
                trashFound = true;
                continue;
            }else{
                if(!trashFound){
                    count += (aux*(aux+1))/2;
                }else{
                    if(aux % 2 == 0){
                        aux = aux / 2;
                    }else{
                        aux = (aux-1) / 2;
                        count++;
                    }
                    count += (aux*(aux+1))
                }
            }
            aux = 0;
            trashFound = true;
        }else {
            aux++;
        }
    }
    if(aux != 0){
        count += (aux*(aux+1))/2;
    }
    let ret = `Case #${T+1}: ${count}`;
    console.log(ret)
}