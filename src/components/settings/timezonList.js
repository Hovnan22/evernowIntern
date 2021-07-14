import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { AppSettingsOptions } from ".";
import { APPTIMEZON } from "../constants/settings";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const TimezonList = ({selectTimeZon}) => (
	<View style={styles.timezonList}>
		<FlatList
			style={styles.timezon}
			data={APPTIMEZON}
			keyExtractor={(item, index) => index.toString()}
			renderItem={({item}) => <AppSettingsOptions
				press={() => selectTimeZon(item.name)}
				timezon={true}
				item={item}
			/>
			}
		/>
	</View>
);

const styles = StyleSheet.create({
	timezon: {
		top: 40,
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
