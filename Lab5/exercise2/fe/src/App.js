
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Video from './components/video/Video'


const instance = axios.create({
  baseURL: "http://localhost:5000"
})

function App() {

  const [videos, setVideos] = useState([])

  useEffect(()=> {
    async function fetchData() {
      const res = await instance.get("/v2/posts")
      console.log(res.data[1])
      setVideos(res.data)
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, shares, messages}) =>
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        )}
      </div>
    </div>
  );
}

export default App;
