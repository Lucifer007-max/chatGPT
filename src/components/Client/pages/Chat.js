import {React, useEffect, useState} from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useCodegGetQuery } from '../../../redux/chatIB';
import WelcomePage from './WelcomePage';
function Chat() {
    
    const [name, setName] = useState('')
    useEffect(() => {
        setName(localStorage.getItem('IB-uName'))
    }, [])
    const id =  localStorage.getItem('IB-uid')
    const {data , isLoading , isFetching , isSuccess , isUninitialized }  = useCodegGetQuery(id);
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
    }
    handleScroll();





  return (
    <div className='conatiner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    {/* <h2 className='text-light text-center padding-top'>IB AI</h2> */}
                </div>
                <div className='col-lg-12 p-0'>
                    <div className='chat--area text-light '>
                {isLoading  && <div className='flex-column d-flex w-100 py-2'><Skeleton /> <Skeleton /> <Skeleton /> <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div>}
                {isUninitialized && <div className='flex-column d-flex w-100 py-2'><Skeleton /> <Skeleton /> <Skeleton /> <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /> </div>}
                {isSuccess && 
                    (
                        <>
                            {
                             data.length === 0 ? <WelcomePage/> :
                                data.map((list,i) => {
                                    return(
                                        <div key={i}>
                                        {isFetching && <div className='flex-column d-flex w-100 py-2'><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div>}
                                            <div className='ib-chat--ai-box bg-user-chat'>
                                                <div className='w-80'>
                                                    <div className='mob-padding align-items-baseline d-flex flex-row-reverse'>
                                                        <figure>
                                                            <div className='ib-ai-profile'>
                                                                {name === ''? '' : name.slice(0,1)}
                                                            </div>
                                                        </figure>
                                                        <div className='chat-txt-user'>
                                                            {list.queryPrompt}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='ib-chat--ai-box bg-ai-chat' key={i}>
                                                <div className=' w-80'>
                                                <div className='mob-padding align-items-baseline d-flex'>
                                                        <figure>
                                                            <img src="https://th.bing.com/th/id/OIP.5KkuJ0DyoNuLtoV6Kt1wDwHaHa?pid=ImgDet&rs=1" width={40} alt='ib-logo' className='mt-3' />
                                                        </figure>
                                                        <div className='chat-txt-ai'>
                                                            {list.result}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) 
                                
                            }
                        </>
                    )
                }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat