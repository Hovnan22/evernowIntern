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
	AppSetingsOptionScreen,
} from "../screens";
import {
	HOME_SCREEN,
	LOGIN_SCREEN,
	POLICY_SCREEN,
	WELCOME_SCREEN,
	SETTINGS_SCREEN,
	MEDITATION_SCREEN,
	SETTINGS_OPTION_SCREEN,
	REGISTRATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "./screens";
import { AppIcon } from "../components/ui";
import TabNavigation from "./tabNavigation";

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

export const logedinRootNavigation = [
	{
		name: HOME_SCREEN,
		component: TabNavigation,
	},
	{
		name: SETTINGS_OPTION_SCREEN,
		component: AppSetingsOptionScreen,
	},
]

export const tabRootScreens = [
	{
		name: HOME_SCREEN,
		component: HomeScreen,
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
			tabBarVisible: false,
		},
	},
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
];
