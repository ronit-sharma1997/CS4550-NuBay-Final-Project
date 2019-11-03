import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayManagerHeaderBar from "../Component/NuBayManagerHeaderBar";
import NuBayTable from "../Component/NuBayTable";


export default class NuBayManager extends React.Component {

    constructor (props) {
        super(props)
     

    }

    inputChangeHandler = (event) => {
        this.setState({
            
        })
    }

    render() {
    
        return (
            <Fragment>
                {/* <h1>
                    Manager
                </h1> */}

                <NuBayManagerNavBar
                />

                <NuBayManagerHeaderBar/>

                <button
                    className="floating-action-button"
                    onClick={(text) => this.props.makeSearch("")}>
                    <i class="fa fa-plus-circle fa-2x"></i>
                </button>
                <NuBayTable items={this.props.items} />
            </Fragment>
        )
    }
}