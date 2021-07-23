import { LOGIN, SET_STATUSBAR_STYLE } from "./types";

export const  isLoggedIn = LogedStatus => ({
	type: LOGIN,
	payload: LogedStatus,
});

export const  setStatusBarStyle = statusBarStyle => ({
	type: SET_STATUSBAR_STYLE,
	payload: statusBarStyle,
});
