import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./UserReducer";

function Update(){
    
    const {id}=useParams();
    const users=useSelector((state) => state.users);
    const existingUser=users.filter(f => f.id == id);

    // if (foundUser.length === 1) {
    //     // 'foundUser' is an array containing the matched user object
    //     console.log('User found:', existingUser[0]);
    //   } else {
    //     console.log('User not found or multiple users with the same ID found.');
    //   }

    const {name,email}=existingUser[0];
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(event) =>{
         event.preventDefault();
         dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
         }))
         navigate("/")
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
           <h3>Update User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input value={uname} type="text" name='name' required className='form-control' placeholder="Enter Name" 
                    onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={uemail} type="email" name='email' required className="form-control" placeholder="Enter Email"
                    onChange={e=>setEmail(e.target.value)} />
                </div>
                <br />
                <button className="btn btn-info">Update</button>
            </form>
        </div>
    </div>
    )
}

export default Update