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

export default class Autonomous extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 35, fontWeight: "bold"}}>Autonomous</Text>
                <View style={styles.autonomousContainer}>
                    <ImageBackground
                        source={require('../../Assets/2020 Field.png')}
                        style={styles.imageBackground}
                        imageStyle={{ borderRadius: 10}}
                    >
                        <View style = {{flex: 4, justifyContent: "center"}}></View>
                        <View style = {{flex: 1, justifyContent: "center"}}>
                            <View style = {{flex: 2.5}}/>
                            <View style = {{flex: 1, alignItems: "center"}}>
                                <NumButton id="BallsPickedUp" width={160}>Balls Picked Up</NumButton>
                            </View>
                        </View>

                        <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                            <View style = {{flex: 0.25, justifyContent: "space-between", alignSelf: "center"}}>
                                <BoolButton id="CrossesInitiationLine" bgc="lime" width={160}>Crosses Initation Line</BoolButton>
                            </View>
                            <RadioButton id="LinePosition" data={["Left", "Middle", "Right"]} bgc={"orange"} options = {{flex: 1, justifyContent: "space-between"}}/>
                        </View>

                        <View style={{flex: 1, justifyContent: "center"}}>
                            <NumButton id="AutoLow">Low</NumButton>
                            <NumButton id="AutoOuter">Outer</NumButton>
                            <NumButton id="AutoInner">Inner</NumButton>
                            <NumButton id="AutoMissed">Missed</NumButton>
                        </View>
                    </ImageBackground>

                    <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Comments</Text>
                    <Text style={{textAlign: "center", fontSize: 14, marginHorizontal: 20, marginTop: 10}}>
                        Add any comments that you feel are useful. Does the robot get any penalties? Where do they shoot from?
                        Anything else that shows evidence of good/poor performance?
                    </Text>
                    <View style={{padding: 20}}>
                        <CustomTextBox
                            id="AutonomousComments"
                            default=""
                            width={1300}
                            height={200}
                            backgroundColor={"#DDD"}
                            borderRadius={10}
                            options={{
                                multiline: true,
                                numberOfLines: 10
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
    autonomousContainer: {
        alignItems: "center",
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    imageBackground: {
        height: 700,
        width: 1300,
        marginTop: 20,
        flexDirection: "row"
    }
});
