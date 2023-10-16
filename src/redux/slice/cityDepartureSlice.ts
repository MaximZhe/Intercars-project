import { createSlice } from '@reduxjs/toolkit';
import { fetchCityDeparture} from '../actions/fetchCityDeparture';

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
const cityDepartureSlice = createSlice({
  name: 'cityDeparture',
  initialState:initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityDeparture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCityDeparture.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCityDeparture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});



export default cityDepartureSlice.reducer;
