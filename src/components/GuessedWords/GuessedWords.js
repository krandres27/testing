import React from 'react';
import Proptypes from 'prop-types';
import stringsMethods from '../../helpers/strings/strings';
import { languageContext, guessedWordsContext } from '../../context';

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords()
  const language = React.useContext(languageContext);

  let content = (
    <span data-test="guess-instructions">
      {stringsMethods.getStringByLanguage(language, 'guessPrompt')}
    </span>
  )
  
  if(guessedWords.length) {
    content = (
      <table>
        <thead>
          <tr>
            <th>Guess Word</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody>
        {guessedWords.map((word, index) => (
          <tr data-test="guessed-word" key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }

  return (
    <div data-test="component-guessed-words">
      {content}
    </div>
  );
}

GuessedWords.prototypes = {
  guessedWords: Proptypes.arrayOf(
    Proptypes.shape({
      guessedWord: Proptypes.string.isRequired,
      letterMatchCount: Proptypes.number.isRequired,
    })
  ).isRequired
}

export default GuessedWords;
