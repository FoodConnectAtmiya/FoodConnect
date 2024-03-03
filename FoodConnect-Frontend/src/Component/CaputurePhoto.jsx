import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
// import html2canvas from 'html2canvas';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
<<<<<<< HEAD
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: mimeType });
  return blob;
}
function CaputurePhoto({setImgData}) {
=======
function CaputurePhoto() {
>>>>>>> dcb2b02d1f0e009b00650ca3f345927d6e45473b
    const [img,setImg]=useState(null);
  const webcamRef = React.useRef(null);
  const [isStop,setIsStop]=useState(true);
  const capture = React.useCallback(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc);
      setIsStop(false);
      
      const formData = new FormData();
      formData.append('screenshot', new Blob(imageSrc, { type: 'image/jpeg' }), 'screenshot.jpg'); // Specify expected file type and name

      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });
    }
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