import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Aside />
          <Main />
        </div>
      </>
    );
  }
}

export default App;
