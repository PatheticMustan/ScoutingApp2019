import React from 'react';
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native';

export default class CustomTextBox extends React.Component {
	render() {
		const p = this.props;

		return (
			<View style={{flex: 1, paddingLeft: 20}}>
				<TextInput
					style={{
						width: p.width,
						height: p.height,
						backgroundColor: (p.backgroundColor? p.backgroundColor : "#FFF"),
						borderColor: "#AAA",
						borderWidth: StyleSheet.hairlineWidth,
						borderRadius: (p.borderRadius? p.borderRadius : this.props.height / 5)
					}}
					editable/>
			</View>
		);
	}
}