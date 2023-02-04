import React, { useState } from 'react'
import Sidebar from '../shared/Sidebar';

function Registermanage() {
    const [profession , setProfession] =useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(profession === '')
            alert( 'please Enter Something')

        else{
            console.log(profession);
            alert('hi')

        }
    }

  return (
    <>
        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <div className="s-layout">
                <div className="s-layout__sidebar">
                    <Sidebar />
                </div>
                <main className="s-layout__content">
                    <div className='container'>
                        <div>
                            <h4 className='border-bottom text-light mb-4 pb-2'>Register Management</h4>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <form>
                                    <div className='form-group'>
                                        <label className='form-label text-light'>Enter Profession</label>
                                        <input type='text' className='form-control' value={profession} onChange={(e)=> setProfession(e.target.value)} placeholder='Enter Profession' />
                                    </div>
                                    <button onClick={(e) => handleSubmit(e)} className='btn btn-success mt-3'>Submit</button>
                                </form>
                            </div>
                        </div>


                        
                        <table className="table table-dark table-hover table-striped table-responsive mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Profession Name</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    state ?
                                        state.map((data, i ,  key) =>
                                            <tr key={key}>
                                                <td>{++i}</td>
                                                <td>{data.firstName}</td>
                                                <td>{data.lastName}</td>
                                                <td>{data.email}</td>
                                                <td>{data.mobileNo}</td>
                                                <td>{data.profession ? data.profession : "--"}</td>
                                                <td>{data.category ? data.category : "--"}</td>
                                                <td>{data.createdAt}</td>
                                                <td>
                                                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(data.id)}><i className='fa fa-trash'></i></button>
                                                    {
                                                        data.Isapproved === 0 ?  
                                                    <button className='btn btn-sm btn-success mx-2' onClick={() => handleApprove(data.id)}><i className='fa fa-check'></i></button>
                                                        :
                                                    <button className='btn btn-sm btn-danger mx-2' onClick={() => handleReject(data.id)}><i className='fa fa-times mx-1'></i></button>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                        :
                                        null
                                } */}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    </>
  )
}

export default Registermanage