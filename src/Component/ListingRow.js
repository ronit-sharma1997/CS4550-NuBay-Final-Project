import React from 'react'
import Constants from '../constants/constants'
import {Link} from 'react-router-dom'

const ListingRow = ({item, itemType, listingType, viewOnly}) => {
    var constants = Constants.getInstance()
    var linkItem;
    if (listingType === "Bookmark") {
        if(itemType === "ebay") {
            linkItem = `/details/e${item.itemId}`
        } else {
            linkItem = `/details/i${item.itemId}`
        }
    } else if (listingType === "Listing") {
        if (itemType === "northeasternItem") {
            if (viewOnly) {
                linkItem = `/details/i${item.itemId}`
            } else {
            linkItem = `/editItem/${item.itemId}`
            }
        } else if (itemType === "northeasternService") {
            if (viewOnly) {
                linkItem = `/details/s${item.id}`
            } else {
                linkItem = `/editService/${item.id}`
            }
        }
    }
    let conditionText = itemType === "northeasternService" ? "" : `${item.conditionString} •`
    return (
        <div className="my-auto">
            <div className="row">
                <div className="col-md-3 col-12">
                    <div className="detail-image table-image-width">
                        {item && <img src={constants.getImageSource(item, itemType)} className="mx-auto w-100"/>}
                    </div>
                </div>
                <div className="col-md-7 col-12 my-auto">
                    <div className="row">
                        <div className="col-12">
                            {item && <Link to={linkItem}><b className="item-name"> {item.title} </b></Link>}
                        </div>
                        <div className="col-12">
                            {item &&
                            <span className="condition-text"> {conditionText} {item.categoryName}</span>}
                        </div>
                        {/*</Link>*/}
                    </div>
                </div>
                <div className="col-md-2 my-auto d-none d-md-block">
                    {item && <b className="price-string"> {constants.getItemPrice(item.value)}
                    </b>}
                </div>
            </div>
            <hr/>
        </div>
    )

}
export default ListingRow