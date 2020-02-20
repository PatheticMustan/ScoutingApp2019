import React from 'react';
import {
    View,
    Button
} from 'react-native';

import Header from './ScoutComponents/Header.js';
import MatchInfoContainer from './ScoutComponents/MatchInfoContainer.js';
import Autonomous from './ScoutComponents/Autonomous.js';
import TeleOp from './ScoutComponents/TeleOp.js';
import Endgame from './ScoutComponents/Endgame.js';
import Other from './ScoutComponents/Other.js';

/** Test Components */
import Data from './ScoutComponents/Data.js';
import MatchPicker from './ScoutComponents/Utility/MatchPicker.js'

export default class Scout extends React.Component {
    render() {
        return (
            <View>
                <Data/>
                <MatchPicker/>

                <Header/>
                <MatchInfoContainer/>
                <Autonomous/>
                <TeleOp/>
                <Endgame/>
                <Other/>
            </View>
        );
    }
}