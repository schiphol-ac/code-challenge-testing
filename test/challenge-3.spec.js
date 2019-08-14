const { expect } = require("chai");
const { diffArrays } = require("../challenge-3/challenge");

describe("Challenge 3", () => {
  it("should return return array 1,2,3,4,6,7,8,9", () => {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal([1, 2, 3, 4, 6, 7, 8, 9]);
  });

  it("should return return array 1,2,3,4,5,6,7,8,9", () => {
    const a = [1, 2, 3, 4];
    const b = [5, 5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return return array 1,2,3,5,6,7,8,9", () => {
    const a = [1, 2, 3, 4, 4];
    const b = [4, 5, 5, 6, 7, 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal([1, 2, 3, 5, 6, 7, 8, 9]);
  });

  it("should return return a mixed array with mutually exclusive values", () => {
    const a = ["a", "b", "c", 6, "d"];
    const b = [5, 6, "b", 7, "d", 8, 9];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal(["a", "c", 5, 7, 8, 9]);
  });

  it("should return an empty array when all values exist in both arrays", () => {
    const a = [1, 1, 2, 3, 4, 4];
    const b = [1, 2, 2, 3, 3, 4, 4];
    const result = diffArrays(a, b);
    expect(result).to.deep.equal([]);
  });
});
