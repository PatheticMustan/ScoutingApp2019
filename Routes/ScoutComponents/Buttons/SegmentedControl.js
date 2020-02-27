import React from 'react';
import {
    View
} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class SegmentedControl extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        global.data[props.id] = 0;
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}
    
    handleIndexChange = index => {
        global.data[props.id] = index;
    }

    render() {
        return (
            <View>
                <SegmentedControlTab
                    {...props.options}
                    tabStyle={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    }}
                    values={props.data}
                    selectedIndex={global.data[props.id]}
                    onTabPress={index => {
                        global.data[props.id] = index;
                    }}
                />
            </View>
        );
    }
}