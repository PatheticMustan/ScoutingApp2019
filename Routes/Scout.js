import React from "react";
import {
    View,
    ScrollView,
    Button
} from "react-native";

import Header from "./ScoutComponents/Header.js";
import MatchInfoContainer from "./ScoutComponents/MatchInfoContainer.js";
import Autonomous from "./ScoutComponents/Autonomous.js";
import TeleOp from "./ScoutComponents/TeleOp.js";
import Endgame from "./ScoutComponents/EndGame.js";
import Other from "./ScoutComponents/Other.js";

import Data from "./ScoutComponents/Data.js";

/** Test Components */

export default class Scout extends React.Component {
    constructor(props) {
        super(props);

        global.condition = true
    }
    componentDidMount() {this.interval = setInterval(() => {
        if (global.condition == false) {
            this.setState({ time: Date.now() })
        }
    }, 1000)}
    componentWillUnmount() {clearInterval(this.interval)}
    
    render() {
        alert(JSON.stringify(this.props.navigation.data + "1"));
        if (this.props.data) {
            global.data = this.props.data;
            
        }

        if (global.condition==true) {
            return (
                <ScrollView>

                    <Button onPress={() => {
                        alert(JSON.stringify(this.props.nav + "1"));
                    }} title="Test" />

                    <View>
                        <Data data={this.props.data}/>
              
                        <Header onReset={() => this.setState({condition: false})}/>
                        
                        <MatchInfoContainer/>
                        <Autonomous/>
                        <TeleOp/>
                        <Endgame/>
                        <Other/>
                    </View>
                </ScrollView>
            );
        } else {
            this.setState({condition: true});
            return <View />;
        }
    }
}