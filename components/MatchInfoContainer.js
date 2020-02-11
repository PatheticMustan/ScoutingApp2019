import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput
} from 'react-native';

import Incrementer from './Incrementer.js'

export default class Link extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <View style = {styles.matchInfoContainer}>
                    <View style = {styles.teamInfoContainer}>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Team Number: </Text>
                            <View style = {{flex: 1, paddingLeft: 5}}>
                                <TextInput
                                    style={styles.textInput}
                                    editable
                                />
                            </View>
                        </View>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Match Number: Qualification # </Text>
                            <Incrementer></Incrementer>
                        </View>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Scouters: </Text>
                            <View style = {{flex: 1, paddingLeft: 5}}>
                                <TextInput
                                    style={styles.textInput2}
                                    editable
                                />
                            </View>
                        </View>
                    </View>
    
                    <View style = {styles.piecesContainer}>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Team Number: </Text>
                        </View>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Team Number: </Text>
                        </View>
                        <View style = {styles.teamNumInputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Team Number: </Text>
                        </View>
                    </View>
                </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		backgroundColor: '#fff'
	},
	matchInfoContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "#ddd",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    teamInfoContainer: {
        flex: 1,
        paddingLeft: 30
    },
    teamNumInputContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 15
    },
    textInput: {
        width: 60,
        height: 30,
        borderColor: "#aaa",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5
    },
    textInput2: {
        width: 180,
        height: 30,
        borderColor: "#aaa",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5
    },
    piecesContainer: {
        flex: 1
    },
});
