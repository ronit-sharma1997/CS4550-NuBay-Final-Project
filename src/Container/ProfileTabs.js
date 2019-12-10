import React from 'react'
import ProfileDetails from "../Component/ProfileDetails";
import ListingsDetails from "../Component/ListingsDetail";
import BookmarkDetails from "../Component/BookmarkDetails";
import UserService from "../services/UserService";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            currentUser: true,
            isOpen: false
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

    toggle() {
        this.setState(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }))

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
                                    <button className="btn" onClick={() => this.toggle()}>Privacy Policy</button>
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
                <Modal className="w-100" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>NuBay Privacy Policy</ModalHeader>
                    <ModalBody>
                        <p>This privacy policy discloses the privacy and data practices for NuBay. This policy aims to notify you of the following: what data is going to be collected from you via the website (both identifiable and non-identifiable), what the data is going to be used for, with whom the data will be shared, your choices available regarding the use of your data, the security measures in place to protect your data, and what you can do to contact us further.</p>

                        <p>First, we would like to be open about the data that we are going to collect from you. When you create an account with us, you provide us with your first name, last name, email, and phone number -- all of which is stored in our database. When you bookmark an item or service, we store your user id along with the id of the item you have bookmarked. When you create an item or service to be sold, we store all of the pertinent information regarding that listing that you provide to us. The significant information for each listing that you provide is the following: your payment options, location, price, quantity, category, and refund policy.</p>

                        <p>Now, here’s what we do with the information you provide to us. From your account information, we do nothing, despite storing and having access to your email and phone number, which are heavily secured (more on this later in the document). From each time you bookmark an item, however, we do count the number of times that item has been bookmarked in a non-identifiable manner (meaning that we only look at the number of bookmarks for an item, not who has bookmarked said item) in order to determine our most-bookmarked items. These items tend to be best sellers, and we determine which items to post on the front page by how many times they have been bookmarked. In terms of the personal data that you provide to us when generating a listing, such as the listing location and payment options, we do not use this information and do not plan on selling this information to interested third parties. Your safety and security is our utmost concern.</p>

                        <p>The data that you provide to us that has been mentioned in this document thus far is not shared in any form with any third parties. Although there are many interested groups in our data, we are not looking to sell this information at this point in time. In addition, we make a great effort to maintain a fortified layer of security for your data. All of our messages transmitted from our website to our servers is heavily encrypted, and we enlist the latest cyber security measures to ensure your privacy.</p>

                        <p>Lastly, if you have any further questions or concerns, or feel that we are not abiding by our own policies set forth in this document, please contact us at billah.s@husky.neu.edu, sharma.ro@husky.neu.edu, or dahan.a@husky.neu.edu.</p>

                        <p>Thank you for using NuBay! We wouldn’t be here without you.</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.toggle()}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }}