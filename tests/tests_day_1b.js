import {expect} from 'chai';

import {solution} from '../day-1b';

describe('1b - test taxi distance logic', ()=>{
  it('with R1 will return undefined', () => {
    const r1solve = solution("R1");
    expect(r1solve).to.equal('undefined');
  })
    it('with R8, R4, R4, R8 will return 4', () => {
    const eXsolve = solution("R8, R4, R4, R8");
    expect(eXsolve).to.equal(4);
  })
  it('with R9, R10, R2, R8, R5 will return 11', () => {
    const eXInput = `R9, R10, R2, R8, R5`;
    const testSolve = solution(eXInput);
    console.log("solution is", testSolve);
    expect(testSolve).to.equal(11);
  })

  it('solves my puzzle input', () => {
    const puzzleInput = `R4, R3, L3, L2, L1, R1, L1, R2, R3, L5, L5, R4, L4, R2, R4, L3, R3, L3, R3, R4, R2, L1, R2, L3, L2, L1, R3, R5, L1, L4, R2, L4, R3, R1, R2, L5, R2, L189, R5, L5, R52, R3, L1, R4, R5, R1, R4, L1, L3, R2, L2, L3, R4, R3, L2, L5, R4, R5, L2, R2, L1, L3, R3, L4, R4, R5, L1, L1, R3, L5, L2, R76, R2, R2, L1, L3, R189, L3, L4, L1, L3, R5, R4, L1, R1, L1, L1, R2, L4, R2, L5, L5, L5, R2, L4, L5, R4, R4, R5, L5, R3, L1, L3, L1, L1, L3, L4, R5, L3, R5, R3, R3, L5, L5, R3, R4, L3, R3, R1, R3, R2, R2, L1, R1, L3, L3, L3, L1, R2, L1, R4, R4, L1, L1, R3, R3, R4, R1, L5, L2, R2, R3, R2, L3, R4, L5, R1, R4, R5, R4, L4, R1, L3, R1, R3, L2, L3, R1, L2, R3, L3, L1, L3, R4, L4, L5, R3, R5, R4, R1, L2, R3, R5, L5, L4, L1, L1`;
    const finalSolve = solution(puzzleInput);
    console.log("solution is", finalSolve);
    expect(finalSolve).to.be.ok;
  })
});
