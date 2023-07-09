const expect = require('chai');
expect.should();

describe('String prototype toAlternatingCase', () => {
  it('should return a string', () => {
    expect('hello world'.toAlternatingCase()).should.be.a('string');
  });
});
