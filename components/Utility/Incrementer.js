import React from 'react';
import {
	StyleSheet,
	Text,
	View,
    TouchableOpacity
} from 'react-native';

import TabBarIcon from './TabBarIcon.js';

export default class Incrementer extends React.Component {
    state = {i: 0}
    inc = (v) => {
        this.setState({i: v + 1})
    }
    dec = (v) => {
        this.setState({i: Math.max(0, v - 1)})
    }
	render() {
		return (
			<View style={styles.container}>
                <TouchableOpacity onPress = {() => this.dec(this.state.i)}>
                    <View style = {styles.iconContainer}>
                        <TabBarIcon size = {30} name = "minus" color = "#29adff"></TabBarIcon>
                    </View>
                </TouchableOpacity>
                <Text style = {styles.iconContainer}>{this.state.i}</Text>
                <TouchableOpacity onPress = {() => this.inc(this.state.i)}>
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
