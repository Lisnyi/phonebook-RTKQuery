import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsIsnitialState = []

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsIsnitialState,
    reducers: {
        addContact: {
            reducer(store, {payload}){
                store.push(payload)
            },
            prepare(data){
                return {
                    payload:{
                        ...data,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
})

export const { addContact, deleteContact } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer