
import React from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume'
import Footer from './components/Footer/footer'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>    
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<About/>}>
          </Route>
          <Route path="/Projects" element={<Projects/>}>
          </Route>
          <Route path="/Resume" element={<Resume/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
        </Routes>
    </Router>
    <Footer></Footer>
    </div>    
     
  )
}


export default App;
