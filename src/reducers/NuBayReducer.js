import React from 'react'

const initalItems = {
		items : [
		{
			title:"Harry Potter"
		},
		{
			title:"Harry Potter 2"
		}
		]


	}

const NuBayReducer = (state=initalItems, action) => {
	debugger;
	switch(action.type) {
		case 'SET_ITEMS':
			return {
				...state
			}
		default:
		return {
			...state,
			items:initalItems.items
		}

	}

} 

export default NuBayReducer;