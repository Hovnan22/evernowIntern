import React from "react";
import { Text } from "react-native";

import { AppWrapper } from "../../components/ui";
import {useNavigation} from "@react-navigation/native";


const RegistrationScreen = () => {
	const navigation = useNavigation();
	return (
		<AppWrapper navigation={navigation}>
			<Text>registration</Text>
		</AppWrapper>
	);};

export default RegistrationScreen;
