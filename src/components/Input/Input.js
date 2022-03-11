import { useState } from 'react';
import Proptypes from 'prop-types';
import { guessedWordsContext, successContext } from '../../context';
import letterMatchCount from '../../helpers/letterMatchCount/letterMatchCount'

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const [success, setSuccess] = successContext.useSuccess();
  const [, setGuessedWords] = guessedWordsContext.useGuessedWords();

  const submitHandler = e => {
    e.preventDefault();
    setCurrentGuess('');
    setGuessedWords((prevGuesses) => [
      ...prevGuesses,
      {
        guessedWord: currentGuess,
        letterMatchCount: letterMatchCount(currentGuess, secretWord),
      },
    ]);
    
    if (currentGuess.toLowerCase() === secretWord.toLowerCase()) {
      setSuccess(true);
    }
  }

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form>
        <input
          type="text"
          data-test="input-box"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button data-test="submit-button" onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  );
}

Input.prototypes = {
  secretWord: Proptypes.string.isRequired
}

export default Input;
