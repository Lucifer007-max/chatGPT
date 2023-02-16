import React from 'react';
import '../assets/css/client.css';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/userSlice';
import {useNavigate } from 'react-router-dom';
// import Home from './Home';
import Swal from 'sweetalert2';
function Login() {
    const formData = {email: '', password: '' }
    const [responseBody, setResponseBody] = React.useState(formData)
    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    const handleformSubmit = async (e) => {
        e.preventDefault();
        await dispatcher(loginUser(responseBody))
        navigate('/home')
        Swal.fire({
            position: 'top-right',
            type: 'success',
            title: 'Login Successful',
            showConfirmButton:false,
            timer:2500,
        });
    }
    return (
        <section className='theme_color' id='login-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0'>
                        <div className='login_body'>
                            <div className='ib_form_area'>
                            <h3 className='text-center login_title'>Sign Into Your Account</h3>
                                <Form autoComplete='off' onSubmit={handleformSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                            <TextField id="input-with-sx" label="Email or Username" name='email' onChange={(e)=>inputChangeHandler(e)} variant="standard" className='w-100' />
                                        </Box>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField type="password" id="input-with-sx" label="Password" name='password' onChange={(e)=>inputChangeHandler(e)} variant="standard" className='w-100' />
                                    </Box>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <h6 className='f-pass d-block my-3'>Forget Password</h6>
                                    </Form.Group>
                                    {/* <input type="submit" className='btn btn-outline'  value="submit" onSubmit={handleformSubmit} /> */}
                                    <Button variant="outlined" className='w-100 py-2' onClick={handleformSubmit} >
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                            <h6 className='register_txt'>If you don't have account !<Link to='/register' className='decoration-none'>  Click Here </Link></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ripple-background">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle mediun shade4"></div>
                <div className="circle small shade5"></div>
            </div>
        </section>
    )
}

export default Login