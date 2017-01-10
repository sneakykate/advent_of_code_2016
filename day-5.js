var md5 = require("blueimp-md5")

function getPass(input){
  let i = 0;
  let nextHash = md5(input + i);
  let checkIfZeros = nextHash.slice(0,5);
  let pass = '';

  while(checkIfZeros !== '00000' && pass.length < 8){
    i++;
    if (checkIfZeros === '00000'){
      pass += nextHash[5];
    }
  }
  return pass;
}

const testData = `abc`

module.exports.solution = getPass;
module.exports.data = testData;