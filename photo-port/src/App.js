import React from 'react';
import About from './components/About/about';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
