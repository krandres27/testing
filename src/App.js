import { Congrats, GuessedWords, Input } from './components'
import './App.css';

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

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
