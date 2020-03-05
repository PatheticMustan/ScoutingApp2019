import React from "react";
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";



export default class CustomTextBox extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            text: ""
        }
        global.data[props.id] = this.state.text;
    }
    
    render() {
        return (
            <View style={{
                width: this.props.width,
                height: this.props.height || 40
            }}>
                <TextInput
                    multiline={this.props.multi}
                    numberOfLines={this.props.multi? this.props.lines : 1}
                    editable
                    placeholder={this.props.placeholder || ""}
                    style={{
                        flex: 1,
                        padding: 10,
                        backgroundColor: (this.props.backgroundColor? this.props.backgroundColor : "#FFFFFF"),
                        borderColor: "#AAA",
                        borderWidth: StyleSheet.hairlineWidth,
                        borderRadius: (this.props.borderRadius? this.props.borderRadius : this.props.height / 5)
                    }}
                    {...this.props.options}

                    onChangeText={text => this.setState(
                        {text: text
                                    .replace(/\n/g, " ")
                                    .replace(/,/g, " ")
                                    /** pretty sure there are many more instances. */
                        },
                        () => {global.data[this.props.id] = this.state.text}
                    )}
                />
            </View>
        );
    }
}