import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Missing from './components/Missing';
import NavCom from './components/NavCom';
import BottomNav from './components/BottomNav';

function App() {
  useEffect(() => {
    AOS.init({once: true, mirror: true});
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <NavCom />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Missing />}/>
        </Routes>
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
