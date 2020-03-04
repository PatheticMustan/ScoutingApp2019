import React from "react";
import {
    View,
    SegmentedControlIOS
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class SegmentedControl extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            val: this.props.default || 0
        }
        global.data[props.id] = this.state.val;
    }

    render() {
        return (
                <SegmentedControlTab
                    {...this.props.options}
                    tabStyle={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    }}
                    values={this.props.data}
                    selectedIndex={global.data[this.props.id]}
                    onTabPress={index => {
                        this.setState(
                            {val: index},
                            () => global.data[this.props.id] = this.state.val
                        )
                    }}
                />
        );
    }
}