import React from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {
	AppImage,
	AppButton,
	AppWrapper,
} from "../../components/ui";
import { AppSocialButtons } from "../../components/welcome";
import icon from "../../../src/assets/images/logo.png";
import whiteBg from "../../../src/assets/images/wilcomeWhiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";
import {
	LOGIN_SCREEN,
	REGISTRATION_SCREEN,
} from "../../navigation/screens";


const WelcomeScreen = () => {
	const navigation = useNavigation();
	const socialButtons = [
		{
			width: 32,
			height: 32,
			iconName: "google",
		},
		{
			width: 32,
			height: 32,
			iconName: "fb",
		},
		{
			width: 32,
			height: 32,
			iconName: "vk",
		},
	];
	const goToLogin = () => navigation.navigate( LOGIN_SCREEN );
	const goToRegistration = () => navigation.navigate(REGISTRATION_SCREEN);
	return (
		<AppWrapper showBackBtn={false}>
			<View style={styles.container}>
				<View style={styles.gradienBg}>
					<AppImage width={"100%"} height={430} url={gradientBg} />
				</View>
				<View style={styles.logo}>
					<AppImage width={200} height={200} url={icon} />
				</View>
				<View style={[styles.buttonBg,styles.buttonBlock]}>
					<AppSocialButtons
						socialLoginStyles={styles.socialLogin}
						socialIconsStyles={styles.socialIcons}
						socialButtons={socialButtons}
					/>
					<AppImage width={320} height={320} url={whiteBg} />
					<View style={styles.buttons}>
						<AppButton
							press={goToLogin}
							name="Login"
							type="gradient"
						/>
						<View style={styles.registerBtn}>
							<AppButton
								name={"Registration"}
								press={goToRegistration}
								type="border"
							/>
						</View>
					</View>
				</View>
			</View>
		</AppWrapper>
	);
};

const styles = StyleSheet.create({

	buttons: {
		zIndex: 1,
		position: "absolute",
		bottom: 0,
		width: 260,
	},

	socialLogin: {
		top: 120,
		zIndex: 1,
	},
	socialIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 25,
		marginTop: 25,
	},
	registerBtn: {
		marginVertical: 20,
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
		bottom: 40,
	},
	gradienBg: {
		position: "absolute",
		bottom: -15,
		right: 0,
		left: 0,
	},
});

export default WelcomeScreen;
