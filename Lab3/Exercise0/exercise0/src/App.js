// import logo from './logo.svg';
import './App.css';
import MySection from './components/exercise0/exercise03/MySection';
import MyButton from './components/exercise0/exercise03/MyButton';
import List from './components/exercise0/exercise04/list'
import Helloreacthook from './components/exercise2/helloracthook'
import Nicetomeetreact from './components/exercise2/nicetomeetreacthook'
import Element from './components/exercise4/element'
import Alert from './components/exercise4/alert'
import Myinput from './components/exercise3/input'
function App() {

  return (
    <>
    <h1>Exercise 0</h1>
    <h2>Exercise 0.0</h2>

    <h2>Exercise 0.3</h2>
    <MySection>
      <MyButton>My button text</MyButton>
    </MySection>
    <h2>Exercise 0.4</h2>
    <List></List>
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
