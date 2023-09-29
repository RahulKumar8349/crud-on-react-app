import { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"


function Create(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const users=useSelector((state) => state.users)
    const dispatch =useDispatch();
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(users.length)
        if(users.length==0){
            dispatch(addUser({id: 1,name,email}))
        }
        else{
            dispatch(addUser({id: users[users.length-1].id+1,name,email}))
        }
        
        navigate('/')
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' required className='form-control' placeholder="Enter Name" 
                        onChange={e => setName(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required className="form-control" placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value) } />
                    </div>
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create