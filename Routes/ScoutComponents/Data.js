import React from "react";
import {
    View,
    Text,
    Button,
    Share
} from "react-native";

import { AsyncStorage } from 'react-native';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        /* This is all the data. */
        global.data = {Team: "Blue Alliance",MatchType: "Qualification",BallsPickedUp: 0,CrossesInitiationLine: false,LinePosition: "",AutoLow: 0,AutoOuter: 0,AutoInner: 0,AutoMissed: 0,PlaysDefense: false,BallsPickedUpFromLoadingStation: 0,Rotation: false,Color: false,ShootFrom: "",BallsPickedUpFromFloor: 0,FitsUnderTrench: false,TeleLow: 0,TeleOuter: 0,TeleInner: 0,TeleMissed: 0,BallsScored: 0,EndgameType: "None",Time: 0,TimerClicked: false,ClimbHeight: "",ClimbPosition: "",YellowCard: false,RedCard: false,TeamNumber: "",MatchNumber: 0,Scouters: "",StartingPieces: 0,AutonomousComments: "",TeleopComments: "",EndgameComments: ""}
        global.output = "";
        global.currentMatchID = -1;
    }

    /** Update data every second. */
    componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 100)}
    componentWillUnmount() {clearInterval(this.interval)}

    exportMatch() {
        // shorten the monstrosity I'm about to type. Also clears data from `"` and `,`. Pretty lazy, but also I'm kinda tired.
        // damn good job on backend, Kevin. I do read your comments lol
        const g = id => global.data[id] //.split(`"`).join("").split(",").join("");

        const header = ",,Other,,,Autonomous,,,,,,,,,Balls Picked Up,,Balls Scored,,,,,Control Panel,,,End Game,Balls Scored,If Climb...,,,\nTeam #,Match #,Fits under trench?,Defense,Penalties,Starting Balls,Starting Position,Cross Line,Balls Picked Up,Low Goal,Outer Goal,Inner Goal,Shots Missed,Comments,Loading Station,Floor,Low Goal,Outer Goal,Inner Goal,Shots Missed,Location of Shots,Rotation,Color,Comments,Endgame Type,Balls Scored,Initial Climb Height,Initial Climb Position,Climb Time,Comments\n"
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
    }

    render() {
        return (
            <View>
                <Text>{Object.entries(global.data).map(e=>`${e[0]}: ${JSON.stringify(e[1])}`).join("\n")}</Text>

                <Button onPress={() => this.exportMatch()} title={"Export"}/>
                <Button onPress={async () => {
                    await AsyncStorage.clear();
                    alert("Storage cleared.");
                }} title={"RESET STORAGE"}/>


                <Text>{global.output}</Text>
            </View>
        );
    }
}