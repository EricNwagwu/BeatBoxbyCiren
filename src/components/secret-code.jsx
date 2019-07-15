import React, { Component } from "react";

class SecretCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form style={{ position: "absolute", top: "80vh", left: "30vw" }}>
        <input className="form-control col-md-9 m-auto" />
        <button class="btn btn-md col-md-3">Submit</button>
      </form>
    );
  }
}
export default SecretCode;
