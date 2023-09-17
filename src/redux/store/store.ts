import { combineReducers, configureStore } from "@reduxjs/toolkit";
import widthWindowReduser from '../slice/widthWindowSlice'
import languageReduser from "../slice/languageSlice";
import stateMobileMenuReduser from '../slice/menuMobileStateSlice'
import sliderItemsReduser from '../slice/sliderItems';

const rootReduser = combineReducers({
    widthWindowReduser,
    languageReduser,
    stateMobileMenuReduser,
    sliderItemsReduser,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootSate = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']