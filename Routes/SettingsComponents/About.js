import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import Link from "../../Components/Utility/Link.js";

export default class About extends React.Component {
    render() {
        return (
            <View>
                <View style = {styles.aboutHeader}>
                    <Text style = {styles.aboutHeaderText}>About</Text>
                </View>


                <View style = {styles.imageTeamVersion}>
                    <Image
                        source={require("../../Assets/appicon.png")}
                        style={{borderRadius: 10, width: 350, height: 350, margin: 10}}
                    />
                    <Text style = {styles.text}>2638 Scout</Text>
                    <Text style = {styles.text}>Version 2.0 3/6/2020</Text>
                    <View
                        style={{backgroundColor: "#DDDDDD", borderRadius: 10, height: 5, width: 1000, margin: 20}}
                    ></View>
                </View>


                <View style = {styles.credits}>
                    <Text style = {styles.text}>UI Design and Concept by</Text>
                    <Text style = {styles.text}>App Development Team (React Native)</Text>
                    <Text style = {styles.text}>Made in</Text>
                    <Text style = {styles.text}>Special Thanks to</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    aboutHeader: {
        backgroundColor: "#DDDDDD",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    aboutHeaderText: {
        padding: 10,
        fontSize: 30
    },
    imageTeamVersion: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 16
    },
    credits: {
        justifyContent: "center",
        alignItems: "center"
    }
});