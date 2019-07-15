import React, { Component } from "react";
import SoundContainer from "./sound-container";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        background: `rgb(${[0, 50, 155]})`,
        width: "100vw",
        height: "100vh"
      }
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256));
    }
    this.setState({
      styles: {
        background: `rgb(${rgb})`,
        width: "100vw",
        height: "100vh"
      }
    });
  }
  render() {
    return (
      <div style={this.state.styles}>
        {/* <h1 style={{ color: "black" }}>{this.state.styles.background}</h1>*/}
        <SoundContainer color={this.handleData} />
      </div>
    );
  }
}

export default Page;
