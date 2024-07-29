import { createSlice } from "@reduxjs/toolkit";

export const buttonState = createSlice({
    name:'button',
    initialState:{
        color:'green',
        size:14
    },
    reducers:{
        changeColor: (state)=>{
            state.color = 'red';
        },
        changeSize: (state)=>{
            state.size=25;
        }
    }
})

export const { changeColor, changeSize} = buttonState.actions;

export default buttonState.reducer;

