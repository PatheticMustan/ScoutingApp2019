import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import Header from './ScoutComponents/Header.js';
import MatchInfoContainer from './ScoutComponents/MatchInfoContainer.js';
import Autonomous from './ScoutComponents/Autonomous.js';
import TeleOp from './ScoutComponents/TeleOp.js';
import Endgame from './ScoutComponents/Endgame.js';
import Other from './ScoutComponents/Other.js';

import Data from './ScoutComponents/Data.js';

/** Test Components */

export default class Settings extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Data/>

                    <Header/>
                    
                    <MatchInfoContainer/>
                    <Autonomous/>
                    <TeleOp/>
                    <Endgame/>
                    <Other/>
                </View>
            </ScrollView>
        );
    }
}