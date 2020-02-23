import React from 'react';
import {
    View
} from 'react-native';

import BoolButton from '../Buttons/BoolButton.js';

export default class Timer extends React.Component {
    /** Update */
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = this.props.default;

        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);
        this.selectMatch = (v, i) => global.data[this.props.id] = v;
    }
    componentWillUnmount() {clearInterval(this.interval)}
    
    render() {
        return (
            <View>
                <BoolButton id="timerOn">{this.props.children}</BoolButton>
            </View>
        )
    }
}