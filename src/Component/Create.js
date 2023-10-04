import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './usersSlice';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [user, setUser] = useState({ name: '', email: '', localDate: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = () => {
    axios
      .post('http://localhost:8080/users', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const newUser = { ...user, id: res.data.id };
        dispatch(addUser(newUser));
        alert('User added Successfully');
        setUser({ name: '', email: '', localDate: '' });
        
      })
      .catch((error) => console.log(error));
      navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleAddUser}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              placeholder="Enter Name"
              value={user.name}
              onChange={(eventObj) =>
                setUser({ ...user, name: eventObj.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              placeholder="Enter Email"
              value={user.email}
              onChange={(eventObj) =>
                setUser({ ...user, email: eventObj.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="text">Date</label>
            <input
              type="date"
              name="localDate"
              required
              className="form-control"
              placeholder="Enter Date"
              value={user.localDate}
              onChange={(eventObj) =>
                setUser({ ...user, localDate: eventObj.target.value })
              }
            />
          </div>

          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { addUser } from "./usersSlice"
// import { useDispatch, useSelector } from "react-redux"
// import { Navigate, useNavigate } from "react-router-dom"


// function Create(){
//     // const [name,setName]=useState('')
//     // const [email,setEmail]=useState('')
//     // const [date,setDate]=useState('')

//     const [user, setUser] = useState({ name: '', email: '', localDate: '' });
//     const dispatch = useDispatch();

//     const users=useSelector((state) => state.users)
//     // const dispatch =useDispatch();
//     const navigate=useNavigate()

        
//         const handleAddUser = () => {
//           const newUser = { ...user};
//           axios.post('http://localhost:8080/users', newUser,
//               {
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             })
//             .then(res => {
//               newUser.id = res.data.id; // Set the id in the newStudent object
//               dispatch(addUser(newUser)); // Dispatch the added student to Redux
//               alert("User added Successfully");
//             })
//             .catch(error => console.log(error));
//           setUser({ id: '', name: '', email: '', localDate: '', posts: [] });
          
//           navigate('/')
          

//         };
      




   

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     console.log(users.length)
//     //     if(users.length==0){
//     //         dispatch(addUser({id: 1,name,email}))
//     //     }
//     //     else{
//     //         dispatch(addUser({id: users[users.length-1].id+1,name,email}))
//     //     }
        
//     //     navigate('/')
//     // }

//     return(
//         <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//             <div className="w-50 border bg-secondary text-white p-5">
//                 {/* <form onSubmit={handleSubmit}> */}
//                 <form onSubmit={handleAddUser}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" name='name' required className='form-control' placeholder="Enter Name" 
//                         onChange={(eventObj) => setUser({ ...user, name: eventObj.target.value })} />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" name='email' required className="form-control" placeholder="Enter Email"
//                         onChange={(eventObj) => setUser({ ...user, email: eventObj.target.value })} />
//                     </div>

//                     <div>
//                         <label htmlFor="text">Date</label>
//                         <input type="date" name='email' required className="form-control" placeholder="Enter Date"
//                         onChange={(eventObj) => setUser({ ...user, localDate: eventObj.target.value })}/>
//                     </div>

//                     <br />
//                     <button  className="btn btn-info">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Create