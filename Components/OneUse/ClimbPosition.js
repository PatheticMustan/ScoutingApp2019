import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    ImageBackground
} from "react-native";

export default class ClimbPosition extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            flipFlop: global.data[props.id],
            cm: -1
        }
        this.data = ["Edge", "Middle Bar", "Center"];
        /** Update */
        this.interval = setInterval(() => {this.setState({ flipFlop: !this.state.flipFlop })}, 50);
    }
    componentDidMount() {
        this.matchUpdate = setInterval(() => {
            if (global.currentMatchID != this.state.cm) {
                this.setState({
                    flipFlop: global.data[this.props.id],
                    cm: global.currentMatchID
                });
            }
        }, 500);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View>
                <ImageBackground
                    source = {require("../../Assets/ClimbPosition.png")}
                    style = {{width: 600, height: 300}}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        top: 230
                    }}>
                        <View style = {{flex: 1.4}}>
                            <TouchableWithoutFeedback
                                key={this.data[0]}
                                onPress={() => global.data[p.id] = (global.data[p.id]==this.data[0]? "" : this.data[0])}
                                style={{
                                    flex: 1,
                                }}
                            >
                                <View style={{
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    borderWidth: StyleSheet.hairlineWidth,
                                    margin: this.props.margin || 10,
                                    width: (p.width? p.width : 100),
                                    height: 40,
                                    backgroundColor: (global.data[p.id] === this.data[0]? p.bgc : "white")
                                }}>
                                    <Text style={{textAlign: "center"}}>{this.data[0]}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        <View style = {{flex: 0.8}}>
                            <TouchableWithoutFeedback
                                key={this.data[1]}
                                onPress={() => global.data[p.id] = (global.data[p.id]==this.data[1]? "" : this.data[1])}
                                style={{marginLeft: 100}}
                            >
                                <View style={{
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    borderWidth: StyleSheet.hairlineWidth,
                                    margin: this.props.margin || 10,
                                    width: (p.width? p.width : 100),
                                    height: 40,
                                    backgroundColor: (global.data[p.id] === this.data[1]? p.bgc : "white")
                                }}>
                                    <Text style={{textAlign: "center"}}>{this.data[1]}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style = {{flex: 1.22}}>
                            <TouchableWithoutFeedback
                                key={this.data[2]}
                                onPress={() => global.data[p.id] = (global.data[p.id]==this.data[2]? "" : this.data[2])}
                            >
                                <View style={{
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    borderWidth: StyleSheet.hairlineWidth,
                                    margin: this.props.margin || 10,
                                    width: (p.width? p.width : 100),
                                    height: 40,
                                    backgroundColor: (global.data[p.id] === this.data[2]? p.bgc : "white")
                                }}>
                                    <Text style={{textAlign: "center"}}>{this.data[2]}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ImageBackground>
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