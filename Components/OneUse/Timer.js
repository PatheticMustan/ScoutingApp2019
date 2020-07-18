import React, { useState } from "react";
import {
	View,
	Text
} from "react-native";
import BoolButton from "../Buttons/BoolButton.js";

import { setKeyPair } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default function Timer(props) {
	const dispatch = useDispatch();
	const [isEnabled, setEnabled] = useState(false);
	const [seconds, setSeconds] = useState(0);

	console.log(isEnabled, seconds);

	return (
		<View style = {{flex: 1}}>
			<View style = {{flex: 1, alignSelf: "center", paddingBottom: 5}}>
				<Text>{(`${(seconds-(seconds%60))/60}:${((seconds % 60)+"").padStart(2, "0")}`)}</Text>
			</View>
				
			<BoolButton
				id="TimerClicked"
				bgc="lime"
				width={160}
				press={() => {
					if (!isEnabled) {
						setEnabled(true);
			
						window.timerInterval = setInterval(() => {
							// increase seconds passed
							console.log(seconds);
							setSeconds(seconds + 1);
						}, 1000);
					} else {
						clearInterval(window.timerInterval);
						setEnabled(false);
						dispatch(setKeyPair([props.id, seconds]));
					}
				}}
			>
				{!isEnabled? "Start" : "Stop" } Stopwatch
			</BoolButton>
		</View>
	);
}