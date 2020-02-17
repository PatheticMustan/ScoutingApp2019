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
                        <Text>{this.props.children}</Text>
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
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000000',
        width: (this.props.width? this.props.width : 100),
        height: (this.props.height? this.props.height : 40)
    }
});
