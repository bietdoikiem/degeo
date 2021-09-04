import {
	AUTH_LOGIN_SUCCESS,
	AUTH_REGISTER_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	AUTH_REQUEST,
	AUTH_REQUEST_FAILURE,
} from './types';

const initialState = {
	loading: false,
	currentUser: null,
	error: '',
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case AUTH_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				currentUser: action.payload,
			};
		case AUTH_REGISTER_SUCCESS:
			return {
				loading: false,
			};
		case AUTH_LOGOUT_SUCCESS:
			return {
				loading: false,
				currentUser: null,
			};
		case AUTH_REQUEST_FAILURE:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
