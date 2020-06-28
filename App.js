import * as React from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Entypo,
    Octicons,
    Ionicons 
} from "react-native-vector-icons";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Scout from "./Routes/Scout.js";
import PastMatches from "./Routes/PastMatches.js";
import Settings from "./Routes/Settings.js";

// create redux store
const rootReducer = (state={}, action) => {
    return state;
}

// create bottom tab navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: "#e91e63",
            }}
        >
            <Tab.Screen
                name="Scout"
                component={Scout}
                options={{
                    tabBarLabel: "Scout",
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="checklist" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="PastMatches"
                component={PastMatches}
                options={{
                    tabBarLabel: "Past Matches",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="back-in-time" color={color} size={size} />
                    )
                }}  
            />
            <Tab.Screen
                name="About"
                component={Settings}
                options={{
                    tabBarLabel: "About",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-information-circle" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    /** If not found, set empty match data in AsyncStorage. */
    (async () => {
        if (await AsyncStorage.getItem("matches") == null) {
            await AsyncStorage.setItem("matches", "[]")
        }
    })();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        </Provider>
    );
}