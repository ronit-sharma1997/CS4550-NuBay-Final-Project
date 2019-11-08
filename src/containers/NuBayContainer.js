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
			debugger;
			service.getEbayItems(text,items => dispatch({
				type: 'SET_ITEMS',
				items: items
			}))
				//dispatch({type:"SET_ITEMS"}))

		}

	}		
}


const stateToPropertyMapper = (state) => {

return {
	items: state.items
}

}

const NuBayContainer = 
	connect(stateToPropertyMapper, dispatchToPropertyMapper)
	(NuBayManager)

	export default NuBayContainer;