import React, { Component } from 'react'
import Webcam from "react-webcam";
import './Detector.css'

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  window.setInterval(React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot().split(",")[1];
      console.log("foto tomada")
    },
    [webcamRef]
  ), 1000);
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpg"
      />
      <br/>
    </>
  );
};

class Detector extends Component {
  constructor(props){
        super(props);
    }
  render(){
    return (
      <>
        <div class="webcam">
          <div class="screen">
            <WebcamCapture/>
          </div>
        </div>
      </>
    );
  }
}

export default Detector;