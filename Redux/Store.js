import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Features/dataSlice.js";

export default configureStore({
	reducer: {
		data: dataReducer
	}
});
