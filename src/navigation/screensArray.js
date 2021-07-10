import {
	HomeScreen,
	WelcomeScreen,

} from "../screens";
import {
	HOME_SCREEN,
	WELCOME_SCREEN,
	LOGIN_SCREEN,
	REGISTRATION_SCREEN,
} from "./screens";

export const welcomeRootScreens = [
	{
		name: WELCOME_SCREEN,
		component: WelcomeScreen,
	},
	{
		name: LOGIN_SCREEN,
		component: "",
	},
	{
		name: REGISTRATION_SCREEN,
		component: "",
	},
];

export const homeRootScreens = [
	{
		name: HOME_SCREEN,
		component: HomeScreen,
	},
];
