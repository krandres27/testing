import React from 'react';
import { shallow, mount } from 'enzyme';
import guessedWordsModule from './index';

const FunctionalComponent = () => {
  guessedWordsModule.useGuessedWords()
  return <div />
}

it('functional component throws an error, when is being used outside the SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('useGuessedWords must be used within a GuessedWordsProvider');
});

it('functional component does not throw an error, when is wrapped SuccessProvider', () => {
  expect(() => {
    mount(
      <guessedWordsModule.GuessedWordsProvider>
        <FunctionalComponent />
      </guessedWordsModule.GuessedWordsProvider>
    );
  }).not.toThrow('useGuessedWords must be used within a GuessedWordsProvider')
});
