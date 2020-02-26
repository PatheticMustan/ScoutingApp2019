import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import BoolButton from '../Buttons/BoolButton.js';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            sec: 0
        }

        this.time = "0:00";
    }

    timerClick = () => {
        if (this.state.start == false) {
            this.interval = setInterval(() => {
                this.setState({
                    start: true,
                    sec: this.state.sec + 1
                });

                const s = this.state.sec + 1;
                this.time = (`${(s-(s%60))/60}:${(s % 60)}`)
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState({
                start: false
            });
        }
    };

    onResetTimer = () => {
        this.setState ({
            sec: 0,
            start: false
        });
    }
    
    render() {
        return (
            <View>
                <View>
                    <Text>{this.time}</Text>
                </View>

                <BoolButton
                    id="TimerClicked"
                    bgc="lime"
                    width={160}
                    onPress={this.timerClick}
                >
                        {this.state.start? "Stop" : "Start"} Stopwatch
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
        borderColor: 'black',
        backgroundColor: 'white'
    },
})
