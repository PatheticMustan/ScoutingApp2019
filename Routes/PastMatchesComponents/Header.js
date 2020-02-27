import React from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

export default class Header extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.headerText2}>Edit</Text>
                <Text style = {styles.headerText}>Past Matches</Text>
                <Text style = {styles.headerText2}>Add Competition</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#DDD",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    headerText2: {
        fontSize: 20,
        color: "blue",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }
});
