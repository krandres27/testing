import React, { useEffect } from 'react';
import { Congrats, GuessedWords, Input } from './components'
import { getSecretWord } from './actions';
import './App.css';

const types = {
  UPDATE_SECRET_WORD: 'UPDATE_SECRET_WORD'
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.UPDATE_SECRET_WORD:
      return {...state, secretWord: payload }
  
    default:
      return state
  }
}

function App() {
  const success = false;
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null
  });
  const guessedWords = [];

  const setSecretWord = secretWord => {
    dispatch({type: types.UPDATE_SECRET_WORD, payload: secretWord })
  }

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span>Learn React Testing</span>
      </header>
      {!state.secretWord ? (
        <div data-test="loading-spinner">
          Loading...  
        </div>
      ) : (
        <div data-test="component-app">  
          <div className="jotto-game">
            <Congrats success={false} />
            <Input success={success} secretWord={state.secretWord} />
            <GuessedWords guessedWords={guessedWords} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
