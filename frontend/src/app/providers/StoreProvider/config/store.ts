import {configureStore, Middleware} from "@reduxjs/toolkit";
import {StateScheme} from "app/providers/StoreProvider/config/StateScheme";
import {apiService} from "shared/api/api";
export function createReduxStore(initialState?: StateScheme) {
    return configureStore({
        reducer: {
            [apiService.reducerPath]: apiService.reducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiService.middleware) ,
        devTools: true,
        preloadedState: initialState,
    })
}