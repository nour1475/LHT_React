import React from "react";

// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;

class OptionList extends React.Component {
  clickedYes = () => {
    // send a signal to electron backend
    // ipcRenderer.sendSync("option:yes", "");
  };

  clickedNo = () => {
    // send a signal to electron backend
    // ipcRenderer.sendSync("option:no", "");
  };

  render() {
    return (
      <div className="ui  segment">
        <button className="ui button">Yes</button>
        <button className="ui button">No</button>
      </div>
    );
  }
}

export default OptionList;
