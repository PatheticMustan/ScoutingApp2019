import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
	name: "matchSlice",
	initialState: {
		matches: [],
	},
	reducers: {
		writeMatch: (state, action) => {
			// action is in format
			// [index, payload]
			// Tracer: ESCOURT THE PAYLOAD!

			const [index, kpv] = action.payload;

			if (!(typeof index === "number"))          console.log("WARNING! Expected index to be number.");
			if (!(kpv instanceof Array))             console.log("WARNING! Expected match to be array.");
			if (!kpv.every(v => v instanceof Array)) console.log("WARNING! Expected each item to be an array.");

			if (index === -1) {
				// if the match key is not found
				// push
				state.matches.push(action.payload);
			} else {
				// if the match key IS found
				// overwrite
				// TODO: Prompt for confirmation of overwrite, not adding it now since I'm testing
				state.matches[index] = action.payload;
			}

			state.matches.push(action.payload);
		},

		resetMatches: (state) => {
			state.matches = [];
		}
	},
});

// dispatch(writeMatch(kpv))

export const { writeMatch, resetMatches } = matchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = state => state.matches.matches;

export default matchSlice.reducer;
