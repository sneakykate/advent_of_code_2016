function getSeconds(data){
  const discs = data.trim().split(/\n+/g);
  console.log('discs', discs);

}

const testData = `Disc #1 has 13 positions; at time=0, it is at position 1.
Disc #2 has 19 positions; at time=0, it is at position 10.
Disc #3 has 3 positions; at time=0, it is at position 2.
Disc #4 has 7 positions; at time=0, it is at position 1.
Disc #5 has 5 positions; at time=0, it is at position 3.
Disc #6 has 17 positions; at time=0, it is at position 5.`

module.exports.solution = getSeconds;
module.exports.data = testData;