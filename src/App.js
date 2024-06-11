import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Social from './Components/Social';



function App() {
  return (
    <div className="App">
      <Router>
         <Social/>
            <Routes>
                   <Route path="/"  element={<Home/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/skills" element={<Skills/>}/>
                   <Route path="/projects" element={<Projects/>}/>
                   <Route path="/contact" element={<Contact/>}/>

            </Routes>
     </Router>
    </div>
  );
}

export default App;
