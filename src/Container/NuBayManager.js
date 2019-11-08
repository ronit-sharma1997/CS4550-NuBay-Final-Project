import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayManagerHeaderBar from "../Component/NuBayManagerHeaderBar";
import NuBayTable from "../Component/NuBayTable";


export default class NuBayManager extends React.Component {

    constructor (props) {
        super(props)
        this.searchStringChanged = this.searchStringChanged.bind(this)
        this.state = {
        searchText : ""
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
        this.props.makeSearch(this.state.searchText)
    }

    render() {
    
        return (
            <Fragment className="h-100">
                {/* <h1>
                    Manager
                </h1> */}

                <NuBayManagerNavBar
                onSearchPressed={this.makeSearchHappen}
                searchText={this.state.searchText}
                onSearchTextChanged= {this.searchStringChanged}
                />

                <NuBayManagerHeaderBar/>

                <button
                    className="floating-action-button"
                    onClick={this.props.makeSearch}>
                    <i class="fa fa-plus-circle fa-2x"></i>
                </button>
                <div className="container-fluid">
                <NuBayTable className="h-75" items={this.props.items} />
                </div>
            </Fragment>
        )
    }
}