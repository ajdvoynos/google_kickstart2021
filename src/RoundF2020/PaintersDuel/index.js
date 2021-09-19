//https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff48/00000000003f47fb

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allLines = [];

rl.on('line', (line)=>{
    allLines.push(line);
});

rl.on('close', ()=> {
    const numberOfTestCases = allLines.shift();
    const testCases = [];
    for(let i = 0; i < numberOfTestCases; i++){
        let line = allLines.shift();
        let testCaseNumbers = line.match(/\d+/g);
        let testCase = {
            S: testCaseNumbers[0],
            RA: testCaseNumbers[1],
            PA: testCaseNumbers[2],
            RB: testCaseNumbers[3],
            PB: testCaseNumbers[4],
            C: testCaseNumbers[5],
            underConstruction: []
        };
        for(let j = 0; j < testCase.C; j++){
            let [R,P] = line.match(/\d+/g);
            testCase.underConstruction.push({
                R,
                P
            })
        }
        testCases.push(testCase);
    }
    console.log(testCases);
});