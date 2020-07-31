import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
	name: "matchSlice",
	initialState: {
		matches: [],
	},
	reducers: {
		writeMatch: (state, action) => {
			if (!(action.payload instanceof Array))             console.log("WARNING! Expected match to be array");
			if (!action.payload.every(v => v instanceof Array)) console.log("WARNING! Expected each item to be an array.");

			state.matches.push(action.payload);
		}
	},
});

// dispatch(writeMatch(kpv))

export const { writeMatch } = matchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = state => state.matches.matches;

export default matchSlice.reducer;
