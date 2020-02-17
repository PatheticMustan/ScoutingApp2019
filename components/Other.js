import React from 'react';
import {
	StyleSheet,
	Text,
    View,
} from 'react-native';

export default class Other extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Other</Text>
                <View style = {styles.otherContainer}>
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
        alignItems: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    }
});
