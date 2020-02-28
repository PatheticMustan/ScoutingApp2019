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
            <View style={{
                width: this.props.width,
                height: this.props.height || 200
            }}>
                <TextInput
                    multiline
                    editable
                    placeholder={this.props.placeholder || ""}
                    style={{
                        flex: 1,
                        padding: 10,
                        backgroundColor: (this.props.backgroundColor? this.props.backgroundColor : "#FFF"),
                        borderColor: "#AAA",
                        borderWidth: StyleSheet.hairlineWidth,
                        borderRadius: (this.props.borderRadius? this.props.borderRadius : this.props.height / 5)
                    }}
                    {...this.props.options}

                    onChangeText={text => this.setState(
                        {text: text},
                        () => {global.data[this.props.id] = this.state.text}
                    )}
                />
            </View>
        );
    }
}