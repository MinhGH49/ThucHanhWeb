import * as React from 'react';
// import ReactDOM from 'react-dom/client';

class MyButton extends React.Component {
  render() {
    const { disabled, text} = this.props;
    return <button disabled={disabled}>{text}</button>;
  }
}


class MyList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}


function Exercise12() {
  // const root = ReactDOM.createRoot(document.getElementById('root'));

  const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
  }

  function render(props) {
      return (
        <main>
          <MyButton text={props.text} disabled={props.disabled} />
          <MyList items={props.items} />
        </main>
      )
  };

  render(appState);

  setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");

    render(appState);
  }, 5000);
}



class Hello extends React.Component {
  state = {
    first: false,
    second: true,
  }

  render() {
    const { first, second } = this.state;

    return (
      <main>
        <section>
          <button disabled={first}>First</button>
        </section>
        <section>
          <button disabled={second}>First</button>
        </section>
      </main>
    )
  }
}

//1.1 nice to meet
class MyComponent extends React.Component {
  state = {
    heading: "React awesome sauce (Busy)",
    content: "Loading...........",
  }

  constructor() {
    super();

    setTimeout(() => {
      this.setState({
        heading: "React awesome sauce",
        content: "DONE!",
      });
    }, 10000)
  }

  render() {
    const { heading, content} = this.state;

    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    )
  }

}


export { Hello, MyComponent, Exercise12}
