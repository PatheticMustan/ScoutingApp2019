import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class BoolButton extends React.Component {
    state = {i: 0}
    switchValue = (i) => {
        if (i == 0) {
            this.setState({i: 1})
        } else {
            this.setState({i: 0})
        }
    }
	render() {
        const p = this.props;

		return (
			<View style={styles.container}>
                <TouchableOpacity onPress = {() => this.state.switchValue}>
                    <View style = {styles.button}>
                        <Text>p.Text</Text>
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
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000000'
    }
});
