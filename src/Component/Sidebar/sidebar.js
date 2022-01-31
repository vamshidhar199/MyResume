import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  render() {
    console.log(this.props.sidebarOpen);
    return (
      <div
        className={
          this.props.sidebarOpen
            ? "sidebar-div sidebar-div-open"
            : "sidebar-div"
        }
      ></div>
    );
  }
}
export default Sidebar;
