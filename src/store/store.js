import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import buttonReducer from './buttonState';
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        button: buttonReducer,
        user: userReducer,
    },
});

export default store