import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route}
	from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import NuBayContainer from './Container/NuBayContainer';
import ListItemComponent from './Component/ListItemComponent'
import NuBayReducer from './reducers/NuBayReducer'
import ItemDetail from './Component/ItemDetail'

const store = createStore(NuBayReducer, {})

ReactDOM.render(

  <Provider store={store}>
    <NuBayContainer/>

    </Provider>

   , document.getElementById('root'))

// ReactDOM.render(
//     <App/>
//     , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
