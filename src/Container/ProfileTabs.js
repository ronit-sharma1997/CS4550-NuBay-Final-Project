import React from 'react'
import ProfileDetails from "../Component/ProfileDetails";
import ListingsDetails from "../Component/ListingsDetail";

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0
        }
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
        let tabContent = <div></div>;
        if(this.state.selectedTab === 0) {
            tabContent = <ProfileDetails userInfo={this.props.userInfo} dataExists={Object.keys(this.props.userInfo).length !== 0}/>
        } else if (this.state.selectedTab === 1) {
            tabContent = <ListingsDetails items={this.props.userInfo.items} headingTitle="My Listings"/>
        } else if (this.state.selectedTab === 2) {
            tabContent = <ListingsDetails items={this.props.userInfo.items} headingTitle="My Bookmarks"/>
        }
        return(

            <div className="container-fluid d-flex min-vh-100 flex-column">
                <div className="row bg-light flex-fill fill d-flex">
                    <div className="col-5 border-right" align={"center"}>
                        <h1 className="mt-2">Profile</h1>
                        <div className="nav flex-column nav-pills w-50 align-content-center" role="tablist" aria-orientation="vertical">
                            <a className={this.state.selectedTab === 0 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(0)}>My Details</a>
                            <a className={this.state.selectedTab === 1 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(1)}>My Listings</a>
                            <a className={this.state.selectedTab === 2 ? "nav-link mt-5 active" : "nav-link mt-5"} data-toggle="pill" href="#" role="tab"
                               onClick={() => this.selectTab(2)}>My Bookmarks</a>
                        </div>

                        <div className="col-sm-5 mt-5 border-top">
                            <a href="#">
                                <div className="btn-group">
                                    <button className="btn">Privacy Policy</button>
                                </div>
                            </a>
                            <button className="w-50 btn align-bottom btn btn-danger btn-block wbdv-button wbdv-logout"
                            >Log Out</button>
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