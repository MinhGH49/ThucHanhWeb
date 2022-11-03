
const imgDir = '../assets/drum/images/'
const mp3Dir = '../assets/drum/sounds/'

export default function getDrumSylte() {
  const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l']

  // function a() {}

  let styledata = []

  keys.forEach((letter) => {
    const item = {
      text: letter,
      className: letter,
      bgImg: `${imgDir + letter}.png`,
      sound: mp3Dir + `/${letter}.mp3`
    }

    styledata.push(item)
  })

  return styledata

}
