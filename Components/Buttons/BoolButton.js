import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from "react-native";

import { setValue, selectData } from "../../Redux/Features/dataSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function BoolButton(props) {
	const data = useSelector(selectData);
	const dispatch = useDispatch();
	const [isEnabled, setEnabled] = useState(false);

	return (
		<TouchableWithoutFeedback onPress={() => {
			// if the press event exists, run it
			props.press && props.press();

			// dispatch to redux
			dispatch(setValue([props.id, !isEnabled]));

			// toggle isEnabled value
			setEnabled(!isEnabled);
		}}>
			<View style = {{
				justifyContent: "center",
				borderRadius: 10,
				borderWidth: StyleSheet.hairlineWidth,
				margin: 10,
				width: (props.width? props.width : 100),
				height: 40,
				backgroundColor: (isEnabled? props.bgc : "white")
			}}>
				<Text style={{textAlign: "center"}}>{props.children}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

// const styles = new StyleSheet({});