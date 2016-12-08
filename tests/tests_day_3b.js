import {expect} from 'chai';
import {solution, data} from '../day-3b';

describe('day 3b - triangles', ()=>{
  it('rejects 10/5/25 vertically', ()=>{
    expect(solution(`10 5 25 
     5 25 10 
      25 10 5`)).to.equal(0);
  })
  it('is cool with 10/5/8', ()=>{
    expect(solution(`10 0 0
    5 0 0 
    8 0 0`)).to.equal(1);
  })
  it('gives me the answer to the puzzle', ()=>{
    console.log(solution(data));
    expect(solution(data)).to.be.ok;
  })
})