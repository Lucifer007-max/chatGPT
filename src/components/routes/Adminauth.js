import React from 'react';
import { Navigate } from 'react-router-dom';


function Adminauth({children}) {
    const isToken = localStorage.getItem("token"); 
    const isRole = localStorage.getItem("role"); 
    if(!isToken){
        return <Navigate to={'/administrator/login'}/>
    }
    else{
        if(isRole === 'admin'){
            return children
        }else{
            return <Navigate to={'/administrator/login'}/>
        }
    }
}

export default Adminauth