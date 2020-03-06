import * as React from "react";
import { Text, View, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Entypo,
    Octicons,
    Ionicons 
} from "react-native-vector-icons";

import Scout from "./Routes/Scout.js";
import PastMatches from "./Routes/PastMatches.js";
import Settings from "./Routes/Settings.js";

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
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-settings" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    (async () => {
        await AsyncStorage.setItem("matches", "[]")
    })();
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}