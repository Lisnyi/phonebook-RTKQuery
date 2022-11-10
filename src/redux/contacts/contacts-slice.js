import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operations";

const contactsIsnitialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsIsnitialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.isLoading = true;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.isLoading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.isLoading = true;
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.isLoading = false;
            store.items.push(payload)
        },
        [addContact.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.isLoading = true;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.isLoading = false;
            store.items = store.items.filter(item => item.id !== payload)
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
        },
    }
})

export const contactsReducer = contactsSlice.reducer