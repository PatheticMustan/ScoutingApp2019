import React from 'react';
import {
	View
} from 'react-native';

import Scout from './Routes/Scout.js';

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Scout/>
			</View>
		);
	}
}