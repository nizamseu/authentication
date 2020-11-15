import { useState } from "react";
import { authContrast } from "./ContrastApi";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Shipment from "./Shipment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRuter from "./PrivateRuter";

const { default: SocialAuth } = require("./SocialAuth");

function App() {
  const  [userInfo,setUserInfo]= useState({
    name:'',
    photo:'',
    email:'',
    islogged:false,
    error:'',
    success:false,
    isValid:''
  })


  return (
    <div>
      <h1>Authentication</h1>
      <authContrast.Provider value={[userInfo,setUserInfo]}>
      <Router>
      <Home></Home>
         <Switch>



    
        <Route path ="/product">
          <ProductPage></ProductPage>
        </Route>

        <Route path="/login">
            <SocialAuth></SocialAuth>
        </Route>
        
        <PrivateRuter path="/shipment">
          <Shipment></Shipment>
        </PrivateRuter>

        <Route path ="/">
          <ProductPage></ProductPage>
        </Route>

        
            <ProductPage></ProductPage>
         

        
           <Shipment></Shipment>
        
           </Switch>
           </Router>
      </authContrast.Provider>
    </div>
  );
}

export default App;
