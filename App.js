import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import Header from './components/Header.js';
import MatchInfoContainer from './components/MatchInfoContainer.js';

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Header />
				<MatchInfoContainer />
				
			</View>
		);
	}
}