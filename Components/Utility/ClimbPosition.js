import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image
} from "react-native";

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        global.data[props.id] = "";
        /** Update */
        this.interval = setInterval(() => {this.setState({ flipFlop: !this.state.flipFlop })}, 50);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View style={{...p.options}}>
                {
                    p.data.map(v =>
                        <TouchableWithoutFeedback
                            key={v[0]}
                            onPress={() => global.data[p.id] = (global.data[p.id]==v[0]? "" : v[0])}
                        >
                            <View style={{
                                justifyContent: "center",
                                borderRadius: 10,
                                borderWidth: StyleSheet.hairlineWidth,
                                margin: this.props.margin || 10,
                                width: (p.width? p.width : 100),
                                height: 40,
                                backgroundColor: (global.data[p.id] === v[0]? p.bgc : "white")
                            }}>
                                <Image
                                    source={v[1]}
                                    style={{width: 300, height: 150, borderRadius: 10}}
                                />
                                <Text style={{textAlign: "center"}}>{v[0]}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </View>
        );
    }
}