import axios from 'axios';
import { useEffect, useState } from 'react';
const Web = () => {
  // const [user, setUser] = useState({ id: '', name: '', email: '', localDate: '' ,posts :{}});
  // const [editingUser, setEditingUser] = useState({ id: '', name: '', email: '', localDate: '' ,posts :{}});
  // const [editId, setEditId] = useState(-1);
  const [users, setUsers] = useState([]);
useEffect( () =>
  {
    axios.get('http://localhost:8080/users').
    then(res => setUsers(res.data)).
    catch(error => console.log(error));
  },[])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>(
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.localDate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
  }
  export default Web;