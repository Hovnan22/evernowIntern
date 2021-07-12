import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
	AppIcon,
	AppImage,
	AppButton,
	AppWrapper,
} from "../../components/ui";
import icon from "../../../src/assets/images/logo.png";
import whiteBg from "../../../src/assets/images/wilcomeWhiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";
import {
	LOGIN_SCREEN,
	REGISTRATION_SCREEN,
} from "../../navigation/screens";


const WelcomeScreen = ({navigation}) => (
	<AppWrapper>
		<View style={styles.container}>
			<View style={styles.gradienBg}>
				<AppImage width={"100%"} height={430} url={gradientBg} />
			</View>
			<View style={styles.logo}>
				<AppImage width={200} height={200} url={icon} />
			</View>

			<View style={styles.buttonBlock}>
				<View style={styles.buttonBg}>
					<View style={styles.socialLogin}>
						<Text>Login via social network</Text>
						<View style={styles.socialIcons}>
							<TouchableOpacity>
								<AppIcon
									icon="google"
									width={32}
									height={32}
									fill="red"
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<AppIcon
									icon="fb"
									width={32}
									height={32}
									fill="red"
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<AppIcon
									icon="vk"
									width={32}
									height={32}
									fill="red"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<AppImage width={320} height={320} url={whiteBg} />
					<View style={styles.buttons}>
						<LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#9AD1FF", "#0075C8"]} style={styles.gradientButton}>
							<AppButton
								name={"Login"}
								style={styles.login}
								color="white"
								press={() => { navigation.navigate( LOGIN_SCREEN ); }}
							/>
						</LinearGradient>
						<AppButton
							name={"Registration"}
							color={"#18a0fb"}
							style={styles.registration}
							press={() => { navigation.navigate(REGISTRATION_SCREEN); }}
						/>
					</View>
				</View>
			</View>
		</View>
	</AppWrapper>
);

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
