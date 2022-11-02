import React, { useEffect, useState} from 'react';
import ItemList from '../components/itemList'
import getDrumSylte from '../pseudoAPI/drumstyleAPI'
import './piano.css'




export default function PianoContainer() {
  const soundURL = '../assets/piano/sounds/'
  const clickHandlerB = () => {
    const sound = new Audio(soundURL + 'A0.mp3')
    sound.play()
    sound.currentTime = 0
    console.log(soundURL + 'A0.mp3')
  }
  const clickHandlerAS = () => {
    const sound = new Audio(soundURL + 'A1.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerA = () => {
    const sound = new Audio(soundURL + 'A2.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerGS = () => {
    const sound = new Audio(soundURL + 'A3.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerG = () => {
      const sound = new Audio(soundURL + 'A4.mp3')
      sound.play()
      sound.currentTime = 0
  }
  const clickHandlerFS = () => {
    const sound = new Audio(soundURL + 'A5.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerF = () => {
    const sound = new Audio(soundURL + 'A6.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerE = () => {
    const sound = new Audio(soundURL + 'A7.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerDS = () => {
    const sound = new Audio(soundURL + 'Ab1.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerD = () => {
    const sound = new Audio(soundURL + 'Ab2.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerCS = () => {
    const sound = new Audio(soundURL + 'Ab3.mp3')
    sound.play()
    sound.currentTime = 0
  }
  const clickHandlerC = () => {
    const sound = new Audio(soundURL + 'Ab4.mp3')
    sound.play()
    sound.currentTime = 0
  }


  return (
    <div className="piano-container">
    <ul className="set">
      <li className="white b" onClick={clickHandlerB}></li>
      <li className="black as" onClick={clickHandlerAS}></li>
      <li className="white a" onClick={clickHandlerA}></li>
      <li className="black gs" onClick={clickHandlerGS}></li>
      <li className="white g" onClick={clickHandlerG}></li>
      <li className="black fs" onClick={clickHandlerFS}></li>
      <li className="white f" onClick={clickHandlerF}></li>
      <li className="white e" onClick={clickHandlerE}></li>
      <li className="black ds" onClick={clickHandlerDS}></li>
      <li className="white d" onClick={clickHandlerD}></li>
      <li className="black cs" onClick={clickHandlerCS}></li>
      <li className="white c" onClick={clickHandlerC}></li>
    </ul>
    </div>
  )

}
