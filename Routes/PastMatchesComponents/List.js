import React from "react";
import {
	View,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadMatch } from "../../Redux/Features/dataSlice.js";
import { selectData } from "../../Redux/Features/matchSlice.js";

import Constants from "expo-constants";


export default function List(props) {
	const dispatch = useDispatch();

	// get value from store
	const matches = useSelector(selectData);

	const find = (pmm, id) => pmm[1].find(v => v[0] === id)[1];

	

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

						// the VERY VERY lazy solution
						dispatch(loadMatch(data.item.toString()));
					}}>
						<View style={styles.item}>
							<Text style={styles.text}>
								{["Qualification", "Quarterfinal", "Semifinal"][find(data.item, "MatchType")]} #{find(data.item, "MatchNumber")} (Team {find(data.item, "TeamNumber")})
							</Text>
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
			keyExtractor={data => {
				console.log(data);
				return Date.now();
			}} /** https://stackoverflow.com/a/49577737/12894940 */
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
	}
});
