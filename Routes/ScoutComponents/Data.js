import React from "react";

export default class Data extends React.Component {
	constructor(props) {
		super(props);
		/* This is all the data. */
		global.data = {Team: "Blue Alliance",MatchType: "Qualification",BallsPickedUp: 0,CrossesInitiationLine: false,LinePosition: "",AutoLow: 0,AutoOuter: 0,AutoInner: 0,AutoMissed: 0,PlaysDefense: false,BallsPickedUpFromLoadingStation: 0,Rotation: false,Color: false,ShootFrom: "",BallsPickedUpFromFloor: 0,FitsUnderTrench: false,TeleLow: 0,TeleOuter: 0,TeleInner: 0,TeleMissed: 0,BallsScored: 0,EndgameType: "None",Time: 0,TimerClicked: false,ClimbHeight: "",ClimbPosition: "",YellowCard: false,RedCard: false,TeamNumber: "",MatchNumber: 0,Scouters: "",StartingPieces: 0,AutonomousComments: "",TeleopComments: "",EndgameComments: ""};
		global.output = "";
		global.currentMatchID = -1;
	}

	/** Update data every second. */
	componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 100);}
	componentWillUnmount() {clearInterval(this.interval);}
}