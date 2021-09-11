import "./App.css";
import { Component, useState } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Settings from "./components/Settings";
import Video from "./components/Video";
import Home from "./components/Home";
import Synopsis from "./components/Synopsis";
import Recent from "./components/Recent";
import RecentlyWatchedProvider from "./components/RecentProvider";
function App() {
  return (
    <BrowserRouter>
      <RecentlyWatchedProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/synopsis/:title/:id" component={Synopsis} exact />
            <Route path="/video" component={Video} exact />
          </Switch>
        </div>
      </RecentlyWatchedProvider>
    </BrowserRouter>
  );
}

export default App;
