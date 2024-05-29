import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
