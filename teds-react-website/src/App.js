import React from 'react';
import logo from './logo.jpg';
import './App.css';
import AboutMe from './AboutMe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Theodore Lawson</h1>
        <button onClick={() => {window.location.href = '/AboutMe.js'}}>About Me</button>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <p>List of links to my various projects</p>
      <ul className='App-list'>
          <li><a href='https://github.com/bigtedde/Tic-Tac-Toe-with-AI'>Tic-Tac-Toe w/Unbeatable AI</a></li>
          <li><a href="https://github.com/bigtedde/leetCode">Leetcode Examples</a></li>
          <li><a href="https://github.com/bigtedde/TickerChecker">Ticker Checker (iOS App)</a></li>
          <li><a href="https://github.com/bigtedde/Gambling-Simulator">Gambling Simulator (iOS App)</a></li>
          <li><a href="https://github.com/bigtedde/react">Practicing with React</a></li>
          <li><a href="https://github.com/bigtedde/TedsWebsite">My HTML Website</a></li>
          <li><a href="https://github.com/bigtedde/JSWebsite">My ReactJS Website</a></li>
      </ul>
    </div>
  );
}
export default App;

