import React from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import {
	AppIcon,
	AppAvatar,
	AppWrapper,
	AppSettingsOptions
} from "../../components/ui";


const AppSettings = () => {
	const settings = [
		{
			name: "Username",
			avatar:  <AppAvatar style={styles.avatar}/>,
			icon: <AppIcon
				style={styles.iconEdit}
				icon="edit"
				width={16}
				height={16}
			/>,
		},
		{
			name: "Change class times",
		},
		{
			name: "Change timezone",
		},
		{
			name: "Change email",
		},
		{
			name: "Change Password",
		},
		{
			name: "Change the language",
		},
	];
	return (
		<AppWrapper >
			<AppSettingsOptions options={settings}/>
		</AppWrapper>
	);
};


const styles = StyleSheet.create({
	avatar: {
		marginRight: 15,
	},
	iconEdit: {
		right: 0,
		position: "absolute",
	},
});

export default AppSettings;
