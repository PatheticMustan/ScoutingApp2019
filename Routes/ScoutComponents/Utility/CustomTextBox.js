import React from "react";
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";



export default class CustomTextBox extends React.Component {
    componentDidMount() {
        /** Set default */
        this.state = {
            text: ""
        }
        global.data[this.props.id] = this.state.text;
    }
    
    render() {
        return (
            <TextInput
                {...this.props.options}

                editable
                placeholder={this.props.placeholder || ""}
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    backgroundColor: (this.props.backgroundColor? this.props.backgroundColor : "#FFF"),
                    borderColor: "#AAA",
                    borderWidth: StyleSheet.hairlineWidth,
                    borderRadius: (this.props.borderRadius? this.props.borderRadius : this.props.height / 5)
                }}

                onChangeText={text => this.setState(
                    {text: text},
                    () => {global.data[this.props.id] = this.state.text}
                )}
            />
        );
    }
}