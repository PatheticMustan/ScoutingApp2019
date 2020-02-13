import React from 'react';
import {
	View
} from 'react-native';

import Header from './components/Header.js';
import MatchInfoContainer from './components/MatchInfoContainer.js';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<MatchInfoContainer />
			</View>
		);
	}
}
