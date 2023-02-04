import React from 'react'
import '../../Admin/assets/admin.css';

function Card(props) {
  // console.log(props);
  return (
    <div>
        <div className='card'>
            <h4 className='text-center mb-3'>{props.title}</h4>
            <h5  className='text-center m-0'>{props.count}</h5>
        </div>
    </div>
  )
}

export default Card




