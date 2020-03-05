import React from "react";
import {
    View,
    ScrollView
} from "react-native";

import Header from "./ScoutComponents/Header.js";
import MatchInfoContainer from "./ScoutComponents/MatchInfoContainer.js";
import Autonomous from "./ScoutComponents/Autonomous.js";
import TeleOp from "./ScoutComponents/TeleOp.js";
import Endgame from "./ScoutComponents/EndGame.js";
import Other from "./ScoutComponents/Other.js";

import Data from "./ScoutComponents/Data.js";

/** Test Components */

export default class Scout extends React.Component {
    state = {condition: true};
    render() {
        if (this.state.condition) {
            return (
                <ScrollView>
                    <View>
                        <Data data={{
                            Team: 1,
                            MatchType: "Qualification",
                            BallsPickedUp: 5,
                            CrossesInitiationLine: false,
                            LinePosition: "",
                            AutoLow: 0,
                            AutoOuter: 0,
                            AutoInner: 0,
                            AutoMissed: 0,
                            PlaysDefense: false,
                            BallsPickedUpFromLoadingStation: 0,
                            Rotation: false,
                            Color: false,
                            ShootFrom: "",
                            BallsPickedUpFromFloor: 0,
                            FitsUnderTrench: false,
                            TeleLow: 0,
                            TeleOuter: 0,
                            TeleInner: 0,
                            TeleMissed: 0,
                            BallsScored: 0,
                            EndgameType: 2,
                            Time: "0:00",
                            TimerClicked: false,
                            ClimbHeight: "",
                            ClimbPosition: "",
                            YellowCard: false,
                            RedCard: false,
                            TeamNumber: "",
                            MatchNumber: 0,
                            Scouters: "",
                            StartingPieces: 0,
                            AutonomousComments: "",
                            TeleopComments: "",
                            EndgameComments: "",
                        }}
                        />
    
                        <Header onReset={() => this.setState({condition: false})}/>
                        
                        <MatchInfoContainer/>
                        <Autonomous/>
                        <TeleOp/>
                        <Endgame/>
                        <Other/>
                    </View>
                </ScrollView>
            );
        } else {
            this.setState({condition: true});
            return <View />;
        }
    }
}