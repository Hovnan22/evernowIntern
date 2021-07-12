import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const AppSettingsOptions = ({options}) => (
	<View style={styles.options}>
		{options.map(items => (<TouchableOpacity style={styles.option}>
			{ items.icon && items.icon}
			{ items.avatar && items.avatar}
			<Text>{items.name}</Text>
		</TouchableOpacity>) )}
	</View>
);

const styles = StyleSheet.create({
	options: {
		top: 110,
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
