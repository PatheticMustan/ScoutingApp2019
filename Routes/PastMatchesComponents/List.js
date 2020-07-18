import React from "react";
import {
	View,
	FlatList,
	StyleSheet,
	Text,
	AsyncStorage,
	TouchableOpacity
} from "react-native";

import Constants from "expo-constants";

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
					if (i >= this.state.len) {
						this.setState({
							data: [...this.state.data, [v, i]],
							len: this.state.len + 1
						});
					}
                    
				});
			})();
		});
	}
	componentWillUnmount() {clearInterval(this.interval);}

	render() {
		return (
			<FlatList
				data={this.state.data}
				renderItem={(data) => {
					return (
						<TouchableOpacity onPress={() => {
							global.data = data.item[0];
							global.currentMatchID = data.index;
							this.props.nav.navigate("Scout");
						}}>
							<View style={styles.item}>
								<Text style={styles.text}>{`${data.item[0]["MatchType"]} #${data.item[0]["MatchNumber"]} (Team ${data.item[0]["TeamNumber"]})`}</Text>
							</View>
						</TouchableOpacity>
					);
				}}
				ListEmptyComponent={() => {
					return (
						<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
							<Text style={{margin: 100,fontSize: 21}}>There are no items!</Text>
						</View>
					);
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
		borderColor: "#696969",
		borderWidth: 1,
		padding: 20
	},
	text: {
		fontSize: 20,
	},
});
