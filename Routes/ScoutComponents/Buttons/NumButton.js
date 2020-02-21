import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class NumButton extends React.Component {
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = 0;
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);

        this.increment = () => global.data[this.props.id] += 1;
        this.decrement = () => global.data[this.props.id] = Math.max(0, global.data[this.props.id] - 1);
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
                        width: (p.width? p.width : 100),
                        height: 40
                    }}>
                        <Text>{p.children} {`(${global.data[p.id]})`}</Text>
                    </View>
                </TouchableWithoutFeedback>
        );
    }
}