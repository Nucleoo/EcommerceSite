import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Shipping from "./Shipping";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const promise = loadStripe(
  'pk_test_51J4fkjB4m1qW0l8kFXsaEopqzgPDbZHkjo2fs7iOl6WOG2ScjKH06vGYzm2n0qO2eTMDzVtkCJSDEbwfgifMnNoZ00EcqDxrVq');


const App = () => {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('The user is -->>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/"> <Header /> <Home /> </Route >
          <Route exact path="/login"> <Login /> </Route >
          <Route exact path="/checkout"> <Header /> <Checkout /> </Route >
          <Route exact path="/shipping"> <Header /> <Shipping /> </Route >
          <Route exact path="/orders"> <Header /> <Orders /> </Route >
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route >
        </Switch>
      </Router>
    </>
  )
}

export default App;
