import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  state = {
    footerOpen: false,
  };
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ footerOpen: true });
      }.bind(this),
      3000
    );
  }
  render() {
    return (
      <div
        id="footer"
        className={
          this.state.footerOpen
            ? this.props.sidebarOpen
              ? "footer-div footer-animation footer-div-sidebaropen"
              : "footer-div footer-animation"
            : "footer-div"
        }
      >
        <h4
          className="footer-close"
          onClick={() => {
            document
              .getElementById("footer")
              .classList.remove("footer-animation");
          }}
        >
          X
        </h4>
        <h1 className={this.state.footerOpen ? "footer-h1" : ""}>
          Liked my profile?
        </h1>
        <h4 className={this.state.footerOpen ? "footer-h1" : ""}>
          Please feel free to contact me
        </h4>
      </div>
    );
  }
}
export default Footer;
