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
            text: global.data[props.id],
            cm: -1
        }
        global.data[props.id] = this.state.text;
    }
    componentDidMount() {
        this.matchUpdate = setInterval(() => {
            if (global.currentMatchID != this.state.cm) {
                this.setState({
                    text: global.data[this.props.id],
                    cm: global.currentMatchID
                });
            }
        }, 500);
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
                    value={this.state.text}
                    style={{
                        flex: 1,
                        padding: 10,
                        backgroundColor: (this.props.backgroundColor? this.props.backgroundColor : "#FFFFFF"),
                        borderColor: "#666",
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