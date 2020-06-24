import React, { Component } from "react";
import "./app.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import MainHeader from "./components/MainHeader";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Editor from "./contents/Editor";
import About from "./contents/About";
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={Editor} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
      </Provider>
    );
  }
}

export default App;
