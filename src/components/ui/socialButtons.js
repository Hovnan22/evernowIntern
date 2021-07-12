import React from "react";
import {
	View,
	Text,
} from "react-native";

import { AppIconeButton } from ".";


const AppSocialButtons = ({socialLoginStyles,socialIconsStyles,socialButtons}) => (
	<View style={socialLoginStyles}>
		<Text>Login via social network</Text>
		<View style={socialIconsStyles}>
			{
				socialButtons.map(item => (
					<AppIconeButton
						key={item.iconName}
						width={item.width}
						height={item.height}
						iconName={item.iconName}
					/>
				))
			}
		</View>
	</View>
);

export default AppSocialButtons;
