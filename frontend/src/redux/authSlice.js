
import { createSlice } from "@reduxjs/toolkit";
import { User } from "lucide-react";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading: false,
        User:null
    },
    reducers:{
        setLoading:(state, action)=>{
            state.loading=action.payload;
        },
        setUser:(state,action)=>{
            state.User=action.payload;
        }
    }
});
export const { setLoading, setUser}=authSlice.actions;
export default authSlice.reducer;