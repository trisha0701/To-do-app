import React from "react";
import "../CommonScreen.css";

class Settings extends React.Component {
  render() {
    return (
      <div className="screen">
        <h1>Settings</h1>
        <img
          alt="settings"
          className="screen-image"
          src="https://cdn-icons-png.flaticon.com/512/81/81020.png"
        />
      </div>
    );
  }
}

export default Settings;
