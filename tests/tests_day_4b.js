import {expect} from 'chai';
import {solution, data} from '../day-4b';

describe('day 4b - real rooms', ()=>{
  it('rejects totally-real-room-200[decoy]', ()=>{
    expect(solution('totally-real-room-200[decoy]')).to.equal(0);
  })
   it('gives 1 as ops-u-i-1[iopsu]', ()=>{
    expect(solution('ops-u-ii-1[iopsu]')).to.equal(1);
  })
  it('gives me the answer to the puzzle', ()=>{
    console.log(solution(data));
    expect(solution(data)).to.be.ok;
  })
})