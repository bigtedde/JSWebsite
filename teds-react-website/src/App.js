import logo from './logo.jpg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my website!</h1>
        <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <body className='App-body'>
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
        </body>
    </div>
  );

}
export default App;