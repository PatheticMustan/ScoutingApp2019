import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';

import NumButton from './Buttons/NumButton'

export default class Endgame extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Endgame</Text>
                <View style = {styles.endgameContainer}>
                    <View style = {styles.permanentEndgameComponent}>
                        <NumButton>Balls Scored</NumButton>
                    </View>
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
    endgameContainer: {
        alignItems: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
});
