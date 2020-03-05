import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    AsyncStorage
} from "react-native";

import * as Sharing from "expo-sharing";
import RadioButton from "../../Components/Buttons/RadioButton.js";
import Link from "../../Components/Utility/Link.js";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 100)}
    componentWillUnmount() {clearInterval(this.interval)}

    reset() {
        Alert.alert(
            "Reset",
            "Are you sure you want to reset the Scoutsheet?",
            [
                {text: 'Reset', onPress: () => this.props.onReset()},
                {text: 'Cancel', style: 'cancel'}
            ]
          );
    }

    save() {
        (async () => {
            console.log(JSON.parse(await AsyncStorage.getItem("matches")))
            await AsyncStorage.setItem("matches", JSON.stringify(JSON.parse(await AsyncStorage.getItem("matches")).push(JSON.stringify(global.data))))
        })();
    }

    saveAndExport() {
        this.save();
        // export
    }

    render() {
        return (
            <View style={{backgroundColor: global.data["Team"]=="Red Alliance"? "#FFD0D0" : "#D0F4FF"}}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>
                        <Link color="red" onPress={() => this.reset()}>Reset</Link>

                        <RadioButton
                            id="Team"
                            data={["Blue Alliance", "Red Alliance"]}
                            bgc="orange"
                            segmentedButton
                            forceOption
                            default="Blue Alliance"
                            options={{
                                flexDirection: "row",
                            }}
                        />

                    <Link color="blue" onPress={() => this.save()}>Save</Link>

                    <Link color="blue" onPress={() => this.saveAndExport()}>Save and Export</Link>
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
