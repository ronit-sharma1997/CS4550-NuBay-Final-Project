import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayManagerHeaderBar from "../Component/NuBayManagerHeaderBar";


export default class NuBayManager extends React.Component {

    constructor (props) {
        super(props)

    }

    inputChangeHandler = (event) => {
        this.setState({
            newCourse: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
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
                    class="floating-action-button"
                >
                    <i class="fa fa-plus-circle fa-2x"></i>
                </button>

            </Fragment>
        )
    }
}