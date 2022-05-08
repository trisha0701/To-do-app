import React from "react";
import "../MenuStyle.css";

class MenuItems extends React.Component {
  render() {
    const { optionsInMenu } = this.props;
    return optionsInMenu.map((item, index) => {
      return (
        <div
          className={this.props.selectedOption === index ? "selected" : ""}
          key={index}
        >
          <p>{item}</p>
        </div>
      );
    });
  }
}

export default MenuItems;
