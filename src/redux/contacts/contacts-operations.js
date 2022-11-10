import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {
        try {
            const data = await api.getContacts()
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data)
            return result
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteContacts(id);
            return id;
        } catch(e) {
            return rejectWithValue(e);
        }
    }
)