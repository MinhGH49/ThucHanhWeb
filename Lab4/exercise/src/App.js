// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HelloRoute from './components/exercise1'
import TestUseEffect from './components/exercise4'
import Exercise5 from './components/exercise5/main'
import Exercise6 from './components/exercise6'
import NavBar from './components/exercise7'

import { useState, useEffect } from 'react'

function App() {

  const [Compo, setCompo] = useState(() => ()=> null);

  useEffect(() => {
    import('./components/exercise2compo1').then((module) => {
      setCompo(() => module.default);
    })
  }, []);

  NavBar.defaultProps = {
    links: [
      {url: '/ex4', name: "Exercise 4"},
      {url: '/ex5', name: "Exercise 5"},
      {url: '/ex6', name: "Exercise 6"},
    ]
  }



  return (
      <>
      <Router className="App">
        <Routes>
          <Route path="/1" element={<HelloRoute/>}/>
          <Route path="/2" element={<Compo />} />
          <Route path="/4" element={<TestUseEffect />} />
          <Route path="/5" element={<Exercise5 />} />
          <Route path="/6" element={<Exercise6 />} />
          <Route path="/7" element={<NavBar />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
