import { LOGIN } from "../actions/types";

const initalState = {
	isLoggedIn: false,
};

export default (state = initalState, action) => {
	switch (action.type) {
	case LOGIN: {
		return {
			...state,
			isLoggedIn: action.payload,
		};
	}
	default: {
		return state;
	}
	}

};
