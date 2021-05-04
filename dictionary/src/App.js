import image from './dictionary-img.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="image" alt="logo" />
        
      </header>
    </div>
  );
}
