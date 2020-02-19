import React from 'react';
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native';

export default function CustomTextBox(props) {
	const [value, onChangeText] = React.useState("Place comments here...");
	global.data[props.id] = {
		"val": value,
		"set": onChangeText
	};

	return (
		<View
			style={{
				backgroundColor: props.backgroundColor,
				borderBottomColor: '#000000',
				borderBottomWidth: 1}}
		>
			<TextInput
				multiline
				numberOfLines={4}
				editable
				maxLength={40}

				onChangeText={text => {global.data[props.id].set(text)}}
				value={global.data[props.id].val}
			/>
		</View>
	);
}