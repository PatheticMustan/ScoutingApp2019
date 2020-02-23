import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import SegmentedControl from './Buttons/SegmentedControl.js';
import NumButton from './Buttons/NumButton.js';
import BoolButton from './Buttons/BoolButton.js'
import Timer from './Utility/Timer.js';

export default class Endgame extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Endgame</Text>
                <View style = {styles.endgameContainer}>
                    <NumButton id="BallsScored" width={120}>Balls Scored</NumButton>

                    <View style={{margin: 20}}>
                        <SegmentedControl
                            id="Team"
                            data={["Park", "Climb", "None"]}
                        />
                    </View>

                    <Timer id="Timer">Test</Timer>
                    <View style={styles.climbHeight}>
                        <Image
                            source={require('../../Assets/End Low.png')}
                            style={{width: 100, height: 50}}
                        />
                        <Image
                            source={require('../../Assets/End Level.png')}
                            style={{width: 100, height: 50}}
                        />
                        <Image
                            source={require('../../Assets/End High.png')}
                            style={{width: 100, height: 50}}
                        />
                        <View style = {styles.climbHeightButtons}>
                            <BoolButton id="Low" bgc="yellow" width={100}>Low</BoolButton>
                            <BoolButton id="Balanced" bgc="yellow" width={100}>Balanced</BoolButton>
                            <BoolButton id="High" bgc="yellow" width={100}>High</BoolButton>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#FFF'
    },
    endgameContainer: {
        alignItems: 'center',
        borderColor: "black",
        padding: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    climbHeight: {
        flex: 1,
        flexDirection: row
    },
    climbHeightButtons: {
        flex: 1,
        flexDirection: row
    }
});
