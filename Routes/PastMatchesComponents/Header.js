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
                <Text style = {styles.headerText}>Past Matches</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#DDD",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10
    }
});
