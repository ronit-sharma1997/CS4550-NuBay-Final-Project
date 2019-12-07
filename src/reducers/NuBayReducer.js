import React from 'react'

const initialItems = {
	searchText : "",
	loginIn: false,
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
				loginIn: true,
				userInfo: action.user
			}
		default:
		return {
			...state,
			loginIn: initialItems.loginIn,
			userInfo: initialItems.userInfo
		}

	}

} 

export default NuBayReducer;