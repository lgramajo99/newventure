import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setImageUrls, setError, setLoading } from "./imageSlice";

export const fetchImages = createAsyncThunk('images/fetchImages', async (_, { dispatch }) => {
    try {
        dispatch(setLoading(true))

        const response = await axios.get('');
        const imageUrls = response.data;

        dispatch(setImageUrls(imageUrls));
        dispatch(setLoading(false));

    } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
    }
})