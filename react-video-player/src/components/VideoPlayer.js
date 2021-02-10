import React, { useLayoutEffect, useRef, useState } from 'react'
import videojs from 'video.js'

import 'video.js/dist/video-js.css';

export default () => {

  const [key, setkey] = useState(0)
  let videoNode = useRef(null)
  let player = undefined;

  const options = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        type: 'video/mp4',
      },
    ],
  };

  useLayoutEffect(() => {
    player = videojs(videoNode.current, options).ready()
    return () => {
      if(player) {
        player.dispose()
        setkey(key + 1)
      }
    }
  }, [options.sources.src])

  
  return (
    <div data-vjs-player key={`video-${key}`}>
      <video ref={videoNode} className="video-js"></video>
    </div>
  )
  
}
