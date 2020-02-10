import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style = {styles.headerContainer}>
					<View style = {styles.headerTextContainer}>
						<Text style = {styles.headerText}>2020 - Infinite Recharge</Text>
					</View>
					<View style = {styles.optionContainer}>
					</View>
					<View style = {styles.subContainer}>
						<View style = {styles.matchInfoContainer}>
							<Text style = {styles.matchInfoHeaderText}>Match Info</Text>
						</View>
						<View style = {styles.autonomousContainer}>
							<Text style = {styles.autonomousHeaderText}>Autonomous</Text>
						</View>
						<View style = {styles.teleopContainer}>
							<Text style = {styles.teleopHeaderText}>Tele-Op</Text>
						</View>
						<View style = {styles.endgameContainer}>
							<Text style = {styles.endgameHeaderText}>Endgame</Text>
						</View>
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
