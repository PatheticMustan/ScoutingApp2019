import React from "react";
import {
	View
} from "react-native";
import {
	Ionicons 
} from "react-native-vector-icons";

export default class Header extends React.Component {
	render() {
		return (
			<View>
				<Ionicons name="ios-information-circle-outline"/>
			</View>
		);
	}
}