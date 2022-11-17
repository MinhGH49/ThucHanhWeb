import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import DatingCards from './components/datingCards/DatingCards'
import SwipeButtons from './components/swipeButtons/SwipeButton'

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCards/>
      <h1>dating cards here</h1>
      <SwipeButtons/>
    </div>
  );
}

export default App;
