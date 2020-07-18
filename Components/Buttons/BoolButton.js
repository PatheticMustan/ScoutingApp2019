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
	const [isEnabled, toggle] = useState(false);

	return (
		<TouchableWithoutFeedback onPress={() => {
			toggle();
                
			props.press && props.press();

			dispatch(setValue());
			console.log(data);
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