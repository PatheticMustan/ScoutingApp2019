import React from "react";
import {
	View,
	ScrollView
} from "react-native";

import Header from "./SettingsComponents/Header.js";
import About from "./SettingsComponents/About";

export default class Settings extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<About />
				</View>
			</ScrollView>
		);
	}
}