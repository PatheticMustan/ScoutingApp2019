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
        this.state = {
            val: props.default || ""
        }
        global.data[props.id] = this.state.val;
        this.BORDER_RADIUS = 10;
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
                            onPress={
                                () => this.setState(
                                    {val: p.forceOption? v : (global.data[p.id]!=v? v : "")},
                                    () => global.data[p.id] = this.state.val
                                )
                            }
                        >
                            <View style={{
                                justifyContent: "center",
                                borderWidth: StyleSheet.hairlineWidth,
                                margin: p.margin? p.margin : 0,
                                width: (p.width? p.width : 100),
                                height: 40,
                                backgroundColor: (this.state.val === v? p.bgc : "white"),
                                
                                /** The ternary operator pretends to be your friend, until you realize a few months later,
                                 * when you don't understand any of your code, that it was actually the spawn of Satan
                                 */
                                borderTopLeftRadius: p.segmentedButton?(i==0? this.BORDER_RADIUS : 0) : this.BORDER_RADIUS,
                                borderBottomLeftRadius: p.segmentedButton?(i==0? this.BORDER_RADIUS : 0) : this.BORDER_RADIUS,

                                borderTopRightRadius: p.segmentedButton?(i==p.data.length-1? this.BORDER_RADIUS : 0) : this.BORDER_RADIUS,
                                borderBottomRightRadius: p.segmentedButton?(i==p.data.length-1? this.BORDER_RADIUS : 0) : this.BORDER_RADIUS
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