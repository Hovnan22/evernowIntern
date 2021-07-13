import React, { useState } from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import { connect } from "react-redux";

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


const LoginScreen = ({ navigation, setIsLoggedIn }) => {
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
	}

	const goToPolicy = () => {
		navigation.navigate(POLICY_SCREEN);
	}

	const buttonsArray = [
		{
			textStyle: {color: "#fff"},
			name: "Login",
			style: styles.login,
			press: login,
			type: "border"
		},
		{
			textStyle: {color: "#fff"},
			name: "Registration",
			style: styles.registration,
			press: goToregistration,
			type: "transparent",
		},
		{
			textStyle: {color: "#fff", opacity: 0.3},
			name: "Privacy Policy",
			style: styles.policy,
			press: goToPolicy,
			type: "transparent",
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

	policy: {
		alignItems: "center",
		width: 300,
		marginVertical: 10,
	},
	registration: {
		width: 300,
		borderRadius: 10,
		height: 60,
		backgroundColor: "rgba(0,0,0,0)",
		alignItems: "center",
		marginTop: 25,
	},
	login: {
		// backgroundColor: "rgba(0,0,0,0)",
		// width: 300,
		// // height: 60,
		// marginBottom: 10,
		// // justifyContent: "center",
		// // alignItems: "center",
		// textAlign: "center",
		// borderRadius: 10,
		borderColor: "#fff",
		borderWidth: 2,
		// marginTop: 20,

	},
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#f2f2f2",
		// flex: 1,
	},

});

const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
