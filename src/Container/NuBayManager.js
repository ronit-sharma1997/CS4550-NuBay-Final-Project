import React, { Fragment } from 'react'

import NuBayManagerNavBar from "../Component/NuBayManagerNavBar";
import NuBayTable from "../Component/NuBayTable";
import ListItemComponent from '../Component/ListItemComponent'
import HomePage from '../Component/HomePage'
import ItemDetail from '../Component/ItemDetail';
import { BrowserRouter as Router, Route }
    from 'react-router-dom';
import LoginPage from "../Component/LoginPage";
import RegisterPage from "../Component/RegisterPage";
import ProfileTabs from "./ProfileTabs";

export default class NuBayManager extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        // debugger;
        console.log(this.props);

        return (
            <Router>
                <div className="h-100">

                    <Route exact path="/login" render={(props) => <LoginPage {...props}
                        setLoggedInUser={this.props.setLoggedInUser} />} />
                    <Route exact path="/register" render={(props) => <RegisterPage {...props} setLoggedInUser={this.props.setLoggedInUser} />} />


                    <Route exact path={["/details/:id", "/search/:searchTerm", "/home", "/", "/profile/:id",
                        "/profile",
                        "/list-new-item"]}
                        render={(props) =>
                            <NuBayManagerNavBar
                                {...props}
                                searchText={this.props.searchText}
                                onSearchTextChanged={this.props.searchStringChanged}
                                userInfo={this.props.userInfo}
                                loggedIn={this.props.loggedIn}
                                logOut={this.props.removeLoggedInUser}
                            />} />
                    <Route exact path="/profile/:id" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo} />} />

                    <Route exact path="/profile" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo} />} />

                    <Route exact path="/home"
                        component={HomePage}
                        render={(props) => <HomePage {...props} />}
                    />

                    <Route exact path="/details/:id" component={ItemDetail} />
                    <div style={{ 'backgroundColor': '#EAEDED' }}>
                        <Route exact path="/search/:searchTerm" render={(props) =>
                            <div>
                                <NuBayTable
                                    {...props}
                                    itemType="northeasternItem"
                                    loggedIn={this.props.loggedIn}
                                />
                                <NuBayTable
                                    {...props}

                                    itemType="ebay"
                                    loggedIn={this.props.loggedIn}
                                />
                            </div>} />

                    </div>
                    <Route exact path="/list-new-item" render={(props) =>
                        <ListItemComponent
                            {...props}
                        />} />

                </div>
            </Router>

        )
    }
}