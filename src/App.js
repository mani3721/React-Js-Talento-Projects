
import './App.css';
import ChangeColor from './Components/ChangeColor';
import FontsizeChange from './Components/ChangeSize';
import WordCounter from './Components/WordCounter';

function App() {
  return (
    <div className="App">
      <FontsizeChange/>
      <ChangeColor/>
      <WordCounter/>
    </div>
  );
}

export default App;
