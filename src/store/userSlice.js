import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name: 'user',
    initialState:{
        email:'',
        password: '',
        isLogin: false,
    },
    reducers:{
        setUserCredentials:(state,action)=>{
            const {email,password}= action.payload;
            state.email = email;
            state.password = password;
            state.isLogin = true;
        },
        logout:(state)=>{
            state.email='';
            state.password='';
            state.isLogin = false;
        },
    },
});

export const {setUserCredentials,logout} = userSlice.actions;
export default userSlice.reducer;