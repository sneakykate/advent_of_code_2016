var md5 = require("blueimp-md5")

function getPass(input){
  let i = 0;
  let pass = '';
  let checkIfZeros;
  while(checkIfZeros !== '00000' && pass.length < 8 && i < 4000000){
    console.log(checkIfZeros);
    console.log('while loop runs')
    console.log(input + i);
    let nextHash = md5(input + i);
   checkIfZeros = nextHash.slice(0,5);
   
    i++;
    if (checkIfZeros === '00000'){
      pass += nextHash[5];
    }
    console.log(pass);
  }
  console.log('md5 demo', md5('abc3231929'));
  
  return pass;
}

const testData = `abc`;
const realData = `reyedfim`;

module.exports.solution = getPass;
module.exports.data = testData;