import React, { createContext } from "react";
import "./App.css";
import Booking from "./Components/Booking/Booking";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
export const UserContext = createContext();

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/create-account">
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
