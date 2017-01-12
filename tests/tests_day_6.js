import {expect} from 'chai';
import {solution, data, testData} from '../day-6';

describe('day 6 - repetition', ()=>{
  // it('rejects password', ()=>{
  //   expect(solution('abc')).to.not.equal('password');
  // })
  it('works with demo data', ()=>{
    expect(solution(testData)).to.equal('easter');
  })
  it('gives me the answer to the puzzle', ()=>{
    console.log(solution(data));
    expect(solution(data)).to.be.ok;
  })
})