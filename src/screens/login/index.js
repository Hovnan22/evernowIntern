import React, { useState } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { isLoggedIn } from "../../actions/app";

import { useLogin } from "../../hooks";
import {
	AppImage,
	AppInput,
	AppButton,
} from "../../components/ui";
import {
	HOME_SCREEN,
	POLICY_SCREEN,
	REGISTRATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "../../navigation/screens";
import whiteBg from "../../../src/assets/images/whiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const windowWidth = Dimensions.get("window").width;
const LoginScreen = ({navigation, setIsLoggedIn}) => {
	const [email, changeEmail] = useState("user1@example.com");
	const [password, changePassword] = useState("passwoord");
	const [onLogin] = useLogin();
	const setLoggedInStatus = setIsLoggedIn;
	console.log(setLoggedInStatus,"setLoggedInStatus");

	const login = async () => {
		const variables = {
			email: email,
			password: password,
		};
		try {
			const data = await onLogin({ variables });
			setLoggedInStatus(true);
			console.log(data,"data");
			navigation.navigate(HOME_SCREEN);
		} catch (err) {
			console.log(err);
		}
	};

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
				<Text style={styles.info}>Login</Text>
				<AppInput
					styles={styles.email}
					placeholder="Email"
					placeholderColor="#005189"
					changeEvent={changeEmail}
					textValue={email}
				/>
				<AppInput
					styles={{...styles.email ,marginVertical: 30} }
					placeholder="Password"
					placeholderColor="#005189"
					changeEvent={changePassword}
					textValue={password}
				/>
				<TouchableOpacity
					style={styles.restorePass}
					onPress={() => {navigation.navigate(RESTOREPASSWORD_SCREEN);}}
				>
					<Text style={{color: "#9A9CA8"}}>Forgot password</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.gradienBg}>
				<AppImage width={"100%"} height={430} url={gradientBg} />
				<View style={styles.buttonBlock}>
					<View style={styles.buttonBg}>
						<View style={styles.buttons}>
							<AppButton
								color="white"
								name={"Login"}
								style={styles.login}
								press={login}
							/>
							<AppButton
								color="white"
								name={"Registration"}
								style={styles.registration}
								press={() => { navigation.navigate(REGISTRATION_SCREEN); }}
							/>
							<AppButton
								color="#afafaf"
								name={"Privacy Policy"}
								style={styles.policy}
								press={() => { navigation.navigate(POLICY_SCREEN); }}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};


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
		marginTop: 100,
		marginHorizontal: 30,
	},
	backe: {
		top: 30,
		left: 20,
	},
	inputBg: {
		position: "absolute",
		zIndex: 2,
		top: 0,
		width: "100%",
		height: 380,
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

const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
