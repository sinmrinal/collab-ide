import React, { Component } from "react";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={} />
        <Route path="/about" component={} />
      </Switch>
    </Provider>
  );
}


export default App;
