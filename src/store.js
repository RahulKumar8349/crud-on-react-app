import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Component/usersSlice';
import postReducer from './Post/postsSlice';

const store = configureStore({
    reducer: {
        users:usersReducer,
        posts:postReducer,
        //items: itemsReducer,//here the items is the name of all reducers in itemsSlice 
  },
});

export default store;