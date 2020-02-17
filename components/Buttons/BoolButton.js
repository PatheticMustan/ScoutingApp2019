import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback
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
                <TouchableWithoutFeedback onPress = {() => this.switchValue(this.state.i)}>
                    <View style = {[styles.button, {backgroundColor: (this.state.i? "#00FF00" : "#FFFFFF")}]}>
                        <Text>{this.props.children}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
