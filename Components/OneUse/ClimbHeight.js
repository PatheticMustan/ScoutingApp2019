import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image
} from "react-native";

export default class ClimbHeight extends React.Component {
	constructor(props) {
		super(props);
		/** Set default */
		this.state = {
			val: global.data[props.id],
			cm: -1
		};
		global.data[props.id] = this.state.val;

		this.data = [
			["Low",     require("../../Assets/EndLow.png")],
			["Leveled", require("../../Assets/EndLevel.png")],
			["High",    require("../../Assets/EndHigh.png")]
		];
	}
	componentDidMount() {
		this.matchUpdate = setInterval(() => {
			if (global.currentMatchID != this.state.cm) {
				this.setState({
					val: global.data[this.props.id],
					cm: global.currentMatchID
				});
			}
		}, 500);
	}
	componentWillUnmount() {clearInterval(this.interval);}

	render() {
		const p = this.props;

		return (
			<View style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "space-around"
			}}>
				<TouchableWithoutFeedback
					key={this.data[0][0]}
					onPress={() => {
						this.setState(
							{val: this.state.val==this.data[0][0]? "" : this.data[0][0]},
							() => global.data[p.id] = this.state.val
						);
					}}
				>
					<View style={[
						styles.container,
						{backgroundColor: (this.state.val === this.data[0][0]? p.bgc : "white")}
					]}>
						<Image
							source={this.data[0][1]}
							style={styles.image}
						/>
						<Text style={{textAlign: "center"}}>{this.data[0][0]}</Text>
					</View>
				</TouchableWithoutFeedback>



				<TouchableWithoutFeedback
					key={this.data[1][0]}
					onPress={() => {
						this.setState(
							{val: this.state.val==this.data[1][0]? "" : this.data[1][0]},
							() => global.data[p.id] = this.state.val
						);
					}}
				>
					<View style={[
						styles.container,
						{backgroundColor: (this.state.val === this.data[1][0]? p.bgc : "white")}
					]}>
						<Image
							source={this.data[1][1]}
							style={styles.image}
						/>
						<Text style={{textAlign: "center"}}>{this.data[1][0]}</Text>
					</View>
				</TouchableWithoutFeedback>



				<TouchableWithoutFeedback
					key={this.data[2][0]}
					onPress={() => {
						this.setState(
							{val: this.state.val==this.data[2][0]? "" : this.data[2][0]},
							() => global.data[p.id] = this.state.val
						);
					}}
				>
					<View style={[
						styles.container,
						{backgroundColor: (this.state.val === this.data[2][0]? p.bgc : "white")}
					]}>
						<Image
							source={this.data[2][1]}
							style={styles.image}
						/>
						<Text style={{textAlign: "center"}}>{this.data[2][0]}</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		flexDirection: "column",
		justifyContent: "center",
		margin: 10
	},
	image: {
		borderRadius: 10,
		height: 150,
		width: 280
	}
});