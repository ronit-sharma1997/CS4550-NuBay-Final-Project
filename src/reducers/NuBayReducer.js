import React from 'react'

const initialItems = {
	searchText : "",
	loggedIn: false,
	userInfo: {},
	currentSearchCount: 0,
	searchKeyword: "",
	showHeaderBar: false
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
		case 'ADD_TO_SEARCH_COUNT':
			return {
				...state,
				currentSearchCount: state.currentSearchCount + action.count
			}
		case 'RESET_SEARCH_COUNT':
			return {
				...state,
				currentSearchCount: 0
			}
		case 'SET_SEARCH_KEYWORD':
			return {
				...state,
				searchKeyword: action.keyword
			}
		case 'HIDE_NAV_BAR':
			return {
				...state,
				showHeaderBar: false,
				currentSearchCount: 0
			}
		case 'SHOW_NAV_BAR':
			return {
				...state,
				showHeaderBar: true
			}
		default:
		return {
			...state,
			loggedIn: initialItems.loggedIn,
			userInfo: initialItems.userInfo,
			currentSearchCount: initialItems.currentSearchCount,
			searchKeyword: initialItems.searchKeyword,
			showHeaderBar: initialItems.showHeaderBar
		}

	}

} 

export default NuBayReducer;