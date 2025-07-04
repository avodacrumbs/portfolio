
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
