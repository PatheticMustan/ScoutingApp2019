import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

export default class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            min: 0,
            sec: 0
        }

        this.time = "";

        this.interval = null;
    }

    onPressTimer = () => {
        this.setState (
            {
                start: !this.state.start()
            },
            () => this.onStartTimer()
        );
    };

    onEndTimer = (min, sec) => {
        this.time = (`${min} : ${sec}`)
    };

    onStartTimer = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.sec != 59) {
                    this.setState({
                        sec: this.state.sec + 1
                    });
                } else {
                    this.setState({
                        sec: 0,
                        min: min + 1
                    });
                }
            }, 1000);
        }
    }
    render() {
        return (
            <View>
                <TouchableWithoutFeedback style = {styles.timerButton}>
                    <Text>Timer</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timerButton: {
        borderRadius: 10,
    },
})