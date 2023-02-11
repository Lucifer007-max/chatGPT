import React, { useState } from 'react'
import Sidebar from '../shared/Sidebar';
import {
    useCategoryCreateMutation ,  
    useProfessionCreateMutation,
    useProfessionGetQuery,
    useFinalistGetQuery,
    useFinallistDeleteMutation
} from '../../../redux/registerApi'
function Registermanage() {
    const [profession , setProfession] = useState('');
    const [professionselect , setProfessionselect] = useState(null);
    const [category , setCategory] = useState('');
    
    
    
    
    const [professionCreate] = useProfessionCreateMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(profession === '')
        alert( 'please Enter Something')
        else{

            await professionCreate({professionName: profession})
        }
    }  
    const { data: lists , isSuccess: success } =  useProfessionGetQuery();
    const {data: list  , error , isSuccess ,  isFetching} = useFinalistGetQuery();
    
    
    const [categoryCreate] = useCategoryCreateMutation();
    const handleProfession = (e) => {
        e.preventDefault();
        if(professionselect === null || ''){
            alert('Please select Profession')
        }
        else if(category === ''){
            alert('Please Enter Category Name')
        }
        else{
            categoryCreate({professionID :professionselect , categoryName: category })
        }
    }    
    const [finallistDelete] = useFinallistDeleteMutation();
    const handleDelete = (id) => {
        console.log(id);
        finallistDelete(id)
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
                                            <label className='form-label text-light'>Create New Profession</label>
                                            <input type='text' className='form-control' value={profession} onChange={(e)=> setProfession(e.target.value)} placeholder='Enter Profession' />
                                        </div>
                                        <button onClick={(e) => handleSubmit(e)} className='btn btn-success mt-3'>Submit</button>
                                    </form>
                                </div>
                                <div className='col-lg-6 offset-lg-2'>
                                    <form>
                                        <div className='form-group'>
                                            <label className='form-label text-light'>Select Profession</label>
                                            {/* {isLoading && <h3>Error</h3>} */}
                                            {/* {err && <h3>Error</h3>}*/}
                                            <select className='form-select' onChange={(e)=> {setProfessionselect(e.target.value)}}>
                                            <option defaultValue='select any option'>-- Select any option --</option>
                                                {success && (
                                                        <>
                                                            {
                                                                lists.map((list, i) => {
                                                                    return (
                                                                        <option key={i} value={list.id}>{list.professionName}</option>
                                                                    )
                                                                })

                                                            }
                                                        </>
                                                    )
                                                } 
                                            </select>
                                        </div>
                                        <div className='form-group mt-3'>
                                            <label className='form-label text-light'>Enter Category</label>
                                            <input type='text' className='form-control' name='category' value={category} onChange={(e)=> setCategory(e.target.value)} placeholder='Enter Category' />
                                        </div>
                                        <button className='btn btn-info float-end mt-3' onClick={(e) => handleProfession(e)}> Submit</button>
                                    </form>
                                </div>
                            </div>
                            <>
                                {/* {isLoadding && <h2>...Loading</h2>} */}
                                {isFetching && <h2>...Loading</h2>}
                                {error && <h2>Something Went Wrong</h2>}
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
                                        {isSuccess && (
                                            <>
                                                {
                                                    list ?
                                                    list.map((data, i ,  key) =>
                                                        <tr key={i}>
                                                            <td>{++i}</td>
                                                            <td>{data.professionName}</td>
                                                            <td>{data.categoryName}</td>
                                                            <td>{data.createdAt}</td>
                                                            <td>
                                                            <button className='btn btn-sm btn-danger' onClick={() => handleDelete(data.id)}><i className='fa fa-trash'></i></button>
                                                                    {/* {
                                                                    data.Isapproved === 0 ?  
                                                                <button className='btn btn-sm btn-success mx-2' onClick={() => handleApprove(data.id)}><i className='fa fa-check'></i></button>
                                                                    :
                                                                <button className='btn btn-sm btn-danger mx-2' onClick={() => handleReject(data.id)}><i className='fa fa-times mx-1'></i></button>
                                                                } */}
                                                            </td>
                                                        </tr>
                                                    ) :   null
                                                }
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Registermanage