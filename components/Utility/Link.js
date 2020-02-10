import React from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Link extends React.Component {
	render() {
		return (
            <Text
                style={{color: this.props.color, fontSize: 17, fontFamily: "Comic Sans MS"}}
                onPress={this.props.onPress}
            >
                {this.props.children}
            </Text>
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
