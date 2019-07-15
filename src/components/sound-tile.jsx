import React, { Component } from "react";

class SoundTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noiseId: this.props.name,
      song: this.props.song,
      styles: {
        width: "6vw",
        height: "6vw",
        fontSize: "1vw"
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    console.log(this.state.song);
  }

  handleClick() {
    this.props.color();
  }

  play() {
    let audio = new Audio(this.state.song);
    audio.play();
  }

  render() {
    return (
      <React.Fragment>
        <button
          style={this.state.styles}
          onMouseUp={this.handleClick}
          onClick={this.play}
          className="btn btn-lg btn-primary"
        >
          {this.state.noiseId}
        </button>
      </React.Fragment>
    );
  }
}

export default SoundTile;
