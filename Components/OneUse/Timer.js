import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import BoolButton from "../Buttons/BoolButton.js";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            sec: global.data[props.id],
            cm: -1
        }
    }
    componentDidMount() {
        this.matchUpdate = setInterval(() => {
            if (global.currentMatchID != this.state.cm) {
                this.setState({
                    sec: global.data[this.props.id],
                    cm: global.currentMatchID
                });
            }
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState(
            {start: false},
            () => {
                global.data[this.props.id] = this.state.sec;
            }
        );
    }

    timerClick = () => {
        if (this.state.start == false) {
            this.setState({start: true});
            
            this.interval = setInterval(() => {
                this.setState(
                    {sec: this.state.sec + 1},
                    () => {
                        global.data[this.props.id] = this.state.sec;
                        const s = this.state.sec;
                        this.time = (`${(s-(s%60))/60}:${s < 10?"0":""}${(s % 60)}`)
                    }
                );
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState(
                {start: false},
                () => global.data[this.props.id] = this.state.sec
            );
            
        }
    };

    /** Unused. */
    onResetTimer = () => {
        this.setState ({
            sec: 0,
            start: false
        });
    }
    
    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{flex: 1, alignSelf: "center", paddingBottom: 5}}>
                    <Text>{(`${(this.state.sec-(this.state.sec%60))/60}:${this.state.sec < 10?"0":""}${(this.state.sec % 60)}`)}</Text>
                </View>

                <BoolButton
                    id="TimerClicked"
                    bgc="lime"
                    width={160}
                    press={this.timerClick}
                >
                        {this.state.start ? "Stop" : "Start"} Stopwatch
                </BoolButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timerButton: {
        height: 40,
        width: 160,
        textAlign: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "white"
    },
})
