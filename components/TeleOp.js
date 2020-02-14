import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput,
    Image
} from 'react-native';

export default class TeleOp extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Tele-Op</Text>
                <View style = {styles.autonomousContainer}>
                    <Image
                        source = {require('../Assets/FRC-2020-Field-Color-Top-Cropped-More.png')}
                        style = {{height: 700, width: 1300, marginTop: 20, borderRadius: 10}}
                    />
                    {/* Alright alright, inline CSS is fine on <Text> tags */}
                    <Text style = {{textAlign: "center", fontSize: 20, fontWeight: 'bold'}}>Comments</Text>
                    <Text style = {{textAlign: "center", fontSize: 14, marginLeft: 20, marginRight: 20, marginTop: 10}}>
                        Add any comments that you feel are useful. Does the robot get any penalties? Does the robot cycle
                        efficiently? Do they struggle with picking up balls or shooting? Do they play defense, and if so,
                        how? Where do they usually shoot from? Anything else that shows evidence of good/poor performance?
                    </Text>
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
    autonomousContainer: {
        alignItems: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    }
});
