import React from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerText}>2020 - Infinite Recharge</Text>
					</View>
					<View style={styles.optionContainer}>
						<Text style={styles.link} onPress={() => alert(1)}>Click Here To Open Google.</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	headerContainer: {
		flexDirection: "column",
		paddingVertical: 15,
		backgroundColor: "#ddd",
		alignItems: "center"
	},
	headerTextContainer: {
		flex: 1,
		flexDirection: "row"
	},
	headerText: {
		flex: 1,
		fontSize: 30,
		textAlign: "center"
	}
});
