import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';
import { useNavigate, useParams } from 'react-router-dom';

function CreatePost() {
  const {id}=useParams();
  console.log(id)
  const [post, setPost] = useState({ content: 'abc' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = () => {
    axios
  .post(`http://localhost:8080/users/${id}/posts`, post, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    const newPost = { ...post, id: res.data.id };
    console.log(newPost, "Rishiiiiiii");
    dispatch(addPost(newPost));
    alert('Post added Successfully');
    // setPost({ content: ''});
  })
  .catch((error) => console.log(error));
navigate(`/users/${id}`);
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleAddPost}>
          
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              placeholder="Enter Name"
              
              
              onChange={(eventObj) =>
                setPost({ ...post, content: eventObj.target.value })
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

export default CreatePost;