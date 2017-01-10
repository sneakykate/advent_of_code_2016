import {expect} from 'chai';
import {solution, data} from '../day-5';

describe('day 5 - passMd5', ()=>{
  it('rejects password', ()=>{
    expect(solution('abc')).to.not.equal('password');
  })
  it('works with demo data', ()=>{
    console.log(solution('abc'));
    expect(solution('abc')).to.equal('18f47a30');
  })
  // it('gives me the answer to the puzzle', ()=>{
  //   console.log(solution(data));
  //   expect(solution(data)).to.be.ok;
  // })
})