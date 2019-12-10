import React from 'react'

const initialItems = {
	searchText : "",
	loggedIn: false,
	userInfo: {},
	currentSearchCount: 0,
	initialLoad: true,
	searchKeyword: ""
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
				currentSearchCount: state.currentSearchCount + action.count,
				initialLoad: false
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
		default:
		return {
			...state,
			loggedIn: initialItems.loggedIn,
			userInfo: initialItems.userInfo,
			currentSearchCount: initialItems.currentSearchCount,
			initialLoad: initialItems.initialLoad,
			searchKeyword: initialItems.searchKeyword
		}

	}

} 

export default NuBayReducer;