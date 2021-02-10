import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import VideoPlayer from '../pages/VideoPlayer';
import ShakaPlayer from '../pages/ShakaPlayer';

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
      </Switch>
    </Router>
  );
};

export default AppRouter;
