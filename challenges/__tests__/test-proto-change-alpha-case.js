const chai = require('chai');
chai.should();

describe('String prototype toAlternatingCase', () => {
  it('should return a string', () => {
    'hello world'.toAlternatingCase().should.be.a('string');
  });
});
