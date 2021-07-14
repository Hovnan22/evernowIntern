import React, { useCallback } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { SETTINGS_OPTION_SCREEN } from "../../navigation/screens";


const AppSettingsOptions = ({ item, navigation, timezon, press }) => {
	const navigateToSettingsOption = useCallback(() => {
		navigation.navigate(SETTINGS_OPTION_SCREEN, { ...item.screenName });
	},[]);

	return (
		<View style={styles.options}>
			<TouchableOpacity onPress={  timezon ? press : navigateToSettingsOption } style={styles.option}>
				<Text>{item.name}</Text>
			</TouchableOpacity>
		</View>
	);
};



const styles = StyleSheet.create({
	options: {

	},
	option: {
		flexDirection: "row",
		height: 75,
		alignItems: "center",
		borderBottomColor: "#76767669",
		borderBottomWidth: 1,
		marginHorizontal: 25,
	},
});
export default AppSettingsOptions;
