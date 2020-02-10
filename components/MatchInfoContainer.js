import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput
} from 'react-native';

export default class Link extends React.Component {
	render() {
		return (
            <View style = {styles.container}>
                <View style = {styles.matchInfoContainer}>
                    <View style = {styles.teamInfoContainer}>
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
        paddingLeft: 20
    },
    teamNumInputContainer: {
        flex: 1,
        paddingVertical: 10
    },  
    piecesContainer: {
        flex: 1
    },
});
