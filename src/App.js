import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import {Home} from './components/Home';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
    </>
  );
}

export default App;
