import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput,
    ColorPropType,
    Image
} from 'react-native';

import Incrementer from './Incrementer.js'
import TabBarIcon from './TabBarIcon.js'

export default class Link extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <Text style = {styles.matchInfoText}>Match Info</Text>
                <View style = {styles.matchInfoContainer}>
                    <View style = {styles.teamInfoContainer}>
                        <View style = {styles.inputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Team Number: </Text>
                            <View style = {{flex: 1, paddingLeft: 5}}>
                                <TextInput
                                    style={styles.textInput}
                                    editable
                                />
                            </View>
                        </View>
                        <View style = {styles.inputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Match Number: Qualification # </Text>
                            <Incrementer/>
                        </View>
                        <View style = {{flex: 1, marginTop: -15, flexDirection: "row"}}>
                            <TabBarIcon color = "#29adff" name = "ellipsis-h" />
                            <Text style = {{fontSize: 13}}> Change Match Type</Text>
                        </View>
                        <View style = {styles.inputContainer}>
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
                        <View style = {styles.inputContainer}>
                            <Text style = {{fontSize: 17, fontWeight: "bold"}}>Starting Game Pieces</Text>
                            <Incrementer/>
                            <View>
                                <Image
                                    source = {require('./Assets/am-4200-small-copy.png')}
                                    style = {{width: 150, height: 150}}
                                />
                            </View>
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
        borderColor: "#000000",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    matchInfoText: {
        paddingLeft: 550,
        fontSize: 35,
        fontWeight: 'bold'
    },
    teamInfoContainer: {
        flex: 1,
        paddingLeft: 30
    },
    inputContainer: {
        flex: 1,
        flexDirection: "column",
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
