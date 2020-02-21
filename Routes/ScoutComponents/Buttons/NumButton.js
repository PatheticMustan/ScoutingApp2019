import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class NumButton extends React.Component {
    /** Update */
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = 0;

        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);
        this.increment = () => {global.data[this.props.id] += 1}
        this.decrement = () => {global.data[this.props.id] = Math.max(0, global.data[this.props.id] - 1)}
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
                <TouchableWithoutFeedback onPress={this.increment} onLongPress={this.decrement}>
                    <View style = {{
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#000000',
                        width: (p.width? p.width : 100),
                        height: (p.height? p.height : 40),
                        backgroundColor: (global.data[p.id]? p.bgc : 'white')
                    }}>
                        <Text>{p.title} {`(${global.data[p.id]})`}</Text>
                    </View>
                </TouchableWithoutFeedback>
        );
    }
}