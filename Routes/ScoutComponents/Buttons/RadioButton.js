import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class RadioButton extends React.Component {
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = "";
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View style={{...p.options}}>
                {
                    p.data.map(v =>
                        <TouchableWithoutFeedback onPress={() => global.data[p.id] = (global.data[p.id]==v? "" : v)}>
                            <View style={{
                                textAlign: "center",
                                justifyContent: "center",
                                borderRadius: 10,
                                borderWidth: StyleSheet.hairlineWidth,
                                width: (p.width? p.width : 100),
                                height: 40,
                                backgroundColor: (global.data[p.id] === v? p.bgc : 'white')
                            }}>
                                <Text>{v}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </View>
        );
    }
}