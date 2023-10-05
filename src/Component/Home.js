import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setUsers } from './usersSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); // Select the 'users' slice from the Redux store

  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then((res) => {
        dispatch(setUsers(res.data)); // Initialize the Redux state with fetched data
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8080/users/${id}`)
      .then((res) => {
        dispatch(deleteUser(id)); // Remove the deleted user from Redux
        alert('User deleted Successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2>User</h2>
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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.localDate}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
                <Link to={`/users/${user.id}`} className="btn btn-sm btn-success">
                  Posts
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
