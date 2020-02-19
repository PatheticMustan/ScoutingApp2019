import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import BoolButton from './Buttons/BoolButton.js';

export default class Other extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Other</Text>
                <View style = {styles.otherContainer}>
                    <BoolButton bgc="yellow">Yellow Card</BoolButton>
                    <BoolButton bgc="red">Red Card</BoolButton>
                </View>
            </View>
		);
	}
}

const styles=StyleSheet.create({
	container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
		backgroundColor: '#FFF'
    },
    otherContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        paddingVertical: 20,
        paddingBottom: 20
    }
});
