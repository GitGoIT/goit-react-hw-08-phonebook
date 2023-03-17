import { createAsyncThunk } from "@reduxjs/toolkit";
import {signup, login, getCurrent, logout} from "../../shared/api/auth"

export const registration = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result  = await signup(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const authorization = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await login(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const data = await getCurrent(auth.token);
            return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const data = await logout();
            return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)