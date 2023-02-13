import {React, useState } from 'react';
import '../assets/css/client.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Chat from './Chat';
import Header from '../shared/Header'
import { useCodeTypeMutation } from '../../../redux/chatIB';
import WelcomePage from './WelcomePage';


const Home = () => {
    const [search, setSearch] = useState('')
    const [uid , setUid] = useState(localStorage.getItem('IB-uid'))
    // const {data: list  , error , isSuccess ,  isFetching} = useCodeTypeMutation();
    const [codeType] = useCodeTypeMutation();
    const handleSearch = () => {
        codeType({userID: uid , prompt:search})
    }
        
    const [chat , setChat] = useState(0);
 
    
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
        {
            chat === 1 ? 
            <WelcomePage/> 
            :
            <>
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
            </>
            }
            
            {/* <SearchBar/> */}
        </main>
      </div>
    </div>
    </>
    );
};

export default Home;






