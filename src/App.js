import { useEffect } from 'react';
import { Congrats, GuessedWords, Input } from './components'
import { getSecretWord } from './actions';
import './App.css';

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span>Learn React Testing</span>
      </header>
      <div className="jotto-game">
        <Congrats success={false} />
        <Input success={success} secretWord={secretWord} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    </div>
  );
}

export default App;
