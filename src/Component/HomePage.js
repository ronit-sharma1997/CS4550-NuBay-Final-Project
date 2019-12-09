import React from 'react'
import HomeSection from './HomeSection'
import HomePageBanner from './HomePageBanner'

import UserService from '../services/UserService'
import ItemService from '../services/ItemService'
import ServiceItemService from '../services/ServiceItemService'

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
            recent_neu_items: [],
            recent_neu_services: []
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

    componentDidMount () {
        this.itemService.findFiveRecentItems(this.setRecentNeuItems);
        this.serviceItemService.findFiveRecentServiceItems(this.setRecentNeuServiceItems);
        if (this.state.loggedIn) {
            this.userService.getRecentBookmarkedItemsForUser(this.state.userId, this.setBookmarkedNeuItems)
        }
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
                        <p>We created a website for any Northeastern student looking to purchase a product or service. Our site allows you to search both Ebay and our inter-Northeastern marketplace for any item or service we can find.</p>
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
                                <a href="#" className="btn btn-primary">Click here!</a>
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
                                <a href="#" className="btn btn-primary">Click here!</a>
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
                                <a href="#" className="btn btn-primary">Click here!</a>
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
                            type={"SERVICE_TYPE"}> </HomeSection>
                    </div>
                </section>

            </div>
        )
    }
}