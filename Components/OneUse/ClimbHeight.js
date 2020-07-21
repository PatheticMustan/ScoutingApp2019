import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image
} from "react-native";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function ClimbHeight(props) {
	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const data = [
		["Low",     require("../../Assets/EndLow.png")],
		["Leveled", require("../../Assets/EndLevel.png")],
		["High",    require("../../Assets/EndHigh.png")]
	];

	const p = props;

	return (
		<View style={{
			flex: 1,
			flexDirection: "row",
			justifyContent: "space-around"
		}}>
			{
				data.map((v, i) => {
					return <TouchableWithoutFeedback
						key={data[i][0]}
						onPress={() => {
							const r = i;
							// dispatch to redux and set state
							dispatch(setKeyPair([props.id, r]));
							setSelectedIndex(r);
						}}
					>
						<View style={[
							styles.container,
							{backgroundColor: (selectedIndex === i? p.bgc : "white")}
						]}>
							<Image source={data[i][1]} style={styles.image} />
							<Text style={{textAlign: "center"}}>{data[i][0]}</Text>
						</View>
					</TouchableWithoutFeedback>
				})
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		flexDirection: "column",
		justifyContent: "center",
		margin: 10
	},
	image: {
		borderRadius: 10,
		height: 150,
		width: 280
	}
});