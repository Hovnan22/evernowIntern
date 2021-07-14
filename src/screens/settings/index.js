import React, { useCallback, useState } from "react";
import {
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
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



const AppSettings = ({ navigation, setIsLoggedIn }) => {
	const [changeAvatar, setChangeAvatar] = useState();
	const logOut = useCallback(async () => {
		await StorageService.setAuth(false);
		setIsLoggedIn(false);

	}, []);

	const closeHandler = useCallback(async () => {
		setChangeAvatar(false);
	}, []);

	return (
		<AppWrapper>
			<View style={styles.container}>
				{changeAvatar && <AppChangeAvatar closeHandler={closeHandler} />}
				<FlatList
					ListHeaderComponent={() => <AppUserInfo changeAvatar={changeAvatar} setChangeAvatar={setChangeAvatar} navigation={navigation} />}
					style={styles.options}
					data={SETTINGSOPTION}
					key={item => item.key}
					renderItem={({ item }) => <AppSettingsOptions
						item={item}
						navigation={navigation}
					/>}
					ListFooterComponent={() => (<View >
						<TouchableOpacity onPress={logOut} style={styles.logOut}>
							<Text>logedOut</Text>
						</TouchableOpacity>
					</View>)}
					keyExtractor={item => item.name}
				/>
			</View>
		</AppWrapper>
	);
};


const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: " 100%",
	},
	options: {
		top: 110,
	},
	logOut: {
		flexDirection: "row",
		height: 75,
		alignItems: "center",
		borderBottomColor: "#76767669",
		borderBottomWidth: 1,
		marginHorizontal: 25,
	},
});
const mapDispatchToProps = dispatch => ({
	setIsLoggedIn: loginStatus => dispatch(isLoggedIn(loginStatus)),
});

export default connect(null, mapDispatchToProps)(AppSettings);
