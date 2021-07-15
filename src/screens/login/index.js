import React, { useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import {useNavigation} from "@react-navigation/native";

import { StorageService } from "../../services";
import { isLoggedIn } from "../../actions/app";
import { useLogin } from "../../hooks";
import {
	AppWrapper,
	AppFormButtonsBlock,
} from "../../components/ui";
import {
	AppLoginInputField,
} from "../../components/login";
import {
	POLICY_SCREEN,
	REGISTRATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "../../navigation/screens";


const LoginScreen = ({ setIsLoggedIn }) => {
	const navigation = useNavigation();
	const [email, changeEmail] = useState("user1@example.com");
	const [password, changePassword] = useState("passwoord");
	const [onLogin] = useLogin();

	const login = async () => {
		const variables = {
			email: email,
			password: password,
		};
		try {
			const data = await onLogin({ variables });
			await StorageService.setAuth(data);
			setIsLoggedIn(true);
		} catch (err) {
			console.log(err);
		}
	};

	const restorePassword = () => {
		navigation.navigate(RESTOREPASSWORD_SCREEN);
	};
	const goToregistration = () => {
		navigation.navigate(REGISTRATION_SCREEN);
	};

	const goToPolicy = () => {
		navigation.navigate(POLICY_SCREEN);
	};

	const buttonsArray = [
		{
			name: "Login",
			borderColor: styles.whiteBorder,
			press: login,
			type: "border",
			textColor: styles.loginText,
		},
		{
			borderColor: styles.registration,
			name: "Registration",
			press: goToregistration,
			type: "border",
			textColor: styles.loginText,
		},
		{
			name: "Privacy Policy",
			press: goToPolicy,
			type: "link",
		},
	];

	return (
		<AppWrapper navigation={navigation}>
			<View style={styles.container}>
				<AppLoginInputField
					email={email}
					password={password}
					changeEmail={changeEmail}
					changePassword={changePassword}
					restorePassword={restorePassword}
				/>
				<AppFormButtonsBlock buttonsArray={buttonsArray} />
			</View>
		</AppWrapper>
	);
};

const styles = StyleSheet.create({
	whiteBorder: {
		borderColor: "rgb(255,255,255)",
	},
	loginText: {
		color: "rgb(255,255,255)",
	},
	registration: {
		borderColor: "rgba(0,0,0,0)",
	},
	login: {
		borderColor: "#fff",
		borderWidth: 2,
	},
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#f2f2f2",
	},

});

const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
