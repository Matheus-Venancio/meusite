import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import 'keen-slider/keen-slider.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
      <Home />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
