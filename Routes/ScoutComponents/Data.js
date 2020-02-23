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

        // shorten the monstrosity I'm about to type. Also clears data from `"` and `,`. Pretty lazy, but also I'm kinda tired.
        const g = id => global.data[id] //.split(`"`).join("").split(",").join("");


        const header = ",,Other,,,Autonomous,,,,,,,,,Balls Picked Up,,Balls Scored,,,,,Control Panel,,,End Game,Balls Scored,If Climb...,,,Team #,Match #,Fits under trench?,Defense,Penalties,Starting Balls,Starting Position,Cross Line,Balls Picked Up,Low Goal,Outer Goal,Inner Goal,Shots Missed,Comments,Loading Station,Floor,Low Goal,Outer Goal,Inner Goal,Shots Missed,Location of Shots,Rotation,Color,Comments,Endgame Type,Balls Scored,Initial Climb Height,Initial Climb Position,Climb Time,Comments\n"

        const entry = [
            g`TeamNumber`,
            g`MatchNumber`,
            g`FitsUnderTrench`,
            g`PlaysDefense`,
            g`RedCard`+g`YellowCard`>1?"Red and Yellow":!(g`RedCard`+g`YellowCard`)?"None":g`RedCard`?"Red":"Yellow",
            g`StartingPieces`,
            g`LinePosition`,
            g`CrossesInitiationLine`,
            g`BallsPickedUp`,
            g`AutoLow`,
            g`AutoOuter`,
            g`AutoInner`,
            g`AutoMissed`,
            g`AutonomousComments`,
            g`Loading Station`,
            g`Floor`,
            g`Low Goal`,
            g`Outer Goal`,
            g`Inner Goal`,
            g`Shots Missed`,
            g`Location of Shots`,
            g`Rotation`,
            g`Color`,
            g`Comments`,
            g`Endgame Type`,
            g`Balls Scored`,
            g`Initial Climb Height`,
            g`Initial Climb Position`,
            g`Climb Time`,
            g`Comments`
        ];

        let output = header + entry;

        return output;
    }

    render() {
        return (
            <View>
                <Text>{Object.entries(global.data).map(e=>`${e[0]}: ${JSON.stringify(e[1])}`).join("\n")}</Text>

                <Text>
                    {this.exportMatch()}
                </Text>
            </View>
        );
    }
}