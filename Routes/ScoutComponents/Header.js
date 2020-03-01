import React from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import * as Sharing from "expo-sharing";
import Link from "../../Components/Utility/Link.js";
import SegmentedControl from "../../Components/Buttons/SegmentedControl.js";
import {localStorage} from '../../Components/Storage/Storage.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.storage = localStorage;

        const test = () => {
            alert(typeof this.storage);
            
        }
        test();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>
                    <Link color="red" onPress={() => alert(1)}>Reset</Link>
                    <Link color="blue" onPress={() => alert(1)}>Undo</Link>

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
                    
                    <Link color="blue" onPress={() => {
                        localStorage
                    }}>Save</Link>
                    <Link color="blue" onPress={() => Sharing}>Save and Export</Link>
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
