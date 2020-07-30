// as the name suggests, kpvToCsv takes the important parts of the kpv, and converts it into a neat csv.

export default function kpvToCsv(kpv) {
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
}