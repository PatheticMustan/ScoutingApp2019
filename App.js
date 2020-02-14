import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import Header from './components/Header.js';
import MatchInfoContainer from './components/MatchInfoContainer.js';
import Autonomous from './components/Autonomous.js';
import TeleOp from './components/TeleOp.js'

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Header />
				<MatchInfoContainer />
				<Autonomous />
				<TeleOp/> 
			</View>
		);
	}
}