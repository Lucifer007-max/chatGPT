import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useCategoryNameByProfessionQuery ,useUserRegisterCompleteMutation } from '../../../redux/registerApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Registercomplete() {
    const handleClose = () => setShow(true);
    const [show, setShow] = React.useState(true);
    const [optionselect , setOptionselect] = React.useState('');
    const proID = localStorage.getItem('proID')
    const {data:catlist} = useCategoryNameByProfessionQuery(proID);
     const gender = ['Male' , 'Female' , 'Others'];
    const [userRegisterComplete] = useUserRegisterCompleteMutation();
    const [genderselect , setGender] = useState(null);
    const [date , setDate] = useState(null);
    const [uID] = useState(localStorage.getItem('IB-uid'));
    const navigate = useNavigate();
    const handleSubmit =  (e) => {
        if(genderselect === '') {
            alert('please Enter Gender')
        }
        if(optionselect === '') {
            alert('please select Category')
        }
        else{
            var data = {"category": optionselect ,  "gender": genderselect ,"dob":date}
            userRegisterComplete({uID,data})
            navigate('/')
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Thanks you 👍',
                text:'Once you account is approved you can access you workspace it takes around 1-2 days',
                showConfirmButton:true,
            });
        }
    }
   

  return (
    <Modal show={show} onHide={handleClose}  size="md" centered>
            <Modal.Header className='modal--header' >
                <Modal.Title id="contained-modal-title-vcenter">
                    Please Complete Your Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <Form autoComplete='off'>
                        <div className='row flex-column align-items-center'>
                            <Form.Group className="mb-4 col-lg-10">
                                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Category" helperText="Select your Category" variant="standard" className='w-100'> */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Category"   variant="standard" className='w-100' onChange={(e) => { setOptionselect(e.target.value)}}>
                                    {catlist?.map((data , i,) => (<MenuItem key={i} value={data.id}>{data.categoryName} </MenuItem> ))}
                                </TextField>
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-10">
                                <small className='small'>Select Your DOB</small>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <input type="date" className='form-control date-input px-0' name='date' value={date} onChange={(e)=> setDate(e.target.value)} />
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-10">
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField select label="Select your Gender" variant="standard" className='w-100' onChange={(e)=> {setGender(e.target.value)}}>
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
  );
}

export default Registercomplete;




