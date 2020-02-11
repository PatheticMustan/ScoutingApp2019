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
                style={{color: this.props.color, fontSize: 17}}
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
	}
});
