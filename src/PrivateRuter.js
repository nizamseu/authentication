import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authContrast } from './ContrastApi';

const PrivateRuter = ({children, ...rest}) => {
    const  [userInfo,setUserInfo]=useContext(authContrast);
  console.log("from auth",userInfo);
    return (
      <Route
      {...rest}
      render={({ location }) =>
      userInfo.islogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRuter;