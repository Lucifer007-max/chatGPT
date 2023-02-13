import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../../redux/authSlice';
function Adminlogin() {
    const  formdata = {email: '' , password: ''};
    const [responseBody , setresponseBody] = useState(formdata);
    const inputChangeHandler = (e) => {const {name ,value} = e.target; setresponseBody({...responseBody , [name] : value})}
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        await dispatcher(loginAdmin(responseBody))
        navigate('/admin')
    }
  return (
    <div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-12 col-lg-4">
                    <div className="card login-box-container">
                        <div className="card-body">
                            <div className="authent-logo d-none">
                                <img src="../../assets/images/logo@2x.png" alt="" />
                            </div>
                            <div className="authent-text">
                                <p>Welcome to Admin </p>
                                <p>Please Sign-in to your account.</p>
                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" name='email' onChange={(e)=>inputChangeHandler(e)} placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                      </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" name='password' onChange={(e)=>inputChangeHandler(e)}  placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                      </div>
                                </div>
                                <div className="mb-3 form-check d-none">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-info m-b-xs" onClick={handleLogin}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin