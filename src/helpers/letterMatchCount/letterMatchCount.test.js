import letterMatchCount from './letterMatchCount';

describe('letterMatchCount tests', () => {
  const secretWord = 'hello';

  it('returns correct count when there are no matching letters', () => {
    const matchCount = letterMatchCount('tast', secretWord);
    expect(matchCount).toBe(0);
  });
  
  it('returns the correct count there are 3 matching letters', () => {
    const matchCount = letterMatchCount('hleas', secretWord);
    expect(matchCount).toBe(4);
  });
  
  it('returns correct count when there duplicate letters', () => {
    const matchCount = letterMatchCount('teest', secretWord);
    expect(matchCount).toBe(1);
  });
});