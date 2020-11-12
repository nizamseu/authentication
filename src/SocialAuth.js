import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { authContrast } from './ContrastApi';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from'./firebaseConfig';
import './style.css'

//firebase.initializeApp(firebaseConfig)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

const SocialAuth = () => {

    const [userInfo,setUserInfo]= useContext(authContrast);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const gitProvider = new firebase.auth.GithubAuthProvider();
   
   console.log("data",userInfo);

// Logging With google
   const handleGoogle= ()=>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const {displayName,email,photoURL}=res.user
        const  logedIn={
            islogged:true,
            name:displayName,
            email:email,
            photo:photoURL
        }
       setUserInfo(logedIn)
      }).catch(error=> {
        console.log(error);
      });

   }

   // Logging With google End


   // Logging With Github
   const handleGit= ()=>{
    firebase.auth().signInWithPopup(gitProvider)
    .then(res=> {
        console.log("gittt",res);
        const {displayName,email,photoURL}=res.user
        const  logedInWithGit={
            islogged:true,
            name:displayName,
            email:email,
            photo:photoURL
        }
       setUserInfo(logedInWithGit)
      })
      .catch(error => {
        console.log(error);
      });
   }
 // Logging With Github end


   // Logging With Facebook
   const handleFb=()=>{
    firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        const {displayName,email,photoURL}=res.user
        const  logedInWithFb={
            islogged:true,
            name:displayName,
            email:email,
            photo:photoURL
        }
       setUserInfo(logedInWithFb)
      })
      .catch(error=> {
        console.log(error);
      });
   }
// Logging With Facebook end

   // Looged Out Area
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

   // Looged Out Area End



    return (
        <Grid xs={12}>
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
            
       
            <Grid item xs={12} container  direction="column" alignItems="center" justify="center" >
                    <Typography variant="h2">Authentication</Typography>
                    
                    <Typography> {userInfo.name} </Typography>
                    <Typography> {userInfo.email} </Typography>
            </Grid>
            {
            !userInfo.islogged &&
            
            <Grid container xs={12}>
                {/* <Grid xs={2} /> */}
                
                   
                <Grid container justify="center" xs= {6} >
                        <h4>Register With Email & Password</h4>
                        
                        
                    </Grid>
                    <Grid direction="column" container alignItems='center' justify="center" xs= {6}>
                      
                       
                        <Typography > Login With Social Media </Typography>
                        <Box className="space">
                            <Button onClick={()=> handleGoogle() }
                                variant="contained"
                                color="primary"
                              
                                >
                                Google
                            </Button>

                            <Button onClick={()=> handleGit()}
                                variant="contained"
                                color="secondary "

                                >
                                GitHub
                            </Button>
                            <Button onClick={()=> handleFb()}
                                variant="contained"
                                color="secondary "
                                 
                                >
                                 Facebook
                            </Button>
                        </Box>
                    </Grid>
                 

                

                {/* <Grid  xs={2} /> */}

            </Grid>
            }

        </Grid>
    );
};

export default SocialAuth;