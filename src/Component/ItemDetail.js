import React, { Fragment } from 'react'
import NuBayService from '../services/NuBayService'
import ImageCarosel from './ImageCarosel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from './ItemCard'

class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.nuBayService = NuBayService.getInstance()
        this.setItem = this.setItem.bind(this);
        this.setRelatedItems = this.setRelatedItems.bind(this);
        this.responsive = {
               superLargeDesktop: {
                 // the naming can be any, depends on you.
                 breakpoint: { max: 4000, min: 3000 },
                 items: 5,
               },
               desktop: {
                 breakpoint: { max: 3000, min: 1024 },
                 items: 4,
               },
               tablet: {
                 breakpoint: { max: 1024, min: 464 },
                 items: 1,
               },
               mobile: {
                 breakpoint: { max: 464, min: 0 },
                 items: 1,
               },
             }
        this.images = [
                                           "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/XwYAAOSwofFbmx6N/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/FnoAAOSwHupbmx6a/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/IjwAAOSwGs9bmx6b/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTYwMFg2MTU=/z/cxYAAOSwVxdbmx6d/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/bvIAAOSwK3Zbmx6d/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTYwMFg1OTA=/z/OjQAAOSwIJtbmx6f/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/51UAAOSw12pbmx6i/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/EdIAAOSw4Qdbmx6k/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/2hEAAOSwvGdbmx6m/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTYwMFg2NDM=/z/kmUAAOSwHUlbmx6n/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/MTYwMFg2NDM=/z/1RMAAOSw8fJbmx6p/$_57.JPG?set_id=8800005007",
                                           "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/3CUAAOSwsTtbmx6q/$_57.JPG?set_id=8800005007"
                                       ]
        this.state = {
        item: {},
        relatedItems: []

        }

        if(props.match) {

        this.nuBayService.getEbayItemById(props.match.params.id, this.setItem)
}
    }

    setItem(item) {
    this.nuBayService.getEbayItemByCategory(item.categoryId, this.setRelatedItems)
        this.setState(prevState => ({
          ...prevState,
          item: item
        }))
      }

    setRelatedItems(items) {
    debugger;
    this.setState(prevState => ({
              ...prevState,
              relatedItems: items
            }))
    }

    render() {
        return (
            <div class="container-fluid">
                <div className="row">
                    <button
                        className="btn btn-secondary"
                        onClick={() => { this.props.setItemIdFunc(0) }}
                    >
                        Back to List
                        </button>

                </div>
                <div className="row">
                    <div className="col-5 detail-image h-25 mh-25">
                        <ImageCarosel images={this.state.item.imageUrl ? this.state.item.imageUrl
                        : []} />
                    </div>
                    <div className="col-7">
                        <div className="item-detail-next-to-image">
                            <b className="item-title">{ this.state.item.title ? this.state.item.title : "" } </b>
                        </div>

                        <div className="row detail-image container-fluid">
                        <div className="col-12">
                        <span>
                            <span className="condition-type-font">Seller: </span>
                            <a href="#">
                            <b className="price-title-font text-dark ml-2">
                            {this.state.item.sellerId}
                            </b>
                            </a>
                         </span>
                         </div>
                         <div className="col-12">
                            <span>
                               <span className="condition-type-font">Category: </span>
                                 <b className="price-title-font ml-2">
                                 {this.state.item.categoryName}
                                    </b>
                                    </span>
                                   </div>
                         <div className="col-12">
                         <span>
                          <span className="condition-type-font">Condition: </span>
                          <b className="price-title-font ml-2">
                            {this.state.item.conditionString}
                             </b>
                        </span>
                         </div>
                        </div>
                        <div className="row detail-image container-fluid">
                        <div className="col-12">
                            <span>
                                <b className="price-title-font"> Price: </b>
                                <span className="price-font"> {this.state.item.value ? this.state.item.value : ""} </span>
                            </span>
                            </div>
                        <div className="col-8 ml-0">
                        <button type="button" className="btn btn-success w-100">Buy Now on eBay</button>
                        </div>
                        <div className="col-8 ml-0 mt-3">
                       <button type="button" className="btn btn-warning w-100">Add to Cart</button>
                       </div>
                        </div>
                        </div>

                </div>

                <div className ="row h-25 w-100">
                <div className ="col-12 mt-3 mb-3">
                <h3> View Related Items </h3>

                </div>
                <div className="col-12 h-100 w-100">
                    <Carousel responsive={this.responsive}>
                      {this.state.relatedItems.map((item) => {
                         return(
                            <div>
                            <ItemCard
                            item={item}
                            />
                            </div>
                        ) }
                         )

                      }
                    </Carousel>
                </div>
               </div>

            </div>
        )

    }
}

export default ItemDetail