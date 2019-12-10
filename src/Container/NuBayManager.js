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
        console.log(this.props.loggedIn);

        return (
            <Router>
            <div className="h-100">


                <Route exact path="/login" render={(props) => <LoginPage {...props} setLoggedInUser={this.props.setLoggedInUser} hideNavBar={this.props.hideNavBar}/>}/>
                <Route exact path="/register" render={(props) => <RegisterPage {...props} setLoggedInUser={this.props.setLoggedInUser} hideNavBar={this.props.hideNavBar}/>}/>

                <Route exact path={["/details/:id", "/search/:searchTerm", "/", "/profile/:id",
                "/add/:type", "/profile", "/home", '/editService/:serviceid',"/editItem/:itemid", "/search"]} render={(props) =>
                    <NuBayManagerNavBar
                        {...props}
                        bookmarkCount={Object.keys(this.props.userInfo).length === 0 ? 0 : this.props.userInfo.bookmarkedItems.length + (this.props.userInfo.bookmarkedEbayItems === "" || this.props.userInfo.bookmarkedEbayItems === null ? 0 : this.props.userInfo.bookmarkedEbayItems.split(",").length)}
                        searchText={this.props.searchText}
                        onSearchTextChanged= {this.props.searchStringChanged}
                        userInfo={this.props.userInfo}
                        loggedIn={this.props.loggedIn}
                        logOut={this.props.removeLoggedInUser}
                        searchResultCount={this.props.currentSearchCount}
                        resetCount={this.props.resetSearchCount}
                        displayHeader={this.props.showHeaderBar}
                        searchKeyword={this.props.searchKeyword}
                        hideNavBar={this.props.hideNavBar}
                />}/>
                <Route exact path="/profile/:id" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo} loggedIn={this.props.loggedIn} hideNavBar={this.props.hideNavBar}/>}/>

                <Route exact path="/profile" render={(props) => <ProfileTabs {...props} userInfo={this.props.userInfo} setLoggedInUser={this.props.setLoggedInUser} loggedIn={this.props.loggedIn} hideNavBar={this.props.hideNavBar} logOut={this.props.removeLoggedInUser}/>}/>

                           <Route exact path="/details/:id" render={(props) => <ItemDetail {...props}
                                                                                           userInfo={this.props.userInfo}
                                                                                            loggedIn={this.props.loggedIn}
                                                                                           setLoggedInUser={this.props.setLoggedInUser} hideNavBar={this.props.hideNavBar}/>}/>
                <div style={{'backgroundColor': '#EAEDED'}}>
                    <Route exact path ="/search/:searchTerm" render={(props) =>
                        <div>
                            <NuBayTable
                                {...props}
                                userId={this.props.userInfo.id}
                                itemType="northeasternService"
                                bookmarkIds={[]}
                                loggedIn={this.props.loggedIn}
                                setLoggedInUser={this.props.setLoggedInUser}
                                addToSearchCount={this.props.addToSearchCount}
                                setSearch={this.props.setSearchKeyword}
                                showNavBar={this.props.showNavBar}
                            />
                            <NuBayTable
                                {...props}
                                userId={this.props.userInfo.id}
                                itemType="northeasternItem"
                                bookmarkIds={Object.keys(this.props.userInfo).length === 0 ? [] : this.props.userInfo.bookmarkedItems}
                                loggedIn={this.props.loggedIn}
                                setLoggedInUser={this.props.setLoggedInUser}
                                addToSearchCount={this.props.addToSearchCount}
                                setSearch={this.props.setSearchKeyword}
                                showNavBar={this.props.showNavBar}
                            />
                            <NuBayTable
                                {...props}
                                userId={this.props.userInfo.id}
                                itemType="ebay"
                                bookmarkIds={(Object.keys(this.props.userInfo).length === 0 || this.props.userInfo.bookmarkedEbayItems === null) ? [] : this.props.userInfo.bookmarkedEbayItems.split(",")}
                                loggedIn={this.props.loggedIn}
                                setLoggedInUser={this.props.setLoggedInUser}
                                addToSearchCount={this.props.addToSearchCount}
                                setSearch={this.props.setSearchKeyword}
                                showNavBar={this.props.showNavBar}
                            />
                        </div>}/>
                </div>
                    <Route exact path ="/add/:type" render={(props) =>
                                            <ListItemComponent
                                                {...props}
                                                userId={this.props.userInfo.id}
                                                hideNavBar={this.props.hideNavBar}
                                                />}/>
                    <Route exact path ="/editItem/:itemid" render={(props) =>
                                  <ListItemComponent
                                  userId={this.props.userInfo.id}
                                  hideNavBar={this.props.hideNavBar}
                                   {...props}
                            />}/>
                     <Route exact path ="/editService/:serviceid" render={(props) =>
                           <ListItemComponent
                               hideNavBar={this.props.hideNavBar}
                           {...props}
                        />}/>
                    <Route exact path ="/" render={(props) =>
                                    <HomePage
                                        hideNavBar={this.props.hideNavBar}
                                      {...props}

                                      />}/>




            </div>
            </Router>

        )
    }
}