import React, { Component } from "react";
import "./app.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import MainHeader from "./components/MainHeader";
import { Route, Switch } from "react-router-dom";

import Editor from "./contents/Editor";
import About from "./contents/About";

class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={Editor} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
