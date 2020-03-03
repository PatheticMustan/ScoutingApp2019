import React from "react";
import {
    View,
    ScrollView
} from "react-native";

import Header from "./PastMatchesComponents/Header.js"
import List from "./PastMatchesComponents/List.js";

export default class PastMatches extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Header/>
                    <List/>
                </View>
            </ScrollView>
        );
    }
}