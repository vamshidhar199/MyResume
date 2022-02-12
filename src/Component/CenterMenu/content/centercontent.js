import React, { Component } from "react";
import "./centercontent.css";
import { FaSuitcase } from "react-icons/fa";
import background from "./../../../Assets/background.jpg";
import { SocialIcon } from "react-social-icons";
import myResume from "./../../../Assets/Resume-VamshidharReddyParupally.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    let constTechlonogy = [
      <span className="col-sm-2 skillsSpan">Java</span>,
      <span className="col-sm-2 skillsSpan">ReactJS</span>,
      <span className="col-sm-2 skillsSpan">Python</span>,
      <span className="col-sm-2 skillsSpan">AWS Basics</span>,
      <span className="col-sm-2 skillsSpan">Spark</span>,
      <span className="col-sm-2 skillsSpan">Kafka</span>,
      <span className="col-sm-2 skillsSpan">C</span>,
    ];
    let constOtherSkills = [
      <span className="col-sm-2 skillsSpan">Organizing Skills</span>,
      <span className="col-sm-2 skillsSpan">Time Management</span>,
      <span className="col-sm-2 skillsSpan">Multitasking</span>,
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
                  <h3 className=" centercontent-div-div2-h1">
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
                  </h3>
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
                  <h3 className=" centercontent-div-div2-h11">Skills</h3>
                  <h5 className=" centercontent-div-div2-h112">Technologies</h5>
                  <div className="container-fluid">
                    <div className="row skill-list">
                      {constTechlonogy.map((x, i) => {
                        return x;
                      })}
                    </div>
                  </div>
                  <h5 className=" centercontent-div-div2-h112">Others</h5>
                  <div className="container-fluid">
                    <div className=" row skill-list">
                      {constOtherSkills.map((x, i) => {
                        return x;
                      })}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="centercontent-div-div2">
            <div className="container-fluid container-style">
              <div className="row row-header-bottom">
                <div className="col-sm-12 col-style">
                  <h3 className=" centercontent-div-div3-h3">
                    Experience and Background
                  </h3>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "#2c336e",
                        color: "wheat",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      date="2020 - 2021"
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<FaSuitcase />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Software Developer
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Tata Consultancy Services, IN
                      </h4>
                      <p>Full Stack Developer, Data Engineer</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2014 - 2020"
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Bachelor's
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Anurag Group of Institutions , IN{" "}
                      </h4>
                      <p>Information Technology </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
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
