import React from "react";
import {
    View,
    Text
} from "react-native";

export default class Header extends React.Component {
    render() {
        return (
            <View>
                <View style = {styles.headerView}>
                    <Text>

                    </Text>
                </View>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    headerView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        height: 100
    }
})