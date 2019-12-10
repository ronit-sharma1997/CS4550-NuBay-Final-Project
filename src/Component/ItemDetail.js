import React, { Fragment } from 'react'
import NuBayService from '../services/NuBayService'
import ImageCarosel from './ImageCarosel'
import {BrowserRouter as Router,Route, Link}
	from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Constants from '../constants/constants';
import ItemCard from './ItemCard'
import StarRatings from 'react-star-ratings';
import ItemService from '../services/ItemService';
import ServiceItemService from '../services/ServiceItemService';


class ItemDetail extends React.Component {

    constructor(props) {
        debugger;
        super(props);
        this.type = "ebay"
        this.nuBayService = NuBayService.getInstance()
        this.itemService = ItemService.getInstance()
        this.serviceItemService = ServiceItemService.getInstance()
        this.setItem = this.setItem.bind(this);
        this.setRelatedItems = this.setRelatedItems.bind(this);
        this.getImageListForItem = this.getImageListForItem.bind(this);
        this.constants = Constants.getInstance()
        this.responsive = {
               superLargeDesktop: {
                 // the naming can be any, depends on you.
                 breakpoint: { max: 4000, min: 3000 },
                 items: 5,
               },
               desktop: {
                 breakpoint: { max: 3000, min: 992 },
                 items: 5,
               },
               tablet: {
                 breakpoint: { max: 992, min: 768 },
                 items: 3,
               },
               medium: {
                 breakpoint: { max: 768, min: 576 },
                  items: 3,
                },

               mobile: {
                 breakpoint: { max: 576, min: 0 },
                 items: 2,
               },
             }

        this.state = {
        itemType:"",
        item: {
              },
        seller:{},
        relatedItems: []

        }

        if(props.match) {
        if(this.props.match.params.id.includes("e")) {
        var id = this.props.match.params.id.substring(1)
        this.nuBayService.getEbayItemById(id, this.setItem)
        this.type = "ebay"
        }
        else if(this.props.match.params.id.includes("i")){
        var id = this.props.match.params.id.substring(1)
        this.itemService.findItemById(id, this.setItem)
        this.type = "northeasternItem"
         }
        else if(this.props.match.params.id.includes("s")) {
         var id = this.props.match.params.id.substring(1)
         this.type = "northeasternService"
         this.serviceItemService.findServiceItemById(id, this.setItem)
        }

        }

    }

    setItem(item) {
    if(this.type == "ebay") {
        this.nuBayService.getEbayItemByCategory(item.categoryId, this.setRelatedItems)
    }
    else {
        this.itemService.findSimilarItems(item.categoryName, this.setRelatedItems)
    }

        this.setState(prevState => ({
          ...prevState,
          item: item,
          itemType: this.type,

        }))
      }

    getImageListForItem() {
        var imageSrcs = []
        debugger;
        if(this.state.item.image1) {
            imageSrcs.push("data:image/png;base64,".concat(this.state.item.image1))
        }
        if(this.state.item.image2) {
            imageSrcs.push("data:image/png;base64,".concat(this.state.item.image2))
        }
        if(this.state.item.image3) {
            imageSrcs.push("data:image/png;base64,".concat(this.state.item.image3))
        }
        return imageSrcs
    }

