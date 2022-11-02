import * as React from 'react';
import * as ReactDOM from 'react-dom';

// class MyButton extends React.Component {
//   render() {
//     const { disabled, text} = this.props;
//     return <button disabled={disabled}>{text}</button>;
//   }
// }


export default function Helloreacthook() {
  const [name] = React.useState("MINH");
  const [age] = React.useState(21);

  return (
    <>
      <p>My name is {name} </p>
      <p>My age is {age} </p>
    </>
  );
}
