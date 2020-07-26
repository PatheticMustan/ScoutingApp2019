import React from "react";
import {
	View,
	TextInput,
	StyleSheet
} from "react-native";

import { setKeyPair, setDefault, selectData } from "../../Redux/Features/dataSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function CustomTextBox(props) {
	const dispatch = useDispatch();

	// set default value
	dispatch(setDefault([props.id, ""]));

	// get value from store
	const kpv = useSelector(selectData);
	const text = kpv.find(v => v[0] === props.id)[1];

	return (
		<View style={{
			width: props.width,
			height: props.height || 40
		}}>
			<TextInput
				multiline={props.multi}
				numberOfLines={props.multi? props.lines : 1}
				editable
				placeholder={props.placeholder || ""}
				value={text}
				style={{
					flex: 1,
					padding: 10,
					backgroundColor: (props.backgroundColor? props.backgroundColor : "#FFFFFF"),
					borderColor: "#666",
					borderWidth: StyleSheet.hairlineWidth,
					borderRadius: (props.borderRadius? props.borderRadius : props.height / 5)
				}}
				{...props.options}

				onChangeText={text => {
					// TODO: instead of just filtering text, encode it!
					let filtered = text
						.replace(/\n/g, " ")
						.replace(/,/g, " ");

					// dispatch to redux
					dispatch(setKeyPair([props.id, filtered]));
					
					console.log(filtered);
				}}
			/>
		</View>
	);

}