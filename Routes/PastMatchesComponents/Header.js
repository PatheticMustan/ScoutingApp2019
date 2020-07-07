import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Alert
} from "react-native";
import Link from "../../Components/Utility/Link.js";


export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Past Matches</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DDD",
		borderColor: "#696969",
		borderWidth: 1,
		padding: 20
	},
	headerText: {
		flex: 1,
		fontSize: 30,
		paddingTop: 10,
		textAlign: "center"
	},
	linkContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		paddingBottom: 15,
		paddingTop: 10
	}
});
