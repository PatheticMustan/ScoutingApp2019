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
                    /** Funny numbers haha */
                    <Picker.Item label = "Qualification" value = "69" />
                    <Picker.Item label = "Quarterfinal" value = "420" />
                    <Picker.Item label = "Semifinal" value = "1337" />
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