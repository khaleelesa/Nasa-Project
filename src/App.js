import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/container/Home";
import Search from "./components/container/search/Search";
import Favourites from "./components/container/Favourites";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Container">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" exact render={() => <Search />} />
          <Route path="/favorits" exact render={() => <Favourites />} />
          <Route
            path="/favourite/:id"
            exact
            render={(match) => <Favourites match={match} />}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
