import React from "react";
import "./ControlsStyle.css";

class Controls extends React.Component {
  render() {
    return (
      <div className="controls-container">
        <button className="menu-button" onClick={this.props.menuButton}>
          <img
            alt="menu"
            src="https://cdn-icons-png.flaticon.com/128/633/633647.png"
          />
        </button>

        <button className="rewind-button">
          <img
            alt="rewind"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214533.png"
          />
        </button>

        <button className="forward-button">
          <img
            alt="forward"
            src="https://cdn-icons-png.flaticon.com/512/149/149117.png"
          />
        </button>

        <button className="play-button">
          <img
            alt="play"
            src="https://cdn-icons-png.flaticon.com/128/1792/1792864.png"
          />
        </button>

        <button className="middle-button" onClick={this.props.selectButton}>
          <h4>SELECT</h4>
        </button>
      </div>
    );
  }
}

export default Controls;
