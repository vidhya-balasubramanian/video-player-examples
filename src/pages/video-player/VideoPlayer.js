import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";

import "./style.css";
import "video.js/dist/video-js.css";

const VideoPlayer = () => {
  const [key, setkey] = useState(0);
  let videoNode = useRef(null);
  let player = undefined;

  useEffect(() => {
    player = videojs(videoNode.current, {
      autoplay: false,
      width: "auto",
      height: "auto",
      controls: true,
      sources: [
        {
          src:
            "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
          type: "video/mp4",
        },
      ],
      // controlBar: {
      //   fullscreenToggle: false,
      // },
      muted: false,
      // playbackRates: [0.5, 1, 1.25, 1.5, 2],
    }).ready();
    return () => {
      if (player) {
        player.dispose();
        setkey(key + 1);
      }
    };
  }, []);
  // options.sources.src

  return (
    <div data-vjs-player key={`video-${key}`}>
      <video
        ref={videoNode}
        className="video-js"
        onMouseEnter={(e) => {
          // const target = e.target;
        }}
        onKeyPress={(e) => {
          if (e.which === 32) {
            if (e.target.paused) {
              e.target.play();
            } else {
              e.target.pause();
            }
          }
        }}
      ></video>
    </div>
  );
};
export default VideoPlayer;

// subtitles
// hide all controls on hover
// subtitles
// audio language
// video quality
// volume
// full screen
// close player
