import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/utils';
import { guessedWordsContext, successContext } from '../context';
import { Congrats, Input, GuessedWords } from '../components';

const setup = async({ guessedWords = [], secretWord = 'party' }) => {
  const app = mount(
    <successContext.SuccessProvider>
      <Congrats />
      <guessedWordsContext.GuessedWordsProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </guessedWordsContext.GuessedWordsProvider>
    </successContext.SuccessProvider>
  );

  const inputBox = await findByTestAttr(app, 'input-box');
  const submitBtn =  await findByTestAttr(app, 'submit-button');
  
  guessedWords.forEach(guess => {
    const mockEvent = { target: { value: guess.guessedWord }};
    // add value to input box
    inputBox.simulate('change', mockEvent);
    // simulate click on submit button
    submitBtn.simulate('click', { preventDefault: () => null });
  })

  return app;
}

describe('no words guessed', () => {
  let app;
  
  beforeEach(async() => {
    app = await setup({});
  });
  
  it('creates GuessedWords table with no roww', async() => {
    const guessedWords = await findByTestAttr(app, 'guessed-word');
    expect(guessedWords.length).toBe(0);
  });
});

describe('some words guessed', () => {
  let app;
  beforeEach(async() => {
    app = await setup({
      guessedWords: [
        { guessedWord: 'dummy', letterMatchCount: 1 },
        { guessedWord: 'agile', letterMatchCount: 1 },
      ],
    });
  });

  it('creates GuessedWords table with two rows', async() => {
    const guessedWordsNodes = await findByTestAttr(app, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(2);
  });
});

describe('Secret word guessed', () => {
  let app;

  beforeEach(async() => {
    app = await setup({
      guessedWords: [
        { guessedWord: 'dummy', letterMatchCount: 1 },
        { guessedWord: 'agile', letterMatchCount: 1 },
      ],
    });

    // add value to input box
    const inputBox = await findByTestAttr(app, 'input-box');
    inputBox.simulate('change', { target: { value: 'party' } });

    // simulate click on submit button
    const submitBtn =  await findByTestAttr(app, 'submit-button');
    submitBtn.simulate('click', { preventDefault: () => null });
  });

  it('creates GuessedWords table with three rows', async() => {
    const guessedWordsNodes = await findByTestAttr(app, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(3);
  });
  
  it('shows the congrats component', async() => {
    const congrats = await findByTestAttr(app, 'component-congrats');
    expect(congrats.exists()).toBe(true);
  });
  
  it('hides the input component', async() => {
    const input = await findByTestAttr(app, 'component-input');
    expect(input.length).toBe(0);
  });

});