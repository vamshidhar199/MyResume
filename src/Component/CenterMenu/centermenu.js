import React, { Component } from "react";
import "./centermenu.css";
import CenterContent from "./content/centercontent";
class CenterMenu extends Component {
  render() {
    return (
      <div
        className={
          this.props.sidebarOpen
            ? "centermenu-div-sidebaropen"
            : "centermenu-div"
        }
      >
        <CenterContent></CenterContent>
      </div>
    );
  }
}
export default CenterMenu;
