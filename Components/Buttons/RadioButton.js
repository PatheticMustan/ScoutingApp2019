import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from "react-native";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function RadioButton(props) {
	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);
	
	const BORDER_RADIUS = 10;

	return (
		<View style={{...props.options}}>
			{
				props.data.map((v, i) =>
					<TouchableWithoutFeedback
						key={v}
						onPress={
							() => {
								const r = i;
								// dispatch to redux and set state
								dispatch(setKeyPair([props.id, r]));
								setSelectedIndex(r);
							}
						}
					>
						<View style={{
							justifyContent: "center",
							borderWidth: StyleSheet.hairlineWidth,
							margin: props.margin? props.margin : 0,
							width: (props.width? props.width : 100),
							height: 40,
							backgroundColor: (selectedIndex === i? props.bgc : "white"),

							/** The ternary operator pretends to be your friend, until you realize a few months later,
							 *  when you don't understand any of your code, that it was actually the spawn of Satan
							 **/
							borderTopLeftRadius: props.segmentedButton?(i==0? BORDER_RADIUS : 0) : BORDER_RADIUS,
							borderBottomLeftRadius: props.segmentedButton?(i==0? BORDER_RADIUS : 0) : BORDER_RADIUS,

							borderTopRightRadius: props.segmentedButton?(i==props.data.length-1? BORDER_RADIUS : 0) : BORDER_RADIUS,
							borderBottomRightRadius: props.segmentedButton?(i==props.data.length-1? BORDER_RADIUS : 0) : BORDER_RADIUS
						}}>
							<Text style={{textAlign: "center"}}>{v}</Text>
						</View>
					</TouchableWithoutFeedback>
				)
			}
		</View>
	);
}