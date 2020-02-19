import React from 'react';
import {
	View
} from 'react-native';

import Header from './ScoutComponents/Header.js';
import MatchInfoContainer from './ScoutComponents/MatchInfoContainer.js';
import Autonomous from './ScoutComponents/Autonomous.js';
import TeleOp from './ScoutComponents/TeleOp.js';
import Endgame from './ScoutComponents/Endgame.js';
import Other from './ScoutComponents/Other.js';

import Data from './ScoutComponents/Data.js';

export default class Scout extends React.Component {
	render() {
		return (
			<View>
                <Data/>

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