import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
// import html2canvas from 'html2canvas';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
function CaputurePhoto() {
    const [img,setImg]=useState(null);
  const webcamRef = React.useRef(null);
  const [isStop,setIsStop]=useState(true);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc);
      setIsStop(false);
    },
    [webcamRef]
  );

  return (
    <div id="capture-area">
      <h1>Take Photo And Approach</h1>
      { isStop ? <>
        <Webcam
          mirrored={true}
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button style={{zIndex:5}} onClick={capture}>Capture photo</button>
      </>: <div>
        {img && <img style={{width:'50dvw'}} src={img} />}
        <button>Add Photo</button>
      </div> }
    </div>
  );
}

export default CaputurePhoto;