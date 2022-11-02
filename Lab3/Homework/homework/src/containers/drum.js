// import React, { useEffect, useState} from 'react';
import ItemList from '../components/itemList'
import getDrumSylte from '../pseudoAPI/drumstyleAPI'
import './drum.css'



const fetchData = () => {
  return getDrumSylte();
}


export default function DrumContainer() {


  const apiData = fetchData()
  const items = []
  apiData.map((value) => {
    let audio = new Audio(value.sound)



    const item = {
      id:value.id,
      style: {backgroundImage: value.bgImg},
      onClick: () => {
        audio.play()
        audio.currentTime = 0;
        console.log("clicked")
      },
      onKeyPress: (e) => {
        if (e.charCode === value.text.charCodeAt(0)){
          audio.play()
          audio.currentTime = 0;
          console.log(e.charCode)
        }
      },
      text: value.text,
    }
    console.log(item)
    items.push(item)
  }
  );


  return (
    <div className="drum-container">
      <h1>Drum kit</h1>
      <ItemList items={items}/>
    </div>
  )

}
