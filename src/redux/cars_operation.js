import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
	baseURL: "https://65e832714bb72f0a9c4e89f6.mockapi.io/",
});

export const getCars = createAsyncThunk(
	"cars/getAll",
	async ({ page = 1 }, thunkAPI) => {
		try {
			const { data } = await instance.get("/cars", {
				params: { page, limit: 12 }
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getFilteredCars = createAsyncThunk(
	"cars/getAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("/cars");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);