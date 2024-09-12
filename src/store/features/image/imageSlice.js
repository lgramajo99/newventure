import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        imageUrls: [],
        loading: false,
        error: null,
    },
    reducers: {
        setImageUrls(state, action) {
            state.imageUrls = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export const { setImageUrls, setLoading, setError } = imagesSlice.actions;
export default imagesSlice.reducer;