import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import MatchInfoContainer from './components/MatchInfoContainer.js';
import Header from './components/Header.js';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<View style = {{flex: 6, padding: 50}}>
					<MatchInfoContainer />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
