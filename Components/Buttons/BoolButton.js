import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function BoolButton(props) {
	const dispatch = useDispatch();
	const [isEnabled, setEnabled] = useState(false);

	return (
		<TouchableWithoutFeedback onPress={() => {
			// if the press event exists, run it
			props.press && props.press();

			const r = !isEnabled;
			// dispatch to redux and toggle isEnabled value
			dispatch(setKeyPair([props.id, r]));
			setEnabled(r);
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

BoolButton.propTypes = {
	id: PropTypes.string.isRequired,
	press: PropTypes.func,
	width: PropTypes.number,
	bgc: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};