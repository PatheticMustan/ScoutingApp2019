import React from 'react';
import {
	StyleSheet,
	Text,
	View,
    TouchableOpacity
} from 'react-native';

import TabBarIcon from './TabBarIcon.js';

export default class Incrementer extends React.Component {
    state = {
        value: 0
    }

	render() {
		return (
			<View style={styles.container}>
                <TouchableOpacity onPress = {() => this.setState({value: Math.max(0, this.state.value - 1)})}>
                    <View style = {styles.iconContainer}>
                        <TabBarIcon size = {30} name = "minus" color = "#29adff"></TabBarIcon>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.iconContainer}>{this.state.value}</Text>

                <TouchableOpacity onPress = {() => this.setState({value: this.state.value + 1})}>
                    <View style = {styles.iconContainer}>
                        <TabBarIcon size = {30} name = "plus" color = "#29adff"></TabBarIcon>
                    </View>
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: "row"
    },
    iconContainer: {
        fontSize: 30,
        padding: 5
    }
});
