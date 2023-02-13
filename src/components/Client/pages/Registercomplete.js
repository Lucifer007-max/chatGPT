import * as React from 'react';
import { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useProfessionGetQuery , useCategoryGetQuery } from '../../../redux/registerApi';
function Registercomplete() {
  const [show, setShow] = React.useState(true);
  const [optionselect , setOptionselect] = React.useState('');
  const handleClose = () => setShow(true);


  const {data:prolist} = useProfessionGetQuery();
  const {data:catlist} = useCategoryGetQuery();
  const [professionlist , setProfession] = useState('');
  const [categorylist , setCategory] = useState('');
  
    useEffect(() => {
        for (let j in prolist){
            setProfession(prolist[j].professionName)
        }
    }, [prolist])
    useEffect(() => {
        // for (let i =0; i < catlist.length; i++){
        //      setCategory(catlist.categoryName)
        //     // console.log("??????????????????" , catlist[j].categoryName);
        // }
        }, [catlist])
        
        // console.log(catlist, " sselect");
        // console.log(categorylist, "Namepro");
    



// console.log(professionlist);
  const profession = [professionlist , 'Maharastra'];
  const gender = ['Male' , 'Female' , 'Others'];
//   debugger
  const category = {
    professionlist : [categorylist],
      'Maharastra' : ['Pune' ,  'Nagpur' , 'Bardi' , 'SEZ mihin']
  }
  const handleSubmit = (e) => {
      alert('hi')
  }

  return (
    <Modal show={show} onHide={handleClose}  size="lg" centered>
            <Modal.Header className='modal--header' >
                <Modal.Title id="contained-modal-title-vcenter">
                    Please Complete Your Profile
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
                                        {profession.map((option) => (<MenuItem key={option} value={option}>{option} </MenuItem> ))}
                                    </TextField>
                                </Box>
                            </Form.Group>
                            <Form.Group className="mb-4 col-lg-6">
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                {optionselect &&<TextField select label="Select your Category" variant="standard" className='w-100'>
                                        {category[optionselect]?.map((option) => (<MenuItem key={option} value={option}>{option} </MenuItem> ))}
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
  );
}

export default Registercomplete;




