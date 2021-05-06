import image from './dictionary-img.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container"><div className="App">
      <header className="App-header">
        <img src={image} className="image" alt="logo" />
      </header>
      <Dictionary />
      <footer className="footer">
        <small>Coded by Deiriai Myers</small>
      </footer>
    </div>
    </div>
  );
}
