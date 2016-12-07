import {expect} from 'chai';
import {solution, data} from '../day-3';

describe('day 3 - triangles', ()=>{
  it('rejects 10/5/25', ()=>{
    expect(solution('10 5 25')).to.equal(0);
  })
  it('is cool with 10/5/8', ()=>{
    expect(solution('10 5 8')).to.equal(1);
  })
  it('gives me the answer to the puzzle', ()=>{
    console.log(solution(data));
    expect(solution(data)).to.be.ok;
  })
})