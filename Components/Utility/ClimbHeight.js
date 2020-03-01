import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image
} from "react-native";

export default class ClimbHeight extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.id = "climbHeight"
        global.data["climbHeight"] = "Low";
        this.state = {flipFlop: false}
        this.data = [
            ["Low",     require("../../Assets/EndLow.png")],
            ["Leveled", require("../../Assets/EndLevel.png")],
            ["High",    require("../../Assets/EndHigh.png")]
        ];
        /** Update */
        this.interval = setInterval(() => {this.setState({ flipFlop: !this.state.flipFlop })}, 50);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <TouchableWithoutFeedback key={this.data[0][0]} onPress={() => global.data[this.id] = (global.data[this.id]==this.data[0][0]? "" : this.data[0][0])}>
                    <View style={{
                        justifyContent: "center",
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        margin: this.props.margin || 10,
                        backgroundColor: (global.data[this.id] === this.data[0][0]? p.bgc : "white"),
                        flexDirection: "column"
                    }}>
                        <Image
                            source={this.data[0][1]}
                            style={{width: 300, height: 150, borderRadius: 10}}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[0][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback key={this.data[1][0]} onPress={() => global.data[this.id] = (global.data[this.id]==this.data[1][0]? "" : this.data[1][0])}>
                    <View style={{
                        justifyContent: "center",
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        margin: this.props.margin || 10,
                        backgroundColor: (global.data[this.id] === this.data[1][0]? p.bgc : "white"),
                        flexDirection: "column"
                    }}>
                        <Image
                            source={this.data[1][1]}
                            style={{width: 300, height: 150, borderRadius: 10}}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[1][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback key={this.data[2][0]} onPress={() => global.data[this.id] = (global.data[this.id]==this.data[2][0]? "" : this.data[2][0])}>
                    <View style={{
                        justifyContent: "center",
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        margin: this.props.margin || 10,
                        backgroundColor: (global.data[this.id] === this.data[2][0]? p.bgc : "white"),
                        flexDirection: "column"
                    }}>
                        <Image
                            source={this.data[2][1]}
                            style={{width: 300, height: 150, borderRadius: 10}}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[2][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: "#FFF"
    }
});