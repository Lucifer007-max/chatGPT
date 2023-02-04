import {React , useState , useEffect} from 'react'
import Sidebar from '../shared/Sidebar';
import config from '../../../config';
import axios  from 'axios';
function UserList() {
    const [state, setState] = useState(''); 
    useEffect(() => {
        axios.get(config.API + 'users/getUsers')
        .then(((res)  => { setState(res.data.response)})) 
        .catch((error) => {console.log(error)})
    }, [])

    const handleApprove = (id)  => {
        var approve = {Isapproved : '1'}
        axios.put(config.API + 'users/approveUser/'+ id , approve)
        .then(((res)  => {console.log(res)})) 
        .catch((error) => {console.log(error)})

    };
    const handleReject = (id)  => {
        var approve = {Isapproved : '0'}
        axios.put(config.API + 'users/approveUser/'+ id , approve)
        .then(((res)  => {console.log(res)})) 
        .catch((error) => {console.log(error)})
    };

    const handleDelete = (id) => {
        axios.delete(config.API + 'users/deleteUser/'+ id )
        .then(((res)  => {console.log(res)})) 
        .catch((error) => {console.log(error)})
    }


  return (
      <div className="layout has-sidebar fixed-sidebar fixed-header">
          <div className="s-layout">
              <div className="s-layout__sidebar">
                  <Sidebar />
              </div>
              <main className="s-layout__content">
                  <div className='container'>
                      <div>
                          <h4 className='border-bottom text-light mb-4 pb-2'>User List</h4>
                      </div>
                      <table className="table table-dark table-hover table-striped table-responsive">
                          <thead>
                              <tr>
                                  <th scope="col">Sr No.</th>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Mobile No</th>
                                  <th scope="col">Profession</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Joining Date</th>
                                  <th scope="col">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
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
                              }
                          </tbody>
                      </table>
                  </div>
              </main>
          </div>
      </div>
  )
}

export default UserList