import './App.css';
import HomeTab from './components/hometab.js';
import AboutTab from './components/abouttab.js';
import CodingTab from './components/codingtab.js';
import PhotographyTab from './components/photographytab.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeTab />
      </header>
    </div>
  );
}

export default App;
