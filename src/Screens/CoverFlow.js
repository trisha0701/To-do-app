import React from "react";
import "../CommonScreen.css";

class CoverFlow extends React.Component {
  render() {
    return (
      <div className="screen">
        <h1>CoverFlow</h1>
        <img
          alt="coverflow"
          className="screen-image"
          src="https://cdn-icons-png.flaticon.com/128/3342/3342176.png"
        />
      </div>
    );
  }
}

export default CoverFlow;
