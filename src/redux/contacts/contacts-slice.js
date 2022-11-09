import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchContacts, addContact, removeContact } from "./contacts-oprations";

const contactsIsnitialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsIsnitialState,
    extraReducers: {
        
    }
    // reducers: {
    //     addContact: {
    //         reducer({contacts}, {payload}){
    //             contacts.push(payload)
    //         },
    //         prepare(data){
    //             return {
    //                 payload:{
    //                     ...data,
    //                     id: nanoid(),
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact ({contacts}, {payload}) {
    //         const index = contacts.findIndex(contact => contact.id === payload);
    //         contacts.splice(index, 1);
    //       }
    // }
}
)

export const contactsReducer = contactsSlice.reducer