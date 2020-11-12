import React, { useContext } from 'react';
import { authContrast } from './ContrastApi';




const Auth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [userInfo,setUserInfo]=  useContext(authContrast)
    return (
        <div>
            <h1>Auth Data Is here</h1>
        </div>
    );
};

export default Auth;