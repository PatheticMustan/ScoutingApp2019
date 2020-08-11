// as the name suggests, kpvToCsv takes the important parts of the kpv, and converts it into a neat csv.

export default function kpvToCsv(matches) {
	const g = id => global.data[id]; //.split(`"`).join("").split(",").join("");
	const find = (kpv, id) => kpv.find(v => v[0] === id)[1];

	const theHolyGrail = [
		{
			name: "Team Number",
			vf: kpv => find(kpv, "TeamNumber")
		},

		{
			name: "Match Number",
			vf: kpv => find(kpv, "MatchNumber")
		},

		{
			name: "Fits Under Trench?",
			vf: kpv => find(kpv, "FitsUnderTrench")? "Yes" : "No"
		},

		{
			name: "Plays Defense?",
			vf: kpv => find(kpv, "PlaysDefense")? "Yes" : "No"
		},

		{
			name: "Penalties",
			vf: kpv => {
				const red = find(kpv, "RedCard");
				const yellow = find(kpv, "YellowCard");

				if (red && yellow) 	return "Red and Yellow";
				if (red) 			return "Red";
				if (yellow) 		return "Yellow";

				return "None";
			}
		},

		{
			name: "Starting Pieces",
			vf: kpv => find(kpv, "StartingPieces")
		},

		{
			name: "Line Position",
			vf: kpv => find(kpv, "LinePosition")
		},

		{
			name: "Crosses Initiation Line?",
			vf: kpv => find(kpv, "CrossesInitiationLine")? "Yes" : "No"
		},

		{
			name: "Auto Low",
			vf: kpv => find(kpv, "AutoLow")
		},

		{
			name: "Auto Outer",
			vf: kpv => find(kpv, "AutoOuter")
		},

		{
			name: "Auto Inner",
			vf: kpv => find(kpv, "AutoInner")
		},

		{
			name: "Auto Missed",
			vf: kpv => find(kpv, "AutoMissed")
		},

		{
			name: "Autonomous Comments",
			vf: kpv => find(kpv, "AutonomousComments")
		},

		{
			name: "Balls Picked Up From Loading Station",
			vf: kpv => find(kpv, "BallsPickedUpFromLoadingStation")
		},

		{
			name: "Balls Picked Up From Floor",
			vf: kpv => find(kpv, "BallsPickedUpFromFloor")
		},

		{
			name: "Tele-Op Low",
			vf: kpv => find(kpv, "TeleLow")
		},

		{
			name: "Tele-Op Outer",
			vf: kpv => find(kpv, "TeleOuter")
		},

		{
			name: "Tele-Op Inner",
			vf: kpv => find(kpv, "TeleInner")
		},

		{
			name: "Tele-Op Missed",
			vf: kpv => find(kpv, "TeleMissed")
		},

		{
			name: "Shoot From",
			vf: kpv => find(kpv, "AutonomousComments")
		},

		
	];
	
	const header = ",,Other,,,Autonomous,,,,,,,,,Balls Picked Up,,Balls Scored,,,,,Control Panel,,,End Game,Balls Scored,If Climb...,,,\nTeam #,Match #,Fits under trench?,Defense,Penalties,Starting Balls,Starting Position,Cross Line,Balls Picked Up,Low Goal,Outer Goal,Inner Goal,Shots Missed,Comments,Loading Station,Floor,Low Goal,Outer Goal,Inner Goal,Shots Missed,Location of Shots,Rotation,Color,Comments,Endgame Type,Balls Scored,Initial Climb Height,Initial Climb Position,Climb Time,Comments\n";
	const entry = [
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
}