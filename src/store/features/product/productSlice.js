import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productThunk';

const initialState = {
    loading: false,
    error: null,
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; // Asegúrate de que action.payload tenga la estructura correcta
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Error al cargar los productos'; // Manejo del error más robusto
            });
    },
});

export default productSlice.reducer;
