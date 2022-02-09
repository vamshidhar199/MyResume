import React, { Component } from "react";
import "./centercontent.css";
import background from "./../../../Assets/background.jpg";
import { SocialIcon } from "react-social-icons";
import myResume from "./../../../Assets/Resume-VamshidharReddyParupally.pdf";
class CenterContent extends Component {
  state = {
    isScrolling: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    this.setState({ isScrolling: true });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ isScrolling: false });
    }, 200);
  };
  render() {
    return (
      <>
        <div className="centercontent-div">
          <img className="centercontent-div-img" src={background}></img>
          <img className="centercontent-div-h1-profileImg"></img>
          <h1 className="centercontent-div-h1">Vamshidhar Reddy Parupally</h1>
          <h4 className="centercontent-div-h3">
            FullStack Developer | Cloud Enthusiast{" "}
          </h4>
          <div className="centercontent-div-div">
            <SocialIcon
              url="https://linkedin.com/in/vamshidhar-reddy-parupally-550080170"
              style={{ height: 26, width: 26 }}
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
          <div className="centercontent-div-div2"></div>
        </div>
      </>
    );
  }
}
export default CenterContent;
