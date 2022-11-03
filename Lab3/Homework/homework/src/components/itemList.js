import React from 'react';
import Item from './item'


export default function ItemList({ listClassName, items, clickHandler }) {
  // console.log('type of param',typeof(items))
  const list = items.map((item, index) =>
    <Item
      key={index}
      // {...item}
      className={item.className}
      specificStyle={item.specificStyle}
      clickHandler={clickHandler}
      text={item.text}
    />
    )

  return (
    <ul className={listClassName}>
      {list}
    </ul>
  )

}
