import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import BoolButton from './Buttons/BoolButton.js';
import NumButton from './Buttons/NumButton.js';
import RadioButton from './Buttons/RadioButton.js';
import CustomTextBox from './Utility/CustomTextBox.js';

export default class Autonomous extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Autonomous</Text>
                <View style={styles.autonomousContainer}>
                    <Image
                        source={require('../../Assets/FRC-2020-Field-Color-Top-Cropped-More.png')}
                        style={{height: 700, width: 1300, marginTop: 20, borderRadius: 10}}
                    />
                    
                    <BoolButton id="CrossesInitiationLine" bgc="lime" width={160}>Crosses Initation Line</BoolButton>
                    <RadioButton id="LinePosition" data={["Left", "Middle", "Right"]} bgc={"orange"}/>
                    
                    <NumButton id="AutoLow">Low</NumButton>
                    <NumButton id="AutoOuter">Outer</NumButton>
                    <NumButton id="AutoInner">Inner</NumButton>
                    <NumButton id="AutoMissed">Missed</NumButton>

                    <NumButton id="BallsPickedUp" width={160}>Balls Picked Up</NumButton>

                    <Text style={{textAlign: "center", fontSize: 20, fontWeight: 'bold'}}>Comments</Text>
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
        backgroundColor: '#FFF'
    },
    autonomousContainer: {
        alignItems: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    }
});
