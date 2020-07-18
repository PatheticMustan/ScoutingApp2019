import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback
} from "react-native";

import { setValue } from "../../Redux/Features/dataSlice.js";
import { useDispatch } from "react-redux";

export default class BoolButton extends React.Component {
	constructor(props) {
		super(props);
		/** Set default */
		this.state = {
			val: global.data[props.id],
			cm: -1
		};
		global.data[props.id] = this.state.val;
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

	render() {
		const p = this.props;

		return (
			<TouchableWithoutFeedback onPress={() => {
				this.setState(
					{val: !this.state.val},
					() => {global.data[this.props.id] = this.state.val;}
				);
                
				this.props.press && this.props.press();
			}}>
				<View style = {{
					justifyContent: "center",
					borderRadius: 10,
					borderWidth: StyleSheet.hairlineWidth,
					margin: 10,
					width: (p.width? p.width : 100),
					height: 40,
					backgroundColor: (this.state.val? p.bgc : "white")
				}}>
					<Text style={{textAlign: "center"}}>{p.children}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}