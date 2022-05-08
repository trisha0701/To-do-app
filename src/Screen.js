import React from "react";
import "./ScreenStyle.css";
import Menu from "./Screens/Menu";
import Games from "./Screens/Games";
import Music from "./Screens/Music";
import CoverFlow from "./Screens/CoverFlow";
import Settings from "./Screens/Settings";

// Depending on the selection made in the menu, the corresponding page will be displayed

class Screen extends React.Component {
  render() {
    return (
      <div className="screen-container-outer">
        <div className="screen-container">
          {this.props.showPage === -1 ? (
            <Menu
              selectedOption={this.props.selectedOption}
              optionsInMenu={this.props.optionsInMenu}
            />
          ) : (
            ""
          )}

          {this.props.showPage === 0 &&
          this.props.optionsInMenu.length === 4 ? (
            <CoverFlow />
          ) : (
            ""
          )}

          {this.props.showPage === 1 &&
          this.props.optionsInMenu.length === 4 ? (
            <Music songsScreen={this.props.songsScreen} />
          ) : (
            ""
          )}

          {this.props.showPage === 2 &&
          this.props.optionsInMenu.length === 4 ? (
            <Games />
          ) : (
            ""
          )}

          {this.props.showPage === 3 &&
          this.props.optionsInMenu.length === 4 ? (
            <Settings />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Screen;
