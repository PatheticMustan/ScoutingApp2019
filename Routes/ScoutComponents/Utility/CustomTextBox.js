import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';



export default class CustomTextBox extends React.Component {
    
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = this.props.default;
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 20)
    }
    componentWillUnmount() {clearInterval(this.interval)}
    
    render() {
        return (
            <TextInput
                {...this.props.options}

                editable

                style={{
                    width: this.props.width,
                    backgroundColor: (this.props.backgroundColor? this.props.backgroundColor : "#FFF"),
                    borderColor: "#AAA",
                    borderWidth: StyleSheet.hairlineWidth,
                    borderRadius: (this.props.borderRadius? this.props.borderRadius : this.props.height / 5)
                }}

                onChangeText={text => {global.data[this.props.id] = text}}
                value={global.data[this.props.id]}
            />
        );
    }
}