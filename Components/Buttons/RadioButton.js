import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from "react-native";

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        global.data[props.id] = this.props.default || "";
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View style={{...p.options}}>
                {
                    p.data.map((v, i) =>
                        <TouchableWithoutFeedback
                            key={v}
                            onPress={() => global.data[p.id] = this.props.forceOption? v : (global.data[p.id]!=v? v : "")}
                        >
                            <View style={{
                                justifyContent: "center",
                                borderWidth: StyleSheet.hairlineWidth,
                                margin: this.props.margin? this.props.margin : 0,
                                width: (p.width? p.width : 100),
                                height: 40,
                                backgroundColor: (global.data[p.id] === v? p.bgc : "white"),
                                
                                /** The ternary operator pretends to be your friend, until you realize a few months later,
                                 * when you don't understand any of your code, that it was actually the spawn of Satan
                                 */
                                borderTopLeftRadius: this.props.segmentedButton?(i==0? 10 : 0) : 10,
                                borderBottomLeftRadius: this.props.segmentedButton?(i==0? 10 : 0) : 10,

                                borderTopRightRadius: this.props.segmentedButton?(i==p.data.length-1? 10 : 0) : 10,
                                borderBottomRightRadius: this.props.segmentedButton?(i==p.data.length-1? 10 : 0) : 10
                            }}>
                                <Text style={{textAlign: "center"}}>{v}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </View>
        );
    }
}