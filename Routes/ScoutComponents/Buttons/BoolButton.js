import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class BoolButton extends React.Component {
    state = {
        i: 0
    }

	render() {
        const p = this.props;
        const styles = StyleSheet.create({
            button: {
                textAlign: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#000000',
                width: (p.width? p.width : 100),
                height: (p.height? p.height : 40)
            }
        });


		return (
			<View style={styles.container}>
                <TouchableWithoutFeedback onPress = {() => this.setState({i: !this.state.i})}>
                    <View style = {{
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#000000',
                        width: (p.width? p.width : 100),
                        height: (p.height? p.height : 40),
                        backgroundColor: (this.state.i? p.bgc : 'white')
                    }}>
                        <Text>{this.props.children}</Text>
                    </View>
                </TouchableWithoutFeedback>
			</View>
		);
	}
}