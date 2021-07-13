import React from "react";
import {View, FlatList, StyleSheet } from "react-native";
import {
	AppWrapper,
} from "../../components/ui";
import {
	AppSettingsOptions,
} from "../../components/settings";


const AppSettings = ({ navigation }) => {
	// {
	// 	name: "Username",
	// 	avatar: <AppAvatar style={styles.avatar} />,
	// 	icon: <AppIcon
	// 		style={styles.iconEdit}
	// 		icon="edit"
	// 		width={16}
	// 		height={16}
	// 	/>,
	// },
	const settings = [
		{
			name: "Change class times",
			classTime: true,
		},
		{
			name: "Change timezone",
			timeZon: true,
		},
		{
			name: "Change email",
			changeEmail: true,
		},
		{
			name: "Change Password",
			changePassword: true,

		},
		{
			name: "Change the language",
			changeLanguage: true,
		},
	];


	return (
		<AppWrapper >
				<FlatList
				style={styles.options	}
					data={settings}
					key={item => item.name}
					renderItem={AppSettingsOptions}
					keyExtractor={item => item.name}
				/>
		</AppWrapper>
	);
};


const styles = StyleSheet.create({
	options: {
		top: 110
	}
});

export default AppSettings;
