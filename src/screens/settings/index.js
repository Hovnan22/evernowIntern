import React, { useCallback,  useState } from "react";
import {
	View,
	FlatList,
	Platform,
	StyleSheet,
	ActionSheetIOS,
} from "react-native";
import { connect } from "react-redux";

import {
	AppChangeAvatar,
} from "../../components/settings";
import {
	AppWrapper,
} from "../../components/ui";
import {
	AppSettingsOptions,
	AppUserInfo,
} from "../../components/settings";
import { StorageService } from "../../services";
import { isLoggedIn } from "../../actions/app";
import { SETTINGSOPTION } from "../../components/constants/settings";
import {useNavigation} from "@react-navigation/native";


const AppSettings = ({  setIsLoggedIn }) => {
	const navigation = useNavigation();
	const [changeAvatar, setChangeAvatar] = useState();
	const logOut = useCallback(async () => {
		await StorageService.setAuth(false);
		setIsLoggedIn(false);
	}, []);

	const closeHandler = useCallback( () => {
		setChangeAvatar(false);
	}, []);

	const actionSheet = useCallback( () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ["Cancel", "camera", "upload from media"],
				destructiveButtonIndex: 2,
				cancelButtonIndex: 0,
				userInterfaceStyle: "dark",
			},
			buttonIndex => {
				if (buttonIndex === 0) {

				} else if (buttonIndex === 1) {

				} else if (buttonIndex === 2) {
				}
			}
		);
	}, []);

	const avatarHandler = useCallback(() => {
		if (Platform.OS === "android"){
			setChangeAvatar(true);
		} else {
			actionSheet();
		}
	},[]);

	return (
		<AppWrapper>
			<View style={styles.container}>
				<FlatList
					ListHeaderComponent={() => (
						<AppUserInfo
							changeAvatar={changeAvatar}
							setChangeAvatar={avatarHandler}
							navigation={navigation}
						/>)}
					style={styles.options}
					data={SETTINGSOPTION}
					ItemSeparatorComponent={() => (<View style={styles.seperator} />)}
					key={item => item.key}
					renderItem={({ item }) => (
						<AppSettingsOptions
							item={item}
						/>
					)}
					ListFooterComponent={() => (
						<AppSettingsOptions
							item={{ name: "logOut" }}
							logOut={true}
							press={logOut}
						/>
					)}
					keyExtractor={item => item.name}
				/>
				{changeAvatar && <AppChangeAvatar closeHandler={closeHandler} />}
			</View>
		</AppWrapper>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	seperator: {
		borderBottomColor: "#76767669",
		borderBottomWidth: 1,
	},
	options: {
		top: 110,
	},
	logOut: {
		flexDirection: "row",
		height: 75,
		alignItems: "center",
		marginHorizontal: 25,
	},
});
const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null, mapDispatchToProps)(AppSettings);
