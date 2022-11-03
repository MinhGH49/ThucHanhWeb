import React from 'react';
//
// items = {
//   specificStyle,
//   text
// }
export default function Item(
  {className, specificStyle, clickHandler, text}) {
  console.log(specificStyle)
  return (
    <li
      className={className}
      style={specificStyle}
      onClick={() => clickHandler(text)}
    >
    {text}
    </li>

  )
}
