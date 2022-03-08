import React, { Component } from "react";
import "./centercontent.css";
import { FaSuitcase, FaBuffer, FaBookOpen, FaReact } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { DiSpark, DiPython } from "react-icons/di";

import background from "./../../../Assets/background.jpg";
import { SocialIcon } from "react-social-icons";
import myResume from "./../../../Assets/VamshidharReddyParupally.pdf";
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
      <span className="col-sm-2 skillsSpan">JS</span>,
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
              <div className="col-sm-2 row-header-col">
                <img className=" centercontent-div-h1-profileImg"></img>
              </div>
              <div className="col-sm-8 bio-header">
                <h2 className="centercontent-div-h1">
                  Vamshidhar Reddy Parupally
                </h2>
                <h5 className="centercontent-div-h3">
                  {"\u00A0"}FullStack Developer | Cloud Enthusiast <br></br>
                </h5>
                <h5 className="centercontent-div-h3">
                  {"\u00A0"}Experience : 1.5 years <br></br>
                  {"\u00A0"}Company : Tata Consultancy Services
                </h5>
                <h5 className="centercontent-div-h3">
                  {"\u00A0"}
                  <a href="mailto:vamshidhar199@gmail.com">
                    vamshidhar199@gmail.com
                  </a>{" "}
                  | +1 (619) 496 8541<br></br>
                </h5>
                <div className=" centercontent-div-div">
                  {/* <SocialIcon
                    url="https://linkedin.com/in/vamshidhar-reddy-parupally-550080170"
                    style={{ height: 26, width: 26 }}
                  ></SocialIcon> */}
                  <a
                    href={
                      "https://www.linkedin.com/in/vamshidhar-reddy-parupally-550080170/"
                    }
                    target="_blank"
                  >
                    <span title="linkedin profile" className="linked-in"></span>
                  </a>
                  <a href={"https://github.com/vamshidhar199"} target="_blank">
                    <span className="github" title="Github"></span>
                  </a>
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
              <div className="col-sm-2">
                <div className="container-fluid skill-hilight">
                  <div className="row">
                    <div className="col">
                      <FaReact size={30} />
                      <p>ReactJS</p>
                    </div>
                    <div className="col">
                      <SiApachekafka size={30} />
                      <p>kafka</p>
                    </div>
                    <div className="col">
                      <DiSpark size={30} />
                      <p>Spark</p>
                    </div>
                    <div className="col">
                      <DiPython size={30} />
                      <p>Python</p>
                    </div>
                  </div>
                  <div className="row"></div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="centercontent-div-div2">
            <div className="container-fluid container-style">
              <div className="row row-header-bottom">
                <div className="col-sm-7 col-style">
                  <h3 className=" centercontent-div-div2-h1">
                    About Me
                    {/* <span
                      title="My Intro"
                      className="speech-icon"
                      onClick={() => {
                        console.log("speech clicked");
                        this.state.speek
                          ? window.speechSynthesis.speak(msg)
                          : window.speechSynthesis.cancel();
                        this.setState({ speek: !this.state.speek });
                      }}
                    ></span> */}
                  </h3>
                  <p className=" centercontent-div-div2-p">
                    I am experienced software developer with working experience
                    on React JS, Java, Kafka and Spark. I posses effective
                    capabilities to transform business requirements to technical
                    solutions, and have good interpersonal skills. Ready to
                    learn and evolve are some of my strengths.<br></br>I am a
                    Challenger of Conventional Wisdom. Always ask the WHY.
                    Strive to improve user experience by developing intuitive
                    and smart solutions, with scalable and modular design.{" "}
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
                        color: "#53565a",
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
                      <p>
                        Full Stack Developer, Data Engineer - Client Apple Inc
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2014 - 2020"
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      contentStyle={{
                        color: "#53565a",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<FaBookOpen />}
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

          <div className="centercontent-div-div2">
            <div className="container-fluid container-style">
              <div className="row row-header-bottom">
                <div className="col-sm-12 col-style">
                  <h3 className=" centercontent-div-div3-h3">
                    Projects at TCS
                  </h3>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        color: "#53565a",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      date="2020 - 2021"
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<FaBuffer />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Affordability - Apple Inc
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Tata Consultancy Services, IN - Client Apple Inc
                      </h4>
                      <p style={{ textAlign: "justify" }}>
                        It is an application developed to assist the client
                        (Apple Inc) with managing sales data of a particular
                        location, by allowing clients to record new data and
                        view the trends of existing data with the help of
                        industry-standard visualization.<br></br> My role was to
                        handle the front-end with ReactJS, developing intuitive
                        web user interface with advanced functionality and also
                        to develop low latency service API’s using GSF which is
                        built on top of spring boot framework.
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2020 - 2021"
                      contentStyle={{
                        color: "#53565a",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<FaBuffer />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Cascade - Apple Inc
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Tata Consultancy Services, IN - Client Apple Inc{" "}
                      </h4>
                      <p style={{ textAlign: "justify" }}>
                        Cascade is a central application for apple's sales
                        details, which provides data to downstream applications.
                        <br></br>My role here was to work primarily on the UI
                        and services (GSF). I have developed intuitive web
                        designs and faster APIs to improve the efficiency of the
                        application.{" "}
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2020 - 2021"
                      contentStyle={{
                        color: "#53565a",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<FaBuffer />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        No Show Prediction - Apple Inc
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Tata Consultancy Services, IN - Client Apple Inc{" "}
                      </h4>
                      <p style={{ textAlign: "justify" }}>
                        No Show Prediction is a machine learning project aimed
                        at predicting the no-show percentage of the appointments
                        booked for apple services at the Apple store.<br></br>{" "}
                        My role was to accumulate data from different sources
                        and pre-process the data using different data mining
                        techniques to transform it into a meaningful dataset,
                        which was then passed to a machine learning model for
                        training and predicting the future trends.{" "}
                      </p>
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
