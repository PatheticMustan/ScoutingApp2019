import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import SegmentedControl from './Buttons/SegmentedControl.js';
import NumButton from './Buttons/NumButton.js';
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
});
