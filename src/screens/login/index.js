import React, { useCallback, useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { StorageService } from "../../services";
import { isLoggedIn } from "../../actions/app";
import { useLogin } from "../../hooks";
import {
	AppWrapper,
	AppFormButtonsBlock,
} from "../../components/ui";
import { AppLoginInputField } from "../../components/login";
import {
	POLICY_SCREEN,
	REGISTRATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "../../navigation/screens";

const LoginScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [email, changeEmail] = useState("user1@example.com");
	const [password, changePassword] = useState("passwoord");
	const [onLogin] = useLogin();

	const login = useCallback(async () => {
		const variables = {
			email: email,
			password: password,
		};
		try {
			const data = await onLogin({ variables });
			await StorageService.setAuth(data);
			dispatch(isLoggedIn(true));
		} catch (err) {
			console.log(err);
		}
	},[]);

	const restorePassword = useCallback(() => {
		navigation.navigate(RESTOREPASSWORD_SCREEN);
	},[]);

	const goToregistration = useCallback(() => {
		navigation.navigate(REGISTRATION_SCREEN);
	},[]);

	const goToPolicy = useCallback(() => {
		navigation.navigate(POLICY_SCREEN);
	},[]);

	const buttonsArray = [
		{
			name: "Login",
			press: login,
			type: "primary",
		},
		{
			name: "Registration",
			press: goToregistration,
			type: "whiteLink",
		},
		{
			name: "Privacy Policy",
			press: goToPolicy,
			type: "link",
		},
	];

	return (
		<AppWrapper showBackBtn>
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
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#f2f2f2",
	},
});

export default LoginScreen;
