import React from "react";
import { Route, Switch, Redirect, RouteProps } from "react-router-dom";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import store from "./store";
import Home from 'contents/Home';
import CollabEditor from 'contents/CollabEditor';

import "assets/css/global.css";

interface Props extends RouteProps {
  component: any;
}
const RoomLoaderRoute: React.FC<Props> = (props) => {
  const roomCreated = useSelector((state: RootStateOrAny) => state.room.isCreated);
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        roomCreated ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }
    />
  );
};



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <RoomLoaderRoute exact path="/room/:id" component={CollabEditor} />
      </Switch>
    </Provider>
  );
}


export default App;
