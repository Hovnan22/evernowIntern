import React from "react";

import {
	AppPolicy,
	HomeScreen,
	LoginScreen,
	AppSettings,
	WelcomeScreen,
	AppMeditation,
	AppRestorePassword,
	RegistrationScreen,
} from "../screens";
import {
	HOME_SCREEN,
	LOGIN_SCREEN,
	POLICY_SCREEN,
	WELCOME_SCREEN,
	SETTINGS_SCREEN,
	MEDITATION_SCREEN,
	REGISTRATION_SCREEN,
	TAB_NAVIGATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "./screens";
import  AppTabNavigation  from "./tabRoot";
import HomeRoot from "./homeRoot";
import { AppIcon } from "../components/ui";

export const welcomeRootScreens = [
	{
		name: WELCOME_SCREEN,
		component: WelcomeScreen,
	},
	{
		name: LOGIN_SCREEN,
		component: LoginScreen,
	},
	{
		name: REGISTRATION_SCREEN,
		component: RegistrationScreen,
	},
	{
		name: RESTOREPASSWORD_SCREEN,
		component: AppRestorePassword,
	},
	{
		name: POLICY_SCREEN,
		component: AppPolicy,
	},
];

export const homeScreen = [
	{
		name: HOME_SCREEN,
		component: HomeScreen,
		iconName: "home",
	},
	{
		name: MEDITATION_SCREEN,
		component: AppMeditation,
		iconName: "yoga",
	},

];

export const tabRootScreens = [
	{
		name: SETTINGS_SCREEN,
		component: AppSettings,
		iconName: "settings",
		options: {
			tabBarIcon: () => (
				<AppIcon icon="settings" width={24} height={24} fill="white" />
			),
		},
	},
	{
		name: HOME_SCREEN,
		component: HomeRoot,
		options: {
			tabBarIcon: () => (
				<AppIcon icon="home" width={24} height={24} fill="white" />
			),
		},
	},
	{
		name: MEDITATION_SCREEN,
		component: AppMeditation,
		options: {
			tabBarIcon: () => (
				<AppIcon icon="yoga" width={24} height={24} fill="white" />
			),
		},
	},

];

export const tabNavigation = [
	{
		name: TAB_NAVIGATION_SCREEN,
		component: AppTabNavigation,
	},
];
