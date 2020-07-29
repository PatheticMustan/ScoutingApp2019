import React from "react";
import {
	View,
	FlatList,
	StyleSheet,
	Text,
	AsyncStorage,
	TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../Redux/Features/matchSlice";

import Constants from "expo-constants";


export default function List(props) {
	const dispatch = useDispatch();

	// get value from store
	const matches = useSelector(selectData);
	const find = key => matches.find(v => v[0] === key)[1];

	// matches = storage
	// parse matches
	// if new match add to state

	return (
		<FlatList
			data={matches}
			renderItem={(data) => {
				return (
					<TouchableOpacity onPress={() => {
						props.nav.navigate("Scout");
					}}>
						<View style={styles.item}>
							<Text style={styles.text}>{`${data.item[0]["MatchType"]} #${data.item[0]["MatchNumber"]} (Team ${data.item[0]["TeamNumber"]})`}</Text>
						</View>
					</TouchableOpacity>
				);
			}}
			ListEmptyComponent={() => {
				return (
					<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
						<Text style={{margin: 100,fontSize: 21}}>There are no items!</Text>
					</View>
				);
			}}
			keyExtractor={data => data[1].toString()} /** https://stackoverflow.com/a/49577737/12894940 */
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		marginTop: Constants.statusBarHeight,
	},
	item: {
		borderColor: "#696969",
		borderWidth: 1,
		padding: 20
	},
	text: {
		fontSize: 20,
	},
});
