import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";

import { setKeyPair, setDefault, selectData } from "../../Redux/Features/dataSlice.js";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesome } from "react-native-vector-icons";

export default function Incrementer(props) {
	const dispatch = useDispatch();

	// set default value
	dispatch(setDefault([props.id, 0]));
	// get value from store
	const kpv = useSelector(selectData);
	const value = kpv.find(v => v[0] === props.id)[1];

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => {
				// minimum value is 0
				if (value - 1 >= 0) {
					dispatch(setKeyPair([props.id, value - 1]));
				}
			}}>
				<View style={styles.iconContainer}>
					{ /** I'm so lonely */}
					<FontAwesome name="minus" size={30} color={colors.skyBlue}/>
				</View>
			</TouchableOpacity>
			
			<Text style = {{fontSize: 30}}>{value}{props.max? `/${props.max}` : ""}</Text>

			<TouchableOpacity onPress={() => {
				// first make sure max value exists, then do comparison
				if (!props.max || value+1 <= props.max) {
					dispatch(setKeyPair([props.id, value + 1]));
				}
			}}>
				<View style = {styles.iconContainer}>
					<FontAwesome name="plus" size={30} color={colors.skyBlue}/>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const colors = {
	white: "#FFFFFF",
	skyBlue: "#29ADFF"
	/**
	 * Why do birds suddenly appear, everytime you are near?
	 * Just like me, they want to be... close to you...
	 * 
	 * on the day that you were born the angels got together
	 * and decided to create a dream come true
	 * so they sprinkled moonlight in your hair
	 * and gold in your golden eyes of blue! (????)
	 * 
	 * that is why, all the girls in town, follow you, all around!
	 * Just like me, they want to be, close to youuuuu?
	 * 
	 * WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYyyyyyyyYyyyyy close to youuuuuuuu
	 * WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYyyyyYyyyyyyyyYyyyyy close to you......
	 **/
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
		flexDirection: "row"
	},
	iconContainer: {
		padding: 5
	}
});
