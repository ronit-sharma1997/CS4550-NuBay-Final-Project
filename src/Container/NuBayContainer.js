import React from 'react'
import NuBayManager from './NuBayManager';
import {connect} from 'react-redux'
import UserService from "../services/UserService";

const userService = UserService.getInstance()

const dispatchToPropertyMapper = dispatch => {

	return {
		searchStringChanged: (event) => {
			dispatch({type: 'CHANGE_SEARCH_STRING', newValue: event.target.value})
		},
		setLoggedInUser: (userId) => {
			// debugger;
			userService.findUserById(userId, user => dispatch({
				type: 'SET_LOGGED_IN_USER',
				user: user
			}))

		}
	}
}


const stateToPropertyMapper = (state) => {

    return {
		searchText : state.searchText,
		loginIn: state.loginIn,
		userInfo: state.userInfo
    }

}

const NuBayContainer = 
	connect(stateToPropertyMapper, dispatchToPropertyMapper)
	(NuBayManager)

	export default NuBayContainer;