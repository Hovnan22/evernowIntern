import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from "react-native";


const Button = ({ name, press,  type = "border" , borderColor,textColor}) => {

	const container = (
		<TouchableOpacity style={[styles.buttons, type === "border" ?  styles.border : (null), borderColor]} onPress={press}>
			<Text style={
				[type === "gradient" ? styles.gradientText :
					(type === "border" ? styles.borderText :
						(type === "link" ?  styles.linkText : "")),textColor]
			}
			>{name}</Text>
		</TouchableOpacity>
	);
	return	(
		<View>
			{
				type === "gradient" ? (
					<LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#9AD1FF", "#0075C8"]} style={styles.gradient}>
						{container}
					</LinearGradient>
				) : ( container )
			}
		</View>
	);
};

const styles = StyleSheet.create({
	linkText: {
		color: "#9A9CA8",
		opacity: 0.4,
	},
	gradient: {
		borderRadius: 10,
	},
	border: {
		borderRadius: 10,
		borderColor: "#18a0fb",
		borderWidth: 2,
	},
	buttons: {
		backgroundColor: "rgba(0,0,0,0)",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textStyles: {
		color: "black",
		fontSize: 14,
	},
	gradientText: {
		color: "#fff",
	},
	borderText: {
		color: "#18a0fb",
	},
});

export default Button;
