import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
       loggedUser:(state,action)=>{
        state.loading=action.payload.loading
        state.user=action.payload.user
       }

    }
})

export const {loggedUser}=userSlice.actions
export default userSlice.reducer