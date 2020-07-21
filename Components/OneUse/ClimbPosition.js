import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	ImageBackground
} from "react-native";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function ClimbPosition(props) {
	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const data = [
		["Edge", 1.4],
		["Middle Bar", 0.8],
		["Center", 1.22]
	];

	return (
		<View>
			<ImageBackground source = {require("../../Assets/ClimbPosition.png")} style = {{width: 600, height: 300}}>
				<View style={styles.container}>
					{
						data.map((v, i) =>
							<View style={{flex: data[i][1]}} key={"ClimbPositionView" + i}>
								<TouchableWithoutFeedback
									key={"ClimbPositionButton" + i}
									onPress={() => {
										const r = i;
										// dispatch to redux and set state
										dispatch(setKeyPair([props.id, r]));
										setSelectedIndex(r);
									}}
								>
									<View style={{
										justifyContent: "center",
										borderRadius: 10,
										borderWidth: StyleSheet.hairlineWidth,
										margin: props.margin || 10,
										width: (props.width? props.width : 100),
										height: 40,
										backgroundColor: (selectedIndex === i? props.bgc : "white")
									}}>
										<Text style={{textAlign: "center"}}>{data[i][0]}</Text>
									</View>
								</TouchableWithoutFeedback>
							</View>
						)
					}
				</View>
			</ImageBackground>
		</View>
	);
}

const colors = {
	white: "#FFF"
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		top: 230
	}
});