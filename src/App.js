import { Congrats, GuessedWords } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Learn React Testing</span>
      </header>
      <div className="jotto-game">
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    </div>
  );
}

export default App;
