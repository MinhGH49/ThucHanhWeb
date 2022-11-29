import { useState, useRef } from 'react'
import './Video.css'
import VideoSidebar from './VideoSidebar'
import VideoFooter from './VideoFooter'

export default function Video({url, channel, description, song, likes, shares, messages}) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const handleVideoPress = () => {
    if(!playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        autoPlay
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      >
        <source src='sample-5s.mp4' type="video/mp4"/>
      </video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}
