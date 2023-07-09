const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

require('../string-proto-toAlternatingCase');

describe('String prototype toAlternatingCase', () => {
  it('expect a string return', () => {
    expect('hello world'.toAlternatingCase()).to.be.a('string');
  });
  it('should return a string', () => {
    'hello world'.should.be.a('string');
  });
  it('return type is String', () => {
    assert.typeOf('hello world'.toAlternatingCase(), 'string');
  });
  it('expect all upper case to return all lower case', () => {
    expect('HELLO WORLD'.toAlternatingCase()).to.equal('hello world');
  });
  it('should return all uppercase when all lowercase is input', () => {
    'hello world'.toAlternatingCase().should.equal('HELLO WORLD');
  });
  it('should handle mixed case input', () => {
    'hElLo WoRlD'.toAlternatingCase().should.equal('HeLlO wOrLd');
  });
  it('should not change numbers', () => {
    '1234567890'.toAlternatingCase().should.equal('1234567890');
  });
  it('expect only alpha changed when mixed with numbers and special characters', () => {
    expect('h3ll0, w0rld!'.toAlternatingCase()).to.equal('H3LL0, W0RLD!');
  });
  it('returns special characters unchanged', () => {
    assert.equal(
      '!@#$%^&*-_=+~`,./<>?;( )'.toAlternatingCase(),
      '!@#$%^&*-_=+~`,./<>?;( )'
    );
  });
  it('should not edit the original string (should be pure function)', () => {
    const stringInput = 'Hello World';
    const stringOutput = stringInput.toAlternatingCase();
    assert.notStrictEqual(stringInput, stringOutput);
    assert.isTrue(stringInput !== stringOutput);
  });
});
