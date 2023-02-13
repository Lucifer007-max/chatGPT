import {React, useEffect, useState} from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useCodegGetQuery } from '../../../redux/chatIB';
function Chat() {
    
    const [name, setName] = useState('')
    // const [userID , setuserID]   = useState(localStorage.getItem('IB-uid'));
    // setuserID( localStorage.getItem('IB-uid'))
    const id =  localStorage.getItem('IB-uid')
    const {data , isLoading , isFetching , isSuccess  , error}  = useCodegGetQuery(id);
    useEffect(() => {
        console.log(data);
      setName( localStorage.getItem('IB-uName'))
    }, [])
    
    



 // setName()
  return (
    <div className='conatiner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='text-light text-center padding-top'>Chat GPT AI</h2>
                </div>
                <div className='col-lg-12 p-0'>
                    <div className='chat--area text-light '>
                {isLoading && <div className='flex-column d-flex w-100 py-2'><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div>}
                {isFetching && <div className='flex-column d-flex w-100 py-2'><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div>}
                {isSuccess && 
                (
                    <>
                        {
                            data.map((list,i) => {
                                return(
                                    <div key={i}>
                                        <div className='ib-chat--ai-box bg-user-chat'>
                                            <div className='w-80'>
                                                <div className='mob-padding d-flex flex-row-reverse'>
                                                    <figure>
                                                        <div className='ib-ai-profile'>
                                                            {name === ''? '' : name}
                                                        </div>
                                                        {/* <div className='ib-ai-profile'>
                                                            C
                                                        </div> */}
                                                    </figure>
                                                    <div className='chat-txt-user'>
                                                      {list.queryPrompt}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='ib-chat--ai-box bg-ai-chat' key={i}>
                                            <div className=' w-80'>
                                            <div className='mob-padding d-flex'>
                                                    <figure>
                                                        {/* <div className='ib-ai-profile'> */}
                                                            <img src="https://th.bing.com/th/id/OIP.5KkuJ0DyoNuLtoV6Kt1wDwHaHa?pid=ImgDet&rs=1" width={40} alt='ib-logo' className='mt-3' />
                                                        {/* </div> */}
                                                    </figure>
                                                        <div  className='chat-txt-ai'>
                                                        {/* <code>
                                                        <pre> */}
                                                           {list.result}

                                                        {/* </pre>

                                                        </code> */}
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
                {/* <div className='form--area'>
                    <Button variant="outlined" className='w-100 py-2' >Click Me</Button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Chat