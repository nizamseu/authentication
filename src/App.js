import { useState } from "react";
import { authContrast } from "./ContrastApi";

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
       <SocialAuth></SocialAuth>
      </authContrast.Provider>

     
    </div>
  );
}

export default App;
