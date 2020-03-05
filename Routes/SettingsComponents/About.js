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
                    {/*<Link color="blue" onPress={() => alert("Kevin is a hentai addict")}>Close</Link>*/}
                </View>


                <View style = {styles.imageTeamVersion}>
                    <Image
                        source={require("../../Assets/appicon.png")}
                        style={{borderRadius: 10, width: 350, height: 350, margin: 10}}
                    />
                    <Text style = {styles.imageTeamVersionText}>2638 Scout</Text>
                    <Text style = {styles.imageTeamVersionText}>Version 2.0 3/6/20</Text>
                    <View
                        style={{backgroundColor: "#DDDDDD", borderRadius: 10, height: 5, width: 1000, margin: 20}}
                    ></View>
                </View>


                <View style = {styles.credits}>
                    <Text style = {styles.creditsBoldUnderL}>UI Design and Concept by</Text>
                    <Text style = {styles.creditsBoldUnderL}>App Development Team (React Native)</Text>
                    <Text style = {styles.creditsBoldUnderL}>Made in</Text>
                    <Text style = {styles.creditsBoldUnderL}>Special Thanks to</Text>
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    imageTeamVersionText: {
        fontWeight: "bold",
        fontSize: 16
    },
    credits: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    creditsBoldUnderL: {
        fontWeight: "bold",
        fontSize: 16
    }
});