import TransactionSection from './TransactionList';
import logo from './not-logo.svg';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TransactionSection />
    </div>
  );
}

export default App;
