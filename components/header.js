import React from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import Link from './Utility/Link.js';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<View style={styles.flex}>
						<Text style={styles.headerText}>2020 - Infinite Recharge</Text>
					</View>

					<View style={[styles.flex, styles.linkContainer]}>
						<Link color="red" onPress={() => alert(1)}>Reset</Link>
						<Link color="blue" onPress={() => alert(1)}>Undo</Link>
						<Link color="blue" onPress={() => alert(1)}>Reset</Link>
						<Link color="blue" onPress={() => alert(1)}>Save</Link>
						<Link color="blue" onPress={() => alert(1)}>Save and Export</Link>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	headerContainer: {
		flexDirection: "column",
		paddingVertical: 15,
		backgroundColor: "#DDD",
		justifyContent: "center"
	},
	headerTextContainer: {
		flex: 1,
		flexDirection: "row"
	},
	headerText: {
		flex: 1,
		fontSize: 30,
		textAlign: "center"
	},
	flex: {
		flex: 1,
		flexDirection: "row"
	},
	linkContainer: {
		justifyContent: "space-between",
		padding: 20,
		textAlign: "center"
	}
});
