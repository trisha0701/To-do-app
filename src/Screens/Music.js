import React from "react";
import "../CommonScreen.css";
import ipod from "../ipod.jpg";

class Music extends React.Component {
  render() {
    return (
      <div className="screen-music">
        <img id="music" alt="music" src={ipod} />
      </div>
    );
  }
}

export default Music;
