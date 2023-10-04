import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", email: "", localDate: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated data to the server using the 'user' state
    axios
      .put(`http://localhost:8080/users/${id}`, user)
      .then((res) => {
        // Handle the response or dispatch any actions if needed
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">Id:</label>
            <input
              value={id}
              type="text"
              name="id"
              readOnly // Make it read-only
              className="form-control"
              placeholder="Enter Id"
            />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={user.name}
              type="text"
              name="name"
              required
              className="form-control"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              value={user.email}
              type="email"
              name="email"
              required
              className="form-control"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="date">Date:</label>
            <input
              value={user.localDate}
              type="date"
              name="localDate"
              required
              className="form-control"
              placeholder="Enter Date"
              onChange={handleChange}
            />
          </div>

          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;


// function Update(){
//     // const userId = useParams();
//     // const user = getUserById(userId);
    
//     const {id}=useParams();
//     const [selectedItem, setSelectedItem] = useState(null);
//     const items = useSelector(state => state.items);

//     const users=useSelector((state) => state.users)
//     const dispatch=useDispatch()
//     const [user, setUser] = useState([]);
//     // const [user, setUser] = useState({ id: '', name: '', email: '', dob: '', posts: [] });
//     useEffect( () =>
//       {
//         axios.get('http://localhost:8080/users/'+id).
//         then(res => setUser(res.data)).
//         catch(error => console.log(error));

//         // initialLize()
    
//       },[])

//     //   useEffect(()=> {
//     //     let userrr = users.find((u) => u.id === id);
//     //     setUser(userrr)
//     //   }, [users])

//       console.log(user)

      

   


//     // const [user, setUser] = useState({ id: '', name: '', email: '', dob: '', posts: [] });
//     // const [editingUser, setEditingUser] = useState({ id: '', name: '', email: '', dob: '', posts: [] });
//     // const [editId, setEditId] = useState(-1);
//     // useEffect( () =>
//     //   {
//     //     axios.get('http://localhost:8080/users/'+id).
//     //     then(res => setUser(res.data)).
//     //     catch(error => console.log(error));
//     //   },[])

//     // Initialize state variables with default values
    
// //         const [name, setName] = useState(user.name); // Use an empty string as the default value
// // const [email, setEmail] = useState(user.email); // Use an empty string as the default value
// // const [date, setDate] = useState(user.localDate); // Use an empty string as the default value




//     // useEffect(() => {
//     //     axios.get('http://localhost:8080/users/' + id)
//     //       .then(res => {
//     //         setUser(res.data);
//     //         setName(res.data.name); // Initialize the name state with user's name
//     //         setEmail(res.data.email); // Initialize the email state with user's email
//     //         setDate(res.data.localDate);
//     //       })
//     //       .catch(error => console.log(error));
//     //   }, []);


//     //  const [name,setName]=useState(user.name)
//     // const users=useSelector((state) => state.users);
//     // const existingUser=users.filter(f => f.id == id);

//     // if (foundUser.length === 1) {
//     //     // 'foundUser' is an array containing the matched user object
//     //     console.log('User found:', existingUser[0]);
//     //   } else {
//     //     console.log('User not found or multiple users with the same ID found.');
//     //   }

//     // const {name,email}=existingUser[0];
//     // const [uname,setName]=useState(name)
//     // const [uemail,setEmail]=useState(email)
//     // const [udate,setDate]=useState(date)
//     // const dispatch=useDispatch();
//     const navigate=useNavigate();

//     // const handleSubmit=(event) =>{
//     //      event.preventDefault();
//     //      dispatch(updateUser({
//     //         id:id,
//     //         name:uname,
//     //         email:uemail
//     //      }))
//     //      navigate("/")
//     // }


// //     const handleSubmit=(event) =>{
// //         // console.log(u)
// //         navigate("/")
// //    }

// const handleSubmit = (event) => {
//     // event.preventDefault();
//     // // Send updated data to the server using 'name' and 'email' states
//     // dispatch(updateUser({
//     //   id: id,
//     //   name: name,
//     //   email: email,
//     //   date:date
//     // }));
//     // navigate("/");
//   };

// //   const handleSubmit = (id) => {
// //     if (editingUser.name.trim() === '' || editingUser.email.trim() === '' || editingUser.dob.trim() === '') return;
// //     axios.put('http://localhost:8080/users/' + id, editingUser)
// //       .then(res => {
// //         const updatedUser = { ...editingUser }; // Create a new object
// //         dispatch(updateUser(updatedUser)); // Dispatch the new object
// //         setEditId(-1);
// //         alert("Student updated Successfully");
// //       })
// //       .catch(error => console.log(error));
// //           navigate("/");

// //   };

  

//     return(
//         <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//         <div className="w-50 border bg-secondary text-white p-5">
//            <h3>Update User</h3>
//             <form onSubmit={handleSubmit(id)}>

//             <div>
//                     <label htmlFor="name">Id:</label>
//                     <input 
//                     value={id} 
//                     type="text" name='name' required className='form-control' placeholder="Enter Name" 
//                     // onChange={e=>setName(e.target.value)}
//                      />
//                 </div>

//                 <div>
//                 <label htmlFor="name">Name:</label>
//                     <input
//                         value={user.name}
//                         type="text"
//                         name="name"
//                         required
//                         className="form-control"
//                         placeholder="Enter Name"
//                         // onChange={e => setName(e.target.value)} // Update the 'name' state
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input 
//                     value={user.email}
//                      type="email" name='email' required className="form-control" placeholder="Enter Email"
//                     // onChange={e=>setEmail(e.target.value)} 
//                     />
//                 </div>

//                 <div>
//                         <label htmlFor="text">Date</label>
//                         <input type="date" 
//                         value={user.date}
//                         name='date' required className="form-control" placeholder="Enter Date"
//                         // onChange={e=>setDate(e.target.value)} 
//                         />
//                     </div>

//                 <br />
//                 <button className="btn btn-info">Update</button>
//             </form>
//         </div>
//     </div>
//     )
// }

// export default Update