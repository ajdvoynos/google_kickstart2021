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
        let whiteStars = [];
        for (let j = 0; j < N; j++){
            let [x,y] = allLines.shift().split(' ');
            whiteStars.push({x,y});
        }
        let [x,y] = allLines.shift().split(' ');
        let blueStar = {x,y};
        let result = 'IMPOSSIBLE';
        if(N > 2){
            result = 'who knows'    
        }
        console.log(`Case #${i+1}: ${result}`)
    }
});