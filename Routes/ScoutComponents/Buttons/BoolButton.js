import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class BoolButton extends React.Component {
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = false;
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <TouchableWithoutFeedback onPress={() => global.data[p.id] = !global.data[p.id]}>
                <View style = {{
                    textAlign: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    borderWidth: StyleSheet.hairlineWidth,
                    width: (p.width? p.width : 100),
                    height: 40,
                    backgroundColor: (global.data[p.id]? p.bgc : 'white')
                }}>
                    <Text>{p.children}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}