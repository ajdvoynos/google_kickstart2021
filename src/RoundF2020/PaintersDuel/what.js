const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line1)=>{
    console.log(line1)
}).on('line', (line2)=>{
    console.log('line 2: ', line2)
});

