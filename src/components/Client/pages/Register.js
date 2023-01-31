import React from 'react'
import '../assets/css/client.css';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import EmailIcon from '@mui/icons-material/Email';




function Register() {
  return (
    <section className='theme_color' id='register-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0'>
                    <div className='login_body'>
                        <div className='ib_form_area'>
                        <h3 className='text-center login_title'>Create A New Account</h3>
                            <Form autoComplete='off'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField type="text" id="input-with-sx" label="First Name" variant="standard" className='w-100' />
                                    </Box>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField type="text" id="input-with-sx" label="Last Name" variant="standard" className='w-100' />
                                    </Box>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField type="email" id="input-with-sx" label="Email" variant="standard" className='w-100' />
                                </Box>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms of service" />
                                    <h6 className='f-pass d-block my-3'>Forget Password</h6>
                                </Form.Group>

                                <Link to='/home'>
                                    <Button variant="outlined" className='w-100 py-2'>Register</Button>
                                </Link>
                            </Form>
                        </div>
                        <h6 className='register_txt'>If you already have an account ! <Link to='/login' className='decoration-none'>  Click Here </Link></h6>
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

export default Register