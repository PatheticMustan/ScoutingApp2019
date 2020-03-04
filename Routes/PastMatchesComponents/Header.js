import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert
} from "react-native";
import * as Sharing from "expo-sharing";
import Link from "../../Components/Utility/Link.js";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{backgroundColor: "#DDDDDD"}}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>

                    <Link color="blue" onPress={()=>{}}>Edit</Link>

                    <Link color="blue" onPress={()=>{}}>Add Competition</Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DDD"
    },
    headerText: {
        flex: 1,
        fontSize: 30,
        paddingTop: 10,
        textAlign: "center"
    },
    linkContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 15,
        paddingTop: 10
    }
});
