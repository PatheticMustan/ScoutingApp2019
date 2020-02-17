import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import Header from './components/Header.js';
import MatchInfoContainer from './components/MatchInfoContainer.js';
import Autonomous from './components/Autonomous.js';
import TeleOp from './components/TeleOp.js';
import BoolButton from './components/Buttons/BoolButton.js';
import NumButton from './components/Buttons/NumButton';

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Header/>
				<MatchInfoContainer/>
				<Autonomous/>
				<TeleOp/>
				<BoolButton>Bool Button</BoolButton>
				<NumButton/>
			</View>
		);
	}
}