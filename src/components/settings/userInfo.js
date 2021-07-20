import React, { useCallback } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppAvatar } from ".";
import { AppIcon } from "../ui";
import { SETTINGS_OPTION_SCREEN } from "../../navigation/screens";


const AppUserInfo = ({ setChangeAvatar }) => {
	const navigation = useNavigation();
	const EditAvatar = useCallback(() => {
		setChangeAvatar(true);
	}, []);
	const EditName = useCallback(
		() => {
			navigation.navigate(SETTINGS_OPTION_SCREEN, { screenName: "showEditName" });
		}, []
	);
	
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={EditAvatar}>
				<AppAvatar style={styles.avatar} />
			</TouchableOpacity>
			<TouchableOpacity onPress={EditName}>
				<Text>Username</Text>
			</TouchableOpacity>
			<AppIcon
				style={styles.iconEdit}
				icon="edit"
				width={16}
				height={16}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		marginHorizontal: 25,
		alignItems: "center",
	},
	avatar: {
		marginRight: 15,
	},
	iconEdit: {
		position: "absolute",
		right: 0,
	},
});

export default AppUserInfo;
