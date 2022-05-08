import React from "react";
import "../CommonScreen.css";

class Games extends React.Component {
  render() {
    return (
      <div className="screen">
        <h1>Games</h1>
        <img
          className="screen-image"
          alt="games"
          src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"
        />
      </div>
    );
  }
}

export default Games;
