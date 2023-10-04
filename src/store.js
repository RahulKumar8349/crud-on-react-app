import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Component/usersSlice';

const store = configureStore({
    reducer: {
        users:usersReducer,
        //items: itemsReducer,//here the items is the name of all reducers in itemsSlice 
  },
});

export default store;