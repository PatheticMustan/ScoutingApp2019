import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from "react-native";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function NumButton(props) {
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				const r = value + 1;
				// dispatch to redux and set state
				dispatch(setKeyPair([props.id, r]));
				setValue(r);
			}}
			onLongPress={() => {
				const r = Math.max((value - 1), 0);
				// dispatch to redux and set state
				dispatch(setKeyPair([props.id, r]));
				setValue(r);
			}}
		>
				<View style = {{
					justifyContent: "center",
					borderRadius: 10,
					borderWidth: StyleSheet.hairlineWidth,
					width: (props.width? props.width : 100),
					height: (props.height? props.height : 40),
					backgroundColor: "white",
					justifyContent: "center",
				}}>
					<View style = {{flex: 1, justifyContent: "center"}}>
						<Text style={{textAlign: "center"}}>{props.children} {`(${value})`}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
	);
}