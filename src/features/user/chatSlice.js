import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    name: null,
    imageURL: null,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.imageURL = action.payload.imageURL;
        },
    },
});

export const {setChat} = chatSlice.actions;
export default chatSlice.reducer;