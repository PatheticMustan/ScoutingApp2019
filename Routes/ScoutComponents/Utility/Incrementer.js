import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

import TabBarIcon from "./TabBarIcon.js";

export default class Incrementer extends React.Component {
    
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = 0;
        /** Update */
        this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 20);


        this.increment = () => {
            const max = this.props.max || 69420;
            global.data[this.props.id] = Math.min(max, global.data[this.props.id] + 1);
        }
        this.decrement = () => {
            global.data[this.props.id] = Math.max(0, global.data[this.props.id] - 1);
        }
    }
    componentWillUnmount() {clearInterval(this.interval)}

    

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.decrement}>
                    <View style={styles.iconContainer}>
                        <TabBarIcon size={30} name="minus" color="#29adff"></TabBarIcon>
                    </View>
                </TouchableOpacity>

                <Text style = {{fontSize: 30}}>{global.data[this.props.id]}</Text>

                <TouchableOpacity onPress={this.increment}>
                    <View style = {styles.iconContainer}>
                        <TabBarIcon size={30} name="plus" color="#29adff"></TabBarIcon>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        flexDirection: "row"
    },
    iconContainer: {
        padding: 5
    }
});
