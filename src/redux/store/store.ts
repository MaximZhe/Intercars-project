import { combineReducers, configureStore } from "@reduxjs/toolkit";
import widthWindowReduser from "../slice/widthWindowSlice";
import languageReduser from "../slice/languageSlice";
import stateMobileMenuReduser from "../slice/menuMobileStateSlice";
import sliderItemsReduser from "../slice/sliderItemsSlice";
import singleItemSalesReduser from "../slice/singleItemSalesSlice";
import dataRouteReduser from "../slice/getRoutesSlice";
import cityFormDataReduser from "../slice/cityIdFormSlice";
import storegeRouteReduser from '../slice/storegeDataRoute';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReduсer = combineReducers({
  widthWindowReduser,
  languageReduser,
  stateMobileMenuReduser,
  sliderItemsReduser,
  singleItemSalesReduser,
  dataRouteReduser,
  cityFormDataReduser,
  storegeRouteReduser,
});
const persistedReducer = persistReducer(persistConfig, rootReduсer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
};
export const persist = persistStore(setupStore());
export type RootSate = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
