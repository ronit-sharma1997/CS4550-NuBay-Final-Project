import React from 'react'
import NuBayManager from '../Container/NuBayManager';
import {createStore} from 'redux'
import NuBayService from '../services/NuBayService'
import {Provider} from 'react-redux'   
import {connect} from 'react-redux'

const service = NuBayService.getInstance();

const dispatchToPropertyMapper = dispatch => {
	debugger;
	return {
		makeSearch : (text) => {
			service.getEbayItems(text, helloWorld)
				//dispatch({type:"SET_ITEMS"}))

		}


	}		


}

function helloWorld(response) {
	debugger;
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