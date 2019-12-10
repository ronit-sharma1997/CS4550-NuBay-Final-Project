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
		},
		addToSearchCount: (count) => {
			dispatch({type: 'ADD_TO_SEARCH_COUNT', count: count})
		},
		resetSearchCount: () => {
			dispatch({type: 'RESET_SEARCH_COUNT'})
		},
		setSearchKeyword: (keyword) => {
			dispatch({type: 'SET_SEARCH_KEYWORD', keyword:keyword})
		},
		hideNavBar: () => {
			dispatch({type: 'HIDE_NAV_BAR'})
		},
		showNavBar: () => {
			dispatch({type: 'SHOW_NAV_BAR'})
		}
	}
}


const stateToPropertyMapper = (state) => {

    return {
		searchText : state.searchText,
		loggedIn: state.loggedIn,
		userInfo: state.userInfo,
		currentSearchCount: state.currentSearchCount,
		searchKeyword: state.searchKeyword,
		showHeaderBar: state.showHeaderBar
    }

}

const NuBayContainer = 
	connect(stateToPropertyMapper, dispatchToPropertyMapper)
	(NuBayManager)

	export default NuBayContainer;