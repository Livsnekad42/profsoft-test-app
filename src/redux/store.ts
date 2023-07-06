import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {gamesApi} from "./api/gamesApi";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([gamesApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
