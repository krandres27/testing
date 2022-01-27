import { useState } from 'react';
import Proptypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    setCurrentGuess('');
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
