import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		value: [],
	},
	reducers: {
		setValue: state => {
			state.push([1, 2, 3]);
			console.log(state);
		}
	},
});

export const { setValue } = dataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.data.value;

export default dataSlice.reducer;
