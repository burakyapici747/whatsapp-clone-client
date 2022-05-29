import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLogged: false,
    id: null,
    email: null,
    password: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;