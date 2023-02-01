import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import video from "../../assets/video2.webm";
import "./Video.css";

const Video = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    // if playVideo is true toggle it off if playVideo is false then toggle it on
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app_video">
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="video-overlay flex__center">
        <div
          className="overlay-circle pointer flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
