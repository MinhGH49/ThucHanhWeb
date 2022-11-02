import React from 'react';

export default function Item(props) {
  console.log(props.style)
  return (
    <li className={props.className} style={props.style} onClick={props.onClick} onKeyPress={props.onKeyPress}>{props.text}</li>
      // <button

      // </button>

  )
}
