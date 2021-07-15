import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { AppSettingsOptions } from ".";
import { APPTIMEZON } from "../constants/settings";

const { width, height } = Dimensions.get("screen");

const TimezonList = ({selectTimeZon}) => (
	<View style={styles.timezonList}>
		<FlatList
			style={styles.timezon}
			data={APPTIMEZON}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({item}) => <AppSettingsOptions
				press={() => selectTimeZon(item.name)}
				timezon={true}
				item={item}
			/>
			}
			ItemSeparatorComponent={() => (<View style={styles.seperator} />)}
		/>
	</View>
);

const styles = StyleSheet.create({
	timezon: {
		top: 40,
	},
	seperator: {
		borderBottomColor: "#76767669",
		borderBottomWidth: 1,
	},
	timezonList: {
		backgroundColor: "#fff",
		zIndex: 20,
		width,
		height,
		position: "absolute",
		top: -100,
		left: -30,
	},
});

export default TimezonList;
