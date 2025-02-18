import React, { Fragment } from "react";
import classes from "./BootStrapSlider.module.css";

const BootStrapSlider = () => {
  return (
    <Fragment>
      <div className={classes["slider-container"]}>
        <div className={classes["main-image"]}>
          <video width="100%" height="auto" autoPlay loop>
            <source
              src="https://videos.pexels.com/video-files/7251549/7251549-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Fragment>
  );
};

export default BootStrapSlider;
