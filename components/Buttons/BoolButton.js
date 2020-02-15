import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class BoolButton extends React.Component {
    state = {i: 0}
    switchValue = (i) => {
        if (i == 0) {
            this.setState({i: i + 1})
        } else {
            this.setState({i: i - 1})
        }
    }
	render() {
		return (
			<View style={styles.container}>
                <TouchableOpacity onPress = {() => this.switchValue(this.state.i)}>
                    <View style = {styles.button}>
                        <Text>Test BoolButton</Text>
                    </View>
                    <View>
                        <Text>{this.state.i}</Text>
                    </View>
                </TouchableOpacity>
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
