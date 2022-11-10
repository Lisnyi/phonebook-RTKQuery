import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-slice";
import { contactsApi } from "./contacts/contacts-api"

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})