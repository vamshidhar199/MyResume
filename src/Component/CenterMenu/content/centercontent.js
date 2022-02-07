import React, { Component } from "react";
import "./centercontent.css";
import background from "./../../../Assets/background.jpg";
class CenterContent extends Component {
  render() {
    return (
      <>
        <div className="centercontent-div">
          <img className="centercontent-div-img" src={background}></img>
          <img className="centercontent-div-h1-profileImg"></img>
          <h1 className="centercontent-div-h1">Vamshidhar Reddy Parupally</h1>
        </div>
      </>
    );
  }
}
export default CenterContent;
