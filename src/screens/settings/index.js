import React, 
{ 
	useState, 
	useCallback,
} from "react";
import {
	View,
	FlatList,
	Platform,
	StyleSheet,
	ActionSheetIOS,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

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

const AppSettings = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [isAvatarVisible, setIsAvatarVisible] = useState();
	
	const logOut = useCallback(async () => {
		await StorageService.setAuth(false);
		dispatch(isLoggedIn(false));
	}, []);

	const closeHandler = useCallback( () => {
		setIsAvatarVisible(false);
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
			setIsAvatarVisible(true);
		} else {
			actionSheet();
		}
	},[]);

	return (
		<AppWrapper>
			<View style={styles.container} >
				<FlatList
					data={SETTINGSOPTION}
					keyExtractor={item => item.name}
					ListHeaderComponent={() => (
						<AppUserInfo
							setChangeAvatar={avatarHandler}
							navigation={navigation}
						/>)}
					ItemSeparatorComponent={() => (<View style={styles.seperator} />)}
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
				/>
				{isAvatarVisible && <AppChangeAvatar closeHandler={closeHandler} />}
			</View>
		</AppWrapper>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingTop: 110,
	},
	seperator: {
		borderBottomColor: "#76767669",
		borderBottomWidth: 1,
	},
	logOut: {
		flexDirection: "row",
		height: 75,
		alignItems: "center",
		marginHorizontal: 25,
	},
});

export default AppSettings;
