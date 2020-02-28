import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from "react-native";

import BoolButton from "./Buttons/BoolButton.js";
import NumButton from "./Buttons/NumButton.js";
import RadioButton from "./Buttons/RadioButton.js";
import CustomTextBox from "./Utility/CustomTextBox.js";

export default class TeleOp extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Tele-Op</Text>
                <View style = {styles.teleOpContainer}>
                    <ImageBackground
                        source = {require("../../Assets/2020Field.png")}
                        style = {{height: 300, width: 700, marginTop: 20, borderRadius: 10}}
                    />
                    
                    <BoolButton id="PlaysDefense" bgc="lime">Plays Defense</BoolButton>
                    <NumButton id="BallsPickedUpFromLoadingStation" width={280}>Balls Picked Up from Loading Station</NumButton>

                    <BoolButton id="Rotation" bgc="lime">Rotation</BoolButton>
                    <BoolButton id="Color" bgc="lime">Color</BoolButton>

                    <RadioButton id="ShootFrom" data={["Trench Zone", "Target Zone", "Other"]} bgc={"orange"}/>

                    <NumButton id="BallsPickedUpFromFloor" width={200}>Balls Picked Up from Floor</NumButton>

                    <BoolButton id="FitsUnderTrench" bgc="lime">Fits Under Trench</BoolButton>

                    <NumButton id="TeleLow">Low</NumButton>
                    <NumButton id="TeleOuter">Outer</NumButton>
                    <NumButton id="TeleInner">Inner</NumButton>
                    <NumButton id="TeleMissed">Missed</NumButton>


                    <Text style = {{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Comments</Text>
                    <Text style = {{textAlign: "center", fontSize: 14, marginLeft: 20, marginRight: 20, marginTop: 10}}>
                        Add any comments that you feel are useful. Does the robot get any penalties? Does the robot cycle
                        efficiently? Do they struggle with picking up balls or shooting? Do they play defense, and if so,
                        how? Where do they usually shoot from? Anything else that shows evidence of good/poor performance?
                    </Text>
                    <View style = {{paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
                        <CustomTextBox
                            id="TeleopComments"
                            default=""
                            width={690}
                            height={100}
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
