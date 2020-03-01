import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

import SegmentedControl from "../../Components/Buttons/SegmentedControl.js";
import NumButton from "../../Components/Buttons/NumButton.js";
import RadioButton from "../../Components/Buttons/RadioButton.js"
import CustomTextBox from "../../Components/Utility/CustomTextBox"
import Timer from "../../Components/Utility/Timer.js";
import ClimbPosition from "../../Components/Utility/ClimbPosition.js";

export default class Endgame extends React.Component {
    constructor() {
        super();

        /** This is an exception I promise. */
        this.interval = setInterval(() => this.setState({time: Date.now()}), 100)
    }

    state = {
        mode: 0
    }

    render() {
        const styles=StyleSheet.create({
            container: {
                paddingHorizontal: 50,
                paddingVertical: 20,
                backgroundColor: "#FFF"
            },
            endgameContainer: {
                alignItems: "center",
                borderColor: "black",
                padding: 20,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 10
            },
            climbContainer: {
                flex: 1,
                flexDirection: "column",
                display: global.data["EndgameType"] == 1 ? "block" : "none"
            },
            climbHeight: {
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
            },
            climbPosition: {
                flex: 1,
                flexDirection: "column",
                alignItems: "center"
            },
            climbComments: {
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center"
            }
        });

        return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Endgame</Text>

                <View style = {styles.endgameContainer}>
                    <NumButton id="BallsScored" width={120}>Balls Scored</NumButton>

                    <View style={{margin: 20}}>
                        <SegmentedControl
                            id="EndgameType"
                            data={["Park", "Climb", "None"]}
                            default={2}
                        />
                    </View>

                    <View style={{display: global.data["EndgameType"] == 1 ? "flex" : "none"}}>
                        <Timer id="Time"/>
                    </View>
                    
                    <View style={{paddingTop: 20, paddingBottom: 10, display: global.data["EndgameType"] == 1 ? "flex" : "none"}}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Initial Climb Height</Text>
                    </View>
                    
                    <View style={styles.climbContainer}>
                        <View style={styles.climbHeight}>
                            
                            <ClimbPosition
                                id="parkPosition"
                                data={[
                                    ["Low",      require("../../Assets/EndLow.png")],
                                    ["Balanced", require("../../Assets/EndLevel.png")],
                                    ["High",     require("../../Assets/EndHigh.png")]
                                ]}
                                bgc={"orange"}
                            />
                        </View>

                        <View style = {{flex: 1, flexDirection: "row"}}>
                            <View style = {styles.climbPosition}>
                                <Text style = {{fontWeight: "bold", fontSize: 20}}>Climb Position</Text>
                                <Image
                                    source = {require("../../Assets/ClimbPosition.png")}
                                    style = {{width: 300, height: 150}}
                                />
                                <RadioButton id="climbPosition" data={["Edge", "Middle Bar", "Center"]} bgc={"orange"}/>
                            </View>




                            <View style = {styles.climbComments}>
                                <Text style = {{fontWeight: "bold", fontSize: 20}}>Comments</Text>
                                <Text style = {{fontSize: 12}}>
                                    Add any comments that you feel are useful. Do they attempt to climb but fall?
                                    Do they get in the way of other robots? Do they swing a lot on the climb? Are they able to balance the rung?
                                    Are they able to adjust their climb position? Do they slide on the run? Anything else that shows evidence of
                                    good/poor performance?
                                </Text>
                                <CustomTextBox
                                    id="AutonomousComments"
                                    default=""
                                    width={600}
                                    height={400}
                                    backgroundColor={"#DDD"}
                                    borderRadius={10}
                                    options={{
                                        multiline: true,
                                        numberOfLines: 10
                                }}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}