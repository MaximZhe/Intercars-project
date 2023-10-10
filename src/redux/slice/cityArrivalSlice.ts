import { createSlice } from '@reduxjs/toolkit';
import { fetchCityArrival } from '../actions/fetchCityArrival';


interface IState {
    data: [],
    loading: boolean,
    error: string | null,
}
const initialState:IState = {
    data: [],
    loading: false,
    error: null,
  }

const cityArrivalSlice = createSlice({
    name: 'cityArrival',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCityArrival.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCityArrival.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchCityArrival.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as null;
        });
    },
  });

  export default cityArrivalSlice.reducer;
  