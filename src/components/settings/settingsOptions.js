import React, { useCallback } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

import { SETTINGS_OPTION_SCREEN } from "../../navigation/screens";

const AppSettingsOptions = ({ item, logOut, timezon, press }) => {
	const navigation = useNavigation();
	const navigateToSettingsOption = useCallback(() => {
		navigation.navigate(SETTINGS_OPTION_SCREEN, { screenName: item.screenName });
	},[]); 

	return (
		<View style={styles.options}>
			<TouchableOpacity onPress={  (timezon || logOut) ? press : navigateToSettingsOption } style={styles.option}>
				<Text>{item.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	option: {
		flexDirection: "row",
		height: 75,
		alignItems: "center",
		marginHorizontal: 25,
	},
});

export default AppSettingsOptions;
