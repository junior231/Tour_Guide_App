import { createSlice } from '@reduxjs/toolkit';
import cities from '../data.json';

export const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        cities,
        description: '',
        image: ''
    },
    reducers: {
        getImage: (state, action) => {
            return {
                ...state,
                image: action.payload
            }
        },
        getDescription: (state, action) => {
            return {
                ...state,
                description: action.payload
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { getImage, getDescription } = tourSlice.actions

export default tourSlice.reducer