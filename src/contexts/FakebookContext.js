import React, { createContext, Component } from "react";

export const FakebookContext = createContext();

class FakebookContextProvider extends Component {
  state = {
    user: {
      id: 5,
      name: "Max Mustermann",
    },
  };

  render() {
    return (
      <FakebookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FakebookContext.Provider>
    );
  }
}

export default FakebookContextProvider;
