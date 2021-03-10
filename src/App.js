import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/Login";
import SignUpPage from "./Components/LoginPage/SignUpPage";
import PostAdd from './Components/LoginPage/PostAd'
import ProductDetail from "./Components/ProductDetails/ProductDetail";

const App = () => {
  return (
    <div>
      
          <Switch>
            {/* <Route exact path="/login" component={Login}/> */}
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/Signup" component={SignUpPage}/> */}
            <Route exact path="/postAdd" component={PostAdd}/>
            <Route exact path="/ProductDetail" component={ProductDetail}/>
            <Redirect to="/"/>
          </Switch>
      
    </div>
  );
};

export default App;
