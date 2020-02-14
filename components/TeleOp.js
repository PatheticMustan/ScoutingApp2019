import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput,
    Image
} from 'react-native';

import CustomTextBox from './Utility/CustomTextBox.js';

export default class TeleOp extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Tele-Op</Text>
                <View style = {styles.teleOpContainer}>
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
                    <View style = {{paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
                        <TextInput style = {{
                        width: 1300,
                        height: 200,
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        borderRadius: 10
                        }}
                        editable
                        multiline
                        numberOfLines = {10}
                        />
                    </View>
                </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
		backgroundColor: '#FFF'
    },
    teleOpContainer: {
        alignItems: 'center',
        borderColor: "black",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth
    }
});
