import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from "react-native";

import BoolButton from "../../Components/Buttons/BoolButton.js";
import NumButton from "../../Components/Buttons/NumButton.js";
import RadioButton from "../../Components/Buttons/RadioButton.js";
import CustomTextBox from "../../Components/Utility/CustomTextBox.js";

export default class TeleOp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Tele-Op</Text>
                <View style={styles.teleOpContainer}>
                    <ImageBackground
                        source={require("../../Assets/2020Field.png")}
                        style={{height: 500, width: 975, marginTop: 20, flex: 1, flexDirection: "row"}}
                        imageStyle={{ borderRadius: 10}}
                    >
                        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <View style = {{flex: 1, justifyContent: "center"}}>
                                <BoolButton id="PlaysDefense" bgc="lime" >Plays Defense</BoolButton>
                            </View>
                            <View style = {{flex: 1, justifyContent: "center"}}>
                                <NumButton id="BallsPickedUpFromLoadingStation" height={80}>Balls Picked Up from Loading Station</NumButton>
                            </View>
                        </View>

                        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <View style= {{flex: 9}} />
                            <BoolButton id="Rotation" bgc="lime">Rotation</BoolButton>
                            <BoolButton id="Color" bgc="lime">Color</BoolButton>
                        </View>

                        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <NumButton id="BallsPickedUpFromFloor" height={80}>Balls Picked Up from Floor</NumButton>
                            <BoolButton id="FitsUnderTrench" bgc="lime">Fits Under Trench</BoolButton>
                        </View>

                        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <RadioButton id="ShootFrom" data={["Trench Zone", "Target Zone", "Other"]} bgc={"orange"}/>
                        </View>

                        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <NumButton id="TeleLow">Low</NumButton>
                            <NumButton id="TeleOuter">Outer</NumButton>
                            <NumButton id="TeleInner">Inner</NumButton>
                            <NumButton id="TeleMissed">Missed</NumButton>
                        </View>
                    
                    </ImageBackground>

                    <Text style = {{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Comments</Text>
                    <Text style = {{textAlign: "center", fontSize: 14, marginLeft: 20, marginRight: 20, marginTop: 10}}>
                        Add any comments that you feel are useful. Does the robot get any penalties? Does the robot cycle
                        efficiently? Do they struggle with picking up balls or shooting? Do they play defense, and if so,
                        how? Where do they usually shoot from? Anything else that shows evidence of good/poor performance?
                    </Text>
                    <View style = {{paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
                        <CustomTextBox
                            multi={true}
                            id="TeleopComments"
                            placeholder="Type your comments here..."
                            width={975}
                            backgroundColor={"#DDD"}
                            borderRadius={10}
                            options={{
                                multiline: true,
                                numberOfLines: 1
                            }}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: "#FFF"
    },
    teleOpContainer: {
        alignItems: "center",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth
    }
});
