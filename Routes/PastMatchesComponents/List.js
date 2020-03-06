import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';

const DATA = (async () => {
    return JSON.parse(await AsyncStorage.getItem("matches")).map(e=>JSON.parse(e))
})()


function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default async function List() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={console.log(Object.values(await DATA).map(m=>m))}
                renderItem={({ item }) => <Item title={item.title} />}
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
