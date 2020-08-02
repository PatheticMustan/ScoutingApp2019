import * as React from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	Entypo,
	Octicons,
	Ionicons 
} from "react-native-vector-icons";

import store from "./Redux/Store.js";
import { Provider, useDispatch } from "react-redux";

import Scout from "./Routes/Scout.js";
import PastMatches from "./Routes/PastMatches.js";
import About from "./Routes/About.js";
import { importMatches } from "./Redux/Features/matchSlice.js";

// create bottom tab navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Scout"
			tabBarOptions={{
				activeTintColor: "#E91E63",
			}}
		>
			<Tab.Screen
				name="Scout"
				component={Scout}
				options={{
					tabBarLabel: "Scout",
					tabBarIcon: ({ color, size }) => <Octicons name="checklist" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="PastMatches"
				component={PastMatches}
				options={{
					tabBarLabel: "Past Matches",
					tabBarIcon: ({ color, size }) => <Entypo name="back-in-time" color={color} size={size} />
				}}  
			/>
			<Tab.Screen
				name="About"
				component={About}
				options={{
					tabBarLabel: "About",
					tabBarIcon: ({ color, size }) => <Ionicons name="ios-information-circle" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	);
}

// Async
// Storage
// Setter
// ;)
// The ASS handles stuff like setting matches to [] if empty, and syncing AsyncStorage and state.matches
function ASS() {
	const dispatch = useDispatch();

	(async () => {
		const matches = await AsyncStorage.getItem("matches");

		if (matches == null) {
			//  If not found, set empty match data in AsyncStorage.
			await AsyncStorage.setItem("matches", "[]");
		} else {
			// otherwise sync state.matches.matches and AsyncStorage
			dispatch(importMatches(JSON.parse(matches)));
		}
	})();

	// mmmm, look at that empty component return, it just gives me chills O_o
	return <></>;
}

export default function App() {
	// make store global bc I want to see the data pls
	window.natsumi = store;

	return (
		<Provider store={store}>
			{/** ASS must be inside the Provider to dispatch importMatches(), so I made it into a component. */}
			<ASS/>

			<NavigationContainer>
				<MyTabs/>
			</NavigationContainer>
		</Provider>
	);
}