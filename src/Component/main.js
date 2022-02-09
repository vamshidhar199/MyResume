import React, { Component } from "react";
import Sidebar from "./Sidebar/sidebar";
import CenterMenu from "./CenterMenu/centermenu";
import Footer from "./Footer/footer";
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
        <Footer sidebarOpen={this.state.openSidebar}></Footer>
      </div>
    );
  }
}

export default Main;
