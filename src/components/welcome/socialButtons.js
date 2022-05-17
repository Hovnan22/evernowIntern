import React from "react";
import {
	View,
	Text,
} from "react-native";

import { AppIconeButton } from "../ui";

const AppSocialButtons = ({
	socialIconsStyles,
	socialLoginStyles,
	socialButtons,
}) => (
	<View style={socialLoginStyles}>
		<Text>Login via social network</Text>
		<View style={socialIconsStyles}>
			{
				socialButtons.map(item => (
					<AppIconeButton
						key={item.iconName}
						width={32}
						height={32}
						iconName={item.iconName}
					/>
				))
			}
		</View>
	</View>
);

export default AppSocialButtons;
