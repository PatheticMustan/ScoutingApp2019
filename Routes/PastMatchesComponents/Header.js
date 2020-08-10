import React from "react";
import {
	StyleSheet,
	Text,
	View,
	AsyncStorage
} from "react-native";

import Link from "../../Components/Utility/Link.js";

import { useDispatch, useSelector } from "react-redux";
import { setDefault, selectData } from "../../Redux/Features/dataSlice.js";
import { resetMatches } from "../../Redux/Features/matchSlice.js";

export default function Header() {
	const dispatch = useDispatch();
	const arenaID = "Team";

	// set default value
	dispatch(setDefault([arenaID, 0]));
	// since this isn't an input, no need to set default.
	// get value from store
	const kpv = useSelector(selectData);
	const selectedTeam = kpv.find(v => v[0] === arenaID)[1];

	return (
		<View style={{backgroundColor: selectedTeam==1? "#FFD0D0" : "#D0F4FF", flex: 1}}>
			<Text style={styles.headerText}>2020 - Infinite Recharge{"\n"}</Text>
			<View style={styles.linkContainer}>
				<Link color="red" onPress={() => {
					AsyncStorage.removeItem("matches");

					dispatch(resetMatches());

					// TODO: Add confirmation
					alert("Cleared all the matches!");
				}}>
					Reset All Matches
				</Link>

				<Link color="blue" onPress={() => {
					// aw fuck
				}}>
					Reset All Matches
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerText: {
		flex: 1,
		fontSize: 20,
		paddingTop: 10,
		textAlign: "center"
	},
	linkContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		paddingBottom: 15,
		paddingTop: 10
	}
});