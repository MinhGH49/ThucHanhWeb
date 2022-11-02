// import logo from './logo.svg';
import './App.css';
// import {MySection, MyButton} from './components/exercise0/03';
// // import MyButton from './components/exercise0/03';
// import List from './components/exercise0/04'

import {MyButton, MySection, Exercise00,Exercise01, Exercise02, List} from './components/exercise0/03'
import { Hello, MyComponent, Exercise12}  from './components/exercise1/1'


import Helloreacthook from './components/exercise2/helloracthook'
import Nicetomeetreact from './components/exercise2/nicetomeetreacthook'
import Element from './components/exercise4/element'
import Alert from './components/exercise4/alert'
import Myinput from './components/exercise3/input'


function App() {

  const style = {
    h1: {
        backgroundColor:'#4fc388',
        fontFamily: 'Roboto'
    },
    even: {
      backgroundColor:'#aec34f',
      padding: "10px 10px"
    },
    odd: {
      backgroundColor:'#4fc388',
      padding: "10px 10px"

    }



  }
  return (
    <>
    <div className="ex0" style={style}>
      <h1>Exercise 0</h1>
      <div id="00" style={style.even} >
        <h2>Exercise 0.0</h2>
        <Exercise00></Exercise00>
      </div>
      <div id="01" style={style.odd}>
        <h2>Exercise 0.1</h2>
        <Exercise01></Exercise01>
      </div>
      <div id="02"style={style.even}>
        <h2>Exercise 0.2</h2>
        <Exercise02></Exercise02>
      </div>
      <div id="03" style={style.odd}>
        <h2>Exercise 0.3</h2>
        <MySection>
          <MyButton>My button text</MyButton>
        </MySection>
      </div>
      <div id="04"style={style.even} >
        <h2>Exercise 0.4</h2>
        <List></List>
      </div>
      <h1>Exercise 1</h1>
      <div id="10" style={style.even} >
        <h2>Exercise 1.0</h2>
        <Hello></Hello>
      </div>
      <div id="11" style={style.odd}>
        <h2>Exercise 1.1</h2>
        <MyComponent></MyComponent>
      </div>
      <div id="12"style={style.even}>
        <h2>Exercise 1.2</h2>
        <Exercise12></Exercise12>
      </div>
      <div id="13" style={style.odd}>
        <h2>Exercise 1.3</h2>

      </div>
    </div>





    <h2>Exercise 12</h2>

    <h2>Exercise 2.1 </h2>
    <Helloreacthook></Helloreacthook>
    <h2>Exercise 2.2 </h2>
    <Nicetomeetreact></Nicetomeetreact>
    <h2>Exercise 3 </h2>
    <Myinput></Myinput>
    <h2>Exercise 4.1 </h2>
    <Element></Element>
    <h2>Exercise 4.2 </h2>
    <Alert></Alert>
    </>
  );
}

export default App;
