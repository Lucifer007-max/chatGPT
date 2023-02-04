import React, { useState } from 'react';
import '../assets/css/client.css';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Header from '../shared/Header';
import AddIcon from '@mui/icons-material/Add';
import Chat from './Chat';
import SearchBar from './SearchBar';
const Home = () => {
    const [show, setShow] = useState(false);
    const [optionselect , setOptionselect] = useState('');
    const handleClose = () => setShow(true);
    const state = ['West Bengal','Maharastra'];
    const gender = ['Male' , 'Female' , 'Others'];
    const city = {
       'West Bengal' : ['Kolkata' ,  'Raniganj' , 'Asn' , 'Durgapur'],
        'Maharastra' : ['Pune' ,  'Nagpur' , 'Bardi' , 'SEZ mihin']
    }
    // closeButton


    const handleSubmit = (e) => {
        alert('hi')
    }
    return (
        <>
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <div className="s-layout">
        <div className="s-layout__sidebar">
            <div className="s-sidebar__trigger" >
            <h2 className='text-light logo--txt'>CHAT GPT AI</h2>
                <i className="fa fa-bars">
                </i>
            {/* <Header /> */}
            </div>
            <div>
                <nav className="s-sidebar__nav sidebar">
                <ul>
                    <li>
                        <Button variant="outlined" color="inherit" className='btn-new w-100 justify-content-evenly flex-row-reverse'> Add New Wrokspace <AddIcon/> </Button>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
        <main className="s-layout__content">
            <Chat/>
            <SearchBar/>
        </main>
      </div>
    </div>
            









        <Modal show={show} onHide={handleClose}  size="lg" centered>
            <Modal.Header className='modal--header' >
                <Modal.Title id="contained-modal-title-vcenter">
                    Heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <Form autoComplete='off'>
                        <div className='row flex-column align-items-center'>
                            <Form.Group className="mb-4 col-lg-6">
                                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Category" helperText="Select your Category" variant="standard" className='w-100'> */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Profession"  variant="standard" className='w-100' onChange={(e) => { setOptionselect(e.target.value)}}>
                                        {state.map((option) => (<MenuItem key={option} value={option}>{option} </MenuItem> ))}
                                    </TextField>
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-6">
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                {optionselect &&<TextField select label="Select your Category" variant="standard" className='w-100'>
                                        {city[optionselect].map((option) => (<MenuItem key={option} value={option}>{option} </MenuItem> ))}
                                    </TextField>}
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-6">
                                <small className='small'>Select Your DOB</small>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <input type="date" className='form-control date-input px-0' />
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-6">
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Gender" variant="standard" className='w-100'>
                                        {gender.map((option) => (<MenuItem key={option} value={option}>{option} </MenuItem> ))}
                                    </TextField>
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-6">
                                <Button variant="outlined" className='w-100 py-2' onClick={handleSubmit}>Submit</Button>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    </>
    );
};

export default Home;