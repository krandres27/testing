import React, { useEffect } from "react";
import { languageContext, successContext, guessedWordsContext } from "./context";
import { Congrats, GuessedWords, Input, LanguagePicker } from "./components";
import { getSecretWord } from "./actions";
import "./App.css";

const types = {
  UPDATE_SECRET_WORD: "UPDATE_SECRET_WORD",
  SET_LANGUAGE: "SET_LANGUAGE",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.UPDATE_SECRET_WORD:
      return { ...state, secretWord: payload };

    case types.SET_LANGUAGE:
      return { ...state, language: payload };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: 'en',
  });

  const setSecretWord = (secretWord) => {
    dispatch({ type: types.UPDATE_SECRET_WORD, payload: secretWord });
  };

  const setLanguage = (selectedLanguage) => {
    dispatch({ type: types.SET_LANGUAGE, payload: selectedLanguage });
  };

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span>Learn React Testing</span>
      </header>
      {!state.secretWord ? (
        <div data-test="loading-spinner">Loading...</div>
      ) : (
        <languageContext.Provider value={ state.language }>
          <div data-test="component-app">
            <div className="jotto-game">
              <LanguagePicker setLanguage={setLanguage} />
              <successContext.SuccessProvider>
                <Congrats />
                <guessedWordsContext.GuessedWordsProvider>
                  <Input secretWord={state.secretWord} />
                  <GuessedWords />
                </guessedWordsContext.GuessedWordsProvider>
              </successContext.SuccessProvider>
            </div>
          </div>
        </languageContext.Provider>
      )}
    </div>
  );
}

export default App;
