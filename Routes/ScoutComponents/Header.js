import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert
} from "react-native";
import * as Sharing from "expo-sharing";
import Link from "../../Components/Utility/Link.js";
import SegmentedControl from "../../Components/Buttons/SegmentedControl.js";
/* import {localStorage} from '../../Components/Storage/WebStorage.js';*/
/**
 * legacy storage */
 /**/


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
                {text: 'Reset', onPress: () => console.log('DEV TODO RESET')},
                {text: 'Cancel', style: 'cancel'}
            ]
          );
    }

    save() {
        (async () => {
            await this.storage.get("meta")
            await this.storage.set("test", "tesssssa testorosa");
            alert(await this.storage.get("test"));
        })()
        //
    }

    saveAndExport() {
        this.save();
        // export
    }

    render() {
        return (
            <View style={{backgroundColor: !global.data["Team"]? "#D0F4FF" : "#FFD0D0"}}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>
                    <View style = {{flex: 1}}>
                        <Link color="red" onPress={() => this.reset()}>Reset</Link>
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <SegmentedControl
                            id="Team"
                            data={["Blue Alliance", "Red Alliance"]}
                            options={{
                                firstTabStyle: {backgroundColor: "#007FFF"},
                                lastTabStyle: {backgroundColor: "#FF3E3E"},
                                tabTextStyle: {color: "white"}
                            }}
                            default={0}
                        />
                    </View>
                    <View style = {{flex: 1}}>
                    <Link color="blue" onPress={() => {
                        localStorage
                    }}>Save</Link>
                    </View>

                    <View style = {{flex: 1}}>
                    <Link color="blue" onPress={() => Sharing}>Save and Export</Link>
                    </View>
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
