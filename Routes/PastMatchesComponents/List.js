import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';

const DATA = (async () => JSON.parse(await AsyncStorage.getItem("matches")))()

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default function List() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
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
