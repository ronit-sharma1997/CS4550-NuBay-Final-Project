import React from 'react'
import NuBayManager from '../Container/NuBayManager';
import {createStore} from 'redux'
import NuBayService from '../services/NuBayService'
import {Provider} from 'react-redux'   
import {connect} from 'react-redux'

const service = NuBayService.getInstance();

const dispatchToPropertyMapper = dispatch => {
		
	return {
		makeSearch : (text) => {
			// debugger;
			service.getEbayItems(text,items => dispatch({
				type: 'SET_ITEMS',
				items: items
			}))
				//dispatch({type:"SET_ITEMS"}))

        },
        setItemId: (id) => {
            dispatch({type:'SET_CURR_ITEM_ID', itemId: id})
        }

	}		
}


const stateToPropertyMapper = (state) => {

    return {
        items: state.items,
        showItemDetail: state.showItemDetail,
        currentItemID: state.currentItemID
    }

}

const NuBayContainer = 
	connect(stateToPropertyMapper, dispatchToPropertyMapper)
	(NuBayManager)

	export default NuBayContainer;