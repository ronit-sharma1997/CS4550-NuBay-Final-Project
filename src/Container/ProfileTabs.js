import React from 'react'
import ProfileDetails from "../Component/ProfileDetails";
import ListingsDetails from "../Component/ListingsDetail";
import BookmarkDetails from "../Component/BookmarkDetails";

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0
        }
        console.log(Object.keys(this.props.match.params).length === 0)

    }


    selectTab = (tab) => {
        console.log("Selecting tab")
        console.log(tab)
        this.setState(prevState => ({
            ...prevState,
            selectedTab: tab
        }))

    }


    render() {
        let currentTab = this.props.location.state === undefined ? this.state.selectedTab : this.props.location.state.tab;
        let tabContent = <div></div>;
        let dataExists = Object.keys(this.props.userInfo).length !== 0;
        if(currentTab === 0) {
            tabContent = <ProfileDetails userInfo={this.props.userInfo} setLoggedInUser={this.props.setLoggedInUser} dataExists={dataExists}/>
        } else if (currentTab === 1) {
            var title = Object.keys(this.props.match.params).length === 0 ? 'My Listings': "Seller's Listings";
            tabContent = <ListingsDetails items={this.props.userInfo.items} services={this.props.userInfo.serviceItems} dataExists={dataExists} headingTitle={title} userRole={this.props.userInfo.userRole}/>
        } else if (currentTab === 2) {
            tabContent = <BookmarkDetails items={this.props.userInfo.bookmarkedItems} ebayItems={this.props.userInfo.bookmarkedEbayItems === null || this.props.userInfo.bookmarkedEbayItems === "" ? [] : this.props.userInfo.bookmarkedEbayItems.split(",")} dataExists={dataExists} headingTitle="My Bookmarks" userRole={this.props.userInfo.userRole}/>
        }
        return(

            <div className="container-fluid d-flex min-vh-100 flex-column">
                <div className="row bg-light flex-fill fill d-flex">
                    <div className="col-5 border-right" align={"center"}>
                        <h1 className="mt-2">{Object.keys(this.props.match.params).length === 0 ? 'My Profile': "Seller's Profile"}</h1>
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
                            {Object.keys(this.props.match.params).length === 0 &&<button className="w-50 btn align-bottom btn btn-danger btn-block wbdv-button wbdv-logout"
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