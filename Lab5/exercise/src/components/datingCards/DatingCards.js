import { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import axios from 'axios'

export default function DatingCards() {
  const[people, setPeople] = useState([])

  async function fetchData() {
    const res = await axios.get('/dating/cards')
    setPeople(res.data)
    console.log('fetching data...')
  }

  useEffect(()=> {

    fetchData()
  },[])

  const swiped = (direction, nameToDelete) => {
    console.log('receiving' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + "left the screen...")
  }

  return (
    <div className='datingCards'>
      <div className='datingCards-container'>
        {people.map((person)=> (
          <DatingCard
            className='swipe'
            key={person.key}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={outOfFrame(person.name)} //check loi
          >
            <div style={{backgroundImage: `uerl(${person.imgUrl})`}} className='avatar'>
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>

  )
}
