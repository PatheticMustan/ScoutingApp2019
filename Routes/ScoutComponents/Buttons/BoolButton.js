import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class BoolButton extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        global.data[props.id] = false;
        this.state = {
            val: false
        }
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = props;

        return (
            <TouchableWithoutFeedback onPress={() => {
                global.data[p.id] = !global.data[p.id];
                props.press();
            }}>
                <View style = {{
                    justifyContent: "center",
                    borderRadius: 10,
                    borderWidth: StyleSheet.hairlineWidth,
                    margin: 10,
                    width: (p.width? p.width : 100),
                    height: 40,
                    backgroundColor: (global.data[p.id]? p.bgc : 'white')
                }}>
                    <Text style={{textAlign: "center"}}>{p.children}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}