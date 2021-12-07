import React from "react";
import OptionList from "./OptionList";

class Question extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>This is a hardcoded question.</h1>
        <OptionList></OptionList>
      </div>
    );
  }
}

export default Question;
