import React from 'react'

const initialItems = {
	searchText : "",
	loggedIn: false,
	userInfo: {}
}

const NuBayReducer = (state=initialItems, action) => {

	switch(action.type) {
		case 'CHANGE_SEARCH_STRING':
			return {
				...state,
				searchText: action.newValue
			}
		case 'SET_LOGGED_IN_USER':
			return {
				...state,
				loggedIn: true,
				userInfo: action.user
			}
		case 'REMOVE_LOGGED_IN_USER':
			return {
				...state,
				loggedIn: false,
				userInfo: {}
			}
		default:
		return {
			...state,
			loggedIn: initialItems.loggedIn,
			userInfo: initialItems.userInfo
		}

	}

} 

export default NuBayReducer;