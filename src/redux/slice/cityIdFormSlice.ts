import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    data: {
        city1:0,
        city2:0,
        date:''
    }
}

export const cityFormSlice = createSlice({
    name: 'cityFormData',
    initialState,
    reducers: {
        setCity1Id:(state, action: PayloadAction<number>) => {
            state.data.city1 = action.payload
        },
        setCity2Id: ( state, action: PayloadAction<number>) => {
            state.data.city2 = action.payload
        },
        setDateForm: (state, action:PayloadAction<string>) => {
            state.data.date = action.payload
        }
    }
}) 

export const {setCity1Id,setCity2Id,setDateForm} = cityFormSlice.actions;
export default cityFormSlice.reducer