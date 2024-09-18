import { createAsyncThunk } from '@reduxjs/toolkit'
import data from '../../../assets/json/productTest.json';

export const fetchProducts = createAsyncThunk('product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            return new Promise((resolve) => {
                setTimeout(() => resolve(data), 1000); // Simulación de retraso
            });
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error al cargar los productos')
        }
    }
)
