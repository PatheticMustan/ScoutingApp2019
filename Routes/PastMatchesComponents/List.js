import React from "react";
import {
	View,
	FlatList,
	StyleSheet,
	Text,
	AsyncStorage,
	TouchableOpacity
} from "react-native";

import Constants from "expo-constants";

export default function List(props) {
	const dispatch = useDispatch();

	// set default value
	dispatch(setDefault([props.id, false]));
	// get value from store
	const kpv = useSelector(selectData);
	const matches = kpv.find(v => v[0] === props.id)[1];


	// matches = storage
	// parse matches
	// if new match add to state

	return (
		<FlatList
			data={this.state.data}
			renderItem={(data) => {
				return (
					<TouchableOpacity onPress={() => {
						global.data = data.item[0];
						global.currentMatchID = data.index;
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
