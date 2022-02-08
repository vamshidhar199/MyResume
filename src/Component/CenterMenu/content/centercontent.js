import React, { Component } from "react";
import "./centercontent.css";
import background from "./../../../Assets/background.jpg";
import { SocialIcon } from "react-social-icons";
import myResume from "./../../../Assets/Resume-VamshidharReddyParupally.pdf";
class CenterContent extends Component {
  render() {
    return (
      <>
        <div className="centercontent-div">
          <img className="centercontent-div-img" src={background}></img>
          <img className="centercontent-div-h1-profileImg"></img>
          <h1 className="centercontent-div-h1">Vamshidhar Reddy Parupally</h1>
          <div className="centercontent-div-div">
            <SocialIcon
              url="https://linkedin.com/in/vamshidhar-reddy-parupally-550080170"
              style={{ height: 25, width: 25 }}
            ></SocialIcon>
            <a
              href={myResume}
              download="VamshidharReddyParupallyResume"
              target="_blank"
            >
              <button className="centercontent-div-div-button">
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default CenterContent;
