import React from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import BoolButton from './Buttons/BoolButton.js';

export default class Other extends React.Component {
    state = {i: 0}
    switchValue = (i) => {
        if (i == 0) {
            this.setState({i: i + 1})
        } else {
            this.setState({i: i - 1})
        }
    }
	render() {
        const p = this.state.i;

		return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Other</Text>
                <View style = {styles.otherContainer}>
                    <BoolButton>Yellow Card</BoolButton>
                    <TouchableWithoutFeedback onPress = {() => this.switchValue(this.state.i)}>
                        <View style = {{
                            textAlign: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: '#000000',
                            width: (p.width? p.width : 100),
                            height: (p.height? p.height : 40),
                            backgroundColor: (this.state.i? 'red' : 'white')
                        }}>
                        <Text>Red Card</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </View>
		);
	}
}

const styles=StyleSheet.create({
	container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
		backgroundColor: '#FFF'
    },
    otherContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        paddingVertical: 20,
        paddingBottom: 20
    }
});
