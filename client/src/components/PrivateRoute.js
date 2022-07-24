import React from 'react';
import {Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({...rest}) => {
  let navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('token'));
    if (auth){
        if (auth.token){
          return <Route {...rest}/>
        }
    }
  return navigate("/signin")
};

export default PrivateRoute;
