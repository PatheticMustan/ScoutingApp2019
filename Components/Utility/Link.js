import React from "react";
import {
	StyleSheet,
	Text,
	View
} from "react-native";

export default class Link extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text
					style={{color: this.props.color, fontSize: 17}}
					onPress={this.props.onPress}
				>
					{this.props.children}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1
	}
});
