import React from 'react'
import ProfileDetails from "../Component/ProfileDetails";
import ListingsDetails from "../Component/ListingsDetail";

export default class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            listingItems: [
                {
                    "itemId": "132883277485",
                    "title": "New 11 PCS Harry Potter Hermione Dumbledore Snape Magic Wands With Box Halloween",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/New-11-PCS-Harry-Potter-Hermione-Dumbledore-Snape-Magic-Wands-Box-Halloween-/132883277485",
                    "galleryURL": "https://thumbs2.ebaystatic.com/m/mGEN-wda2-6FLyzPvzzrqSQ/140.jpg",
                    "location": "San Francisco,CA,USA",
                    "__value__": "USD 18.88",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "arocryst"
                },
                {
                    "itemId": "261357322321",
                    "title": "US Seller - NEW Harry Potter Time Turner Hermione Granger Rotating Necklace F/S",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/US-Seller-NEW-Harry-Potter-Time-Turner-Hermione-Granger-Rotating-Necklace-F-S-/261357322321",
                    "galleryURL": "https://thumbs2.ebaystatic.com/m/m7WMNLn-yZq51auMhKwQ_TA/140.jpg",
                    "location": "Harrisonburg,VA,USA",
                    "__value__": "USD 7.89",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "bolwevil"
                },
                {
                    "itemId": "253437941558",
                    "title": "HOT New Harry Potter 14.5\" Magical Wand Replica Cosplay Halloween Gift In Box",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/HOT-New-Harry-Potter-14-5-Magical-Wand-Replica-Cosplay-Halloween-Gift-Box-/253437941558",
                    "galleryURL": "https://thumbs3.ebaystatic.com/m/m4ym9tDA3xNgNPBLqCjpGIA/140.jpg",
                    "location": "Ontario,CA,USA",
                    "__value__": "USD 8.2",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "dd707city"
                },
                {
                    "itemId": "362222826329",
                    "title": "The Marauder's Map Hogwarts School of Witchcraft & Wizardry - Harry Potter, NEW!",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/Marauders-Map-Hogwarts-School-Witchcraft-Wizardry-Harry-Potter-NEW-/362222826329",
                    "galleryURL": "https://thumbs2.ebaystatic.com/m/my_kEqzf9tDxvHeJOYTg8Qg/140.jpg",
                    "location": "Glen Cove,NY,USA",
                    "__value__": "USD 7.99",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "gold_trader_usa"
                },
                {
                    "itemId": "292906987701",
                    "title": "New 11PCS Harry Potter Hermione Dumbledore Voldemort Magic Wands Halloween Gift",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/New-11PCS-Harry-Potter-Hermione-Dumbledore-Voldemort-Magic-Wands-Halloween-Gift-/292906987701",
                    "galleryURL": "https://thumbs2.ebaystatic.com/m/mdIlvaI-6PVHC8kF1nK8dcg/140.jpg",
                    "location": "San Francisco,CA,USA",
                    "__value__": "USD 18.88",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "sfaegis"
                },
                {
                    "itemId": "133189567901",
                    "title": "Harry Potter Magic Wand LED Light-up Dumbledore Lord Voldemort Halloween Cosplay",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/Harry-Potter-Magic-Wand-LED-Light-up-Dumbledore-Lord-Voldemort-Halloween-Cosplay-/133189567901",
                    "galleryURL": "https://thumbs2.ebaystatic.com/m/mGLImaYqYuT-UjYlpT8fa8g/140.jpg",
                    "location": "San Francisco,CA,USA",
                    "__value__": "USD 12.99",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "arocryst"
                },
                {
                    "itemId": "362203691880",
                    "title": "18K Gold Plated Stainless Steel Harry Potter Time Turner Necklace hour Hourglass",
                    "categoryName": "Necklaces & Pendants",
                    "viewItemURL": "https://www.ebay.com/itm/18K-Gold-Plated-Stainless-Steel-Harry-Potter-Time-Turner-Necklace-hour-Hourglass-/362203691880",
                    "galleryURL": "https://thumbs1.ebaystatic.com/m/ml9N7O1n4ES-4HxX9ZpGkdA/140.jpg",
                    "location": "Brooklyn,NY,USA",
                    "__value__": "USD 7.95",
                    "shippingCost": "USD 0.0",
                    "condition": "New with tags",
                    "sellerName": "diversedeals"
                },
                {
                    "itemId": "132957135472",
                    "title": "14 PCS Harry Potter wand Magical wands rings necklace decorate Gift cosplay game",
                    "categoryName": "Harry Potter",
                    "viewItemURL": "https://www.ebay.com/itm/14-PCS-Harry-Potter-wand-Magical-wands-rings-necklace-decorate-Gift-cosplay-game-/132957135472",
                    "galleryURL": "https://thumbs1.ebaystatic.com/m/mGWoPnpxsef3fj3VevpWG5Q/140.jpg",
                    "location": "San Francisco,CA,USA",
                    "__value__": "USD 19.89",
                    "shippingCost": "USD 0.0",
                    "condition": "New",
                    "sellerName": "arocryst"
                }
            ]
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
            tabContent = <ProfileDetails/>
        } else if (this.state.selectedTab === 1) {
            tabContent = <ListingsDetails items={this.state.listingItems} headingTitle="My Listings"/>
        } else if (this.state.selectedTab === 2) {
            tabContent = <ListingsDetails items={this.state.listingItems} headingTitle="My Bookmarks"/>
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