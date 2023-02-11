import React, { useState } from 'react';
import '../assets/css/client.css';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Chat from './Chat';
// import SearchBar from './SearchBar';
import Header from '../shared/Header'
import { useCodeTypeMutation } from '../../../redux/chatIB';


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
    const handleSubmit = (e) => {
        alert('hi')
    }
    const [search, setSearch] = useState('')
    // const {data: list  , error , isSuccess ,  isFetching} = useCodeTypeMutation();
    const [codeType] = useCodeTypeMutation();
    const handleSearch = () => {
        codeType({prompt:search})
        // console.log(search);
    }
    return (
        <>
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <div className="s-layout">
        <div className="s-layout__sidebar">
            <div className="s-sidebar__trigger" >
            {/* <h2 className='text-light logo--txt'>CHAT GPT AI</h2> */}
            <Header />
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
            <Chat />
            <div className='container main--cont  p-0'>
                <div className='container main--child  p-0'>
                    <div className='search-Bar '>
                        <div className='w-80'>
                            <div className='d-flex align-items-center position-relative'>
                                <input type='text' placeholder='Search' name='search' onChange={(e)=> setSearch(e.target.value)} className='form-control' />
                                <div className='svgdiv' onClick={handleSearch}><SendIcon className='send--svg'/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SearchBar/> */}
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






