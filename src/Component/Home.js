import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, addUser, setUsers } from './usersSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then((res) => {
        setUser(res.data);
        dispatch(setUsers(res.data)); // Initialize the Redux state with fetched data
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8080/users/${id}`)
      .then((res) => {
        // If the delete operation was successful, remove the deleted user from the state
        setUser((prevUsers) => prevUsers.filter((u) => u.id !== id));
        dispatch(deleteUser(id)); // Remove the deleted user from Redux
        alert('User deleted Successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <br />
      <Link to="/create" className="btn btn-sm btn-info">
        Create+
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, index) => (
            <tr key={index}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.localDate}</td>
              <td>
                <Link to={`/edit/${u.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteUser(u.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>

                {/* <Link to={`/edit/${u.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;



// import { UseSelector, useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"
// import { deleteUser } from "./usersSlice"
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Create from "./Create";

// function Home()
// {
//     const [selectedItem, setSelectedItem] = useState(null);
//     const items = useSelector(state => state.items);

//     const users=useSelector((state) => state.users)
//     const dispatch=useDispatch()
//     // console.log(users)

//     // const handleDelete =(id) => {
//     //     dispatch(deleteUser({id:id}))
//     // }

//     const handleDeleteUser = (id) => {
//         dispatch(deleteUser(id));
//         axios.delete('http://localhost:8080/users/'+id)
//          .then(res => {
//             alert("teacher deleted Successfully")
//         //  window.location.reload();
//          })
//          .catch(error => console.log(error));
//        };

//     // function handleCreate(){
//     //     console.log("rishi")
//     //     return(
            
//     //             <Create />
            
            
//     //     )
        
//     // }

//     const [user, setUser] = useState([]);
//     useEffect( () =>
//       {
//         axios.get('http://localhost:8080/users').
//         then(res => setUser(res.data)).
//         catch(error => console.log(error));
//       },[])
    
//     return(
//         <div className="container">
//             <h2>Crud App with JSON Server</h2>
            
//             <br/>

//             {/* {selectedItem ? (
//                  <Link to="/create" className="btn btn-sm btn-info" >Create+</Link>
//           //<button onClick={handleUpdateItem}>Update</button>
//         ) : (
//         //   <button onClick={handleAddItem}>Add</button>
//         <Link to="/create" className="btn btn-sm btn-info" >Create+</Link>

//         )} */}

//             {/* <button>cre</button> */}

//             <Link to="/create" className="btn btn-sm btn-info" >Create+</Link>
//             {/* <button onClick={() => handleCreate() } className="btn btn-sm btn-danger ms-2">Create+</button> */}

//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Date</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 {/* <tbody>
//                     {users.map((user,index) => (
//                         <tr key={index}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <Link to=  {`/edit/${user.id}`}  className="btn btn-sm btn-primary">Edit</Link>
//                                 <button onClick={() => handleDelete(user.id) } className="btn btn-sm btn-danger ms-2">Delete</button>
//                             </td>
//                         </tr>
//                     ))}


//                 </tbody> */}

// <tbody>
//           {
//             user.map((u,index)=>(
//               <tr key={index}>
//                 <td>{u.id}</td>
//                 <td>{u.name}</td>
//                 <td>{u.email}</td>
//                 <td>{u.localDate}</td>
//                 <td>
//                                 <Link to=  {`/edit/${u.id}`}  className="btn btn-sm btn-primary">Edit</Link>
//                                 <button onClick={() => handleDeleteUser(u.id) } className="btn btn-sm btn-danger ms-2">Delete</button>
//                             </td>
//               </tr>
//             ))
//           }
//         </tbody>
//             </table>
//         </div>
//     )
// }

// export default Home