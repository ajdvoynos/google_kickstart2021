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
        let [D, N, K] = allLines.shift().split(' ');
        let attractions = [];
        for (let j = 0; j < N; j++){
            let [h,s,e] = allLines.shift().split(' ');
            attractions.push({h,s,e});
        }
        attractions.sort((a,b)=> b.h - a.h);
        let maximumHappiness = 0;
        for(let k=0; k < D; k++){
            maximumHappiness = Math.max(
                maximumHappiness, 
                attractions
                    .filter(x => x.s <= k + 1  && x.e >= k + 1)
                    .slice(0, K)
                    .reduce((acc,curr) => acc + parseInt(curr.h), 0)
            );
        }
        console.log(`Case #${i+1}: ${maximumHappiness}`)
    }
});