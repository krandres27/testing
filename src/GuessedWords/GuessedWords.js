import Proptypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  let content = (
    <span data-test="guess-instructions">
      Try to guess the secret word!
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
