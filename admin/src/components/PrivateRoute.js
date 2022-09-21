import React from 'react';
import {Route} from 'react-router-dom'
import { useNavigate, Navigate } from "react-router-dom";
import Homepage from "../pages/HomePage/HomePage";

const PrivateRoute = ({...rest}) => {
  let navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('token'));
    if (auth){
        if (auth.token){
          // return <Route {...rest}/>
          return <Route {...rest} render={props => !auth.token? (<Navigate to='/login' />) : (<Homepage {...props} />)} />
        }
    }
  return navigate("/")
};

export default PrivateRoute;

