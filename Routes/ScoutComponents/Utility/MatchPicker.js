import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Picker
} from 'react-native';

import TabBarIcon from './TabBarIcon.js';

export default class MatchPicker extends React.Component {
    state = {matchType: ""}
    newMatchType = matchType => {
        this.setState({matchType : matchType})
    }
    
    render() {
        return (
            <View style = {styles.picker}>
                <Picker pickMatchType = {this.state.matchType} onValueChange = {this.newMatchType}>
                    <Picker.Item label = "Test" value = "1" />
                </Picker>
                <TabBarIcon color="#29adff" name="ellipsis-h"/>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    picker: {
        backgroundColor: 'blue'
    }
});