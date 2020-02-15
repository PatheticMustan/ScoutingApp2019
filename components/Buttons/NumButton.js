import React from 'react';
import {
	StyleSheet,
	Text,
    View
} from 'react-native';

import Incrementer from '../Utility/Incrementer.js';

export default class BoolButton extends React.Component {
	render() {
		return (
			<View style={styles.container}>
                    <View style = {styles.button}>
                        <Text>Test NumButton</Text>
                    </View>
                    <Incrementer/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#FFF',
    },
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000000'
    }
});
