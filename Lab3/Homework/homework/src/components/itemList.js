import React from 'react';
import Item from './item'


export default function ItemList({items}) {
  // console.log('type of param',typeof(items))
  const list = items.map((item, index) =>
    <Item
      key={index}
      {...item} />
    )

  return (
    <ul>
      {list}
    </ul>
  )

}
