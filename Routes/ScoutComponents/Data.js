import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Data extends React.Component {
    constructor() {
        super();
        /* This is all the data. */
        global.data = {}
    }

    /** Update data every second. */
    componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 100)}
    componentWillUnmount() {clearInterval(this.interval)}
    exportMatch() {
        /**
         * Team #
         * Match #
         * Fits under trench?
         * Defense
         * Penalties
         * Starting Balls
         * Starting Position
         * Cross Line
         * Balls Picked Up
         * Low Goal
         * Outer Goal
         * Inner Goal
         * Shots Missed
         * Comments
         * Loading Station
         * Floor
         * Low Goal
         * Outer Goal
         * Inner Goal
         * Shots Missed
         * Location of Shots
         * Rotation
         * Color
         * Comments
         * Endgame Type
         * Balls Scored
         * Initial Climb Height
         * Initial Climb Position
         * Climb Time
         * Comments
         */

        const match = {
            "Team #": global.data["TeamNumber"]
        }
    }

    render() {
        return (
            <View>
                <Text>{Object.entries(global.data).map(e=>`${e[0]}: ${JSON.stringify(e[1])}`).join("\n")}</Text>
            </View>
        );
    }
}