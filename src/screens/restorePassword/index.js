import React, { useState } from "react";
import {
	Text,
	StyleSheet,
	Dimensions,
} from "react-native";

import {
	AppWrapper,
} from "../../components/ui";


const windowWidth = Dimensions.get("window").width;

const AppRestorePassword = ({navigation}) => (
	<AppWrapper navigation={navigation}>
		<Text>forgot password</Text>
	</AppWrapper>
);

const styles = StyleSheet.create({
	newPass:  {
		zIndex: 10,
		marginHorizontal: 30,
		color: "#000",
		borderBottomWidth: 1,
		borderColor: "#EDF2FF",
	},
	inputBlock: {
		position: "absolute",
		width: windowWidth -  60,
		marginTop: 190,
		marginHorizontal: 30,
	},
	info: {
		zIndex: 2,
		marginVertical: 20,
		paddingLeft: 30,
	},
	gradienBg: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		alignItems: "center",
	},
	buttons: {
		zIndex: 2,
		position: "absolute",
		bottom: 0,
		textAlign: "center",
	},
	login: {
		backgroundColor: "rgba(0,0,0,0)",
		width: 300,
		height: 60,
		marginBottom: 40,
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
	inputBg: {
		position: "absolute",
		zIndex: 2,
		top: 0,
		bottom: 0,
		width: "100%",
		height: 250,
	},
	backe: {
		top: 55,
		left: 20,
	},
});

export default AppRestorePassword;
