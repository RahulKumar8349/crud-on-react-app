import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, setPosts } from './postsSlice';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Post() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  console.log(posts)
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${id}/posts`)
      .then((res) => {
        dispatch(setPosts(res.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch, id]);

  const handleDeletePost = (postId) => {
    axios
      .delete(`http://localhost:8080/users/posts/${postId}`)
      .then((res) => {
        // Remove the deleted post from Redux
        dispatch(deletePost(postId));
        alert('Post deleted Successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2>Post</h2>
      <br />
      <Link to={`/post/${id}`} className="btn btn-sm btn-info">
        Create+
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.content}</td>
              <td>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Post;
