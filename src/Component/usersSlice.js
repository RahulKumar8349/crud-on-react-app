import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
    setUsers: (state, action) => {
      return action.payload;
    },
    // getUsers:(state,action)=>{
    //  return state.users;
    // }
  },
});
export const { addUser, updateUser, deleteUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// // import { userList } from "./Data";

// const userSlice=createSlice({
//     name:"user",
//     initialState: [],
//     reducers:{

//         addUser:(state,action) => {
//             //console.log(action)
//             state.push(action.payload)
//         },
//         updateUser: (state,action) => {
//             const {id,name,email}=action.payload;
//             const uu=state.find(user=>user.id==id)
//             if(uu){
//                 uu.name=name;
//                 uu.email=email;
//             }
//         },
//         deleteUser: (state,action) => {
//             const {id}=action.payload;
//             const uu=state.find(user=>user.id==id)
//             if(uu){
//                 return state.filter(f=>f.id !== id)
//             }
//         }
//         ,
//         setUser: (state, action) => {
//             return action.payload;
//           }
        

//     }
// })


// export default userSlice.reducer 
// export const {addUser,updateUser,deleteUser}=userSlice.actions