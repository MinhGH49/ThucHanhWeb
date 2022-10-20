import * as React from 'react';


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

export default List;