    setRelatedItems(items) {

    this.setState(prevState => ({
              ...prevState,
              relatedItems: items.filter(item => item.itemId != this.state.item.itemId)
      }))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id != nextProps.match.params.id) {
            this.nuBayService.getEbayItemById(nextProps.match.params.id, this.setItem)
        }
    }

    render() {
        return (
            <div class="container-fluid">

                <div className=" mt-2 row">
                    <div className="col-5 h-25 mh-25">
                    <div className="row detail-image">
                    <div className="col-12 h-100">
                        <ImageCarosel className="mh-100"images={this.state.item.imageUrl ? this.state.item.imageUrl
                        : this.getImageListForItem()} />
                        </div>
                        </div>
                    <div className="row mt-3">
                    <div className="col-10">
                    <div className="mb-1">
                    <b className="more-details-font"> More Details </b>
                    </div>
                    <div>
                     <ul>
                     {this.type != "northeasternService" &&
                     <li className="more-detail-items"> {this.state.item.refundPolicy} </li>}
                     <li className="more-detail-items"> Payment Methods Accepted:
                    {this.state.item.paymentOptions ?
                    this.state.item.paymentOptions:
                    "None"}</li>
                     <li className="more-detail-items"> Shipped From: {this.state.item.location} </li>
                     </ul>

                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-7">
                    <div className="col-12">
                        <div className="item-detail-next-to-image">
                            <b className="item-detail-name">{
                            this.state.item.title ? this.state.item.title : "" } </b>
                        </div>
                        </div>
                         <div className="col-12 mt-2">
                                                    <span className="item-categories">
                                                    {this.state.item.categoryName} </span>
                                                </div>
                        <div className="col-12 ml-0">
                        {this.state.itemType == "ebay" ?
                          <span>
                           <a href={"https://www.ebay.com/usr/".concat(this.state.item.sellerId)}>
                         <span className="seller-link text-dark">
                           {this.state.item.sellerId}
                           </span>
                              </a>
                              <StarRatings className="price-stars"
                                                              rating={this.constants.
                                                              getRatingValue(this.state.item)}
                                                              starRatedColor="gold"
                                                              numberOfStars={5}
                                                              starDimension='20px'
                                                              name='rating'
                                                              starSpacing='2px'
                                                            />
                                                 </span>
                            : <Link className="seller-link text-dark w-100"
                            to={`/profile/${this.state.item.seller_id}`}>
                                {this.state.item.seller_name}
                            </Link>
                        }

                                                 </div>


                        {this.state.itemType != "northeasternService" ?
                        <div>
                        <div className="col-12 mt-2">
                                                          <span>
                                                      <b className="item-condition-detail">
                                                         {this.state.item.conditionString}
                                                         </b>
                                                           </span>
                                                   </div>

                         <div className="col-12 mt-1">
                                                   <span>

                                                   <b className="item-quantity-detail">
                                                    {this.state.item.quantity} Left
                                                      </b>
                                                   </span>
                                                    </div>
                          </div>
                           :<div className="col-12 mt-2">
                              <span>
                              <b className="item-condition-detail">
                               Availability:
                                </b>
                                <span className="description-text"> {this.state.item.availability}
                                </span>

                                 </span>
                                </div>}

                        <div className="col-12 mt-3">
                                                <span>

                                                <b className="item-detail-price">
                                                {this.state.item.value ? this.constants.getItemPrice(this.state.item.value)
                                                : ""}</b>
                                                {this.state.itemType != "northeasternService" &&
                                                 <b className="ml-2 item-detail-shipping-cost">
                                                 Free Shipping </b>}

                                                 </span>
                                                </div>




                        <div className="col-12 mt-3">
                         <span className="description-text">  {this.state.item.description} </span>
                        </div>


                        <div className="row mt-4 container-fluid">
                        <div className="col-8 ml-0">

                        <button type="button" className="btn btn-success w-100">

                       {this.state.itemType == "ebay" ? <a className="text-white w-100" target="_blank" href={this.state.item.ebayUrl}>
                        Buy Now on ebay</a>
                       : <Link className="text-white w-100"
                       to={`/profile/${this.state.item.seller_id}`}>
                       Contact Seller </Link>}

                        </button>

                        </div>
                    {this.type != "northeasternService" &&
                        <div className="col-8 ml-0 mt-3">
                       <button type="button" className="btn btn-warning w-100">Bookmark</button>
                       </div>
                       }
                        </div>
                        </div>

                </div>
            {this.state.relatedItems.length > 0 &&
                <div className ="row h-25 w-100">
                <div className ="col-12 mt-3 mb-3">
                <b class="view-related-items-font"> View Related Items </b>

                </div>

                <div className="col-12 h-100 w-100">
                    <Carousel responsive={this.responsive} keyBoardControl={false}>
                      {this.state.relatedItems.map((item) => {
                         return(
                            <div>
                            <ItemCard
                            itemType={this.state.itemType}
                            item={item}
                            />
                            </div>
                        ) }
                         )

                      }
                    </Carousel>
                </div>

               </div>
               }

            </div>
        )

    }
}

export default ItemDetail