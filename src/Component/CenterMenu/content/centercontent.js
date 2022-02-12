import React, { Component } from "react";
import "./centercontent.css";
import background from "./../../../Assets/background.jpg";
import { SocialIcon } from "react-social-icons";
import myResume from "./../../../Assets/Resume-VamshidharReddyParupally.pdf";
class CenterContent extends Component {
  state = {
    isScrolling: false,
    speek: true,
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
    let constTechlonogy = ["Java", "ReactJS", "Python", "AWS Basics", "Spark"];
    let constOtherSkills = [
      "Organizing Skills",
      "Time Management",
      "Multitasking",
    ];
    let bio = `"Hello. I being an introvert, spent a lot of time inside the house, watching stupid TV shows, until I entered my
    graduation. The moment I entered into my graduation program,
    I have completely changed my point of focus towards the
    technologies that created curiosity in me. I have developed
    a couple of web applications out of my own interest, of
    which one fetched me a certificate stating "best project".
    Apart from the technological aspect, I have even poked my
    nose into creative and content writing and worked as an
    intern at a company named SHOOT ORDER. Also worked as a
    marketing intern at Bolt IoT.
     Having worked at TCS, as a software engineer, gave
    me a good understanding of corporate culture and how
    projects have to be accomplished. Working for clients like
    Apple has given me good exposure to industry standards and
    gave me an opportunity to work on technologies like AWS S3,
    Spark, Python, React JS, and Java. Now, I have started a new
    phase in my life at San Jose as a master's student. This is
    me, an enthusiast and reserved creature."`;
    var msg = new SpeechSynthesisUtterance(bio);
    var voices = window.speechSynthesis.getVoices();

    msg.voice = voices[10];
    //window.speechSynthesis.speak(msg);

    return (
      <>
        <div className="Header-top"></div>
        <div className="centercontent-div">
          <div className="container-fluid">
            {/* <img className="centercontent-div-img" src={background}></img> */}
            <div className="row row-header">
              <div className="col-sm-1 row-header-col">
                <img className=" centercontent-div-h1-profileImg"></img>
              </div>
              <div className="col-sm-11 bio-header">
                <h2 className="centercontent-div-h1">
                  Vamshidhar Reddy Parupally
                </h2>
                <h5 className="centercontent-div-h3">
                  {"\u00A0"}Student at San Jose State University <br></br>
                </h5>
                <h5 className="centercontent-div-h3">
                  {"\u00A0"}FullStack Developer | Cloud Enthusiast <br></br>
                  {"\u00A0"}Experience : 1.5 years
                </h5>
                <div className=" centercontent-div-div">
                  {/* <SocialIcon
                    url="https://linkedin.com/in/vamshidhar-reddy-parupally-550080170"
                    style={{ height: 26, width: 26 }}
                  ></SocialIcon> */}
                  <span title="linkedin profile" className="linked-in"></span>
                  <span className="github" title="Github"></span>
                  <a
                    href={myResume}
                    download="VamshidharReddyParupallyResume"
                    target="_blank"
                  >
                    {" "}
                    <span className="download-CV" title="Download CV"></span>
                  </a>

                  {/* <a
                    href={myResume}
                    download="VamshidharReddyParupallyResume"
                    target="_blank"
                  >
                    <button className="centercontent-div-div-button">
                      DOWNLOAD CV
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="centercontent-div-div2">
            <div className="container-fluid container-style">
              <div className="row row-header-bottom">
                <div className="col-sm-8 col-style">
                  <h1 className=" centercontent-div-div2-h1">
                    About Me
                    <span
                      title="My Intro"
                      className="speech-icon"
                      onClick={() => {
                        console.log("speech clicked");
                        this.state.speek
                          ? window.speechSynthesis.speak(msg)
                          : window.speechSynthesis.cancel();
                        this.setState({ speek: !this.state.speek });
                      }}
                    ></span>
                  </h1>
                  <p className=" centercontent-div-div2-p">
                    Hello. I being an introvert, spent a lot of time inside the
                    house, watching stupid TV shows, until I entered my
                    graduation. The moment I entered into my graduation program,
                    I have completely changed my point of focus towards the
                    technologies that created curiosity in me. I have developed
                    a couple of web applications out of my own interest, of
                    which one fetched me a certificate stating "best project".
                    Apart from the technological aspect, I have even poked my
                    nose into creative and content writing and worked as an
                    intern at a company named SHOOT ORDER. Also worked as a
                    marketing intern at Bolt IoT.<br></br>
                    <br></br> Having worked at TCS, as a software engineer, gave
                    me a good understanding of corporate culture and how
                    projects have to be accomplished. Working for clients like
                    Apple has given me good exposure to industry standards and
                    gave me an opportunity to work on technologies like AWS S3,
                    Spark, Python, React JS, and Java. Now, I have started a new
                    phase in my life at San Jose as a master's student. This is
                    me, an enthusiast and reserved creature.
                  </p>
                </div>
                <div className="col-sm col-style">
                  <h1 className=" centercontent-div-div2-h11">Skills</h1>
                  <h4 className=" centercontent-div-div2-h11">Technologies</h4>
                  <p className="skill-list">
                    {"\u25cf"} {constTechlonogy.join(", ")}
                  </p>
                  <h4 className=" centercontent-div-div2-h11">Others</h4>
                  <p className="skill-list">
                    {"\u25cf"} {constOtherSkills.join(", ")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="centercontent-div-div22">
            <div className="container-fluid container-style">
              <div className="row ">
                <div className="col-sm col-style">
                  <h1 className=" centercontent-div-div2-h1"></h1>
                  <p className=" centercontent-div-div2-p"></p>
                </div>
                <div className="col-sm col-style">
                  <h1 className=" centercontent-div-div2-h11"></h1>
                  <h4 className=" centercontent-div-div2-h11"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CenterContent;
