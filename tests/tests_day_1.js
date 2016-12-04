import {expect} from 'chai';

import {solution} from '../day-1';

describe('test taxi distance logic', ()=>{
  it('with R1 will return 1', () => {
    const r1solve = solution("R1");
    expect(r1solve).to.equal(1);
  })
  it('with R4, R3, L3, L2, L1 will return 7', () => {
    const first5solve = solution("R4, R3, L3, L2, L1");
    expect(first5solve).to.equal(7);
  })
});
