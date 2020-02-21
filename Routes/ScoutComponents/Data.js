import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Data extends React.Component {
    constructor() {
        super();
        /* This is all the data. */
        global.data = {}
    }

    /** Update data every second. */
    componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 100)}
    componentWillUnmount() {clearInterval(this.interval);}

    render() {
        return (
            <View>
                <Text>{Object.entries(global.data).map(e=>`${e[0]}: ${JSON.stringify(e[1])}`).join("\n")}</Text>
            </View>
        );
    }
}