import React from 'react';
import {Route ,  Navigate} from 'react-router-dom';
function ProtectedRoutes({auth , component : Component , ...rest}) {
  return (
    <Route {...rest}  render={(props) => {
        if(auth)  return <Component />
        if(!auth) return <Navigate to={{path:'/' , state: {from: props.location}}} />
    }} />
  )
}

export default ProtectedRoutes