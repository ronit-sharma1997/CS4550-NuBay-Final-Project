import React from 'react'
import {Link} from 'react-router-dom'
import Constants from '../constants/constants'

const ItemRow = ({item, myListing}) => {
var constants = Constants.getInstance()


return(
    <div className="row container-fluid">
        <div className ="col-2">
        <div className="detail-image table-image-width">
            <img src={item.galleryURL} className="mx-auto w-100"/>
            </div>
        </div>
    <div className="col-7">
    <div className="row">
    <div>
    {/*<Link to={`/item-detail/${item.itemId}`}>*/}
    <b className="item-name"> {item.title} </b>
    {/*</Link>*/}
    </div>
    </div>
        {!myListing && <div className="row">
     <span className="condition-text"> {item.condition} • {item.categoryName} </span>
    </div>}
        {!myListing && <div className="row">
    <a className="seller-link" href="#">
    {item.sellerName}
    </a>

    </div>}

        {!myListing && <div className="row mt-1">
       <b className="price-string"> {constants.getItemPrice(item.__value__)}
       </b>
    </div>}
        {!myListing && <div className="row">
    <b className="shipping-cost"> {constants.getItemPrice(item.shippingCost)} Shipping </b>
   </div>}
        {!myListing && <div className="row mt-1">
   <div className="justify-content-start ml-0 mr-1">
   <button type="button" class="btn btn-success">Contact Seller</button>
   </div>
   <div className="">
   <button type="button" class="btn btn-warning">Bookmark</button>
   </div>
   </div>}
</div>

    </div>
)

}

export default ItemRow