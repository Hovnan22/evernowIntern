import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";
import {
	AppImage,
	AppButton,
	AppWrapper,
	AppLinerButton,
	AppSocialButtons,
} from "../../components/ui";
import icon from "../../../src/assets/images/logo.png";
import whiteBg from "../../../src/assets/images/wilcomeWhiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";
import {
	LOGIN_SCREEN,
	REGISTRATION_SCREEN,
} from "../../navigation/screens";


const WelcomeScreen = ({navigation}) => {
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
	const goToLogin = () => {
		navigation.navigate( LOGIN_SCREEN );
	};
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
						<AppLinerButton
							gradientButton={styles.gradientButton}
							colors={["#9AD1FF", "#0075C8"]}
							styles={styles.login}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							press={goToLogin}
							textColor="white"
							name="Login"
						/>
						<AppButton
							name={"Registration"}
							color={"#18a0fb"}
							style={styles.registration}
							press={() => { navigation.navigate(REGISTRATION_SCREEN); }}
						/>
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
		marginTop: 25,
	},
	login: {
		width: 260,
		borderRadius: 10,
		height: 50,
		backgroundColor: "rgba(0,0,0,0)",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	registration: {
		backgroundColor: "rgba(0,0,0,0)",
		width: 260,
		height: 50,
		marginBottom: 30,
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
		borderRadius: 10,
		borderColor: "#18a0fb",
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
