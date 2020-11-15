import { AppBar,  Button,  Grid, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { authContrast } from './ContrastApi';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from'./firebaseConfig';
import './style.css'

const Home = () => {
    const [userInfo,setUserInfo]= useContext(authContrast);

    const handleLoggedOut =()=>{
        firebase.auth().signOut()
        .then(res=> {
            const  logedOut={
                islogged:false,
                name:'',
                email:'',
                photo:''
            }
           setUserInfo(logedOut)
    
          }).catch(error => {
            console.log(error);
          });
       }
    return (
        <div>
            <AppBar >
                <Toolbar >
                    <Typography style={{flexGrow:'2'}}>Home</Typography>
                    {userInfo.islogged &&  
                    <Typography>
                        <Typography>
                            {userInfo.email}
                        </Typography>
                        <Button onClick={()=> handleLoggedOut()} color="secondary">
                            Log Out
                        </Button>
                    </Typography>
                    }
                            
                    
                    
                </Toolbar>
            </AppBar>
            
        </div>
    );
};

export default Home;