
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container"><div className="App">
      <header className="App-header">
        <h1>My Dictionary App</h1>
      </header>
      <Dictionary defaultWord="coding"/>
      <footer className="footer">
        <small>Coded by 
          {" "}<a href="https://github.com/coder-derie/dictionary-project">Deiriai Myers</a></small>
      </footer>
    </div>
    </div>
  );
}
