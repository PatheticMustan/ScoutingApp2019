import React from "react";
import {
	View
} from "react-native";

import Header from "./PastMatchesComponents/Header.js";
import List from "./PastMatchesComponents/List.js";

export default function PastMatches(props) {
	return (
		<View>
			<View style={{flex: 1}}>
				<Header/>
			</View>
			
			<View style={{flex: 7}}>
				<List nav={props.navigation}/>
			</View>
		</View>
	);
}