import React, { useCallback, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Dimensions,
} from "react-native";

import {
	AppButton,
} from "../ui";
import gradientBg from "../../../src/assets/images/welcomeBg.png";


const width = Dimensions.get("window").width;

const AppformSettingsButton = ({
	changeEmail,
}) =>  {
	const [emailInfo,setEmailInfo ] = useState(false);
	const saveHandler = useCallback(
		() => {
			changeEmail && setEmailInfo(true);
		}, []
	);
	return (
		<ImageBackground   source={gradientBg} style={styles.inputBg} resizeMode="stretch" >
			<View style={styles.buttons}>
				{ emailInfo && <Text style={styles.emailInfo}>A confirmation email will be sent to a new mail</Text>}
				<AppButton
					textStyle={styles.textStyle}
					name={"Save"}
					style={styles.save}
					press={saveHandler}
				/>
			</View>
		</ImageBackground>
	);};

const styles = StyleSheet.create({
	emailInfo: {
		fontSize: 17,
		color: "#fff",
		paddingHorizontal: 30,
		textAlign: "center",
		marginBottom: 40,
	},
	save: {
		borderColor: "#fff",
		borderWidth: 2,
		width: width - 60,
	},
	textStyle: {
		color: "#fff",
	},
	buttons: {
		zIndex: 1,
		position: "absolute",
		flex: 1,
		alignItems: "center",
		width: "100%",
		bottom: 30,
	},

	inputBg: {
		position: "absolute",
		bottom: 0,
		zIndex: 1,
		width: "100%",
		height: 430,
	},
	buttonBg: {
		flex: 1,
		bottom: 30,
		zIndex: 2,
	},

});

export default AppformSettingsButton;
