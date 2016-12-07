
function getKeyCode(instructions){
  let one = {
    U: function(){
      pointer = one;
    },
    D: function(){
      pointer = three;
    },
    R: function(){
      pointer = one;
    },
    L: function(){
      pointer = one;
    },
    value: 1,
  }
  let two = {
    U: function(){
      pointer = two;
    },
    D: function(){
      pointer = six;
    },
    R: function(){
      pointer = three;
    },
    L: function(){
      pointer = two;
    },
    value: 2,
  }
  let three = {
    U: function(){
      pointer = one;
    },
    D: function(){
      pointer = seven;
    },
    R: function(){
      pointer = four;
    },
    L: function(){
      pointer = two;
    },
    value: 3,
  }
  let four = {
    U: function(){
      pointer = four;
    },
    D: function(){
      pointer = eight;
    },
    R: function(){
      pointer = four;
    },
    L: function(){
      pointer = three;
    },
    value: 4,
  }
  let five = {
    U: function(){
      pointer = five;
    },
    D: function(){
      pointer = five;
    },
    R: function(){
      pointer = six;
    },
    L: function(){
      pointer = five;
    },
    value: 5,
  }
  let six = {
    U: function(){
      pointer = two;
    },
    D: function(){
      pointer = A;
    },
    R: function(){
      pointer = seven;
    },
    L: function(){
      pointer = five;
    },
    value: 6,
  }
let seven = {
    U: function(){
      pointer = three;
    },
    D: function(){
      pointer = B;
    },
    R: function(){
      pointer = eight;
    },
    L: function(){
      pointer = six;
    },
    value: 7,
  }
  let eight = {
    U: function(){
      pointer = four;
    },
    D: function(){
      pointer = C;
    },
    R: function(){
      pointer = nine;
    },
    L: function(){
      pointer = seven;
    },
    value: 8,
  }
  let nine = {
    U: function(){
      pointer = nine;
    },
    D: function(){
      pointer = nine;
    },
    R: function(){
      pointer = nine;
    },
    L: function(){
      pointer = eight;
    },
    value: 9,
  }
  let A = {
    U: function(){
      pointer = six;
    },
    D: function(){
      pointer = A;
    },
    R: function(){
      pointer = B;
    },
    L: function(){
      pointer = A;
    },
    value: "A",
  }
  let B = {
    U: function(){
      pointer = seven;
    },
    D: function(){
      pointer = D;
    },
    R: function(){
      pointer = C;
    },
    L: function(){
      pointer = A;
    },
    value: "B",
  }
  let C = {
    U: function(){
      pointer = eight;
    },
    D: function(){
      pointer = C;
    },
    R: function(){
      pointer = C;
    },
    L: function(){
      pointer = B;
    },
    value: "C",
  }
let D = {
    U: function(){
      pointer = B;
    },
    D: function(){
      pointer = D;
    },
    R: function(){
      pointer = D;
    },
    L: function(){
      pointer = D;
    },
    value: "D",
  }

  let pointer = five;
  let instLen = instructions.length;
  let combo = []
  for(let i = 0; i < (instLen); i++){
    let doIt = instructions.charAt(i);
    if (doIt.match(/\s/g)){
      combo.push(pointer.value);
      // console.log('pointer', pointer)
    }
    else {
      pointer[doIt]();
    }
  }
  combo.push(pointer.value);
  return combo.join('');
}

module.exports.solution = getKeyCode;