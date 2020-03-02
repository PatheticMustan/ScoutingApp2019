import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from "react-native";

export default class NumButton extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            val: 0
        }
        global.data[props.id] = this.state.val;

        this.increment = () => this.setState(
            {val: this.state.val + 1},
            () => {global.data[this.props.id] = this.state.val}
        );
        this.decrement = () => this.setState(
            {val: Math.max(0, this.state.val - 1)},
            () => {global.data[this.props.id] = this.state.val}
        );
    }

    render() {
        const p = this.props;

        return (
                <TouchableWithoutFeedback onPress={this.increment} onLongPress={this.decrement} >
                    <View style = {{
                        justifyContent: "center",
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        width: (p.width? p.width : 100),
                        height: (p.height? p.height : 40),
                        backgroundColor: "white",
                        justifyContent: "center",
                    }}>
                        <View style = {{flex: 1, justifyContent: "center"}}>
                            <Text style={{textAlign: "center"}}>{p.children} {`(${this.state.val})`}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
        );
    }
}