import {React , useState , useEffect} from 'react'
import Sidebar from '../shared/Sidebar';
import moment from 'moment';

import { useUserListGetQuery ,useUserStatusMutation, useUserDeleteMutation } from '../../../redux/userlistApi';
function UserList() {
    
    
    const {data:userList} = useUserListGetQuery();
    const [state, setState] = useState(['']); 

    const [userStatus] = useUserStatusMutation();

       
    const [userDelete] =useUserDeleteMutation();
    useEffect(() => {
        setState(userList)
        // console.log(userList);
    }, [userList])
    
    const handleApprove =async (id)  => {
        var approve = {Isapproved : '1'}
        await userStatus({id , approve})
    };
    const handleReject = async (id)  => {
        var approve = {Isapproved : '0'}
        await userStatus({id , approve})
    };
    const handleDelete = async (id) => {
        await userDelete(id)
        // axios.delete(config.API + 'users/deleteUser/'+ id )
        // .then(((res)  => {console.log(res)})) 
        // .catch((error) => {console.log(error)})
    };


  return (
      <div className="layout has-sidebar fixed-sidebar fixed-header">
          <div className="s-layout">
              <div className="s-layout__sidebar">
                  <Sidebar />
              </div>
              <main className="s-layout__content">
                  <div className='container mt-5'>
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
                                  <th scope="col">Password</th>
                                  {/* <th scope="col">Mobile No</th> */}
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
                                          <tr key={i}>
                                              <td>{++i}</td>
                                              <td>{data.firstName}</td>
                                              <td>{data.lastName}</td>
                                              <td>{data.email}</td>
                                              <td>{data.hash}</td>
                                              {/* <td>{data.mobileNo}</td> */}
                                              <td>{data.professionName ? data.professionName : "--"}</td>
                                              <td>{data.categoryName ? data.categoryName : "--"}</td>
                                              <td>{moment(data.createdAt).format('YY-MM-DD')}</td>
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