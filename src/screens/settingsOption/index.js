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
	navigation,
	screenName,
	showEditName,
	showEditAvatar,
}) => (
	<AppWrapper navigation={navigation}>
		<View style={styles.container}>
			<AppSettingsInputField
				screenName={screenName}
				showEditName={showEditName}
				showEditAvatar={showEditAvatar}
				// email={email}
				// password={password}
				// changeEmail={changeEmail}
				// changePassword={changePassword}
				// restorePassword={restorePassword}
			/>
			<AppformSettingsButton /*status={status}*/ />
		</View>
	</AppWrapper>
);

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: "100%",
		height: "100%",
	}
});

export default AppSetingsOptionScreen;
