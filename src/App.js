import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Components/Heading";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { setCurrentUser } from "./Components/AuthenticationSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("User is: " + authUser.email);
        dispatch(
          setCurrentUser({
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Heading />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
