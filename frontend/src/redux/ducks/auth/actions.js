import axios from 'axios';
import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	AUTH_REGISTER_SUCCESS,
	AUTH_REQUEST,
	AUTH_REQUEST_FAILURE,
} from './types';

export const authRequest = () => ({
	type: AUTH_REQUEST,
});

export const authRequestFailure = (error) => ({
	type: AUTH_REQUEST_FAILURE,
	payload: error,
});

export const loginSuccess = (currentUser) => ({
	type: AUTH_LOGIN_SUCCESS,
	payload: currentUser,
});

export const logoutSuccess = () => ({
	type: AUTH_LOGOUT_SUCCESS,
});

export const registerSuccess = () => ({
	type: AUTH_REGISTER_SUCCESS,
});

export const login =
	({ email, password }) =>
	async (dispatch) => {
		dispatch(authRequest());
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/login`,
				{
					email,
					password,
				},
			);
			const currentUserData = response.data;
			if (currentUserData) {
				localStorage.setItem(currentUserData);
				dispatch(loginSuccess(currentUserData));
			}
		} catch (error) {
			dispatch(authRequestFailure(error.message));
		}
	};

export const register =
	({ email, password }) =>
	async (dispatch) => {
		dispatch(authRequest());
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/register`,
				{
					email,
					password,
				},
			);
			const currentUserData = response.data;
			dispatch(registerSuccess(currentUserData));
		} catch (error) {
			dispatch(authRequestFailure(error.message));
		}
	};

export const logout = () => async (dispatch) => {
	dispatch(authRequest());
	try {
		localStorage.removeItem('currentUser');
		dispatch(logoutSuccess());
	} catch (error) {
		dispatch(authRequestFailure(error.message));
	}
};
