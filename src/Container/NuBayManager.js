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


                <Route exact path="/login" render={(props) => <LoginPage {...props} setLoggedInUser={this.props.setLoggedInUser}/>}/>
                <Route exact path="/register" render={(props) => <RegisterPage {...props} setLoggedInUser={this.props.setLoggedInUser}/>}/>

                <Route exact path={["/details/:id", "/search/:searchTerm", "/", "/profile/:id",
                "/add/:type", "/profile", "/home", '/editService/:serviceid',"/editItem/:itemid"]} render={(props) =>
                    <NuBayManagerNavBar
                        {...props}
                        bookmarkCount={Object.keys(this.props.userInfo).length === 0 ? 0 : this.props.userInfo.bookmarkedItems.length + (this.props.userInfo.bookmarkedEbayItems === "" || this.props.userInfo.bookmarkedEbayItems === null ? 0 : this.props.userInfo.bookmarkedEbayItems.split(",").length)}
                        searchText={this.props.searchText}
                        onSearchTextChanged= {this.props.searchStringChanged}
                        userInfo={this.props.userInfo}
                        loggedIn={this.props.loggedIn}
                        logOut={this.props.removeLoggedInUser}
                />}/>
                <Route exact path="/profile/:id" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo}/>}/>

                <Route exact path="/profile" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo} setLoggedInUser={this.props.setLoggedInUser}/>}/>




                           <Route exact path="/details/:id" component={ItemDetail}/>
                <div style={{'backgroundColor': '#EAEDED'}}>
                    <Route exact path ="/search/:searchTerm" render={(props) =>
                        <div>
                            <NuBayTable
                                {...props}
                                userId={this.props.userInfo.id}
                                itemType="northeasternItem"
                                bookmarkIds={Object.keys(this.props.userInfo).length === 0 ? [] : this.props.userInfo.bookmarkedItems}
                                loggedIn={this.props.loggedIn}
                                setLoggedInUser={this.props.setLoggedInUser}
                            />
                            <NuBayTable
                                {...props}
                                userId={this.props.userInfo.id}
                                itemType="ebay"
                                bookmarkIds={(Object.keys(this.props.userInfo).length === 0 || this.props.userInfo.bookmarkedEbayItems === null) ? [] : this.props.userInfo.bookmarkedEbayItems.split(",")}
                                loggedIn={this.props.loggedIn}
                                setLoggedInUser={this.props.setLoggedInUser}
                            />
                        </div>}/>
                </div>
                    <Route exact path ="/add/:type" render={(props) =>
                                            <ListItemComponent
                                                {...props}
                                                />}/>
                    <Route exact path ="/editItem/:itemid" render={(props) =>
                                  <ListItemComponent
                                   {...props}
                            />}/>
                     <Route exact path ="/editService/:serviceid" render={(props) =>
                           <ListItemComponent
                           {...props}
                        />}/>
                    <Route exact path ="/home" render={(props) =>
                                    <HomePage
                                      {...props}

                                      />}/>




            </div>
            </Router>

        )
    }
}