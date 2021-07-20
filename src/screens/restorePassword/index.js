import React from "react";
import { Text } from "react-native";

import {
	AppWrapper,
} from "../../components/ui";
import {useNavigation} from "@react-navigation/native";

const AppRestorePassword = () => {

	const navigation = useNavigation();

	return (
		<AppWrapper navigation={navigation}>
			<Text>forgot password</Text>
		</AppWrapper>
	);};

export default AppRestorePassword;
