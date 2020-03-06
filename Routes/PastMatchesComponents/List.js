import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';

import Constants from 'expo-constants';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [], /** Contains list of displayed past matches. */
            len: 0
        };

        
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            (async () => {
                global.matches = JSON.parse(await AsyncStorage.getItem("matches"));
                global.matches = global.matches.map(v => JSON.parse(v));
                global.matches.forEach((v, i) => {
                    this.setState({
                        data: [...this.state.data, [v, i]]
                    });
                });
            })();
        });
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={(data) => {
                    return (
                        <View style={styles.item}>
                            <Text style={styles.title}>{data.item[0]["Team"]}</Text>
                        </View>
                    )
                }}
                ListEmptyComponent={() => {
                    return (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Text
                                style={{
                                    margin: 100,
                                    fontSize: 21 /** 9 + 10... */
                                }}
                            >There are no items!</Text>
                        </View>
                    )
                }}
                keyExtractor={data => data[1].toString()} /** https://stackoverflow.com/a/49577737/12894940 */
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
