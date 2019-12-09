import React from 'react'
import {Link} from 'react-router-dom'
import Constants from '../constants/constants'

const ItemRow = ({item, index, loggedIn, userId, itemType, bookmarkIds, addBookmark, deleteBookmark, editItem, editService}) => {
    console.log(item)
var constants = Constants.getInstance()
    var itemAlreadyBookmarked = false;
    var itemOwner = false;
    var serviceOwner = false;
    if(itemType === "ebay") {
        itemAlreadyBookmarked = bookmarkIds.includes(item.itemId)
    } else if (itemType === "northeasternItem") {
        if(item.sellerId === userId) {
            itemOwner = true;
        }
        for(var i = 0; i < bookmarkIds.length; i++) {
            if (bookmarkIds[i].itemId === item.itemId) {
                itemAlreadyBookmarked = true;
                break;
            }
        }
    } else if (itemType === "northeasternService") {
        if(item.sellerId === userId) {
            serviceOwner = true;
        }
    }


return(
    <div className="my-auto">
        <div className="row">
            <div className={index === 0 ? "col-md-3 col-12 mt-3" : "col-md-3 col-12"}>
                <div className="detail-image table-image-width mx-auto my-auto">
                    <img src={constants.getImageSource(item, itemType)} className="mx-auto w-100"/>
                </div>
            </div>
            <div className="col-md-7 col-12 my-auto">
                <div className="row">
                    <div className="col-12 text-center text-md-left">
                        <Link to={`/details/${constants.itemTypeChar(itemType)}${item.itemId}`}>
                            <b className="item-name"> {item.title} </b></Link>
                    </div>
                    <div className="col-12 text-center text-md-left">
                        <span className="condition-text"> {item.conditionString} • {item.categoryName}</span>
                    </div>
                    <div className="col-12 text-center text-md-left">

           <a className="seller-link" href={loggedIn ? "https://www.ebay.com/usr/".concat(item.sellerId) : "/login"}>
                                {item.sellerId}
                            </a>
                    </div>
                    <div className="col-12 mt-1 text-center text-md-left">
                        <b className="price-string"> {constants.getItemPrice(item.value)}
                        </b>
                    </div>
                    <div className="col-12 text-center text-md-left">
                        <b className="shipping-cost"> {constants.getItemPrice(item.shippingCost)} Shipping </b>
                    </div>
                    <div className="col-12 text-center text-md-left">
                        <a href={item.ebayUrl}> <button type="button" className="btn btn-success">View On Ebay</button></a>
                        {loggedIn && !itemOwner && !itemAlreadyBookmarked && <button type="button" className="ml-2 btn btn-warning" onClick={() => addBookmark(item.itemId)}>Bookmark</button>}
                        {!loggedIn && <Link to="/login"><button type="button" className="ml-2 btn btn-warning">Bookmark</button></Link>}
                        {loggedIn && itemAlreadyBookmarked && <button type="button" className="ml-2 btn btn-danger" onClick={() => deleteBookmark(item.itemId)}>Unbookmark</button>}
                        {loggedIn && itemOwner && <button type="button" className="ml-2 btn btn-danger" onClick={() => editItem(item.itemId)}>Edit Item</button>}
                        {loggedIn && serviceOwner && <button type="button" className="ml-2 btn btn-danger" onClick={() => editService(item.id)}>Edit Service</button>}
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>

)

}

export default ItemRow