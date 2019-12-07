import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayTable from "../Component/NuBayTable";
import ListItemComponent from '../Component/ListItemComponent'
import ItemDetail from '../Component/ItemDetail';
import {BrowserRouter as Router,Route}
	from 'react-router-dom';
import LoginPage from "../Component/LoginPage";
import RegisterPage from "../Component/RegisterPage";
import ProfileTabs from "./ProfileTabs";

export default class NuBayManager extends React.Component {

    constructor (props) {
        super(props)
    }


    render() {

        console.log(this.props);
    
        return (
            <Router>
            <div className="h-100">


                <Route exact path="/login" render={(props) => <LoginPage {...props} setLoggedInUser={this.props.setLoggedInUser}/>}/>
                <Route exact path="/register" render={(props) => <RegisterPage {...props} setLoggedInUser={this.props.setLoggedInUser}/>}/>

                <Route exact path={["/details/:id", "/search/:searchTerm", "/", "/profile/:id", "/list-new-item"]} render={(props) =>
                    <NuBayManagerNavBar
                        {...props}
                        searchText={this.props.searchText}
                        onSearchTextChanged= {this.props.searchStringChanged}
                    />}/>
                <Route exact path="/profile/:id" component={ProfileTabs}/>

                <Route exact path="/profile" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo}/>}/>




                           <Route exact path="/details/:id" component={ItemDetail}/>
                <div style={{'backgroundColor': '#EAEDED'}}>
                    <Route exact path ="/search/:searchTerm" render={(props) =>
                        <NuBayTable
                            {...props}
                            />}/>
                </div>
                    <Route exact path ="/list-new-item" render={(props) =>
                                            <ListItemComponent
                                                {...props}
                                                />}/>




            </div>
            </Router>

        )
    }
}