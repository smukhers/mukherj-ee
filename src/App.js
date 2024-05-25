import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Sanjeet</h1>
        <p>I build software and like fixing things</p>

        <p> </p>

        <div className="icon-links">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
          <a href="https://www.linkedin.com/in/sanjeet-mukherjee-01505784/" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:sanjeetmukherjee@outlook.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
