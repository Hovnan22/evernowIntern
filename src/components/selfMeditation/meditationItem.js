import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

import {
	AppIcon
} from "../ui";

const MeditationItem = ({
	item,
	getLayouts,
	pressToMeditation,
}) => (
	<View
		onLayout={(event) => { getLayouts(event) }}
		style={styles.medtation}
	>
		<TouchableOpacity 
			style={styles.button}
			onPress={() => pressToMeditation(item.index)}
		>
			<AppIcon
				icon={item.item.icon}
				width={32}
				height={32}
			/>
			<Text style={styles.name}>
				{item.item.name}
			</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	medtation: {
		display: "flex",
		flexDirection: "row",
		paddingVertical: 10,
	},
	name: {
		color: "#fff",
		paddingLeft: 15,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	}
})

export default MeditationItem;
