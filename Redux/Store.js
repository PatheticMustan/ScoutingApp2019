import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Features/dataSlice.js";

// reducer list
const reducer = {
	data: dataReducer
};

// initial state
const preloadedState = {
	data: []
};



// our SINGLE SOURCE OF TRUTH! BOW DOWN TO configureStore ALMIGHTY!!!!
export default configureStore({
	reducer,
	preloadedState
});
