import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const isToken = localStorage.getItem("token"); 
  const isRole = localStorage.getItem("role"); 
  const approve = localStorage.getItem('approve')
  const id = localStorage.getItem('IB-uid');
  if(!isToken){
      return <Navigate to={'/'}/>
    }
    if(isRole === 'user') {
        if(approve === "1"){
            return children;
        }
        else {
            return <Navigate to={`/completeReg/${id}`}/>
        }
    }
}

export default ProtectedRoutes;