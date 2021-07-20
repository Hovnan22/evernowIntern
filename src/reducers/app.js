import { LOGIN } from "../actions/types";

const initalState = {
	isLoggedIn: false,
};

export default (state = initalState, { type, payload }) => {
	switch (type) {
	case LOGIN: {
		return {
			...state,
			isLoggedIn: payload,
		};
	}
	default: {
		return state;
	}
	}

};
