import React from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

const options = {
  autoplay: false,
  width: 720,
  height: 300,
  src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
};

export default () => {  
  return (
    <ShakaPlayer {...options} />
  )
  
}
