import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayManagerHeaderBar from "../Component/NuBayManagerHeaderBar";
import NuBayTable from "../Component/NuBayTable";
import ListItemComponent from '../Component/ListItemComponent'
import HomePage from '../Component/HomePage'
import ItemDetail from '../Component/ItemDetail';
import {BrowserRouter as Router,Route}
	from 'react-router-dom';

export default class NuBayManager extends React.Component {

    constructor (props) {
        super(props)
        this.searchStringChanged = this.searchStringChanged.bind(this)
        this.state = {
        searchText : "",
        previousSearchTerm: ""
        }
    }


    searchStringChanged = (event) => {
        let newValue = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            searchText: newValue
        }))
    }

    makeSearchHappen = () => {
        this.props.setItemId(0);
        this.props.makeSearch(this.state.searchText);
        this.setState(prevState => ({
            ...prevState,
            previousSearchTerm: prevState.searchText,
                searchText: ""
        }))
    }



    render() {

        console.log(this.props);
    
        return (
            <div className="h-100">
                {/* <h1>
                    Manager
                </h1> */}

                <NuBayManagerNavBar
                onSearchPressed={this.makeSearchHappen}
                searchText={this.state.searchText}
                onSearchTextChanged= {this.searchStringChanged}
                />





                <div className="container-fluid">
                    <Router>
                           <Route exact path="/item-detail/:id" component={ItemDetail}/>

                    <Route exact path ="/" render={(props) =>
                        <NuBayTable
                            {...props}
                            items={this.props.items}
                            setItemIdFunc={this.props.setItemId}
                            showItemDetail={this.props.showItemDetail}
                            searchResult={this.state.previousSearchTerm}

                            />}/>
                    <Route exact path ="/list-new-item" render={(props) =>
                                            <ListItemComponent
                                                {...props}

                                                />}/>
                    <Route exact path ="/home" render={(props) =>
                                    <HomePage
                                      {...props}

                                      />}/>

            </Router>

            </div>

            </div>

        )
    }
}