import React from "react";
import {
	View,
	FlatList,
	StyleSheet,
} from "react-native";

import {
	AppSettingsOptions,
	AppSettingsInputField,
	AppformSettingsButton,
} from "../../components/settings";
import { AppWrapper } from "../../components/ui";
import { APPLANGUAGE } from "../../constants/settings";

const AppSetingsOptionScreen = ({ route: { params: { screenName } }, navigation }) => (
	<AppWrapper showBackBtn>
		{ (screenName === "changeLanguage") ?  (
			<FlatList
				style={styles.languages}
				data={APPLANGUAGE}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({item}) => (
					<AppSettingsOptions
						screenName={screenName}
						item={item}
					/>
				)}
			/>
		) : (
			<View style={styles.container}>
				<AppSettingsInputField
					screenName={screenName}
				/>
				<AppformSettingsButton
					timeZon={8}
					changeEmail={8}
				/>
			</View>
		)}
	</AppWrapper>
);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	languages: {
		top: 100,
	},
});

export default AppSetingsOptionScreen;
