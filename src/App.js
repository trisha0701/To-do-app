import Controls from "./Controls";
import Screen from "./Screen";
import "./App.css";
import React from "react";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor() {
    super();
    this.currAngle = 0;
    this.temp_selected = 0;
    this.state = {
      options: ["CoverFlow", "Music", "Games", "Settings"],
      //Did not use option music
      option_music: ["All Music", "Artists", "Albums"],
      selected: 0,
      showPage: -1,
    };
  }

  // ZingTouch setup and configuration for rotation, selection is made every 40 degrees +/-
  componentDidMount() {
    let target = document.getElementsByClassName("controls-container")[0];
    let activeRegion = ZingTouch.Region(target);

    activeRegion.bind(target, "rotate", (e) => {
      let dist = e.detail.distanceFromLast;
      this.currAngle += dist;

      // Clockwise rotation
      if (this.currAngle > 40) {
        this.temp_selected++;
        this.temp_selected = this.temp_selected % this.state.options.length;
        this.setState({
          selected: this.temp_selected,
        });

        this.currAngle = 0;
      }

      // Anticlockwise rotation
      else if (this.currAngle < -40) {
        this.temp_selected--;
        if (this.temp_selected === -1)
          this.temp_selected = this.state.options.length - 1;

        this.temp_selected = this.temp_selected % this.state.options.length;
        this.setState({
          selected: this.temp_selected,
        });

        this.currAngle = 0;
      }
    });
  }

  // Clicking on menu button shows the menu on screen
  menuButton = () => {
    this.setState({
      showPage: -1,
    });
  };

  // Select button to open the sub menus
  selectButton = () => {
    if (this.temp_selected === 1) {
      this.setState({
        showPage: this.state.selected,
        optionsInMenu: this.state.option_music,
      });
    } else {
      this.setState({
        showPage: this.state.selected,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Screen
          selectedOption={this.state.selected}
          showPage={this.state.showPage}
          optionsInMenu={this.state.options}
          optionMusic={this.state.option_music}
          songsScreen={this.songs_screen}
        />
        <Controls
          menuButton={this.menuButton}
          selectButton={this.selectButton}
        />
      </div>
    );
  }
}

export default App;
