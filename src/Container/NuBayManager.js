import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayManagerHeaderBar from "../Component/NuBayManagerHeaderBar";
import NuBayTable from "../Component/NuBayTable";
import ItemDetail from '../Component/ItemDetail';

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

                <div className={this.props.showItemDetail ? "d-none" : ""}>
                    <NuBayManagerHeaderBar searchResult={this.state.previousSearchTerm}/>
                </div>

                <button
                    className="floating-action-button"
                    onClick={this.props.makeSearch}>
                    <i className="fa fa-plus-circle fa-2x"></i>
                </button>

                <div className="container-fluid">

                    <div className={this.props.showItemDetail ? "d-none" : ""}>
                        <NuBayTable 
                            items={this.props.items}
                            setItemIdFunc={this.props.setItemId}
                            />
                    </div>

                    <div className={this.props.showItemDetail ? "" : "d-none"}>
                        <ItemDetail/>
                    </div>

                </div>

            </div>
        )
    }
}