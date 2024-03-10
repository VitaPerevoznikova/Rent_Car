import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
	baseURL: "https://65e832714bb72f0a9c4e89f6.mockapi.io",
});

export const fetchCars = createAsyncThunk('cars/fetchAll', 
async ({page, limit}, thunkAPI) => {
    try {
        const response = await instance.get(`/cars?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }});



export const fetchFilteredCars = createAsyncThunk(
	"cars/getAll",
	async (_, thunkAPI) => {
		try {
			const response = await instance.get("/cars?filter=${filter}");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);