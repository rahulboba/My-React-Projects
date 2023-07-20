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
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {showText ? <h1>Thank you</h1> : <h1>Hello World</h1>}
          <button aria-label='Tap Here'href="#link" onClick={handleClick} tabIndex={0} >Tap Here</button>
        </div>
          <a className="App-link" aria-label="Tekvision Link" href="https://tekvision.in/">Link</a>
      </header>
    </div>
  );
}

export default App;
