import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from 'contents/Home';
import CollabEditor from 'contents/CollabEditor';

import "assets/css/global.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route path="/room/:id" children={<CollabEditor/>} />
      </Switch>
    </Provider>
  );
}


export default App;
