"use strict";

function getTaxiDistance (input){
  //input is a string of L1, L2, etc
  const inputArray = input.split(", ");
  // direction in degrees from origin.
  let direction = 0;
  let hdistance = 0;
  let vdistance = 0;
  // break array of moves into pairs relative direction (in degrees) and distance
  const moves = 
    inputArray.map(function(item){
      let dir = item[0];
      //clockwise or counter 90 degrees
      let dirCalc = dir === "L" ? -90 : 90;
      let dist = Number(item.substring(1));
      return [dirCalc, dist];
    })
  const movesLen = inputArray.length;

  for (let i=0; i < movesLen; i ++){
    direction += moves[i][0];
    let dirMult;
    //if we're moving horizontally, sin is 0; cos is either 1 or -1. multiply by distance traveled for relative distance compared to starting point.
      let hMult = Math.round(Math.cos(direction* Math.PI/180));
      hdistance += hMult * moves[i][1];
    //if moving vertically, up = 1, down = -1.
      let vMult = Math.round(Math.sin(direction* Math.PI/180));
      vdistance += vMult * moves[i][1];
  }
  let distance = Math.abs(vdistance) +  Math.abs(hdistance);
  return distance;
}

module.exports.solution = getTaxiDistance;