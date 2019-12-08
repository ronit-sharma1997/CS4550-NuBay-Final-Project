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

		},
		removeLoggedInUser: () => {
			dispatch({type: 'REMOVE_LOGGED_IN_USER'})
		}
	}
}


const stateToPropertyMapper = (state) => {

    return {
		searchText : state.searchText,
		loggedIn: state.loggedIn,
		userInfo: state.userInfo
    }

}

const NuBayContainer = 
	connect(stateToPropertyMapper, dispatchToPropertyMapper)
	(NuBayManager)

	export default NuBayContainer;