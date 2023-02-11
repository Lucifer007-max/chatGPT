import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const isToken = localStorage.getItem("token"); 
  const isRole = localStorage.getItem("role"); 
  if(!isToken){
      return <Navigate to={'/'}/>
  }
  else{
      if(isRole === 'user'){
          return children
      }else{
          return <Navigate to={'/'}/>
      }
  }
}

export default ProtectedRoutes;