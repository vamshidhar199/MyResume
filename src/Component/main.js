import React, { Component } from "react";
import Sidebar from "./Sidebar/sidebar";
import CenterMenu from "./CenterMenu/centermenu";
class Main extends Component {
  state = {
    openSidebar: false,
  };
  render() {
    return (
      <div>
        <h1
          onClick={() => {
            this.setState({ openSidebar: !this.state.openSidebar });
          }}
          className="sidebar-toggle"
        ></h1>

        <Sidebar sidebarOpen={this.state.openSidebar}></Sidebar>
        <CenterMenu sidebarOpen={this.state.openSidebar}></CenterMenu>
      </div>
    );
  }
}

export default Main;
