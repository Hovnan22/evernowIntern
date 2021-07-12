import React from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	ImageBackground,
} from "react-native";

import {
	AppInput,
	AppButton,
} from ".";
import whiteBg from "../../../src/assets/images/whiteBg.png";

const windowWidth = Dimensions.get("window").width;
const AppLoginInputField = ({
	email,
	password,
	changeEmail,
	changePassword,
	restorePassword,
}) =>  (
	<View style={styles.inputBlock}>
		<ImageBackground   source={whiteBg} style={styles.inputBg} resizeMode="stretch" >
			<Text style={styles.info}>Login</Text>
			<AppInput
				styles={styles.email}
				placeholder="Email"
				placeholderColor="#005189"
				changeEvent={changeEmail}
				textValue={email}
			/>
			<AppInput
				styles={ [styles.email , styles.marginVertical] }
				placeholder="Password"
				placeholderColor="#005189"
				changeEvent={changePassword}
				textValue={password}
			/>
			<AppButton
				color="#9A9CA8"
				name={"Forgot password"}
				style={styles.restorePass}
				press={restorePassword}
			/>
		</ImageBackground>
	</View>
);

export default AppLoginInputField;
const styles = StyleSheet.create({
	email: {
		marginHorizontal: 30,
		color: "#000",
		borderBottomWidth: 1,
		borderColor: "#EDF2FF",
	},
	marginVertical: {
		marginVertical: 30,
	},
	inputBlock: {
		width: windowWidth -  60,
		marginTop: 100,
		marginHorizontal: 30,
	},
	restorePass: {
		color: "red",
		fontSize: 14,
		marginHorizontal: 30,
		alignItems: "center",
		paddingVertical: 20,

	},
	inputBg: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: 380,
	},
	info: {
		fontSize: 16,
		marginLeft: 30,
		marginVertical: 25,
	},

});
