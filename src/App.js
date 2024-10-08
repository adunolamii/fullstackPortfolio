import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Social from './Components/Social';
import { AnimatePresence } from 'framer-motion';
import ThemeContextProvider from './ThemeContextProvider';

function App() {
  const location = useLocation()
  return (
    <div className="App">
     
         <Social/>
         <ThemeContextProvider/>
         <AnimatePresence initial = {false}>
            <Routes location={location} key={location.pathname}>
                   <Route path="/"  element={<Home/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/skills" element={<Skills/>}/>
                   <Route path="/projects" element={<Projects/>}/>
                   <Route path="/contact" element={<Contact/>}/>
                   <Route path="/themeContextProvider" element={<ThemeContextProvider/>}/>

            </Routes>
            </AnimatePresence>
    
     
    </div>
  );
}

export default App;
