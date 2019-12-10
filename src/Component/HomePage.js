import React from 'react'
import HomeSection from './HomeSection'
import HomePageBanner from './HomePageBanner'

import UserService from '../services/UserService'
import ItemService from '../services/ItemService'
import ServiceItemService from '../services/ServiceItemService'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.userService = UserService.getInstance();
        this.itemService = ItemService.getInstance();
        this.serviceItemService = ServiceItemService.getInstance();

        console.log(this.props)
        console.log(this.props.location.state)

        let _loggedIn = false;
        let _userId = 1;

        if (this.props.location.state) {
            _loggedIn = this.props.location.state.logged_in;
            _userId = this.props.location.state.user_id;
        }

        this.state = {
            loggedIn: _loggedIn,
            userId: _userId,
            bookmarked_neu_items: [],
            trending_neu_items: [],
            recent_neu_items: [],
            recent_neu_services: [],
            isOpen: false
        }
    }

    neu_logo_url = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Northeastern_Huskies_primary_logo.svg/1200px-Northeastern_Huskies_primary_logo.svg.png";

    setBookmarkedNeuItems = (bookmarkedItems) => {
        this.setState(prevState => ({
            ...prevState,
            bookmarked_neu_items: bookmarkedItems
        })
        );
    }

    setRecentNeuItems = (recentNeuItems) => {
        this.setState(prevState => ({
            ...prevState,
            recent_neu_items: recentNeuItems
        })
        );
    }

    setRecentNeuServiceItems = (recentNeuServices) => {
        this.setState(prevState => ({
            ...prevState,
            recent_neu_services: recentNeuServices
        })
        );
    }

    setTrendingNeuItems = (trendingNeuItems) => {
        this.setState(prevState => ({
            ...prevState,
            trending_neu_items: trendingNeuItems
        })
        );
    }

    componentDidMount() {
        this.itemService.findFiveRecentItems(this.setRecentNeuItems);
        this.serviceItemService.findFiveRecentServiceItems(this.setRecentNeuServiceItems);
        this.itemService.findTrendingItems(this.setTrendingNeuItems);
        if (this.state.loggedIn) {
            this.userService.getRecentBookmarkedItemsForUser(this.state.userId, this.setBookmarkedNeuItems)
        }
    }

    toggle() {
        this.setState(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }))

    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (

            <div className="container w-100 h-100">
                <header className="home-header py-5 bg-image-full">
                    <img className="home-logo img-fluid d-block mx-auto" src={this.neu_logo_url} alt="" />
                </header>

                <section className="py-5">
                    <div className="container">
                        <h1>Welcome to NuBay</h1>
                        <p className="lead">A one-stop-shop for Northeastern Students.</p>
                        <p>We created a website for any Northeastern student looking to purchase a product or service. Our site allows you to search both Ebay and our inter-Northeastern marketplace for any item or service we can find. We also allow you to sign up as a seller (only if you are a northeastern student), and post items or services to be sold.</p>
                        <a href="#" onClick={() => this.toggle()}>View Our Privacy Policy!</a>

                    </div>
                </section>

                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="home-card card h-100">
                            <img className="home-card-img card-img-top" src="https://cdn.iconscout.com/icon/free/png-256/ebay-4-226578.png" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Search Items on Ebay</h4>
                                <p className="card-text">Search for any item, and we'll do our best to find it on Ebay!</p>
                            </div>
                            <div className="card-footer">
                                <a href="/search" className="btn btn-primary">Click here!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="home-card card h-100">
                            <img className="home-card-img card-img-top" src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Shopping-cart-logo-by-DEEMKA-STUDIO-580x406.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Search Items at NEU</h4>
                                <p className="card-text">Search for items at Northeastern!</p>
                            </div>
                            <div className="card-footer">
                                <a href="/search" className="btn btn-primary">Click here!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="home-card card h-100">
                            <img className="home-card-img card-img-top" src="http://www.logoinlogo.com/list-logo/service.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Search Services at NEU</h4>
                                <p className="card-text">Search for services at Northeastern!</p>
                            </div>
                            <div className="card-footer">
                                <a href="/search" className="btn btn-primary">Click here!</a>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.loggedIn &&
                    <section className="py-5">
                        <div className="row border-bottom mb-2">
                            <HomeSection
                                title={"Your Bookmarked NEU Items"}
                                items={this.state.bookmarked_neu_items}
                                desc={"Here are the most recent Northeastern items that you have bookmarked."}
                                type={"northeasternItem"}> </HomeSection>
                        </div>
                    </section>
                }

                <section className="py-5">
                    <div className="row border-bottom mb-2">
                        <HomeSection
                            title={"Trending NEU Items"}
                            items={this.state.trending_neu_items}
                            desc={"Here are the hottest NEU Items, in order of most bookmarked to least from left to right."}
                            type={"northeasternItem"}> </HomeSection>
                    </div>
                </section>

                <section className="py-5">
                    <div className="row border-bottom mb-2">
                        <HomeSection
                            title={"Recent NEU Items"}
                            items={this.state.recent_neu_items}
                            desc={"Here are the most recent Northeastern items that have been posted."}
                            type={"northeasternItem"}> </HomeSection>
                    </div>
                </section>

                <section className="py-5">
                    <div className="row border-bottom mb-2">
                        <HomeSection
                            title={"Recent NEU Services"}
                            items={this.state.recent_neu_services}
                            desc={"Here are the most recent Northeastern services that have been posted."}
                            type={"northeasternService"}> </HomeSection>
                    </div>
                </section>
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
    }
}