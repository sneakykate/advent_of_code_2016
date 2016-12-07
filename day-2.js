
function getKeyCode(instructions){
  let one = {
    U: function(){
      pointer = one;
    },
    D: function(){
      pointer = four;
    },
    R: function(){
      pointer = two;
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
      pointer = five;
    },
    R: function(){
      pointer = three;
    },
    L: function(){
      pointer = one;
    },
    value: 2,
  }
  let three = {
    U: function(){
      pointer = three;
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
    value: 3,
  }
  let four = {
    U: function(){
      pointer = one;
    },
    D: function(){
      pointer = seven;
    },
    R: function(){
      pointer = five;
    },
    L: function(){
      pointer = four;
    },
    value: 4,
  }
  let five = {
    U: function(){
      pointer = two;
    },
    D: function(){
      pointer = eight;
    },
    R: function(){
      pointer = six;
    },
    L: function(){
      pointer = four;
    },
    value: 5,
  }
  let six = {
    U: function(){
      pointer = three;
    },
    D: function(){
      pointer = nine;
    },
    R: function(){
      pointer = six;
    },
    L: function(){
      pointer = five;
    },
    value: 6,
  }
let seven = {
    U: function(){
      pointer = four;
    },
    D: function(){
      pointer = seven;
    },
    R: function(){
      pointer = eight;
    },
    L: function(){
      pointer = seven;
    },
    value: 7,
  }
  let eight = {
    U: function(){
      pointer = five;
    },
    D: function(){
      pointer = eight;
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
      pointer = six;
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