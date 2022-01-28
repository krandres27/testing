import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/utils';
import App from '../App';

const setup = async(state = {}) => {
  const app = mount(<App />);

  // add value to input box
  const inputBox = await findByTestAttr(app, 'input-box');
  inputBox.simulate('change', { taget: { value: 'train' } });

  // simulate click on submit button
  const submitBtn =  await findByTestAttr(app, 'submit-button');
  submitBtn.simulate('click', { preventDefault: () => null });

  return app;
}

describe.skip('no words guessed', () => {
  let app;
  
  beforeEach(async() => {
    app = await setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });
  
  it('creates GuessedWords table with one row', async() => {
    const guessedWords = await findByTestAttr(app, 'guessed-word');
    expect(guessedWords.length).toBe(1);
  });
});

describe.skip('some words guessed', () => {
  let app;
  beforeEach(async() => {
    app = await setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'dummy', letterMatchCount: 1 },
        { guessedWord: 'agile', letterMatchCount: 1 },
      ],
    });
  });

  it('creates GuessedWords table with three rows', async() => {
    const guessedWordsNodes = await findByTestAttr(app, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(3);
  });
});

describe.skip('secret word guessed', () => {
  let app;

  beforeEach(async() => {
    app = await setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'dummy', letterMatchCount: 1 },
        { guessedWord: 'agile', letterMatchCount: 1 },
      ],
    });


    // add value to input box
    const inputBox = await findByTestAttr(app, 'input-box');
    inputBox.simulate('change', { taget: { value: 'party' } });

    // simulate click on submit button
    const submitBtn =  await findByTestAttr(app, 'submit-button');
    submitBtn.simulate('click', { preventDefault: () => null });
  });

  it('creates GuessedWords table with three rows', async() => {
    const guessedWordsNodes = await findByTestAttr(app, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(4);
  });
  
  it('show the congrats component', async() => {
    const congrats = await findByTestAttr(app, 'component-congrats');
    expect(congrats.length).toBe(1);
  });
  
  it('hides the input component', async() => {
    const input = await findByTestAttr(app, 'component-input');
    expect(input.length).toBe(0);
  });

});