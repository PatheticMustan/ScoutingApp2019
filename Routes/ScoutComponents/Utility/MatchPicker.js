import React from 'react';
import {
    View,
    Picker
} from 'react-native';

export default class MatchPicker extends React.Component {
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
                <Picker onValueChange={this.selectMatch}>
                    <Picker.Item label="Qualification" value="Qualification" />
                    <Picker.Item label="Quarterfinal" value="Quarterfinal" />
                    <Picker.Item label="Semifinal" value="Semifinal" />
                </Picker>
            </View>
        )
    }
}