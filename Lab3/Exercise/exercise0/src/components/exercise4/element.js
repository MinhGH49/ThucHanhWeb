import * as React from 'react';
import * as ReactDOM from 'react-dom';

// class MyButton extends React.Component {
//   render() {
//     const { disabled, text} = this.props;
//     return <button disabled={disabled}>{text}</button>;
//   }
// }


export default function Element() {
  const style = {
    color: "green",
    textAlign: "center",
    fontSize: "15px",
    backgroundColor: "#d0f0c0",
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: "1px",
  }

  return (
    <div style={style}>
      Green is the prime color of the world
    </div>
  );
}
