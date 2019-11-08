import React from 'react'

const initalItems = {


		items : [
		{
			title:"Harry Potter 2",
			galleryURL:"https:\/\/thumbs3.ebaystatic.com\/m\/mXeRJlJAtYsXl7amSUup0MQ\/140.jpg",
			viewItemUrl:"it",
			price:"100",
			watchCount:23

		},
		{
			title:"Harry Potter",
			galleryURL:"https:\/\/thumbs4.ebaystatic.com\/m\/mDdmMsQ6F7IyAPvRDyZXXRw\/140.jpg",
			viewItemUrl:"",
			price:"21",
			watchCount:21
		}
		]


	}

const NuBayReducer = (state=initalItems, action) => {
	debugger;
	switch(action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.items
			}
		default:
		return {
			...state,
			items:initalItems.items
		}

	}

} 

export default NuBayReducer;