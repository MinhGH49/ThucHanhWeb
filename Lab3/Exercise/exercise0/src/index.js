import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyButton from './components/exercise1/exercise12/MyButton';
// import MyList from './components/exercise1/exercise12/MyList'


const root = ReactDOM.createRoot(document.getElementById('root'));
//
// export const appState = {
//   text: "My Button",
//   disabled: true,
//   items: ["First", "Second", "Third"],
// }
//
// function render(props) {
//     root.render(
//       <div>
//         <MyButton text={props.text} disabled={props.disabled} />
//         <MyList items={props.items} />
//       </div>
//     )
// };
//
// render(appState);
//
// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");
//
//   render(appState);
// }, 1000);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
