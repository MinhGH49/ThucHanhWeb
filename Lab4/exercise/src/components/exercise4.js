
import { useEffect, useState } from 'react'


export default function TestUseEffect() {
  function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({id:1, name:'Minh'});
        console.log('fetching data... ')
      }, 5000)
    });
  }

  const [id, setId] = useState('state id loading...');
  const [name, setName] = useState('state name loading...');

  useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
      console.log('reload effect');
    })
  })

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  )
}
