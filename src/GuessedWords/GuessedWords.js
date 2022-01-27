import Proptypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  let content = (
    <span data-test="guess-instructions">
      Try to guess the secret word!
    </span>
  )
  
  if(guessedWords.length) {
    content = (
      <ul>
        {guessedWords.map((word, index) => (
          <li data-test="guessed-word" key={index}>{word.guessedWord}</li>
        ))}
      </ul>
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
