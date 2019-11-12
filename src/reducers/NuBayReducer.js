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
			watchCount:25
		}
		]


	}

const NuBayReducer = (state=initalItems, action) => {
    console.log(state,action);

	switch(action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.items
            }
        case 'SET_CURR_ITEM_ID':
            // If your item id is 0, you should not display item details
            return Object.assign({}, state, {
                currentItemID: action.itemId,
                showItemDetail: (action.itemId != 0)
            })

		default:
		return {
			...state,
            items:initalItems.items,
            showItemDetail: false,
            currentItemID: 0
		}

	}

} 

export default NuBayReducer;