import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

import Incrementer from './Utility/Incrementer.js'
import TabBarIcon from './Utility/TabBarIcon.js'
import CustomTextBox from './Utility/CustomTextBox.js';
import MatchPicker from './Utility/MatchPicker.js';

export default class MatchInfoContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Match Info</Text>

                <View style={styles.matchInfoContainer}>
                    <View style={{flex: 1, paddingHorizontal: 30}}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.bold}>Team Number: </Text>
                            <View style={{flex: 1, paddingLeft: 5}}>
                                <CustomTextBox id="TeamNumber" default="" width={60} height={30}/>
                            </View>
                        </View>
                        
                        <View style={styles.inputContainer}>
                            <Text style={styles.bold}>Match Number: Qualification # </Text>
                            <Incrementer id="MatchNumber"/>
                        </View>

                        <View style={{flex: 1, marginTop: -45, flexDirection: "row"}}>
                            <MatchPicker id="MatchType" default="Qualification"/>
                            <Text style={{fontSize: 13, marginTop: 3}}> Change Match Type</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.bold}>Scouters: </Text>

                            <View style={{flex: 1, paddingLeft: 5}}>
                                <CustomTextBox id="Scouters" default="" width={300} height={30}/>
                            </View>
                        </View>
                    </View>

                    

                    <View style={styles.piecesContainer}>
                        <View style={styles.inputContainer2}>
                            <Text style={styles.bold}>Starting Game Pieces</Text>
                                <Incrementer id="StartingPieces"/>
                            <View>
                                <Image
                                    source={require('../../Assets/Ball.png')}
                                    style={{width: 150, height: 150}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#FFF'
    },
    matchInfoContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    bold: {
        fontSize: 17,
        fontWeight: "bold"
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 15
    },
    inputContainer2: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        paddingVertical: 15
    },
    piecesContainer: {
        flex: 1
    },
});