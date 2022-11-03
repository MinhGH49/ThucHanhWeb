// import React, { useEffect, useState} from 'react';
import ItemList from '../components/itemList'
import getDrumSylte from '../pseudoAPI/drumstyleAPI'
import './drum.css'

// const item = {
//   text: letter,
//   className: letter,
//   bgImg: `${imgDir + letter}.png`,
//   sound: mp3Dir + `/${letter}.mp3`
// }

const fetchData = () => {
  return getDrumSylte();
}


export default function DrumContainer() {

  //text handler nhan text cua button
  const clickHandler = (buttonText) => {
    console.log(buttonText)
  }
  const apiData = fetchData()

  //items data inferred from api data
  const items = []
  apiData.map((value) => {
    const item = {
      className: value.className,
      specificStyle: {backgroundImage: `url(${value.bgImg})`},
      text:value.text,
    }
    items.push(item)
  })


  return (
    <div className="drum-container">
      <h1>Drum kit</h1>
      <ItemList
        listClassName={'drum-keys'}
        items={items}
        clickHandler={clickHandler}
      />
    </div>
  )

}
