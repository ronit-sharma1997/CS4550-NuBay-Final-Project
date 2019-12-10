import React from 'react'
import ProfileDetails from "../Component/ProfileDetails";
import ListingsDetails from "../Component/ListingsDetail";
import BookmarkDetails from "../Component/BookmarkDetails";
import UserService from "../services/UserService";

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            currentUser: true
        }
        this.userService = UserService.getInstance()
        this.setProfileToView = this.setProfileToView.bind(this)
        if(Object.keys(this.props.match.params).length !== 0) {
            this.userService.findUserById(this.props.match.params.id, this.setProfileToView)
        }

        props.hideNavBar();

    }

    setProfileToView(user){
        this.setState(prevState => ({
            ...prevState,
            profileToView: user,
            currentUser: false
        }))
    }

    selectTab = (tab) => {
        console.log("Selecting tab")
        console.log(tab)
        this.setState(prevState => ({
            ...prevState,
            selectedTab: tab
        }))

    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            if(Object.keys(this.props.match.params).length !== 0) {
                this.userService.findUserById(this.props.match.params.id, this.setProfileToView)
            } else {
                this.setState(prevState => ({
                    ...prevState,
                    currentUser: true
                }))
            }
            nextProps.hideNavBar();
        }
    }

    logOutSelected() {
        this.props.hideNavBar()
        this.props.logOut();
        this.props.history.push('/')
    }

    render() {
        let currentTab = this.props.location.state === undefined ? this.state.selectedTab : this.props.location.state.tab;
        let tabContent = <div></div>;
        let userInfo = this.state.currentUser ? this.props.userInfo : this.state.profileToView
        let dataExists = userInfo === undefined ? false : Object.keys(userInfo).length !== 0;
        if(currentTab === 0) {
            tabContent = <ProfileDetails userInfo={userInfo} viewOnly={Object.keys(this.props.match.params).length !== 0} setLoggedInUser={this.props.setLoggedInUser} dataExists={dataExists} loggedIn={this.props.loggedIn} />
        } else if (currentTab === 1) {
            var title = Object.keys(this.props.match.params).length === 0 ? 'My Listings': "Seller's Listings";
            tabContent = <ListingsDetails items={userInfo.items} services={userInfo.serviceItems} dataExists={dataExists} headingTitle={title} viewOnly={Object.keys(this.props.match.params).length !== 0}/>
        } else if (currentTab === 2) {
            tabContent = <BookmarkDetails items={userInfo.bookmarkedItems} ebayItems={userInfo.bookmarkedEbayItems === null || userInfo.bookmarkedEbayItems === "" ? [] : userInfo.bookmarkedEbayItems.split(",")} dataExists={dataExists} headingTitle="My Bookmarks" userId={userInfo.id}/>
        }
        return(

            <div className="container-fluid d-flex min-vh-100 flex-column">
                <div className="row bg-light flex-fill fill d-flex">
                    <div className="col-5 border-right" align={"center"}>
                        <h1 className="mt-2">{Object.keys(this.props.match.params).length === 0 ? 'My Profile': `${userInfo.firstName}'s Profile`}</h1>
                        <div className="nav flex-column nav-pills w-50 align-content-center" role="tablist" aria-orientation="vertical">
                            <a className={currentTab === 0 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(0)}>{Object.keys(this.props.match.params).length === 0 ? 'My': "Seller's"} Details</a>
                            {Object.keys(this.props.match.params).length === 0 && this.props.userInfo.userRole === "SELLER" && <a className={this.state.selectedTab === 1 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(1)}>My Listings</a>}
                            {Object.keys(this.props.match.params).length !== 0 && <a className={currentTab === 1 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                                                                                                                                  onClick={() => this.selectTab(1)}>Seller's Listings</a>}
                            {Object.keys(this.props.match.params).length === 0 && <a className={currentTab === 2 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(2)}>My Bookmarks</a>}
                        </div>

                        <div className="col-sm-5 mt-5 border-top">
                            <a href="#">
                                <div className="btn-group">
                                    <button className="btn">Privacy Policy</button>
                                </div>
                            </a>
                            {Object.keys(this.props.match.params).length === 0 &&<button className="w-50 btn align-bottom btn btn-danger btn-block wbdv-button wbdv-logout" onClick={() => this.logOutSelected()}
                            >Log Out</button>}
                        </div>
                    </div>
                    <div className="col-7 border-left" align={"center"}>
                        <div className="tab-content">
                            {tabContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }}