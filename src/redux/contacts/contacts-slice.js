import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsIsnitialState = {
    contacts: []
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsIsnitialState,
    reducers: {
        addContact: {
            reducer({contacts}, {payload}){
                contacts.push(payload)
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
        deleteContact ({contacts}, {payload}) {
            const index = contacts.findIndex(contact => contact.id === payload);
            contacts.splice(index, 1);
          }
    }}
)

export const { addContact, deleteContact } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer