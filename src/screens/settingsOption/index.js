import React from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import {
	AppSettingsInputField,
	AppformSettingsButton,
} from "../../components/settings";
import {
	AppWrapper,
} from "../../components/ui";

const AppSetingsOptionScreen = ({
	route,
	navigation,
}) => {
	const {classTime, timeZon,changeLanguage, changePassword, changeEmail, showEditName ,showEditAvatar } = route.params;
	return (
	<AppWrapper navigation={navigation}>
		{
			console.log(classTime, timeZon,changeLanguage, changePassword, changeEmail, showEditName )
		}
		<View style={styles.container}>
			<AppSettingsInputField
					params={route.params}
			/>
			<AppformSettingsButton /*status={status}*/ />
		</View>
	</AppWrapper>
)
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: "100%",
		height: "100%",
	}
});

export default AppSetingsOptionScreen;
