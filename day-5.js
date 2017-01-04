var md5 = require("blueimp-md5")


function getPass(input){
  console.log(md5('abc'));
  
}

const testData = `abc`

module.exports.solution = getPass;
module.exports.data = testData;