import * as React from 'react';
import * as ReactDOM from 'react-dom';

// class MyButton extends React.Component {
//   render() {
//     const { disabled, text} = this.props;
//     return <button disabled={disabled}>{text}</button>;
//   }
// }


export default function Nicetomeetreact() {
  const [name, setName] = React.useState("MINH");
  const [age, setAge] = React.useState(21);


  return (
    <>
      <section>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p> My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p> My age is {age}</p>
      </section>
    </>
  );
}
