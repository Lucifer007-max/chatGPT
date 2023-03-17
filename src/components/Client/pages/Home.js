import {React, useState } from 'react';
import '../assets/css/client.css';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../shared/Sidebar';
import Chat from './Chat';
import Header from '../shared/Header'
import { useCodeTypeMutation } from '../../../redux/chatIB';
// import { v4 as uuid } from "uuid";
const Home = () => {
    const [search, setSearch] = useState('')
    const [uid ] = useState(localStorage.getItem('IB-uid'))
    const [codeType] = useCodeTypeMutation();
    const handleSearch = (e) => {
        setSearch('');
        e.preventDefault();
        codeType({userID: uid , prompt:search})
    }
 
      

    // const initialValue = { 'id': uuid()};
    // const [post, setPost] = useState(initialValue);
    // const [page , setPage] = useState(false)
    // const handleChat = () => {
    //     setPage((prev) => ( 
    //         setPost(true)
    //         // addChat(post)
    //      ));
    // }
    return (
        <>
            <div className="layout has-sidebar fixed-sidebar fixed-header">
                <div className="s-layout">
                    <div className="s-layout__sidebar">
                        <div className="s-sidebar__trigger" >
                            <Header />
                        </div>
                        <div>
                            <nav className="s-sidebar__nav sidebar">
                                <Sidebar />
                            </nav>
                        </div>
                    </div>
                    <main className="s-layout__content">
                        <Chat />
                            <div className='container main--cont  p-0'>
                                <div className='container main--child  p-0'>
                                    <form id='form' className='search-Bar' onSubmit={(e) => handleSearch(e)}>
                                        <div className='w-80'>
                                            <div className='d-flex align-items-center position-relative'>
                                                <input type='text' placeholder='Search' name='search' onInput={(e)=> setSearch(e.target.value)} className='form-control' />
                                                <button type='button' className='svgdiv' onClick={(e) => handleSearch(e)}><SendIcon className='send--svg'/></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;






