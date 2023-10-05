import { createSlice } from '@reduxjs/toolkit';
const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePush: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});
export const { addPost, updatePost, deletePost, setPosts } = postSlice.actions;
export default postSlice.reducer;