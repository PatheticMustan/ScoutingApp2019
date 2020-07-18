import React from "react";
import {
	View,
	ImageBackground,
	StyleSheet
} from "react-native";



export default class Arena extends React.Component {
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 100);
	}
	componentWillUnmount() {clearInterval(this.interval);}

	render() {
		if(global.data["Team"] == "Blue Alliance") {
			return (
				<View>
					<ImageBackground
						source={require("../../Assets/2020Field.png")}
						style={styles.imageBackgroundBlue}
						imageStyle={{
							borderRadius: 10
						}}
					>
						{this.props.children}
					</ImageBackground>
				</View>
			);
		} else {
			return (
				<View>
					<ImageBackground
						source={require("../../Assets/2020Field.png")}
						style={styles.imageBackgroundRed}
						imageStyle={{
							borderRadius: 10
						}}
					>
						{this.props.children}
					</ImageBackground>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	imageBackgroundBlue: {
		flexDirection: "row",
		height: 453,
		marginTop: 20,
		width: 900
	},
	imageBackgroundRed: {
		flexDirection: "row-reverse",
		height: 453,
		marginTop: 20,
		width: 900
	}
}); 
