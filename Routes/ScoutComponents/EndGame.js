import React from "react";
import {
	StyleSheet,
	Text,
	View
} from "react-native";

import NumButton from "../../Components/Buttons/NumButton.js";
import RadioButton from "../../Components/Buttons/RadioButton.js";
import CustomTextBox from "../../Components/Utility/CustomTextBox";
import Timer from "../../Components/OneUse/Timer.js";
import ClimbHeight from "../../Components/OneUse/ClimbHeight.js";
import ClimbPosition from "../../Components/OneUse/ClimbPosition.js";

export default class Endgame extends React.Component {
	constructor() {
		super();

		/** This is an exception I promise. */
		this.interval = setInterval(() => this.setState({time: Date.now()}), 100);
	}

    state = {
    	mode: 0
    }

    render() {
    	if(global.data["EndgameType"] == "Climb") {
    		return (
    			<View style = {styles.container}>
    				<Text style = {{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Endgame</Text>

    				<View style = {styles.endgameContainer}>
    					<NumButton id="BallsScored" width={120}>Balls Scored</NumButton>

    					<View style={{margin: 20}}>
    						<RadioButton
    							id="EndgameType"
    							data={["Park", "Climb", "None"]}
    							bgc="orange"
    							segmentedButton
    							forceOption
    							default="None"
    							options={{
    								flexDirection: "row",
    							}}
    						/>
    					</View>

    					<View style={{flex: 1}}>
    						<Timer id="Time"/>
    					</View>
                    
    					<View style={{paddingTop: 20, paddingBottom: 10}}>
    						<Text style={{fontSize: 20, fontWeight: "bold"}}>Initial Climb Height</Text>
    					</View>
                    
    					<View style={styles.climbContainer}>
    						<ClimbHeight id="ClimbHeight" bgc={"orange"}/>
                        


    						<View style={styles.climbPosition}>
    							<Text style={{fontWeight: "bold", fontSize: 20}}>Climb Position</Text>
                            
    							<ClimbPosition id="ClimbPosition" bgc={"orange"}/>
    						</View>
    					</View>
    					<View style = {styles.climbComments}>
    						<Text style={{fontWeight: "bold", fontSize: 20}}>Comments</Text>
    						<Text style={{fontSize: 12, textAlign: "center"}}>
                            Add any comments that you feel are useful. Do they attempt to climb but fall?
                            Do they get in the way of other robots? Do they swing a lot on the climb? Are they able to balance the rung?
                            Are they able to adjust their climb position? Do they slide on the run? Anything else that shows evidence of
                            good/poor performance?
    						</Text>
    						<CustomTextBox
    							multi={true}
    							id="EndgameComments"
    							width={900}
    							height={250}
    							placeholder="Type your comments here..."
    							backgroundColor={"#DDD"}
    							borderRadius={10}
    						/>
    					</View>
    				</View>
    			</View>
    		);
    	} else {
    		return (
    			<View style = {styles.container}>
    				<Text style = {{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Endgame</Text>

    				<View style = {styles.endgameContainer}>
    					<NumButton id="BallsScored" width={120}>Balls Scored</NumButton>

    					<View style={{margin: 20}}>
    						<RadioButton
    							id="EndgameType"
    							data={["Park", "Climb", "None"]}
    							bgc="orange"
    							segmentedButton
    							forceOption
    							default="None"
    							options={{
    								flexDirection: "row",
    							}}
    						/>
    					</View>

                    
    					<View style = {styles.climbComments}>
    						<Text style={{fontWeight: "bold", fontSize: 20}}>Comments</Text>
    						<Text style={{fontSize: 12, textAlign: "center"}}>
                            Add any comments that you feel are useful. Do they attempt to climb but fall?
                            Do they get in the way of other robots? Do they swing a lot on the climb? Are they able to balance the rung?
                            Are they able to adjust their climb position? Do they slide on the run? Anything else that shows evidence of
                            good/poor performance?
    						</Text>
    						<CustomTextBox
    							multi={true}
    							id="EndgameComments"
    							width={900}
    							height={250}
    							placeholder="Type your comments here..."
    							backgroundColor={"#DDD"}
    							borderRadius={10}
    						/>
    					</View>
    				</View>
    			</View>
    		);
    	}
    }
}

const styles=StyleSheet.create({
	climbComments: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	climbContainer: {
		flex: 1,
		flexDirection: "column"
	},
	climbPosition: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},
	container: {
		backgroundColor: "#FFF",
		paddingHorizontal: 50,
		paddingVertical: 20
	},
	endgameContainer: {
		alignItems: "center",
		borderColor: "black",
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		padding: 20
	}
});