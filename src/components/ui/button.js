import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

const Button = ({ name, press,  type = "border" }) => {

	const container = (
		<TouchableOpacity style={[ styles.buttons, 
			type === "primary" ?  styles.border : 
				(type === "success" ?  styles.successBtn : "") 
		]} onPress={press}>
			<Text style={
				[type === "gradient" ? styles.gradientText :
					(type === "primary" ? styles.borderText :
						(type === "link" ?  styles.linkText : 
							(type === "link2" ?  styles.linkText2 : 
								(type === "success" ?  styles.success : ""))
						))]
			}
			>
				{name}
			</Text>
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
	success: {
		color: "#fff",
	},
	linkText2: {
		color: "#fff",
		textAlign: "center",
		alignItems: "center",
	},
	gradient: {
		borderRadius: 10,
	},
	border: {
		borderRadius: 10,
		borderColor: "#18a0fb",
		borderWidth: 2,
	},
	successBtn: {
		borderRadius: 10,
		borderColor: "#fff",
		borderWidth: 2,
	},
	buttons: {
		backgroundColor: "rgba(0,0,0,0)",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		textAlign: "center",
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
