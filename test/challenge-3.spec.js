const { expect } = require('chai');
const { diffArrays } = require('../challenge-3/challenge');

describe('Challenge 3', () => {
  it('should return values in a and not in b', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    [1,2,3,4].forEach(item => {
      expect(result).to.include(item);
    });
  });
  it('should return values in b and not in a', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    [6,7,8,9].forEach(item => {
      expect(result).to.include(item);
    })
  });
  it('should not return values in a and b', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.not.include(5);
  });
  it('should return return array 1,2,3,4,6,7,8,9', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal([1, 2, 3, 4, 6, 7, 8, 9]);
  });
});
describe('Challenge 3 additional checks', () => {
  it('should return return mixed array with mutually exclusive values', () => {
    const a = ['a', 'b', 'c', 6, 'd'];
    const b = [5, 6, 'b', 7, 'd', 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal(['a', 'c', 5, 7, 8, 9]);
  });
});


