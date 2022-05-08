import React from "react";
import "../MenuStyle.css";
import MenuItems from "./MenuItems";

class Menu extends React.Component {
  render() {
    const { selectedOption } = this.props;

    return (
      <div className="screen-menu">
        <h3>Anubhav</h3>

        <MenuItems
          optionsInMenu={this.props.optionsInMenu}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

export default Menu;
