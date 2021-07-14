import React from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
} from "react-native";
import { connect } from "react-redux";

import {
	AppButton,
	AppImage,
	AppWrapper,
} from "../../components/ui";
import topBg from "../../assets/images/bg-main-top.png";
import { StorageService } from "../../services";
import { isLoggedIn } from "../../actions/app";

const width = Dimensions.get("window").width;
const HomeScreen = ({setIsLoggedIn}) => {

	const logOut = async () => {
		console.log(await StorageService.setAuth(false));
		setIsLoggedIn(false);

	};

	return (
		<AppWrapper>
			<View style={styles.container}>
				<AppButton
					textStyle={styles.registrationButtonsText}
					style={styles.logOut}
					name={"logedOut"}
					press={logOut}
					type="border"
				/>

				<Text style={{color: "red"}}>ddd</Text>
			</View>

		</AppWrapper>
	);
};

const styles = StyleSheet.create({
	registrationButtonsText: {
		color: "#18a0fb",
	},
	inputBg: {
		position: "absolute",
		zIndex: 1,
		top: -15,
		// bottom: 0,
		left: 0,
		right: 0,
		width: width,
		height: 280,
	},
	logOut: {
		backgroundColor: "rgba(0,0,0,0)",
		width: 300,
		height: 80,
		marginBottom: 10,
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
		borderRadius: 10,
		borderColor: "white",
		borderWidth: 2,
		marginTop: 20,
		zIndex: 20,
		top: 100,
	},
	topBgBlock: {
		position: "absolute",
		zIndex: 10,
	},
	container: {
		width: "100%",
		height: "100%",
		flex: 1,
		justifyContent: "space-around",
	},
});

const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null,mapDispatchToProps)(HomeScreen);

