import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Alert,
	AsyncStorage
} from "react-native";

import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import RadioButton from "../../Components/Buttons/RadioButton.js";
import Link from "../../Components/Utility/Link.js";

import { useDispatch, useSelector } from "react-redux";
import { setDefault, freshStart, selectData } from "../../Redux/Features/dataSlice.js";

const path = "./data.csv";

export default function Header() {
	const dispatch = useDispatch();
	const arenaID = "Team";

	// set default value
	dispatch(setDefault([arenaID, 0]));
	// since this isn't an input, no need to set default.
	// get value from store
	const kpv = useSelector(selectData);
	const selectedTeam = kpv.find(v => v[0] === arenaID)[1];

	function reset() {
		alert("Everyone needs a fresh start. Why not now?");

		// TODO: Test if Alert.alert works. Also search for web friendly options????
		Alert.alert(
			"Reset",
			"Are you sure you want to reset the Scoutsheet?",
			[
				{text: "Reset", onPress: () => dispatch(freshStart())},
				{text: "Cancel", style: "cancel"}
			]
		);
	}
	
	function save() {
		(async () => {
			const match = kpv;

			const keyParts = 
				["Team", "TeamNumber", "MatchNumber", "MatchType", "Scouters", "StartingPieces"]
					.map(k => match.find(v => v[0] === k)[0])
					.join("");
			
			console.log(keyParts)
			/*
			await AsyncStorage.setItem(
				"matches", 
				JSON.stringify(
					[...JSON.parse(await AsyncStorage.getItem("matches")), JSON.stringify(global.data)]
				)
			);
			alert("Saved Match #" + global.data["MatchNumber"]);
			*/
		})();
	}
	
	function saveAndExport() {
		(async () => {
			await AsyncStorage.setItem(
				"matches", 
				JSON.stringify(
					[...JSON.parse(await AsyncStorage.getItem("matches")), JSON.stringify(global.data)]
				)
			);
	
			try {
				const g = id => global.data[id]; //.split(`"`).join("").split(",").join("");
	
				const header = ",,Other,,,Autonomous,,,,,,,,,Balls Picked Up,,Balls Scored,,,,,Control Panel,,,End Game,Balls Scored,If Climb...,,,\nTeam #,Match #,Fits under trench?,Defense,Penalties,Starting Balls,Starting Position,Cross Line,Balls Picked Up,Low Goal,Outer Goal,Inner Goal,Shots Missed,Comments,Loading Station,Floor,Low Goal,Outer Goal,Inner Goal,Shots Missed,Location of Shots,Rotation,Color,Comments,Endgame Type,Balls Scored,Initial Climb Height,Initial Climb Position,Climb Time,Comments\n";
				const entry = [
					g`TeamNumber`,
					g`MatchNumber`,
					g`FitsUnderTrench`? "Yes" : "No",
					g`PlaysDefense`? "Yes" : "No",
					g`RedCard`+g`YellowCard`>1?"Red and Yellow":!(g`RedCard`+g`YellowCard`)?"None":g`RedCard`?"Red":"Yellow",
					g`StartingPieces`,
					g`LinePosition`,
					g`CrossesInitiationLine`? "Yes" : "No",
					g`BallsPickedUp`,
					g`AutoLow`,
					g`AutoOuter`,
					g`AutoInner`,
					g`AutoMissed`,
					g`AutonomousComments`,
					g`BallsPickedUpFromLoadingStation`,
					g`BallsPickedUpFromFloor`,
					g`TeleLow`,
					g`TeleOuter`,
					g`TeleInner`,
					g`TeleMissed`,
					g`ShootFrom`,
					g`Rotation`? "Yes" : "No",
					g`Color`? "Yes" : "No",
					g`TeleopComments`,
					g`EndgameType`,
					g`BallsScored`,
					g`EndgameType`=="Climb"? g`ClimbHeight` : "",
					g`EndgameType`=="Climb"? g`ClimbPosition` : "",
					g`EndgameType`=="Climb"? g`Time` : "",
					g`EndgameComments`
				];
	
				let output = header + entry;
				global.output = output;
	
				// write new csv file
				FileSystem.writeAsStringAsync(FileSystem.documentDirectory+path, global.output, { encoding: FileSystem.EncodingType.UTF8 });
				// share the new csv file we just made
				Sharing.shareAsync(FileSystem.documentDirectory+path);
			} catch (error) {
				alert(error.message);
			}
		})();
	}

	return (
		<View style={{backgroundColor: selectedTeam==1? "#FFD0D0" : "#D0F4FF", flex: 1}}>
			<Text style={styles.headerText}>2020 - Infinite Recharge{"\n"}</Text>
			<View style={styles.linkContainer}>
				<Link color="red" onPress={() => reset()}>Reset</Link>
				<Link></Link>
				<RadioButton
					id="Team"
					data={["Blue Alliance", "Red Alliance"]}
					bgc="orange"
					segmentedButton
					forceOption
					options={{
						flexDirection: "row",
					}}
				/>
					
				<Link color="blue" onPress={() => save()}>Save</Link>

				<Link color="blue" onPress={() => saveAndExport()}>Save and Export</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DDD"
	},
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