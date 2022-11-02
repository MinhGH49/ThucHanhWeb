import * as React from 'react';

class MyButton extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}


class MySection extends React.Component {
  render() {
    return (
      <section>
        <h2>My section</h2>
        {this.props.children}
      </section>
    );
  }
}

function Exercise00() {
  return (
    <p>
      Hello, <strong>JSX</strong>
    </p>
  );
}

function Exercise01() {
  return (
    <div>
    <button />
    <code />
    <input />
    <label />
    <p />
    <pre />
    <select />
    <table />
    <ul />
  </div>
  );
}

function Exercise02() {
  return (
    <section>
      <header>
        <h1>A Header</h1>
      </header>
      <nav>
        <a href="item">Nav Item</a>
      </nav>
      <main>
        <p>
          the main content ...
        </p>
      </main>
      <footer>
        <small>&copy;2021</small>
      </footer>
    </section>
  );
}



const array = ["First", "Ssecond", "Third"];
const object = {
    first:1,
    second: 2,
    third:3,
}

function List() {
  return (
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h1>Object</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}: </strong>
          </li>
        ))}
      </ul>
    </section>
  )

}


export {MyButton, MySection, Exercise00,Exercise01, Exercise02, List}
