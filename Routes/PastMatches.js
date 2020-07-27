import React from "react";
import {
	View,
	ScrollView
} from "react-native";

import Header from "./PastMatchesComponents/Header.js";
import List from "./PastMatchesComponents/List.js";

export default function PastMatches({navigation}) {
	return (
		<ScrollView style={{flex: 1}}>
			<Header/>
			<List nav={navigation}/>
		</ScrollView>
	);
}