export const SET_VALUE = "SET_VALUE";

export function setValue(key, value) {
	return {
		type: SET_VALUE,
		key,
		value
	};
}