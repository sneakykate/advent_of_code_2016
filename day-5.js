var md5 = require("blueimp-md5")

function getPass(input){
  let i = 0;
  let pass = '';
  let checkIfZeros;
  while(checkIfZeros !== '00000' && pass.length < 8){
    console.log(checkIfZeros);
    console.log('while loop runs')
    let nextHash = md5(input + i);
   checkIfZeros = nextHash.slice(0,5);
    i++;
    if (checkIfZeros === '00000'){
      pass += nextHash[5];
    }
  }
  console.log(pass);
  return pass;
}

const testData = `abc`

module.exports.solution = getPass;
module.exports.data = testData;