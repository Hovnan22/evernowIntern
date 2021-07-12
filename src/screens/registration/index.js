import React, { useState } from "react";
import {
	Text,
	Dimensions,
	StyleSheet,
} from "react-native";

import {
	AppWrapper,
} from "../../components/ui";


const windowWidth = Dimensions.get("window").width;
const RegistrationScreen = ({navigation}) => (
	<AppWrapper navigation={navigation}>
		<Text>registration</Text>
	</AppWrapper>
);


const styles = StyleSheet.create({
	restorePass: {
		zIndex: 10,
		color: "red",
		fontSize: 14,
		marginHorizontal: 30,
		alignItems: "center",
		paddingVertical: 20,

	},
	email: {
		zIndex: 10,
		marginHorizontal: 30,
		color: "#000",
		borderBottomWidth: 1,
		borderColor: "#EDF2FF",
	},
	info: {
		zIndex: 3,
		fontSize: 16,
		marginLeft: 30,
		marginVertical: 25,
	},
	inputBlock: {
		position: "absolute",
		width: windowWidth -  60,
		marginTop: 120,
		marginHorizontal: 30,
	},
	backe: {
		top: 55,
		left: 20,
	},
	inputBg: {
		position: "absolute",
		zIndex: 2,
		top: 0,
		width: "100%",
		height: 440,
	},
	buttons: {
		zIndex: 1,
		position: "absolute",
		bottom: 0,
	},
	gradientButton: {
		borderRadius: 10,
	},
	socialLogin: {
		top: 120,
		zIndex: 1,
	},
	socialIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 25,
	},
	policy: {
		alignItems: "center",
		justifyContent: "center",
		width: 300,
		marginTop: 30,
	},
	registration: {
		width: 300,
		borderRadius: 10,
		height: 60,
		backgroundColor: "rgba(0,0,0,0)",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	login: {
		backgroundColor: "rgba(0,0,0,0)",
		width: 300,
		height: 60,
		marginBottom: 10,
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
		borderRadius: 10,
		borderColor: "white",
		borderWidth: 2,
		marginTop: 20,
	},
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#f2f2f2",
	},
	logo: {
		flex: 1,
		alignItems: "center",
		top: 145,
	},
	buttonBg: {
		alignItems: "center",
		bottom: 30,
	},
	gradienBg: {
		position: "absolute",
		bottom: -15,
		right: 0,
		left: 0,
	},
});

export default RegistrationScreen;
