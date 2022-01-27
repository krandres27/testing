import { useState } from 'react';
import Proptypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');

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
        <button data-test="submit-button">Submit</button>
      </form>
    </div>
  );
}

Input.prototypes = {
  secretWord: Proptypes.string.isRequired
}

export default Input;
