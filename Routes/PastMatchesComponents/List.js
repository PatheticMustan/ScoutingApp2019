import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';


function Item({data}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{data["Team"]}</Text>
        </View>
    );
}

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        (async () => {
            global.matches = JSON.parse(await AsyncStorage.getItem("matches"));
            global.matches = global.matches.map(v => JSON.parse(v));
            global.matches.forEach((v, i) => {
                this.setState({
                    data: [...this.state.data, [v, i]]
                });
            });
        })();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={(data) => {
                        alert(JSON.stringify(data));
                        return (
                            <View style={styles.item}>
                                <Text style={styles.title}>{data.item[0]["Team"]}</Text>
                            </View>
                        )
                        
                    }}
                    keyExtractor={data => data[1].toString()} /** https://stackoverflow.com/a/49577737/12894940 */
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#F9C2FF',
        padding: 20,
        borderColor: "#696969",
        borderWidth: 1
    },
    title: {
        fontSize: 32,
    },
});
