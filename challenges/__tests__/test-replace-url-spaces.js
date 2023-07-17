import replaceUrlSpaces from '../replace-url-spaces';

describe('replaceUrlSpaces', () => {
  it('must return a string', () => {
    expect(typeof replaceUrlSpaces('')).toBe('string');
  });

  it('must return an empty string when input is not a string', () => {
    expect(replaceUrlSpaces(123)).toBe('');
  });

  it("must return '%20' when input in a single whitespace character", () => {
    expect(replaceUrlSpaces(' ')).toBe('%20');
  });

  it('must return http://www.domain.net/my%20favorite%20page.html when input is http://www.domain.net/my favorite page.html', () => {
    expect(
      replaceUrlSpaces('http://www.domain.net/my favorite page.html')
    ).toBe('http://www.domain.net/my%20favorite%20page.html');
  });

  it('function must be pure and return a new string instead of mutating the input string', () => {
    const input = 'http://www.domain.net/my favorite page.html';
    const expected = 'http://www.domain.net/my%20favorite%20page.html';
    const output = replaceUrlSpaces(input);
    //use expect and Object.is() to compare object references
    expect(Object.is(output, expected)).toBe(false);
  });
});
