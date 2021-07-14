import React, { useRef } from "react";
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
import {
	AppWrapper,
} from "../../components/ui";
import { APPLANGUAGE } from "../../components/constants/settings";

const AppSetingsOptionScreen = ({
	route,
	navigation,
}) => {
	const { classTime, timeZon,changeLanguage, changePassword, changeEmail, showEditName ,showEditAvatar } = route.params;
	const flatListRef = useRef();
	return (
		<AppWrapper navigation={navigation}>
			{changeLanguage && (
				<FlatList
					style={styles.languages}
					ref={flatListRef}
					data={APPLANGUAGE}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item}) => <AppSettingsOptions
						item={item}
						navigation={navigation}
					/>
					}
				/>
			)}
			{!changeLanguage && (<View style={styles.container}>
				<AppSettingsInputField
					timeZon={timeZon}
					classTime={classTime}
					changeEmail={changeEmail}
					changeLanguage={changeLanguage}
					changePassword={changePassword}
					showEditName={showEditName}
					showEditAvatar={showEditAvatar}
				/>
				<AppformSettingsButton
					timeZon={timeZon}
					changeEmail={changeEmail}
				/>
			</View>)}
		</AppWrapper>
	);
};

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
