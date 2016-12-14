import {expect} from 'chai';
import {solution, data} from '../day-4';

describe('day 4 - real rooms', ()=>{
  it('rejects totally-real-room-200[decoy]', ()=>{
    expect(solution('totally-real-room-200[decoy]')).to.equal(0);
  })
  it('accepts a-b-c-d-e-f-g-h-987[abcde] as a real room', ()=>{
    expect(solution('a-b-c-d-e-f-g-h-987[abcde]')).to.equal(987);
  })
  it('accepts aaaaa-bbb-z-y-x-123[abxyz] as a real room', ()=>{
    expect(solution('aaaaa-bbb-z-y-x-123[abxyz]')).to.equal(123);
  })
  it('adds solutions together', ()=>{
    expect(solution(`aaaaa-bbb-z-y-x-123[abxyz]
      a-b-c-d-e-f-g-h-987[abcde]`)).to.equal(1110);
  })
  it('gives me the answer to the puzzle', ()=>{
    console.log(solution(data));
    expect(solution(data)).to.be.ok;
  })
})