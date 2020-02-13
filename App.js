import React from 'react';
import {
	StyleSheet,
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

const styles = StyleSheet.create({
	container: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#000"
	}
});
