import {React, useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useCodeDelMutation ,useCodecountGetQuery } from '../../../redux/chatIB';
import { useCodedelcountGetQuery } from '../../../redux/chatIB';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import moment from 'moment/moment';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Swal from 'sweetalert2';
function Sidebar() {
  const [uID] = useState(localStorage.getItem('IB-uid'));
  const [time] = useState(localStorage.getItem('currentTIME'));
  const [codeDel] = useCodeDelMutation();
  const id =  localStorage.getItem('IB-uid')
  const {data:count}= useCodecountGetQuery(id);
  const {data:countDel} = useCodedelcountGetQuery(id);
  const handleChat = async () => {
      const data = {"Isdeleted": 1}  
      codeDel({uID , data })
      Swal.fire({
        position: 'top-right',
        type: 'success',
        title: 'Chat Clear Successfully',
        showConfirmButton:false,
        timer:2500,
    });
    }
    const [queryCount , setQueryCount]  = useState('0')
    const [delqueryCount , setDelQueryCount]  = useState('0')
    useEffect(() => {
      setQueryCount(count);
      setDelQueryCount(countDel)
    }, [count, countDel])
    


  return (
    <>
    <ul>
        <li>
            <Button variant="outlined" color="inherit" onClick={handleChat} className='btn-outline-danger-pack btn-new w-100 justify-content-evenly flex-row-reverse'> Clear All Chat <DeleteForeverIcon/> </Button>
        </li>
        <hr/>
        <li>{
        time === null?
        <>
          <AccessTimeIcon/> Current Login : <small>  {moment(Date()).format('yy-MM-DD  -- hh:mm a')}</small>
        </>
        :
        <>
          <AccessTimeIcon/> Last Login : <small>{ moment(time).format('yy-MM-DD  -- hh:mm a') }</small> 
        </>

        }
        </li>
        <hr/>
        <li>
          <QuestionAnswerIcon/> Total Query : <small>{queryCount}</small>
        </li>
        <li>
          <AutoDeleteIcon/> Deleted Query : <small>{delqueryCount}</small>
        </li>


    </ul>
    </>
  )
}

export default Sidebar