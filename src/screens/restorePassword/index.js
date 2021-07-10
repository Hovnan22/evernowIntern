import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";

import {
	AppInput,
	AppImage,
	AppButton,
} from "../../components/ui";
import whiteBg from "../../../src/assets/images/whiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const windowWidth = Dimensions.get("window").width;

const AppRestorePassword = ({navigation}) => {
	const [newPassword, setNewPassword] = useState("");
	return (
		<View style={styles.container}>
			<View style={styles.backe}>
				<TouchableOpacity
					onPress={() => {navigation.goBack();}}
				>
					<Text>back</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.inputBlock}>
				<AppImage   url={whiteBg} style={styles.inputBg} />
				<Text style={styles.info}>Restore password</Text>
				<AppInput
					styles={styles.newPass}
					placeholder="Email"
					placeholderColor="#005189"
					changeEvent={setNewPassword}
					textValue={newPassword}
				/>
			</View>
			<View style={styles.gradienBg}>
				<AppImage width={"100%"} height={430} url={gradientBg} />
				<View style={styles.buttons}>
					<AppButton
						color="white"
						name={"Send"}
						style={styles.login}
						press={() => { console.log(111); }}
					/>
				</View>
			</View>
		</View>
	);
};

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
		marginTop: 160,
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
		top: 30,
		left: 20,
	},
});

export default AppRestorePassword;
