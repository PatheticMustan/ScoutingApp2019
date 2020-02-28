import React from "react";
import {
    View,
    Picker
} from "react-native";

export default class MatchPicker extends React.Component {
    constructor (props) {
        super(props);

        /** Set default */
        global.data[this.props.id] = this.props.default;
        this.state = {
            val: this.props.default
        }

        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20);

        this.selectMatch = (v) => {
            this.setState({val: v})
            global.data[this.props.id] = v;
        }
    }

    /** Update */
    componentDidMount() {
        
    }
    componentWillUnmount() {clearInterval(this.interval)}
    
    render() {
        return (
            <View>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.val}
                    style={{height: 20, width: 150}}
                    onValueChange={this.selectMatch}
                >
                    <Picker.Item label="Qualification" value="Qualification" />
                    <Picker.Item label="Quarterfinal" value="Quarterfinal" />
                    <Picker.Item label="Semifinal" value="Semifinal" />
                </Picker>
            </View>
        )
    }
}