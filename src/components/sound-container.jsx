import React, { Component } from "react";
import SoundTile from "./sound-tile";

class SoundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [
        "https://soundseric.s3.us-east-2.amazonaws.com/Catsa.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Bootsa.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Bass.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Snare.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Yeah.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Nani.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Haha.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/YoMuddah.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/NaniKorewa.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Extendo.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Yah.mp3",
        "https://soundseric.s3.us-east-2.amazonaws.com/Wakata.mp3"
      ],
      input: "",
      componentClasses: ""
    };
    this.createButtonLabel = this.createButtonLabel.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.checkCode = this.checkCode.bind(this);
    this.addButton = this.addButton.bind(this);
  }

  createButtonLabel(item) {
    let regex = /\w+(?=.mp3)/;
    let matched = item.match(regex);
    return matched;
  }

  handleCode(event) {
    this.setState({
      input: event.target.value
    });
  }

  checkCode(event) {
    event.preventDefault();
    if (this.state.input.toLowerCase() === "ciren") {
      this.setState({ componentClasses: "magictime perspectiveleft" });
      console.log("You're not tripping bruh");
      let audio = new Audio(
        "https://soundseric.s3.us-east-2.amazonaws.com/Ciren.mp3"
      );
      audio.play();
    } else if (this.state.input.toLowerCase() === "fix") {
      this.setState({ componentClasses: "magictime returnperspectiveLeft" });
      console.log("You're not tripping bruh");
    }
  }

  addButton(event) {
    event.preventDefault();
    let newSongs = [...this.state.allSongs, this.state.input];
    this.setState({
      allSongs: newSongs
    });
  }

  render() {
    return (
      <div
        style={{
          width: "40vw",
          position: "absolute",
          top: "35vh",
          left: "30vw"
        }}
        className={this.state.componentClasses}
      >
        <h1 className="text-center">CIREN SoundBoard</h1>
        {this.state.allSongs.map(item => (
          <SoundTile
            song={item}
            name={this.createButtonLabel(item)}
            color={this.props.color}
          />
        ))}
        {this.s}
        <p>By Ciren</p>
        <form>
          <input className="form-control" onChange={this.handleCode} />
          <button class="btn btn-md btn-warning" onClick={this.checkCode}>
            Enter Code
          </button>
          <button class="btn btn-md btn-warning" onClick={this.addButton}>
            Add Button
          </button>
        </form>
      </div>
    );
  }
}

export default SoundContainer;
