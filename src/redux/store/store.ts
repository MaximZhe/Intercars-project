import { combineReducers, configureStore } from "@reduxjs/toolkit";
import widthWindowReduser from '../slice/widthWindowSlice'
import languageReduser from "../slice/languageSlice";
import stateMobileMenuReduser from '../slice/menuMobileStateSlice'
import sliderItemsReduser from '../slice/sliderItemsSlice';
import singleItemSalesReduser from '../slice/singleItemSalesSlice';
import dataRouteReduser from '../slice/getRoutesSlice';
import cityDepartureSlice from "../slice/cityDepartureSlice";
import cityArrivalSlice from '../slice/cityArrivalSlice';
import cityFormDataReduser from "../slice/cityIdFormSlice";
const rootReduser = combineReducers({
    widthWindowReduser,
    languageReduser,
    stateMobileMenuReduser,
    sliderItemsReduser,
    singleItemSalesReduser,
    dataRouteReduser,
    cityFormDataReduser,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootSate = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']