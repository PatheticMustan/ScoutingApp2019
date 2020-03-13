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
                    <Text style = {styles.title}>2638 Scout</Text>
                    <Text style = {styles.title}>Version 2.0 3/6/2020</Text>
                    <View
                        style={{backgroundColor: "#DDDDDD", borderRadius: 10, height: 5, width: 1000, margin: 20}}
                    ></View>
                </View>


                <View style={styles.credits}>
                    /** Replace br with \n */
                    <Text style={styles.title}>UI Design and Concept by</Text>
                    <Text style={styles.text}>Reid Fleishman{"\n"}</Text>

                    <Text style={styles.title}>App Development Team (React Native)</Text>
                    <Text style={styles.text}><u>Developer</u> Kevin Wang</Text>
                    <Text style={styles.text}><u>Developer</u> Eric Yachbes</Text>
                    <Text style={styles.text}><u>Developer</u> Aidan Din{"\n"}</Text>

                    <Text style={styles.title}>Tools Used</Text>
                    <Text style={styles.text}>React Native</Text>
                    <Text style={styles.text}>Expo</Text>
                    <Text style={styles.text}>VSCode{"\n"}</Text>

                    <Text style={styles.title}>Special Thanks To</Text>
                    <Text style={styles.text}>John Motchkavitz</Text>
                    <Text style={styles.text}>Matthew Corrigan</Text>
                    <Text style={styles.text}>Andrea Zinn</Text>
                    <Text style={styles.text}><i>And all of our amazing mentors!</i>{"\n"}</Text>

                    <Text style={styles.text}>Questions or Comments? Please email reidfleishman5@gmail.com{"\n"}</Text>

                    <Text style={styles.title}>© 2020 Rebel Robotics</Text>
                    <Text style={styles.title}>gnsrobotics.com</Text>
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
    title: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 16
    },
    text: {
        fontSize: 16
    },
    credits: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50
    }
});
