
const imgDir = '../assets/drum/images/'
const mp3Dir = '../assets/drum/sounds/'

export default function getDrumSylte() {
  const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l']

  function a() {}

  let styledata = []

  keys.forEach((letter, index) => {
    const item = {
      id: index,
      // style: {
      //   backgroundImage: `url(${imgDir + letter}.png)`,
      // },
      // // clickHandler:a,

      text: letter,
      // className: 'drum-key ' + letter,
      bgImg: `url(${imgDir + letter}.png)`,
      sound: mp3Dir + `/${letter}.mp3`
    }

    styledata.push(item)
  })

  return styledata

}
