import {React, useState} from 'react'
import Skeleton from '@mui/material/Skeleton';
function Chat() {
    const [data, setdata] = useState('')
    // setdata()
  return (
    <div className='conatiner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='text-light text-center padding-top'>Chat GPT AI</h2>
                </div>
                <div className='col-lg-12 p-0'>
                    <div className='chat--area text-light '>
                        <div className='ib-chat--ai-box bg-ai-chat'>
                            <div className=' w-80'>
                              <div className='mob-padding d-flex'>
                                    <figure>
                                        <div className='ib-ai-profile'>
                                            a
                                        </div>
                                    </figure>
                                    {
                                        data === ''? 
                                            <div className='flex-column d-flex w-100 px-2'>
                                            <Skeleton />
                                            <Skeleton />
                                            <Skeleton />
                                            <Skeleton />
                                            <Skeleton />
                                            </div>
                                        :
                                        <div  className='chat-txt-ai'>
                                            Jun 2022
                                            Disclaimer
                                            Although many people said 'it worked' and very few say 'it didn't'.

                                            It is hard to say what could be the cause and it is not working. Personally, the solution provided below worked for me and I didn't get any issues so far hence I am sharing this.

                                            I don't suggest uninstalling, so you can basically back up the file and try this solution. If it doesn't work then place those files again.
                                        </div>
                                    }
                              </div>
                            </div>
                        </div>
                        <div className='ib-chat--ai-box bg-user-chat'>
                            <div className='     w-80'>
                                <div className='mob-padding d-flex flex-row-reverse'>
                                    <figure>
                                        <div className='ib-ai-profile'>
                                            a
                                        </div>
                                    </figure>
                                    <div className='chat-txt-user'>
                                        Jun 2022
                                        Disclaimer
                                        Although many people said 'it worked' and very few say 'it didn't'.

                                        It is hard to say what could be the cause and it is not working. Personally, the solution provided below worked for me and I didn't get any issues so far hence I am sharing this.

                                        I don't suggest uninstalling, so you can basically back up the file and try this solution. If it doesn't work then place those files again.
                                    </div>
                                </div>
                            </div>
                        </div>
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