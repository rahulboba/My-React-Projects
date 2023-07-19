import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          {showText ? <h1>Thank you</h1> : <h1>Hello World</h1>}
          <button>
            <a href="#link" onClick={handleClick}>
              Tap Here
            </a>
          </button>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
