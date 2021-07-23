import { LOGIN, SET_STATUSBAR_STYLE } from "../actions/types";

const initalState = {
	isLoggedIn: false,
	statusBarStyle: false,
};

export default (state = initalState, { type, payload }) => {
	switch (type) {
	case LOGIN: {
		return {
			...state,
			isLoggedIn: payload,
		};
	}
	case SET_STATUSBAR_STYLE: {
		return {
			...state,
			statusBarStyle: payload,
		};
	}
	default: {
		return state;
	}
	}

};
