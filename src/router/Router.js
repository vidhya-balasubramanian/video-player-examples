import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import VideoPlayer from '../pages/video-player/VideoPlayer';
import ShakaPlayer from '../pages/ShakaPlayer';
import GraphqlExample from '../pages/graphql/GraphqlExample';
import JSExamples1 from '../pages/JSExamples1';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/video-js">
          <VideoPlayer />
        </Route>
        <Route path="/shaka-player">
          <ShakaPlayer />
        </Route>
        <Route path="/graphql">
          <GraphqlExample />
        </Route>
        <Route path="/js-examples">
          <JSExamples1 />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
