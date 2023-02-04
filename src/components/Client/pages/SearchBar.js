import React from 'react'
import SendIcon from '@mui/icons-material/Send';
function SearchBar() {
  return (
    <div className='container main--cont  p-0'>
        <div className='container main--child  p-0'>
            <div className='search-Bar '>
                <div className='w-80'>
                    <div className='d-flex align-items-center position-relative'>
                        <input type='text' placeholder='Search'  className='form-control' />
                        <div className='svgdiv'><SendIcon className='send--svg'/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar