import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import GuessedWords from './GuessedWords';
import { guessedWordsContext } from '../../context';

const setup = (guessedWords = []) => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
  guessedWordsContext.useGuessedWords = mockUseGuessedWords;
  return shallow(<GuessedWords />)
}

describe('GuessedWords component tests', () => {
  it('renders without error', () => {
    const guessedWords = setup();
    expect(guessedWords.length).toBe(1);
  });

  it('renders instruction when no words have been guessed', async() => {
    const guessedWords = setup();
    const instructions = await findByTestAttr(guessedWords, 'guess-instructions');

    expect(guessedWords.length).toBe(1);
    expect(instructions.text()).toEqual('Try to guess the secret word!');
  });
  
  it('renders a list when words have been guessed', async() => {
    const guessedWords = setup([
        {
          guessedWord: "test",
          letterMatchCount: 3,
        },
        {
          guessedWord: "world",
          letterMatchCount: 1,
        },
      ]);

    const guessedWordsItems = await findByTestAttr(guessedWords, 'guessed-word');
    expect(guessedWordsItems.length).toEqual(2)
  });
});

describe('language picker', () => {
  it('correctly renders guess instructions in english by default', async() => {
    const guessedWords = setup();
    const instructions = await findByTestAttr(guessedWords, 'guess-instructions');
    expect(instructions.text()).toBe('Try to guess the secret word!');
  });
  
  it('correctly renders guess instructions string in emoji', async () => {
    const mockUseContext = jest.fn().mockReturnValue('emoji');
    React.useContext = mockUseContext;
    const guessedWords = setup();
    const instructions = await findByTestAttr(guessedWords, 'guess-instructions');
    expect(instructions.text()).toBe('🤔🤫🔤');
  });
});